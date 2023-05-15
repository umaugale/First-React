
import {
  Button,
  Grid,
  styled,
} from "@mui/material";
import { Span } from "app/components/Typography";
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useNavigate} from 'react-router-dom';
import Axios from 'axios';



const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

const AddEditAirlineForm = () => {
  const [state, setState] = useState({ date: new Date() });

  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== state.password) return false;

      return true;
    });
    return () => ValidatorForm.removeValidationRule("isPasswordMatch");
  }, [state.password]);
  
  const navigate = useNavigate();

  const handleDateChange = (date) => setState({ ...state, date });
const [data, setData] = useState({
  arln_name: "",
  arln_iata_code: "",
  arln_icao_code: "",
  arln_num_code:"",
  alliance_code:""

});

const handleChange = (e) => {
  const value = e.target.value;
  setData({
    ...data,
    [e.target.name]: value
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
  const userData = {
    arln_name: data.arln_name,
    arln_iata_code: data.arln_iata_code,
    arln_icao_code: data.arln_icao_code,
    arln_num_code: data.arln_num_code,
    alliance_code: data.alliance_code,

  };
  Axios.post("https://test.iconcile.com/industry-master-api/v1/airline/save", userData).then((response) => {
    console.log(response.status, response.data.token);
  
  });
  alert('Data Saved Succesfully!');
  navigate('/TableData');

};
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
              value={data.arln_name}
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
              value={data.arln_iata_code}
              validators={["required"]}
              errorMessages={["this field is required"]}
            /> 
           </Grid>
           <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: -2 }}>

            <TextField
              type="text"
              name="arln_icao_code"
              label="Airline ICAO Code"
              value={data.arln_icao_code}
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
              value={data.arln_num_code}
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
              value={data.alliance_code}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
          </Grid>
          </Grid>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            
          <Button color="primary" variant="contained" type="reset" sx={{ mr: 2 }}>
        <Span sx={{ pl: -1, textTransform: "capitalize" }}>Reset</Span>
      </Button>

          <Button color="primary" variant="contained" type="cancel" sx={{ mr: 2 }} onClick={() => {
                      navigate('/Tabledata');
                    }}>
        <Span sx={{ pl: -1, textTransform: "capitalize" }}>Cancel</Span>
      </Button>

      

      <Button onClick={handleSubmit} color="primary" variant="contained" type="save">
      <Span sx={{ pl: -1, textTransform: "capitalize" }}>Save</Span>
    </Button>
    </div>
      </ValidatorForm>
    </div>
  );
};

export default AddEditAirlineForm;
