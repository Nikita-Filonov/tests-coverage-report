import { PropsWithChildren } from 'react';
import { ThemeProvider } from '../Providers/ThemeProvider';
import { InitialStateProvider } from '../Providers/InitialStateProvider';
import { MethodCoveragesProvider } from '../Providers/MethodCoveragesProvider';
import { InitialState } from '../State/Controllers';
import { MethodCoverage } from '../Models/Coverage/MethodCoverage';

export const makeMethod = (overrides: Partial<MethodCoverage> = {}): MethodCoverage => ({
  method: 'GetUser',
  covered: true,
  deprecated: false,
  totalCases: 3,
  requestCoverage: {
    name: 'api.GetUserRequest',
    totalCoverage: 67,
    totalParameters: 3,
    totalCoveredParameters: 2,
    parametersCoverage: [
      {
        parameter: 'user',
        covered: true,
        hasUncoveredParameters: true,
        parameters: [
          { parameter: 'name', covered: true },
          { parameter: 'legacy', deprecated: true }
        ]
      }
    ],
    totalCoverageHistory: [{ createdAt: '2026-09-26T10:30:00Z', totalCoverage: 67 }]
  },
  responseCoverage: {
    name: 'api.GetUserResponse',
    totalCoverage: 100,
    totalParameters: 1,
    totalCoveredParameters: 1,
    parametersCoverage: [{ parameter: 'id', covered: true }]
  },
  ...overrides
});
export const services = [
  {
    key: 'alpha',
    name: 'Alpha',
    host: 'alpha.example.com:443',
    repository: 'https://example.com/alpha',
    tags: ['smoke']
  },
  { key: 'beta', name: 'Beta', host: 'beta.example.com:443', repository: '', tags: [] }
];
export const makeState = (): InitialState => ({
  config: { services },
  createdAt: '2026-09-26T10:30:00Z',
  serviceCoverages: {
    alpha: { totalCoverage: 75, totalCoverageHistory: [{ createdAt: '2026-09-26T10:30:00Z', totalCoverage: 75 }] }
  },
  logicalServiceCoverages: {
    alpha: [
      {
        logicalService: 'api.Users',
        totalMethods: 4,
        totalCoveredMethods: 2,
        totalCoverage: 50,
        totalCoverageHistory: [{ createdAt: '2026-09-26T10:30:00Z', totalCoverage: 50 }],
        methods: [
          makeMethod(),
          makeMethod({ method: 'Legacy', deprecated: true, requestCoverage: undefined, responseCoverage: undefined }),
          makeMethod({ method: 'DeleteUser', covered: false, totalCases: 0 }),
          makeMethod({ method: 'OldDelete', covered: false, deprecated: true, totalCases: 0 })
        ]
      },
      { logicalService: 'api.Empty' }
    ]
  }
});
export const embedState = (state: InitialState | string) => {
  document.getElementById('state')?.remove();
  const script = document.createElement('script');
  script.id = 'state';
  script.type = 'application/json';
  script.textContent = typeof state === 'string' ? state : JSON.stringify(state);
  document.body.appendChild(script);
};
export const ReportProviders = ({ children }: PropsWithChildren) => (
  <ThemeProvider>
    <InitialStateProvider>
      <MethodCoveragesProvider>{children}</MethodCoveragesProvider>
    </InitialStateProvider>
  </ThemeProvider>
);
