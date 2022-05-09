import { makeRequest } from './utilities';

export interface ICheckoutData {
    amount?: number;
    country: string;
    currency: string;
    customerId?: string;

}

export async function getCustomersList() {
    return await makeRequest('GET', `/v1/customers`, {});
}

export async function getPaymentMethods(data: ICheckoutData) {
    return await makeRequest('GET', `/v1/payment_methods/country?country=${data.country}&currency=${data.currency}`, {});
}

export async function createCheckout(data: ICheckoutData){
    try {
        const body = {
            "amount": data.amount,
            "complete_payment_url": "http://example.com/complete",
            "country": data.country,
            "currency": data.currency,
            "customer": "cus_3196e7d011322b73f31adfeb673b23fd",
            "error_payment_url": "http://example.com/error",
            "merchant_reference_id": "950ae8c6-78",
            "cardholder_preferred_currency": true,
            "language": "en",
            "metadata": {
                "merchant_defined": true
            },
            "payment_method_types_include": [
                "in_visa_credit_card"
            ],
            "expiration": 1665296061,
            "payment_method_types_exclude": []
        }
        const result = await makeRequest('POST', '/v1/checkout', body);
    
        console.log(result);
        return result;
      } catch (error) {
        console.error('Error completing request', error);
      }
}

