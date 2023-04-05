import Row from "./Row";

const Table = ({ reservations }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Ime</th>
          <th>Prezime</th>
          <th>Polazište</th>
          <th>Odredište</th>
          <th>Klasa</th>
        </tr>
      </thead>
      <tbody>
        {reservations?.map((r) => (
          <Row key={r.id} reservation={r} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
