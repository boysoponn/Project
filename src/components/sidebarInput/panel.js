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
      fontSize: '1rem'
  },
  blockImg:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img:{
    width:'50vw'
  }
});
class CustomizedExpansionPanel extends React.Component {
  state = {
    expanded: '',
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { expanded } = this.state;
    const { classes } = this.props;
    return (
      <div>
     {this.props.panel.map((panel) => 
        <ExpansionPanel
          square
          key={panel._key}
          expanded={expanded === panel._key}
          onChange={this.handleChange(panel._key)}
        >
          <ExpansionPanelSummary>
          <Typography>{panel.label}</Typography>
          </ExpansionPanelSummary>
          {panel.data.map((data) =>
          <div key={data._key}>
          {!data.topic?null:           
          <ExpansionPanelDetails >
            <Typography className={classes.topic}>{data.topic}</Typography>
          </ExpansionPanelDetails>
          }
          {!data.content?null:
          <ExpansionPanelDetails >
            <Typography>{data.content} {!data.link?null:<a href={data.link}>{data.linklabel}</a>}</Typography>
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
    );
  }
}

export default withStyles(styles)(CustomizedExpansionPanel);
