import Loadable from 'react-loadable';
import Loading from '@components/Loading'

export const Home = Loadable({
  loader: () => import('@pages/Home'),
  loading: Loading
})
