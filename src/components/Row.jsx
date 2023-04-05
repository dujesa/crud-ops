const Row = ({
  reservation: {
    id,
    osoba: { ime, prezime, dob },
    karta: { pocetak, kraj, klasa },
  },
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{ime}</td>
      <td>{prezime}</td>
      <td>{dob}</td>
      <td>{pocetak}</td>
      <td>{kraj}</td>
      <td>{klasa}</td>
    </tr>
  );
};

export default Row;
