export interface LoginResponse {
  creationDate: Date;
  creationIP?: string;
  expirationDate: Date;
  accountID: string;
  token: string;
  sessionID: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}
