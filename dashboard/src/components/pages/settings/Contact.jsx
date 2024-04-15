import React from 'react'
import Sidebar from '../../sidebar/Sidebar'
import { Box } from '@mui/material'
import Appbar from '../../navbar/Appbar'

const Contact = () => {
    return (

        <>
            <Appbar />
            <Box height={35} />
            <Box sx={{
                display: 'flex'
            }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1>Settings</h1>
                </Box>
            </Box>
        </>
    )
}

export default Contact;
