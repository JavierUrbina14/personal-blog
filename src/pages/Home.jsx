import { Typography, Box } from "@mui/material";

export const Home = () => {
    return (
        <Box
            display="flex" // Utiliza flexbox para centrar verticalmente
            flexDirection="column" // Alinea los elementos en columna
            justifyContent="center" // Centra verticalmente el contenido
            alignItems="center" // Centra horizontalmente el contenido
        >
            <Typography variant="span">¡Hola! Soy</Typography>
            <Typography variant="h2" fontWeight="bold">
                Javier Urbina
            </Typography>
            <Typography variant="h6">Full-Stack Developer</Typography>
        </Box>
    );
};
