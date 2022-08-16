import React from 'react'

function Partone(props) {


  let footballgameFun = ()=>{
    props.setvisible({
      football: true,
      rugby: false,
      basketball: false,
      hockey: false,
      nfl: false,
      tennis: false,
      criket: false
    })
  }
  let rugbygameFun = ()=>{ 
    props.setvisible({
      football: false,
      rugby: true,
      basketball: false,
      hockey: false,
      nfl: false,
      tennis: false,
      criket: false
    })
  }
  let basketballgameFun = ()=>{ 
    props.setvisible({
      football: false,
      rugby: false,
      basketball: true,
      hockey: false,
      nfl: false,
      tennis: false,
      criket: false
    })
  }
  let hockygameFun = ()=>{ 
    props.setvisible({
      football: false,
      rugby: false,
      basketball: false,
      hockey: true,
      nfl: false,
      tennis: false,
      criket: false
    })
  }
  let nflgameFun = ()=>{ 
    props.setvisible({
      football: false,
      rugby: false,
      basketball: false,
      hockey: false,
      nfl: true,
      tennis: false,
      criket: false
    })
  }
  let tennisgameFun = ()=>{ 
    props.setvisible({
      football: false,
      rugby: false,
      basketball: false,
      hockey: false,
      nfl: false,
      tennis: true,
      criket: false
    })
  }
  let cricketgameFun = ()=>{ 
    props.setvisible({
      football: false,
      rugby: false,
      basketball: false,
      hockey: false,
      nfl: false,
      tennis: false,
      criket: true
    })
  }

  return (
    <div className='Partclass'>
      <ul className='list'>
      <li className='listitem' id = {props.visible.football === true? 'football':''}  onClick={footballgameFun}>Football</li>
      {/* {
        (props.visible.football)&& <div className='img'><img src="" alt="" /></div>
      } */}
      <li className='listitem' id = {props.visible.rugby === true? 'rugby':''}  onClick={rugbygameFun} >Rugby</li>
      <li className='listitem' id = {props.visible.basketball === true? 'basketball':''}  onClick={basketballgameFun}>Basketball</li>
      <li className='listitem' id = {props.visible.hockey === true? 'hockey':''}  onClick={hockygameFun}>Hockey</li>
      <li className='listitem' id = {props.visible.nfl === true? 'nfl':''}  onClick={nflgameFun}>NFL</li>
      <li className='listitem' id = {props.visible.tennis === true? 'tennis':''}  onClick={tennisgameFun}>Tennis</li>
      <li className='listitem' id = {props.visible.criket === true? 'criket':''} onClick={cricketgameFun}>Cricket</li>
      </ul>
      
    </div>
  )
}

export default Partone