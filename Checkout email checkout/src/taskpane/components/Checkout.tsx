import React, { useEffect } from "react";

export function Checkout(props: any) {
    useEffect(()=> {
        const RapydCheckoutToolkit = (window as any).RapydCheckoutToolkit;

        let checkout = new RapydCheckoutToolkit({
            pay_button_text: "Pay Now",
            pay_button_color: "#4BB4D2",
            id: props.checkoutId, // your checkout page id goes here
            style: {
                submit: {
                    base: {
                        color: "white"
                    }
                }
            }
        });
        checkout.displayCheckout();
    }, []);

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col" id="rapyd-checkout"></div>
            </div>
        </div>
    )
}