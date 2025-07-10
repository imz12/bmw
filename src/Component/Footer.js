import React from 'react'
import { Container, Grid, Typography, Box, Link, colors, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { WrapText } from '@mui/icons-material';

const Footer = () => {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <Box
                component="footer"
                sx={{
                    backgroundColor: theme.palette.color = '#f6f6f6',
                    color: theme.palette.grey[500],
                    // py: 4,
                    p: 8,
                    pt: 7,
                    pb: 3
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={15} justifyContent={isSmallScreen ? 'center' : 'space-between'}>
                        <Grid item xs={12} sm={3}>
                            <Typography variant="h6" gutterBottom color='black' fontFamily={'serif'} >
                                Contact
                            </Typography>
                            <Box marginBottom={1}>
                                <Link href="#" color="inherit" underline="hover" fontFamily={'initial'}>
                                    Find a Dealer
                                </Link>
                            </Box>
                            <Box marginBottom={1}>
                                <Link href="#" color="inherit" underline="hover" fontFamily={'initial'}>
                                    Request a Test Drive
                                </Link>
                            </Box>
                            <Box marginBottom={1}>
                                <Link href="#" color="inherit" underline="hover" fontFamily={'initial'}>
                                    Careers
                                </Link>
                            </Box>
                            <Box marginBottom={1}>
                                <Link href="#" color="inherit" underline="hover" fontFamily={'initial'}>
                                    Contact Us
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Typography variant="h6" gutterBottom color='black' fontFamily={'serif'} >
                                Quick Links
                            </Typography>
                            <Box marginBottom={1}>
                                <Link href="#" color="inherit" underline="hover" fontFamily={'initial'}>
                                    Build your BMW
                                </Link>
                            </Box>
                            <Box marginBottom={1}>
                                <Link href="#" color="inherit" underline="hover" fontFamily={'initial'}>
                                    BMW Financial Services
                                </Link>
                            </Box>
                            <Box marginBottom={1}>
                                <Link href="#" color="inherit" underline="hover" fontFamily={'initial'}>
                                    BMW Safety
                                </Link>
                            </Box>
                            <Box marginBottom={1}>
                                <Link href="#" color="inherit" underline="hover" fontFamily={'initial'}>
                                    EMI Calculator
                                </Link>
                            </Box>
                            <Box marginBottom={1}>
                                <Link href="#" color="inherit" underline="hover" fontFamily={'initial'}>
                                    BMW Premium Selection (Used Cars)
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Typography variant="h6" gutterBottom color='black' fontFamily={'serif'} >
                                Experience BMW
                            </Typography>
                            <Box marginBottom={1}>
                                <Link href="#" color="inherit" underline="hover" fontFamily={'initial'}>
                                    BMW Group
                                </Link>
                            </Box>
                            <Box marginBottom={1}>
                                <Link href="#" color="inherit" underline="hover" fontFamily={'initial'}>
                                    BMW Excellence Club
                                </Link>
                            </Box>
                            <Box marginBottom={1}>
                                <Link href="#" color="inherit" underline="hover" fontFamily={'initial'}>
                                    BMW Motorrad
                                </Link>
                            </Box>
                            <Box marginBottom={1}>
                                <Link href="#" color="inherit" underline="hover" fontFamily={'initial'}>
                                    Charging Network
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Typography variant="h6" gutterBottom color='black' fontFamily={'serif'} >
                                Legal
                            </Typography>
                            <Box marginBottom={1}>
                                <Link href="#" color="inherit" underline="hover" fontFamily={'initial'}>
                                    Legal Disclaimer / Imprint
                                </Link>
                            </Box>
                            <Box marginBottom={1}>
                                <Link href="#" color="inherit" underline="hover" fontFamily={'initial'}>
                                    Privacy Policy
                                </Link>
                            </Box>
                        </Grid>

                        <Box display="flex" justifyContent="center" gap={2} mt={10} marginLeft={14}>
                            <IconButton
                                style={{ color: 'black' }}
                                aria-label="Facebook"
                                onClick={() => window.open('https://www.facebook.com/', '_blank')}
                            >
                                <FacebookIcon />
                            </IconButton>
                            <IconButton
                                style={{ color: 'black' }}
                                aria-label="Instagram"
                                onClick={() => window.open('https://www.instagram.com', '_blank')}
                            >
                                <InstagramIcon />
                            </IconButton>
                            <IconButton
                                style={{ color: 'black' }}
                                aria-label="YouTube"
                                onClick={() => window.open('https://www.youtube.com', '_blank')}
                            >
                                <YouTubeIcon />
                            </IconButton>
                            <IconButton
                                style={{ color: 'black' }}
                                aria-label="LinkedIn"
                                onClick={() => window.open('https://www.linkedin.com', '_blank')}
                            >
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton
                                style={{ color: 'black' }}
                                aria-label="Twitter"
                                onClick={() => window.open('https://www.twitter.com', '_blank')}
                            >
                                <TwitterIcon />
                            </IconButton>
                        </Box>
                    </Grid>

                </Container>
            </Box>
            <Box mt={4} mb={10} pl={11} item xs={12} sm={12}>
                <Typography
                    variant="body2"
                    style={{
                        fontSize: '18px',
                        float: 'left',
                        marginRight: '670px',
                    }}
                    item
                    xs={12}
                    sm={6}
                >
                    &copy; BMW AG 2025
                </Typography>
                <Typography
                    variant="body2"
                    className="hover-underline"
                    style={{
                        fontSize: '13px',
                        float: 'left',
                        paddingRight: '25px',
                        cursor: 'pointer',
                    }}
                    item
                    xs={12}
                    sm={6}
                >
                    Legal Disclaimer
                </Typography>
                <Typography
                    variant="body2"
                    className="hover-underline"
                    style={{
                        fontSize: '13px',
                        float: 'left',
                        paddingRight: '25px',
                        cursor: 'pointer',
                    }}
                    item
                    xs={12}
                    sm={6}
                >
                    Privacy Policy
                </Typography>
                <Typography
                    variant="body2"
                    className="hover-underline"
                    style={{
                        fontSize: '13px',
                        float: 'left',
                        cursor: 'pointer',
                    }}
                    item
                    xs={12}
                    sm={6}
                >
                    Contact Us
                </Typography>
            </Box>



        </>
    )
}

export default Footer
