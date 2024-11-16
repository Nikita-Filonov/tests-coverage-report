import { WidgetView } from '../../../Components/Views/WidgetView';
import { LogicalServiceCoverage } from '../../../Models/Coverage/LogicalServiceCoverage';
import { FC, useState } from 'react';
import { LogicalServiceCoverageProgress } from '../../../Components/Progress/Coverage/LogicalServiceCoverageProgress';
import { MethodCoverageDetailsModal } from '../../../Components/Modals/Coverage/MethodCoverageDetailsModal';
import { MethodCoverage } from '../../../Models/Coverage/MethodCoverage';
import { useMethodCoverages } from '../../../Providers/MethodCoveragesProvider';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { useMethodCoveragesFilters } from '../../../Providers/MethodCoveragesFiltersProvider';
import { MethodCoveragesFiltersModal } from '../../../Components/Modals/Coverage/MethodCoveragesFiltersModal';
import { countNotNullValues } from '../../../Services/Core/Utils';
import { MethodCoveragesTable } from '../../../Components/Tables/Coverage/MethodCoverage/MethodCoveragesTable';
import { BaseTabs } from '../../../Components/Tabs/BaseTabs';
import { CoverageHistoryChartView } from '../../History/CoverageHistoryChartView';

type LogicalServiceCoverageViewProps = {
  coverage: LogicalServiceCoverage;
};

export const LogicalServiceCoverageView: FC<LogicalServiceCoverageViewProps> = (props) => {
  const { coverage } = props;
  const { setMethodCoverage } = useMethodCoverages();
  const { filters, filteredCoverages } = useMethodCoveragesFilters();
  const [methodCoverageDetailsModal, setMethodCoverageDetailsModal] = useState(false);
  const [methodCoveragesFiltersModal, setMethodCoveragesFiltersModal] = useState(false);

  const onMethodCoverageDetails = (coverage: MethodCoverage) => {
    setMethodCoverage(coverage);
    setMethodCoverageDetailsModal(true);
  };

  const onMethodCoveragesFilters = () => setMethodCoveragesFiltersModal(true);

  return (
    <WidgetView
      sx={{ mt: 3 }}
      title={coverage.logicalService}
      actions={[
        { content: <LogicalServiceCoverageProgress value={coverage?.totalCoverage || 0} /> },
        {
          icon: <FilterAltOutlinedIcon />,
          onClick: onMethodCoveragesFilters,
          badgeContent: countNotNullValues(filters)
        }
      ]}>
      <BaseTabs
        tabs={[
          {
            label: 'Coverage',
            content: (
              <MethodCoveragesTable coverages={filteredCoverages} onMethodCoverageDetails={onMethodCoverageDetails} />
            )
          },
          {
            label: 'History',
            content: (
              <CoverageHistoryChartView
                title={'Logical service total coverage history'}
                history={coverage?.totalCoverageHistory || []}
              />
            )
          }
        ]}
      />
      <MethodCoverageDetailsModal modal={methodCoverageDetailsModal} setModal={setMethodCoverageDetailsModal} />
      <MethodCoveragesFiltersModal modal={methodCoveragesFiltersModal} setModal={setMethodCoveragesFiltersModal} />
    </WidgetView>
  );
};
