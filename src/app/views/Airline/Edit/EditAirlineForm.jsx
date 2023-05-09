// import { SpaceBar } from "@mui/icons-material";
// import { DatePicker } from "@mui/lab";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  Button,
//   Checkbox,
//   FormControlLabel,
  Grid,
  Icon,
//   Radio,
//   RadioGroup,
  styled,
} from "@mui/material";
import { Span } from "app/components/Typography";
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

const EditAirlineForm = () => {
  const [state, setState] = useState({ date: new Date() });

  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== state.password) return false;

      return true;
    });
    return () => ValidatorForm.removeValidationRule("isPasswordMatch");
  }, [state.password]);

  const handleSubmit = (event) => {
    // console.log("submitted");
    // console.log(event);
  };

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  //const handleDateChange = (date) => setState({ ...state, date });


// function handleClick() {
//   const data = {
//     // Your data goes here
//   };
//   fetch('your-api-url', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   })
//   .then(response => {
//     // Handle response here
//   })
//   .catch(error => {
//     // Handle error here
//   });
// }
  const {
    arln_name,
    arln_iata_code,
    arln_icao_code,
    arln_num_code,
    alliance_code,
    
  } = state;

  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={6}>
          <Grid item lg={12} md={12} sm={6} xs={6} sx={{ mt: 2 }}>
            <TextField
              type="text"
              name="arln_name"
              id="standard-basic"
              value={arln_name || ""}
              onChange={handleChange}
              errorMessages={["this field is required"]}
              label="Airline Name"
              validators={["required", "minStringLength: 4", "maxStringLength: 9"]}
            />
            </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: -2 }}>

            <TextField
              type="text"
              name="arln_iata_code"
              label="Airline IATA Code"
              onChange={handleChange}
              value={arln_iata_code || ""}
              validators={["required"]}
              errorMessages={["this field is required"]}
            /> 
           </Grid>
           <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: -2 }}>

            <TextField
              type="text"
              name="arln_icao_code"
              label="Airline ICAO Code"
              value={arln_icao_code || ""}
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
            </Grid>
           <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: -2 }}>
           
            <TextField
              name="arln_num_code"
              type="text"
              label="Airline Num Code"
              value={arln_num_code || ""}
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: -2 }}>

            <TextField
              type="text"
              name="alliance_code"
              onChange={handleChange}
              label="Airline Alliance Code"
              value={alliance_code || ""}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
          </Grid>
          </Grid>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <Button color="primary" variant="contained" type="reset" sx={{ mr: 2 }}>
        <Icon>reset</Icon>
        <Span sx={{ pl: -1, textTransform: "capitalize" }}>Reset</Span>
      </Button>
      <Button color="primary" variant="contained" type="reset" sx={{ mr: 2 }}>
        <Span sx={{ pl: -1, textTransform: "capitalize" }}>Cancel</Span>
      </Button>

      <Button color="primary" variant="contained" type="save">
      <Span sx={{ pl: -1, textTransform: "capitalize" }}>Save</Span>
    </Button>
    </div>
      </ValidatorForm>
    </div>
  );
};

export default EditAirlineForm;
