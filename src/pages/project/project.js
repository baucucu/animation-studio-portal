import React, {useState, useEffect} from 'react';
import Manuscript from '../../components/manuscript/manuscript.js'
import * as Realm from "realm-web";
import Button from 'devextreme-react/button';
import Box from 'devextreme-react/box';
import MultiView from 'devextreme-react/multi-view';
import { Popup} from 'devextreme-react/popup';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import StepLabel from '@mui/material/StepLabel';
// import StepContent from '@mui/material/StepContent';
import CheckIcon from '@mui/icons-material/Check';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LockClockIcon from '@mui/icons-material/LockClock';
import AvatarGroup from '@mui/material/AvatarGroup';
import Grid from '@mui/material/Grid';
import Drawer from 'devextreme-react/drawer';
import { Button as CButton, Comment, Form, Header } from 'semantic-ui-react'




import { useHistory } from "react-router-dom";
import './project.scss';
const BSON = require('bson');

export default function Project() {
  const app = new Realm.App({ id: "animationstudioapp-hxbnj" });
  const mongodb = app.currentUser.mongoClient("mongodb-atlas");
  const projectsColection = mongodb.db("AnimationStudioDB").collection("Projects");
  const history = useHistory();
  const projectId = history.location.pathname.split(":")[1]

  const [project, setProject] = useState()
  const [selectedIndex, setSelectedIndex] = useState(0)
  
  function onTabIndexChanged (e) {
    if(e.name === 'selectedItem') {
      setSelectedIndex(e.value.index)
    }
  }

  async function getProject(projectId){
    return await projectsColection.find({_id: BSON.ObjectId(projectId)})
  }

  useEffect(() => {
      getProject(projectId)
        .then(data => {
          setProject(data[0])
        })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[projectId])

  useEffect(() => {
  },[project])

  const TabItem = (props) => {
    const icon = props.state === "completed" ? "check" : props.state === "active" ? "clock" : "key"
    const color = props.state === "completed" ? "green" : props.state === "active" ? "purple" : "gray"
    return(
      <div >
        <div>
          <i className={`dx-icon-${icon}`} style={{marginLeft:50, fontSize:16, color: color}}></i>
        </div>
        <div>
          <i className={`dx-icon-${props.icon}`} style={{fontSize:24}}></i>
          <div>{props.text}</div>
        </div>
        
      </div>  
    )
  }
  const Brief = (props) => {
    const {project} = props.data
    const [showPopup, setShowPopup] = useState(false)
    const url = `https://studioflow.typeform.com/to/N5cgnKjZ#companyname=${'xxxxx'}&orderedpackage=${'xxxxx'}&orderedpremiumlogoanimation=${'xxxxx'}&subtitle=${'xxxxx'}&deal_id=${'xxxxx'}`
   
   useEffect(() => {
     console.log("props ", props)
   },[props])
   
    return(
      <>
        {project?.brief && <div>
          Brief submited
          {project.brief.formResponse.answers.map((item,index) =>{return(<div key={index}>{project.brief.formResponse.definition.fields[index].title} {String(item[item.type]?.label || item[item.type]?.labels || item[item.type])}</div>)})}
        </div>}
        {!project?.brief && <div>
          <p>In order to start your project, we need to collect some information about your company, product, and your expectations.</p>
          <p>This will lay the ground for the whole project and will be shared with all creators working on the project.</p>
          <p>The questionnaire contains about 40 questions and takes roughly 30 minutes to respond to.</p>
          <p>Make sure you have gathered all involved parties on your side when answering the questions in the brief. The more detailed the better it is!</p>
          <p>Click the link below to start the questionnaire.</p>
          <Button
            className="button-info"
            text="Brief questionnaire"
            onClick={()=>setShowPopup(true)}
          />
          <Popup
            visible={showPopup}
            onHiding={()=>setShowPopup(false)}
            // dragEnabled={false}
            closeOnOutsideClick={true}
            showCloseButton={true}
            showTitle={true}
            title="Brief"
            container=".dx-viewport"
            width={1000}
            height={800}
          >
            <iframe style={{width:940, height: 680}} src={url} title="Brief"/>
          </Popup>
        </div>}
      </>
    )
  }
 
  const Storyboard = (props) => {
    return(<>Storyboard content</>)
  }
  const Voiceover = (props) => {
    return(<>Voiceover content</>)
  }
  const Illustrations = (props) => {
    return(<>Illustrations content</>)
  }
  const Animation = (props) => {
    return(<>Animation content</>)
  }
  const Delivery = (props) => {
    return(<>Delivery content</>)
  }

  const tabs = [
    { text: 'Brief','icon':'fullscreen', index:0, completed:"true", active:"true", mIcon:CheckIcon , component: Brief, project: project},
    { text: 'Manuscript','icon':'verticalaligntop', index:1, completed:"true", active:"true", mIcon:AccessTimeIcon , component: Manuscript, project: project },
    { text: 'Storyboard','icon':'image', index:2, completed:"false", active:"false" ,mIcon:LockClockIcon , component: Storyboard, project: project },
    { text: 'Voiceover','icon':'music', index:3,  completed:"false", active:"false",mIcon:LockClockIcon ,  component: Voiceover, project: project  },
    { text: 'Illustrations','icon':'palette', index:4,  completed:"false", active:"false",mIcon:LockClockIcon ,  component: Illustrations, project: project  },
    { text: 'Animation','icon':'runner', index:5, completed:"false", active:"false",mIcon:LockClockIcon ,  component: Animation, project: project  },
    { text: 'Delivery','icon':'movetofolder', index:6,  completed:"false", active:"false", mIcon:LockClockIcon ,  component: Delivery, project: project  },
  ];

  return (
    <React.Fragment>
      {project && <Stack className={'content-block'} spacing={2}>
          {/* <Drawer
              style={{minWidth: 300}}
              anchor="right"
              // variant="persistent"
              open={false}
              persistant
              // onClose={toggleDrawer(anchor, false)}
          >
              <div>Drawer content ********************************************</div>
          </Drawer> */}
          <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
            <div style={{display:"flex", flexDirection:"row", alignItems: "center"}}>
              <Button icon="back" onClick={history.goBack} style={{margin:8}}></Button>
              <h2 style={{fontSize:24}} className="projectName">{project.projectName}</h2>
              <Chip style={{marginLeft:8}} icon={<AccessTimeIcon/>} label="Ongoing" />
              <Chip style={{marginLeft:8}} icon={<AccessTimeIcon/>} label="Next expected delivery: 1 aug 2021 14:00" />
            </div>
            <AvatarGroup max={4}>
              <Avatar sx={{ bgcolor: 'primary'}}>PM</Avatar>
              <Avatar sx={{ bgcolor: 'primary'}}>AR</Avatar>  
              <Avatar sx={{ bgcolor: 'primary'}}>AR</Avatar>  
              <Avatar sx={{ bgcolor: 'primary'}}>AR</Avatar>  
              <Avatar sx={{ bgcolor: 'primary'}}>AR</Avatar>  
            </AvatarGroup>
            <div style={{display: "flex", flexGrow:0, justifyContent: "flex-end", alignItems:"center"}}>
              {project.products.map((product, id) => <Chip key={id} style={{marginLeft: 4}} avatar={<Avatar>{product.quantity}</Avatar>} label={product.name} />)}
              <Button icon="product" style={{marginLeft:8}} text="Proposal"></Button>
            </div>
          </div>          
        
        <Stepper activeStep={selectedIndex} >
          {tabs.map((tab, index) => {
            const stepProps = {};
            const labelProps = {};
            // if (isStepOptional(index)) {
            //   labelProps.optional = (
            //     <Typography variant="caption">Optional</Typography>
            //   );
            // }
            // if (isStepSkipped(index)) {
              // stepProps.completed = false;
            // }
            return (
              <Step key={tab.index} className={`step-${tab.index}`} {...stepProps} >
                <StepLabel onClick={()=>{setSelectedIndex(tab.index)}} style={{cursor:'pointer'}} StepIconComponent={tab.mIcon} StepIconProps={{active:'true',completed:'true', error: 'false'}} {...labelProps}>{tab.text}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <Drawer
          opened={true}
          openedStateMode="shrink"
          position="right"
          revealMode="slide"
          component={CommentsDrawer}
          // closeOnOutsideClick={this.onOutsideClick}
          height="100%"
        >
          <div id="content" >
            <MultiView
              // height={300}
              dataSource={tabs}
              selectedIndex={selectedIndex}
              swipeEnabled={false}
              itemComponent={tabs.filter(tab => tab.index===selectedIndex)[0].component}
              animationEnabled={true} 
            />
          </div>
        </Drawer>
        
      </Stack>}
    </React.Fragment>
  )
  
};

const CommentsDrawer = (props) => {

  return (
    <React.Fragment>
      <Comment.Group threaded style={{paddingLeft:8}}>
        <Header as='h3' dividing>
          Scene #
        </Header>

        <Comment>
          <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
          <Comment.Content>
            <Comment.Author as='a'>Matt</Comment.Author>
            <Comment.Metadata>
              <span>Today at 5:42PM</span>
            </Comment.Metadata>
            <Comment.Text>How artistic!</Comment.Text>
            <Comment.Actions>
              <a>Reply</a>
            </Comment.Actions>
          </Comment.Content>
        </Comment>

        <Comment>
          <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
          <Comment.Content>
            <Comment.Author as='a'>Elliot Fu</Comment.Author>
            <Comment.Metadata>
              <span>Yesterday at 12:30AM</span>
            </Comment.Metadata>
            <Comment.Text>
              <p>This has been very useful for my research. Thanks as well!</p>
            </Comment.Text>
            <Comment.Actions>
              <a>Reply</a>
            </Comment.Actions>
          </Comment.Content>

          <Comment.Group>
            <Comment>
              <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
              <Comment.Content>
                <Comment.Author as='a'>Jenny Hess</Comment.Author>
                <Comment.Metadata>
                  <span>Just now</span>
                </Comment.Metadata>
                <Comment.Text>Elliot you are always so right :)</Comment.Text>
                <Comment.Actions>
                  <a>Reply</a>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        </Comment>

        <Comment>
          <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
          <Comment.Content>
            <Comment.Author as='a'>Joe Henderson</Comment.Author>
            <Comment.Metadata>
              <span>5 days ago</span>
            </Comment.Metadata>
            <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
            <Comment.Actions>
              <a>Reply</a>
            </Comment.Actions>
          </Comment.Content>
        </Comment>

        <Form reply>
          <Form.TextArea />
          <CButton content='Add Reply' labelPosition='left' icon='edit' primary />
        </Form>
      </Comment.Group>
    </React.Fragment>
  )
}

