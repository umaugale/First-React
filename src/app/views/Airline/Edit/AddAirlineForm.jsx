
import {
  Button,
  Grid,
  Icon,
  styled,
} from "@mui/material";
import { Span } from "app/components/Typography";
import { useNavigate} from 'react-router-dom';

import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

const AddAirlineForm = () => {
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
  const navigate = useNavigate();

  // const handleDateChange = (date) => setState({ ...state, date });

  
  const {
    arlnname,
    airlniatacode,
    arlnicaocode,
    arlnnumcode,
    arlnalliancecode,
    
  } = state;

  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={6}>
          <Grid item lg={12} md={12} sm={6} xs={6} sx={{ mt: 2 }}>
            <TextField
              type="text"
              name="arlnname"
              id="standard-basic"
              value={arlnname || ""}
              onChange={handleChange}
              errorMessages={["this field is required"]}
              label="Airline Name"
              validators={["required", "minStringLength: 4", "maxStringLength: 9"]}
            />
            </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: -2 }}>

            <TextField
              type="text"
              name="airlniatacode"
              label="Airline IATA Code"
              onChange={handleChange}
              value={airlniatacode || ""}
              validators={["required"]}
              errorMessages={["this field is required"]}
            /> 
           </Grid>
           <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: -2 }}>

            <TextField
              type="text"
              name="arlnicaocode"
              label="Airline ICAO Code"
              value={arlnicaocode || ""}
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
            </Grid>
           <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: -2 }}>
           
            <TextField
              name="arlnnumcode"
              type="text"
              label="Airline Num Code"
              value={arlnnumcode || ""}
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: -2 }}>

            <TextField
              type="text"
              name="arlnalliancecode"
              onChange={handleChange}
              label="Airline Alliance Code"
              value={arlnalliancecode || ""}
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
        
      <Button color="primary" variant="contained" type="reset" sx={{ mr: 2 }} onClick={() => {
                      navigate('/Tabledata');
                    }}>
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

export default AddAirlineForm;
