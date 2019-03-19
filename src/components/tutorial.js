import React from 'react';
import Panel from './sidebarInput/panel';
import { withStyles } from '@material-ui/core/styles';
import a1 from './image/a1.PNG'
import a11 from './image/a11.png'
import a2 from './image/a2.PNG'
import a3 from './image/a3.PNG'
import b1 from './image/b1.PNG'
import b2 from './image/b2.PNG'
import b3 from './image/b3.PNG'
import b4 from './image/b4.PNG'
import b5 from './image/b5.PNG'
import c1 from './image/c1.PNG'
import c2 from './image/c2.PNG'
import c3 from './image/c3.PNG'
import c4 from './image/c4.PNG'
import c5 from './image/c5.PNG'
import d1 from './image/d1.PNG'
import d2 from './image/d2.PNG'
import d3 from './image/d3.PNG'
import d4 from './image/d4.PNG'
import e1 from './image/e1.PNG'
import e2 from './image/e2.PNG'
import e3 from './image/e3.PNG'
import e4 from './image/e4.PNG'
import e5 from './image/e5.PNG'
import f1 from './image/f1.PNG'
import f2 from './image/f2.PNG'
import f3 from './image/f3.PNG'
import f4 from './image/f4.PNG'
import f5 from './image/f5.PNG'
import f6 from './image/f6.PNG'
import f21 from './image/f21.PNG'
import g1 from './image/g1.png'
import g2 from './image/g2.png'
import g3 from './image/g3.png'
import g4 from './image/g4.png'
import h1 from './image/h1.PNG'
import h2 from './image/h2.png'
import h3 from './image/h3.png'
import h4 from './image/h4.png'
import h5 from './image/h5.png'

const styles = theme => ({
    head:{
        padding:'2%',
        fontSize: '1rem'
    }
});
class CustomizedExpansionPanel extends React.Component {
  state = {
    expanded: '',
  };

  render() {
    const { classes } = this.props;
    return (
        <div>
            <Panel
            panel= {[
                {_key:'1', label: 'Register and login',
                    data:[{
                        img:a1,
                        topic:'Register',
                        content:'If you want to register ,Press register button on menu.'
                    },
                    {
                        img:a2,
                        content:'Input your email and set your password that is suscess.'
                    },
                    {   
                        img:a11,
                        topic:'Login',
                        content:'Press login button on menu.'
                    },
                    {
                        img:a3,
                        content:'Input your email and your password or you can login with Facebook , Gmail and Twitter.'
                    }
                ]},
                {_key:'2', label: 'Start project',
                    data:[{
                        img:b1,
                        topic:'Create project name',
                        content:'When you come in first time , You can press create project name button.'
                    },
                    {
                        img:b2,
                        content:'Set your project name.'
                    },
                    {
                        img:b3,
                        content:'After that press start project button.'
                    },
                    {
                        img:b4,
                        content:'Set page name and choose tamplate which you want and press save button.'
                    },
                    {
                        img:b5,
                        content:'Now you have 1 page , You can press preview button for go to your website.Your website address composite with yoursitecms.tk , your project name and page name.'
                    }
                ]},
                {_key:'3', label: 'Add page',
                    data:[{
                        img:c1,
                        topic:'Add Page',
                        content:'Press add button.'
                    },
                    { 
                        content:'Set page name and choose tamplate which you want.'
                    },
                    {
                        img:c2,
                        content:'After that press save button.'
                    },
                    {
                        img:c3,
                    }
                ]},
                {_key:'4', label: 'Delete page',
                    data:[{
                        topic:'Delete Page',
                        content:'Choose your page which you want to delete.'
                    },
                    {
                        img:c4,
                        content:'After that press delete button.'
                    },
                    {
                        img:c5,
                        content:'And press yes button.'
                    }
                ]},
                {_key:'5', label: 'Change template',
                    data:[{
                        img:d1,
                        topic:'Change Template',
                        content:'When you want to change page name or change template. Choose your page which you want to edit. Press edit button.'
                    },
                    {
                        img:d2,
                        content:'Edit page name or Choose tamplate which you want.'
                    },
                    {
                        img:d3
                    },
                    {
                        img:d4,
                        content:'After that press save button.'
                    }
                ]},
                {_key:'6', label: 'Change content',
                    data:[{
                        topic:'Change Content',
                        content:'Choose your template input which you want to edit.'
                    },
                    {
                        img:e1,
                        topic:'Example : Cover Template.',
                        content:'Edit content and you can change content style with setting font button and setting animation button.'
                    },
                    {
                        img:e2,
                        content:'Setting font button , You can change font size , color , position and other.'
                    },
                    {
                        img:e3
                    },
                    {
                        img:e4,
                        content:'Setting animation button , You can change font animation and duration.'
                    },
                    {
                        img:e5,
                        content:'After that press save button. '
                    }
                ]},
                {_key:'7', label: 'Change picture and upload picture',
                    data:[{
                        img:f1,
                        topic:'Change Picture',
                        content:'Press choose image button on your template input.'
                    },
                    {
                        img:f2,
                        content:'Press your picture that is suscess.'
                    },
                    {
                        img:f3
                    },
                    {
                        img:f21,
                        topic:'Upload Picture',
                        content:'press upload picture button.'
                    },
                    {
                        img:f4,
                        content:'press your pictrue and press ok button.'
                    },
                    {
                        img:f5,
                        content:'press ok button again.'
                    },
                    {
                        img:f6,
                    }              
                ]},
                {_key:'8', label: 'Add item on template',
                    data:[{
                        topic:'Add Item On Template',
                        content:'Choose your template input which you want to add item.'
                    },
                    {  
                        topic:'Example : gallary item.'
                    },
                    {
                        img:g1,
                        content:'Press gallery items button.'
                    },
                    {
                        img:g2,
                        content:'Press add button. That is suscess.'
                    },
                    {
                        img:g3,
                    },
                    {
                        img:g4,
                        content:'After that you can edit that item.'
                    }, 
                ]},
                {_key:'9', label: 'Add font or Add icon',
                    data:[{
                        img:h1,
                        topic:'Add Font',
                        content:'When you change font style you can press add font button for add font.'
                    },
                    {
                        img:h2,
                        content:'Press add button'
                    },
                    {
                        img:h3,
                    },
                    {
                        img:h4,
                        linklabel:'Google Fonts',
                        link:'https://fonts.google.com/',
                        content:'Now you can see item name is none , Let to edit. which projectCMS support'
                    },
                    {
                        img:h5,
                        content:'Copy font name which you want and paste in font input.'    
                    },
                    {
                        content:'After that press save button.'
                    },
                    {
                        topic:'Add icon',
                        link:'https://fontawesome.com/icons?d=gallery',
                        linklabel:'fontawesome',
                        content:'you can do same add font icon which projectCMS support '
                    }
                ]},
              ]}
            />
        </div>
    );
  }
}

export default withStyles(styles)(CustomizedExpansionPanel);