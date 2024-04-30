import {
  Box,
  // Button,
  // MenuItem,
  // Select,
  SelectChangeEvent,
  Stack,
  // Typography,
} from "@mui/material";
// import { logo } from "@assets";
import { PropsLayoutHome } from "./interface";
import styles from "./styles";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
export const LayoutHome = ({
  children,
  onSubmit,
  onChangeLanguage,
}: // language,
// t,
// backButton = false,
PropsLayoutHome) => {
  const navigate = useNavigate();
  const handleChange = ({ target }: SelectChangeEvent) => {
    onChangeLanguage(target.value);
  };

  return (
    <Stack minHeight="100vh" alignItems="center" sx={styles.root}>
      {/* <Select
        value={language}
        onChange={handleChange}
        variant="standard"
        sx={styles.languagesSelect}
      >
        {["es", "en"].map((code) => (
          <MenuItem key={code} value={code}>
            {code}
          </MenuItem>
        ))}
      </Select> */}
      <Box component="form" sx={styles.form} onSubmit={onSubmit}>
        <Stack
          minWidth={{ xs: "100%", sm: 480 }}
          sx={styles.containerForm}
          flexGrow={1}
          spacing={3}
        >
          {children}
        </Stack>
      </Box>
    </Stack>
  );
};
