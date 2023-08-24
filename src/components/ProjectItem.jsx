import { Grid, Link, Typography } from "@mui/material";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

export const ProjectItem = ({ imagePath, projectPath, projectTitle, projectDescription }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Grid
            className="sombreado"
            sx={{
                border: "1px solid",
                position: "relative",
                borderRadius: "10px",
                overflow: "hidden",
            }}
        >
            <Link
                component={RouterLink}
                color={"inherit"}
                underline="none"
                to={projectPath}
                target="_blank"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Grid
                    sx={{
                        width: "17rem",
                        height: "10rem",
                        margin: 0,
                        padding: 0,
                    }}
                >
                    <img style={{ width: "100%", height: "100%" }} src={imagePath} alt="No se ha podido cargar la imagen" />
                    {isHovered && (
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                background: "rgba(0, 0, 0, 0.8)",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "white",
                                padding: "1rem",
                            }}
                        >
                            <Typography variant="h6">{projectTitle}</Typography>
                            <Typography>{projectDescription}</Typography>
                        </div>
                    )}
                </Grid>
            </Link>
        </Grid>
    );
};
