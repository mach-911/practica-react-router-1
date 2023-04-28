import { Link } from "react-router-dom";

export default () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/personajes">Personajes</Link>
        </li>
        <li>
          <Link to="/peliculas">Películas</Link>
        </li>
      </ul>
    </nav>
  );
};
