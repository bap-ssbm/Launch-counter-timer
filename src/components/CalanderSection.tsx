import { CalanderBox } from "./CalanderBox"
import { useState } from "react"
import currentDate from "./Date"

export const CalanderSection = () => {

    type DateInterval = {
        days: string,
        hrs: string,
        mins: string,
        secs: string
    }


    const [launchDate, setLaunchDate] = useState<Date>(currentDate);

    
 
   

    

    const getInterval = (date: Date): DateInterval => {
        let diffTime = Math.abs(new Date().valueOf() - date.valueOf());

        let days: string | number = diffTime / (24 * 60 * 60 * 1000);
        let hours: string | number = (days % 1) * 24;
        let minutes: string | number = (hours % 1) * 60;
        let seconds: string | number = (minutes % 1) * 60;

        days = Math.floor(days) < 10 ? "0" + Math.floor(days) : Math.floor(days).toString();
        hours = Math.floor(hours) < 10 ? "0" + Math.floor(hours) : Math.floor(hours).toString();
        minutes = Math.floor(minutes) < 10 ? "0" + Math.floor(minutes) : Math.floor(minutes).toString();
        seconds = Math.floor(seconds) < 10 ? "0" + Math.floor(seconds) : Math.floor(seconds).toString();

        return {
            days: days,
            hrs: hours,
            mins: minutes,
            secs: seconds
        }

    }

    const getTimeBetween = (type: "DAYS" | "HOURS" | "MINUTES" | "SECONDS", compareDate: Date): string => {
        let diffTime = Math.abs(new Date().valueOf() - compareDate.valueOf());

        let days: string | number = diffTime / (24 * 60 * 60 * 1000);
        let hours: string | number = (days % 1) * 24;
        let minutes: string | number = (hours % 1) * 60;
        let seconds: string | number = (minutes % 1) * 60;

        switch (type) {
            case "DAYS":
                let days: string | number = diffTime / (24 * 60 * 60 * 1000);
                return Math.floor(days) < 10 ? "0" + Math.floor(days) : Math.floor(days).toString();
                break;
            case "HOURS":
                return Math.floor(hours) < 10 ? "0" + Math.floor(hours) : Math.floor(hours).toString();
            case "MINUTES":
                return Math.floor(minutes) < 10 ? "0" + Math.floor(minutes) : Math.floor(minutes).toString();
            case "SECONDS":
                return Math.floor(seconds) < 10 ? "0" + Math.floor(seconds) : Math.floor(seconds).toString();
            default:
                return("");
                break;
        }
    }
    const [pause, setPause] = useState(false);

    const checkIfPassed = () => {
        const remaining =  Math.abs(new Date().valueOf() - launchDate.valueOf());
        if(remaining<0){
            setPause(true);   
        }
    }

    setInterval(checkIfPassed, 1000);


    const resetTimer = () =>{
        let newlaunchDate = new Date();
        newlaunchDate.setDate(newlaunchDate.getDate() + 14);
        localStorage.setItem("theLaunchDate", JSON.stringify(newlaunchDate));
        setLaunchDate(newlaunchDate);
    }



    return (
        <div className="justify-self-center flex space-x-5 md:space-x-11 mb-[55%] md:mb-[10%] flex-wrap">
            <CalanderBox pause={pause} getTimeBetween= {getTimeBetween} date={launchDate} >DAYS</CalanderBox>
            <CalanderBox pause={pause} getTimeBetween= {getTimeBetween} date={launchDate}>HOURS</CalanderBox>
            <CalanderBox pause={pause} getTimeBetween= {getTimeBetween} date={launchDate} >MINUTES</CalanderBox>
            <CalanderBox pause={pause} getTimeBetween= {getTimeBetween} date={launchDate} >SECONDS</CalanderBox>
            {pause&&(
                <div
                onClick = {resetTimer} 
                className="absolute top-[50%] left-[46%] text-xl cursor-pointer underline text-pink-200 hover:text-pink-400 hover:scale-105 transition duration-300">Reset Timer?</div>
            )}
        </div>
    )
}