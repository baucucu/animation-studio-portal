import React, {useState, useEffect} from 'react';
import * as Realm from "realm-web";
import Button from 'devextreme-react/button';
import Tabs from 'devextreme-react/tabs';
import MultiView from 'devextreme-react/multi-view';


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
      console.log("event: ",e)
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
        })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[projectId])

  useEffect(() => {
    console.log("Project data has changed: ", project)
  },[project])

  return (
    <React.Fragment>
      <Button icon="back" onClick={history.goBack} style={{margin:8}}></Button>
      <h2 className={'content-block'}>Project</h2>
      {project && <>
        <div className={'content-block'}>
          <div className={'dx-card responsive-paddings'}>
            <div className="project">
            <div className="mongoId">MongoDB id: {project._id.toString()}</div>
            <div className="projectName">Deal: {project.projectName}</div>
            <div className="ownerName">Project manager: {`${project.projectOwnerName}`}</div>
            <div className="clientName">Client contact name: {`${project.clientName}`}</div>
            <div className="clientName">Client contact email: {`${project.clientEmail}`}</div>
            <div className="proposalUrl">Proposal URL: {`${project.proposalURL}`}</div>
            <div className="firstWonTime">Won time: {`${project.firstWonTime}`}</div>
            <div className="dealValue">Deal value: {`${project.dealValue} ${project.currency}`}</div>
            <div className="products">
              <b>Products: </b>
              {project.products.map((product, id) => {
                return (
                  <div key={id}>
                    <div className="product">{product.quantity} x {product.name} @ {product.sum_formatted} </div>
                  </div>
                )
              })}
            </div>
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

const TabItem = (props) => {
  const icon = props.state === "completed" ? "check" : props.state === "active" ? "clock" : "key"
  const color = props.state === "completed" ? "green" : props.state === "active" ? "purple" : "gray"
  return(
    <React.Fragment style={{display: "flex", flexDirection: "row"}}>
      <div>
        <i class={`dx-icon-${icon}`} style={{marginLeft:50, fontSize:16, color: color}}></i>
      </div>
      <div>
        <i class={`dx-icon-${props.icon}`} style={{fontSize:24}}></i>
        <div>{props.text}</div>
      </div>
      
    </React.Fragment>
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
