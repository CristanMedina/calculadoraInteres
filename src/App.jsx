import { useState, Image } from 'react';
import Modal from './components/Modal';
import CalculadorIS from './components/CalculadorIS';
import logo from '../public/Logo.png';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <div className="App flex flex-col gap-10 justify-center items-center h-screen bg-gray-700">
        <img src={logo} width={100} alt="Logo" />
        <h1 className="text-3xl font-extrabold"> Calculador de Interes </h1>
        <button className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" onClick={openModal}>Tasa Interes Simple</button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <CalculadorIS />
        </Modal>
    </div>
    </>
  );
};

export default App;
