import { Button, Divider, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';

const formStyle = {
    display: "flex",
    gap: 2,
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset",
    padding: "30px",
    borderRadius: "16px",
    marginBottom: "100px"
}

function ContactPage() {

    const [error, setError] = useState(false);
    const [sending, setSending] = useState(false);

    const handleSending = () => {
        setSending(!sending);
    }

    return (
        <>
            <Box sx={{ paddingRight: "12.5%", paddingLeft: "12.5%", textAlign: "left" }}>
                <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 0 }}>
                    CONTACT
                </Typography>

                <Typography variant="h3" sx={{ marginTop: 0 }}>
                    WE'RE ALWAYS ALL EARS TO YOU
                </Typography>

                <Typography variant="inherit" sx={{ marginTop: 0, marginBottom: 5 }}>
                    Leave the message, we'll contact you within 24 hours.
                </Typography>

                <Box component={"form"}
                    sx={formStyle}>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, width: "50%" }}>
                        <Box sx={{ display: "flex", flexWrap: "nowrap", gap: 2, width: "100%" }}>
                            <TextField
                                fullWidth
                                size='small'
                                label="Full name"
                                variant='outlined'
                                error={error}
                                helperText={error && "Not null"}
                            />

                            <TextField
                                fullWidth
                                size='small'
                                label="Phone number"
                                error={error}
                                helperText={error && "Not null"}
                            />
                        </Box>

                        <TextField
                            fullWidth
                            size='small'
                            label="Email address"
                            error={error}
                            helperText={error && "Not null"}
                        />

                        <TextField
                            fullWidth
                            size='small'
                            label="Your problem title"
                            error={error}
                            helperText={error && "Not null"}
                        />

                        <TextField
                            label="Content"
                            multiline
                            fullWidth
                            rows={4}
                            variant="outlined"
                            error={error}
                            helperText={error && "Not null"}
                        />

                        <Button
                            variant='outlined'
                            color='inherit'
                            sx={{ width: "100%" }}
                            startIcon={sending ? <CircularProgress size={20} color='inherit'/> : <SendIcon />}
                            onClick={handleSending}
                        >
                            SEND
                        </Button>

                    </Box>

                    <Box
                        sx={{
                            width: "50%",
                            boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset",
                            marginTop: "0",
                            padding: "20px",
                            borderRadius: "10px"
                        }}>
                        <Box>
                            <Typography variant='h6' sx={{ color: "black" }}>
                                Contact info
                            </Typography>

                            <Typography variant='inherit' sx={{ marginBottom: "20px" }}>
                                You can also contact us through these channels
                            </Typography>
                        </Box>

                        <Box>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <LocationOnIcon sx={{ fontSize: "30px", marginRight: "10px" }} />
                                <Box>
                                    <Typography sx={{ fontSize: "12px", color: "black", fontWeight: "bold" }}>
                                        Address
                                    </Typography>
                                    <Typography sx={{ fontSize: "12px" }}>
                                        B Domitory, Thu Duc, HCM
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />

                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <PhoneIcon sx={{ fontSize: "30px", marginRight: "10px" }} />
                            <Box>
                                <Typography sx={{ fontSize: "12px", color: "black", fontWeight: "bold" }}>
                                    Phone number
                                </Typography>
                                <Typography sx={{ fontSize: "12px" }}>
                                    0945692584
                                </Typography>
                            </Box>
                        </Box>
                        <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />

                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <EmailIcon sx={{ fontSize: "30px", marginRight: "10px" }} />
                            <Box>
                                <Typography sx={{ fontSize: "12px", color: "black", fontWeight: "bold" }}>
                                    Email
                                </Typography>
                                <Typography sx={{ fontSize: "12px" }}>
                                    nhannk15@gmail.com
                                </Typography>
                            </Box>
                        </Box>
                        <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />

                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <AccessTimeIcon sx={{ fontSize: "30px", marginRight: "10px" }} />
                            <Box>
                                <Typography sx={{ fontSize: "12px", color: "black", fontWeight: "bold" }}>
                                    Working hours
                                </Typography>
                                <Typography sx={{ fontSize: "12px" }}>
                                    Monday - Saturday, 8:00 - 18:00
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{
                            padding: "15px",
                            marginTop: "15px",
                            borderRadius: "8px",
                            background: "#EEEDFE"
                        }}>
                            <Box sx={{ display: "flex", alignItems: "center", alignContent: "center" }}>
                                <InfoOutlinedIcon sx={{ fontSize: "30px", marginRight: "10px" }} />
                                <Box sx={{display: "flex", flexDirection: "column"}}>
                                    <Typography sx={{ fontSize: "12px", color: "black", fontWeight: "bold" }}>
                                        Flash response
                                    </Typography>
                                    <Typography sx={{ fontSize: "12px" }}>
                                        We commit to response within 24h of work.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ContactPage;