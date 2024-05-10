import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
const navigation = [
  { name: "VIEW EMLPOYEE", href: "/view", current: true },
  { name: "LIST", href: "/list", current: false },
  { name: "ADD", href: "/add", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
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
    <Disclosure as="nav" className="bg-transparent">
      {({ open }) => (
        <>
          <div className=" m-2 shadow-lg px-2 sm:px-6 bg-cyan-600 rounded-lg text-white">
            <div className="relative flex h-10 items-center justify-between">
             
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
               
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className= "text-white font-medium hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xs"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="float-right">HRMS TOOL</div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <img
                        className="h-8 w-8 rounded-full"
                        src={`https://avatar.vercel.sh/${user?.email}`}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-5 w-40 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <span
                          onClick={handleLogout}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm font-medium text-gray-700"
                            )}
                          >
                            Sign out
                          </span>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
