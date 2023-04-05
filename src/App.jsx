import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table";
import InputForm from "./components/InputForm";
import Delete from "./components/Delete";
import Update from "./components/Update";

function App() {
  const [reservations, setReservations] = useState();

  useEffect(() => {
    axios.get("http://localhost:3002/rezervacije").then((res) => {
      setReservations(res.data);
    });
  }, []);

  return (
    <div className="App">
      <h2>Popis rezervacija:</h2>
      <Table reservations={reservations} />
      <InputForm add={setReservations} />
      <Delete onUpdate={setReservations} />
      <Update />
    </div>
  );
}

export default App;
