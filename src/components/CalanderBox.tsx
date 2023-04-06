import { motion, useAnimate, Variants } from "framer-motion"
import {useState, useEffect} from "react";

let animationProps: Variants = {
    initial: { rotateX: 0, scaleY:1 },
    animate: { rotateX: 360, 
        transition: { 
            rotateX: {duration: 1} , 
             scaleY: {repeat: 1, duration:0.5, ease:'easeInOut', repeatType:'reverse'} 
        }
    }
};

type BoxProps = {
    date: Date,
    children: string,
    getTimeBetween: Function,
    pause: boolean
}

export const CalanderBox = ({date, children, getTimeBetween, pause} : BoxProps) =>{
    const [timeBetween, setTimeBetween] = useState<String>(getTimeBetween(children, date));

    const setnewtime = () =>{
        setTimeBetween(prev=>{
            if(prev!==getTimeBetween(children, date)){         
                 animate(scope.current, {rotateX: [0,180,0], transition:{ease:'easeInOut'} })
            }
            return getTimeBetween(children, date)
        })
    }

    
    

    const [scope, animate] = useAnimate();
    setInterval(setnewtime, 1000)


    return(
        <div className="justify-self-center flex flex-col items-center ">
            <motion.div 
                ref={scope}
                
                className=" grid place-items-center w-[70px] h-[65px] md:w-[148px] md:h-[140px] rounded-xl overflow-hidden relative md:shadow-[0_10px_0px_0px_rgba(0,0,0,0.2)]">
                <motion.div className="top-box  w-[70px] h-[32.5px] md:w-[148px] md:h-[70px] absolute bg-blue-1100 top-0 border-b-black border-b-[1px]  z-30 ">
                    
                </motion.div>
                <div className="top-box w-[70px] h-[32.5px] md:w-[148px] md:h-[70px] absolute  top-0 bg-blue-1300 opacity-30 z-50">

                    </div>
                <div className="bottom-box w-[70px] h-[32.5px] md:w-[148px] md:h-[70px] absolute bottom-0 border-b-black border-b-[1px] bg-blue-1100 z-10"></div>
                <p className="text-[30px] md:text-[80px] tracking-[-1px] text-red-1000 z-30 relative">
                    {timeBetween}
                </p>
                
            </motion.div>
            <div className="mt-4 md:mt-7">
                <p className="text-[8px] md:text-[14px] tracking-[2px] md:tracking-[6px] text-blue-1000">{children}</p>
            </div>
        </div>
    )
}