const viewBtns = document.querySelectorAll(".view-btn");
const popupContainer = document.getElementById("popup-container");
const closeBtn = document.querySelector(".popup .close");
const popupContent = document.getElementById("popup-content");
const searchButton = document.getElementById("searchButton");
const fromInput = document.getElementById("fromInput");
const toInput = document.getElementById("toInput");
const ridesTable = document.getElementById("ridesTable");
const tableRows = document.querySelectorAll('tbody tr');
const loginButton = document.getElementById('loginButton');
const welcomeMessage = document.getElementById('welcomeMessage');
const tripDetails = {
  'Paulo': {
    Driver: "Paulo Guadamuz",
    car: "Toyota Corolla",
    cost: '20000 colones',
    duration: '3 hours'
  },
  'Randola': {
    Driver: "Randall Madrigal",
    car: 'Honda Civic',
    cost: '8000 colones',
    duration: '1 hour'
  },
  'Andrew': {
    Driver: "Andrew Montero",
    car: 'Nissan Sentra',
    cost: '6000 colones',
    duration: '30 minutes'
  },
  'Jason': {
    Driver: "Jason Rojas",
    car: 'Hyundai Elantra',
    cost: '6500 colones',
    duration: '1 hour'
  },
  'Fabiola': {
    Driver: "Fabiola Abarca",
    car: 'Mazda 3',
    cost: '30000 colones',
    duration: '1 hour'
  },
  'Sebastian': {
    Driver: "Sebastían Valverde ",
    car: 'Toyota Corolla',
    cost: '20000 colones',
    duration: '3 hours'
  },
};
searchButton.addEventListener('click', function() {
  const fromValue = fromInput.value.trim().toLowerCase();
  const toValue = toInput.value.trim().toLowerCase();
  const tableRows = document.querySelectorAll('tbody tr');

  tableRows.forEach(function(row) {
    row.style.display = 'none';
  });

  tableRows.forEach(function(row) {
    const fromCell = row.children[1].textContent.trim().toLowerCase();
    const toCell = row.children[2].textContent.trim().toLowerCase();

    if (fromCell.includes(fromValue) && toCell.includes(toValue)) {
      row.style.display = '';
    }
  });

  ridesTable.style.display = 'table';
});

viewBtns.forEach(button => {
  button.addEventListener("click", () => {
    const user = button.getAttribute('data-user');
    if (tripDetails.hasOwnProperty(user)) {
      const userTripDetails = tripDetails[user];
      popupContainer.classList.remove("fade-out"); // Ensure fade-out class is removed
      popupContainer.style.display = "flex";
      setTimeout(() => {
        popupContainer.classList.add("fade-in");
      }, 50); // Adding a small delay before applying fade-in for smoother transition
      displayPopupContent(userTripDetails);
    } else {
      console.log("User not found in trip details");
    }
  });
});
loginButton.addEventListener('click', () => {
  const username = prompt('Please enter your username');
  if (username) {
    welcomeMessage.innerHTML = `Welcome, ${username}!`;
    welcomeMessage.style.display = 'block';
  }
});
closeBtn.addEventListener("click", () => {
  popupContainer.classList.remove("fade-in");
  popupContainer.classList.add("fade-out");
  setTimeout(() => {
    popupContainer.style.display = "none";
    popupContainer.classList.remove("fade-out");
  }, 300); // 300 milliseconds, duration of the fade-out transition
});

function displayPopupContent(details) {
  let content = "";
  content += `<p><strong>Driver:</strong> ${details.Driver}</p>`;
  content += `<p><strong>Car:</strong> ${details.car}</p>`;
  content += `<p><strong>Cost:</strong> ${details.cost}</p>`;
  content += `<p><strong>Duration:</strong> ${details.duration}</p>`;
  popupContent.innerHTML = content;
}


