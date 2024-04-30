import { SxProps, Theme } from "@mui/material";
import { wallpaperHome } from "@assets";
// import { palette } from "@theme";

const root: SxProps<Theme> = {
  backgroundImage: `url(${wallpaperHome})`,
  backgroundSize: "cover",
};

const form: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  right: 0,
  bottom: 0,
  backgroundColor: "#F1F1F1",
  padding: 3.5,
  borderTopRightRadius: { xs: 0, sm: 30, md: 0 },
  borderTopLeftRadius: { xs: 0, sm: 30 },
  borderBottomLeftRadius: { xs: 0, sm: 0, md: 30 },
  height: { xs: "100%", sm: "75%", md: "100%" },
  width: {
    xs: "100%",
    md: "650px",
  },
  justifyContent: "space-between",
  alignItems: "center",
};

const languagesSelect: SxProps<Theme> = {
  width: "60px",
  height: "40px",
  backgroundColor: "white",
  textAlign: "center",
  position: "absolute",
  top: 10,
  right: 40,
  zIndex: 10,
};

const containerForm: SxProps<Theme> = {
  justifyContent: { xs: "flex-start", sm: "center" },
  alignItems: "center",
  mt: { xs: 6, sm: 0 },
};
export default {
  form,
  root,
  languagesSelect,
  containerForm,
};
