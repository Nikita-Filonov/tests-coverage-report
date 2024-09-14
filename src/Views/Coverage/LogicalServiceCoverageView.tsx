import { WidgetView } from '../../Components/Views/WidgetView';
import { LogicalServiceCoverage } from '../../Models/Coverage/LogicalServiceCoverage';
import { FC, useState } from 'react';
import { MethodCoveragesTable } from '../../Components/Tables/Coverage/MethodCoverage/MethodCoveragesTable';
import { LogicalServiceCoverageProgress } from '../../Components/Progress/Coverage/LogicalServiceCoverageProgress';
import { MethodCoverageDetailsModal } from '../../Components/Modals/Coverage/MethodCoverageDetailsModal';
import { MethodCoverage } from '../../Models/Coverage/MethodCoverage';
import { useMethodCoverages } from '../../Providers/MethodCoveragesProvider';

type LogicalServiceCoverageViewProps = {
  coverage: LogicalServiceCoverage;
};

export const LogicalServiceCoverageView: FC<LogicalServiceCoverageViewProps> = (props) => {
  const { coverage } = props;
  const { setMethodCoverage } = useMethodCoverages();
  const [methodCoverageDetails, setMethodCoverageDetails] = useState(false);

  const onMethodCoverageDetails = (coverage: MethodCoverage) => {
    setMethodCoverage(coverage);
    setMethodCoverageDetails(true);
  };

  return (
    <WidgetView
      sx={{ mt: 3 }}
      title={coverage.logicalService}
      label={<LogicalServiceCoverageProgress value={coverage.totalCoverage} />}>
      <MethodCoveragesTable coverages={coverage.methods} onMethodCoverageDetails={onMethodCoverageDetails} />
      <MethodCoverageDetailsModal modal={methodCoverageDetails} setModal={setMethodCoverageDetails} />
    </WidgetView>
  );
};
