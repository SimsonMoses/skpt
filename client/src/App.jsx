import { Navbar, Welcome, Services, Transaction, Footer } from './components/Component';

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <Welcome />
        <Services />
      </div>
      <div>
        <Transaction />
        <Footer />
      </div>
    </div>
  )
}

export default App
