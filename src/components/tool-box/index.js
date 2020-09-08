import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import StyledConverter from '../styled-converter';
import ComponentTester from '../component-tester';
import AudioTester from '../audio-tester';
import
{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function PermanentDrawerLeft()
{
  const [title, setTitle] = useState('Tool Box')
  const classes = useStyles();
  // const location = useLocation();

  // React.useEffect(() => {
  //   setTitle(location.pathname);
  //   // console.log('Location changed');
  // }, [location]);


  // useEffect(() =>
  // {
  //   if (history) {
  //     history.listen((location, action) =>
  //     {
  //       // location is an object like window.location
  //       setTitle(location.pathname);
  //       console.log(action, location.pathname, location.state)
  //     })
  //   }
  // }, [history])

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={classes.toolbar} />
          <Divider />
          <List>
            <Link to="styledConverter">
              <ListItem button>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary="in Style to Styled Components" />
              </ListItem>
            </Link>
            {/* <Link to="componentTester">
              <ListItem button>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary="Component Tester" />
              </ListItem>
            </Link>
            <Link to="audioTester">
              <ListItem button>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary="Audio Tester" />
              </ListItem>
            </Link> */}
            {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <Link to={text}>
                <ListItem button key={text}>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </Link>

            ))} */}
          </List>
          <Divider />
          {/* <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> */}
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />

          <Switch>
            <Route path="/" exact>
              <React.Fragment>
                <Typography paragraph>
                  Click on app drawer to select a tool
                  </Typography>
                <Typography paragraph>
                  Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                  facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                  tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                  consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                  vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                  hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                  tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                  nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                  accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
                  </Typography>
              </React.Fragment>
            </Route>
            <Route path="/styledConverter">
              <StyledConverter />
            </Route>
            <Route path="/componentTester">
              <ComponentTester />
            </Route>
            <Route path="/audioTester">
              <AudioTester />
            </Route>
          </Switch>
          {/* <Router>
          <div>
            <Switch>
              <Route path="/about">
                <div>About</div>
              </Route>
              <Route path="/users">
                <div> Users</div>
              </Route>
              <Route path="/">
                <React.Fragment>
                  <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                    facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                    gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                    donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                    Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                    imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                    arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                    donec massa sapien faucibus et molestie ac.
                  </Typography>
                  <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                    facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                    tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                    consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                    vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                    hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                    tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                    nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                    accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
                  </Typography>
                </React.Fragment>
              </Route>
            </Switch>
          </div>
        </Router> */}

        </main>
      </div>
    </Router>
  );
}
