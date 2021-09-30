import React,{useEffect, useState} from 'react';
import List from 'devextreme-react/list';
import { useHistory } from "react-router-dom";
import './home.scss';
import * as Realm from "realm-web";

const app = new Realm.App({ id: "animationstudioapp-hxbnj" });
const mongodb = app.currentUser.mongoClient("mongodb-atlas");
const projectsColection = mongodb.db("AnimationStudioDB").collection("Projects");


export default function Home() {
  const history = useHistory();
  const [projects, setProjects] = useState()
  const [selectedProject, setSelectedProject] = useState()

  function navigateToProject(projectId) {
    history.push(`/project/:${projectId}`);
  }

  async function getProjects() {
    const projects =  await projectsColection.find();
    return projects
  }

  function handleListSelectionChange(item) {
    console.log("new project selected: ",item.addedItems[0])
    navigateToProject(item.addedItems[0]?.deal.id)
  }

  useEffect(() => {
    getProjects().then(data => setProjects(data))
  },[])

  useEffect(() => {console.log("projects data changed: ", projects)},[projects])

  useEffect(() => {console.log("selected project changed: ", selectedProject)},[selectedProject])

  return (
    <React.Fragment>
      <h2 className={'content-block'}>Projects</h2>
      <div className={'content-block'}>
        <div className={'dx-card responsive-paddings'}>
          <List
              selectionMode="single"
              dataSource={projects ? projects : []}
              // grouped={true}
              // searchEnabled={true}
              // selectedItemKeys={this.state.selectedItemKeys}
              onSelectionChanged={handleListSelectionChange}
              itemRender={renderListItem}
              // groupRender={renderListGroup}
              // elementAttr={listAttrs}
            />
        </div>
      </div>
    </React.Fragment>
)}

// function renderListGroup(group) {
//   return <div className="city">{group.key}</div>;
// }

function renderListItem(item) {
  return (
    <div>
      {/* {JSON.stringify(item)} */}
      <div className="hotel">
        <div className="name">{item.projectName}</div>
        <div className="address">{`${item.projectOwnerName}`}</div>
        {/* <div className={`type ${item.Hotel_Class.toLowerCase()}`} /> */}
      </div>
      <div className="price-container">
        <div className="price">{}</div>
        &nbsp;
        {/* <div className="caption">per<br />night</div> */}
      </div>
    </div>
  );
}

