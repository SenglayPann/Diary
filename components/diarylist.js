import { renderDiaries } from '../src/js/crud/read.js';
import { period } from '../src/js/period.js';
import { showDashboard } from '../src/js/crud/dashboard.js';

const Auth = JSON.parse(localStorage.getItem('currentAuth')) || {
    loggedIn: false,
    userName: null
};


class Diarylist extends HTMLElement {
    constructor() {
        super();
    };

    connectedCallback() {
        if (!Auth.loggedIn) {
            window.location.href = '../index.html';
        } else {
            this.setAttribute('id', 'body');

            this.innerHTML = `
                <div id="intro-container" class="desolve"><div id="intro">Please Wellcome <span class="auth-name">${Auth.userName}</span> 👋!</div></div>
                <div id="navigator-bar">
                    <div id="diary-entry-content-button" class="navigator-item active"><a href="#">Diary Entries</a></div>
                    <div id="dashboard-entry-content-button" class="navigator-item"><a href="#">Dashboard</a></div>
                </div>


                <div id="main-content">
                    <!-- greeting phrase -->
                    <div id="greeting-phrase">
                        <span class="big-phrase">Good ${period()} <span class="auth-name1">${Auth.userName}</span>! 👋 </span>
                        <span class="small-phrase">What is on your mind today?</span>
                    </div>

                    <div id="empty-list-indicator"></div>

                    <!-- card area -->
                    <div id="diary-card-container"></div>
                    
                    <custom-footer></custom-footer>
                </div>
                <div id="float-diary-adder" class="diary-add-button"><img src="../assets/icons/add-outline.svg"></div>
            `;

            const navigatorBar = document.getElementById('navigator-bar');
            const navigatorItems = navigatorBar.querySelectorAll('.navigator-item');
            const diaryContentButton = document.getElementById('diary-entry-content-button');
            const dashboardContent = document.getElementById('dashboard-entry-content-button');
            diaryContentButton.addEventListener('click', renderDiaries);
            dashboardContent.addEventListener('click', showDashboard);
            
            navigatorItems.forEach(item => {
                item.addEventListener('click', () => {
                    // Remove 'active' class from all items
                    navigatorItems.forEach(navItem => navItem.classList.remove('active'));
                    
                    // Add 'active' class to the clicked item
                    item.classList.add('active');
                });
            });

            renderDiaries();
        }
    };
};

customElements.define('diary-list', Diarylist);