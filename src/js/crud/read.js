import { retrieveStorage } from '../localStorage/retrieve.js';
import { Auth } from '../localStorage/auth.js';
import { showDiaryForm } from './diaryForm.js';
import { addEventListeners } from './addButtonEvenListeners.js';
import { addDiaryCardsEventListener } from './addCardEventListener.js';

// Function to get diary entries for the current user
export const renderDiaries = () => {
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
            diaryCard.classList.add('diary-card', 'diary-container-item', 'fade-in1');
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
                    <button class="edit-button" id="edit${entry.id}"><img src="../assets/icons/edit.svg" alt=""></button>
                    <button class="delete-button" id="delete${entry.id}"><img data-entry-id="${entry.id}" src="../assets/icons/trash.svg" alt=""></button>
                </div>
            `;
            diaryContainer.appendChild(diaryCard);

        });

        emptyListIndicator.innerHTML = ''; // Clear empty list indicator
    } else {
        emptyListIndicator.innerHTML = '<div class="empty-list fade-in1">There are no diary entries yet.</div>';
    }

    // Add a diary card adder button
    diaryContainer.innerHTML += `
        <div id="diary-card-adder" class="diary-container-item diary-add-button fade-in1">
            <div id="add-sign"><img src="../assets/icons/add-outline-blue.svg"></div>
        </div>
    `;

    // Add event listener to the diary card adder button
    document.getElementById('float-diary-adder').style.display = 'flex';
    document.getElementById('diary-card-adder').addEventListener('click', showDiaryForm);
    document.getElementById('float-diary-adder').addEventListener('click', showDiaryForm);
    addEventListeners();
    addDiaryCardsEventListener();
};
