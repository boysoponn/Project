import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
});

class Textarea extends React.Component {
  render() {
    return (
      <div >
        <FormControl>
        <TextField
          id="multiline-static"
          label={this.props.label}
          multiline
          rows="4"
          onChange={this.props.onChange}
          value={this.props.value}
          margin="normal"
          autoComplete="off"
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
