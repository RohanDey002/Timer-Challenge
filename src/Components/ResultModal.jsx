import { forwardRef } from "react"
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, onReset }, ref) {

    const userLost = remainingTime <= 0;

    const formattedRemainingtime = (remainingTime / 1000).toFixed(2)
    const score = Math.round((1 - remainingTime / (targetTime * 1000) * 100))
    const absScore = Math.abs(score)

    return createPortal(
        <dialog ref={ref} className="result-modal" onClose={onReset} >
            {userLost && <h2>You Lost</h2>}
            {!userLost && <h2>Your Score:{absScore}</h2>}
            <p>Target Time was <strong>{targetTime}</strong> Seconds.</p>
            <p>You Stop the timer with <strong>{formattedRemainingtime}</strong></p>

            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById("modal")
    )
});

export default ResultModal;