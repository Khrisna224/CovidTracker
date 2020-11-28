import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to='/' className="navbar-brand">CovidTracker</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to='/' className="nav-link">Global</Link>
            </li>
            <li className="nav-item">
              <Link to='/indonesia' className="nav-link">Indonesia</Link>
            </li>
            <li className="nav-item">
              <Link to='/provinsi' className="nav-link">Provinsi</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}



export default navbar;
