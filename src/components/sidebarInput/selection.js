import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class Selection extends React.Component {

  render() {
      let t = this.props.labelTrue;
      let f = this.props.labelFalse;
      let label;
      if(this.props.value === true){
        label=t;
      }else{
        label=f;
      }
    return (
        <FormControlLabel
          label={label}
          control={
            <Switch
              checked={this.props.value}
              onChange={this.props.onChange}
              value={this.props.value}
              color="primary"
            />
          }
        />
    );
  }
}

export default Selection;
