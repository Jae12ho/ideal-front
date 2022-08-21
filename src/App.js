import Container from './components/Container';
import Footer from './components/Footer';
import './App.css';
import { useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="background">
      <Container isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Footer />
      {isModalOpen && (
        <div className="modal-background-color"></div>
      )}
    </div>
  );
}

export default App;
