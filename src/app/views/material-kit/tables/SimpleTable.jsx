import {
  Box,
  Icon,
  Grid,
  IconButton,
  styled,
  Table,
  TableBody,
  TablePagination,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from 'react';

const StyledTable = styled(Table)(({ theme }) => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
  },
}));

const SimpleTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [data,setData] = useState([]);
  useEffect(()=>{
    fetch('http://65.1.154.157:8080/industry-master-api/v1/airline/data')
    .then(res => res.json())
    .then(res =>setData(res))

  }
  )
  //console.log(data);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  }
  useEffect(()=> {
    fetch('http://65.1.154.157:8080/industry-master-api/v1/airline/data',{ method:'DELETE' })
    .then(()=>setData('Delete SUccessfully'));
  }
  );

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box width="100%" overflow="auto">
        <StyledTable>
        <TableHead>
        <input
            type="search"
            placeholder="search..."
            style={{ width: '600px', height: '50px' }}
            margin="left"
          >
            {/* <Icon color="black">search</Icon> */}
          </input>

          <IconButton>
            <Icon color="black" margin="right">
              reorder
            </Icon>
          </IconButton>
          <IconButton>
            <Icon color="black">cloud_download</Icon>
          </IconButton>
          <IconButton>
            <Icon color="black">print</Icon>
          </IconButton>
          <IconButton>
            <Icon color="black" marginRight="100PX">
              filter_list
            </Icon>
          </IconButton>
          <IconButton>
            <Icon color="black" style={{ marginRight: '0px' }}>
              fullscreen
            </Icon>
          </IconButton>
          <TableRow>
            <TableCell align="left">Action</TableCell>
            <TableCell align="left">Airline Num Code</TableCell>
            <TableCell align="center">Airline Alpha Code</TableCell>
            <TableCell align="center">Airline ICAO Code</TableCell>
            <TableCell align="center">Arln Name</TableCell>
            <TableCell align="center">Alliance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
            // slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            data?.map((item, index) => (
              <TableRow key={index}>
                <TableCell align="left">
                  
                  <IconButton>
                    <Icon color="black">edit</Icon>
                  </IconButton>
                </TableCell>
              <TableCell align="left">{item.arln_num_code}</TableCell>
              <TableCell align="center">{item.arln_icao_code}</TableCell>
              <TableCell align="center">{item.arln_name}</TableCell>
              <TableCell align="center">{item.alliance_code}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
      <TablePagination
        sx={{ px: 2 }}
        page={page}
        component="div"
        rowsPerPage={rowsPerPage}
        count={data.length}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={handleChangeRowsPerPage}
        nextIconButtonProps={{ 'aria-label': 'Next Page' }}
        backIconButtonProps={{ 'aria-label': 'Previous Page' }}
      />
    </Box>
  );
};

export default SimpleTable;
