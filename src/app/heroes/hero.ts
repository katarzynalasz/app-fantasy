export class Hero {
  id?: number;
  gameId: number;
  guid: string;
  name: string;
  race: string;
  gender: string;

  public constructor(init?: Partial<Hero>) {
    Object.assign(this, init);
  }
}
