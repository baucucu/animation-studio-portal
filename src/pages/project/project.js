import React, {useState, useEffect} from 'react';
import * as Realm from "realm-web";
import Button from 'devextreme-react/button';
import Tabs from 'devextreme-react/tabs';
import MultiView from 'devextreme-react/multi-view';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
// import CheckIcon from '@mui/icons-material/Check';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


import { useHistory } from "react-router-dom";
import './project.scss';
const BSON = require('bson');

export default function Project() {
  const app = new Realm.App({ id: "animationstudioapp-hxbnj" });
  const mongodb = app.currentUser.mongoClient("mongodb-atlas");
  const projectsColection = mongodb.db("AnimationStudioDB").collection("Projects");
  const history = useHistory();
  const projectId = history.location.pathname.split(":")[1]
  const tabs = [
    { text: 'Brief','icon':'fullscreen', index:0, state:"completed", component: Brief },
    { text: 'Manuscript','icon':'verticalaligntop', index:1, state:"active", component: Manuscript },
    { text: 'Storyboard','icon':'image', index:2, state:"locked", component: Storyboard },
    { text: 'Voiceover','icon':'music', index:3, state:"locked",  component: Voiceover  },
    { text: 'Illustrations','icon':'palette', index:4, state:"locked",  component: Illustrations  },
    { text: 'Animation','icon':'runner', index:5, state:"locked",  component: Animation  },
    { text: 'Delivery','icon':'movetofolder', index:6, state:"locked",  component: Delivery  },
  ];

  const [project, setProject] = useState()
  const [selectedIndex, setSelectedIndex] = useState(0)
  
  function onTabIndexChanged (e) {
    if(e.name === 'selectedItem') {
      // console.log("event: ",e)
      setSelectedIndex(e.value.index)
    }
  }

  async function getProject(projectId){
    return await projectsColection.find({_id: BSON.ObjectId(projectId)})
  }

  useEffect(() => {
      
      getProject(projectId)
        .then(data => {
          console.log("Project found: ", data)
          setProject(data[0])
          // setLoading(false)
        })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[projectId])

  useEffect(() => {
    console.log("Project data has changed: ", project)
  },[project])

  return (
    <React.Fragment>
      {project && <>
        <div id="content" className={'content-block'}>
          <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
            <div style={{display:"flex", flexDirection:"row", alignItems: "center"}}>
              <Button icon="back" onClick={history.goBack} style={{margin:8}}></Button>
              <h2 className="projectName">{project.projectName}</h2>
              <Chip style={{marginLeft:8}} icon={<AccessTimeIcon/>} label="Ongoing" />
            </div>
            <div style={{marginBottom:8, display: 'flex', flexDirection: 'row',alignItems:'center',justifyContent: 'center'}}>
              <Avatar sx={{ bgcolor: 'primary'}}>PM</Avatar>
              <Avatar sx={{ bgcolor: 'primary'}}>AR</Avatar>  
            </div>
            <div style={{display: "flex", flexGrow:0, justifyContent: "flex-end", alignItems:"center"}}>
              {project.products.map((product, id) => <Chip style={{marginLeft: 4}} avatar={<Avatar>{product.quantity}</Avatar>} label={product.name} />)}
              <Button icon="product" style={{marginLeft:8}} text="Proposal"></Button>
            </div>
          </div>          
        </div>
        <Tabs
          dataSource={tabs}
          selectedIndex={selectedIndex}
          onOptionChanged={onTabIndexChanged}
          animated
          itemRender={TabItem}
        >
        </Tabs>
        <MultiView
          // height={300}
          dataSource={tabs}
          selectedIndex={selectedIndex}
          swipeEnabled={false}
          itemComponent={tabs.filter(tab => tab.index===selectedIndex)[0].component}
          animationEnabled={true} />
      </>}
    </React.Fragment>
  )
};


const TabItem = (props, { theme }) => {
  const icon = props.state === "completed" ? "check" : props.state === "active" ? "clock" : "key"
  const color = props.state === "completed" ? "green" : props.state === "active" ? "purple" : "gray"
  
  return(
    <div >
      <div>
        <i class={`dx-icon-${icon}`} style={{marginLeft:50, fontSize:16, color: color}}></i>
      </div>
      <div>
        <i class={`dx-icon-${props.icon}`} style={{fontSize:24}}></i>
        <div>{props.text}</div>
      </div>
      
    </div>  
  )
}

const Brief = (props) => {
  return(<>Brief content</>)
}
const Manuscript = (props) => {
  return(<>Manuscript content</>)
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
