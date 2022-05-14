import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Fab from "@mui/material/Fab";
import List from "@mui/material/List";
import Slide from "@mui/material/Slide";
import { useTheme } from "@mui/material/styles";
import Zoom from "@mui/material/Zoom";
import * as React from "react";
import Item from "./Item";
import initItems from "./items";

const fabStyle = {
  position: "absolute",
  bottom: 16,
  right: 16
};

export default function ItemsList(props: any) {
  const [items, setItems] = React.useState(initItems);

  const theme = useTheme();
  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };

  const handleToggle = (index: number) => () => {
    const newItems = items;
    newItems[index].selected = !newItems[index].selected;
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
            <Item {...e} handleToggle={handleToggle(i)} />
          ))}
        </List>
      </Slide>
    </div>
  );
}
