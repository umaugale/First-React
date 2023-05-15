
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
  
  const EditAirlineForm = () => {
  

    const [data, setData] = useState([]);
    const[result,setResult]=useState([]);
    const [id, setId] = useState("");
    const navigate = useNavigate();
    const [state, setState] = useState({
      arln_name: "",
      arln_iata_code: "",
      arln_num_code: "",
      alliance_code: ""
    });
    const [arln_num_code, setArlnNumCode] = useState(''); // Define the initial state as an empty string or provide a default value

const handleArlnNumCodeChange = (newValue) => {
  setArlnNumCode(newValue);
};

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await Axios.get(`https://test.iconcile.com/industry-master-api/v1/airline/data?arln_num_code={id}`);
          setData(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, [id]);

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("submitted");
      console.log(event);
    };
    
    const handleChange = (event) => {
      event.persist();
      setState((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
    };
    
    const editRow = (id) => {
      setId(id);
    };
    
    const updateRow = async (e) => {
      e.preventDefault();
      const updatedData = {
        arln_name: e.target.arln_name.value,
        arln_iata_code: e.target.arln_iata_code.value,
        arln_num_code: e.target.arln_num_code.value,
        alliance_code: e.target.alliance_code.value,
      };
    
      try {
        const payload = [{ recordNumber: id }];
      
        const response = await Axios.post(
          `https://test.iconcile.com/industry-master-api/v1/airline/save`,
          updatedData,{
          headers:{
            'content-type':'application/json',
          },
          data: payload,
      });
        if (response.status === 200) {
          window.location.reload();
        }
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <div>
        <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
          <Grid container spacing={6}>
            <Grid item lg={12} md={12} sm={6} xs={6} sx={{ mt: 2 }}>
              <TextField
                type="text"
                name="arln_name"
                value={state.arln_name}
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
                value={state.arln_iata_code}
                validators={["required"]}
                errorMessages={["this field is required"]}
              /> 
             </Grid>
             <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: -2 }}>
  
              <TextField
                type="text"
                name="arln_icao_code"
                label="Airline ICAO Code"
                value={state.arln_icao_code}
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
                value={state.arln_num_code}
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
                value={state.alliance_code}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
            </Grid>
            </Grid>
{/* ))}  */}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              
            <Button color="primary" variant="contained" type="reset" sx={{ mr: 2 }}>
          <Span sx={{ pl: -1, textTransform: "capitalize" }}>Reset</Span>
        </Button>
  
            <Button color="primary" variant="contained" type="cancel" sx={{ mr: 2 }} onClick={() => {
                        navigate('/Tabledata');
                      }}>
          <Span sx={{ pl: -1, textTransform: "capitalize" }}>Cancel</Span>
        </Button>
  
        
  
        <Button onClick={updateRow} color="primary" variant="contained" type="save">
        <Span sx={{ pl: -1, textTransform: "capitalize" }}>Save</Span>
      </Button>
      </div>
      
        </ValidatorForm>
      </div>
    );
  };
  
  export default EditAirlineForm;
  