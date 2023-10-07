// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const projectURLs = [
    "https://heroes-jt.netlify.app/",
    "https://gifexpert-jt.netlify.app/",
    "https://journal-jt.netlify.app/",
];

const projectTitles = [
    "Heroes App",
    "Gif App",
    "Journal App",
]

const projectTechnologies = [
    ["Reactjs", "Bootstrap", "Nodejs"],
    ["Reactjs", "Nodejs", "Api"],
    ["Reactjs", "Nodejs", "MaterialUI", "Firebase"],
];

export const ProjectSwiper = () => {
    const [t] = useTranslation("global")
    const [currentProject, setCurrentProject] = useState(0);
    const [currentTechnologies, setCurrentTechnologies] = useState(projectTechnologies[0]);

    const projectDescriptions = [
        t("projectswiper.heroesdescription"),
        t("projectswiper.gifdescription"),
        t("projectswiper.journaldescription"),
    ];

    const handleSlideChange = (swiper) => {
        const newIndex = swiper.activeIndex;
        setCurrentProject(newIndex);
        setCurrentTechnologies(projectTechnologies[newIndex]);
    };

    const handleVerProyectoClick = () => {
        const url = projectURLs[currentProject];
        window.open(url, "_blank");
    };

    return (
        <Grid className="sombreado" display={"flex"} sx={{ flexDirection: { xs: "column", md: "row" }, borderRadius: "1rem", width: { xs: "20rem", md: "40rem" } }} gap={{ xs: "1rem", md: "5rem" }} padding={"2rem"} bgcolor={"secondary.main"}>
            <Grid sx={{ maxWidth: "16rem" }}>
                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                    onSlideChange={(swiper) => handleSlideChange(swiper)}
                >
                    <SwiperSlide style={{background: 'linear-gradient(to top, #0f2027, #203a4300, #2c536400), url("/img/heroes-app-img.png") no-repeat 50% 50% / cover'}}/>
                    <SwiperSlide style={{background: 'linear-gradient(to top, #0f2027, #203a4300, #2c536400), url("/img/Gif-app-img.png") no-repeat 50% 50% / cover'}}/>
                    <SwiperSlide style={{background: 'linear-gradient(to top, #0f2027, #203a4300, #2c536400), url("/img/Journal-app-img.png") no-repeat 50% 50% / cover'}}/>
                </Swiper>
            </Grid>
            <Grid
                display={"flex"}
                sx={{
                    flexDirection: "column",
                    width: "16rem",
                    overflow: "hidden",
                    alignItems: "center",
                    margin: "1rem 0",
                    gap: "1rem"
                }}
            >
                <Grid>
                    <Typography color={"text.main"} variant="h5">{projectTitles[currentProject]}</Typography>
                    <Typography color={"text.main"}>{projectDescriptions[currentProject]}</Typography>
                </Grid>
                <Typography color={"text.main"} marginTop={"auto"}>{t("projectswiper.tecnologies")}</Typography>
                <Grid
                    container
                    justifyContent="center"
                    sx={{
                        gap: "1rem",
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(40px, 1fr))",
                        borderRadius: ".5rem"
                    }}
                >
                    
                    {currentTechnologies.map((technology, index) => (
                        <div key={index} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img
                                src={`img/${technology.toLowerCase()}_icon.png`}
                                alt={technology}
                                title={technology}
                                style={{ maxWidth: "40px" }}
                            />
                        </div>
                    ))}
                </Grid>
                <Button
                    variant="contained"
                    onClick={handleVerProyectoClick}
                    sx={{
                        color: "secondary.button",
                        backgroundColor: "primary.button",
                        alignSelf: "center",
                    }}
                >
                    {t("projectswiper.goproject")}
                </Button>
            </Grid>
        </Grid>
    );
}
