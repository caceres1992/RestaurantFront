import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="md:w-2/5 xl:w-1/5 bg-gray-800">
      <div className="p-6">
        <p className="uppercase text-white text-xl text-center font-bold     ">
          Restaurant App
        </p>

        <div class="divide-y divide-gray-400 md:divide-y-3">
          <div class="py-2">
            {" "}
            <p className="mt-5 text-gray-500    ">
              Administra Tu Restaurant en las siguientes Opciones
            </p>
          </div>
          <div className="py-2">
            <nav>
              <NavLink
                className="p-1 block text-gray-400  hover:text-gray-900 hover:bg-yellow-500"
                activeClassName="text-yellow-500"
                exact
                to="/home"
              >
                Ordenes
              </NavLink>
              <NavLink
                className="p-1 block text-gray-400  hover:text-gray-900 hover:bg-yellow-500"
                activeClassName="text-yellow-500"
                exact
                to="/menu"
              >
                Menu
              </NavLink>
         
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
