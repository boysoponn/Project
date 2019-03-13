import React from 'react';
import Header from './header';
import styled from 'styled-components'
import { Preloader, Placeholder } from 'react-preloading-screen';
import Panel from './sidebarInput/panel'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import a1 from './image/a1.PNG'
import a2 from './image/a2.PNG'
import a3 from './image/a3.PNG'
import b1 from './image/b1.PNG'
import b2 from './image/b2.PNG'
import b3 from './image/b3.PNG'
import b4 from './image/b4.PNG'
import b5 from './image/b5.PNG'

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
    <Preloader>
      <div>
      <Header/>

      <Typography className={classes.head}>Tutorial</Typography>
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
                        img:a1,
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
                        topic:'Add Page',
                        content:'Press add button.'
                    },
                    {
                        content:'Set page name and choose tamplate which you want.'
                    },
                    {
                        content:'After that press save button.'
                    }
                ]},
                {_key:'4', label: 'Delete page',
                    data:[{
                        topic:'Delete Page',
                        content:'Choose your page which you want to delete.'
                    },
                    {
                        content:'After that press delete button.'
                    },
                    {
                        content:'And press yes button.'
                    }
                ]},
                {_key:'5', label: 'Change template',
                    data:[{
                        topic:'Change Template',
                        content:'When you want to change page name or change template. Choose your page which you want to edit. Press edit button.'
                    },
                    {
                        content:'Edit page name or Choose tamplate which you want'
                    },
                    {
                        content:'After that press save button'
                    }
                ]},
                {_key:'6', label: 'Change content',
                    data:[{
                        topic:'Change Content',
                        content:'Choose your template input which you want to edit'
                    },
                    {
                        topic:'Example : Cover Template.',
                        content:'Edit content and you can change content style with setting font button and setting animation button'
                    },
                    {
                        content:'Setting font button , You can change font size , color , position and other.'
                    },
                    {
                        content:'After that press save button. '
                    }
                ]},
                {_key:'7', label: 'Change picture and upload picture',
                    data:[{
                        topic:'Change Picture',
                        content:'Press choose image button on your template input.'
                    },
                    {
                        content:'Press your picture that is suscess.'
                    },
                    {
                        topic:'Upload Picture',
                        content:'press upload picture button.'
                    },
                    {
                        content:'press your pictrue and press ok button.'
                    },
                    {
                        content:'press ok button again.'
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
                        content:'Press gallery items button.'
                    },
                    {
                        content:'Press add button. That is suscess.'
                    },
                    {
                        content:'After that you can edit that item.'
                    }, 
                ]},
                {_key:'9', label: 'Add font or Add icon',
                    data:[{
                        topic:'Add Font',
                        content:'When you change font style you can press add font button for add font.'
                    },
                    {
                        content:'Press add button'
                    },
                    {
                        linklabel:'Google Fonts',
                        link:'https://fonts.google.com/',
                        content:'Now you can see item name is none , Let to edit. which projectCMS support'
                    },
                    {
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
      </div>
        <Placeholder>
        <Preload><Span>Loading...</Span></Preload>
        </Placeholder>
    </Preloader>
    );
  }
}

export default withStyles(styles)(CustomizedExpansionPanel);


const Preload = styled.div`
background-color:#f8f8f8;
height:100vh;
width:100vw;
`;

const Span = styled.span`
display:flex;
justify-content: center;
align-items: center;
height:100%;
`;