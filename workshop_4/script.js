document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('checkbox');
    checkbox.checked = localStorage.getItem('darkMode') === 'true';
    document.documentElement.setAttribute('data-theme', checkbox.checked ? 'dark' : 'light');

    checkbox.addEventListener('change', function() {
        document.documentElement.setAttribute('data-theme', this.checked ? 'dark' : 'light');
        localStorage.setItem('darkMode', this.checked.toString());
    });

    const saveClientButton = document.getElementById('saveClient');
    saveClientButton.addEventListener('click', saveClient);

    renderClientsTable(); // Llama a renderizar la tabla al cargar la página
});

function renderClientsTable() {
    const data = localStorage.getItem('clients');
    if (data) {
        const clients = JSON.parse(data);
        const tableBody = document.getElementById('userDataTable');
        tableBody.innerHTML = ''; // Limpia el contenido actual de la tabla
        clients.forEach(client => {
            const row = document.createElement('tr');
            // Nombre
            const firstNameCol = document.createElement('td');
            firstNameCol.setAttribute('data-label', 'Nombre');
            firstNameCol.innerText = client.firstName;
            row.appendChild(firstNameCol);

            // Apellido
            const lastNameCol = document.createElement('td');
            lastNameCol.setAttribute('data-label', 'Apellido');
            lastNameCol.innerText = client.lastName;
            row.appendChild(lastNameCol);

            // Teléfono
            const phoneCol = document.createElement('td');
            phoneCol.setAttribute('data-label', 'Número de Teléfono');
            phoneCol.innerText = client.phone;
            row.appendChild(phoneCol);
            tableBody.appendChild(row);
        });
    }
}
function saveClient() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const client = { firstName, lastName, phone };
    const clients = JSON.parse(localStorage.getItem('clients')) || [];
    clients.push(client);
    localStorage.setItem('clients', JSON.stringify(clients));
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('phone').value = '';
    alert('Cliente guardado con éxito');
    renderClientsTable(); // Actualiza la tabla después de guardar un cliente nuevo
}