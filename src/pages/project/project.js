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
    return await projectsColection.find({_id: BSON.ObjectId(projectId)})
  }
  
  useEffect(() => {
    getProject(projectId)
    .then(data => {
      console.log("Project found: ", data)
      setProject(data[0])
    })
  },[projectId])

  useEffect(() => {
    console.log("Project data has changed: ", project)
  },[project])

  return (
    <React.Fragment>
      <Button icon="back" onClick={history.goBack} style={{margin:8}}></Button>
      <h2 className={'content-block'}>Project</h2>
      {project && <div className={'content-block'}>
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
      </div>}
    </React.Fragment>
  )
};