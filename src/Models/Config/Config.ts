export interface Service {
  key: string;
  name: string;
  host: string;
  tags?: string[];
  repository: string;
}

export interface Config {
  services?: Service[];
}
