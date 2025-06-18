import { Header } from './components/Header'
import Footer from './components/Footer';
import { Section } from './components/Section';
import './App.css'

function App() {
return (
  <>
  <Header title="Creando y usando props" show={true}>
  </Header>

  <section>
    <Section />
  </section>
  


  <Footer/>
  
  
  </>
)
}
export default App