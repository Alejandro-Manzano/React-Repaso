import { useRoutes, BrowserRouter } from 'react-router-dom' //instalar react-router-dom
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SigIn from '../SigIn'
import './App.css'

const AppRoutes = () => {

  let routes = useRoutes ([
    {path: '/', element: <Home></Home>},
    {path: '/my-account', element: <MyAccount></MyAccount>},
    {path: '/my-order', element: <MyOrder></MyOrder>},
    {path: '/my-orders', element: <MyOrders></MyOrders>},
    {path: '/*', element: <NotFound></NotFound>}, //cualquier otra ruta para not found
    {path: '/sig-in', element: <SigIn></SigIn>}
    
  ])

  return routes
}

const App = () => {

  return (
    <BrowserRouter>
      <AppRoutes></AppRoutes>
    </BrowserRouter>
  )
}

export default App
