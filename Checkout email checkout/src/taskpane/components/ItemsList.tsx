import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Card, Checkbox } from "@mui/material";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { styled, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Zoom from "@mui/material/Zoom";
import * as React from "react";
import items from "./items";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%"
});

export function ItemComponent(props: any) {
  return (
    <ListItem>
      <Card
        sx={{
          p: 0,
          paddingTop: 1,
          width: 320,
          margin: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff"
        }}
      >
        <Grid container spacing={0}>
          <Grid item sm>
            <Img
              sx={{ width: 100, height: 100 }}
              alt="complex"
              src={props.url}
            />
          </Grid>
          <Grid item xs>
            <Typography variant="subtitle1" component="div">
              {props.name}
            </Typography>
            <Rating
              name="read-only"
              value={4.5}
              precision={0.5}
              readOnly
              size="small"
            />
            <Typography variant="subtitle2" component="div">
              <b style={{ fontSize: "16px" }}>$ {props.price}.00</b>{" "}
              <s> ${props.oldPrice}.00 </s>
            </Typography>
            <Stack direction="row" sx={{ alignItems: "center" }} spacing={3}>
              <Typography variant="body2">Color 🟣</Typography>
              <Typography variant="body2" color="text.secondary">
                Size: <Typography variant="overline">US7</Typography>
              </Typography>
            </Stack>
          </Grid>
          <Grid item sm>
            <Checkbox
              icon={<AddCircleOutlineIcon />}
              checkedIcon={<CheckCircleIcon />}
            />
          </Grid>
        </Grid>
      </Card>
    </ListItem>
  );
}

const fabStyle = {
  position: "absolute",
  bottom: 160,
  right: 16
};

export default function ItemsList() {
  const theme = useTheme();
  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
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
      <List>
        {items.map((e) => (
          <ItemComponent {...e} />
        ))}
      </List>
    </div>
  );
}
