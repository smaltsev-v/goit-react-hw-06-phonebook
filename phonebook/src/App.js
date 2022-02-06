
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import {Container,Title } from './styles'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
 

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title >Contacts</Title>
      <Filter />
      <ContactList/>
      <ToastContainer />
    </Container>
  );
}

export default App;