import { retrieveStorage } from '../localStorage/retrieve.js';
import { Auth } from '../localStorage/auth.js';
import { renderDiaries } from './read.js';
import { updateDiaryEntry } from './update.js';

// Function to edit a diary entry
export const showDiaryEditForm = (entryId) => {
    const diaryContainer = document.querySelector('#diary-card-container');
    const emptyListIndicator = document.getElementById('empty-list-indicator');
    
    // Retrieve userData from localStorage
    const userData = retrieveStorage('userData');

    // Find index of entry to delete in diaryEntries array
    const diaryEntries = userData[Auth.userName]?.diaryEntries || [];
    const indexToEdit = diaryEntries.findIndex(entry => entry.id === entryId);

    if (indexToEdit !== -1) {
        const diaryToEdit = diaryEntries[indexToEdit];
        emptyListIndicator.innerHTML = ''
        diaryContainer.innerHTML = `
            <form id="diary-form" class="form">
                <div class="input-field">
                    <label for="diary-title">Diary Title</label>
                    <input id="diary-title" type="text" value="${diaryToEdit.title}" placeholder="Enter diary title">
                </div>
                <div class="input-field">
                    <label for="diary-date">Date</label>
                    <input id="diary-date" value="${diaryToEdit.date}" type="date">
                </div>
                <div class="input-field">
                    <label for="diary-content">Diary Content</label>
                    <textarea id="diary-content" placeholder="Enter diary content">${diaryToEdit.content}</textarea>
                </div>
                <button type="button" id="discard-diary-button">Discard</button>
                <button type="button" id="update-diary-button">Update</button>
            </form>
        `;

        // Add event listener to the save button
        document.getElementById('float-diary-adder').style.display = 'none';
        document.getElementById('update-diary-button').addEventListener('click', () => updateDiaryEntry(entryId));
        document.getElementById('discard-diary-button').addEventListener('click', renderDiaries);
    };
};
