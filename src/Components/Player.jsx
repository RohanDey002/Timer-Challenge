import { useState, useRef } from "react"

export default function Player() {
    let playername = useRef()
    const [enteredPlayer, setEnteredPlayer] = useState('');
    function handleClick() {
        setEnteredPlayer(playername.current.value);
        playername.current.value = '';
    }
    return (
        <div id="player">
            <h3>Welcome {enteredPlayer ? enteredPlayer : "Player"}</h3>
            <p>
                <input type="text"
                    required
                    ref={playername}
                />
                <button onClick={handleClick}>Set Player</button>
            </p>
        </div>
    )

}