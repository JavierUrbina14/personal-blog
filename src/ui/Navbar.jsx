import { Link as RouterLink } from "react-router-dom"
import { MenuOptions, SettingsMenu } from "../components";
import { useTranslation } from "react-i18next";
import { Grid, Link } from "@mui/material"
import CodeOffIcon from '@mui/icons-material/CodeOff';
import { useEffect, useState } from "react";


export const Navbar = () => {
    const [t] = useTranslation("global")
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <Grid container direction={"row"} justifyContent={"space-around"} alignItems={"center"} sx={{ position: "absolute", top: "0", paddingTop: "1rem", backgroundColor: "primary.main" }}>
            <Grid component={RouterLink} color={"inherit"} underline="none" to={"/"} width={{ md: "110px" }} display={"flex"} justifyContent={"center"}>
                <CodeOffIcon sx={{ fontSize: 40 }} />
            </Grid>
            <Grid display={"flex"} alignItems={"center"} gap={1.5}>
                <Link component={RouterLink} color={"inherit"} underline="hover" to="/">{t("navbar.home")}</Link>
                <Link component={RouterLink} color={"inherit"} underline="hover" to="/about">{t("navbar.about")}</Link>
                <Link component={RouterLink} color={"inherit"} underline="hover" to="/contact">{t("navbar.contact")}</Link>
            </Grid>
            <Grid width={{ md: "110px" }}>
                {windowWidth > 660 ? <MenuOptions /> : <SettingsMenu />}
            </Grid>
        </Grid>
    )
}
