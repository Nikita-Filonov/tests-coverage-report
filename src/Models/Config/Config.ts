export interface Service {
  name: string;
  host: string;
  repository: string;
}

export interface Config {
  services?: Service[];
}
