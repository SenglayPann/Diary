// Helper function to calculate the number of diary entries in a specific period
export const calculateDiaryCounts = (diaryEntries) => {
    const totalDiaries = diaryEntries.length;

    const now = new Date();
    const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    let diariesThisWeek = 0;
    let diariesThisMonth = 0;

    diaryEntries.forEach(entry => {
        const entryDate = new Date(entry.date);
        if (entryDate >= startOfWeek) {
            diariesThisWeek++;
        }
        if (entryDate >= startOfMonth) {
            diariesThisMonth++;
        }
    });

    return { totalDiaries, diariesThisWeek, diariesThisMonth };
};