import React, { useState } from 'react'
import {Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import styled from '@emotion/styled';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';

const StyledModal = styled(Modal)({
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
})

const UserBox = styled(Box)({
    display:'flex',
    alignItems:'center',
    gap:'10px',
    marginBottom:'20px'
})
function Add() {
    const [open, setOpen] = useState(false)
  return (
    <>
    <Tooltip 
    onClick={e=>setOpen(true)}
    title="Add Post" 
    sx={{position:'fixed', bottom:20, 
    left:{xs:'calc(50% - 25px)', md:30}}}>
        <Fab color='primary' aria-label='add'>
            <AddIcon />
        </Fab>
    </Tooltip>
    {/* <Button onClick={e=>setOpen(true)}>Open modal</Button> */}
    <StyledModal
    open={open}
    onClose={e=>setOpen(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
        <Box width={400} height={280} bgcolor={'background.default'} color={'text.primary'} p={3} borderRadius={5}>
            <Typography variant='h6' color='gray' textAlign='center'>Create Post</Typography>
            <UserBox>
                <Avatar src='https://i.pinimg.com/originals/a5/7a/4b/a57a4bb2e7ddd2b4ee30271b2d989cc1.jpg' sx={{width:30, height:30}}>
                </Avatar>
                <Typography fontWeight={500} variant='span'>Jane Doe</Typography>
            </UserBox>
            <TextField
                sx={{width:'100%'}}
                id="standard-multiline-static"
                multiline
                rows={3}
                placeholder="What's on your mind?"
                variant="standard"
            />
            <Stack direction={'row'} gap={1} mt={3} mb={3}>
                <EmojiEmotionsIcon color='primary'/>
                <ImageIcon color='secondary'/>
                <VideoCameraBackIcon color='success'/>
                <PersonAddIcon color='error'/>
            </Stack>
            <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                <Button>Post</Button>
                <Button sx={{width:'100px'}}><DateRangeIcon/></Button>
            </ButtonGroup>
        </Box>
    </StyledModal>
    </>
  )
}

export default Add