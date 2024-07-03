import { useState } from 'react';
import Modal from './components/Modal';
import CalculadorIS from './components/CalculadorIS';
import logo from '../public/Logo.png';

function App() {
  const [isModalISOpen, setIsModalISOpen] = useState(false);
  const [IS_Result, setIS_Result] = useState(null);
  const [tablesData, setTablesData] = useState([]);

  const openModalIS = () => {
    setIsModalISOpen(true);
  };

  const closeModalIS = () => {
    setIsModalISOpen(false);
  };

  const handleInteresSimple = (resultado, tabla) => {
    setIS_Result(resultado);

    setTablesData([...tablesData, tabla]);
  };

  const removeTable = (index) => {
    const updatedTables = [...tablesData];
    updatedTables.splice(index, 1);
    setTablesData(updatedTables);
  };

  return (
    <>
      <div className="App flex flex-col gap-10 justify-center items-center min-h-screen bg-gray-700">
        <img src={logo} width={100} alt="Logo" />
        <h1 className="text-3xl font-extrabold">Calculador de Interes</h1>
        <button className="px-6 py-3 bg-[#00ff00ff] text-black font-bold rounded-lg shadow-md hover:bg-[#91ff00] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" onClick={openModalIS}>Tasa Interes Simple</button>
        <Modal isOpen={isModalISOpen} onClose={closeModalIS}>
          <CalculadorIS onCalculate={handleInteresSimple}/>
        </Modal>

        {IS_Result !== null && (
          <div className="mt-4 w-full md:max-w-xl p-10">
            
            {tablesData.map((tabla, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-xl font-semibold text-[#00ff00ff] mb-2">Resultado del Interés Simple:</h2>
                <p className="text-white mb-4">Interés Total: ${IS_Result.toLocaleString()}</p>
                <h3 className="text-xl font-semibold text-[#00ff00ff] mb-2">Tabla {index + 1} de Interés Simple:</h3>
                <div className="shadow-md rounded-lg overflow-hidden">
                  <table className="w-full divide-y divide-gray-800">
                    <thead className="bg-[#00ff00ff]">
                      <tr>
                        <th className="px-3 py-2 text-left text-xs font-extrabold text-gray-900 uppercase tracking-wider">Período</th>
                        <th className="px-3 py-2 text-left text-xs font-extrabold text-gray-900 uppercase tracking-wider">Interés</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-400">
                      {tabla.map((item, rowIndex) => (
                        <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-600' : 'bg-gray-700'}>
                          <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-400">Año {rowIndex + 1}</td>
                          <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-200">{item}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <button className="mt-5 mb-3 ml-3 px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400" onClick={() => removeTable(index)}>Eliminar Tabla</button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </>
  );
}

export default App;



