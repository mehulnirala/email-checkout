import React, { useEffect, useState } from "react";
import { getCheckoutObject } from "../utilities";

export default function Checkout(props: any) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getCheckoutObject(props.orderDetails).then((checkout) => {
      checkout.displayCheckout();
      setLoading(false);
    }).catch((err) => {
      console.error(err);
      setLoading(false);
    })
  }, []);
  console.log(loading)

  return (
    <div className="container">
      <div className="row justify-content-center">
        {loading ? "Loading": ""}
        <div className="col" id="rapyd-checkout"></div>
      </div>
    </div>
  );
}
