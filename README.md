# Frontend Mentor - Launch countdown timer solution

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 



### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- See a live countdown timer that ticks down every second (start the count at 14 days) -users can reset the timer after it goes down to 0
- **Bonus**: When a number changes, make the card flip from the middle -done

### Screenshot

https://prnt.sc/In7rCpIedpQl



### Links

- https://bap-ssbm.github.io/Launch-counter-timer/


### Built with

- react Typescript
- tailwindCSS
- framer-motion

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

first typescript project so I learned alot!

```tsx
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
```
im proud of this component i made, using children etc.
```css
.bottom-box{
  --mask: radial-gradient(5px at 5px 0,#0000 98%,#000) -5px;
  -webkit-mask: var(--mask);
          mask: var(--mask);
}
.top-box{
  --mask: radial-gradient(5px at 5px 100%,#0000 98%,#000) -5px;
  -webkit-mask: var(--mask);
          mask: var(--mask);
}
```
the middle circle parts of the calander box.

```ts
const datadate = JSON.parse(localStorage.getItem("theLaunchDate") || "{}") ;
if (Object.keys(datadate).length!==0) {
    const newDate = new Date(datadate);
    currentDate = newDate;
    console.log(currentDate);
} else {
    currentDate.setDate(currentDate.getDate() + 14);
    localStorage.setItem("theLaunchDate", JSON.stringify(currentDate))
}

export default currentDate;

```
I learned that JSON.parse doesnt work too well with typescript, and since the components rerender everytime, i avoided putting this function inside a tsx file, and i wrote it inside a seperate file 

### Continued development

get better at typescript!

