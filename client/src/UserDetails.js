import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const UserDetails = () => {
    const {id} = useParams();
    const [client, setClient] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/clients/${id}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setClient(data);
                console.log(data);
            })
    }, [id]);

    return ( 
        <div className="userDetails">
            {client && <h3>{client.nombre} {client.apellido}</h3>}
            {client && <p>Cédula: {client.cedula}</p>}
            {client && <p>Teléfono: {client.telefono}</p>}

        </div>
     );
}
 
export default UserDetails;