import { MethodCoverage } from '../../../Models/Coverage/MethodCoverage';
import { FC, Fragment, useMemo, useState } from 'react';
import { MethodCoveragesTable } from '../../../Components/Tables/Coverage/MethodCoverage/MethodCoveragesTable';
import { SearchView } from '../../../Components/Views/SearchView';

type MethodCoveragesViewProps = {
  coverages: MethodCoverage[];
  onMethodCoverageDetails: (coverage: MethodCoverage) => void;
};

export const MethodCoveragesView: FC<MethodCoveragesViewProps> = (props) => {
  const { coverages, onMethodCoverageDetails } = props;
  const [search, setSearch] = useState('');

  const filteredCoverages = useMemo(
    () => coverages.filter((coverage) => coverage.method.toLowerCase().includes(search.toLowerCase())),
    [search, coverages]
  );

  return (
    <Fragment>
      <SearchView
        search={search}
        setSearch={setSearch}
        placeholder={'Search by method name'}
        totalResults={filteredCoverages.length}
      />
      <MethodCoveragesTable coverages={filteredCoverages} onMethodCoverageDetails={onMethodCoverageDetails} />
    </Fragment>
  );
};
