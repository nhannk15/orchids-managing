import { Avatar, AvatarGroup, Box, Card, Divider, Grid, Typography } from "@mui/material";
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';

function AboutPage() {
    return (
        <>
            <Box sx={{
                paddingLeft: "12.5%",
                paddingRight: "12.5%",
                marginTop: "30px",

            }}>

                <Box sx={{
                    padding: "20px",
                    borderRadius: "16px",
                    boxShadow: "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
                    background: "#8e2a9b",
                    background: "linear-gradient(90deg,rgba(142, 42, 155, 1) 0%, rgba(199, 87, 150, 1) 100%, rgba(237, 83, 83, 1) 100%)",
                    marginBottom: "20px"
                }}>
                    <Typography
                        variant="h3"
                        sx={{
                            color: "white"
                        }}>
                        About us
                    </Typography>

                    <Typography variant="h6" sx={{ color: "white" }}>
                        Love flowers to the deep of our heart
                    </Typography>

                    <Typography variant="p" sx={{ color: "white" }}>
                        Orchid is found by orchid lovers with the intent of bring every single family the most special orchids.
                    </Typography>
                </Box>

                <Grid container spacing={1}>
                    <Grid size={{ sx: 12, md: 4 }}>
                        <Box sx={{
                            background: " #e3cae2",
                            backgroundColor: "linear-gradient(90deg,rgba(230, 76, 214, 0) 0%, rgba(237, 175, 224, 1) 100%, rgba(255, 255, 255, 1) 100%)",
                            borderTopLeftRadius: "16px",
                            borderBottomLeftRadius: "16px"
                        }}>
                            <Typography variant="h6" color="secondary">
                                2018
                            </Typography>

                            <Typography variant="p" color="secondary">
                                Foundation year
                            </Typography>
                        </Box>

                    </Grid>

                    <Grid size={{ sx: 12, md: 4 }}>
                        <Box sx={{
                            background: " #e3cae2",
                            backgroundColor: "linear-gradient(90deg,rgba(230, 76, 214, 0) 0%, rgba(237, 175, 224, 1) 100%, rgba(255, 255, 255, 1) 100%)",
                        }}>
                            <Typography variant="h6" color="secondary">
                                200+
                            </Typography>

                            <Typography variant="p" color="secondary">
                                orchids
                            </Typography>
                        </Box>

                    </Grid>

                    <Grid size={{ sx: 12, md: 4 }}>
                        <Box sx={{
                            background: " #e3cae2",
                            backgroundColor: "linear-gradient(90deg,rgba(230, 76, 214, 0) 0%, rgba(237, 175, 224, 1) 100%, rgba(255, 255, 255, 1) 100%)",
                            borderBottomRightRadius: "16px",
                            borderTopRightRadius: "16px"
                        }}>
                            <Typography variant="h6" color="secondary">
                                1.2k+
                            </Typography>

                            <Typography variant="p" color="secondary">
                                customers
                            </Typography>
                        </Box>

                    </Grid>

                    <Grid size={{ sx: 12, md: 12 }}
                        sx={{
                            boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                            borderRadius: "16px",
                            marginBottom: "30px",
                            marginTop: "10px"
                        }}>
                        <Box sx={{
                            width: "100%",
                            textAlign: "center",
                            display: "flex",
                            justifyContent: "center",
                            padding: "30px",
                        }}>
                            <Box sx={{ width: "100%", textAlign: "left" }}>
                                <Box>
                                    <Typography variant='h6' sx={{ textAlign: "center" }}>
                                        Foundation Process
                                    </Typography>
                                </Box>
                                <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />

                                <Box>
                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                        <LooksOneIcon sx={{ fontSize: "30px", marginRight: "10px" }} />
                                        <Box>
                                            <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
                                                1/2006 - 1/2011
                                            </Typography>
                                            <Typography sx={{ fontSize: "12px" }}>
                                                Foundation
                                            </Typography>
                                            <Typography sx={{ fontSize: "12px", color: "", mt: 0.5 }}>
                                                Established the company with a vision to revolutionize the industry. Built core team and developed initial product prototypes.
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />

                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                    <LooksTwoIcon sx={{ fontSize: "30px", marginRight: "10px" }} />
                                    <Box>
                                        <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
                                            1/2011 - 1/2016
                                        </Typography>
                                        <Typography sx={{ fontSize: "12px" }}>
                                            Transfermatk
                                        </Typography>
                                        <Typography sx={{ fontSize: "12px", color: "", mt: 0.5 }}>
                                            Successfully transferred technology and expanded operations to international markets. Established partnerships with key global players.
                                        </Typography>
                                    </Box>
                                </Box>
                                <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />

                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                    <Looks3Icon sx={{ fontSize: "30px", marginRight: "10px" }} />
                                    <Box>
                                        <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
                                            1/2016 - 1/2021
                                        </Typography>
                                        <Typography sx={{ fontSize: "12px" }}>
                                            Oversea
                                        </Typography>
                                        <Typography sx={{ fontSize: "12px", color: "", mt: 0.5 }}>
                                            Expanded presence across Asia and Europe. Served over 300 clients and established regional headquarters in Singapore.
                                        </Typography>
                                    </Box>
                                </Box>
                                <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />

                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                    <Looks4Icon sx={{ fontSize: "30px", marginRight: "10px" }} />
                                    <Box>
                                        <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
                                            1/2021 - 1/2026
                                        </Typography>
                                        <Typography sx={{ fontSize: "12px" }}>
                                            AI Integrated
                                        </Typography>
                                        <Typography sx={{ fontSize: "12px", color: "", mt: 0.5 }}>
                                            Integrated artificial intelligence into core products. Launched AI-powered solutions and achieved market leadership position.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>

                            <Box sx={{ width: "100%" }}>
                                <Typography variant="h6">
                                    Our founders
                                </Typography>

                                <Grid container spacing={2} sx={{ padding: "20px 50px 20px 50px" }}>
                                    <Grid size={{ sx: 12, md: 4 }}>
                                        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                                            <Avatar
                                                alt="Remy Sharp"
                                                src="https://assets.goal.com/images/v3/bltde1b5888be594cca/3e947186d512164cf8dbe0987a865dd2b714eea6.png?auto=webp&format=pjpg&width=3840&quality=60"
                                                sx={{ width: 56, height: 56 }}
                                            />
                                            <Typography variant="overline">
                                                David Beckham
                                            </Typography>
                                        </Box>

                                    </Grid>

                                    <Grid size={{ sx: 12, md: 4 }}>
                                        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                                            <Avatar
                                                alt="Remy Sharp"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREJC0WlPk2plSa2ctEV4LipQM0Q2Z_3-VI9g&s"
                                                sx={{ width: 56, height: 56 }}
                                            />
                                            <Typography variant="overline">
                                                Paul Scholes
                                            </Typography>
                                        </Box>

                                    </Grid>

                                    <Grid size={{ sx: 12, md: 4 }}>
                                        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                                            <Avatar
                                                alt="Remy Sharp"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGPMZGIZveL3knuCN6mkBVvgA2TYnumgirA&s"
                                                sx={{ width: 56, height: 56 }}
                                            />
                                            <Typography variant="overline">
                                                David de Gea
                                            </Typography>
                                        </Box>

                                    </Grid>

                                    <Grid size={{ sx: 12, md: 12 }}>
                                        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                                            <AvatarGroup total={24}>
                                                <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRGL1xTXd9GvJ1D0e1Ji8oVZZfHBmIIyESaQ&s" />
                                                <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrCfwf0oGlsnbUEGWfFxqQL3oqczdwaJCa0g&s" />
                                                <Avatar alt="Agnes Walker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGPu08cYuuOlbXJX_8nt8DBcYaZ9juxy6ZTw&s" />
                                                <Avatar alt="Trevor Henderson" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-EAusrTDYWa6UqP5Xcyp56IT8Kft1pQTnJQ&s" />
                                            </AvatarGroup>
                                            <Typography variant="overline">
                                                AND many more important people
                                            </Typography>
                                        </Box>

                                    </Grid>



                                </Grid>

                            </Box>
                        </Box>

                    </Grid>

                </Grid>

            </Box>
        </>
    )
}

export default AboutPage;