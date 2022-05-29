import axios from "axios";

const debug = true;
const SERVER_URL = debug ? "http://localhost:5000" : "https://email-checkout.herokuapp.com";

export async function getCheckoutObject(data: any) {
  const response = await axios.post(`${SERVER_URL}/checkout`, data, {
    headers: { "Content-Type": "application/json" },
  });
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
      content: {
        base: {
          width: "100px",
        },
      },

      submit: {
        base: {
          color: "white",
        },
      },
    },
  });
  return checkout;
}

export function addEventListeners(
  paymentSuccessCallback: (data: any) => void,
  paymentFailureCallback: (data: any) => void
) {
  window.addEventListener("onCheckoutPaymentSuccess", (event: any) => {
    console.log("onCheckoutPaymentSuccess", event.detail);
    axios.post(`${SERVER_URL}/close-checkout`, event.detail, { headers: { "Content-Type": "application/json" } });
    paymentSuccessCallback(event.detail);
  });

  window.addEventListener("onCheckoutFailure", (event: any) => {
    console.log("onCheckoutFailure", event.detail.error);
    paymentFailureCallback(event.detail);
  });

  window.addEventListener("onLoading", (event: any) => {
    console.log("onLoading", event.detail);
    setTimeout(() => {
      // (document.getElementsByTagName('iframe')[0] as any).contentWindow.location.reload(true);
    }, 2000);
  });
}

export function getInvokedSelection(items, selection) {
  if (!items) return [];
  if (!selection || !selection.id) return items;

  for (let i = 0; i < items.length; i++) {
    if (items[i].id == selection.id) {
      items[i].selected = true;
    }
  }
  return items;
}
