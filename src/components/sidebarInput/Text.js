import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import purple from '@material-ui/core/colors/purple';

const styles = theme => ({
  con:{
    width:'100%'
  },
  cssLabel: {
    '&$cssFocused': {
      color: purple[500],
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: purple[500],
    },
  },
});

class Text extends React.Component {
  render() {
    const { classes} = this.props;
    return (  
        <FormControl>  
          <InputLabel
            FormLabelClasses={{
              root: classes.cssLabel,
              focused: classes.cssFocused,
            }}
            htmlFor="custom-css-input"
            children={this.props.label}
          >
          </InputLabel>
          <Input
            classes={{
              underline: classes.cssUnderline,
            }}
            type={this.props.type}
            id="custom-css-input"
            onChange={this.props.onChange}
            value={this.props.value}
          />
          
        </FormControl>

    )
  }
}

Text.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Text);
