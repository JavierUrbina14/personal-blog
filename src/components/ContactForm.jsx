import { Button, Grid, TextField } from "@mui/material"
import { useForm } from "../hooks/useForm"


const initialFormContact = {
    name: "",
    phone: "",
    email: "",
    message: ""
}

export const ContactForm = () => {

    const {name, phone, email, message, onInputChange} = useForm(initialFormContact);    

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({name, phone, email, message});
    }

    return (
        <form onSubmit={handleSubmit} style={{display:"flex", alignItems:"center", width: "100%"}}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <TextField
                    label="Tu nombre"
                    type="text"
                    fullWidth
                    color="warning"
                    name='name'
                    value={name}
                    onChange={onInputChange}
                    // helperText={emailValid}
                    // error={!!emailValid && formSubmitted}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                    label="Tu telefono"
                    type="text"
                    fullWidth
                    color="warning"
                    name='phone'
                    value={phone}
                    onChange={onInputChange}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                    label="Tu e-mail"
                    type="text"
                    fullWidth
                    color="warning"
                    name='email'
                    value={email}
                    onChange={onInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    label="Tu mensaje"
                    type="text"
                    fullWidth
                    color="warning"
                    multiline
                    rows={7}
                    name='message'
                    value={message}
                    onChange={onInputChange}
                    />
                </Grid>
                <Grid item container direction={"row"} justifyContent={"end"}>
                    <Button type='submit' variant="contained" sx={{ color: "inherit", backgroundColor: "#Bf7625" }}>
                        Enviar
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}


