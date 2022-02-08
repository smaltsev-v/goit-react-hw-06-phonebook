import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';


import './App.css'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="container" >
      <h1 className="title__h"><span className='title__p'>Phone</span>book</h1>
      <ContactForm />
      <h2 className="title__contact">Contacts</h2>
      <Filter />
      <ContactList />
      <ToastContainer
        autoClose={3700}
      />
    </div>
  );
}

export default App;
