import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const CreateLoan = () => {

    const [cliente, setCliente] = useState("");
    const [clientes, setClientes] = useState([]);
    const [monto, setMonto] = useState("");
    const [fechaInicio, setFechaInicio] = useState("");
    const [interes, setInteres] = useState("");
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const loan = { cliente, monto, fechaInicio, interes };

        setIsPending(true);
        fetch("http://localhost:8000/loans", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loan)
        }).then(() => {
            setIsPending(false);
            history.push("/", { message: "Préstamo creado exitosamente" });
        })
    };

    useEffect(() => {
        fetch("http://localhost:8000/clients")
        .then(res => {
            return res.json();
        })
        .then(data => {
            setClientes(data);
        })
    }, []);



    return ( 
        <div className="create-loan">
            <h2>Crear nuevo préstamo</h2>
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <h4>Cliente: </h4>
                    <select name="cliente" id="cliente" value={cliente} onChange={(e) => setCliente(e.target.value)}>
                        <option value="">Seleccione un cliente</option>
                        {clientes.map((cliente) => (
                        <option 
                        key={cliente.id} value={cliente.id}>
                            {cliente.nombre} {cliente.apellido}
                        </option>
                        ))}
                    </select>
                    <h4>Total: </h4>
                    <input 
                    type="number" 
                    className="monto"
                    required
                    value={monto}
                    onChange={(e) => setMonto(e.target.value)}
                    />
                    <h4>Fecha inicio: </h4>
                    <input 
                    type="date"
                    required
                    value={fechaInicio}
                    onChange={(e) => setFechaInicio(e.target.value)}
                    />
                    <h4>Interés: </h4>
                    <input 
                    type="number" 
                    className="interes"
                    required
                    value={interes}
                    onChange={(e) => setInteres(e.target.value)}
                    />
                </div>
                <div className="boton">
                    {!isPending && <button onSubmit={handleSubmit}>Crear préstamo</button>}
                    {isPending && <button disabled> Creando Préstamo... </button>}
                </div>
            </form>
        </div>
        
        );
}

export default CreateLoan;