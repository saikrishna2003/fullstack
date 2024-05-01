import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'id', label: 'ID', minWidth: 50 },
  { id: 'cityName', label: 'City Name', minWidth: 100 },
  { id: 'availableHalls', label: 'Available Halls', minWidth: 150 },
];

export default function Dashboard () {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const cities = [
    { 
      id: 1, 
      cityName: 'New York', 
      availableHalls: 25
    },
    { 
      id: 2, 
      cityName: 'Los Angeles', 
      availableHalls: 20
    },
    { 
      id: 3, 
      cityName: 'Chicago', 
      availableHalls: 15
    },
    { 
      id: 4, 
      cityName: 'Houston', 
      availableHalls: 10
    },

    { 
        id: 5, 
        cityName: 'San Francisco', 
        availableHalls: 18
      },
      { 
        id: 6, 
        cityName: 'Miami', 
        availableHalls: 12
      },
      { 
        id: 7, 
        cityName: 'Seattle', 
        availableHalls: 14
      },
      { 
        id: 8, 
        cityName: 'Boston', 
        availableHalls: 16
      },
      { 
        id: 9, 
        cityName: 'Atlanta', 
        availableHalls: 11
      },
      { 
        id: 10, 
        cityName: 'Denver', 
        availableHalls: 13
      },
    // Add more city data here...
  ];

  return (
    <div className='p-10'>
      <h1 className="text-sec font-bold text-2xl text-center py-2 uppercase mb-3 ml-80">
        Cities and Available Halls
      </h1>
      <Paper className='ml-52' sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align="center" // Center align for all columns
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {cities
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((city) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={city.id}>
                    {columns.map((column) => {
                      const value = city[column.id];
                      return (
                        <TableCell key={column.id} align="center">
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={cities.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
