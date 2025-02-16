
function addCalories() {
    let limit = document.getElementById("calorieLimit").value;
    let consumed = document.getElementById("caloriesConsumed").value;

    if (limit && consumed) {
        alert(`You have ${limit - consumed} calories left today.`);
    } else {
        alert("Please enter both values.");
    }
}

function trackWeight() {
    let current = document.getElementById("currentWeight").value;
    let goal = document.getElementById("goalWeight").value;
    let message = document.getElementById("progressMessage");

    if (current && goal) {
        let difference = current - goal;
        message.innerText = `You need to lose ${difference} kg to reach your goal.`;
    } else {
        message.innerText = "Please enter both weights.";
    }
}
