import logo from '../../../static/logo.png';
import React, { FC } from 'react';
import { BaseImage } from './BaseImage';

type LogoImageProps = {
  width: number;
  height: number;
};

export const LogoImage: FC<LogoImageProps> = ({ width, height }) => {
  return <BaseImage src={logo} width={width} height={height} />;
};
