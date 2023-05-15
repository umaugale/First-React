import { DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { useNavigate } from 'react-router-dom';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Flex from 'app/components/Flex';
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Icon,
  Radio,
  RadioGroup,
  styled,
  Paper,
} from '@mui/material';
import { Span } from 'app/components/Typography';
import { useEffect, useState } from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import axios from 'axios';
const TextField = styled(TextValidator)(() => ({
  width: '100%',
  marginBottom: '16px',
}));

const SearchAirline = () => {

  const [filter, setFilter] = useState({
    arln_iata_code: '',
    arln_num_code: '',
    arln_icao_code: '',
    alliance_code: '',
    arln_name: '',
  });
  const [results, setResults] = useState([]);
  const [data, setData] = useState([0]);

  const fetchData = async () => {
    try {
      const url = `https://test.iconcile.com/industry-master-api/v1/airline/data?`;
      const queryParams = [];

      if (filter.arln_iata_code !== '') {
        queryParams.push(`arln_iata_code=${filter.arln_iata_code}`);
      }
      if (filter.arln_icao_code !== '') {
        queryParams.push(`arln_icao_code=${filter.arln_icao_code}`);
      }
      if (filter.alliance_code !== '') {
        queryParams.push(`alliance_code=${filter.alliance_code}`);
      }
      if (filter.arln_name !== '') {
        queryParams.push(`arln_name=${filter.arln_name}`);
      }
      if (filter.arln_num_code !== '') {
        queryParams.push(`arln_num_code=${filter.arln_num_code}`);
      }

      const query = queryParams.join('&');
      const response = await axios.get(url + query);

      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching filtered results:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name]: value,
    });
   
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };
  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={1}>
          <Grid item lg={6}>
            <TextField
              type="text"
              name="arln_name"
              label="Airline name"
              onChange={handleChange}
              value={filter.arln_name || ''}
            />
          </Grid>
          <Grid item lg={6}>
            <TextField
              type="text"
              name="arln_iata_code"
              label="Airline IATA Code"
              onChange={handleChange}
              value={filter.arln_iata_code || ''}
            />
          </Grid>
          <Grid item lg={6}>
            <TextField
              type="text"
              name="arln_num_code"
              label="Airline Num Code"
              onChange={handleChange}
              value={filter.arln_num_code || ''}
            />
          </Grid>
          <Grid item lg={6}>
            <TextField
              type="text"
              name="arln_icao_code"
              label="Airline ICAO Code"
              onChange={handleChange}
              value={filter.arln_icao_code || ''}
            />
          </Grid>
          <Grid item lg={6}>
            <TextField
              type="text"
              name="alliance_code"
              label="Airline Code"
              onChange={handleChange}
              value={filter.alliance_code || ''}
            />
          </Grid>
        </Grid>
        {/* ))} */}
        <Grid style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button title={'Reset'} variant={'text'} type="reset">
            <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Reset</Span>
          </Button>

          <Button color="primary" variant="contained" type="submit">
            <Span sx={{ pl: 1, textTransform: 'capitalize' }}>apply</Span>
          </Button>
        </Grid>
      </ValidatorForm>
    </div>
  );
};

export default SearchAirline;