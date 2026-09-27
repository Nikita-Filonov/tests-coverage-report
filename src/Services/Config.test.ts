import { SettingsManager } from './Config';
afterEach(() => {
  vi.unstubAllEnvs();
  SettingsManager.setup();
});
it('reads the public Vite settings', () => {
  vi.stubEnv('VITE_REPOSITORY_URL', 'https://example.com/report');
  vi.stubEnv('VITE_API_DATE_FORMAT', 'DD/MM/YYYY');
  vi.stubEnv('VITE_API_TIME_FORMAT', 'HH:mm');
  SettingsManager.setup();
  expect(SettingsManager.repositoryUrl).toBe('https://example.com/report');
  expect(SettingsManager.apiDateFormat).toBe('DD/MM/YYYY');
  expect(SettingsManager.apiTimeFormat).toBe('HH:mm');
  expect(SettingsManager.apiDateTimeFormat).toBe('DD/MM/YYYY HH:mm');
  expect(SettingsManager.getStaticFileUrl('logo.png')).toBe('https://example.com/report/main/static/logo.png');
});
it('has usable defaults without an env file', () => {
  for (const key of ['VITE_REPOSITORY_URL', 'VITE_API_DATE_FORMAT', 'VITE_API_TIME_FORMAT']) vi.stubEnv(key, '');
  SettingsManager.setup();
  expect(SettingsManager.repositoryUrl).toContain('tests-coverage-report');
  expect(SettingsManager.apiDateTimeFormat).toBe('YYYY-MM-DD HH:mm:ss');
});
