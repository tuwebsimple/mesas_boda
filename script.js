let guests = [
    { "name": "Juan Pérez", "table": 5 },
    { "name": "María García", "table": 2 },
    { "name": "Luis Martínez", "table": 8 },
    {"name":"Andrea Revilla","table":1},{"name":"Jes\u00fas Arizmendi","table":1},{"name":"Diana Luisa Tejeida","table":1},{"name":"Jean Paul Rodriguez","table":1},{"name":"Andr\u00e9s Estrada","table":1},{"name":"Valeria Revilla","table":1},{"name":"Marco Alcal\u00e1","table":1},{"name":"Zoey Myer","table":1},{"name":"Sol Angelica R\u00edos","table":1},{"name":"Gustavo Barrios","table":1},{"name":"Eduardo","table":1},{"name":"HANNIA CHAVEZ","table":1},{"name":"Rogelio Garc\u00eda","table":2},{"name":"Anita","table":2},{"name":"Gustavo Becerill","table":2},{"name":"Mar\u00eda Elena","table":2},{"name":"Jos\u00e9 Antonio Estrada","table":2},{"name":"Jos\u00e9 Estrada","table":2},{"name":"Rosa Mar\u00eda Plata","table":2},{"name":"Christian Mart\u00ednez","table":2},{"name":"Erika","table":2},{"name":"Janet","table":2},{"name":"Pareja de Gustavo Becerril","table":2},{"name":"Victor Manuel Mercado","table":2},{"name":"Jos\u00e9 Antonio de la Garza","table":3},{"name":"Gema","table":3},{"name":"Idalid de la Garza","table":3},{"name":"Miguel Revilla","table":3},{"name":"Angelina de la Garza","table":3},{"name":"Carlos (+1 Geli)","table":3},{"name":"Gaby","table":3},{"name":"Carlos de la Garza","table":3},{"name":"Rub\u00e9n Tavera","table":3},{"name":"Daniel Revilla","table":3},{"name":"Marcela de la Garza","table":3},{"name":"Mario Arizmendi","table":4},{"name":"Mam\u00e1 de Jes\u00fas","table":4},{"name":"Susana Espinoza","table":4},{"name":"+1 de Susy","table":4},{"name":"GABRIELA HERNANDEZ GARDU\u00d1O","table":4},{"name":"Pepe Vergara","table":4},{"name":"ANA PATRICIA LOPEZ","table":4},{"name":"Gilberto","table":4},{"name":"Beto Estrada","table":5},{"name":"Claudita Nieto","table":5},{"name":"Pepe Romo","table":5},{"name":"Vero Estrada","table":5},{"name":"Raul","table":5},{"name":"Gaby (gemela)","table":5},{"name":"Luis (Esposo de Gaby)","table":5},{"name":"Eva","table":6},{"name":"Jose Francisco Lugo Estrada","table":6},{"name":"Esposa de Paco","table":6},{"name":"Roberto Romo","table":6},{"name":"Margarita Estrada","table":6},{"name":"Judith","table":6},{"name":"Tio Nacho","table":6},{"name":"Lucy (Esposa de Tio Nacho)","table":6},{"name":"Jorge","table":7},{"name":"Rosi","table":7},{"name":"Eustolia","table":7},{"name":"JOSE OLMOS SANCHEZ","table":7},{"name":"Liborio","table":7},{"name":"Fabiola","table":7},{"name":"Tio Mayolo","table":7},{"name":"Tere","table":7},{"name":"Miguelito","table":8},{"name":"Ana (Novia de Miguelito)","table":8},{"name":"Hermano de Ariz","table":8},{"name":"Novia del hermano de Ariz","table":8},{"name":"Pedrito","table":8},{"name":"Carlitos","table":8},{"name":"Estefan\u00eda Tavera","table":8},{"name":"Fernando Tavera","table":8},{"name":"Mar\u00eda Paula Pliego","table":8},{"name":"Jos\u00e9 Manuel Salazar","table":8},{"name":"Jes\u00fas Plata","table":9},{"name":"Sara Plata","table":9},{"name":"Jos\u00e9 Estrada Plata","table":9},{"name":"Daniel Estrada Plata","table":9},{"name":"Ricardo Plata","table":9},{"name":"Jos\u00e9 Antonio Estrada","table":9},{"name":"Paola Mancilla","table":9},{"name":"Sofia Estrada","table":9},{"name":"Paulina Romo","table":9},{"name":"Ximena Romo","table":9},{"name":"Juan Pablo Romo","table":9},{"name":"Valentina Mercado","table":9},{"name":"Mayolo","table":11},{"name":"Nayeli","table":11},{"name":"Alex","table":11},{"name":"Daniela Gomez","table":11},{"name":"Alfredo","table":11},{"name":"+1 Alfredo","table":11},{"name":"Jesus","table":11},{"name":"Jorgito","table":11},{"name":"Migue Cue","table":12},{"name":"Kari de Luca (novia de Migue)","table":12},{"name":"Luis Becerril","table":12},{"name":"Lupita Contreras","table":12},{"name":"Alejandra Contreras","table":12},{"name":"+1 Alejandra (Jose Carlos)","table":12},{"name":"Paulina Contreras","table":12},{"name":"Zaideth","table":12},{"name":"MANUEL JASSO RAMIREZ","table":12},{"name":"Hija de Mar\u00eda Elena","table":13},{"name":"Mar\u00eda Elena","table":13},{"name":"Dora","table":13},{"name":"+1 Dora","table":13},{"name":"Karina","table":13},{"name":"Ceferino","table":13},{"name":"Jes\u00fas Mondrag\u00edn Ortiz","table":14},{"name":"Lauro Reyes","table":14},{"name":"Novia de Lauro","table":14},{"name":"Alexandro \u00c1lvarez","table":14},{"name":"Monserrat Gaytan","table":14},{"name":"+1 Montse Gaytan","table":14},{"name":"+1 de Alex","table":14},{"name":"Jaime Yussef","table":14},{"name":"\u00c1ngel","table":15},{"name":"Sandra","table":15},{"name":"Uriel","table":15},{"name":"Ivana","table":15},{"name":"Ruz","table":15},{"name":"Felipe Ba\u00f1uelos","table":15},{"name":"BRENDA MOTTA","table":15},{"name":"ULISES OSORIO","table":15},{"name":"BERE","table":15},{"name":"JORGE CRUZ","table":15},{"name":"Novia de Jorge","table":15},{"name":"Luis Felipe","table":16},{"name":"Novia de Luis Felipe","table":16},{"name":"Novia de pablito (Ale)","table":16},{"name":"Pablito Martinez","table":16},{"name":"Dianita","table":16},{"name":"Novio de Dianita","table":16},{"name":"Nancy","table":16},{"name":"Quique","table":16},{"name":"Daniel","table":16},{"name":"Sifu","table":17},{"name":"Amanda","table":17},{"name":"+1 Amanda","table":17},{"name":"Jorge huereca","table":17},{"name":"To\u00f1o","table":17},{"name":"DANIELA GOMEZ","table":17},{"name":"MARIA FERNANDA LOPEZ GOMEZ","table":17},{"name":"ALEJANDRO PUENTE","table":17},{"name":"Neli (Novia de Alex Puente)","table":17},{"name":"Luis German Mercado","table":17},{"name":"Rafa de Haro","table":18},{"name":"Carly","table":18},{"name":"Ismael","table":18},{"name":"Mar\u00eda Fernanda Becerril Oceguera","table":18},{"name":"Dany","table":18},{"name":"Alejandro Chimal","table":18},{"name":"Liz (Novia Chimal)","table":18},{"name":"Dorian Espinoza","table":18},{"name":"Pepe Becerril","table":19},{"name":"Mony","table":19},{"name":"German Mercado","table":19},{"name":"Pera (Esposa de German)","table":19},{"name":"Gustavo Ramirez","table":19},{"name":"Esposa de Gustavo Ramirez","table":19},{"name":"Claudia (amiga de Rosa Mar\u00eda)","table":19},{"name":"+1 esposo de Claudia (Amiga de Rosa Mar\u00eda)","table":19},{"name":"Tosh","table":20},{"name":"Fer Ram\u00edrez","table":20},{"name":"Pablo mercado","table":20},{"name":"Pamela","table":20},{"name":"Dario +1 Damaris","table":20},{"name":"Clarisa","table":20},{"name":"DAMARIS RAMIREZ GONZALEZ","table":20},{"name":"JOSE LUIS ACEVEDO","table":20},{"name":"Nancy (+1 Azu)","table":21},{"name":"Azu","table":21},{"name":"Juan Carlos","table":21},{"name":"Novio de Ale","table":21},{"name":"Ale armengol","table":21},{"name":"Rub\u00ed","table":21},{"name":"Antonio de la Fuente","table":22},{"name":"+1 Antonio de la Fuente","table":22},{"name":"Andr\u00e9s Urquiza (Amigo de Miguel)","table":22},{"name":"+1 Andr\u00e9s Urquiza","table":22},{"name":"Juan Carlos Rend\u00f3n","table":22},{"name":"+1 Juan Carlos Rendon","table":22},{"name":"EDUARDO RINCON GALLARDO","table":22},{"name":"+1 Eduardo Rinc\u00f3n Gallardo","table":22},{"name":"Enrique Beteta","table":22},{"name":"Rosa Mar\u00eda (Esposa de Enrique Beteta)","table":22},{"name":"Karla Gonzalez","table":23},{"name":"+1 Karla (Alejandro)","table":23},{"name":"Mayra Rojas","table":23},{"name":"Misael (+1 de Mayra)","table":23},{"name":"Claudia Gonzalez","table":23},{"name":"Lizza Gonzalez","table":23},{"name":"Gloria Marichalar Ramon","table":23},{"name":"Amadeo Marichalar","table":23}
    // Añade aquí los datos copiados desde el portapapeles
];

// Configuración de Fuse.js
const options = {
    includeScore: true,
    threshold: 0.3, // Umbral más estricto
    keys: ['name']
};

// Inicializar Fuse.js con los datos cargados
const fuse = new Fuse(guests, options);

// Función para buscar invitados
document.getElementById('searchButton').addEventListener('click', () => {
    const searchInputValue = document.getElementById('searchInput').value.trim().toLowerCase();
    const resultElement = document.getElementById('result');
    const suggestionsElement = document.getElementById('suggestions');
    const searchInputField = document.getElementById('searchInput');

    resultElement.innerHTML = '';
    suggestionsElement.innerHTML = '';
    resultElement.classList.remove('text-green-500', 'text-red-500');

    const guest = guests.find(g => g.name.toLowerCase() === searchInputValue);
    if (guest) {
        resultElement.innerHTML = `<span class="text-3xl md:text-4xl font-extrabold leading-tighter tracking-tighter text-green-500">${guest.name}</span> 
        <br><br><span class="text-2xl md:text-2xl font-light leading-tighter tracking-tighter text-slate-500">
        Muchas gracias por acompañarnos en este día tan importante.</span>
        
        <br><br><span class="text-2xl md:text-2xl font-extrabold leading-tighter tracking-tighter text-slate-500">
        Tu mesa es la número 
        <span class="bg-clip-text text-transparent text-blue-500 text-3xl md:text-4xl font-extrabold">${guest.table}</span></span>`;
    } else {
        resultElement.innerHTML = '<span class="text-xl md:text-2xl font-extrabold leading-tighter tracking-tighter text-red-500">Invitado no encontrado. <br> Selecciona el nombre correcto:</span>';
        // Búsqueda difusa
        const results = fuse.search(searchInputValue);
        if (results.length > 0) {
            results.forEach(result => {
                const li = document.createElement('li');
                li.textContent = result.item.name;
                li.classList.add('cursor-pointer', 'hover:bg-gray-200', 'py-2', 'px-3', 'rounded');
                li.addEventListener('click', () => {
                    resultElement.innerHTML = `<span class="text-3xl md:text-4xl font-extrabold leading-tighter tracking-tighter text-green-500"> ${result.item.name}</span> 
                    <br><br><span class="text-2xl md:text-2xl font-light leading-tighter tracking-tighter text-slate-500">
                    Muchas gracias por acompañarnos en este día tan importante.</span>
                    <br><br><span class="text-2xl md:text-2xl font-extrabold leading-tighter tracking-tighter text-slate-500">
                    Tu mesa es la número 
                    <span class="bg-clip-text text-transparent text-blue-500 text-3xl md:text-4xl font-extrabold">${result.item.table}</span>.</span>`;
                    suggestionsElement.innerHTML = '';
                    searchInputField.value = ''; // Limpiar el campo de entrada
                });
                suggestionsElement.appendChild(li);
            });
        }
    }
    searchInputField.value = ''; // Limpiar el campo de entrada siempre
});
