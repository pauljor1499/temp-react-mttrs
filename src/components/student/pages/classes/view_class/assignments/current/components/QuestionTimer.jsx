/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";

const CountdownTimer = ({ seconds, setSeconds }) => {
    // const [seconds, setSeconds] = useState(10); // in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds > 0) {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [seconds]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };

    return <>Remaining time: {formatTime(seconds)}</>;
};

export default CountdownTimer;
