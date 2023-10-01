import { useTranslation } from "react-i18next"
import { ContactInfo, ContactForm } from "../components"
import { PageLayout } from "../layout"
import { Grid, Typography } from "@mui/material"

export const Contact = () => {
  const [t] = useTranslation("global")
  return (
    <PageLayout justifyContent="start" display="flex" flexDirection="row">
      <Grid container justifyContent={"center"}>
        <Grid item display={"flex"} justifyContent={"center"} margin={"2rem 0"} >
          <Typography variant="h4" fontWeight={"bold"} fontSize={{xs:"1.8rem"}} className="degradado">{t("contact.title")}</Typography>
        </Grid>
        <Grid item display={"flex"} sx={{ flexDirection: { xs: "column-reverse", md: "row" }, margin: { xs: "0 1rem", md: "0 10rem" }, gap: "5rem", height: "100%" }}>
          <ContactForm />
          <ContactInfo />
        </Grid>
      </Grid>
    </PageLayout>
  )
}
