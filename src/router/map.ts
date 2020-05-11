import React from 'react'
import Loadable from 'react-loadable';
import Loading from '../components/Loading';

const Home = Loadable({
  loader: () => import('@pages/Home'),
  loading: Loading
})

export interface RoutesLists {
  name: string;
  path?: string;
  redirect?: boolean;
  component?: React.ReactNode | any;
  children?: Array<RoutesLists>;
  meta?: {
    title: string;    // 用于切换页面title
    pageId?: string;  // 用于埋点的pageId
  }
}

const routes: Array<RoutesLists> = [{
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
