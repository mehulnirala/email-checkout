import * as React from "react";
import ItemsList from "./ItemsList";
import Progress from "./Progress";

/* global require */

export interface AppProps {
  title: string;
  isOfficeInitialized: boolean;
  data: Object;
}

export interface AppState {
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      listItems: [],
    };
  }

  componentDidMount() {
    this.setState({
      listItems: [
        {
          icon: "Ribbon",
          primaryText: "Achieve more with Office integration",
        },
        {
          icon: "Unlock",
          primaryText: "Unlock features and functionality",
        },
        {
          icon: "Design",
          primaryText: "Create and visualize like a pro",
        },
      ],
    });
  }

  click = async () => {
    /**
     * Insert your Outlook code here
     */
  };

  render() {
    const { title, isOfficeInitialized } = this.props;

    if (!isOfficeInitialized) {
      return (
        <Progress
          title={title}
          logo={require("./../../../assets/logo-filled.png")}
          message="Please sideload your addin to see app body."
        />
      );
    }

    return (
      <div className="ms-welcome">
        Welcome {JSON.stringify(this.props.data, null, 2)}
        <ItemsList />
        {/* <Checkout checkoutId={"checkout_c4b2d7e5c0a70404e698c028df801e34"} /> */}
      </div>
    );
  }
}
