/* 
Write a function calculateExercises that calculates the average time of daily exercise hours and compares it to the target amount of daily hours and returns an object that includes the following values:

    ·the number of days
    ·the number of training days
    ·the original target value
    ·the calculated average time
    ·boolean value describing if the target was reached
    ·a rating between the numbers 1-3 that tells how well the hours are met. You can decide on the metric on your own.
    ·a text value explaining the rating

The daily exercise hours are given to the function as an array that contains the number of exercise hours for each day in the training period. Eg. a week with 3 hours of training on Monday, none on Tuesday, 2 hours on Wednesday, 4.5 hours on Thursday and so on would be represented by the following array:
 */


let exampleWeek = [3, 0, 2, 4.5, 0, 3, 1]
let exampleTarget = 2;

interface Result {
    periodLength: number;
    trainingDays: number;
    target: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    average: number;
}

const calculateExercises = (hoursPerDay: number[], target: number) => {
    let period = hoursPerDay.length;
    let days = hoursPerDay.filter((hours)=>{
        return hours > 0;
    }).length;
    let success;
    let rating;
    let description;

    if(hoursPerDay.reduce((a, b) => a + b) / hoursPerDay.length >= target){
        success = true;
        rating = 10;
        description = "good";
    }else{
        success = false;
        rating = 0;
        description = "bad";
    }

    const semana: Result = {
        periodLength: period,
        trainingDays: days,
        success: success,
        rating: rating,
        ratingDescription: description,
        target: target,
        average: hoursPerDay.reduce((a, b) => a + b) / hoursPerDay.length
        }
    console.log(hoursPerDay.length)
    return semana;
}
console.log(calculateExercises(exampleWeek, exampleTarget))