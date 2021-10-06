import React, {useState, useEffect} from 'react';
import Manuscript from '../../components/manuscript/manuscript.js'
import Brief from '../../components/brief/brief.js'
import * as Realm from "realm-web";
import Button from 'devextreme-react/button';
import MultiView from 'devextreme-react/multi-view';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import Stack from '@mui/material/Stack';
import StepLabel from '@mui/material/StepLabel';
import CheckIcon from '@mui/icons-material/Check';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LockClockIcon from '@mui/icons-material/LockClock';
import AvatarGroup from '@mui/material/AvatarGroup';

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
        <MultiView
          // height={300}
          dataSource={tabs}
          selectedIndex={selectedIndex}
          swipeEnabled={false}
          itemComponent={tabs.filter(tab => tab.index===selectedIndex)[0].component}
          animationEnabled={true} 
        />
      </Stack>}
    </React.Fragment>
  )
};