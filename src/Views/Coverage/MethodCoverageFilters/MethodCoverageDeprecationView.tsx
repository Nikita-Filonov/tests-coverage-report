import { BaseCheckbox } from '../../../Components/Checkboxes/BaseCheckbox';
import { BoxView } from '../../../Components/Views/BoxView';
import { useMethodCoveragesFilters } from '../../../Providers/MethodCoveragesFiltersProvider';

export const MethodCoverageDeprecationView = () => {
  const { filters, setFilters } = useMethodCoveragesFilters();

  const onShowDeprecated = (showDeprecated: boolean) => setFilters({ ...filters, showDeprecated });

  const onShowNotDeprecated = (showNotDeprecated: boolean) => setFilters({ ...filters, showNotDeprecated });

  return (
    <BoxView title={'Method deprecation'}>
      <BaseCheckbox label={'Show deprecated'} checked={filters.showDeprecated} onChange={onShowDeprecated} />
      <BaseCheckbox label={'Show active'} checked={filters.showNotDeprecated} onChange={onShowNotDeprecated} />
    </BoxView>
  );
};
