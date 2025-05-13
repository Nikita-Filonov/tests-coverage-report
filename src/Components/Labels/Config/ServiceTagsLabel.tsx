import { BaseLabelsView } from '../BaseLabelsView';
import { ServiceTagLabel } from './ServiceTagLabel';
import { Service } from '../../../Models/Config/Config';
import { FC } from 'react';

type Props = {
  service: Service;
};

export const ServiceTagsLabel: FC<Props> = ({ service }) => {
  return (
    <BaseLabelsView>{service.tags?.map((tag, index) => <ServiceTagLabel key={index} tag={tag} />)}</BaseLabelsView>
  );
};
