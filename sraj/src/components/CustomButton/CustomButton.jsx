import React from 'react'
import { Button } from '@mui/material'


const CustomButton = ({ text, click }) => {
    return (
        <Button
            variant='contained'
            onClick={click}
            sx={{
                backgroundColor: 'var(--light-pink)',
                width:'50%',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                fontSize: '15px',
                padding: '10px',
                '&:hover': {
                    transitionDuration: '500',
                    backgroundColor: 'white',
                    color: 'var(--light-pink)',
                    borderWidth: '1px',
                    borderColor: 'var(--light-pink)', 
                    borderStyle: 'solid',
                    padding:'9px'
                },
            }}
        >
            {text}
        </Button>
    )
}

export default CustomButton