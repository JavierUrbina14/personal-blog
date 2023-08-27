import { Grid } from "@mui/material"
import { PageLayout } from "../layout/PageLayout"
import { ContactForm } from "../components/ContactForm"
import { ContactInfo } from "../components/ContactInfo"
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';

export const Contact = () => {
  return (
    <PageLayout justifyContent="start" display="flex" flexDirection="row">
      <Grid>
        <Grid display={"flex"} justifyContent={"center"}>
          <h1>Ponete en contacto ツ</h1>
        </Grid>
        <Grid display={"flex"} sx={{margin: "0 10rem", gap: "5rem", height: "100%"}}>
          <ContactForm />
          <ContactInfo />
        </Grid>
      </Grid>
    </PageLayout>
  )
}
