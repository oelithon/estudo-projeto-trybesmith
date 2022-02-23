export interface Body {
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface UserId extends Body {
  id: number;
}