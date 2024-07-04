import { retrieveStorage } from '../localStorage/retrieve.js';
import { Auth } from '../localStorage/auth.js';
import { updateStorage } from '../localStorage/update.js'
import { renderDiaries } from './read.js';

// Function to save diary entry
export const createDiaryEntry = () => {
    const title = document.getElementById('diary-title').value;
    const date = document.getElementById('diary-date').value;
    const content = document.getElementById('diary-content').value;

    let isDisplayModal = false;

    // a function to create alert modal
    const createAlertModal = (message) => {
        isDisplayModal = true
        const landingPageContent = document.getElementById('main-content');
        const alertModalContainer = document.createElement('div');
        alertModalContainer.setAttribute('id', 'alert-modal-container');
        alertModalContainer.setAttribute('class', 'fade-in-no-delay-2');
        alertModalContainer.innerHTML = `
            <div id="alert-modal">
                <div class="alert-modal-closing-button" id="semi-alert-modal-closing-button">
                    <img src="../assets/icons/close.svg">
                </div>
                <img src="../assets/interactive_graphics/exclamation-mark.png" alt="">
                <p>${message}<p/>
                <button class="alert-modal-closing-button">OK</button>
            <div>
        `;
        landingPageContent.appendChild(alertModalContainer) 

        Array.from(document.getElementsByClassName('alert-modal-closing-button')).forEach(button => button.addEventListener('click', () => {
            
            alertModalContainer.classList.add('fade-out-no-delay-1')
            setTimeout(() => {
                closeAlertModal();
            }, 290);
        }));
    };

    // a function to close the alert modal
    const closeAlertModal = () => {
        isDisplayModal = false;
        const landingPageContent = document.getElementById('main-content');
        landingPageContent.removeChild(landingPageContent.lastElementChild);

    };

    if (!title || !date || !content) {
        createAlertModal('All fields are required. Please fill in all the fields.');
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
