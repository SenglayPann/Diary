class CustomFooter extends HTMLElement {
    constructor() {
        super();
    };

    connectedCallback() {
        this.innerHTML = `
            <div id="footer">
                <div id="author">
                    ©copyright <a href="https://www.facebook.com/ZOD369">Senglay Pann</a>@2024
                </div>
                <div id="og-slider-container">
                    <div id="og-slider">
                        <img id="emcast" src="../assets/oganizatiion/emcast.webp" alt="emcast">
                        <img id="abnshcool" src="../assets/oganizatiion/AboveBeyond.webp" alt="abnshcool">
                    </div>
                </div>
            </div>
        `;

        const slider = document.getElementById('og-slider');

        setInterval(() => {
            const images = slider.getElementsByTagName('img');
            if (images.length > 0) {
                const lastImage = images[images.length - 1];
                slider.removeChild(lastImage);
                slider.insertBefore(lastImage, images[0]);

                // Reapply the animation class
                lastImage.classList.remove('slider-fade-in');
                void lastImage.offsetWidth; // Trigger reflow
                lastImage.classList.add('slider-fade-in');
            }
        }, 3000);

        const emcastImage = document.getElementById('emcast');
        const abnshcoolImage = document.getElementById('abnshcool');

        emcastImage.addEventListener('click', () => {
            window.open('http://emcast.com/', '_blank');
        });

        abnshcoolImage.addEventListener('click', () => {
            window.open('https://anbschool.org/', '_blank');
        });
    };
};

customElements.define('custom-footer', CustomFooter);
