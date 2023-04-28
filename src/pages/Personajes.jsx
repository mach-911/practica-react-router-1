import personajes from "../api/personajes.json";

export default () => {
  return (
    <div className="flex">
      {personajes.map((personaje) => {
        return (
          <div key={personaje.nombre} className="card">
            <h2>{personaje.nombre}</h2>
            <img src={personaje.imagen} alt="imagen" />
          </div>
        );
      })}
    </div>
  );
};
