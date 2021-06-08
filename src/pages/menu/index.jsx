import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../../firebase";
import ReactLoading from "react-loading";
import Platillo from "../../components/ui/Platillo";

const Menu = () => {
  const [listaPlatillos, setListaPlatillos] = useState([]);

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const getPlatillos = () => {
      firebase.db.collection("productos").onSnapshot(handleSnapshot);
    };

    getPlatillos();
  }, []);

  function handleSnapshot(snapshot) {
    const platillos = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    setListaPlatillos(platillos);

    console.log(listaPlatillos);
  }

  return (
    <>
      <h1 className="text-2xl text-gray-700">Menu</h1>
      <Link
        className="bg-yellow-500 
        block
        mt-3  mb-3
        max-w-xs text-center
        p-2 text-gray-100 font-semibold rounded hover:bg-yellow-400 hover:text-gray-500 transition-all"
        to="/nuevo-menu"
      >
        Agregar Platillo
      </Link>

      <h2>platillos</h2>
      <div className="grid xl:grid-cols-2">
        {listaPlatillos.length > 0 ? (
          listaPlatillos.map((plati) => (
            <Platillo key={plati.id} platillo={plati} />
          ))
        ) : (
          <ReactLoading type="bars" height={50} width={50} color="gray" />
        )}
      </div>
    </>
  );
};

export default Menu;
