import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const Post = () => {
  return (
    <div>
    <Card sx={{margin: 5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="John Doe"
        subheader="November 9, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://a1.eestatic.com/cronicavasca/2023/05/04/ocio/761183879_301648_1706x960.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Where water dances down a rocky ledge, a waterfall is born. Did you know that the process of erosion plays a crucial role in the formation of waterfalls? Over time, the soft rock erodes, leaving a hard ledge over which the stream falls, creating these natural wonders. #WaterfallWonders #NatureFacts
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite sx={{color:'red'}}/>}></Checkbox>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
    </div>
  )
}
