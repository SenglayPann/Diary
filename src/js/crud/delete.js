import { retrieveStorage } from '../localStorage/retrieve.js';
import { Auth } from '../localStorage/auth.js';
import { updateStorage } from '../localStorage/update.js'
import { renderDiaries } from './read.js';



export const deleteDiaryEntry = (entryId) => {
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