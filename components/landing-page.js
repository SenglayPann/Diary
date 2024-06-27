class LandingPage extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        // A function to retrieve custom local storage name
        const retrieveStorage = (storageName) => {
            return JSON.parse(localStorage.getItem(storageName)) || [];
        }

        // A function to save data to custom local storage
        const updateStorage = (storageName, data) => {
            localStorage.setItem(storageName, JSON.stringify(data));
        }

        const isAuth = JSON.parse(localStorage.getItem('currentAuth')) || {
            loggedIn: false,
            userName: null
        }.loggedIn;

        if (isAuth === true) {
            window.location.href = './pages/content.html';
        } else {

            const authContent = {
                'block1': [
                    `
                        <div>Welcome to Your Personal Diary</div>
                        <img src="./assets/interactive_graphics/book-with-scetch.png" alt="">
                    `,
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
                'block2': [
                    `   
                        <div>Capture <span>MOMENTS</span>, Share <span>MEMORIES</span>, and Reflect on Your <span>JOURNEY</span>!</div>
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
    
            // A function to change content of the landing page
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
    
            // A function that considers which function to attach with the current content
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

                // Attach event listeners after content is updated
                setTimeout(() => {
                    setupSignIn();
                    setupSignUp();
                }, 0);
            }
    
            // A function to set up sign-up
            const setupSignUp = () => {
                const signUpButton = document.getElementById('sign-up-button');
                if (signUpButton) {
                    signUpButton.addEventListener('click', function () {
                        const username = document.getElementById('username').value;
                        const password = document.getElementById('password').value;
                        const confirmPassword = document.getElementById('confirm-password').value;
    
                        // Check if any field is empty
                        if (!username || !password || !confirmPassword) {
                            alert('All fields are required. Please fill in all the fields.');
                            return;
                        }
    
                        // Retrieve the existing profile array from local storage
                        let profile = retrieveStorage('profile');
    
                        // Check if the username or password is already taken
                        const isUsernameTaken = profile.some(user => user.user === username);
    
                        if (isUsernameTaken) {
                            alert('Username is already taken. Please choose another one.');
                            return;
                        }
    
                        if (password === confirmPassword) {
                            // Create a new user object
                            const newUser = {
                                user: username,
                                password: password
                            };
    
                            // Add the new user object to the profile array
                            profile.push(newUser);
    
                            // Save the updated profile array to local storage
                            updateStorage('profile', profile);
    
                            // Set the currentAuth object in local storage
                            const currentAuth = {
                                loggedIn: true,
                                userName: username
                            };
    
                            updateStorage('currentAuth', currentAuth)
    
                            // Redirect to the diary list page
                            window.location.href = './pages/content.html';
                        } else {
                            alert('Passwords do not match. Please try again.');
                        }
                    });
                }
            }

            // A function to set up sign-in
            const setupSignIn = () => {
                const signInButton = document.getElementById('sign-in-button');
                if (signInButton) {
                    signInButton.addEventListener('click', function () {
                        const username = document.getElementById('username').value;
                        const password = document.getElementById('password').value;
    
                        // Check if any field is empty
                        if (!username || !password) {
                            alert('All fields are required. Please fill in all the fields.');
                            return;
                        }
    
                        if (verifyUser(username, password)) {
                            // Set the currentAuth object in local storage
                            const currentAuth = {
                                loggedIn: true,
                                userName: username
                            };
    
                            updateStorage('currentAuth', currentAuth);
    
                            // Redirect to the diary list page
                            window.location.href = './pages/content.html';
                        } else {
                            alert('Invalid username or password. Please try again.');
                        }
                    });
                }
            }

            // A function to verify if the username and password exist in local storage
            const verifyUser = (username, password) => {
                const profile = retrieveStorage('profile');
                return profile.some(user => user.user === username && user.password === password);
            }
    
            attachEventListeners();
        }
    }
}

customElements.define('landing-page', LandingPage);
