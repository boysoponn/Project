import React from 'react'
import { SketchPicker } from 'react-color'
import Popover from '@material-ui/core/Popover';

class PickColor extends React.Component {
  state = {
    anchorEl: null,
    displayColorPicker: false,
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    const color = {
          width: this.props.width,
          height: this.props.height,
          borderRadius: '2px',
          background:this.props.color,
        };
     const swatch= {
          padding: this.props.padding,
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        };

    return (
      <div>
        <div style={ swatch } onClick={ this.handleClick }>
          <div style={ color } />
        </div>
        <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={this.handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >         
          <SketchPicker color={this.props.color} onChange={ this.props.onChange } />
        </Popover>
      </div>
    )
  }
}

export default PickColor