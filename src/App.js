
import './App.css';
import DevForm from './components/Forms/DevForm';
import ClientForm from './components/Forms/ClientForm';
import logo from './for dev.gif' 
function App() {
  return (
    <div className='bg-background h-full'>
    <div className='grid grid-cols-2 gap-4 items-center'>
    <div>  <DevForm></DevForm></div>
    <div> <img className="ml-39 "src={logo} width="85%"></img></div>
    </div>
    </div>
  );
}

export default App;
