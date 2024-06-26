class Header extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
        <nav id="navbar">
            <div id="site-name">Diary Aplication</div>
            <div id="dark-mode-toggler">
                <div id="toggler-handle">
                    <img src="../assets/icons/sun.svg" alt="">
                    <img class="is-hidden" src="../assets/icons/moon.svg" alt="">
                </div>
            </div>
        </nav>
        `;
        this.setAttribute('class', 'absolute-item')

        const themeTogglerHandle = document.getElementById('toggler-handle');
        const themeTogglerHandleContainer = document.getElementById('dark-mode-toggler');

        themeTogglerHandleContainer.addEventListener('click', () => {
            themeTogglerHandle.classList.toggle('is-bg-black');
            themeTogglerHandle.classList.toggle('clicked-dark-mode'); // move the dark mode handle toggler
            themeTogglerHandle.children[0].classList.toggle('is-hidden'); 
            themeTogglerHandle.children[1].classList.toggle('is-hidden');

        });
    }
}

customElements.define('custom-header', Header)