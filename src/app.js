/*
* File: app.js
* Author: Németh Angéla
* Copyright: 2023, Németh Angéla
* Group: Szoft 1-2 E
* Date: 2023-03-03
* Github: https://github.com/NemethAngela/
* Licenc: GNU GPL
*/

const tbody = document.querySelector('#tbody');

var bikeList = [    
    {name: 'cassis', wheel: 28, using: 'offroad', price: 557900},
    {name: 'Alboin 900', wheel: 28, using: 'trekking', price: 519900},
    {name: 'Asgard', wheel: 29, using: 'technikás utak', price: 519900},
    {name: 'Ruga', wheel: 29, using: 'hegyi', price: 372900},
    {name: 'Reptila', wheel: 28, using: 'városi', price: 308900},
    {name: 'Sirmium', wheel: 29, using: 'hegyi', price: 264900},
];

(function createTable() {
    bikeList.forEach((bike) => {
        console.log(bike.name)
    
        let tr = document.createElement('tr');
    
        let tdName = document.createElement('td');
        let tdWheel = document.createElement('td');
        let tdUsing = document.createElement('td');
        let tdPrice = document.createElement('td');
    
        tdName.textContent = bike.name;
        tdWheel.textContent = bike.wheel;
        tdUsing.textContent = bike.using;
        tdPrice.textContent = bike.price;
    
        tbody.append(tr);
        tr.append(tdName);
        tr.append(tdWheel);
        tr.append(tdUsing);
        tr.append(tdPrice);
    
    });
    })();