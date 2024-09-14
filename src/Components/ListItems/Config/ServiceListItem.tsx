import { FC } from 'react';
import { BaseListItem } from '../BaseListItem';
import CodeIcon from '@mui/icons-material/Code';
import { Service } from '../../../Models/Config/Config';

type ServiceListItemProps = {
  service: Service;
  selected: boolean;
  onSelectService: (service: Service) => void;
};

export const ServiceListItem: FC<ServiceListItemProps> = ({ service, selected, onSelectService }) => {
  const onSelect = () => onSelectService(service);

  return (
    <BaseListItem
      icon={<CodeIcon fontSize={'small'} />}
      title={service.name}
      subtitle={service.host}
      onClick={onSelect}
      selected={selected}
    />
  );
};
