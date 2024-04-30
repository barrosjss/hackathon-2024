import { Button, Stack } from "@mui/material";
import { palette } from "@theme";
import { useMain } from "./userMain";
import { Link } from "react-router-dom";

export const Main = () => {
  const { logOut } = useMain();
  return (
    <Stack
      minHeight="100vh"
      spacing={5}
      px={50}
      justifyContent="center"
      bgcolor={palette.primary.main}
    >
      <Button color="error" variant="contained" onClick={logOut}>
        Log Out
      </Button>
      <Link to="/dashboard/register">main</Link>
    </Stack>
  );
};
