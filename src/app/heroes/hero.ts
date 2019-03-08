export class Hero {
  id?: number;
  gameId: number;
  guid: string;
  name: string;

  public constructor(init?: Partial<Hero>) {
    Object.assign(this, init);
  }
}
