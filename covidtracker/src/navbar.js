import {Link} from 'react-router-dom'

const navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Global</Link>
          </li>
          <li>
            <Link to='/indonesia'>Indonesia</Link>
          </li>
          <li>
            <Link to='/provinsi'>Provinsi</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default navbar;
