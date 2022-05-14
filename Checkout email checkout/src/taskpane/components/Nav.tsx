import Check from "@mui/icons-material/Check";
import { Box, Button } from "@mui/material";
import Step from "@mui/material/Step";
import StepConnector, {
  stepConnectorClasses
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { styled } from "@mui/material/styles";
import * as React from "react";
import ItemsList from "./ItemsList";
import Rating from "./Rating";
import Checkout from "./Checkout";
import Summary from "./Summary";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)"
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4"
    }
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4"
    }
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1
  }
}));

const QontoStepIconRoot = styled("div")<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
    ...(ownerState.active && {
      color: "#784af4"
    }),
    "& .QontoStepIcon-completedIcon": {
      color: "#784af4",
      zIndex: 1,
      fontSize: 18
    },
    "& .QontoStepIcon-circle": {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "currentColor"
    }
  })
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

export default function Nav() {
  const steps = ["Cart items", "Checkout", "Order Details"];
  const [orderDetails, setOrderDetails] = React.useState({});
  const components = [
    <ItemsList setOrderDetails={setOrderDetails} />,
    <Checkout orderDetails={orderDetails} />,
    <Summary orderDetails={orderDetails} />
  ];

  const [activeStep, setActiveStep] = React.useState(0);

  const totalSteps = () => {
    return steps.length;
  };

  const allStepsCompleted = () => {
    return activeStep >= totalSteps();
  };

  const handleNext = () => {
    const newActiveStep = Math.min(activeStep + 1, totalSteps());
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  return (
    <Box>
      <Box sx={{ height: "450px" }}>
        {allStepsCompleted() ? (
          <Rating />
        ) : (
          <React.Fragment>
            <Box
              sx={{
                width: "100%",
                height: "100px",
                position: "absolute",
                backgroundColor: "primary.main",
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7]
                }
              }}
            ></Box>
            {components[activeStep]}
          </React.Fragment>
        )}
      </Box>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<QontoConnector />}
      >
        {steps.map((label, index) => (
          <Step key={label} completed={index < activeStep}>
            <StepLabel
              StepIconComponent={QontoStepIcon}
              onClick={handleStep(index)}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box>
        {allStepsCompleted() ? (
          <></>
        ) : (
          <React.Fragment>
            <Box sx={{ display: "flex", flexDirection: "row", p: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="outlined"
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext} sx={{ mr: 1 }} variant="contained">
                {activeStep >= totalSteps() - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </Box>
  );
}