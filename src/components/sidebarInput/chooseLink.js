import React from 'react';
import config from './../../config';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import Popover from '@material-ui/core/Popover';
import HomeRounded from '@material-ui/icons/Link';
import Filter_none from '@material-ui/icons/FilterNone';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import Text from './Text';

const styles = theme => ({
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 10,
    },
  });

class ChooseLink extends React.Component {
    constructor(props){
    super(props);
    this.state={
        news:[],
        open: false,
        anchorEl: null,
        open2: false,
        anchorEl2: null,
    }
}
componentDidMount=()=> {
    this.getData();
  }
    getData=()=>{
      const app = config.database().ref('project/'+this.props.user+'/');
      app.on('value', async (snapshot) => { 
        const snapshotValue = snapshot.val(); 
        const snapshotArr = _.keys(snapshotValue).reduce((prev, cur) => {
          prev.push({
            _key: cur,
            ...snapshotValue[cur]
          });
          return prev;     
        }, []);  
        this.setState({
          news:snapshotArr
        });
    });
  };

  handleClick = event => {this.setState({anchorEl: event.currentTarget,});};
  handleClose = () => {this.setState({anchorEl: null, });};
  handleClick2 = event => {this.setState({anchorEl2: event.currentTarget,});};
  handleClose2 = () => {this.setState({anchorEl2: null, });};
  render() {       
    const { classes } = this.props;
    const { anchorEl,anchorEl2 } = this.state;
    const open = Boolean(anchorEl);
    const open2 = Boolean(anchorEl2);
    return (  
      <div >
        <Text
            type="text"
            label="Link"
            value={this.props.value}
            onChange={this.props.onChange}
        />
        <HomeRounded className={classes.button} onClick={this.handleClick} />
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
                {this.state.news.map((data) => 
                data._key === 'globel' ? null :
                <ListItem key={data._key}>
                <Checkbox
                checked={this.props.value === data.pageName}
                onChange={this.props.onChange}
                value={data.pageName}
                />
                <p>{data.pageName}</p>
                </ListItem>
                )}
              </Popover>
              <Filter_none className={classes.button} onClick={this.handleClick2} />
            <Popover
              open={open2}
              anchorEl={anchorEl2}
              onClose={this.handleClose2}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              >
                <ListItem >
                <Checkbox
                checked={this.props.target === '_blank'}
                onChange={this.props.onChangeTarget}
                value={'_blank'}
                />
                <p>New Window</p>
                </ListItem>
                <ListItem>
                <Checkbox
                checked={this.props.target === '_self'}
                onChange={this.props.onChangeTarget}
                value={'_self'}
                />
                <p>Self</p>
                </ListItem>
              </Popover>
      </div>
    )
  }
}
const mapStateToPropsTabs = state => ({
    user:state.user
  })
export default connect(mapStateToPropsTabs)(withStyles(styles)(ChooseLink));
