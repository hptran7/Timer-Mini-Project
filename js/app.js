let setTimetext = document.getElementById("setTime");
let startBTN = document.getElementById("start");
let pauseBTN = document.getElementById("pause");
let circle = document.querySelector('circle')

const perimeter= circle.getAttribute('r') * Math.PI *2
circle.setAttribute('stroke-dasharray',perimeter)
let currentOffSet = 0
let timeTotal

let newTime = new Time(setTimetext, startBTN, pauseBTN,{
    onStart(timeInput){
        timeTotal = timeInput
        console.log(timeTotal)
    },
    onTick(timeRemaining){
        circle.setAttribute('stroke-dashoffset',
        perimeter*timeRemaining/timeTotal - perimeter
        )

    },
    onComplete(){
        console.log("Time countdown completed")

    }
});
