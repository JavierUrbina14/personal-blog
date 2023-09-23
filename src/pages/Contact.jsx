import { useTranslation } from "react-i18next"
import { ContactInfo } from "../components/ContactInfo"
import { ContactForm } from "../components/ContactForm"
import { PageLayout } from "../layout/PageLayout"
import { Grid } from "@mui/material"

export const Contact = () => {
  const [t] = useTranslation("global")
  return (
    <PageLayout justifyContent="start" display="flex" flexDirection="row">
      <Grid>
        <Grid display={"flex"} justifyContent={"center"}>
          <h1>{t("contact.title")}</h1>
        </Grid>
        <Grid display={"flex"} sx={{margin: "0 10rem", gap: "5rem", height: "100%"}}>
          <ContactForm />
          <ContactInfo />
        </Grid>
      </Grid>
    </PageLayout>
  )
}
