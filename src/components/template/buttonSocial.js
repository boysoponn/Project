import React from 'react';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import './tamplateCSS/menubar.css';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
button:{
width:'90%'
}
});


class Social extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Button variant="contained" color={this.props.color?this.props.color:"primary"} onClick={this.props.onClick} className={classes.button}>
      <I className={this.props.social}></I>{this.props.text}
    </Button>
    );
  }
}

export default  withStyles(styles)(Social); 

const I = styled.i`
font-size: 25px;
margin-right: 10px;
`;
