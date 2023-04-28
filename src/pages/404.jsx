export default () => {
  const estilos = {
    textTransform: "uppercase",
    textAlign: "center"
  };
  const estilosTitulo = {
    fontSize: "45px",
    color: "lightcoral",
    background: "#444"
  };
  return (
    <div style={estilos}>
      <h2 style={estilosTitulo}>La Haya es el camino</h2>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt9WOW5wFQ2sE-RI0tbjVsxj8OV00M5eJ2vS93Z6sxd63EB2sO4VugEIejaKOEmYulQ2Y&usqp=CAU"
        alt="evomando"
        height="200"
      />
      <br />
    </div>
  );
};
