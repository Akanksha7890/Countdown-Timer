let timer;

document.getElementById("startBtn").addEventListener("click", function() {
  clearInterval(timer); // reset if already running

  const dateInput = document.getElementById("date").value;
  const timeInput = document.getElementById("time").value;

  if (!dateInput || !timeInput) {
    alert("Please select both date and time!");
    return;
  }

  const targetDateTime = new Date(`${dateInput}T${timeInput}`).getTime();

  timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDateTime - now;

    if (distance <= 0) {
      clearInterval(timer);
      document.getElementById("message").innerText = "🎉 Countdown Finished!";
      document.getElementById("days").innerText = "00";
      document.getElementById("hours").innerText = "00";
      document.getElementById("minutes").innerText = "00";
      document.getElementById("seconds").innerText = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days.toString().padStart(2, "0");
    document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
    document.getElementById("message").innerText = "";
  }, 1000);
});
