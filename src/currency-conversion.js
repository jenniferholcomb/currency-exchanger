export default class CurrencyConversion {
  static getCurrencyConversion(currAmt, convAmt) {
    return (currAmt * convAmt).toFixed(2);
  }
}