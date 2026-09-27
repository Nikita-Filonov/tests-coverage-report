import { getCoverageColor, getLogicalServiceCoverageWidgetId } from './Coverage/Utils';
import { countNotNullValues } from './Core/Utils';
import { getActionMarginRight } from './Views/Utils';
import { dateTimeValueFormatter } from './Charts/Utils';
import { SettingsManager } from './Config';

it.each([
  [0, 'error'],
  [29, 'error'],
  [30, 'warning'],
  [59, 'warning'],
  [60, 'success'],
  [100, 'success']
])('maps coverage %s to %s', (value, color) => {
  expect(getCoverageColor(Number(value))).toBe(color);
});
it('builds stable widget anchors', () => {
  expect(getLogicalServiceCoverageWidgetId('api.Users')).toBe('api.Users-widget');
});
it('counts enabled filters', () => {
  expect(countNotNullValues({ a: true, b: false, c: null, d: 0, e: 'enabled' })).toBe(2);
});
it('applies margins except after the last action', () => {
  expect(getActionMarginRight({ index: 0, actions: [1, 2], margin: 2 })).toBe(2);
  expect(getActionMarginRight({ index: 1, actions: [1, 2], margin: 2 })).toBe(0);
  expect(getActionMarginRight({ index: 0, margin: 2 })).toBe(2);
});
it('formats dates according to public settings', () => {
  vi.stubEnv('VITE_API_DATE_FORMAT', 'YYYY-MM-DD');
  vi.stubEnv('VITE_API_TIME_FORMAT', 'HH:mm:ss');
  SettingsManager.setup();
  expect(dateTimeValueFormatter(new Date(2026, 8, 26, 10, 30))).toBe('2026-09-26 10:30:00');
  vi.unstubAllEnvs();
  SettingsManager.setup();
});
