import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react"
import logo from "../assets/logo.png"
import profile from "../assets/profile.png"
import Cartrabbit from "../assets/cartrabbit_logo.png"
import { createContext, useContext, useState } from "react"

  
  const SidebarContext = createContext();

export default function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(false); 
    
    return (
        <>
            <aside className="h-screen">
                <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                    <div className="p-4 pb-2 flex justify-between items-center">
                        <h1 className={`text-cyan-600 font-bold ml-2 text-[19px] overflow-hidden flex     transition-all ${expanded ? "display" : "hidden"}`}>Employee&nbsp;Handler</h1>
                        {/* <img src={Cartrabbit} className={` overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`} alt="nil"/> */}
                        <button onClick={() => setExpanded((curr) => !curr)} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                            {expanded ? <ChevronFirst /> : <ChevronLast />}
                        </button>
                    </div>

                    <SidebarContext.Provider value={{expanded  }}>

                        <ul className="flex-1 px-3">{children}</ul>
                    </SidebarContext.Provider>

                </nav>
            </aside>
        </>
    )
}

export function SidebarItem({ icon, text, active, alert }) {
    const { expanded } = useContext(SidebarContext)
    return (
        <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr from-cyan-200 to-cyan-100 text-cyan-600" : "hover:bg-cyan-50 text-gray-600"}`}>
            {icon}
            <span className={`overflow-hidden transition-all ${expanded ? "w-48; ml-3" : "w-0"}`}>{text}</span>
            {alert && (
                <div className={`absolute right-2 w-2 h-2 rounded bg-cyan-400 ${expanded ? "" : "top-2"}`}>

                </div>
            )}

            {!expanded && (
                <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-cyan-100 text-cyan-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                    {text}
                </div>
            )}
        </li>
    )
}