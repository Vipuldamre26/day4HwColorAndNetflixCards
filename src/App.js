
import Navbar from '../src/components/Navbar'
import Cards from '../src/components/Cards'
import NetflixCard from './components/NetflixCard';
import './App.css';
import { useState } from 'react';


const data = [
  {
    id: '#FF6663',
    name: 'pink'
  },
  {
    id: '#333333',
    name: 'grey'
  },
  {
    id: '#000000',
    name: 'black'
  },
  {
    id: '#38BB14',
    name: 'green'
  },
  {
    id: '#C90B0B',
    name: 'RED'
  },
  {
    id: '#FF8000',
    name: 'ORANGE'
  },
  {
    id: '#FFF500',
    name: 'YELLOW'
  },
  {
    id: '#CCCCCC',
    name: 'LIGHT GREY'
  },
  {
    id: '#7E41A2',
    name: 'PURPLE'
  },
  {
    id: '#C14911',
    name: 'BROWN'
  }
]

const netData = [
  {
    name: 'Bright',
    year: 2017,
    producer: 'David Ayer',
    totalTime: '117 min',
    category: 'Action, Crime, Fantasy',
    about: 'In an LA rife with interspecies tensions, a human cop and his orc partner stumble on a powerful object and become embroiled in a prophesied turf war.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbT_ZfjFBokFzHPdutI2o1VBMX1CkoSQbZ9oAeZdSpTmMItUJH',
    bgimg: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSHQfCMkSYgYHNhfaVMoV8u0jDVzzUUYC6Vk74qZuqB_h-D8zlfPjaLbsy1ziVirZyUN4be'
  },
  {
    name: 'Tomb Raider',
    year: 2018,
    producer: 'Roar Uthaug',
    totalTime: '125 min',
    category: 'Action, Fantasy',
    about: 'Adventurer Lara Croft journeys to an underwater temple, where she finds a sphere that contains a map pointing to the mythical Pandoras box.',
    img: 'https://m.media-amazon.com/images/M/MV5BOTY4NDcyZGQtYmVlNy00ODgwLTljYTMtYzQ2OTE3NDhjODMwXkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_.jpg',
    bgimg: 'https://occ-0-3216-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSOG6mm93tOEgk_IdK9ptq-SrdSshGKG7oBFdS1azBV8zZaYe13oGvKTJKbRiCEcKtRWCdj_mLbKyUerlE3Xg9vIXx2qLzE8uDDf.jpg?r=dbf'

  }
]

function App() {
  const [page, changePage] = useState(true);

  return (
    <div className='App'>
    <Navbar page={page} changePage={changePage} />
    {
      page ? <Cards data={data} /> : <NetflixCard data={netData} />
    }
    </div>
  );
}

export default App;
