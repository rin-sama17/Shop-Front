import { Typography } from '@material-ui/core'

import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import { Home } from '@material-ui/icons'

import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted'
import { useState } from 'react'
import { Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  container: {
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    height: '100vh',
    color: 'white',
    position: 'sticky',
    top: '0',
    [theme.breakpoints.up('sm')]: {
      backgroundColor: 'white',
      color: '#555',
      border: '1px solid #f8f8f8',
    },
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(3),
      cursor: 'Pointer',
    },
  },
  text: {
    fontWeight: '500',
  },
  icon: {
    marginLeft: theme.spacing(1),
  },
  container: {
    paddingTop: 10,
    backgroundColor: theme.palette.primary.main,
    // height: '100vh',
    color: 'white',
    position: 'sticky',
    top: '0',
    [theme.breakpoints.up('sm')]: {
      backgroundColor: 'white',
      color: '#555',
      border: '1px solid #f8f8f8',
    },
  },
  root: {
    '& > *': {
      margin: 6,
      width: '100%',
    },
  },
}))

export default function TemporaryDrawer() {
  const classes = useStyles()
  const [state, setState] = useState(false)

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState(open)
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Typography>فروشگاه من</Typography>
      <Divider />
      <List>
        <ListItem className={classes.root}>
          <Button color="primary">
            <Home />
            خانه
          </Button>
        </ListItem>
      </List>
      <List>
        <ListItem className={classes.root}>
          <Button color="primary">
            <AccountCircleIcon />
            اکانت من
          </Button>
        </ListItem>
      </List>
      <List>
        <ListItem className={classes.root}>
          <Button color="primary" icon>
            <WhatshotIcon />
            پرطرفدار ها
          </Button>
        </ListItem>
      </List>
      <List>
        <ListItem className={classes.root}>
          <Button color="primary">
            <BookmarkIcon />
            علامت شده ها
          </Button>
        </ListItem>
      </List>
      <List>
        <ListItem className={classes.root}>
          <Button color="primary">
            <Home />
            دسته بندی ها
          </Button>
        </ListItem>
      </List>

      <Divider />
      <List>
        <ListItem className={classes.root}>
          <Button color="primary">
            <HelpOutlineIcon />
            سوالات متداول
          </Button>
        </ListItem>
        <ListItem className={classes.root}>
          <Button color="primary">
            <PeopleAltIcon />
            درباره ما
          </Button>
        </ListItem>
        <ListItem className={classes.root}>
          <Button color="primary">
            <WhatshotIcon />
            پرطرفدار ها
          </Button>
        </ListItem>
      </List>
    </div>
  )

  return (
    <>
      <React.Fragment>
        <FormatListBulletedIcon onClick={toggleDrawer(true)} />

        <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
          {list('right')}
        </Drawer>
      </React.Fragment>
    </>
  )
}
