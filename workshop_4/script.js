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
});
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
}
