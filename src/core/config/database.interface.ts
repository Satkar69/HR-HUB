export interface DatabaseConfig {
  getDatabaseName(): string;
  getDatabaseMainUrl(): string;
  getDatabaseDevUrl(): string;
}
