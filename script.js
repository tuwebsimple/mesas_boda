const guests = [
    { name: 'Juan Pérez', table: 5 },
    { name: 'María García', table: 2 },
    { name: 'Luis Martínez', table: 8 },
    // Añade todos los invitados aquí
];

// Configuración de Fuse.js
const options = {
    includeScore: true,
    threshold: 0.3, // Umbral más estricto
    keys: ['name']
};
const fuse = new Fuse(guests, options);

document.getElementById('searchButton').addEventListener('click', () => {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    const resultElement = document.getElementById('result');
    const suggestionsElement = document.getElementById('suggestions');
    resultElement.textContent = '';
    suggestionsElement.innerHTML = '';

    const guest = guests.find(g => g.name.toLowerCase() === searchInput);
    if (guest) {
        resultElement.innerHTML = `Hola ${guest.name}<br>Muchas gracias por acompañarnos en este día tan importante.<br><br>Tu mesa es la número ${guest.table}.`;
        resultElement.classList.add('text-green-500');
    } else {
        resultElement.textContent = 'Invitado no encontrado';
        resultElement.classList.add('text-red-500');
        // Búsqueda difusa
        const results = fuse.search(searchInput);
        if (results.length > 0) {
            results.forEach(result => {
                const li = document.createElement('li');
                li.textContent = result.item.name;
                li.classList.add('cursor-pointer', 'hover:bg-gray-200', 'py-2', 'px-3', 'rounded');
                li.addEventListener('click', () => {
                    resultElement.innerHTML = `Hola ${result.item.name}<br>Muchas gracias por acompañarnos en este día tan importante.<br><br>Tu mesa es la número ${result.item.table}.`;
                    resultElement.classList.add('text-green-500');
                    suggestionsElement.innerHTML = '';
                });
                suggestionsElement.appendChild(li);
            });
        }
    }
});
