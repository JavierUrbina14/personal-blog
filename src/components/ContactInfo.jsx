import { Grid } from "@mui/material"
import { useTranslation } from "react-i18next"

export const ContactInfo = () => {
    const [t] = useTranslation("global")
    return (
        <Grid>
            <h1>{t("contactinfo.info")}</h1>
            <p>{t("contactinfo.infotext")}</p>
            <ul>
                <li>jav.torresu@gmail.com</li>
                <li>+569 3024 9980</li>
                <li>Santiago, Chile</li>
            </ul>
            {/* <h1>{t("contactinfo.rrss")}</h1>
            <div>
                <p>{t("contactinfo.linkedin")}</p>
                <p>{t("contactinfo.twitter")}</p>
            </div> */}
        </Grid>
    )
}
