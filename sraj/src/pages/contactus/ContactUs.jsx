import React, { useState } from 'react'
import { Box, Typography, Paper, TextField } from '@mui/material'
import contact1 from '../../assets/contact1.png'
import contact2 from '../../assets/contact2.png'
import email1 from '../../assets/email1.png'
import Map from '../../components/Map/Map'
import InputField from '../../components/InputField/InputField'
import { useMediaQuery } from '@mui/material'

const inputStyles = {
    container: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: '10px 0',
        gap: '20px',
        flexWrap: 'wrap',
        width: '100%',
    },
    label: {
        flexBasis: '30%',
        fontSize: '16px',
        display: 'block',
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    textarea: {
        padding: '5px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '16px',
        flexBasis: '70%',
        maxWidth: '300px',
        width: '100%',
    },
};



const TextareaField = ({ label, value, onChange }) => {
    return (
        <div style={inputStyles.container}>
            <label htmlFor="textarea-field" style={inputStyles.label}>
                {label}:
            </label>
            <textarea
                rows={3}
                cols={40}
                id="textarea-field"
                style={inputStyles.textarea}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};
function ContactUs() {
    const md = useMediaQuery("(min-width:800px)")
    return (

        <>
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#f2f2f2',
                    textAlign: 'center',
                }}
            >
                <Box height={30} />
                <Typography
                    sx={{
                        fontSize: '40px',
                        fontWeight: '700',
                        fontFamily: 'Poppins',
                    }}
                >Contact Us</Typography>
                <Box height={30} />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '100px',
                        flexWrap: 'wrap',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px',
                        }}
                    >
                        <Box>
                            <img src={contact1} width={100} height={100} alt="phone" />
                            <Typography
                                sx={{
                                    fontSize: '20px',
                                    fontFamily: 'Poppins',
                                    fontWeight: '500',
                                }}
                            >BY PHONE</Typography>
                        </Box>
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: '15px',
                                    fontFamily: 'Poppins',
                                    fontWeight: '500',
                                }}
                            >(Monday to Friday, 9am to 6pm IST)</Typography>
                            <Box height={30} />
                            <Typography
                                sx={{
                                    fontSize: '15px',
                                    fontFamily: 'Poppins',
                                    fontWeight: '500',
                                    color: '#666666'

                                }}
                            >+91 9769809628 (India)</Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px',
                        }}
                    >
                        <Box>
                            <img src={email1} width={100} height={100} alt="phone" />
                            <Typography
                                sx={{
                                    fontSize: '20px',
                                    fontFamily: 'Poppins',
                                    fontWeight: '500',
                                }}
                            >BY EMAIL</Typography>
                        </Box>
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: '15px',
                                    fontFamily: 'Poppins',
                                    fontWeight: '500',
                                }}
                            >We will respond to you within 3-4 business days</Typography>
                            <Box height={30} />
                            <Typography
                                sx={{
                                    fontSize: '15px',
                                    fontFamily: 'Poppins',
                                    fontWeight: '500',
                                    color: '#666666'
                                }}
                            >avaanimarve@gmail.com (India)</Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px',
                        }}
                    >
                        <Box>
                            <img src={contact2} width={100} height={100} alt="phone" />
                            <Typography
                                sx={{
                                    fontSize: '20px',
                                    fontFamily: 'Poppins',
                                    fontWeight: '500',
                                }}
                            >VISIT US</Typography>
                        </Box>
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: '15px',
                                    fontFamily: 'Poppins',
                                    fontWeight: '500',
                                }}
                            >(Monday to Friday, 9am to 6pm PST)</Typography>
                            <Box height={30} />
                            <Typography
                                sx={{
                                    fontSize: '15px',
                                    fontFamily: 'Poppins',
                                    fontWeight: '500',
                                }}
                            >+91 9769809628 (India)</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box height={30} />
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Map />
                </Box>
            </Box>
            <Box
                sx={{
                    minHeight: '100vh',
                }}
            >
                <Box height={100} />
                <Box
                    sx={{
                        width: '100%',
                        textAlign: 'center'
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '30px',
                            fontFamily: 'Poppins',
                            fontWeight: '700',
                        }}
                    >Give Us a FeedBack</Typography>
                    <Box height={20} />
                    <Typography
                        sx={{
                            fontSize: '20px',
                            fontFamily: 'Poppins',
                            fontWeight: '600',
                            color: '#666666'
                        }}
                    >Provide us a feedback or complaint and we will get back to you within 48 hours</Typography>
                    <Box height={30} />
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Paper elevation={6}
                            sx={{
                                width: md ? '400px' : '90%',
                                margin: '20px',
                                borderRadius: '10px'
                            }}
                        >
                            <Box
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '20px',
                                    justifyContent: 'center',
                                    alignItems:'center'
                                }}
                            >
                                <form>
                                    <Typography
                                        sx={{
                                            fontSize: '20px',
                                            fontFamily: 'Poppins',
                                            fontWeight: '700',
                                            padding: '20px',
                                        }}
                                    >
                                        Contact Us Form
                                    </Typography>
                                    <Box
                                        sx={{
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '20px',
                                            justifyContent: 'center',
                                            alignItems: 'flex-start',
                                            margin: '20px',
                                        }}
                                    >
                                        <InputField label="First Name " type="text" value="" onChange="" />
                                        <Box height={30} />
                                        <InputField label="Last Name " type="text" value="" onChange="" />
                                        <Box height={30} />
                                        <InputField label="Email " type="email" value="" onChange="" />
                                        <Box height={30} />
                                        <TextareaField label="Feedback "  value="" onChange=""/>
                                    </Box>
                                </form>
                            </Box>
                        </Paper>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ContactUs