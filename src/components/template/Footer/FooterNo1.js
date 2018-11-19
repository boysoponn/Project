import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components'

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor:'grey',
    height:200
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


class FooterNo1 extends React.Component {
constructor(props){
  super(props);
  this.state={

  }
}
  render() { 
    const { classes} = this.props;
    return (
      <div className={classes.root}>
      {/* <Grid container spacing={24}>
        <Grid item xs={5}>
        <div  >
        <div style={{textAlign:'center', float:'right'}}>
          <h1>ddddd</h1>
          <div><a>dffdf</a></div>
          <div><a>dffdf</a></div><div><a>dffdf</a></div>
        </div>
        </div>
        </Grid>
        <Grid item xs={7}>
         
         </Grid>
      </Grid> */}
      <h1 style={{textAlign:'center',fontSize:50,color:'#fff'}}>Footer</h1>
    </div>
    );
  }
}

export default withStyles(styles)(FooterNo1);
