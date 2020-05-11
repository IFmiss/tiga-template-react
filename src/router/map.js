import Loadable from 'react-loadable';
import Loading from '../components/Loading';

const Home = Loadable({
  loader: () => import('@pages/Home'),
  loading: Loading
})

const routes = [{
  name: 'home',
  path: '/home',
  component: Home,
  meta: {
    title: '首页'
  }
}, {
  name: 'home',
  redirect: true
}];

export default routes;
