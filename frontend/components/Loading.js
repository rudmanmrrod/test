import { Box, CircularProgress, TableRow, TableCell } from '@mui/material';

const Loading = ({ colSpan }) => (
  <TableRow>
    <TableCell colSpan={colSpan}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    </TableCell>
  </TableRow>
  
);

export default Loading;