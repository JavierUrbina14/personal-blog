import { useTranslation } from "react-i18next"
import { ContactInfo, ContactForm } from "../components"
import { PageLayout } from "../layout"
import { Grid, Typography } from "@mui/material"

export const Contact = () => {
  const [t] = useTranslation("global")
  return (
    <PageLayout>
      <Grid display="flex" justifyContent="center" margin={{xs:"1rem 0",lg:"1.5rem 0", xl:"4rem 0"}}>
        <Typography variant="h4" fontWeight={"bold"} fontSize={{ xs: "1.6rem", md:"1.8rem", lg:"2rem", xl: "2.5rem" }} className="degradado">{t("contact.title")}</Typography>
      </Grid>
      <Grid container justifyContent={"center"}>
        <Grid item display={"flex"} sx={{ flexDirection: { xs: "column-reverse", md: "row" }, margin: { xs: "1rem", md: "0 3rem", lg: "0 5rem", xl: "1rem 10rem" }, gap: {xs:"1rem", md:"5rem"}, height: "100%" }}>
          <ContactForm />
          <ContactInfo />
        </Grid>
      </Grid>
    </PageLayout>
  )
}
