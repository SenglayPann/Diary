import { createDiaryEntry } from './create.js';
import { renderDiaries } from './read.js';

// Function to show diary form
export const showDiaryForm = () => {
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
    document.getElementById('float-diary-adder').style.display = 'none';
    document.getElementById('create-diary-button').addEventListener('click', createDiaryEntry);
    document.getElementById('discard-diary-button').addEventListener('click', renderDiaries);
};
