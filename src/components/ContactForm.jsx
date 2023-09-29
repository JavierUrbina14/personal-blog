import { useForm, useNotification } from "../hooks"
import { useTranslation } from "react-i18next"
import { Notification } from "./";
import { Button, Grid, TextField } from "@mui/material"
import emailjs from '@emailjs/browser';
import SendIcon from '@mui/icons-material/Send';

const initialFormContact = {
    name: "",
    phone: "",
    email: "",
    message: ""
}

export const ContactForm = () => {
    const [t] = useTranslation("global")
    const { name, phone, email, message, onInputChange } = useForm(initialFormContact);
    const { open, messageNotification, severity, disabled, handleNotification, handleClose } = useNotification();


    const handleSubmit = (event) => {
        event.preventDefault();
        emailjs.send("service_ljans2d", "template_xo8outb", {
            user_name: name,
            message: message,
            user_phone: phone,
            user_email: email,
        }, "AL_rLlhZZ34GoeVHC")
        .then(
            handleNotification(t("contactform.emailsent"),"success")
        );
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center", width: "100%" }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <TextField
                        label={t("contactform.name")}
                        type="text"
                        fullWidth
                        color="warning"
                        name='name'
                        value={name}
                        onChange={onInputChange}
                        disabled={disabled}
                    // helperText={emailValid}
                    // error={!!emailValid && formSubmitted}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        label={t("contactform.phone")}
                        type="text"
                        fullWidth
                        color="warning"
                        name='phone'
                        value={phone}
                        onChange={onInputChange}
                        disabled={disabled}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        label={t("contactform.email")}
                        type="text"
                        fullWidth
                        color="warning"
                        name='email'
                        value={email}
                        onChange={onInputChange}
                        disabled={disabled}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label={t("contactform.message")}
                        type="text"
                        fullWidth
                        color="warning"
                        multiline
                        rows={7}
                        name='message'
                        value={message}
                        onChange={onInputChange}
                        disabled={disabled}
                    />
                </Grid>
                <Grid item container direction={"row"} justifyContent={"end"}>
                    <Button type='submit' variant="contained" endIcon={<SendIcon />} disabled={disabled} sx={{ color: "inherit", backgroundColor: "#Bf7625" }}>
                        {t("contactform.send")}
                    </Button>
                    <Notification open={open} text={messageNotification} severity={severity} close={handleClose} />
                </Grid>
            </Grid>
        </form>
    )
}


