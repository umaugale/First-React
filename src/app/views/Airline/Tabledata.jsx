import { Box, styled } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';
import AirlineTable from './AirlineTable';

import Button from 'app/components/Button';
import { useNavigate } from 'react-router-dom';
import Flex from 'app/components/Flex';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const Tabledata = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Box className="breadcrumb" style={{ display: 'flex' }}>
        <Flex flex={1}>
          <Breadcrumb
            routeSegments={[{ name: 'Industry Master', path: '/airline' }, { name: 'Airline' }]}
          ></Breadcrumb>
        </Flex>
        <Button
          title="Add New Airline"
          size="large"
          color="primary"
          variant="contained"
          sx={{ textTransform: 'uppercase' }}
          onClick={() => {
            navigate('/Edit/AddForm');
          }}
        >
          upgrade now
        </Button>
      </Box>

      <SimpleCard>
        <AirlineTable />
      </SimpleCard>
    </Container>
  );
};

export default Tabledata;

