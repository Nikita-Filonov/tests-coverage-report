import { BaseModal } from '../BaseModal';
import { FC } from 'react';
import { ServicesSettingsView } from '../../../Views/Config/ServicesSettingsView';

type SettingsModalProps = {
  modal: boolean;
  setModal: (modal: boolean) => void;
};

export const SettingsModal: FC<SettingsModalProps> = ({ modal, setModal }) => {
  return (
    <BaseModal title={'Settings'} modal={modal} setModal={setModal}>
      <ServicesSettingsView />
    </BaseModal>
  );
};
