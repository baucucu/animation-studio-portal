import React, {useEffect } from 'react';
import './profile.scss';
import Form from 'devextreme-react/form';
import { useAuth } from '../../contexts/auth';


export default function Profile() {
  const { user } = useAuth();
  const employee = {
    // ID: user.id,
    Name: user.customData?.name,
    Email: user._profile.data.email,
    Role: user.customData?.role,
    Company: user.customData?.company
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
        <span><Form
          id={'form'}
          defaultFormData={employee}
          // onFieldDataChanged={e => e.dataField === 'Notes' && setNotes(e.value)}
          labelLocation={'top'}
          colCountByScreen={colCountByScreen}
        /></span>
      </div>
    </React.Fragment>
  );
}

const colCountByScreen = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4
};
