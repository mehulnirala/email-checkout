import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Fab from "@mui/material/Fab";
import List from "@mui/material/List";
import Slide from "@mui/material/Slide";
import { useTheme } from "@mui/material/styles";
import Zoom from "@mui/material/Zoom";
import * as React from "react";
import Item from "./Item";

const fabStyle = {
  position: "absolute",
  bottom: 16,
  right: 16
};

export default function ItemsList(props: any) {
  const [items, setItems] = React.useState(props.orderDetails);

  const theme = useTheme();
  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };

  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newItems = [...items];
    newItems[index].selected = event.target.checked;
    setItems(newItems);
    props.setOrderDetails(newItems);
  };

  return (
    <div>
      <Zoom
        in={true}
        timeout={transitionDuration}
        style={{
          transitionDelay: `${transitionDuration.exit}ms`,
          right: 0
        }}
      >
        <Fab sx={fabStyle} aria-label={"checkout"} color={"secondary"}>
          <ShoppingCartIcon />
        </Fab>
      </Zoom>
      <Slide
        in={true}
        timeout={transitionDuration}
        style={{
          transitionDelay: `${transitionDuration.exit}ms`,
          right: 0
        }}
      >
        <List>
          {items.map((e, i) => (
            <Item key={i} {...e} handleToggle={(e) => handleToggle(e, i)} />
          ))}
        </List>
      </Slide>
    </div>
  );
}
