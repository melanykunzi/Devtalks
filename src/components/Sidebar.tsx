import { Home } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch} from '@mui/material'
import ArticleIcon from '@mui/icons-material/Article';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import React from 'react'

export const Sidebar = ({mode, setMode}) => {
  return (
    <Box flex={1} p={2} sx={{display: {xs: 'none', sm:'block'}}}>
      <Box position={'fixed'}>
        <List>
            <ListItem disablePadding>
                <ListItemButton component='a' href='#home'>
                    <ListItemIcon>
                      <Home/>
                    </ListItemIcon>
                    <ListItemText primary="Homepage" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component='a' href='#pages'>
                      <ListItemIcon>
                        <ArticleIcon/>
                      </ListItemIcon>
                      <ListItemText primary="Pages" />
                  </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component='a' href='#groups'>
                      <ListItemIcon>
                        <PeopleAltIcon/>
                      </ListItemIcon>
                      <ListItemText primary="Groups" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component='a' href='#marketplace'>
                      <ListItemIcon>
                        <StorefrontIcon/>
                      </ListItemIcon>
                      <ListItemText primary="Marketplace" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component='a' href='#friends'>
                      <ListItemIcon>
                        <PersonIcon/>
                      </ListItemIcon>
                      <ListItemText primary="Friends" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component='a' href='#settings'>
                      <ListItemIcon>
                        <SettingsIcon/>
                      </ListItemIcon>
                      <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component='a' href='#profile'>
                      <ListItemIcon>
                        <AccountBoxIcon/>
                      </ListItemIcon>
                      <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component='a' href='#home'>
                      <ListItemIcon>
                        <ModeNightIcon/>
                      </ListItemIcon>
                      <Switch onChange={e=>setMode(mode === 'light' ? 'dark' : 'light')}></Switch>
              </ListItemButton>
            </ListItem>
        </List>
      </Box>
    </Box>
  )
}
