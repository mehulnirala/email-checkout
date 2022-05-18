import axios from "axios";
const SERVER_URL = "http://localhost:5000";

export async function getCheckoutObject(data: any) {
    const response = await axios.post(`${SERVER_URL}/checkout`, data, { headers: { "Content-Type": "application/json" } });
    console.log('debug ', response)
    const checkoutId = await response.data.checkoutId;
    return getRapydToolKitCheckout(checkoutId);
}

function getRapydToolKitCheckout(checkoutId: string) {
    const RapydCheckoutToolkit = (window as any).RapydCheckoutToolkit;
    let checkout = new RapydCheckoutToolkit({
        pay_button_text: "Pay Now",
        pay_button_color: "#4BB4D2",
        id: checkoutId, // your checkout page id goes here
        style: {
            submit: {
                base: {
                    color: "white"
                }
            }
        }
    });
    addEventListeners();
    return checkout;
}

function addEventListeners() {
    (window).addEventListener('onCheckoutPaymentSuccess', (event: any) => {
        console.log(event.detail);
        axios.post(`${SERVER_URL}/close-checkout`, event.detail, { headers: { "Content-Type": "application/json" } });
    });

    (window).addEventListener('onCheckoutFailure', (event: any) => {
        console.log(event.detail.error);
    });

    (window).addEventListener('onLoading', (event: any) => {
        console.log(event.detail.error);
    });
}