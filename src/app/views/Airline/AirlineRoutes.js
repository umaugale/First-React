import Loadable from 'app/components/Loadable';
//import { element } from 'prop-types';
import { lazy } from 'react';

const Tabledata = Loadable(lazy(() => import('./Tabledata')));
const AddForm = Loadable(lazy(()=> import('./Edit/AddForm')));
const EditForm = Loadable(lazy(()=>import('./Edit/EditForm')));
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
  }
];

export default AirlineRoutes;
