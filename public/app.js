var contactsArray;


showContacts = () => {

    //divContactList.hidden = false;

    var ulList = document.getElementById('contactUlList');
    ulList.innerHTML = '';

    const XHR = new XMLHttpRequest();

    XHR.onload = () => {

        contactsArray = JSON.parse(XHR.responseText);

        contactsArray.forEach(contact => {

            var listElements = document.createElement('li');

            listElements.innerHTML = (`${contact.name} - ${contact.number}`);
    
            ulList.appendChild(listElements);

        }); 

    }

    XHR.open('GET', '/contacts');
    XHR.send();

}

addContact = () => {

    var newContactName = document.getElementById('inputContactName').value;
    var newContactNumber = document.getElementById('inputContactName').value;

    var newContact = {name: newContactName, number: newContactNumber};

    const XHR = new XMLHttpRequest();
    
    XHR.onload = () => {

        newContacts = JSON.parse(XHR.responseText);

        newContacts.push(newContact);
        
        console.log(newContacts);


    }

    XHR.open('GET', '/add');
    XHR.send(newContacts);

    showContacts();
}

saveContacts = () => {

    const XHR = new XMLHttpRequest();

    XHR.open('GET', '/save');
    XHR.send();

}