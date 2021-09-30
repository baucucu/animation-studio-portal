import React,{useEffect, useState} from 'react';
import List from 'devextreme-react/list';
import { useHistory } from "react-router-dom";
import './home.scss';
import * as Realm from "realm-web";

const app = new Realm.App({ id: "animationstudioapp-hxbnj" });
const mongodb = app?.currentUser && app.currentUser.mongoClient("mongodb-atlas");
const projectsColection = app?.currentUser && mongodb.db("AnimationStudioDB").collection("Projects");


export default function Home() {
  const history = useHistory();
  const [projects, setProjects] = useState()

  function navigateToProject(projectId) {
    history.push(`/project/:${projectId}`);
  }

  async function getProjects() {
    if(app?.currentUser) {return await projectsColection.find()}
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
      <div className="project">
        <div className="mongoId">MongoDB id: {item._id.toString()}</div>
        <div className="projectName">Deal: {item.projectName}</div>
        <div className="ownerName">Project manager: {`${item.projectOwnerName}`}</div>
        <div className="clientName">Client contact name: {`${item.clientName}`}</div>
        <div className="clientName">Client contact email: {`${item.clientEmail}`}</div>
        <div className="proposalUrl">Proposal URL: {`${item.proposalURL}`}</div>
        <div className="firstWonTime">Won time: {`${item.firstWonTime}`}</div>
        <div className="dealValue">Deal value: {`${item.dealValue} ${item.currency}`}</div>
        <div className="products">
          <b>Products: </b>
          {item.products.map((product, id) => {
            return (
              <div key={id}>
                <div className="product">{product.quantity} x {product.name} @ {product.sum_formatted} </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

