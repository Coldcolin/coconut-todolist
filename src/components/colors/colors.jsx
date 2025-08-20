import "./colors.css"

const Colors = ({setColorState}) => {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#aeda1eff", "#e221e8ff", "#e4a9a9ff"];
  return (
    <div className='colors'>
        <div className="color" style={{backgroundColor: `${colors[0]}`}} onClick={()=>setColorState(colors[0])}></div>
        <div className="color" style={{backgroundColor: `${colors[1]}`}} onClick={()=>setColorState(colors[1])}></div>
        <div className="color" style={{backgroundColor: `${colors[2]}`}} onClick={()=>setColorState(colors[2])}></div>
        <div className="color" style={{backgroundColor: `${colors[3]}`}} onClick={()=>setColorState(colors[3])}></div>
        <div className="color" style={{backgroundColor: `${colors[4]}`}} onClick={()=>setColorState(colors[4])}></div>
        <div className="color" style={{backgroundColor: `${colors[5]}`}} onClick={()=>setColorState(colors[5])}></div>
    </div>
  )
}

export default Colors