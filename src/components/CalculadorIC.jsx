import React, { useState, useEffect } from 'react';
import TablaInteres from './TablaInteres';

const CalculadorIC = () => {
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

  return (
    <div>CalculadorIC</div>
  )
}

export default CalculadorIC



