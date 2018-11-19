import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';
import ListItem from '@material-ui/core/ListItem';

const styles = {
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {

  },
  t:{
    padding:0
  }
};

class RadioButtons extends React.Component {


  render() {
    const { classes } = this.props;

    return (
      <ListItem component="div" className={classes.t}>
        <p>{this.props.label1}</p>        
        <Radio
          checked={this.props.selectedValue === this.props.value1}
          onChange={this.props.handleChange}
          value={this.props.value1}
          name="radio-button-demo"
        />
        <p>{this.props.label2}</p>  
        <Radio
          checked={this.props.selectedValue === this.props.value2}
          onChange={this.props.handleChange}
          value={this.props.value2}
          name="radio-button-demo"
        />
        <p>{this.props.label3}</p>  
        <Radio
          checked={this.props.selectedValue === this.props.value3}
          onChange={this.props.handleChange}
          value={this.props.value3}
          name="radio-button-demo"
          classes={{
            root: classes.root,
            checked: classes.checked,
          }}
        />
        <p>{this.props.label4}</p>  
        <Radio
          checked={this.props.selectedValue === this.props.value4}
          onChange={this.props.handleChange}
          value={this.props.value4}
          color="default"
          name="radio-button-demo"
        />
      </ListItem>
    );
  }
}

RadioButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtons);
