import React, {useState, useEffect} from 'react';
import { Popup} from 'devextreme-react/popup';
import Button from 'devextreme-react/button';



export default function Brief(props){
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