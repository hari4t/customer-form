import { TextField, Grid, MenuItem, Button } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React, { useState } from "react";
import axios from "axios";

function CustomerDetails() {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [address, setaddress] = useState("");
  const [panNum, setpanNum] = useState("");
  const [aadharNum, setaadharNum] = useState("");
  const [gender, setgender] = useState("");
  const [dob, setdob] = useState("");

  const submitCustomerDetails = () => {
    const user = {
      name: fName + " " + lName,
      address: address,
      pan: panNum,
      aadhar: aadharNum,
      gender: gender,
      dob: dob,
    };

    axios
      .post(`https://jsonplaceholder.typicode.com/users`, user)
      .then((res) => {
        console.log("Customer added successfully");
      });
  };

  return (
    <div style={{ marginTop: "5%" }}>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
      >
        <TextField
          id="outlined-basic"
          label="First name"
          variant="outlined"
          value={fName}
          onChange={(e) => setfName(e.target.value)}
          sx={{ margin: "10px 0 10px 0", width: "15rem" }}
        />
        <TextField
          id="outlined-basic"
          label="Last name"
          variant="outlined"
          value={lName}
          onChange={(e) => setlName(e.target.value)}
          sx={{ margin: "10px 0 10px 0", width: "15rem" }}
        />
        <TextField
          id="outlined-basic"
          label="Address"
          variant="outlined"
          multiline
          value={address}
          onChange={(e) => setaddress(e.target.value)}
          sx={{ margin: "10px 0 10px 0", width: "15rem" }}
        />
        <TextField
          id="outlined-basic"
          label="PAN Number"
          variant="outlined"
          sx={{ margin: "10px 0 10px 0", width: "15rem" }}
          onChange={(e) => setpanNum(e.target.value)}
          value={panNum}
        />
        <TextField
          id="outlined-basic"
          label="Aadhar"
          variant="outlined"
          value={aadharNum}
          onChange={(e) => setaadharNum(e.target.value)}
          sx={{ margin: "10px 0 10px 0", width: "15rem" }}
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Gender"
          value={gender}
          onChange={(e) => setgender(e.target.value)}
          sx={{ margin: "10px 0 10px 0", width: "15rem" }}
        >
          <MenuItem key="male" value="M">
            Male
          </MenuItem>
          <MenuItem key="female" value="F">
            Female
          </MenuItem>
        </TextField>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="DOB"
            value={dob}
            onChange={(e) => {
              const dateArray = e.$d.toString().split(" ");
              const date =
                dateArray[2] + dateArray[1].toUpperCase() + dateArray[3];
              setdob(date);
            }}
            sx={{ margin: "10px 0 10px 0", width: "15rem" }}
          />
        </LocalizationProvider>

        <Button onClick={submitCustomerDetails} variant="contained">
          Submit
        </Button>
      </Grid>
    </div>
  );
}

export default CustomerDetails;
