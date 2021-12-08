import { Stack, TextField, Typography, Box } from "@mui/material";
import React from "react";
import table from "./perfectTravel.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { output: "" };

    this.onAngleChange = this.onAngleChange.bind(this);
  }

  onAngleChange(e) {
    let val = e.target.value;
    val = parseFloat(val);
    while (val > 180) {
      val -= 360;
    }
    while (val < -180) {
      val += 360;
    }
    val = Math.round(val * 100) / 100;
    this.setState({ output: table[val.toString()] || "" });
  }

  render() {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        minWidth="100vw"
        position="fixed"
        left={0}
        top={0}
      >
        <Stack spacing={1}>
          <TextField
            variant="filled"
            label="Angle"
            onChange={this.onAngleChange}
          />
          <Typography textAlign="center" variant="h5">{this.state.output}</Typography>
        </Stack>
      </Box>
    );
  }
}
export default App;
