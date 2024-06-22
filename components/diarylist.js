// Function to get diary entries from local storage
function getDiaryEntries() {
    const entries = localStorage.getItem('diaryEntries');
    return entries ? JSON.parse(entries) : [
        {
            "id": "1",
            "title": "My First Diary",
            "date": "2024-06-21",
            "content": "Today was a great day!"
        },
        {
            "id": "2",
            "title": "Reflecting on the Week",
            "date": "2024-06-22",
            "content": "This week was filled with challenges and achievements."
        },
        // Additional entries as needed
    ];
}

class Diarylist extends HTMLElement {
    constructor() { 
        super();
    }

    connectedCallback() {
        this.setAttribute('id', 'body');
        this.innerHTML = `
            <div id="navigator-bar">
                <div class="navigator-item active"><a href="#">Diary list</a></div>
                <div class="navigator-item"><a href="#">Dashboard</a></div>
            </div>

            <div id="main-content">

                <!-- greeting phrase -->
                <div id="greeting-phrase">
                    <span class="big-phrase">Hello there!</span>
                    <span class="small-phrase">What is on your mind today?</span>
                </div>

                <!-- card area -->
                <div id="diary-card-container"></div>
            </div>
        `;

        const diaryContainer = this.querySelector('#diary-card-container');

        // Get diary entries from local storage
        const diaryEntries = getDiaryEntries();
        console.log(diaryEntries)

        // Loop through each diary entry and create HTML
        diaryEntries.forEach(entry => {
            const diaryCard = document.createElement('div');
            diaryCard.classList.add('diary-card', 'diary-container-item');
            diaryCard.innerHTML = `
                <div class="diary-main-content">
                    <!-- card header -->
                    <div class="header-container">
                        <div class="header-left">
                            <div class="title truncate">${entry.title}</div>
                            <div class="date">${entry.date}</div>
                        </div>
                    </div>

                    <!-- card-content -->
                    <div class="diary-card-content truncate-multiline">
                        ${entry.content}
                    </div>
                </div>

                <div class="header-right">
                    <img class="edit-button" src="./assets/icons/edit.svg" alt="">
                    <img class="delete-button" src="./assets/icons/trash.svg" alt="">
                </div>
            `;
            diaryContainer.appendChild(diaryCard);
        });

        // Add a diary card adder button
        diaryContainer.innerHTML += `
            <div id="diary-card-adder" class="diary-container-item">
                <div id="add-sign">+</div>
            </div>
        `;
    }
}

customElements.define('diary-list', Diarylist);