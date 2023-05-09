import {
  Box,
  Grid,
  Icon,
  IconButton,
  styled,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import {
  CloudDownloadRounded,
  FilterListRounded,
  FullscreenRounded,
  PrintRounded,
  ReorderRounded,
} from '@mui/icons-material';
import { useState } from 'react';
import React, { useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
 
const StyledTable = styled(Table)(() => ({
  whiteSpace: 'pre',
  '& thead': {
    '& tr': { '& th': { paddingLeft: 0, paddingRight: 0 } },
  },
  '& tbody': {
    '& tr': { '& td': { paddingLeft: 0, textTransform: 'capitalize' } },
  },
}));

const AirlineTable = () => {
  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [post, getPost] = useState([]);

 
  const fetchPost = () => {
    fetch('/industry-master-api/v1/airline/data/', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': 'http://65.1.154.157:8080/',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        getPost(res);
         console.log("hello");
      });
  };
  useEffect(() => {
    fetchPost();
  }, []);


  
  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };
   const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const navigate = useNavigate();
  
  return (
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <Grid style={{ display: 'flex' }}>
            <Grid>
              <TextField
                style={{ width: '600px' }}
                id="standard-bare"
                variant="outlined"
                defaultValue="Search..."
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <SearchOutlined />
                    </IconButton>
                  ),
                }}
              />
            </Grid>
            <Grid
              style={{
                display: 'flex',
                'margin-left': '180px',
              }}
            >
              <IconButton>
                <ReorderRounded />
              </IconButton>
              <IconButton>
                <CloudDownloadRounded />
              </IconButton>
              <IconButton>
                <PrintRounded />
              </IconButton>
              <IconButton>
                <FilterListRounded
                  onClick={() => {
                    navigate('/Edit/Appform');
                  }}
                />
              </IconButton>

              <IconButton>
                <FullscreenRounded />
              </IconButton>
            </Grid>
          </Grid>
          <TableRow>
            <TableCell align="center"></TableCell>
            <TableCell align="center">Airline Num Code</TableCell>
            <TableCell align="center">Airline IATA Code</TableCell>
            <TableCell align="center">Airline ICAO Code</TableCell>
            <TableCell align="center">Alliance Code</TableCell>
            <TableCell align="center">Airline name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {post.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => (
            <TableRow key={index}>
              <TableCell align="left">
                <IconButton>
                  <Checkbox />
                </IconButton>
                <IconButton>
                  <Icon
                    color="black"
                    onClick={() => {
                      navigate('/Edit/EditForm');
                    }}
                  >
                    edit
                  </Icon>
                </IconButton>
              </TableCell>
              <TableCell align="center">{item.arln_iata_code}</TableCell>
              <TableCell align="center">{item.arln_num_code}</TableCell>
              <TableCell align="center">{item.arln_icao_code}</TableCell>
              <TableCell align="center">{item.alliance_code}</TableCell>
              <TableCell align="center">${item.arln_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>

      <TablePagination
        sx={{ px: 2 }}
        page={page}
        component="div"
        rowsPerPage={rowsPerPage}
        count={post.length}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={handleChangeRowsPerPage}
        nextIconButtonProps={{ 'aria-label': 'Next Page' }}
        backIconButtonProps={{ 'aria-label': 'Previous Page' }}
      />
    </Box>
  );
};

export default AirlineTable;