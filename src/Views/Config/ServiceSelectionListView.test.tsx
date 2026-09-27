import { fireEvent, render, screen } from '@testing-library/react';
import { ServiceSelectionListView } from './ServiceSelectionListView';
import { embedState, makeState, ReportProviders } from '../../TestUtils/State';

it('selects a service without a popover callback', () => {
  embedState(makeState());
  render(<ServiceSelectionListView />, { wrapper: ReportProviders });
  const beta = screen.getByRole('button', { name: /Beta/ });
  fireEvent.click(beta);
  expect(beta).toHaveClass('Mui-selected');
});
