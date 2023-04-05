import axios from "axios";
import { useEffect, useState } from "react";

const initialState = {
  id: "",
  ime: "",
  prezime: "",
  dob: "",
  pocetak: "",
  kraj: "",
  klasa: "",
};

const InputForm = ({ add }) => {
  const [input, setInput] = useState(initialState);
  const [cities, setCities] = useState([]);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3002/gradovi"),
      axios.get("http://localhost:3002/klase"),
    ])
      .then(([responseCities, responseClasses]) => {
        setCities(responseCities.data);
        setClasses(responseClasses.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const createResource = (event) => {
    event.preventDefault();

    const requestBody = processBody(input);

    axios
      .post("http://localhost:3002/rezervacije", requestBody)
      .then((res) => add((prev) => [...prev, res.data]));
  };

  const processBody = (data) => ({
    osoba: {
      ime: data.ime,
      prezime: data.prezime,
      dob: Number(data.dob),
    },
    karta: {
      pocetak: data.pocetak,
      kraj: data.kraj,
      klasa: data.klasa,
    },
  });

  const inputChange = (event) => {
    const { name, value } = event.target;

    setInput({ ...input, [name]: value });
  };

  return (
    <form onSubmit={createResource}>
      <label>Ime</label>
      <input
        type="text"
        name="ime"
        value={input.ime}
        onChange={inputChange}
        required
      />

      <label>Prezime</label>
      <input
        type="text"
        name="prezime"
        value={input.prezime}
        onChange={inputChange}
        required
      />

      <label>Godine</label>
      <input
        type="text"
        name="dob"
        value={input.dob}
        onChange={inputChange}
        required
      />

      <div>
        <label>Polaziste</label>
        <select
          name="pocetak"
          value={input.pocetak}
          onChange={inputChange}
          required
        >
          <option value="">--Odaberi grad--</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Odrediste</label>
        <select name="kraj" value={input.kraj} onChange={inputChange} required>
          <option value="">--Odaberi grad--</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Klasa:</label>

        {classes.map((c) => (
          <label key={c.oznaka}>
            <input
              type="radio"
              name="klasa"
              value={c.oznaka}
              checked={input.klasa === c.oznaka}
              onChange={inputChange}
              required
            />
            {c.ime}
          </label>
        ))}
      </div>

      <button>Rezerviraj</button>
    </form>
  );
};

export default InputForm;
