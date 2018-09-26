import React from 'react'
import Parallax from 'react-springy-parallax'
import '../../css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
import LayerOne from './layerOne';
import Tab from '../tab'
class New extends React.Component {
    constructor(props){  
        super(props);
          this.state = {
          };   
      }

      
    render() {
        const styles = {
            fontFamily: 'Menlo-Regular, Menlo, monospace',
            fontSize: 14,
            lineHeight: '10px',
            color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }
        const div={
            width:this.props.widthcontect,
            overflow:'hidden'
        }
        return (
            <div>
            <Tab/>
            <Parallax  scrolling={true}  style={div} ref="parallax" pages={3} >

                <Parallax.Layer offset={0} speed={1} style={{ backgroundColor: '#243B4A' }} />
                <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
                <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

                <Parallax.Layer
                    offset={0}
                    speed={0.5}
                    style={styles}                 
                    >
                    <LayerOne 
                    title={this.props.title} 
                    animateIn={this.props.animateIn} 
                    duration={this.props.duration}
                    FontFamily={this.props.FontFamily} 
                    FontSize={this.props.FontSize}
                    FontWeight={this.props.FontWeight} 
                    FontStyle={this.props.FontStyle}
                    Status={this.props.Status}
                    />
                </Parallax.Layer>
                
                <Parallax.Layer
                    offset={1}
                    speed={-0.1}
                    style={styles} 
                    >
                </Parallax.Layer>

                <Parallax.Layer
                    offset={2}
                    speed={0.5}
                    style={styles}
                    onClick={() => this.refs.parallax.scrollTo(0)} 
                    > 
                </Parallax.Layer>
            </Parallax>
            </div>
        )
    }
}

export default New;