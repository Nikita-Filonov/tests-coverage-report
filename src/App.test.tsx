import { fireEvent, render, screen, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './App';
import { embedState, makeState } from './TestUtils/State';

const renderReport = () => {
  embedState(makeState());
  return render(<App />);
};
const usersWidget = () => screen.getByText('api.Users', { selector: 'h6' }).closest('.MuiPaper-root') as HTMLElement;

// Full UI interactions render real charts and dialogs and need extra time on CI runners.
describe('report interactions', { timeout: 10_000 }, () => {
  it('loads an embedded report, toggles theme, searches services and selects one without coverage', async () => {
    const user = userEvent.setup();
    renderReport();
    expect(screen.getByText('75% / 100%')).toBeInTheDocument();
    expect(screen.getByText('Service host: alpha.example.com:443')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Toggle theme' }));
    expect(screen.getByTestId('LightModeOutlinedIcon')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Toggle theme' }));
    expect(screen.getByTestId('DarkModeOutlinedIcon')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Alpha' }));
    const search = screen.getByPlaceholderText('Search by name');
    await user.type(search, 'BETA');
    expect(screen.queryByText('alpha.example.com:443')).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /Beta/ }));
    expect(await screen.findByText('Empty logical services')).toBeInTheDocument();
    expect(screen.getByText('0% / 100%')).toBeInTheDocument();
    expect(screen.queryByPlaceholderText('Search by name')).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Beta' }));
    await user.keyboard('{Escape}');
    expect(await screen.findByRole('button', { name: 'Toggle theme' })).toBeVisible();
  });

  it('searches and sorts logical services and scrolls to their method widget', async () => {
    const user = userEvent.setup();
    renderReport();
    const table = screen.getAllByRole('table')[0];
    const serviceNames = () =>
      within(table)
        .getAllByRole('row')
        .slice(1)
        .map((row) => within(row).getAllByRole('cell')[0].textContent);
    await user.click(within(table).getByText('Logical service'));
    expect(serviceNames()).toEqual(['api.Users', 'api.Empty']);
    await user.click(within(table).getByText('Logical service'));
    expect(serviceNames()).toEqual(['api.Empty', 'api.Users']);
    await user.type(screen.getByPlaceholderText('Search by logical service name'), 'USERS');
    expect(serviceNames()).toEqual(['api.Users']);
    await user.click(
      within(screen.getByPlaceholderText('Search by logical service name').closest('.MuiInputBase-root')!).getByRole(
        'button',
        { name: 'Clear search' }
      )
    );
    expect(serviceNames()).toHaveLength(2);
    const scroll = vi.fn();
    usersWidget().scrollIntoView = scroll;
    await user.click(screen.getByRole('button', { name: 'Scroll to api.Users' }));
    expect(scroll).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
    usersWidget().removeAttribute('id');
    await user.click(screen.getByRole('button', { name: 'Scroll to api.Users' }));
    expect(scroll).toHaveBeenCalledOnce();
  });

  it('filters methods by coverage and deprecation and resets filters', async () => {
    const user = userEvent.setup();
    renderReport();
    await user.click(screen.getByRole('button', { name: 'Filter api.Users methods' }));
    const dialog = within(screen.getByRole('dialog'));
    for (const name of ['Show covered', 'Show uncovered', 'Show deprecated', 'Show active']) {
      await user.click(dialog.getByRole('checkbox', { name }));
    }
    await user.click(dialog.getByRole('button', { name: 'Close dialog' }));
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    expect(within(usersWidget()).getByText('Total results: 0')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Filter api.Users methods' }));
    await user.click(screen.getByRole('button', { name: 'Clear all' }));
    expect(screen.getAllByRole('checkbox').every((input) => (input as HTMLInputElement).checked)).toBe(true);
    await user.click(screen.getByRole('button', { name: 'Cancel' }));
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    expect(within(usersWidget()).getByText('Total results: 4')).toBeInTheDocument();
  });

  it('searches and sorts methods and disables details for uncovered methods', async () => {
    const user = userEvent.setup();
    renderReport();
    const search = within(usersWidget()).getByPlaceholderText('Search by method name');
    await user.type(search, 'GETUSER');
    expect(within(usersWidget()).getByText('Total results: 1')).toBeInTheDocument();
    await user.click(within(usersWidget()).getByRole('button', { name: 'Clear search' }));
    expect(within(usersWidget()).getByText('Total results: 4')).toBeInTheDocument();
    const table = within(usersWidget()).getByRole('table');
    await user.click(within(table).getByText('Method'));
    expect(within(table).getAllByRole('row')[1]).toHaveTextContent('OldDelete');
    await user.click(within(table).getByText('Method'));
    expect(within(table).getAllByRole('row')[1]).toHaveTextContent('DeleteUser');
    expect(screen.getByRole('button', { name: 'View DeleteUser details' })).toBeDisabled();
  });

  it('opens method details, displays parameter and service history and handles methods without parameters', async () => {
    const user = userEvent.setup();
    renderReport();
    await user.click(screen.getByRole('button', { name: 'View GetUser details' }));
    const dialog = screen.getByRole('dialog');
    expect(within(dialog).getByText('Total covered cases: 3')).toBeInTheDocument();
    expect(within(dialog).getByText('api.GetUserRequest')).toBeInTheDocument();
    for (const tab of within(dialog).getAllByRole('tab', { name: 'History' })) {
      await user.click(tab);
    }
    expect(within(dialog).getAllByText('Parameters total coverage history')).toHaveLength(2);
    await user.keyboard('{Escape}');
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    await user.click(screen.getByRole('button', { name: 'View Legacy details' }));
    expect(screen.getAllByText('Empty parameters')).toHaveLength(2);
    expect(screen.getByText('Deprecated: yes')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Cancel' }));
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    await user.click(within(usersWidget()).getByRole('tab', { name: 'History' }));
    expect(screen.getByText('Logical service total coverage history')).toBeInTheDocument();
    await user.click(within(usersWidget()).getByRole('tab', { name: 'Coverage' }));
    const emptyWidget = screen.getByText('api.Empty', { selector: 'h6' }).closest('.MuiPaper-root')!;
    fireEvent.click(within(emptyWidget as HTMLElement).getByRole('tab', { name: 'History' }));
    expect(screen.getByText('Logical service total coverage history')).toBeInTheDocument();
  });

  it('renders a report without an embedded state and an empty service selector', async () => {
    const user = userEvent.setup();
    render(<App />);
    expect(screen.getByText('Empty logical services')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Service not selected' }));
    expect(screen.getByText('Empty services')).toBeInTheDocument();
  });
});
