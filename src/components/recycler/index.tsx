import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const items = [
  {
    name: "carton",
    cantidad: 100,
    precio: 5,
  },
  {
    name: "carton",
    cantidad: 100,
    precio: 5,
  },
  {
    name: "carton",
    cantidad: 100,
    precio: 5,
  },
  {
    name: "carton",
    cantidad: 100,
    precio: 5,
  },
  {
    name: "carton",
    cantidad: 100,
    precio: 5,
  },
  {
    name: "carton",
    cantidad: 100,
    precio: 5,
  },
];

export const Recycler = () => {
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
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h4">
            Articulos publicados
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: "100%",
                  border: "1px solid",
                  borderColor: "grey.800",
                  background: "transparent",
                  backgroundColor: "grey.400",
                }}
              >
                <div>
                  <Typography fontSize={25}>
                    {item.name}
                  </Typography>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.cantidad}
                  </Typography>
                  <Typography variant="body2" fontSize={20} sx={{ color: "grey.800" }}>
                    {item.precio}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
