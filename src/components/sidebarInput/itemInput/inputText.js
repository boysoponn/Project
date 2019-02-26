import React from 'react';
import SettingAnimate from './SettingAnimate'
import Text from './Text';


class InputText extends React.Component {
  render() {
    return (  
      <div >
      <SettingAnimate 
        displayFont={this.props.displayFont}
        displayAnimate={this.props.displayAnimate}
        animate={this.props.animate} 
        duration={this.props.duration} 
        position={this.props.position}
        FontFamily={this.props.FontFamily}
        FontSize={this.props.FontSize}
        FontWeight={this.props.FontWeight}
        FontStyle={this.props.FontStyle}
        Status={this.props.Status}
        onChangeFontFamily={this.props.onChangeFontFamily}
        onChangeFontSize={this.props.onChangeFontSize}
        onChangeDuration={this.props.onChangeDuration} 
        onChangeAnimate={this.props.onChangeAnimate} 
        onChangeFontWeight={this.props.onChangeFontWeight}
        onChangeFontStyle={this.props.onChangeFontStyle}
        onChangeStatus={this.props.onChangeStatus}
        onChangePosition={this.props.onChangePosition}
        color={this.props.color}
        onChangeColor={this.props.onChangeColor}
        displayAnimate={this.props.displayAnimate}
        displayFontFamily={this.props.displayFontFamily}
        displayFontWeight={this.props.displayFontWeight}
        hoverColor={this.props.hoverColor}
        onChangeHoverColor={this.props.onChangeHoverColor}
        showHoverColor={this.props.showHoverColor}
        linkTo={this.props.linkTo}
        showLinkTo={this.props.showLinkTo}
        font={this.props.font}
        />
        <Text
        type="text"
        label={this.props.Label}
        value={this.props.value}
        onChange={this.props.onChange}
        />
      </div>
    )
  }
}

export default InputText;
