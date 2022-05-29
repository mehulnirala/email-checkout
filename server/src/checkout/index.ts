import { getHexKey, makeRequest } from "../utilities";
import { ICheckoutData, createCheckout } from "./create-checkout";

const cache: { [key: string]: string | undefined } = {};

export async function openCheckout(data: any) {
  const key = getHexKey(data.map((e: { id: string }) => e.id));
  if (cache.hasOwnProperty(key)) {
    return cache[key];
  }
  let total = 0;
  try {
    total = data
      .map((e: { price: number }) => e.price)
      .reduce((a: number, b: number) => a + b);
  } catch (error) {}

  const checkoutData: ICheckoutData = {
    amount: total,
    country: "IN",
    currency: "INR",
    customerId: data.customerId
      ? data.customerId
      : "cus_3196e7d011322b73f31adfeb673b23fd",
  };
  const result: any = await createCheckout(checkoutData);
  // cache[key] = result.id;
  return result.id;
}

export async function closeCheckout(data: any) {
  const keys = Object.keys(cache);
  const checkoutId = data.checkoutId;
  for (const k in keys) {
    if (cache[k] === checkoutId) {
      cache[k] = undefined;
    }
  }
}
