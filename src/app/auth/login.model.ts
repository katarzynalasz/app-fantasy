export class Login {
  login: string;
  password: string;

  public constructor(init?: Partial<Login>) {
    Object.assign(this, init);
  }
}
