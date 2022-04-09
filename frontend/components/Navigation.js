import { AppBar, Toolbar, Box, Button } from '@mui/material';
import Link from 'next/link'

const Navigation = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
          <Button
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            <Link href="/">
              <a>Users</a>
            </Link>
          </Button>
          <Button
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            <Link href="/repositories">
              <a>Repositories</a>
            </Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;