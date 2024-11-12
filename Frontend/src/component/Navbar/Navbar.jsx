import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='Navbar'>
        {/* <h1 className='logo'>IN<span>I8</span></h1> */}
       <Link  to="/add-user"><h1 className='logo'>IN<span>I8</span></h1></Link> 
        <div>
        <Link to="/add-user"> <button className='btn addUser'>Add New</button></Link>
        <Link to="/"> <button className='btn userList'>User&apos;s List</button></Link>
        </div>
    </nav>
  )
}

export default Navbar
