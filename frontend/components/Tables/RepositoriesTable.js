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
  IconButton,
  Chip,
} from '@mui/material';
import { Visibility } from '@mui/icons-material';

// Components
import Loading from '../Loading';


const RepositoriesTable = ({ data, page, total, rowsPerPage, loading, onPageChange }) => (
  <TableContainer component={Paper}>
    <Table aria-label="repositories table">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Owner</TableCell>
          <TableCell>Topics</TableCell>
          <TableCell>Stars</TableCell>
          <TableCell>Watchers</TableCell>
          <TableCell>See repo</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        { loading ? (
          <Loading colSpan={7} />
        ) :
        data.length > 0 ?  data.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.full_name}</TableCell>
            <TableCell>{row.description}</TableCell>
            <TableCell>{row.owner.login}</TableCell>
            <TableCell>{row.topics.length > 0 && row.topics.map( (topic) => (
              <Chip label={topic} />
            ) )}</TableCell>
            <TableCell>{row.stargazers_count}</TableCell>
            <TableCell>{row.watchers_count}</TableCell>
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
            <TableCell colSpan={7} sx={{ textAlign: "center" }}>
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

export default RepositoriesTable;