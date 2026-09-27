import { fireEvent, render, screen } from '@testing-library/react';
import { BaseListItem } from './BaseListItem';

it('renders an optional avatar and menu and handles selection without an icon', () => {
  const select = vi.fn();
  render(
    <ul>
      <BaseListItem
        title="Service"
        subtitle="Host"
        avatar={<span>Avatar</span>}
        menu={<span>Menu</span>}
        onClick={select}
      />
    </ul>
  );
  expect(screen.getByText('Avatar')).toBeInTheDocument();
  expect(screen.getByText('Menu')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /Service/ }));
  expect(select).toHaveBeenCalledOnce();
});
