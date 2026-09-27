import { render, screen, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ParameterCoveragesTreeView } from './ParameterCoveragesTreeView';
import { makeMethod } from '../../../TestUtils/State';

it('expands nested parameters, keeps expansion on rerender and copies a full path without collapsing', async () => {
  const user = userEvent.setup({ skipHover: true });
  const copy = vi.spyOn(navigator.clipboard, 'writeText').mockResolvedValue();
  const coverages = makeMethod().requestCoverage!.parametersCoverage!;
  const { rerender } = render(<ParameterCoveragesTreeView coverages={coverages} />);
  const root = screen.getByRole('treeitem', { name: 'user' });
  await user.click(within(root).getByText('user'));
  expect(screen.getByRole('treeitem', { name: 'legacy (deprecated)' })).toBeVisible();
  rerender(<ParameterCoveragesTreeView coverages={structuredClone(coverages)} />);
  expect(screen.getByRole('treeitem', { name: 'name' })).toBeVisible();
  await user.hover(screen.getByText('name'));
  await user.click(screen.getByRole('button', { name: 'Copy user.name' }));
  expect(copy).toHaveBeenCalledWith('user.name');
  expect(screen.getByText('legacy (deprecated)')).toBeVisible();
  await user.unhover(screen.getByText('name'));
  expect(screen.queryByRole('button', { name: 'Copy user.name' })).not.toBeInTheDocument();
  await user.click(screen.getByText('user'));
  await waitFor(() => expect(screen.queryByRole('treeitem', { name: 'name' })).not.toBeInTheDocument());
});
