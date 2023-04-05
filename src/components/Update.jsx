import axios from "axios";

const Update = () => {
  const handlePatch = () => {
    axios
      .patch("http://localhost:3002/klase/1", {
        oznaka: "B",
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const handlePut = () => {
    axios
      .patch("http://localhost:3002/klase/1", {
        oznaka: "P",
        ime: "Poslovna",
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button onClick={handlePatch}>Peč-aj kategoriju</button>
      <button onClick={handlePut}>Put-aj kategoriju</button>
    </div>
  );
};

export default Update;
