import { render, screen } from '@testing-library/react';
import { MethodCoverageView } from './MethodCoverageView';
import { makeMethod } from '../../../TestUtils/State';

it('shows zero cases when a method has no cases count', () => {
  render(<MethodCoverageView coverage={makeMethod({ totalCases: undefined })} />);
  expect(screen.getByText('Total covered cases: 0')).toBeInTheDocument();
});
