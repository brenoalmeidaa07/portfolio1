import { Box, Container, Grid, Typography, styled } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const HeroSection = () => {
  const HeroContainer = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up('xs')]: {
      paddingTop: "100px",
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: "0",
    }
  }));

  const AvatarImage = styled("img")(({ theme }) => ({
    width: "75%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`
  }));

  return (
    <HeroContainer>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Box position="relative">
              <Box position="absolute" width="150%" top={-100} right={0}>
                <AnimatedBackground />
              </Box>
              <Box position="relative" textAlign="center">
                <AvatarImage src={Avatar} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="h1" color="primary.contrastText" textAlign="center" pb={2}>Breno Almeida</Typography>
            <Typography variant="h2" color="primary.contrastText" textAlign="center">future software developer</Typography>
            <Grid container spacing={3} pt={3} justifyContent="center">
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton>
                  <DownloadIcon />
                  <Typography>Download CV</Typography>
                </StyledButton>
              </Grid>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton>
                  <MailOutlineIcon />
                  <Typography>Contact me</Typography>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </HeroContainer>
  );
}

export default HeroSection;
