import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FirebaseContext } from "../../firebase";
import FileUploader from "react-firebase-file-uploader";
import { useNavigate } from "react-router-dom";
const NuevoMenu = () => {
  const [upload, setUpload] = useState(false);
  const [progreso, setProgreso] = useState(0);
  const [urlImagen, setUrlImagen] = useState("");

  //Context con firebase

  const { firebase } = useContext(FirebaseContext);

  // console.log(firebase)
  // validaiones usando YUP

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      nombre: "",
      precio: "",
      categoria: "",
      imagen: "",
      description: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .min(3, "los platillos deben tener 3 caracteres")
        .required("este campo es requerido"),
      precio: Yup.number().min(1).required("Precio es obligatorio"),
      categoria: Yup.string().required("Categoria es obligatoria"),
      description: Yup.string().required(
        `agregue una description para el platillo`
      ),
    }),
    onSubmit: (platillos) => {
      // console.log(datos);
      try {
        platillos.exite = true;
        platillos.imagen = urlImagen;
        firebase.db.collection("productos").add(platillos);

        //redirecionamos

        navigate("/menu");
      } catch (error) {
        console.log(error);
      }
    },
  });

  // metodos para la imagenes

  const handleUpdadStart = () => {
    setProgreso(0);
    setUpload(true);
  };
  const handleUpdadError = (error) => {
    setUpload(false);
    console.log(error);
  };
  const handleUpdadSuccess = async (nombre) => {
    setProgreso(100);
    setUpload(false);

    //almacenar la url de destino

    const url = await firebase.storage
      .ref("productos")
      .child(nombre)
      .getDownloadURL();

    console.log(url);
    setUrlImagen(url);
  };
  const handleProgress = (progre) => {
    console.log(progre);
    setProgreso(progre);
  };

  return (
    <>
      <h1 className="text-3xl font-light mb-4">Nuevo Platillo</h1>

      <div className="flex  justify-center mt-10">
        <div className=" w-full  max-w-3xl">
          <div>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="nombre"
                  className="text-sm block text-gray-700 font-bold mb-3"
                >
                  Nombre de Platillo
                </label>
                <input
                  id="nombre"
                  type="text"
                  value={formik.values.nombre}
                  onChange={formik.handleChange}
                  placeholder="Platillo"
                  onBlur={formik.handleBlur}
                  className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-none"
                />
              </div>
              {formik.touched.nombre && formik.errors.nombre ? (
                <div
                  role="alert"
                  className="p-3 bg-red-100 text-sm mb-3 text-red-700  border-l-4 border-red-800 lowercase font-semibold "
                >
                  <p className="capitalize font-bold">Hubo un Error :</p>
                  <p>{formik.errors.nombre}</p>
                </div>
              ) : null}
              <div className="mb-4">
                <label
                  htmlFor="precio"
                  className="text-sm block text-gray-700 font-bold mb-3"
                >
                  Precio
                </label>
                <input
                  id="precio"
                  type="number"
                  min="0"
                  value={formik.values.precio}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="S/0"
                  className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-none"
                />
              </div>
              {formik.touched.precio && formik.errors.precio ? (
                <div
                  role="alert"
                  className="p-3 bg-red-100 text-sm mb-3 text-red-700  border-l-4 border-red-800 lowercase font-semibold "
                >
                  <p className="capitalize font-bold">Hubo un Error :</p>
                  <p>{formik.errors.precio}</p>
                </div>
              ) : null}
              <div className="mb-4">
                <label
                  htmlFor="categoria"
                  className="text-sm block text-gray-700 font-bold mb-3"
                >
                  Categoria
                </label>
                <select
                  id="categoria"
                  value={formik.values.categoria}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className=" shadow capitalize   appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-none"
                >
                  <option value="">-- seleccione --</option>
                  <option value="bebidas">Bebidas</option>
                  <option value="arroces">arroces</option>
                  <option value="sopas">sopas</option>
                </select>
              </div>

              {formik.touched.categoria && formik.errors.categoria ? (
                <div
                  role="alert"
                  className="p-3 bg-red-100 text-sm mb-3 text-red-700  border-l-4 border-red-800 lowercase font-semibold "
                >
                  <p className="capitalize font-bold">Hubo un Error :</p>
                  <p>{formik.errors.categoria}</p>
                </div>
              ) : null}

              <div className="mb-4">
                <label
                  htmlFor="imagen"
                  className="text-sm block text-gray-700 font-bold mb-3"
                >
                  Imagen
                </label>
                <FileUploader
                  accept="image/*"
                  id="imagen"
                  name="imagen"
                  randomizeFilename
                  storageRef={firebase.storage.ref("productos")}
                  onUploadStart={handleUpdadStart}
                  onUploadError={handleUpdadError}
                  onUploadSuccess={handleUpdadSuccess}
                  onProgress={handleProgress}
                />
              </div>

              {upload && (
                <div className="h-12 relative w-full border">
                  <div
                    className="bg-green-500 absolute left-0 top-0 text-white px-2 text-sm h-12 flex items-center"
                    style={{ width: `${progreso}%` }}
                  >
                    {progreso}%
                  </div>
                </div>
              )}

              {urlImagen && (
                <p className="text-white bg-green-500 text-center py-2">
                  Subido correcto!
                </p>
              )}

              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="text-sm text-gray-700 font-bold mb-3"
                >
                  description
                </label>
                <textarea
                  id="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  placeholder="breve comentario sobre el platillo"
                  className=" shadow capitalize   appearance-none border h-40 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-none"
                />
              </div>
              {formik.touched.description && formik.errors.description ? (
                <div
                  role="alert"
                  className="p-3 bg-red-100 text-sm mb-3 text-red-700  border-l-4 border-red-800 lowercase font-semibold "
                >
                  <p className="capitalize font-bold">Hubo un Error :</p>
                  <p>{formik.errors.description}</p>
                </div>
              ) : null}
              <input
                type="submit"
                value="Agregar"
                className="p-3  w-full cursor-pointer  bg-yellow-500 text-gray-700 font-semibold hover:bg-yellow-400 transition-all"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NuevoMenu;
