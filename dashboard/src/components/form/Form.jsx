import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { Box } from '@mui/material'
import Appbar from '../../components/navbar/Appbar'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Form = () => {
    <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
    ></Box>
    return (
        <>
            <Appbar />
            <Box height={35} />
            <Box sx={{ minHeight: '100vh', marginLeft: '10rem', }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '8rem' }}>
                    <Box sx={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>

                        <TextField sx={{
                            width: '30vw'
                        }}
                            required
                            id="outlined-required"
                            label="Name"
                            defaultValue="Name"
                        />
                        <TextField sx={{
                            width: '30vw',
                            outlineColor: "#23272f"
                        }}
                            required
                            id="outlined-required"
                            label="F Name"
                            defaultValue="Father Name"
                        />
                    </Box>

                    <Box sx={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>

                        <TextField
                            sx={{
                                width: '30vw',
                                outlineColor: "#23272f"
                            }}
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                        <TextField sx={{
                            width: '30vw',
                            outlineColor: "#23272f"
                        }}
                            required
                            id="outlined-required"
                            label="email"
                            defaultValue="Email"
                        />
                    </Box>
                    <Box sx={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>

                        <TextField sx={{
                            width: '30vw'
                        }}
                            required
                            id="outlined-required"
                            label="Name"
                            defaultValue="Name"
                        />
                        <TextField sx={{
                            width: '30vw',
                            outlineColor: "#23272f"
                        }}
                            required
                            id="outlined-required"
                            label="F Name"
                            defaultValue="Father Name"
                        />
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}><Button variant='contained'>Sign up</Button></div>
                    </Box>
                </Box>
            </Box>
        </>

    )
}

export default Form;
