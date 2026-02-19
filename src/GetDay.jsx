export default function DayToday(){
    let today;  //Hoisted
    let dateToday = new Date().getDay()

    switch(dateToday){
        //whatsoever is returned is what is termed as the case
        case 0:
            today = "Sunday";
            break;
        case 1:
            today = "Monday";
            break;
        case 2:
            today = "Tuesday";
            break;
        case 3:
            today = "Wednesday";
            break;
        case 4:
            today = "Thursday";
            break;
        case 5:
            today = "Friday";
            break;
        case 6:
            today = "Saturday"

    }
    console.log(today)

    return(
        today
    )
   
}