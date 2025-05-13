import { FC } from 'react';
import { BaseListItem } from '../BaseListItem';
import CodeIcon from '@mui/icons-material/Code';
import { Service } from '../../../Models/Config/Config';
import { ServiceTagsLabel } from '../../Labels/Config/ServiceTagsLabel';

type Props = {
  service: Service;
  selected: boolean;
  onSelectService: (service: Service) => void;
};

export const ServiceSelectionListItem: FC<Props> = ({ service, selected, onSelectService }) => {
  const onSelect = () => onSelectService(service);

  return (
    <BaseListItem
      dense
      icon={<CodeIcon fontSize={'small'} />}
      label={<ServiceTagsLabel service={service} />}
      title={service.name}
      subtitle={service.host}
      onClick={onSelect}
      selected={selected}
    />
  );
};
