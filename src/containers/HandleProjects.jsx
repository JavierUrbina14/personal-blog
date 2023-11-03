import { useState } from "react";
import { useTranslation } from "react-i18next";

export const HandleProjects = () => {

    const [t] = useTranslation("global")
    const [currentProject, setCurrentProject] = useState(0);

    const projects = [
        {
            title: "Heroes App",
            url: "https://heroes-jt.netlify.app/",
            imagePath: "/img/heroes-app-img.png",
            tecnologies: ["Reactjs", "Bootstrap", "Nodejs"],
            description: t("projectswiper.heroesdescription"),
        },
        {
            title: "Gif React App",
            url: "https://gifexpert-jt.netlify.app/",
            imagePath: "/img/Gif-app-img.png",
            tecnologies: ["Reactjs", "Nodejs", "Api"],
            description: t("projectswiper.gifdescription"),
        },
        {
            title: "Journal App",
            url: "https://journal-jt.netlify.app/",
            imagePath: "/img/Journal-app-img.png",
            tecnologies: ["Reactjs", "Nodejs", "MaterialUI", "Firebase"],
            description: t("projectswiper.journaldescription"),
        },
        {
            title: "Gif Angular App",
            url: "https://gif-expert-angular.netlify.app",
            imagePath: "/img/GifAngular-app-img.png",
            tecnologies: ["Angular", "Bootstrap", "Nodejs"],
            description: t("projectswiper.gifangulardescription"),
        },
    ]



    const handleGoProject = () => {
        const url = projects[currentProject].url;
        window.open(url, "_blank");
    };

    const handleSlideChange = (swiper) => {
        const newIndex = swiper.activeIndex;
        setCurrentProject(newIndex);
    };



    return {
        currentProject,
        projects,
        handleSlideChange,
        handleGoProject,
        setCurrentProject,
    }
}
