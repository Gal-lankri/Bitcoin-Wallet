export class Move {
  constructor(
    public toId: String | undefined,
    public to: String,
    public at: Number,
    public amount: Number
  ) {}
}
