/**
 * Formats currency and price according to display language and locale.
 * Doesn't display trailing double zeroes for whole numbers.
 *
 * @param currency
 * @param price
 * @param locale
 */
function formatPrice(
  currency: string,
  price: number,
  tax?: {
    amount?: number;
    included?: boolean;
  },
  locale: string = "en-US"
): string {
  if (tax && tax.amount > 0 && tax.included) {
    price += (price * tax.amount) / 100;
  }
  let output = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);

  // cut off trailing double zeroes
  if (output.slice(-3) === ".00" || output.slice(-3) === ",00") {
    output = output.slice(0, -3);
  }

  if (tax && !tax.included && tax.amount === 10 && currency === "AUD") {
    output = `${output} + GST`;
  }

  if (price === 0) {
    output = "FREE";
  }

  return output;
}

export default formatPrice;
