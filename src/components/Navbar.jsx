import React from 'react'
import {
  AppBar,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
  alpha,
  Badge,
  Avatar,
  IconButton,
} from '@material-ui/core'
import { Search, Cancel } from '@material-ui/icons'
import { useState } from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Rightbar from './Rightbar'

import '../App.css'

const useStyles = makeStyles((theme) => ({
  appbar: {
    position: 'sticky',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logoLg: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  logoSm: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: '50%',
    [theme.breakpoints.down('xs')]: {
      display: (props) => (props.open ? 'flex' : 'none'),
      width: '60%',
    },
  },
  input: {
    color: 'white',
    marginRight: theme.spacing(1),
    width: '100%',
  },
  cancel: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  searchButton: {
    marginLeft: theme.spacing(2),
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  icon: {
    alignItems: 'center',
    display: (props) => (props.open ? 'none' : 'flex'),
  },
  badge: {
    marginLeft: theme.spacing(2),
  },
  menubtn: {
    color: '#fafafa',
  },
  rightbar: {
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
}))

function Navabr() {
  const [open, setOpen] = useState(false)
  const classes = useStyles({ open })
  return (
    <AppBar className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <div>
          <Typography variant="h6" className={classes.logoLg}>
            <IconButton className={classes.menubtn}>
              <Rightbar />
            </IconButton>
            فروشگاه من
          </Typography>
          <Typography variant="h6" className={classes.logoSm}>
            <IconButton className={classes.menubtn}>
              <Rightbar />
            </IconButton>
            فروشگاه
          </Typography>
        </div>

        <div className={classes.search}>
          <Search />
          <InputBase placeholder="جستجو کنید..." className={classes.input} />
          <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>
        <div className={classes.icon}>
          <Search
            className={classes.searchButton}
            onClick={() => setOpen(true)}
          />

          <Badge badgeContent={3} color="secondary" className={classes.badge}>
            <ShoppingCartIcon />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navabr
