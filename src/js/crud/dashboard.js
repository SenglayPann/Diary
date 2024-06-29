import { retrieveStorage } from '../localStorage/retrieve.js';
import { Auth } from '../localStorage/auth.js';
import { calculateDiaryCounts } from './calDiaryCounts.js';

export const showDashboard = () => {
    const diaryContainer = document.getElementById('diary-card-container');
    const emptyListIndicator = document.getElementById('empty-list-indicator');
    emptyListIndicator.innerHTML = '';
    diaryContainer.innerHTML = ''; // Clear the container before rendering

    // Retrieve userData from localStorage
    const userData = retrieveStorage('userData');
    const currentUser = Auth.userName; // Assuming Auth.userName gives the current user's name

    // Initialize diary counts
    let totalDiaries = 0;
    let diariesThisWeek = 0;
    let diariesThisMonth = 0;

    // Check if the current user has diary entries
    if (userData && userData[currentUser]) {
        const diaryEntries = userData[currentUser].diaryEntries;
        // Calculate diary counts
        const counts = calculateDiaryCounts(diaryEntries);
        totalDiaries = counts.totalDiaries;
        diariesThisWeek = counts.diariesThisWeek;
        diariesThisMonth = counts.diariesThisMonth;
    }

    // Create dashboard
    const dashboard = document.createElement('div');
    dashboard.classList.add('dashboard');
    dashboard.innerHTML = `
        <div id="statistic" class="fade-in1">
            <div class="statistic-item">
                <div>Total Diaries:</div><span>${totalDiaries}</span>
            </div>
            <div class="statistic-item">
                <div>Diaries This Month:</div><span>${diariesThisWeek}</span>
            </div>
            <div class="statistic-item">
                <div>Diaries This Week:</div><span>${diariesThisMonth}</span>
            </div>
        </div>
    `;
    diaryContainer.appendChild(dashboard);
};
