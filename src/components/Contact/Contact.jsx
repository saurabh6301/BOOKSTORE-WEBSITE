import { Facebook, Instagram, LinkedIn, GitHub, Phone } from '@mui/icons-material';
import { Typography, Box, Link, useMediaQuery, useTheme } from '@mui/material';
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon

function Contact() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Breakpoint for small devices

    return (
        <>
            <div>
                <h1 className="text-6xl font-serif text-gray-900 sm:text-2xl text-center border-b-4 border-double border-yellow-200 bg-slate-50 mt-5">
                    Contact
                </h1>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '80vh',
                    backgroundColor: '#f9fafb',
                    padding: '1rem',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row', // Stack for small screens
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '80%',
                        gap: '2rem',
                    }}
                >
                    {/* Contact Info Section */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            backgroundColor: 'white',
                            padding: '2rem',
                            borderRadius: '1rem',
                            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                            width: isMobile ? '100%' : '50%', // Full width for mobile
                            textAlign: 'left',
                        }}
                    >
                        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center', width: '100%' }}>
                            Saurabh Pandey
                        </Typography>
                        <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                            <Phone sx={{ marginRight: '0.5rem' }} /> +123-456-7890
                        </Typography>
                        <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                            <FaWhatsapp style={{ marginRight: '0.5rem', color: '#25D366' }} /> +630-655-6983
                        </Typography>
                        <Link href="https://facebook.com/yourprofile" target="_blank" underline="hover" sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                            <Facebook sx={{ marginRight: '0.5rem', color: '#4267B2' }} /> Facebook
                        </Link>
                        <Link href="https://instagram.com/yourprofile" target="_blank" underline="hover" sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                            <Instagram sx={{ marginRight: '0.5rem', color: '#C13584' }} /> Instagram
                        </Link>
                        <Link href="https://linkedin.com/in/yourprofile" target="_blank" underline="hover" sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                            <LinkedIn sx={{ marginRight: '0.5rem', color: '#0077B5' }} /> LinkedIn
                        </Link>
                        <Link href="https://github.com/yourprofile" target="_blank" underline="hover" sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                            <GitHub sx={{ marginRight: '0.5rem', color: '#333' }} /> GitHub
                        </Link>
                    </Box>

                    {/* Contact Image Section */}
                    <div
                        style={{
                            flex: '1',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: isMobile ? '100%' : '50%', // Full width for mobile
                        }}
                    >
                        <img
                            src="https://www.nojitter.com/sites/default/files/Contact_AdobeStock_229894895_81720.jpeg"
                            alt="Modern Contact"
                            style={{
                                width: '100%',
                                borderRadius: '1rem',
                                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
