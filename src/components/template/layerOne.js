import React from 'react'
import '../../css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';


class LayerOne extends React.Component {
    constructor(props){  
        super(props);
          this.state = {
          };   
      }
       
    render() {
        const title =({
            animationDuration: this.props.duration,
            opacity: 1,
            fontFamily:this.props.FontFamily,
            fontSize:this.props.FontSize,
            fontWeight:this.props.FontWeight,
            fontStyle:this.props.FontStyle,
            display:this.props.Status
        });
        const description =({
            animationDuration: this.props.duration,
            opacity: 1,
            fontFamily:this.props.FontFamily,
            fontSize:this.props.FontSize,
            fontWeight:this.props.FontWeight,
            fontStyle:this.props.FontStyle,
            display:this.props.Status
        });
        return (
            <div>
            <ScrollAnimation style={title}className={this.props.animateIn} >
                {this.props.title}
            </ScrollAnimation>
            </div>
        )
    }
}

export default LayerOne;