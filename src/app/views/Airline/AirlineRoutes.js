import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const Tabledata = Loadable(lazy(() => import('./Tabledata')));
const AddForm = Loadable(lazy(()=> import('./Edit/AddForm')));
const EditForm = Loadable(lazy(()=>import('./Edit/EditForm')));
const SearchForm = Loadable(lazy(()=>import('./Edit/SearchAirlineForm')));

const AirlineRoutes = [
  {

    path: '/Tabledata',
    element: <Tabledata/>,
  },
  {
    path:'/Edit/AddForm',
    element: <AddForm/>,
  },
  {
    path:'/Edit/EditForm',
    element: <EditForm/>,
  },
  {
    path: '/Edit/SearchAirlineForm',
    element:<SearchForm/>
  }
];

export default AirlineRoutes;
