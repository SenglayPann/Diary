export const addDiaryCardsEventListener = () => {
    const diaryCards = document.getElementsByClassName('diary-card');
    Array.from(diaryCards).forEach(card => {
        const diaryContent = card.querySelector('.diary-card-content')
        card.addEventListener('click', () => {
            card.classList.toggle('diary-container-item-full');
            diaryContent.classList.toggle('truncate-multiline');
        });
    });
};