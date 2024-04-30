import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export const Vendedor = () => {
  return (
    <Box
      sx={{
        pt: { xs: 4, sm: 10 },
        pb: { xs: 8, sm: 16 },
        color: "#06090a",
        bgcolor: "white",
        width: "150vh",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
            py: 5,
          }}
        >
          <Typography component="h2" variant="h4">
            Ingreso de articulos
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 3,
          }}
        >
          <TextField
            required
            id="outlined-required"
            label="Material"
            sx={{
              width: 500,
            }}
          />
          <TextField
            required
            id="outlined-required"
            label="Cantidad"
            sx={{
              width: 500,
            }}
          />
          <TextField
            required
            id="outlined-required"
            label="Precio Sugerido"
            sx={{
              width: 500,
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};
