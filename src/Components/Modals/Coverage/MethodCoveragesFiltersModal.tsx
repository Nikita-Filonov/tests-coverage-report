import { BaseModal } from '../BaseModal';
import { FC } from 'react';
import { Button } from '@mui/material';
import { useMethodCoveragesFilters } from '../../../Providers/MethodCoveragesFiltersProvider';
import { MethodCoverageFiltersView } from '../../../Views/Coverage/MethodCoverage/MethodCoverageFiltersView';
import { MethodCoverageDeprecationView } from '../../../Views/Coverage/MethodCoverage/MethodCoverageDeprecationView';

type MethodCoveragesFiltersModalProps = {
  modal: boolean;
  setModal: (modal: boolean) => void;
};

export const MethodCoveragesFiltersModal: FC<MethodCoveragesFiltersModalProps> = (props) => {
  const { modal, setModal } = props;
  const { clearAllFilters } = useMethodCoveragesFilters();

  return (
    <BaseModal title={'Method coverage filters'} modal={modal} setModal={setModal}>
      <MethodCoverageFiltersView />
      <MethodCoverageDeprecationView />
      <Button sx={{ mt: 3 }} size={'small'} variant={'outlined'} onClick={clearAllFilters}>
        Clear all
      </Button>
    </BaseModal>
  );
};
