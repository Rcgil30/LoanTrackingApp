import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateUser = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [cedula, setCedula] = useState("");
    const [telefono, setTelefono] = useState("");
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { nombre, apellido, cedula, telefono };

        setIsPending(true);
        fetch("http://localhost:8000/clients", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then(() => {
            setIsPending(false);
            history.push("/", { message: "Cliente creado exitosamente" });
        })
    }
    return ( 
        <div className="create-user">
            <form onSubmit={handleSubmit}>
                <h2>Crear un nuevo cliente</h2>
                <div className="inputs">        
                    <h4>Nombre: </h4>
                    <input 
                    type="text"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    />
                    <h4>Apellido: </h4>
                    <input 
                    type="text"
                    required
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    />
                    <h4>Cédula: </h4>
                    <input 
                    type="number" 
                    className="cedula"
                    required
                    value={cedula}
                    onChange={(e) => setCedula(e.target.value)}
                    />
                    <h4>Teléfono: </h4>
                    <input 
                    type="number" 
                    className="telefono"
                    required
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    />
                    
                    
                </div>
                <div className="boton">
                    {!isPending && <button type="submit"> Crear Cliente </button>}
                    {isPending && <button type="submit" disabled> Creando Cliente... </button>}
                </div>
            </form>
        </div>
);
}

export default CreateUser;