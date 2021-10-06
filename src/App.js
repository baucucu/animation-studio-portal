import 'devextreme/dist/css/dx.common.css';
import './themes/generated/theme.base.css';
import './themes/generated/theme.additional.css';
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './dx-styles.scss';
import LoadPanel from 'devextreme-react/load-panel';
import { NavigationProvider } from './contexts/navigation';
import { AuthProvider, useAuth } from './contexts/auth';
import { useScreenSizeClass } from './utils/media-query';
import Content from './Content';
import UnauthenticatedContent from './UnauthenticatedContent';

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadPanel visible={true} />;
  }

  if (user) {
    return <Content />;
  }

  return <UnauthenticatedContent />;
}

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

export default function Root() {
  const screenSizeClass = useScreenSizeClass();

  return (
    <Router>
      <AuthProvider>
        <NavigationProvider>
          <div className={`app ${screenSizeClass}`}>
            <App />
          </div>
        </NavigationProvider>
      </AuthProvider>
    </Router>
  );
}
