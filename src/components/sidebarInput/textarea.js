import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import purple from '@material-ui/core/colors/purple';
import TextField from '@material-ui/core/TextField';
import SettingAnimate from './SettingAnimate'


const styles = theme => ({
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

class Textarea extends React.Component {
  render() {
    const { classes} = this.props;
    return (
      <div >
      <SettingAnimate 
        animate={this.props.animate} 
        duration={this.props.duration} 
        FontFamily={this.props.FontFamily}
        FontSize={this.props.FontSize}
        FontWeight={this.props.FontWeight}
        FontStyle={this.props.FontStyle}
        Status={this.props.Status}
        onChangeFontFamily={this.props.onChangeFontFamily}
        onChangeFontSize={this.props.onChangeFontSize}
        onChangeDuration={this.props.onChangeDuration} 
        onChangeAnimate={this.props.onChangeAnimate} 
        onChangeFontWeight={this.props.onChangeFontWeight}
        onChangeFontStyle={this.props.onChangeFontStyle}
        onChangeStatus={this.props.onChangeStatus}
        />
        <FormControl className={classes.margin}>
        <TextField
          id="multiline-static"
          label={this.props.label}
          multiline
          rows="4"
          onChange={this.props.onChange}
          value={this.props.value}
          className={classes.textField}
          margin="normal"
        />
        </FormControl>
      </div>
    )
  }
}

Textarea.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Textarea);
