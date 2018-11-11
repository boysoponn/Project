// import React from 'react'


// class AppWithConnect extends React.Component {
//     constructor(props){
//         super(props);
//         this.state={
//         target:'none'    
//         }
//     }
//     onChangeTarget=(e)=>{
//       this.setState({
//         target:e.target.value
//       })
//     }
//     onChangehh=(e)=>{
//       this.setState({
//         hh:e.target.value
//       })
//     }
//     gg=(e)=>{
// e.preventDefault();
// let score=0;
// if(this.state.target==='true'){
//   score++;
// }
// if(this.state.hh==='true'){
//   score++;
// }
// alert(score);
//     }
//   render() {


//     return (
//       <div>
//   <form onSubmit={this.gg}>
//                     <input  type="checkbox" checked={this.state.target === '_self'}
//                                 onChange={this.onChangeTarget}
//                                 value={'_self'}
//                 />
//                 <input  type="checkbox" checked={this.state.target === 'true'}
//                                 onChange={this.onChangeTarget}
//                                 value={'true'}
//                 />
//                                 <input  type="checkbox" checked={this.state.target === 'none'}
//                                 onChange={this.onChangeTarget}
//                                 value={'none'}
//                 />

//     <input  type="checkbox" checked={this.state.hh === '_self'}
//                 onChange={this.onChangehh}
//                 value={'_self'}
// />
// <input  type="checkbox" checked={this.state.hh === 'true'}
//                 onChange={this.onChangehh}
//                 value={'true'}
// />
//                 <input  type="checkbox" checked={this.state.hh === 'none'}
//                 onChange={this.onChangehh}
//                 value={'none'}
// />

// <button type='submit'>ghjghj</button>
// </form>
// </div>
//     )}}




// export default AppWithConnect;