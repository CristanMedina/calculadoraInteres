import React from 'react'
import { useState, useEffect } from 'react';

const interesSimpleCalculador = () => {
  const tipoPeriodoOpt = [
    { value: '12', label: 'Mensual' },
    { value: '4', label: 'Trimestral' },
    { value: '3', label: 'Cuatrimestral' },
    { value: '2', label: 'Semestral' },
    { value: '1', label: 'Anual' }
  ]

  const [ capital, setCapital ] = useState(0);
  const [ interes, setInteres ] = useState(0);
  const [ periodo, setPeriodo ] = useState(0);
  const [ tipoPeriodo, setTipoPeriodo ] = useState(tipoPeriodoOpt[0].value);
  const [ capitalizado, setCapitalizado ] = useState(0);
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
  function setTipoPeriodoOn(e){
    console.log(e.target);
    setTipoPeriodo(Number(e.target.value));
  }
  function setCapitalizadoOn(e){
    console.log(e.target);
    setCapitalizado(parseFloat(e.target.value));
  }

  useEffect(() => {
    if(!isNaN(capital) && !isNaN(interes) && !isNaN(periodo) && !isNaN(tipoPeriodo)){
      const interesPorc = interes / 100;
      const periodoAnual = periodo / tipoPeriodo;
      const result = (capital * interesPorc * periodoAnual);
      setResultado(result);
    } else {
      setResultado(null);
    };
  }
  ,[capital, interes, periodo, tipoPeriodo]);
  return (
    <>
      <div className="min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-gray-700 mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <h1 className="text-center text-2xl font-semibold mb-8 text-emerald-500">Calculador de Interés Simple</h1>
          <div className="mb-6">
            <label htmlFor="capital" className="block text-sm font-medium  text-gray-100">Capital "P"</label>
            <input id="capital" onChange={setCapitalOn} className="text-white mt-1 block w-full px-3 py-2 border border-gray-600 shadow-inner shadow-gray-900 bg-gray-800 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"/>
          </div>
          <div className="mb-6">
            <label htmlFor="interes" className="block text-sm font-medium text-gray-100">Interés "i" %</label>
            <input id="interes" onChange={setInteresOn} className="text-white mt-1 block w-full px-3 py-2 border border-gray-600 shadow-inner shadow-gray-900 rounded-md focus:outline-none bg-gray-800 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"/>
          </div>
          <div className="mb-6">
            <label htmlFor="periodo" className="block text-sm font-medium text-gray-100">Período "n" (En años)</label>
            <input id="periodo" onChange={setPeriodoOn} className="text-white mt-1 block w-full px-3 py-2 border border-gray-600 shadow-inner shadow-gray-900 rounded-md focus:outline-none bg-gray-800 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"/>
          </div>
          <div className="mb-6">
          <label htmlFor="tipoPeriodo" className="block text-sm font-medium text-gray-100">Tipo de periodo</label>
            <select id='tipoPeriodo' className="text-white mt-1 block w-full px-3 py-2 border border-gray-600 shadow-inner shadow-gray-900 rounded-md focus:outline-none bg-gray-800 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm" value={tipoPeriodo} onChange={setTipoPeriodoOn}>
              {tipoPeriodoOpt.map((tipoPeriodoO) => (
                <option  key={tipoPeriodoO.value} value={tipoPeriodoO.value}> {tipoPeriodoO.label} </option>
              ))};
            </select>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-4 text-emerald-500">Interes Total: {resultado !== null ? "$" + " " + resultado.toFixed(2) : 'Ingrese datos validos'}</h1>
            <h1 className="text-2xl font-semibold mb-4 text-emerald-500">Resultado Final: {resultado !== null && interes !== 0 && periodo !== 0 ? "$" + " " + (resultado + capital).toFixed(2) : '...'}</h1>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default interesSimpleCalculador