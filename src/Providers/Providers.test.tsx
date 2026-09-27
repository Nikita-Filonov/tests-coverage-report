import { act, renderHook } from '@testing-library/react';
import { InitialStateProvider, useInitialState } from './InitialStateProvider';
import { MethodCoveragesProvider, useMethodCoverages } from './MethodCoveragesProvider';
import { MethodCoveragesFiltersProvider, useMethodCoveragesFilters } from './MethodCoveragesFiltersProvider';
import { ThemeProvider, useTheme } from './ThemeProvider';
import { embedState, makeState, makeMethod, services } from '../TestUtils/State';

it('selects the first covered service and switches to one without results', () => {
  const state = makeState();
  state.config.services = [services[1], services[0]];
  embedState(state);
  const { result } = renderHook(useInitialState, { wrapper: InitialStateProvider });
  expect(result.current.service.key).toBe('alpha');
  expect(result.current.createdAt).toBe(state.createdAt);
  expect(result.current.logicalServicesCoverage).toHaveLength(2);
  act(() => result.current.setService(services[1]));
  expect(result.current.serviceCoverage).toEqual({ totalCoverage: 0 });
  expect(result.current.logicalServicesCoverage).toEqual([]);
});
it('handles an empty report and uncovered services', () => {
  const { result, unmount } = renderHook(useInitialState, { wrapper: InitialStateProvider });
  expect(result.current.services).toEqual([]);
  unmount();
  const state = makeState();
  state.serviceCoverages.alpha.totalCoverage = 0;
  embedState(state);
  const hook = renderHook(useInitialState, { wrapper: InitialStateProvider });
  expect(hook.result.current.service.key).toBe('');
});
it('updates the selected method', () => {
  const { result } = renderHook(useMethodCoverages, { wrapper: MethodCoveragesProvider });
  expect(result.current.methodCoverage.method).toBe('');
  const method = makeMethod();
  act(() => result.current.setMethodCoverage(method));
  expect(result.current.methodCoverage).toEqual(method);
});
it('toggles the light and dark themes', () => {
  const { result } = renderHook(useTheme, { wrapper: ThemeProvider });
  expect(result.current.themeMode).toBe('light');
  act(() => result.current.onThemeMode());
  expect(result.current.themeMode).toBe('dark');
  act(() => result.current.onThemeMode());
  expect(result.current.themeMode).toBe('light');
});
it('combines coverage and deprecation filters and resets them', () => {
  let methods = makeState().logicalServiceCoverages.alpha[0].methods!;
  const { result, rerender } = renderHook(useMethodCoveragesFilters, {
    wrapper: ({ children }) => (
      <MethodCoveragesFiltersProvider coverages={methods}>{children}</MethodCoveragesFiltersProvider>
    )
  });
  expect(result.current.filteredCoverages).toHaveLength(4);
  act(() => result.current.setFilters({ ...result.current.filters, showNotCovered: false, showDeprecated: false }));
  expect(result.current.filteredCoverages.map((x) => x.method)).toEqual(['GetUser']);
  act(() => result.current.setFilters({ ...result.current.filters, showCovered: false }));
  expect(result.current.filteredCoverages).toEqual([]);
  act(() => result.current.clearAllFilters());
  expect(result.current.filteredCoverages).toHaveLength(4);
  methods = [];
  rerender();
  expect(result.current.filteredCoverages).toEqual([]);
});
it.each([useInitialState, useMethodCoverages, useMethodCoveragesFilters, useTheme])(
  'rejects use outside a provider',
  (hook) => {
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
    expect(() => renderHook<unknown, unknown>(hook)).toThrow(/called outside/);
  }
);
