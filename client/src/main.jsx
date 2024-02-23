
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { Explore } from './Component/Explore/Explore.jsx';
import { Home } from './Component/Home/Home.jsx';
import {SingleData} from './Component/Explore/SingleData.jsx'
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './Redux/Store.js';
import Bookyoga from './Component/Bookyoga/Bookyoga.jsx';
import Protected from './Component/Protected/Protected.jsx';
import { Login } from './Component/Login/Login.jsx';

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
           path:"",
           element:<Home/>
      },
      {
      path:"explore",
      element:<Explore/>
    },
    {
      path:"/:id",
      element:<SingleData/>
    },{
      path:'/book/:id',
      element:<Protected><Bookyoga/></Protected>
    },
    {
      path:"/login",
      element:<Login/>
    }
  ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
  <RouterProvider router={router} /> 
 </PersistGate>
    </Provider>
)
