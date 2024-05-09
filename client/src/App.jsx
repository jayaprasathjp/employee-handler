import { Routes, Route, useLocation,Link,useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import { useEffect,useState } from 'react';
import Sidebar from './components/SideBar';
import EmployeeTable  from './pages/EmployeeTable';
import { SidebarItem } from './components/SideBar';
import {FolderSync,  LayoutGrid,List ,LogOut,UserPlus,ScanSearch} from "lucide-react";
import NavBar from './components/Navbar';
import AddEmployee from './pages/AddEmployee';
import ViewEmployee from './pages/ViewEmployee';
import Edit from './pages/Edit';
import Details from './pages/Details';
import Transfer from './pages/Transfer';
import Home from './pages/Home';
import {clsx} from 'clsx';


function App() {
  const location = useLocation();
  const showNavBar = location.pathname !== "/";
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    } else {
      navigate("/");
}
},[]);
  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };
  return (
    <>
      {showNavBar ? (
        <>
       <div className="flex">
       <Sidebar>
       <Link to="home">  <SidebarItem icon={<LayoutGrid size={18} />} text="Home"  active={location.pathname==="/home"}/></Link>
       <Link to="list"> <SidebarItem icon={<List  size={18} />} text="List" active={location.pathname==="/list"}/></Link>
       <Link to="view"> <SidebarItem icon={<ScanSearch size={18} />} text="View&nbsp;Employee" active={location.pathname==="/view"}/></Link>
       <Link to="add">  <SidebarItem icon={<UserPlus size={18} />} text="Add&nbsp;Employee" active={location.pathname==="/add"}/></Link>
       <Link to="transfer">  <SidebarItem  icon={<FolderSync size={18} />} text="Transfer&nbsp;Employee" active={location.pathname==="/transfer"}/></Link>
       <Link to="/" onClick={handleLogout}>  <SidebarItem icon={<LogOut size={18} />} text="Sign&nbsp;out" active={location.pathname==="/"}/></Link>
       </Sidebar>
       <div className=' flex-row w-full'>
       <NavBar/>
       <Routes>
      <Route path="/home" element={<Home/>} />
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
