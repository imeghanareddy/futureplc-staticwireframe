import React, { useState } from 'react'
import Partone from './Partone'
import Footballpart from './Footballpart'
import Basketballpart from './Basketball';
import Tennis from './tennis';
import Cricket from './cricket';
import Hockey from './hocky';
import Nfl from './nfl';
import Rugby from './rugby';

function Body() {

  const [visibility, setVisibility] = useState({
    football: true,
    rugby: false,
    basketball: false,
    hockey: false,
    nfl: false,
    tennis: false,
    criket: false
  });

  return (
    <div className='Bodyclass'>
      <Partone visible = {visibility} setvisible = {setVisibility}>
        </Partone>
      {
        (visibility.football)&&<Footballpart visible = {visibility} setvisible = {setVisibility}>
        </Footballpart>
      }
      {
        (visibility.basketball)&&<Basketballpart visible = {visibility} setvisible = {setVisibility}>
        </Basketballpart>
      }
      {
        (visibility.rugby)&&<Rugby  visible = {visibility} setvisible = {setVisibility}>
        </Rugby>
      }
      {
        (visibility.hockey)&&<Hockey visible = {visibility} setvisible = {setVisibility}>
        </Hockey>
      }
      {
        (visibility.criket)&&<Cricket visible = {visibility} setvisible = {setVisibility}>
        </Cricket>
      }
      {
        (visibility.tennis)&&<Tennis visible = {visibility} setvisible = {setVisibility}>
        </Tennis>
      }
      {
        (visibility.nfl)&&<Nfl visible = {visibility} setvisible = {setVisibility}>
        </Nfl>
      }
        
    </div>
  )
}

export default Body