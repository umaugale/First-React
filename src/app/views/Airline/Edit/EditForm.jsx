import { Stack } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Breadcrumb, SimpleCard } from "app/components";
import EditAirlineForm from "./EditAirlineForm";
//import EditForm from "./EditForm";
// import StepperForm from "./StepperForm";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const EditForm = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Industry Master", path: "/pages" }, { name: "Edit Airline" }]} />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title="Edit Airline">
          <EditAirlineForm />
        </SimpleCard>
       
      </Stack>
    </Container>
  );
};

export default EditForm;
