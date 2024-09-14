export const getServiceLabel = (service: string): string => service.split('.').at(-1) || service;
