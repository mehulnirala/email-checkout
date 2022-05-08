import axios from "axios";
import * as C from "./constants";
import {makeRequest} from './utilities';

export interface ICheckoutData {
    amount?: number;
    country: string;
    currency: string;
    customerId?: string;

}

export async function createCheckout(data: ICheckoutData){
    try {
        const body = {
            "amount": data.amount,
            "complete_payment_url": "/complete",
            "country": data.country,
            "currency": data.currency,
            "error_payment_url": "/error",
            "merchant_reference_id": "0912-2021",
            "language": "en",
            "metadata": {
                "merchant_defined": true
            }
        }
        const result = await makeRequest('POST', '/v1/checkout', body);
    
        console.log(result);
        return result;
      } catch (error) {
        console.error('Error completing request', error);
      }
}

