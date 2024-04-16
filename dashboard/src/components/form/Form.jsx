import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { Box } from '@mui/material'
import Appbar from '../../components/navbar/Appbar'
const Form = () => {
    return (
        <>
            <Appbar />
            <Box height={35} />
            <Box sx={{
                display: 'flex'
            }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1>Form</h1>
                </Box>
            </Box>
        </>

    )
}

export default Form;
