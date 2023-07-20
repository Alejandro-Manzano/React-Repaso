import { useRoutes, BrowserRouter } from 'react-router-dom' //instalar react-router-dom
import { ShoppingCartProvider } from '../../context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import NavBar from '../../components/NavBar'
import './App.css'

const AppRoutes = () => {

  let routes = useRoutes ([
    {path: '/', element: <Home></Home>},
    {path: '/my-account', element: <MyAccount></MyAccount>},
    {path: '/my-order', element: <MyOrder></MyOrder>},
    {path: '/my-orders', element: <MyOrders></MyOrders>},
    {path: '/*', element: <NotFound></NotFound>}, //cualquier otra ruta para not found
    {path: '/sign-in', element: <SignIn></SignIn>}
    
  ])

  return routes
}

const App = () => {

  return (
    <ShoppingCartProvider>
        <BrowserRouter>
          <AppRoutes></AppRoutes>
          <NavBar></NavBar>
        </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
