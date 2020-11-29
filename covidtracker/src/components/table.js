import {Value} from '../utils/provValue'

const Table = ({prov}) =>{
    return (
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
            <th scope="col">No</th>
              <th scope="col">Provinsi</th>
              <th scope="col">Confirmed</th>
              <th scope="col">Recovered</th>
              <th scope="col">Death</th>
            </tr>
          </thead>
          <tbody>
            {Value(prov)}
          </tbody>
        </table>
    )
};

export default Table;