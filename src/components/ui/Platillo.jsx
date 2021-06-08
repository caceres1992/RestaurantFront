import React, { useContext, useRef } from "react";
import { FirebaseContext } from "../../firebase";

const Platillo = ({ platillo }) => {
  //existencia Ref para acceder al vlalor directamente
  const { exite, id } = platillo;
  const existenciaRef = useRef(platillo.exite);

  // context de firebase para cambios en la BD
  const { firebase } = useContext(FirebaseContext);

  // modificando la existencia del plata para el firebase
  const actualizarDisponibilidad = () => {
    const exite = existenciaRef.current.value === "true";

    try {
      firebase.db.collection("productos").doc(id).update({
        exite,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full px-3 mb-4">
      <div className="p-5 shadow-md bg-white">
        <div className="lg:flex gap-2">
          <div className="lg:w-5/12 xl:w-3/12">
            <img
              src={platillo.imagen}
              className=" h-40 w-60 object-fill md:w-full"
              alt={platillo.nombre}
            />

            <select
              value={exite}
              ref={existenciaRef}
              onChange={() => actualizarDisponibilidad()}
              className="w-full pt-1 text-center"
            >
              <option value="true">Disponible</option>
              <option value="false">No Disponible</option>
            </select>
          </div>
          <div className="lg:w-7/12 xl:w-9/12">
            <p className="capitalize font-bold text-2xl text-yellow-600 mb-4">
              {platillo.nombre}
            </p>
            <p className="text-gray-600  mb-2">
              Categoria :
              <span className="text-gray-700 font-bold">
                {" "}
                {platillo.categoria.toUpperCase()}
              </span>
            </p>

            <p className="text-gray-600  text-sm mb-2">
              {platillo.description}
            </p>

            <div className="h-0.5 bg-gray-600"></div>

            <p>
              Precio :{" "}
              <span className="font-semibolds">S/{platillo.precio}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platillo;
