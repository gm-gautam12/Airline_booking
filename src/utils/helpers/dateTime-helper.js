

const compareTime = (timeString1, timeString2) => {
    let dateTime1 = new Date(timeString1);
    let dateTime2 = new Date(timeString2);

    return dateTime1.getTime() < dateTime2.getTime();
};


export default compareTime;