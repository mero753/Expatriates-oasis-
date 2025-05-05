// إظهار نموذج إضافة قصة جديدة
document.getElementById('addStoryBtn').addEventListener('click', function() {
    document.getElementById('storyForm').style.display = 'block';
    this.style.display = 'none';
});

// إخفاء نموذج إضافة قصة جديدة
function hideStoryForm() {
    document.getElementById('storyForm').style.display = 'none';
    document.getElementById('addStoryBtn').style.display = 'inline-flex';
    document.getElementById('newStoryForm').reset();
}

// إضافة قصة جديدة
function submitStory(event) {
    event.preventDefault();
    
    const story = {
        name: document.getElementById('storyName').value,
        country: document.getElementById('storyCountry').value,
        background: document.getElementById('storyBackground').value,
        migration: document.getElementById('storyMigration').value,
        success: document.getElementById('storySuccess').value,
        link: document.getElementById('storyLink').value,
        id: Date.now() // معرف فريد للقصة
    };

    // حفظ القصة في localStorage
    let stories = JSON.parse(localStorage.getItem('userStories') || '[]');
    stories.push(story);
    localStorage.setItem('userStories', JSON.stringify(stories));

    // إضافة القصة إلى الصفحة
    addStoryToPage(story);

    // إخفاء النموذج وإعادة تعيينه
    hideStoryForm();
}

// إضافة قصة إلى الصفحة
function addStoryToPage(story) {
    const storiesGrid = document.querySelector('.stories-grid');
    const storyCard = document.createElement('div');
    storyCard.className = 'story-card';
    storyCard.dataset.id = story.id;

    storyCard.innerHTML = `
        <div class="story-header">
            <h2>${story.name}</h2>
            <span class="story-country">${story.country}</span>
            <button onclick="deleteStory(${story.id})" class="delete-story-btn">
                <i class="fas fa-trash"></i>
            </button>
        </div>
        <div class="story-content">
            <p class="story-background"><strong>الخلفية:</strong> ${story.background}</p>
            <p class="story-migration"><strong>الهجرة:</strong> ${story.migration}</p>
            <p class="story-success"><strong>النجاح:</strong> ${story.success}</p>
            ${story.link ? `<a href="${story.link}" target="_blank" class="story-link">اقرأ المزيد</a>` : ''}
        </div>
    `;

    storiesGrid.insertBefore(storyCard, storiesGrid.firstChild);
}

// حذف قصة
function deleteStory(storyId) {
    if (!confirm('هل أنت متأكد من حذف هذه القصة؟')) return;

    // حذف القصة من localStorage
    let stories = JSON.parse(localStorage.getItem('userStories') || '[]');
    stories = stories.filter(story => story.id !== storyId);
    localStorage.setItem('userStories', JSON.stringify(stories));

    // حذف القصة من الصفحة
    const storyCard = document.querySelector(`.story-card[data-id="${storyId}"]`);
    if (storyCard) {
        storyCard.remove();
    }
}

// تحميل القصص المحفوظة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    const stories = JSON.parse(localStorage.getItem('userStories') || '[]');
    stories.forEach(story => addStoryToPage(story));
}); 