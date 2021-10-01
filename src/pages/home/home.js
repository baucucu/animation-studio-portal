import React,{useEffect, useState} from 'react';
import List from 'devextreme-react/list';
import { useHistory } from "react-router-dom";
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './home.scss';
import * as Realm from "realm-web";


export default function Home() {
  const history = useHistory();
  const [projects, setProjects] = useState()

  function navigateToProject(projectId) {
    history.push(`/project/:${projectId}`);
  }

  async function getProjects() {
    const app = new Realm.App({ id: "animationstudioapp-hxbnj" });
    if(app?.currentUser) {
      const mongodb = app.currentUser.mongoClient("mongodb-atlas");
      const projectsColection = app?.currentUser && mongodb.db("AnimationStudioDB").collection("Projects");
      return await projectsColection.find()
    }
  }

  function handleListSelectionChange(e) {
    console.log("new project selected: ",e.addedItems[0])
    navigateToProject(e.addedItems[0]._id.toString())
  }

  useEffect(() => {
    getProjects().then(data => setProjects(data))
  },[])

  useEffect(() => {console.log("projects data changed: ", projects)},[projects])

  // useEffect(() => {console.log("selected project changed: ", selectedProject)},[selectedProject])

  return (
    <React.Fragment>
      <h2 className={'content-block'}>Projects</h2>
      <List
        className={'content-block'}
        selectionMode="single"
        dataSource={projects ? projects : []}
        onSelectionChanged={handleListSelectionChange}
        itemRender={renderListItem}
      />
    </React.Fragment>
)}

function stringAvatar(name) {
  return {
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

function renderListItem(item) {
  return (
    <div className="project">
      <div style={{display: "flex", flexDirection:"row", alignItems: "center", justifyContent:"space-between"}}>
        <div style={{display:"flex", flexDirection:"row", alignItems: "center"}}>
          <h2 style={{fontSize:24}} className="projectName">{item.projectName}</h2>
          <Chip style={{marginLeft:8}} icon={<AccessTimeIcon/>} label="Ongoing" />
        </div>
        <div>
          {item.products.map((product, id) => <Chip style={{marginLeft: 4}} avatar={<Avatar>{product.quantity}</Avatar>} label={product.name} />)}
        </div>
      </div>
      <div className="members">
        <Chip style={{marginRight: 4}} avatar={<Avatar sx={{ bgcolor: 'primary' }}>PM</Avatar>} label={item.projectOwnerName} />
        <Chip style={{marginRight: 4}} avatar={<Avatar sx={{ bgcolor: 'primary' }} {...stringAvatar(item.clientName)} /> } label={item.clientName}/>
      </div>
      {/* <div className="proposalUrl">Proposal URL: {`${item.proposalURL}`}</div> */}
      {/* <div className="firstWonTime">Won time: {`${item.firstWonTime}`}</div> */}
    </div>
  );
}

