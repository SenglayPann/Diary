import { retrieveStorage } from '../localStorage/retrieve.js';
import { Auth } from '../localStorage/auth.js';
import { showDiaryEditForm } from './diaryEditForm.js';
import { deleteDiaryEntry } from './delete.js';


export const addEventListeners = () => {
    // Retrieve userData from localStorage
    const userData = retrieveStorage('userData');
    // Check if the current user has diary entries
    if (userData[Auth.userName] && userData[Auth.userName].diaryEntries.length > 0) {
        const diaryEntries = userData[Auth.userName].diaryEntries;

        diaryEntries.forEach(entry => {
            const diaryId = entry.id;

            // Add event listener for edit button
            document.getElementById(`edit${entry.id}`).addEventListener('click', () => showDiaryEditForm(diaryId));

            // Add event listener for delete button
            document.getElementById(`delete${entry.id}`).addEventListener('click', () => deleteDiaryEntry(diaryId));
        });
    };

};