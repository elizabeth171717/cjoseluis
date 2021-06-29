// set date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();





const workouts = document.querySelectorAll(".workout-box");

workouts.forEach(function (workout) {
//console.log(workout)
const btnss = workout.querySelector(".btn");
//console.log(btnss);
btnss.addEventListener("click", function() {

    workouts.forEach(function(item) {
      if(item !== workout)  {
          item.classList.remove("show-text");
      }
    });

    workout.classList.toggle("show-text");
});
});
