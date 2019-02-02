import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import SettingAnimate from './SettingAnimate'


const styles = theme => ({
});

class InputTextarea extends React.Component {
  render() {
    const { classes} = this.props;
    return (
      <div >
      <SettingAnimate 
        displayFont={this.props.displayFont}
        displayAnimate={this.props.displayAnimate}
        animate={this.props.animate} 
        duration={this.props.duration} 
        FontFamily={this.props.FontFamily}
        FontSize={this.props.FontSize}
        FontWeight={this.props.FontWeight}
        FontStyle={this.props.FontStyle}
        Status={this.props.Status}
        position={this.props.position}
        onChangeFontFamily={this.props.onChangeFontFamily}
        onChangeFontSize={this.props.onChangeFontSize}
        onChangeDuration={this.props.onChangeDuration} 
        onChangeAnimate={this.props.onChangeAnimate} 
        onChangeFontWeight={this.props.onChangeFontWeight}
        onChangeFontStyle={this.props.onChangeFontStyle}
        onChangeStatus={this.props.onChangeStatus}
        onChangePosition={this.props.onChangePosition}
        color={this.props.color}
        onChange={this.props.onChangeColor}
        />
        <FormControl className={classes.margin}>
        <TextField
          id="multiline-static"
          label={this.props.label}
          multiline
          rows="10"
          onChange={this.props.onChange}
          value={this.props.value}
          margin="normal"
        />
        </FormControl>
      </div>
    )
  }
}

InputTextarea.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(InputTextarea);
