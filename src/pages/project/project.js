import React, {useState, useEffect} from 'react';
import * as Realm from "realm-web";
import Button from 'devextreme-react/button';
import { useHistory } from "react-router-dom";
import './project.scss';
const BSON = require('bson');

const app = new Realm.App({ id: "animationstudioapp-hxbnj" });
const mongodb = app.currentUser.mongoClient("mongodb-atlas");
const projectsColection = mongodb.db("AnimationStudioDB").collection("Projects");


export default function Project() {
  const history = useHistory();
  const projectId = history.location.pathname.split(":")[1]
  console.log("mongoId: ", projectId)  

  const [project, setProject] = useState()

  async function getProject(projectId){
    console.log("projectId ", projectId)
    return await projectsColection.find({_id: BSON.ObjectId(projectId)})
  }
  
  useEffect(() => {
    getProject(projectId)
    .then(data => {
      console.log("Project found: ", data)
      setProject(data)
    })
  },[projectId])

  useEffect(() => {
    console.log("Project data has changed: ", project)
  },[project])

  return (
    <React.Fragment>
      <Button icon="back" onClick={history.goBack} style={{margin:8}}></Button>
      <h2 className={'content-block'}>Project</h2>
      <div className={'content-block'}>
        <div className={'dx-card responsive-paddings'}>
          Put your content here
        </div>
      </div>
    </React.Fragment>
  )
};
