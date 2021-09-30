import React from 'react';
import Button from 'devextreme-react/button';
import { useHistory } from "react-router-dom";

import './project.scss';


export default function Project() {
  const history = useHistory();
  
  function goBack() {
    history.push('/home/');
  }

  return (
    <React.Fragment>
      <Button icon="back" onClick={()=> goBack()} style={{margin:8}}></Button>
      <h2 className={'content-block'}>Project</h2>
      <div className={'content-block'}>
        <div className={'dx-card responsive-paddings'}>
          Put your content here
        </div>
      </div>
    </React.Fragment>
  )
};
