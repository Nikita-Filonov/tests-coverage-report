import { BaseModal } from '../BaseModal';
import { FC } from 'react';
import { useMethodCoverages } from '../../../Providers/MethodCoveragesProvider';
import { MethodCoverageView } from '../../../Views/Coverage/MethodCoverage/MethodCoverageView';
import { MethodRequestCoverageView } from '../../../Views/Coverage/MethodCoverage/MethodRequestCoverageView';

type MethodCoverageDetailsModalProps = {
  modal: boolean;
  setModal: (modal: boolean) => void;
};

export const MethodCoverageDetailsModal: FC<MethodCoverageDetailsModalProps> = (props) => {
  const { modal, setModal } = props;
  const { methodCoverage } = useMethodCoverages();

  return (
    <BaseModal maxWidth={'lg'} title={'Method coverage details'} modal={modal} setModal={setModal}>
      <MethodCoverageView coverage={methodCoverage} />
      <MethodRequestCoverageView coverage={methodCoverage.requestCoverage} />
      <MethodRequestCoverageView coverage={methodCoverage.responseCoverage} />
    </BaseModal>
  );
};
