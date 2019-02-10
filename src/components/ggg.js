import React, { Component } from 'react';

class allmessage extends Component {
  state={
    get:'',
    set1:{t1:'breakfast',t2:'water',t3:'beer',},
    set2:{t1:'breakfast',t2:'water',t3:'beer',},
    set3:{t1:'breakfast',t2:'water',t3:'beer',},

    numbers : [ {id:1, name:'set1' ,content: 'บัตร100'},
                {id:2,name:'set2', beer:true, content: 'บัตร500'},
                {id:3,name:'set3', water:true, content: 'บัตรVIP'}],
    posts : [
      {id: 1, name:'breakfast', content: 'อาหารเช้า'},
      {id: 2, name:'lunch' ,content: 'อาหารเที่ยง'},
      {id: 3, name:'water', content: 'อาหารเย็น'},
      {id: 4, name:'snack',content: 'อาหารว่าง'},
      {id: 5, name:'beer', content: 'เบียร์'},
      {id: 6, name:'water',content: 'น้ำเปล่า'},
    ]
  }

  g=post=>()=>{

    this.setState({
      get:post.name,
    })
    console.log(this.state)
  }
  render() {
 
    return (   
      <div style={{textAlign:'center',padding:100}}> 
        {this.state.numbers.map((post) =>
          <button
            key={post.id}
            onClick={this.g(post)}
            >{post.content}</button>
        )}

         {this.state.posts.map((post) =>
         this.state.get === post.name ?
          <div
            key={post.id}
            id={post.id}
            style={{backgroundColor:'red',width:150,height:50}}>
            <p>{post.content}</p>
            </div>
            :
            <div
            key={post.id}
            id={post.id}
            style={{backgroundColor:'yellow',width:150,height:50}}>
            <p>{post.content}</p>
            </div>
            
        )}

      </div>
    );
   }
  }
  export default allmessage;