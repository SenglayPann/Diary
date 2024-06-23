class LandingPage extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        this.innerHTML = `
            <div id="landing-page-bg">
                <div id="landing-page-sheet">
                    <div id="landing-page-content">
                        <div id="landing-page-block1">
                            <div>Welcome to Your Personal Diary</div>
                            <img src="./assets/interactive_graphics/book-with-scetch.png" alt="">
                        </div>

                        <div id="landing-page-block2">
                            <div>this Capture <span>MOMENTS</span>, Share <span>MEMORIES</span>, and Reflect on Your <span>JOURNEY </span>!</div>
                            <button><a href="./pages/diary-list.html">GET STARTED</a></button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('landing-page', LandingPage)