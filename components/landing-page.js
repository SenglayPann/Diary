class LandingPage extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        const authContent = {
            'block1' : [
                `
                    <div>Welcome to Your Personal Diary</div>
                    <img src="./assets/interactive_graphics/book-with-scetch.png" alt="">
                `
                ,
                `
                    <div id="landing-page-block1" class="fade-in-no-delay">
                        <div class="wellcome-phrase">Unlock Your Story. Sign up Start Writing Today!</div>
                        <img src="./assets/interactive_graphics/sign-up.png" alt="">
                    </div>
                `,
                `   <div id="landing-page-block1" class="fade-in-no-delay">
                        <div class="wellcome-phrase">Welcome back! Relive your memories and create new ones.</div>
                        <img src="./assets/interactive_graphics/sign-in.png" alt="">
                    </div>
                `
            ],
            'block2' : [
                `   
                    <div>this Capture <span>MOMENTS</span>, Share <span>MEMORIES</span>, and Reflect on Your <span>JOURNEY </span>!</div>
                    <button id="get-started-button">GET STARTED</button>
                `,
                `
                    <div id="landing-page-block2" class="fade-in-no-delay">
                        <div class="form">

                            <div class="input-field">
                                <div class="label">
                                    <img src="./assets/icons/profile.svg" alt="">
                                    <div>Username</div>
                                </div>
                                <input id="username" placeholder="Username" type="text">
                            </div>

                            <div class="input-field">
                                <div class="label">
                                    <img src="./assets/icons/lock.svg" alt="">
                                    <div>Password</div>
                                </div>
                                <input id="password" placeholder="Password" type="password">
                            </div>

                            <div class="input-field">
                                <div class="label">
                                    <img src="./assets/icons/lock.svg" alt="">
                                    <div>Confirm password</div>
                                </div>
                                <input id="confirm-password" placeholder="Confirm Password" type="password">
                            </div>

                        </div>
                        <div class="auth-mode-indicator">Already registered? <span id="sign-in-switch-button">Sign In.</span></div>
                        
                        <button id="sign-up-button">SIGN UP</button>
                    </div>
                `,
                `   
                    <div id="landing-page-block2" class="fade-in-no-delay">
                        <div class="form">

                            <div class="input-field">
                                <div class="label">
                                    <img src="./assets/icons/profile.svg" alt="">
                                    <div>Username</div>
                                </div>
                                <input id="username" placeholder="Username" type="text">
                            </div>

                            <div class="input-field">
                                <div class="label">
                                    <img src="./assets/icons/lock.svg" alt="">
                                    <div>Password</div>
                                </div>
                                <input id="password" placeholder="Password" type="password">
                            </div>
                            
                        </div>
                        <div class="auth-mode-indicator">Not yet registered? <span id="sign-up-switch-button">Sign Up.</span></div>
                        
                        <button id="sign-in-button">SIGN IN</button>
                    </div>
                `
            ]
        }

        this.innerHTML = `
            <div id="landing-page-bg">
                <div id="landing-page-sheet">
                    <div id="landing-page-content">
                        <div id="landing-page-block1" class="slide-right">
                            ${authContent.block1[0]}
                        </div>

                        <div id="landing-page-block2" class="fade-in">
                            ${authContent.block2[0]}
                        </div>
                    </div>
                </div>
            </div>
        `;


        const changeContent = (contentIndex) => {
            const contentContainer = document.getElementById('landing-page-content');
            const block1 = document.getElementById('landing-page-block1');
            const block2 = document.getElementById('landing-page-block2');
            block1.classList.add('fade-out-no-delay');
            block2.classList.add('fade-out-no-delay');
            setTimeout(() => {
                contentContainer.innerHTML = `
                    ${authContent.block1[contentIndex]}
                    ${authContent.block2[contentIndex]}
                `;
                // Re-attach event listeners after updating the content
                attachEventListeners();
            }, 1000);
        }

        const attachEventListeners = () => {
            const getStartedButton = document.getElementById('get-started-button');
            const signInSwitchButton = document.getElementById('sign-in-switch-button');
            const signUpSwitchButton = document.getElementById('sign-up-switch-button');

            if (getStartedButton) {
                getStartedButton.addEventListener('click', () => changeContent(1));
            }

            if (signInSwitchButton) {
                signInSwitchButton.addEventListener('click', () => changeContent(2));
            }

            if (signUpSwitchButton) {
                signUpSwitchButton.addEventListener('click', () => changeContent(1));
            }

        }

        attachEventListeners();
        
    }
}

customElements.define('landing-page', LandingPage)