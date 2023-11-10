import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

export const RightBar = () => {
  return (
    <Box flex={2} p={2} sx={{display: {xs: 'none', sm:'block'}}}>
      <Box position='fixed' width={300}>
        <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={5}>
          <Avatar alt="Remy Sharp" src="https://admithel.com/wp-content/uploads/2017/12/team-jobsearch-about1-1-1.png" />
          <Avatar alt="Travis Howard" src="https://img.freepik.com/foto-gratis/retrato-hombre-negocios-optimista-ropa-formal_1262-3600.jpg" />
          <Avatar alt="Cindy Baker" src="https://i.pinimg.com/originals/a5/7a/4b/a57a4bb2e7ddd2b4ee30271b2d989cc1.jpg" />
          <Avatar alt="Agnes Walker" src="https://us.123rf.com/450wm/rmarmion/rmarmion1803/rmarmion180300279/97328427-una-mujer-que-trabaja-en-un-lugar-de-negocios.jpg?ver=6" />
          <Avatar alt="Trevor Henderson" src="https://www.molinarifoto.com.ar/wp-content/uploads/2019/09/Foto-CV-Hombre.jpg" />
          <Avatar alt="Trevor Henderson" src="https://www.molinarifoto.com.ar/wp-content/uploads/2019/09/Foto-CV-Hombre.jpg" />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src='https://elviajerofeliz.com/wp-content/uploads/2015/09/paisajes-de-Canada.jpg' alt=''></img>
          </ImageListItem>
          <ImageListItem>
            <img src='https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt12dbddde5342ce4c/648866ff21a8556da61fa167/GOAL_-_Blank_WEB_-_Facebook_-_2023-06-13T135350.847.png?auto=webp&format=pjpg&width=3840&quality=60' alt=''></img>
          </ImageListItem>
          <ImageListItem>
            <img src='https://assets.kraftfoods.com/recipe_images/opendeploy/106570_MXM_K53279V0_OR1_CR_640x428.jpg' alt=''></img>
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Conversations</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}
