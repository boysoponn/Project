import React from 'react';
import '../../../css/animate.min.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  label:{
    color:'#757575',
    fontSize:12,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});
const MenuProps = {
  PaperProps: {
    style: {
      width: 220,
    },
  },
};
class Dropdown extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
      }

  render() {
    const { classes } = this.props;
    return (
        <form  autoComplete="off">
            <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-simple">{this.props.label}</InputLabel>
            <Select 
              variant='outlined'
                value={this.props.value}
                onChange={this.props.onChange}
                MenuProps={MenuProps}
            >   
            {this.props.choice.map((values => (
                <MenuItem key={values._key} value={values.value}>{values.label}</MenuItem>
                )))}
            </Select>
            </FormControl>
        </form>         
    );
  }
}

Dropdown.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dropdown);