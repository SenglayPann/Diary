import { renderDiaries } from '../src/js/crud/read.js';
import { period } from '../src/js/period.js';

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
                    <div class="navigator-item active"><a href="#">Diary list</a></div>
                    <div class="navigator-item"><a href="#">Dashboard</a></div>
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
                </div>

                <div id="float-diary-adder" class="diary-add-button">+</div>
            `;

            renderDiaries();
        }
    };
};

customElements.define('diary-list', Diarylist);