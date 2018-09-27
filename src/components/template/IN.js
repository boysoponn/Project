import React from 'react';



class IN extends React.Component {
    constructor(props){  
      super(props);
      this.onChange = this.onChange.bind(this);
          this.state = {
            valuee:0
          };   
      }
 onChange(e){
   this.setState({
     valuee:e.target.value
   });
 };

  render() {

    return (
     <div>
          {this.state.valuee}
          <input value={this.state.valuee} onChange={this.onChange} />
          </div>
    );
  }
}



export default IN;
