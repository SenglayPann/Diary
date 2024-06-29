import { retrieveStorage } from '../localStorage/retrieve.js';
import { Auth } from '../localStorage/auth.js';
import { updateStorage } from '../localStorage/update.js'
import { renderDiaries } from './read.js';

// Function to save diary entry
export const createDiaryEntry = () => {
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
