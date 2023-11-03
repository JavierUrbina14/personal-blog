import { useContext } from "react";

import { Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

import { ProjectsDetails } from "./";
import { HandleProjectContext } from "../context";


export const ProjectSwiper = () => {

  const { projects, handleSlideChange } = useContext(HandleProjectContext);

  return (
    <Grid
      className="sombreado"
      display={"flex"}
      sx={{
        flexDirection: { xs: "column", md: "row" },
        borderRadius: "1rem",
        width: { xs: "20rem", md: "40rem" },
      }}
      gap={{ xs: "1rem", md: "5rem" }}
      padding={"2rem"}
      bgcolor={"secondary.main"}
    >
      <Grid sx={{ maxWidth: "16rem" }}>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          onSlideChange={(swiper) => handleSlideChange(swiper)}
        >
          {projects.map((project, index) => (
            <SwiperSlide
              key={index}
              style={{
                background: `linear-gradient(to top, #0f2027, #203a4300, #2c536400), url(${project.imagePath}) no-repeat 50% 50% / cover`,
              }}
            />
          ))}
        </Swiper>
      </Grid>

      <ProjectsDetails />

    </Grid>
  );
};