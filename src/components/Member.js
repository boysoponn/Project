import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import LoginContainerWithRouter from './login';
import RegisterContainer from './register';
function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 2 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
background:{
 backgroundColor:'#ff9292',
 margin: 0,
 padding: 0,
},
  position:{
    paddingTop:30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.06), 0 5px 10px rgba(0, 0, 0, 0.12)',
  },
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
    <div className={classes.background}>
        <div className={classes.position}>
        <div className={classes.root}>
            <AppBar position="static" color="default">
            <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary"
                fullWidth
            >
                <Tab label="LOGIN" />
                <Tab label="REGISTER" />
            </Tabs>
            </AppBar>
            <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={this.state.value}
            onChangeIndex={this.handleChangeIndex}
            >
            <TabContainer dir={theme.direction}><LoginContainerWithRouter/></TabContainer>
            <TabContainer dir={theme.direction}><RegisterContainer/></TabContainer>
            </SwipeableViews>
        </div>
        </div>
    </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);