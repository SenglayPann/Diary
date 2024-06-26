const Auth = JSON.parse(localStorage.getItem('currentAuth')) || {
    loggedIn: false,
    userName: null
};

// Function to retrieve custom local storage name
const retrieveStorage = (storageName) => {
    return JSON.parse(localStorage.getItem(storageName)) || {};
}

// Function to update data in custom local storage
const updateStorage = (storageName, data) => {
    localStorage.setItem(storageName, JSON.stringify(data));
}

// Function to get diary entries for the current user
const getDiaryEntries = () => {
    const currentUserData = retrieveStorage(`userData.${Auth.userName}`);
    return currentUserData.diaryEntries || [];
}

const renderDiaries = () => {
    const diaryContainer = document.querySelector('#diary-card-container');
    const emptyListIndicator = document.getElementById('empty-list-indicator');
    diaryContainer.innerHTML = ''; // Clear the container before rendering

    // Retrieve userData from localStorage
    const userData = retrieveStorage('userData');

    // Check if the current user has diary entries
    if (userData[Auth.userName] && userData[Auth.userName].diaryEntries.length > 0) {
        const diaryEntries = userData[Auth.userName].diaryEntries;

        // Loop through each diary entry and create HTML
        diaryEntries.forEach(entry => {
            const diaryCard = document.createElement('div');
            diaryCard.classList.add('diary-card', 'diary-container-item');
            diaryCard.innerHTML = `
                <div class="diary-main-content">
                    <!-- card header -->
                    <div class="header-container">
                        <div class="header-left">
                            <div class="date">${entry.date}</div>
                            <div class="title truncate">${entry.title}</div>
                        </div>
                    </div>

                    <!-- card-content -->
                    <div class="diary-card-content truncate-multiline">
                        ${entry.content}
                    </div>
                </div>

                <div class="header-right">
                    <button class="edit-button"><img src="../assets/icons/edit.svg" alt=""></button>
                    <button class="delete-button" onClick='deleteDiaryEntry(${entry.id})'><img data-entry-id="${entry.id}" src="../assets/icons/trash.svg" alt=""></button>
                </div>
            `;
            diaryContainer.appendChild(diaryCard);


        });

        emptyListIndicator.innerHTML = ''; // Clear empty list indicator
    } else {
        emptyListIndicator.innerHTML = '<div class="empty-list">There are no diary entries yet.</div>';
    }

    // Add a diary card adder button
    diaryContainer.innerHTML += `
        <div id="diary-card-adder" class="diary-container-item diary-add-button">
            <div id="add-sign">+</div>
        </div>
    `;

    // Add event listener to the diary card adder button
    document.getElementById('diary-card-adder').addEventListener('click', showDiaryForm);
};



// Function to save diary entry
const saveDiaryEntry = () => {
    const title = document.getElementById('diary-title').value;
    const date = document.getElementById('diary-date').value;
    const content = document.getElementById('diary-content').value;

    if (!title || !date || !content) {
        alert('All fields are required. Please fill in all the fields.');
        return;
    }

    // Retrieve userData from localStorage
    const userData = retrieveStorage('userData');

    // Initialize or get the current user's diary entries
    const diaryEntries = userData[Auth.userName]?.diaryEntries || [];

    const newEntry = {
        id: Date.now(), // Generate a unique ID (you can adjust this as needed)
        title,
        date,
        content,
    };

    // Add new entry to the user's diaryEntries array
    diaryEntries.push(newEntry);

    // Update the userData with the new diaryEntries for the current user
    userData[Auth.userName] = {
        diaryEntries,
    };

    // Save updated userData back to localStorage
    updateStorage('userData', userData);

    // Now call renderDiaries to update the UI with the new diary entry
    renderDiaries();
};

const deleteDiaryEntry = (entryId) => {
    // Retrieve userData from localStorage
    const userData = retrieveStorage('userData');

    // Find index of entry to delete in diaryEntries array
    const diaryEntries = userData[Auth.userName]?.diaryEntries || [];
    const indexToDelete = diaryEntries.findIndex(entry => entry.id === entryId);

    if (indexToDelete !== -1) {
        // Remove entry from diaryEntries array
        diaryEntries.splice(indexToDelete, 1);

        // Update userData with the modified diaryEntries
        userData[Auth.userName].diaryEntries = diaryEntries;

        // Save updated userData back to localStorage
        updateStorage('userData', userData);

        // Re-render diaries after deletion
        renderDiaries();
    }
};


// Function to show diary form
const showDiaryForm = () => {
    const diaryContainer = document.querySelector('#diary-card-container');
    const emptyListIndicator = document.getElementById('empty-list-indicator');
    emptyListIndicator.innerHTML = ''
    diaryContainer.innerHTML = `
        <form id="diary-form" class="form">
            <div class="input-field">
                <label for="diary-title">Diary Title</label>
                <input id="diary-title" type="text" placeholder="Enter diary title">
            </div>
            <div class="input-field">
                <label for="diary-date">Date</label>
                <input id="diary-date" type="date">
            </div>
            <div class="input-field">
                <label for="diary-content">Diary Content</label>
                <textarea id="diary-content" placeholder="Enter diary content"></textarea>
            </div>
            <button type="button" id="discard-diary-button">Discard</button>
            <button type="button" id="create-diary-button">Create</button>
        </form>
    `;

    // Add event listener to the save button
    document.getElementById('create-diary-button').addEventListener('click', saveDiaryEntry);
    document.getElementById('discard-diary-button').addEventListener('click', renderDiaries);
};

class Diarylist extends HTMLElement {
    constructor() {
        super();
    };

    connectedCallback() {
        if (!Auth.loggedIn) {
            window.location.href = '../index.html';
        } else {
            this.setAttribute('id', 'body');

            this.innerHTML = `
                <div id="navigator-bar">
                    <div class="navigator-item active"><a href="#">Diary list</a></div>
                    <div class="navigator-item"><a href="#">Dashboard</a></div>
                </div>

                <div id="main-content">
                    <!-- greeting phrase -->
                    <div id="greeting-phrase">
                        <span class="big-phrase">Hello there!</span>
                        <span class="small-phrase">What is on your mind today?</span>
                    </div>

                    <div id="empty-list-indicator"></div>

                    <!-- card area -->
                    <div id="diary-card-container"></div>
                </div>

                <div id="float-diary-adder" class="diary-add-button">+</div>
            `;

            renderDiaries();
        }
    };
};

customElements.define('diary-list', Diarylist);