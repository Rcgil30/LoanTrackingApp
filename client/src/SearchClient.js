import { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const SearchClient = () => {
    const [clients, setClients] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/clients')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setClients(data);
            })
    }, []);

    return ( 
        <div className="buscar-cliente">
            {clients && clients.map(client => (
                <div className="cliente" key={client.id}>
                    <Link to={"/buscarCliente/".concat(client.id) }className="links">
                        <h3>{client.nombre} {client.apellido} - {client.cedula}</h3>
                    </Link>
                </div>
                
            ))}
        </div>
     );
}
 
export default SearchClient;