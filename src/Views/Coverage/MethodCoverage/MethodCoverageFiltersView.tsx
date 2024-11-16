import { BaseCheckbox } from '../../../Components/Checkboxes/BaseCheckbox';
import { BoxView } from '../../../Components/Views/BoxView';
import { useMethodCoveragesFilters } from '../../../Providers/MethodCoveragesFiltersProvider';

export const MethodCoverageFiltersView = () => {
  const { filters, setFilters } = useMethodCoveragesFilters();

  const onShowCovered = (showCovered: boolean) => setFilters({ ...filters, showCovered });

  const onShowNotCovered = (showNotCovered: boolean) => setFilters({ ...filters, showNotCovered });

  return (
    <BoxView title={'Method coverage'} containerSx={{ mt: 0 }}>
      <BaseCheckbox label={'Show covered'} checked={filters.showCovered} onChange={onShowCovered} />
      <BaseCheckbox label={'Show uncovered'} checked={filters.showNotCovered} onChange={onShowNotCovered} />
    </BoxView>
  );
};
