import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import purple from '@material-ui/core/colors/purple';
import SettingAnimate from './SettingAnimate'

const styles = theme => ({
  margin: {
    // margin: theme.spacing.unit,
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

class InputText extends React.Component {
  render() {
    const { classes, inputLabel } = this.props;
    return (  

      <div className={classes.container}>
      <SettingAnimate 
        animate={this.props.animate} 
        onChangeAnimate={this.props.onChangeAnimate} 
        duration={this.props.duration} 
        onChangeDuration={this.props.onChangeDuration} 
        FontFamily={this.props.FontFamily}
        onChangeFontFamily={this.props.onChangeFontFamily}
        onChangeFontSize={this.props.onChangeFontSize}
        FontSize={this.props.FontSize}
        FontWeight={this.props.FontWeight}
        onChangeFontWeight={this.props.onChangeFontWeight}
        onChangeFontStyle={this.props.onChangeFontStyle}
        FontStyle={this.props.FontStyle}
        Status={this.props.Status}
        onChangeStatus={this.props.onChangeStatus}
        />
        <FormControl className={classes.margin}>  
          <InputLabel
            FormLabelClasses={{
              root: classes.cssLabel,
              focused: classes.cssFocused,
            }}
            htmlFor="custom-css-input"
            children={inputLabel}
          >
          </InputLabel>
          <Input
            classes={{
              underline: classes.cssUnderline,
            }}
            id="custom-css-input"
            onChange={this.props.onChange}
            value={this.props.value}
          />
          
        </FormControl>
      </div>
    )
  }
}

InputText.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(InputText);
