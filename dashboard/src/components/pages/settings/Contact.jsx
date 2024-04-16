import React from 'react'
import Sidebar from '../../sidebar/Sidebar'
import { Box } from '@mui/material'
import Appbar from '../../navbar/Appbar'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70, background: '#23272f', color: 'white' },
    { field: 'firstName', headerName: 'First name', width: 130, background: '#23272f', color: 'white' },
    { field: 'lastName', headerName: 'Last name', width: 130, background: '#23272f', color: 'white' },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 200
    },
    {
        field: 'location',
        headerName: 'Location',
        width: 150
    }
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, email: 'raimursaleen14@gmail.com' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, email: 'raimursaleen14@gmail.com', location: 'USA' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, email: 'raimursaleen14@gmail.com', location: 'USA' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, email: 'raimursaleen14@gmail.com', location: 'USA' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, email: 'raimursaleen14@gmail.com', location: 'USA' },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150, email: 'raimursaleen14@gmail.com', location: 'USA' },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, email: 'raimursaleen14@gmail.com', location: 'USA' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, email: 'raimursaleen14@gmail.com', location: 'USA' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, email: 'raimursaleen14@gmail.com', location: 'USA' },
    { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65, email: 'raimursaleen14@gmail.com', location: 'USA' },
    { id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 65, email: 'raimursaleen14@gmail.com', location: 'USA' },
    { id: 12, lastName: 'Roxie', firstName: 'Harvey', age: 65, email: 'raimursaleen14@gmail.com', location: 'USA' },
    { id: 13, lastName: 'Roxie', firstName: 'Harvey', age: 65, email: 'raimursaleen14@gmail.com', location: 'USA' },
];

const Contact = () => {
    return (
        <>
            <Appbar />
            <Box height={35} />
            <Box sx={{
                display: 'flex',


            }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <div style={{ height: 600, width: '100%', marginTop: '1rem' }}  >

                        <DataGrid

                            rows={rows}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 13 },
                                },
                            }}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection


                        />
                    </div>
                </Box>
            </Box>
        </>

    )
}

export default Contact;