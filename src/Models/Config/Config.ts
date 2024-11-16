export interface Service {
  key: string;
  name: string;
  host: string;
  repository: string;
}

export interface Config {
  services?: Service[];
}
