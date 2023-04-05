import axios from "axios";
import { useState } from "react";

const Delete = ({ onUpdate }) => {
  const [idToDelete, setIdToDelete] = useState(0);

  const deleteData = async () => {
    await axios.delete(`http://localhost:3002/rezervacije/${idToDelete}`);
    const response = await axios.get("http://localhost:3002/rezervacije");

    onUpdate(response.data);
  };

  return (
    <div>
      <h2>Brisanje podataka</h2>
      <div>
        <label>Unesite ID rezervacije</label>
        <input
          type="number"
          name="id"
          value={idToDelete}
          onChange={(e) => setIdToDelete(e.target.value)}
        />
      </div>
      <button onClick={deleteData}>Obrisi</button>
    </div>
  );
};

export default Delete;
