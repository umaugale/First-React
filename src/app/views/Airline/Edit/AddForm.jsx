import { Stack } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Breadcrumb, SimpleCard } from "app/components";
import AddAirlineForm from "./AddEditAirlineForm";


const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const AddForm = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Industry Master", path: "/pages" }, { name: "Airline" }]} />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title="Add New Airline">
          <AddAirlineForm  />
        </SimpleCard>
      </Stack>
    </Container>
  );
};

export default AddForm;
