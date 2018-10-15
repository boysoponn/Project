import React from 'react';
import SettingAnimate from './SettingAnimate'
import Text from './Text';


class InputText extends React.Component {
  render() {
    return (  
      <div >
      <SettingAnimate 
        animate={this.props.animate} 
        duration={this.props.duration} 
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
        color={this.props.color}
        onChange={this.props.onChangeColor}
        />
        <Text
        type="text"
        label={this.props.inputLabel}
        value={this.props.value}
        onChange={this.props.onChange}
        />
      </div>
    )
  }
}

export default InputText;
