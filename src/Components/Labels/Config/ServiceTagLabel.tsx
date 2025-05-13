import { BaseLabel } from '../BaseLabel';
import { FC } from 'react';

type Props = {
  tag: string;
};

export const ServiceTagLabel: FC<Props> = ({ tag }) => {
  return <BaseLabel label={tag} color={'info'} />;
};
