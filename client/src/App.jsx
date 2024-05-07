import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Sidebar from './components/SideBar';
import EmployeeTable  from './pages/EmployeeTable';
import { SidebarItem } from './components/SideBar';
import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings } from "lucide-react";
import NavBar from './components/Navbar';
import AddEmployee from './pages/AddEmployee';
import ViewEmployee from './pages/ViewEmployee';
import Edit from './pages/Edit';
import Details from './pages/Details';
function App() {
  const location = useLocation();
  const showNavBar = location.pathname !== "/";

  return (
    <>
      {showNavBar ? (
        <>
       <div className="flex">
       <Sidebar>
         <SidebarItem icon={<Home size={18} />} text="Home" alert />
         <SidebarItem icon={<LayoutDashboard size={18} />} text="Employee" active />
         <SidebarItem icon={<StickyNote size={18} />} text="Projects" alert />
         <SidebarItem icon={<Calendar size={18} />} text="Calendar" />
       </Sidebar>
       <div className=' flex-row w-full'>
       <NavBar/>
       <Routes>
      <Route path="/list" element={<EmployeeTable/>} />
      <Route path="/add" element={<AddEmployee/>} />
      <Route path="/view" element={<ViewEmployee/>} />
      <Route path="/edit" element={<Edit/>} />
      <Route path="/details" element={<Details/>} />
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
