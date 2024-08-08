import Pricing from "./4-pricing";
import Currency from "./3-currency";

const p = new Pricing(100, new Currency("EUR", "Euro"))
console.log(p);
console.log(p.displayFullCurrency());

console.log(p.amount)
console.log(p._currency)
console.log(Pricing.convertPrice(100, 2))