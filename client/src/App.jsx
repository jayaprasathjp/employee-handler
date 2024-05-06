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
function App() {
  const location = useLocation();
  const showNavBar = location.pathname !== "/";

  return (
    <>
      {showNavBar ? (
        <>
       <div className="flex w-screen">
       <Sidebar>
         <SidebarItem icon={<Home size={18} />} text="Home" alert />
         <SidebarItem icon={<LayoutDashboard size={18} />} text="Dashboard" active />
         <SidebarItem icon={<StickyNote size={18} />} text="Projects" alert />
         <SidebarItem icon={<Calendar size={18} />} text="Calendar" />
         <SidebarItem icon={<Layers size={18} />} text="Tasks" />
         <SidebarItem icon={<Flag size={18} />} text="Reporting" />
         <hr className="my-3" />
         <SidebarItem icon={<Settings size={18} />} text="Settings" />
         <SidebarItem icon={<LifeBuoy size={18} />} text="Help" />
       </Sidebar>
       <div className=' flex-row w-full'>
       <NavBar/>
       <Routes>
      <Route path="/list" element={<EmployeeTable/>} />
      <Route path="/add" element={<AddEmployee/>} />
      <Route path="/view" element={<ViewEmployee/>} />
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
