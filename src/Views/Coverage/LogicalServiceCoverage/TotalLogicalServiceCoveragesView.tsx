import { useInitialState } from '../../../Providers/InitialStateProvider';
import { WidgetView } from '../../../Components/Views/WidgetView';
import { LogicalServiceCoveragesTable } from '../../../Components/Tables/Coverage/LogicalServiceCoverage/LogicalServiceCoveragesTable';
import { SearchView } from '../../../Components/Views/SearchView';
import { useMemo, useState } from 'react';

export const TotalLogicalServiceCoveragesView = () => {
  const { logicalServicesCoverage } = useInitialState();
  const [search, setSearch] = useState('');

  const coverages = useMemo(
    () =>
      logicalServicesCoverage.filter((coverage) =>
        coverage.logicalService.toLowerCase().includes(search.toLowerCase())
      ),
    [search, logicalServicesCoverage]
  );

  return (
    <WidgetView sx={{ mt: 3 }} title={'Total logical service coverages'}>
      <SearchView
        search={search}
        setSearch={setSearch}
        placeholder={'Search by logical service name'}
        totalResults={coverages.length}
      />
      <LogicalServiceCoveragesTable coverages={coverages} />
    </WidgetView>
  );
};
