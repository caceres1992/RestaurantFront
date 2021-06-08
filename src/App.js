import Ordenes from "./pages/ordenes";
import { Routes, Route, useRoutes } from "react-router-dom";

import firebase, { FirebaseContext } from "./firebase";

import NuevoMenu from "./pages/nuevomenu";
import Menu from "./pages/menu";
import SideBar from "./components/ui/SideBar";

function App() {
  return (
    <FirebaseContext.Provider
      value={{
        firebase,
      }}
    >
      <div className="md:flex min-h-screen ">
        <SideBar />

        <div className="md:w-3/5 xl:w-4/5 p-6">
          <Routes>
            <Route path="/home" element={<Ordenes />} />
            <Route path="/nuevo-menu" element={<NuevoMenu />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </div>
      </div>
    </FirebaseContext.Provider>
  );
}

export default App;
