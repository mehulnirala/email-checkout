import React, { useEffect, useState } from "react";
import { addEventListeners, getCheckoutObject } from "../utilities";
import Progress from "./Progress";

export default function Checkout(props: any) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getCheckoutObject(props.orderDetails).then((checkout) => {
      checkout.displayCheckout();
      setLoading(false);
      addEventListeners(() => {
        props.goToNext();
      }, () => {

      })
    }).catch((err) => {
      console.error(err);
      setLoading(false);
    })
  }, []);

  return (
    <div className="container">
      {loading ? <div><br/><Progress
          message="Waiting to create checkout."
        /></div>: ""}
      <div className="row justify-content-center">
        <div className="col" id="rapyd-checkout"></div>
      </div>
    </div>
  );
}
