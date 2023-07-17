import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SigIn from '../SigIn'
import './App.css'

function App() {

  return (
    <div className='bg-red-100'>
        <Home></Home>
        <MyAccount></MyAccount>
        <MyOrder></MyOrder>
        <MyOrders></MyOrders>
        <NotFound></NotFound>
        <SigIn></SigIn>
    </div>
  )
}

export default App
