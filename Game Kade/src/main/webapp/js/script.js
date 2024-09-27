const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

const welComeMsg = document.querySelector('.welcome-msg');
const btnPopup = document.querySelector('.btnLogin-popup');

const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});

function removeDiv() {
    var div = welComeMsg;
    if (div) {
        div.remove();
    }
}

function showDiv() {
    var div = welComeMsg;
    if (div) {
        div;
    }
}



/*



  <div class="menu-container">
      <div class="menu-item">
          <img src="images/pizza.jpg" alt="Pizza">
          <h3>Pizza</h3>
          <p>Delicious cheese pizza with fresh ingredients.</p>
          <button onclick="addToCart('Pizza', 2000)">Starting from - Rs. 2000</button>
      </div>
      <div class="menu-item">
          <img src="images/KootuCurry.jpg" alt="Burger">
          <h3>Rice</h3>
          <p>Sri lankan type Delicious Spicy Rice and Curry.</p>
          <button onclick="addToCart('Kottu', 2000)">Starting from - Rs. 2000</button>
      </div>
      <div class="menu-item">
          <img src="images/pexels-chanwalrus-958545.jpg" alt="Pasta">
          <h3>Parata</h3>
          <p>Sri Lankan Parata roti with chicken curry.</p>
          <button onclick="addToCart('Parata', 2000)">Starting from - Rs. 2000</button>
      </div>
      <div class="menu-item">
          <img src="images/Medu-Vada-H3.jpg" alt="Salad">
          <h3>Wade</h3>
          <p>Spicy and delicious Uludu Wade with chilli paste</p>
          <button onclick="addToCart('Wade', 2000)">Starting from - Rs. 2000</button>
      </div>
  </div>





















reservation table



document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('.reservations-table tbody');
    const addReservationBtn = document.querySelector('.add-reservation-btn');

    // Function to add a new reservation row
    addReservationBtn.addEventListener('click', () => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td contenteditable="true">New ID</td>
            <td contenteditable="true">YYYY-MM-DD</td>
            <td contenteditable="true">HH:MM</td>
            <td contenteditable="true">0</td>
            <td>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </td>
        `;
        table.appendChild(newRow);
        attachRowEvents(newRow);
    });

    // Function to attach edit and delete events to a row
    const attachRowEvents = (row) => {
        const editBtn = row.querySelector('.edit-btn');
        const deleteBtn = row.querySelector('.delete-btn');

        editBtn.addEventListener('click', () => {
            // Placeholder for edit functionality
            alert('Edit functionality is a placeholder.');
        });

        deleteBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to delete this reservation?')) {
                row.remove();
            }
        });
    };

    // Attach events to existing rows
    document.querySelectorAll('.reservations-table tbody tr').forEach(row => {
        attachRowEvents(row);
    });
});

*/