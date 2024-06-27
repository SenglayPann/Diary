import { retrieveStorage } from '../localStorage/retrieve.js';
import { Auth } from '../localStorage/auth.js';
import { updateStorage } from '../localStorage/update.js'
import { renderDiaries } from './read.js';

// Function to update a diary entry
export const updateDiaryEntry = (entryId) => {
    const diaryTitle = document.getElementById('diary-title').value;
    const diaryDate = document.getElementById('diary-date').value;
    const diaryContent = document.getElementById('diary-content').value;

    // Retrieve userData from localStorage
    const userData = retrieveStorage('userData');
    const diaryEntries = userData[Auth.userName]?.diaryEntries || [];

    // Find the index of the entry to update
    const editEntryId = diaryEntries.findIndex(entry => entry.id === entryId);
    
    if (entryId !== -1) {
        diaryEntries[editEntryId].title = diaryTitle;
        diaryEntries[editEntryId].date = diaryDate;
        diaryEntries[editEntryId].content = diaryContent;
        
        // Save updated data back to localStorage
        userData[Auth.userName].diaryEntries = diaryEntries;
        updateStorage('userData', userData);

        // Re-render the diary list
        renderDiaries();
    };
};