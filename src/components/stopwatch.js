import React, {useState, useEffect} from 'react'

const Stopwatch =() => {
    const [isRunning, setIsRunning] = useState(false);
    const [time,setTime] = useState(0);

    useEffect(()=>{
        let interval;

        if(isRunning){
            interval= setInterval(()=>{
                setTime(prevTime=> prevTime+1);
            },1000);
        }

        return() =>
            clearInterval(interval);
        
    },[isRunning]);

    const handlePlayResume =() =>{
        setIsRunning(prevIsRunning =>! prevIsRunning);
    }
    const handleStop =() =>{
        setIsRunning(false);
        // setTime(0);
    }

    const handleReset =() =>
    {
        setIsRunning(false);
            setTime(0)
    }
  return (
    <div>
        <h1>StopWatch</h1>
        <p>Time:{time}</p>
      <button onClick={handlePlayResume}>Play/Resume</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Stopwatch
