import { Routes, Route, useLocation,Link } from 'react-router-dom';
import Login from './pages/Login';
import Sidebar from './components/SideBar';
import EmployeeTable  from './pages/EmployeeTable';
import { SidebarItem } from './components/SideBar';
import {FolderSync,  Home,List ,LogOut,UserPlus,ScanSearch} from "lucide-react";
import NavBar from './components/Navbar';
import AddEmployee from './pages/AddEmployee';
import ViewEmployee from './pages/ViewEmployee';
import Edit from './pages/Edit';
import Details from './pages/Details';
import Transfer from './pages/Transfer';
function App() {
  const location = useLocation();
  const showNavBar = location.pathname !== "/";

  return (
    <>
      {showNavBar ? (
        <>
       <div className="flex">
       <Sidebar>
       <Link >  <SidebarItem icon={<Home size={18} />} text="Home" alert /></Link>
       <Link to="list"> <SidebarItem icon={<List  size={18} />} text="List" active /></Link>
       <Link to="view"> <SidebarItem icon={<ScanSearch size={18} />} text="View&nbsp;Employee" alert /></Link>
       <Link to="add">  <SidebarItem icon={<UserPlus size={18} />} text="Add&nbsp;Employee" /></Link>
       <Link to="transfer">  <SidebarItem  icon={<FolderSync size={18} />} text="Add&nbsp;Employee" /></Link>
       <Link to="/">  <SidebarItem icon={<LogOut size={18} />} text="Sign&nbsp;out" /></Link>
       </Sidebar>
       <div className=' flex-row w-full'>
       <NavBar/>
       <Routes>
      <Route path="/list" element={<EmployeeTable/>} />
      <Route path="/add" element={<AddEmployee/>} />
      <Route path="/view" element={<ViewEmployee/>} />
      <Route path="/edit" element={<Edit/>} />
      <Route path="/details" element={<Details/>} />
      <Route path="/transfer" element={<Transfer/>} />
    </Routes>
       </div>
       
       
     </div>
      
    </>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      )}
    </>
  );
}

export default App;
