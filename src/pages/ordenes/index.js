import React from "react";

const Ordenes = () => {
  return (
    <>
      <h2 className="text-2xl">Ordenes</h2>
      <div className=" h-60 grid grid-cols-1 md:grid-cols-2 gap-4  ">
        <div className="content-around bg-gray-100 p-2 shadow-sm h-60 w-60">
          <div className="flex flex-col justify-between h-full">
            <div className="">
              Mesa 1<div className="bg-gray-700 h-1 mt-1"></div>
            </div>

            <div className=" h-full  w-full self-start items-center flex flex-col align-middle justify-center">
              <table className="table-caption text-center   w-full ">
                <thead>
                  <tr>
                    <th className="w-3/4 border-r-2 text-sm">Platillo</th>
                    <th className="w-1/4 text-sm pl-1">Cantidad</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="text-sm">Arroz con pollo</td>
                    <td className="text-sm border-l-2">2</td>
                  </tr>

                  <tr>
                    <td className="text-sm">C. Gallina c/p G</td>
                    <td className="text-sm border-l-2">2</td>
                  </tr>

                  <tr>
                    <td className="text-sm">C. Gallina c/p M</td>
                    <td className="text-sm border-l-2">1</td>
                  </tr>

                  <tr>
                    <td className="text-sm">Aeropuerto</td>
                    <td className="text-sm border-l-2">2</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="">
              <h2 className="text-xs">
                <strong className="uppercase">mesero :</strong> Eros Montoya
              </h2>
            </div>
          </div>
        </div>{" "}
        <div className="content-around bg-gray-100 p-2 shadow-sm h-60 w-60">
          <div className="flex flex-col justify-between h-full">
            <div className="">
              Mesa 6<div className="bg-gray-700 h-1 mt-1"></div>
            </div>

            <div className=" h-full  w-full self-start items-center flex flex-col align-middle justify-center">
              <table className="table-caption text-center   w-full ">
                <thead>
                  <tr>
                    <th className="w-3/4 border-r-2 text-sm">Platillo</th>
                    <th className="w-1/4 text-sm pl-1">Cantidad</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="text-sm">Arroz con pollo</td>
                    <td className="text-sm border-l-2">2</td>
                  </tr>

                  <tr>
                    <td className="text-sm">C. Gallina c/p G</td>
                    <td className="text-sm border-l-2">2</td>
                  </tr>

                  <tr>
                    <td className="text-sm">C. Gallina c/p M</td>
                    <td className="text-sm border-l-2">1</td>
                  </tr>

                  <tr>
                    <td className="text-sm">Aeropuerto</td>
                    <td className="text-sm border-l-2">2</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="">
              <h2 className="text-xs">
                <strong className="uppercase">mesero :</strong> Jhonatan Davila
              </h2>
            </div>
          </div>
        </div>{" "}
        <div>
          <div>2</div>
        </div>
        <div>
          <div>2</div>
        </div>
        <div>
          <div>2</div>
        </div>
      </div>
    </>
  );
};

export default Ordenes;
