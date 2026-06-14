async function bookAppointment() {
  await fetch("http://localhost:5000/book", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: "John",
      age: 30,
      disease: "Flu",
      date: "2026-05-21",
      
    })
  });

  alert("Appointment Booked");
}
function bookAppointment() {
  // fetch code here
}
