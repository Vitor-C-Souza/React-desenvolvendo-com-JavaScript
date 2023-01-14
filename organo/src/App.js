import { useState } from 'react';
import Banner from './componentes/Banner/';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Programação',
      corsPrimarias: '#57C278',
      corsSecundarias: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corsPrimarias: '#82CFFA',
      corsSecundarias: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corsPrimarias: '#A6D157',
      corsSecundarias: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corsPrimarias: '#E06B69',
      corsSecundarias: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corsPrimarias: '#DB6EBF',
      corsSecundarias: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corsPrimarias: '#FFBA05',
      corsSecundarias: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corsPrimarias: '#FF8A29',
      corsSecundarias: '#FFEEDF'
    },
  ]

  const [ colaboradores, setColaboradores ] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        times={times.map( time => time.nome)}
        aoColaboradorCadastrado=
          {colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corsPrimarias={time.corsPrimarias} 
        corsSecundarias={time.corsSecundarias}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
    </div>
  );
}

export default App;
