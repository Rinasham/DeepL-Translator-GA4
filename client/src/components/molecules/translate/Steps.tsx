import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

interface StepsProps {
  step: number;
  mode: {
    style: boolean;
  };
}

const steps = [
  "Please answer in Japanese",
  "Now also try English",
  "Compare to the AI",
];

export const Steps = (props: StepsProps) => {
  const { step, mode } = props;

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
