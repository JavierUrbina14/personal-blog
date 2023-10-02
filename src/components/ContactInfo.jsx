import { Grid, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"

export const ContactInfo = () => {
    const [t] = useTranslation("global")
    return (
        <Grid maxWidth={{md:"22rem", lg:"40rem", xl:"90rem"}}>
            <Typography variant="h5" marginBottom={"1rem"}>{t("contactinfo.info")}</Typography>
            <Typography>{t("contactinfo.infotext")}</Typography>
            <ul>
                <li>jav.torresu@gmail.com</li>
                <li>+569 3024 9980</li>
                <li>Santiago, Chile</li>
            </ul>
        </Grid>
    )
}
