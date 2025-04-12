export interface LoginResponse {
  creationDate: Date;
  creationIP?: string;
  expirationDate: Date;
  accountID: string;
  token: string;
  sessionID: string;
}
