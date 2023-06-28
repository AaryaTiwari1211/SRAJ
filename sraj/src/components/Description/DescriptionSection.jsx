import React, { useState } from 'react'
import { Box, Typography, ButtonBase } from '@mui/material'
import CustomButton from '../CustomButton/CustomButton'

const Desc = () => {
    return (
        <>
            <Typography
                sx={{
                    fontFamily: 'Poppins',
                    fontStyle: 'italic',
                    fontSize: '13px',
                }}
            >
                This elegant red-black saree is perfect for special occasions and events.
                The combination of rich red and black colors creates a stunning contrast,
                making you stand out in any gathering.<br />
                The saree is made of high-quality fabric, ensuring a comfortable and luxurious feel.
                The intricate design and fine craftsmanship add to its beauty, making it a timeless piece for your wardrobe.
            </Typography>
            <Typography
                sx={{
                    fontFamily: 'Poppins',
                    fontStyle: 'italic',
                    fontSize: '13px',
                }}
            >
                Model Height : 5.6ft<br />
                Fabric: Chiffon Lurex
            </Typography>
            <Typography
                sx={{
                    fontFamily: 'Poppins',
                    fontStyle: 'italic',
                    fontSize: '13px',
                }}
            >
                Handcrafted in India
            </Typography>
            <Typography
                sx={{
                    fontFamily: 'Poppins',
                    fontStyle: 'italic',
                    fontSize: '13px',
                }}
            >
                Size: Refer to size chart. Model is wearing size Small.
            </Typography>
        </>
    )
}
const CareGuide = () => {
    return (
        <>
            <Typography
                sx={{
                    fontFamily: 'Poppins',
                    fontStyle: 'italic',
                    fontSize: '13px',
                    fontWeight:'500'
                }}
            >
                To ensure the longevity and beauty of your red-black saree, follow these care instructions: <br/><br/>
                1. Dry clean the saree to maintain its color and fabric quality <br/><br/>
                2. Avoid direct contact with perfume, deodorants, or any harsh chemicals that may cause discoloration.<br/><br/>
                3. Store the saree in a cool, dry place to prevent moisture damage.<br/><br/>
                4. Gently fold the saree and store it in a saree cover or cotton cloth to avoid creases and wrinkles.<br/><br/>
                5. Avoid excessive exposure to sunlight as it may fade the colors of the saree.<br/><br/>
                By following these care instructions, you can keep your red-black saree looking vibrant and beautiful for years to come.
            </Typography>
        </>
    )
}
const AdditionalInfo = () => {
    return (
        <>
            <Typography
                sx={{
                    fontFamily: 'Poppins',
                    fontStyle: 'italic',
                    fontSize: '13px',
                }}
            >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo fugit libero modi
                sapiente voluptas voluptatum nobis eveniet quasi error labore delectus at saepe possimus tenetur
                enim quos omnis, iusto quibusdam?
            </Typography>
        </>
    )
}

const DescriptionSection = () => {
    const [text, setText] = useState(<Desc />)
    return (
        <>
            <Box height={20} />
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start'
                    }}
                >
                    <Box
                        sx={{
                            padding: '5px 10px',
                            transition: 'all 0.3s',
                            textAlign: 'center',
                            '&:hover': {
                                backgroundColor: 'var(--light-pink)',
                                cursor: 'pointer',
                            }
                        }}
                    >
                        <ButtonBase
                            sx={{
                                width: '100%',
                                '&:hover': {
                                    cursor: 'pointer',
                                },
                                '&:focus': {
                                    outline: 'none',
                                },
                            }}
                            onClick={() => setText(<Desc />)}
                        >
                            <Typography
                                sx={{
                                    fontSize: '16px',
                                    fontFamily: 'Poppins',
                                    fontWeight: '600',
                                    '&:hover': {
                                        color: 'white',
                                    }
                                }}
                            >
                                Description
                            </Typography>
                        </ButtonBase>
                    </Box>
                    <Box
                        sx={{
                            padding: '5px 10px',
                            transition: 'all 0.3s',
                            '&:hover': {
                                backgroundColor: 'var(--light-pink)',
                                cursor: 'pointer',
                            }
                        }}
                    >
                        <ButtonBase
                            sx={{
                                width: '100%',

                                '&:hover': {
                                    cursor: 'pointer',
                                },
                                '&:focus': {
                                    outline: 'none',
                                },
                            }}
                            onClick={() => setText(<CareGuide />)}
                        >
                            <Typography
                                sx={{
                                    fontSize: '16px',
                                    fontFamily: 'Poppins',
                                    fontWeight: '600',
                                    '&:hover': {
                                        color: 'white',
                                    }
                                }}
                            >
                                Care Guide
                            </Typography>
                        </ButtonBase>
                    </Box>
                    <Box
                        sx={{
                            padding: '5px 10px',
                            transition: 'all 0.3s',
                            '&:hover': {
                                backgroundColor: 'var(--light-pink)',
                                cursor: 'pointer',
                            }
                        }}
                    >
                        <ButtonBase
                            sx={{
                                width: '100%',

                                '&:hover': {
                                    cursor: 'pointer',
                                },
                                '&:focus': {
                                    outline: 'none',
                                },
                            }}
                            onClick={() => setText(<AdditionalInfo />)}
                        >
                            <Typography
                                sx={{
                                    fontSize: '16px',
                                    fontFamily: 'Poppins',
                                    fontWeight: '600',
                                    '&:hover': {
                                        color: 'white',
                                    }
                                }}
                            >
                                Additional Information
                            </Typography>
                        </ButtonBase>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <Box width={10} />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                        }}
                    >
                        <hr />
                        {text}
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default DescriptionSection