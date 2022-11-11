
import './App.css';
import ClientFormPage from './components/Forms/ClientFormPage';
import DevFormPage from './components/Forms/DevFormPage';
import ThanksPage from './components/Forms/ThanksPage';
function App() {
  return (
    <div className='bg-background h-full'>
      {/* <ThanksPage/> */}
       {/* <DevFormPage/> */}
       <ClientFormPage/>
    </div>
  );
}

export default App;
