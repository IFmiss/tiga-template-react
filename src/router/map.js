import Loadable from 'react-loadable';

const Home = Loadable({
  loader: () => import('@pages/Home'),
  loading: '加载中...'
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
