import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import "./Header.scss";

const Header = () => {
      const useStyles = makeStyles((theme) => ({
            content: {
                  justifyContent: 'space-between'
            }
      }));
      const classes = useStyles();
      return (
            <div className={classes.root}>
                  <AppBar position="static">
                        <Toolbar className={classes.content}>
                              <Typography variant="h6" className={classes.title} position="left">
                                    FlyM
                              </Typography>
                              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </Toolbar>
                  </AppBar>
            </div>
      )
}
export default Header;