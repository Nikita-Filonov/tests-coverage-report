import { StrictMode } from 'react';
import { App } from './App';

const { renderRoot, createRoot } = vi.hoisted(() => {
  const renderRoot = vi.fn();
  return { renderRoot, createRoot: vi.fn(() => ({ render: renderRoot })) };
});
vi.mock('react-dom/client', () => ({ createRoot }));

it('mounts the application in StrictMode into the report root', async () => {
  const root = document.createElement('div');
  root.id = 'root';
  document.body.append(root);
  await import('./index');
  expect(createRoot).toHaveBeenCalledWith(root);
  expect(renderRoot).toHaveBeenCalledWith(
    <StrictMode>
      <App />
    </StrictMode>
  );
  root.remove();
});
