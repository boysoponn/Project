import React from 'react';
import { List, Card } from 'antd';


class GalleryNo1 extends React.Component {
    constructor(props){  
      super(props);
          this.state = {
          };   
      }

  render() {

    return (
        <div > 
        <List
             grid={{ gutter: 1, column: 3}}
>
                <List.Item>
                <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  />
                </List.Item>
                <List.Item>
                <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  />
                </List.Item>                <List.Item>
                <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  />
                </List.Item>

</List>
        </div>
    );
  }
}

export default GalleryNo1;