import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import Button from 'app/components/Button';
import SimpleTable from "./SimpleTable";
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

const AppTable = () => {
  const navigate = useNavigate();
  return (
    <Container>
     
     <Box className="breadcrumb" style={{ display: 'flex' }}>
        <Flex flex={1}>  
              <Breadcrumb routeSegments={[{ name: "Industry Master", path: "/material" }, { name: "Airline" }]} />
        </Flex>
        <Button
          title={'Add New Airline'}
          onClick={() => {
            navigate('add');
          }}
        />
      </Box>
      <SimpleCard>
        <SimpleTable />
      </SimpleCard>
    </Container>
  );
};

export default AppTable;
