const addHabitBtn = document.getElementById("addHabitBtn");
const habitInput = document.getElementById("habitInput");
const weeklyGoal = document.getElementById("weeklyGoal");
const habitsCardContainer = document.getElementById("habitsCardContainer");

// const weekdays = [
//     { id: 0, name: "M", state: false,},
//     { id: 1, name: "T", state: false,},
//     { id: 2, name: "W", state: false,},
//     { id: 3, name: "T", state: false,},
//     { id: 4, name: "F", state: false,},
//     { id: 5, name: "S", state: false,},
//     { id: 6, name: "S", state: false,},
// ]


addHabitBtn.addEventListener("click", () => {
    
    const habit = habitInput.value.trim();
    const goal = weeklyGoal.value;
    if ((!habit) || (!goal)) return;
    if (goal > 7 || goal <=0){
        alert('Goal must be numbers between 1 to 7');
        return;
    }
   
    const newHabitCard = document.createElement('div');
    newHabitCard.classList.add('habit-container')
    let progressCount = 0;
    let streak = 0;
    let HabitStatusCount = goal;
    newHabitCard.innerHTML = `
        
    <div class="habit">
        <div class="habit-name">${habit}</div>
        <div class="habit-status">${HabitStatusCount} Days to go!</div>
    </div>

    <div class="progress">
        <div class="progress-text">Progress: ${progressCount}/${goal}</div>
        <div class="streak-text">Streak: ${streak} days</div>
    </div>

    <div class="weekdays">
        <button class="weekday">S</button>
        <button class="weekday">M</button>
        <button class="weekday">T</button>
        <button class="weekday">W</button>
        <button class="weekday">T</button>
        <button class="weekday">F</button>
        <button class="weekday">S</button>
    </div>

    <div class="delete-habit">
        <button class="deleteBtn" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg> <!-- heroicon svg trash icon -->
            Delete Habit
        </button>
    </div>
    `;

    const weekDaysBtn = newHabitCard.querySelectorAll(".weekday");

    const progressText = newHabitCard.querySelector(".progress-text");
    const streakText = newHabitCard.querySelector(".streak-text");
    const HabitStatusText = newHabitCard.querySelector(".habit-status");

    weekDaysBtn.forEach(button => {
        button.addEventListener("click", () => {
            const isActive = button.classList.contains("active");
    
            if (!isActive && HabitStatusCount > 0) {
                button.classList.add("active");
                progressCount += 1;
                streak += 1;
                HabitStatusCount -= 1;
            } else if (isActive) {
                button.classList.remove("active");
                progressCount -= 1;
                streak -= 1;
                HabitStatusCount += 1;
            }
    
            progressText.textContent = `Progress: ${progressCount}/${goal}`;
            streakText.textContent = `Streak: ${streak} days`;
    
            if (HabitStatusCount === 0) {
                HabitStatusText.textContent = "Goal Achieved!";
            } else {
                HabitStatusText.textContent = `${HabitStatusCount} Days to go!`;
            }
        });
    });
    



    const deleteBtn = newHabitCard.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", ()=>{
        newHabitCard.classList.add("fade-out");
        newHabitCard.addEventListener("transitionend", () => {
            newHabitCard.remove();
        });
    });
    
    habitsCardContainer.appendChild(newHabitCard);

    habitInput.value ="";
    weeklyGoal.value ="";

  });
  
