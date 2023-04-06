let currentDate = new Date();



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