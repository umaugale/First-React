import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import Button from 'app/components/Button';
import AirlineTable from "./AirlineTable";
import Flex from 'app/components/Flex';
import { useNavigate } from 'react-router-dom';

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const Tabledata = () => {
  const navigate = useNavigate();
  return (
    <Container>
     <Box className="breadcrumb" style={{ display: 'flex' }}>
        <Flex flex={1}>  
              <Breadcrumb routeSegments={[{ name: "Industry Master", path: "/Airline" }, { name: "Airline" }]} />
        </Flex>
        <Button
          title={'Add New Airline'}
          onClick={() => {
            navigate('/Edit/AddForm');
          }}
        />
      </Box>
      <SimpleCard>
        <AirlineTable />
      </SimpleCard>
    </Container>
  );
};

export default Tabledata;
