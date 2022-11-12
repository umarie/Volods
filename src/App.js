
import './App.css';
import ClientFormPage from './components/Forms/ClientFormPage';
import DevFormPage from './components/Forms/DevFormPage';
import ThanksPage from './components/Forms/ThanksPage';
import PrivacyPolicy from './components/PrivacyPolicy';
function App() {
  return (
    <div className='bg-background h-full'>
       {/* <DevFormPage/> */}
       {/* <PrivacyPolicy/> */}
       <ClientFormPage/>
    </div>
  );
}

export default App;

