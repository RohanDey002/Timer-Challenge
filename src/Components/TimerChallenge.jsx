import { useRef, useState } from "react";
import ResultModal from "./ResultModal.jsx";
export default function TimerChallenge({ title, targetTime }) {

    let timer = useRef();
    let dialog = useRef();
    
    const [timeRemaining, setTimereamaining] = useState(targetTime * 1000)
    const timerIsactive = timeRemaining > 0 && timeRemaining < targetTime * 1000

    if (timeRemaining <= 0) {
        clearInterval(timer.current);

        dialog.current.showModal();
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimereamaining(prevTimeremaining => prevTimeremaining - 10)
        }, 10)
    }

    function handleStop() {
        dialog.current.showModal();
        clearInterval(timer.current)
    }

    function handleReset() {
        setTimereamaining(targetTime * 1000);
    }

    return (
        <>
            <ResultModal
                ref={dialog}
                targetTime={targetTime}
                remainingTime={timeRemaining}
                onReset={handleReset}
            />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="timer-challenge">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsactive ? handleStop : handleStart}>
                        {timerIsactive ? 'Stop' : 'Start'} challenge
                    </button>
                </p>
                <p className={timerIsactive ? 'active' : undefined}>
                    {timerIsactive ? 'Timer is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
}