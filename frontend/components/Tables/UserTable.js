import Image from 'next/image'
// Mui
import {
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableFooter,
  TablePagination,
  Paper,
  IconButton
} from '@mui/material';
import { Visibility } from '@mui/icons-material';

// Components
import Loading from '../Loading';


const UserTable = ({ data, page, total, rowsPerPage, loading, onPageChange }) => (
  <TableContainer component={Paper}>
    <Table aria-label="user table">
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>Username</TableCell>
          <TableCell>See Profile</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {loading ? (
          <Loading colSpan={3} />
        ) : data.length > 0 ?  data.map((row) => (
          <TableRow key={row.id}>
            <TableCell>
              <Image
                src={row.avatar_url}
                width={50}
                height={50}
                alt={`Profile image ${row.login}`}
              />
             </TableCell>
            <TableCell>{row.login}</TableCell>
            <TableCell>
              <IconButton color="primary" aria-label="see profile">
                <a target="_blank" href={row.html_url}>
                  <Visibility />
                </a>
              </IconButton>
            </TableCell>
          </TableRow>
        )): (
          <TableRow>
            <TableCell colSpan={3} sx={{ textAlign: "center" }}>
              No data found
            </TableCell>
          </TableRow>
        )}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TablePagination 
            page={page}
            count={total}
            rowsPerPage={rowsPerPage}
            onPageChange={onPageChange}
          />
        </TableRow>
      </TableFooter>
    </Table>
  </TableContainer>
);

export default UserTable;