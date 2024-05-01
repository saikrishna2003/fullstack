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
  { id: 'themeName', label: 'Theme Name', minWidth: 100 },
  { id: 'themeGender', label: 'Theme Gender', minWidth: 150 },
  { id: 'Price', label: 'Price ($)', minWidth: 100 },
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

  const themes = [
    { 
      id: 1, 
      themeName: 'Adventure', 
      themeGender: 'Male', 
      Price: 500
    },
    { 
      id: 2, 
      themeName: 'Fantasy', 
      themeGender: 'Male', 
      Price: 600
    },
    { 
      id: 3, 
      themeName: 'Nature', 
      themeGender: 'Female', 
      Price: 550
    },
    { 
      id: 4, 
      themeName: 'Sci-Fi', 
      themeGender: 'Male', 
      Price: 520
    },
    { 
      id: 5, 
      themeName: 'Historical', 
      themeGender: 'Female', 
      Price: 510
    },
    { 
      id: 6, 
      themeName: 'Western', 
      themeGender: 'Male', 
      Price: 540
    },
    { 
      id: 7, 
      themeName: 'Futuristic', 
      themeGender: 'Male', 
      Price: 570
    },
    { 
      id: 8, 
      themeName: 'Magical', 
      themeGender: 'Female', 
      Price: 520
    },
    { 
      id: 9, 
      themeName: 'Superhero', 
      themeGender: 'Male', 
      Price: 530
    },
    { 
      id: 10, 
      themeName: 'Movies', 
      themeGender: 'Female', 
      Price: 550
    },
    // Add more theme data here...
  ];

  const filteredThemes = themes.filter(theme => theme.Price >= 500);

  return (
    <div className='p-10'>
      <h1 className="text-sec font-bold text-2xl text-center py-2 uppercase mb-3 ml-80">
        Themes for the Birthday party
      </h1>
      <Paper className='ml-44' sx={{ width: '100%', overflow: 'hidden' }}>
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
              {filteredThemes
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((theme) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={theme.id}>
                    {columns.map((column) => {
                      const value = theme[column.id];
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
          count={filteredThemes.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
