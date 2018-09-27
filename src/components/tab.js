import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IN from './template/IN'



const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
});

class TabWebsite extends React.Component {
    constructor(props){  
      super(props);
      this.addNewTab = this.addNewTab.bind(this);
          this.state = {
            value: 0,
            news:[1],
          };   
      }
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  addNewTab(){
    const addnew =this.state.news;
    addnew.push("NEW")
    this.setState({
      value:this.state.value+1,
      news:addnew
    });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
        
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
          {this.state.news.map((New => (
            <Tab label={New} />
            )))}
          <button onClick={this.addNewTab}>ADD</button>
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
        {this.state.news.map((New => (
          <div dir={theme.direction}>
          {New}
          <IN/>
          </div>
          )))}

        </SwipeableViews>
      </div>
    );
  }
}

TabWebsite.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TabWebsite);
