import styled from '@emotion/styled'
import { Mail, Notifications, Pets } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

const StyledToolBar = styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between'
})

const Search = styled('div')(({theme})=>({
    backgroundColor:'white',
    padding:'0 10px',
    borderRadius: '5px',
    width: '40%'
}))

const Icons = styled(Box)`
    display: none;
    gap: 20px;
    align-items: center;

    @media (min-width: 600px) {
        display: flex;
    }
`;

const UserBox = styled(Box)`
    display: flex;
    gap: 10px;
    align-items: center;

    @media (min-width: 600px) {
        display: none;
    }
`;

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
        <StyledToolBar>
            <Typography variant='h6' sx={{display:{xs:'none', sm:'block'}}}>DevTalk</Typography>
            <DeveloperModeIcon sx={{display:{xs:'block', sm:'none'}}}></DeveloperModeIcon>
            <Search><InputBase placeholder='search...'></InputBase></Search>
            <Icons>
                <Badge badgeContent={4} color="error">
                    <Mail/>
                </Badge>
                <Badge badgeContent={2} color="error">
                    <Notifications/>
                </Badge>
                <Avatar 
                sx={{width:30, height:30}} 
                src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww'
                onClick={e=>setOpen(true)}
                ></Avatar>
            </Icons>
            <UserBox onClick={e=>setOpen(true)}>
                <Avatar sx={{width:30, height:30}} src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww'></Avatar>
                <Typography variant='body1'>John</Typography>
            </UserBox>
        </StyledToolBar>
        <Menu
            id="basic-menu"
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
            open={open}
            onClose={(e) => setOpen(false)}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
        >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
        </Menu>
    </AppBar>
  )
}
