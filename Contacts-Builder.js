class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false; // Initially, online is false
        this.element = null; // We'll store the DOM element here when rendered
    }

    get online() {
        return this._online;
    }

    set online(value) {
        this._online = value;
        if (this.element) {
            const titleDiv = this.element.querySelector('.title');
            if (this._online) {
                titleDiv.classList.add('online');
            } else {
                titleDiv.classList.remove('online');
            }
        }
    }

    render(id) {
        // Create the article element
        this.element = document.createElement('article');

        // Create the title div
        const titleDiv = document.createElement('div');
        titleDiv.className = 'title';
        titleDiv.textContent = `${this.firstName} ${this.lastName}`;

        // Create the button
        const button = document.createElement('button');
        button.innerHTML = '&#8505;'; // Info symbol
        titleDiv.appendChild(button);

        // Create the info div (initially hidden)
        const infoDiv = document.createElement('div');
        infoDiv.className = 'info';
        infoDiv.style.display = 'none'; // Initially hidden

        // Create the phone and email spans
        const phoneSpan = document.createElement('span');
        phoneSpan.innerHTML = `&#9742; ${this.phone}`; // Phone symbol
        const emailSpan = document.createElement('span');
        emailSpan.innerHTML = `&#9993; ${this.email}`; // Email symbol

        // Append phone and email to the info div
        infoDiv.appendChild(phoneSpan);
        infoDiv.appendChild(emailSpan);

        // Append title and info to the article
        this.element.appendChild(titleDiv);
        this.element.appendChild(infoDiv);

        // Add click event to toggle the visibility of the info div
        button.addEventListener('click', () => {
            infoDiv.style.display = infoDiv.style.display === 'none' ? 'block' : 'none';
        });

        // Append the article to the DOM element with the given id
        document.getElementById(id).appendChild(this.element);

        // Ensure the correct online class is set after rendering
        if (this._online) {
            titleDiv.classList.add('online');
        }
    }
}

// Example usage:

let contacts = [
  new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
  new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
  new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];

// Render each contact inside the element with id 'main'
contacts.forEach(c => c.render('main'));

// After 2 seconds, change the online status of the second contact to true
setTimeout(() => contacts[1].online = true, 2000);