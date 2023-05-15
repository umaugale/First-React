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
  Modal,
  Fade,
  Typography,
  Backdrop,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import {
  CheckBoxRounded,
  CloudDownloadRounded,
  DeleteRounded,
  FilterListRounded,
  FullscreenRounded,
  PrintRounded,
  ReorderRounded,
} from '@mui/icons-material';
import { useState } from 'react';
import React, { useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import axios from 'axios';
import fetch from 'cross-fetch';
import { Breadcrumb, SimpleCard } from 'app/components';
import SearchAirline from './Edit/SearchAirlineForm';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
}));
const StyledTable = styled(Table)(() => ({
  whiteSpace: 'pre',
  '& thead': {
    '& tr': { '& th': { paddingLeft: 0, paddingRight: 0 } },
  },
  '& tbody': {
    '& tr': { '& td': { paddingLeft: 0, textTransform: 'capitalize' } },
  },
}));
const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));
const AirlineTable = () => {
  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setData] = useState([]);
  const [posts, setPosts] = useState([]);

  const fetchGet = () => {
    axios.get('https://test.iconcile.com/industry-master-api/v1/airline/data').then((response) => {
      setData(response.data);
    });
  };
  useEffect(() => {
    fetchGet();
  }, []);

  const deleteData = (id) => {
    const url = 'https://test.iconcile.com/industry-master-api/v1/airline/delete';
    const payload = [{ recordNumber: id }];

    axios
      .delete(url, {
        headers: {
          'Content-Type': 'application/json',
        },
        data: payload,
      })
      .then((response) => {
        console.warn(response.data);
        // Handle successful response here
      })
      .catch((error) => {
        console.error(error);
        // Handle error here
      });
    alert('Are You Sure You Want Delete Record !');

    fetchGet();
  };
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const toggle = () => {
    setOpen(!open);
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
                InputProps={{
                  endAdornment: (
                    <IconButton style={{ 'margin-right': '700px' }}>
                      <SearchOutlined />
                    </IconButton>
                  ),
                }}
                onClick={handleOpen}
                style={{ width: '600px' }}
                id="standard-bare"
                variant="outlined"
                placeholder="Search..."
              >
                {' '}
              </TextField>
              <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                  backdrop: {
                    timeout: 500,
                  },
                }}
              >
                <Fade
                  in={open}
                  style={{
                    position: 'absolute',
                  }}
                >
                  <Box
                    style={{
                      position: 'absolute',
                      // top: 'auto',
                      //left: '40%',

                      // transform: 'translate(-50%, -50%)',
                      width: 800,
                      bgcolor: 'background.paper',
                      border: '0px solid #000',
                      // boxShadow: 24,
                      p: 4,
                    }}
                  >
                    <Typography>
                      <Container>
                        <SimpleCard>
                          <SearchAirline />
                        </SimpleCard>
                      </Container>
                    </Typography>
                  </Box>
                </Fade>
              </Modal>
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
                    <SearchAirline></SearchAirline>;
                  }}
                />
              </IconButton>

              <IconButton>
                <FullscreenRounded />
              </IconButton>
            </Grid>
          </Grid>
          <TableRow>
            <TableCell align="center"> action</TableCell>
            <TableCell align="center">Airline Num Code</TableCell>
            <TableCell align="center">Airline IATA Code</TableCell>
            <TableCell align="center">Airline ICAO Code</TableCell>
            <TableCell align="center">Alliance Code</TableCell>
            <TableCell align="center">Airline name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => (
            <TableRow key={index}>
              <TableCell align="left" style={{ display: 'flex' }}>
                <IconButton>
                  <Checkbox />
                </IconButton>
                <IconButton onClick={() => deleteData(item.recordNumber)}>
                  <DeleteRounded />
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
              <TableCell align="center">{item.arln_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>

      <TablePagination
        sx={{ px: 2 }}
        page={page}
        component="div"
        rowsPerPage={rowsPerPage}
        count={user.length}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[10, 15, 20]}
        onRowsPerPageChange={handleChangeRowsPerPage}
        nextIconButtonProps={{ 'aria-label': 'Next Page' }}
        backIconButtonProps={{ 'aria-label': 'Previous Page' }}
      />
    </Box>
  );
};

export default AirlineTable;