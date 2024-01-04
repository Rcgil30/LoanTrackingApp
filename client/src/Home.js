import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {
    let opciones = [
        { id: 1, nombre: "Nuevo cliente", descripcion: "Registro de un nuevo cliente" , ruta: "/crearCliente"},
        { id: 2, nombre: "Nuevo préstamo", descripcion: "Registro de un nuevo préstamo", ruta: "/crearPrestamo" },
        { id: 3, nombre: "Buscar cliente", descripcion: "Buscar un cliente por nombre o cédula", ruta: "/buscarCliente" },
        { id: 4, nombre: "Recaudo por fecha", descripcion: "Total de dinero recibido entre 2 fechas", ruta: "/recaudo" },
        {id: 5, nombre: "Registro pago", descripcion: "Registrar pago de cliente", ruta: "/registroPago"}
    ];

    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.message) {
            alert(location.state.message);
        }
    }, [location]);

    return (
        <div className="home">
            
            {opciones.map(opcion => (
                <Link to={opcion.ruta} key={opcion.id} className="home-links">
                <div className="opcion" key={opcion.id}>
                    <h3>{opcion.nombre}</h3>
                    <p>{opcion.descripcion}</p>
                </div>
                </Link>
            ))            }
        </div>
    );
}
export default Home;