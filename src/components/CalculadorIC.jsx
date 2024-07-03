import React, { useState, useEffect } from 'react';
import TablaIC from './TablaIC';

const CalculadorIC = ({ onCalculate }) => {
    const tipoPeriodoOpt = [
        { value: 12, label: 'Mensual' },
        { value: 4, label: 'Trimestral' },
        { value: 3, label: 'Cuatrimestral' },
        { value: 2, label: 'Semestral' },
        { value: 1, label: 'Anual' }
    ];

    const [capital, setCapital] = useState(0);
    const [interes, setInteres] = useState(0);
    const [periodo, setPeriodo] = useState(0);
    const [tipoPeriodo, setTipoPeriodo] = useState(tipoPeriodoOpt[0].value);
    const [resultado, setResultado] = useState(null);
    const [mostrarTabla, setMostrarTabla] = useState(false);

    const setCapitalOn = (e) => {
        const value = e.target.value.replace(/,/g, '');
        setCapital(parseFloat(value));
    };

    const setInteresOn = (e) => {
        const value = e.target.value.replace(/,/g, '');
        setInteres(parseFloat(value));
    };

    const setPeriodoOn = (e) => {
        const value = e.target.value.replace(/,/g, '');
        setPeriodo(parseFloat(value));
    };

    const setTipoPeriodoOn = (e) => {
        setTipoPeriodo(Number(e.target.value));
    };

    useEffect(() => {
        if (!isNaN(capital) && !isNaN(interes) && !isNaN(periodo) && !isNaN(tipoPeriodo)) {
            const r = (interes / 100) / tipoPeriodo;
            const result = capital * Math.pow(1 + r, periodo * tipoPeriodo);
            setResultado(result);
        } else {
            setResultado(null);
        }
    }, [capital, interes, periodo, tipoPeriodo]);

    const crearTabla = () => {
        if (!isNaN(capital) && !isNaN(interes) && !isNaN(periodo) && !isNaN(tipoPeriodo)) {
            setMostrarTabla(true);
        } else {
            setMostrarTabla(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center px-4 py-10 bg-gray-700 mx-8 md:mx-0 shadow rounded-3xl md:p-10">
            {!mostrarTabla ? (
                <div className="w-full md:w-2/3">
                    <h1 className="text-center text-3xl font-semibold mb-6 text-green-500">Calculador de Interés Compuesto</h1>
                    <div className="mb-4">
                        <label htmlFor="capital" className="block text-sm font-medium text-gray-200">Capital "P"</label>
                        <input id="capital" onChange={setCapitalOn} className="mt-1 block w-full px-3 py-2 border border-gray-600 shadow-inner bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500 sm:text-sm text-white"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="interes" className="block text-sm font-medium text-gray-200">Interés "i" %</label>
                        <input id="interes" onChange={setInteresOn} className="mt-1 block w-full px-3 py-2 border border-gray-600 shadow-inner bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500 sm:text-sm text-white"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="periodo" className="block text-sm font-medium text-gray-200">Período "n" (En años)</label>
                        <input id="periodo" onChange={setPeriodoOn} className="mt-1 block w-full px-3 py-2 border border-gray-600 shadow-inner bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500 sm:text-sm text-white"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="tipoPeriodo" className="block text-sm font-medium text-gray-200">Tipo de periodo</label>
                        <select id='tipoPeriodo' className="mt-1 block w-full px-3 py-2 border border-gray-600 shadow-inner bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500 sm:text-sm text-white" value={tipoPeriodo} onChange={setTipoPeriodoOn}>
                            {tipoPeriodoOpt.map((tipoPeriodoO) => (
                                <option key={tipoPeriodoO.value} value={tipoPeriodoO.value}>{tipoPeriodoO.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold mb-2 text-green-500">Interés Total:</h1>
                        <h1 className="text-2xl font-semibold mb-2 text-green-500">{resultado !== null ? `$ ${(resultado - capital).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : 'Ingrese datos válidos'}</h1>
                        <h1 className="text-2xl font-semibold mb-4 text-green-500">Monto Acumulado:</h1>
                        <h1 className="text-2xl font-semibold mb-4 text-green-500">{resultado !== null && interes !== 0 && periodo !== 0 ? `$ ${(resultado).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : '...'}</h1>
                    </div>
                    <div className="text-center mb-6">
                        <button onClick={crearTabla} className="px-4 py-2 mt-5 bg-green-500 text-gray-900 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">Crear tabla</button>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col md:flex-row items-center justify-center w-full">
                    <div className="w-full md:w-2/3 mb-8 md:mb-0">
                        <h1 className="text-center text-3xl font-semibold mb-6 text-green-500">Calculador de Interés Compuesto</h1>
                        <div className="text-center mb-6">
                            <button onClick={() => setMostrarTabla(false)} className="px-4 py-2 bg-green-500 text-gray-900 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">Modificar Datos</button>
                        </div>
                        <div className="text-center">
                            <h1 className="text-2xl font-semibold mb-2 text-green-500">Interés Total:</h1>
                            <h1 className="text-2xl font-semibold mb-2 text-green-500">{resultado !== null ? `$ ${(resultado - capital).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : 'Ingrese datos válidos'}</h1>
                            <h1 className="text-2xl font-semibold mb-4 text-green-500">Monto Acumulado:</h1>
                            <h1 className="text-2xl font-semibold mb-4 text-green-500">{resultado !== null && interes !== 0 && periodo !== 0 ? `$ ${(resultado).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : '...'}</h1>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 md:ml-4 md:overflow-y-auto" style={{ maxHeight: '600px', minWidth: '480px' }}>
                        <TablaIC capital={capital} interes={interes} periodo={periodo} tipoPeriodo={tipoPeriodo} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CalculadorIC;
