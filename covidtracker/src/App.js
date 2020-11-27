import {Route, Switch} from 'react-router-dom'
import global from './global'
import indonesia from './indonesia';
import provinsi from './provinsi';
import Navigasi from './navbar'

function App() {
  return (
    <div>
      <Navigasi />
      <Switch>
        <Route exact path='/' component={global}/>
        <Route path='/indonesia' component={indonesia}/>
        <Route path='/provinsi' component={provinsi}/>
      </Switch>
    </div>
  );
}

export default App;
