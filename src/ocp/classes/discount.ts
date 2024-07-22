export abstract class Discount {
  protected discount = 0;

  abstract calculate(price: number): number;
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 0.5
}

export class TenPercentDiscount extends Discount {
  private readonly discount = 0.1;
}

export class NoDiscount extends Discount {
  calculate(price: number): number {
    return price;
  }
}
