import {Route, Switch} from 'react-router-dom'
import global from './page/global'
import indonesia from './page/indonesia';
import provinsi from './page/provinsi';
import Navbar from './components/navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={global}/>
        <Route path='/indonesia' component={indonesia}/>
        <Route path='/provinsi' component={provinsi}/>
      </Switch>
    </div>
  );
}

export default App;
