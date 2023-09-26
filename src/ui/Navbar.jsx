import { Grid, Link } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import CodeOffIcon from '@mui/icons-material/CodeOff';
import { SettingsMenu } from "../components/SettingsMenu";
import { useTranslation } from "react-i18next";


export const Navbar = () => {
    const [t] = useTranslation("global")
    return (
        <Grid container direction={"row"} justifyContent={"space-around"} alignItems={"center"} sx={{ position: "absolute", top: "0", paddingTop: "1rem", backgroundColor: "primary.main" }}>
            <Grid>
                <CodeOffIcon sx={{ fontSize: 40 }} />
            </Grid>
            <Grid display={"flex"} alignItems={"center"} gap={1}>
                <Link component={RouterLink} color={"inherit"} underline="hover" to="/">{t("navbar.home")}</Link>
                {/* <Link component={RouterLink} color={"inherit"} underline="hover" to="/about">{t("navbar.about")}</Link> */}
                <Link component={RouterLink} color={"inherit"} underline="hover" to="/contact">{t("navbar.contact")}</Link>
                <SettingsMenu />
            </Grid>
        </Grid>
    )
}
