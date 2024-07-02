import React, { useState, useEffect } from 'react';

const TablaInteres = ({ capital, interes, periodo }) => {
    const capitalInicial = capital;
    const [datosTabla, setDatosTabla] = useState([]);

    const generarTabla = () => {
        const data = [];
        for (let n = 1; n <= periodo; n++) {
            const interesAcumulado = capitalInicial * interes * n;
            const ultimoMonto = capitalInicial + interesAcumulado;

            data.push({
                Año: n,
                capital1: formatNumber(capitalInicial),
                interes: formatNumber(interesAcumulado.toFixed(2)),
                capital2: formatNumber(ultimoMonto.toFixed(2))
            });
        }
        setDatosTabla(data);
    };

    const formatNumber = (number) => {
        return number.toLocaleString();
    };

    useEffect(() => {
        generarTabla();
    }, [capital, interes, periodo]);

    return (
        <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 text-green-500">Tabla de crecimiento de capital con interés compuesto</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-800 rounded-xl">
                    <thead>
                        <tr className="bg-gray-700 text-gray-200">
                            <th className="py-2 px-4">Año</th>
                            <th className="py-2 px-4">Capital al inicio del Año</th>
                            <th className="py-2 px-4">Interés acumulado</th>
                            <th className="py-2 px-4">Capital al final del Año</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datosTabla.map((row, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-600' : 'bg-gray-700'}>
                                <td className="py-2 px-4">{`Año ${row.Año}`}</td>
                                <td className="py-2 px-4">{row.capital1}</td>
                                <td className="py-2 px-4">{row.interes}</td>
                                <td className="py-2 px-4">{row.capital2}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TablaInteres;


