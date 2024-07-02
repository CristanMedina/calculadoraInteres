import React from 'react'
import { useState, useEffect } from 'react'

function interesSimpleCalculador() {
    
  const [ capital, setCapital ] = useState(0);
  const [ interes, setInteres ] = useState(0);
  const [ periodo, setPeriodo ] = useState(0);
  const [ resultado, setResultado ] = useState(null);

  function setCapitalOn(e){
    console.log(e.target);
    setCapital(parseFloat(e.target.value));
  }
  function setInteresOn(e){
    console.log(e.target);
    setInteres(parseFloat(e.target.value));
  }
  function setPeriodoOn(e){
    console.log(e.target);
    setPeriodo(parseFloat(e.target.value));
  }

  useEffect(() => {
    if(!isNaN(capital) && !isNaN(interes) && !isNaN(periodo)){
      const result = (capital * interes * periodo) / 100;
      setResultado(result);
    } else {
      setResultado(null);
    };
  }
  ,[capital, interes, periodo]
);
  return (
    <div className="min-h-screen bg-emerald-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <h1 className="text-center text-2xl font-semibold mb-8">Interés Simple Calculator</h1>
          <div className="mb-6">
            <label htmlFor="capital" className="block text-sm font-medium text-gray-700">Capital "P"</label>
            <input id="capital" onChange={setCapitalOn} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"/>
          </div>
          <div className="mb-6">
            <label htmlFor="interes" className="block text-sm font-medium text-gray-700">Interés "i" %</label>
            <input id="interes" onChange={setInteresOn} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"/>
          </div>
          <div className="mb-6">
            <label htmlFor="periodo" className="block text-sm font-medium text-gray-700">Período "n" (En años)</label>
            <input id="periodo" onChange={setPeriodoOn} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"/>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-4">Resultado: {resultado !== null ? resultado : 'Ingrese datos válidos'}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default interesSimpleCalculador