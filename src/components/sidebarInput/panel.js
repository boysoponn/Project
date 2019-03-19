import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0,0,0,.125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  },
  expanded: {
    margin: 'auto',
  },
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0,0,0,.03)',
    borderBottom: '1px solid rgba(0,0,0,.125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
}))(MuiExpansionPanelDetails);

const styles = theme => ({
  topic:{
      fontSize: '2rem'
  },
  tutorial:{
    fontSize: '1.2rem',
    fontWeight:'bold'
  },
  blockImg:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img:{
    width:'40vw',
    marginBottom:'1vh'
  },
  label:{
    paddingTop:'2%',
    '&:hover': {
      cursor: 'pointer',
      color:'#555'
    },
  },
  content:{
    fontSize:'1rem'
  },
  labelActive:{
    paddingTop:'2%',
    fontWeight:'500',
    fontSize:'1rem'
  }
});
class CustomizedExpansionPanel extends React.Component {
  state = {
    expanded: '1',
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };
  choose= data =>()=>{
    this.setState({
      expanded:data
    })
  }
  render() {
    const { expanded } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <div style={{width:'25%',float:'left',marginTop:'3vh',marginLeft:'2%'}}>
          <Typography className={classes.tutorial}style={{marginTop:'2%',marginBottom:'2%'}}>Tutorial</Typography>
        {this.props.panel.map((panel) => 
          <Typography key={panel._key} onClick={this.choose(panel._key)} className={this.state.expanded===panel._key? classes.labelActive:classes.label}>{panel.label}</Typography>
        )}
        </div>
      <div style={{width:'73%',float:'left',marginBottom:'5vh'}}>
        {this.props.panel.map((panel) => 
        <ExpansionPanel
          square
          key={1}
          expanded={expanded === panel._key}
          onChange={this.handleChange(panel._key)}
          style={{border:'none'}}
        >
          {panel.data.map((data) =>
          <div key={data._key}>
          {!data.topic?null:           
          <ExpansionPanelDetails >
            <Typography className={classes.topic}>{data.topic}</Typography>
          </ExpansionPanelDetails>
          }
          {!data.content?null:
          <ExpansionPanelDetails >
            <Typography className={classes.content}>{data.content} {!data.link?null:<a href={data.link}>{data.linklabel}</a>}</Typography>
          </ExpansionPanelDetails>
          }
          {!data.img?null:
          <ExpansionPanelDetails className={classes.blockImg}>
            <img className={classes.img} src={data.img}/>
          </ExpansionPanelDetails>
          }
          </div>
          )}
        </ExpansionPanel>
     )}
      </div>
      </div>
    );
  }
}

export default withStyles(styles)(CustomizedExpansionPanel);
