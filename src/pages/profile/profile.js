import React, { useState, useEffect } from 'react';
import './profile.scss';
import Form from 'devextreme-react/form';
import { useAuth } from '../../contexts/auth';


export default function Profile() {
  // const { user, signOut } = useAuth();
  const { user } = useAuth();
  const [notes, setNotes] = useState(
    'Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you`ve not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.'
  );
  const employee = {
    // ID: user.id,
    Name: user.customData?.name,
    Email: user._profile.data.email,
    Role: user.customData?.role,
    Company: user.customData?.company
    // Picture: user.customData?.avatarUrl,
    // Notes: notes,
    // Address: '4600 N Virginia Rd.'
  };

  useEffect(() => {
    console.log("user data: ", user)
    console.log("custom data: ", user.customData)
  },[user])

  return (
    <React.Fragment>
      <h2 className={'content-block'}>Profile</h2>

      <div className={'content-block dx-card responsive-paddings'}>
        <div className={'form-avatar'}>
          <img
            alt={''}
            src={user.customData.avatarUrl}
          />
        </div>
        {/* <span>{notes}</span> */}
        <span><Form
          id={'form'}
          defaultFormData={employee}
          onFieldDataChanged={e => e.dataField === 'Notes' && setNotes(e.value)}
          labelLocation={'top'}
          colCountByScreen={colCountByScreen}
        /></span>
      </div>

      {/* <div className={'content-block dx-card responsive-paddings'}>
        <Form
          id={'form'}
          defaultFormData={employee}
          onFieldDataChanged={e => e.dataField === 'Notes' && setNotes(e.value)}
          labelLocation={'top'}
          colCountByScreen={colCountByScreen}
        />
      </div> */}
    </React.Fragment>
  );
}

const colCountByScreen = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4
};
