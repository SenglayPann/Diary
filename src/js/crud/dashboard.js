import { retrieveStorage } from '../localStorage/retrieve.js';
import { Auth } from '../localStorage/auth.js';
import { calculateDiaryCounts } from './calDiaryCounts.js';


export const showDashboard = () => {
    console.log(1)
    const diaryContainer = document.getElementById('diary-card-container');
    const emptyListIndicator = document.getElementById('empty-list-indicator');
    emptyListIndicator.innerHTML = '';
    diaryContainer.innerHTML = ''; // Clear the container before rendering

    // Retrieve userData from localStorage
    const userData = retrieveStorage('userData');
    const currentUser = Auth.userName; // Assuming Auth.userName gives the current user's name
    console.log(userData[currentUser])
    // Check if the current user has diary entries
    if (userData[currentUser]) {
        const diaryEntries = userData[currentUser].diaryEntries;

        // Calculate diary counts
        const { totalDiaries, diariesThisWeek, diariesThisMonth } = calculateDiaryCounts(diaryEntries);

        // Create dashboard
        const dashboard = document.createElement('div');
        dashboard.classList.add('dashboard');
        dashboard.innerHTML = `
            <div class="dashboard-item">Total Diaries: ${totalDiaries}</div>
            <div class="dashboard-item">Diaries This Week: ${diariesThisWeek}</div>
            <div class="dashboard-item">Diaries This Month: ${diariesThisMonth}</div>
        `;
        diaryContainer.appendChild(dashboard);
    }
};