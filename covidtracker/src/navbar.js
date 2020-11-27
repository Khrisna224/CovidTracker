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
      {/* <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav> */}
    </div>
  );
}

export default navbar;
