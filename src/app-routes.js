import { withNavigationWatcher } from './contexts/navigation';
import { HomePage, TasksPage, ProfilePage, ProjectPage} from './pages';

const routes = [
  {
    path: '/tasks',
    component: TasksPage
  },
  {
    path: '/profile',
    component: ProfilePage
  },
  {
    path: '/home',
    component: HomePage
  }, 
  {
    path: '/project/:projectId',
    component: ProjectPage
  }
];

export default routes.map(route => {
  return {
    ...route,
    component: withNavigationWatcher(route.component)
  };
});
