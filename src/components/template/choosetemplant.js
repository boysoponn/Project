import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {

  },
  t:{
    padding:0
  },
    card: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
};





class RadioButtons extends React.Component {


  render() {
    const { classes } = this.props;

    return (
      <div >


            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={this.props.image} 
              />
              <CardContent className={classes.cardContent}>
              <FormControlLabel value={this.props.label} control={
                <Radio
                checked={this.props.selectedValue === this.props.value}
                onChange={this.props.handleChange}
                value={this.props.value}
                />
              } label={this.props.label} />
              </CardContent>
            </Card>
          
    </div>
    );
  }
}

RadioButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtons);
