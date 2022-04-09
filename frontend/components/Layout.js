import { Box } from "@mui/material";
import Navigation from "./Navigation";

const Layout = ({children}) => (
  <Box
    sx={{
      display: "block",
    }}
  >
    <Box>
      <Navigation />
    </Box>
    <Box
      sx={{ alignSelf: "start", height: "100%" }}
    >
      {children}
    </Box>
  </Box>
);

export default Layout;