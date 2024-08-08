import Pricing from './4-pricing';
import Currency from './3-currency';

const currency = new Currency('EUR', 'Euro');
const p = new Pricing(100, currency);
console.log(p);
console.log(p.displayFullCurrency());

// console.log(p.amount)
// console.log(p._currency)
// console.log(Pricing.convertPrice(100, 2))
