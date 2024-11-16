import dayjs from 'dayjs';
import { SettingsManager } from '../Config';

export const getServiceLabel = (service: string): string => service.split('.').at(-1) || service;

export const dateTimeValueFormatter = (value: Date): string => dayjs(value).format(SettingsManager.apiDateTimeFormat);
