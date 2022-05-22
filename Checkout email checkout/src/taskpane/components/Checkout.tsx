import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { addEventListeners, getCheckoutObject } from "../utilities";
import Progress from "./Progress";

export default function Checkout(props: any) {
  const [loading, setLoading] = useState(false);

  const numItems = props.orderDetails ? props.orderDetails.length : 0;

  useEffect(() => {
    if (numItems > 0) {
      setLoading(true);
      getCheckoutObject(props.orderDetails)
        .then((checkout) => {
          checkout.displayCheckout();
          setLoading(false);
          addEventListeners(
            () => setTimeout(()=>props.goToNext(), 2000),
            () => {}
          );
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, []);

  return (
    <div className="container" style={numItems > 0 ? {} : { maxWidth: "500px", display: "flex" }}>
      {numItems > 0 ? (
        <Box>
          {loading ? (
            <div>
              <br />
              <Progress message="Waiting to create checkout." />
            </div>
          ) : (
            ""
          )}
          <div className="row justify-content-center">
            <div className="col" id="rapyd-checkout"></div>
          </div>
        </Box>
      ) : (
        <Box sx={{ p: 2, margin: "0 auto", display: "flex", flexDirection: "column", textAlign: "center" }}>
          <img src={"/assets/empty-kart2.png"} width={"250px"} />
          <Typography variant="caption">Add some items in your cart !</Typography>
        </Box>
      )}
    </div>
  );
}
