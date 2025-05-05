// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    themeToggle.textContent = savedTheme === 'dark-theme' ? '🌞' : '🌓';
}

// Theme toggle function
function toggleDarkMode() {
    const isDarkMode = body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDarkMode ? 'dark-theme' : '');
    themeToggle.textContent = isDarkMode ? '🌞' : '🌓';
}

// Add event listener for theme toggle
if (themeToggle) {
    themeToggle.addEventListener('click', toggleDarkMode);
}

// التحقق من حالة تسجيل الدخول
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const username = localStorage.getItem('username');
    const authButtons = document.getElementById('authButtons');
    const userProfile = document.getElementById('userProfile');
    const userNameSpan = document.getElementById('userName');

    if (isLoggedIn && username) {
        if (authButtons) authButtons.style.display = 'none';
        if (userProfile) {
            userProfile.style.display = 'flex';
            if (userNameSpan) {
                userNameSpan.textContent = `Hello ${username}`;
            }
        }
    } else {
        if (authButtons) authButtons.style.display = 'flex';
        if (userProfile) userProfile.style.display = 'none';
    }
}

// تبديل الوضع المظلم
function toggleDarkMode() {
    document.body.classList.toggle('dark-theme');
    const isDarkMode = document.body.classList.contains('dark-theme');
    localStorage.setItem('darkMode', isDarkMode);
}

// تسجيل الخروج
function logout() {
    // حذف بيانات المستخدم من localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    localStorage.removeItem('currentUser');
    
    // تحديث واجهة المستخدم
    const authButtons = document.getElementById('authButtons');
    const userProfile = document.getElementById('userProfile');
    
    if (authButtons) authButtons.style.display = 'flex';
    if (userProfile) userProfile.style.display = 'none';
    
    // إعادة تحميل الصفحة
    window.location.reload();
}

// تحميل الوضع المظلم المحفوظ
function loadDarkMode() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-theme');
    }
}

// دالة للتحقق من تسجيل الدخول
function checkAuth(page) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        // المستخدم مسجل دخوله، انتقل إلى الصفحة المطلوبة
        window.location.href = page;
    } else {
        // المستخدم غير مسجل دخوله، انتقل إلى صفحة تسجيل الدخول
        window.location.href = 'login.html';
    }
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Interactive Map Initialization
function initMap() {
    const mapContainer = document.getElementById('map');
    if (mapContainer) {
        const map = L.map(mapContainer).setView([30.0444, 31.2357], 5); // مركز الخريطة على الشرق الأوسط
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // إضافة علامات (Markers) لمنظمات الدعم
        const organizations = [
            { name: 'منظمة الدعم النفسي - مصر', coords: [30.0444, 31.2357] },
            { name: 'مركز المساعدة النفسية - الأردن', coords: [31.9566, 35.9457] },
            { name: 'جمعية الأمل - لبنان', coords: [33.8938, 35.5018] },
            { name: 'مؤسسة الحياة الجديدة - تركيا', coords: [39.9208, 32.8541] }
        ];

        organizations.forEach(org => {
            L.marker(org.coords).addTo(map).bindPopup(`<b>${org.name}</b>`);
        });
    }
}

// Quick Assessment Form
function handleAssessment(event) {
    event.preventDefault();
    const answers = Array.from(document.querySelectorAll('.assessment-question input:checked')).map(input => input.value);
    console.log('Assessment answers:', answers);

    // Example: Display a simple result
    const resultContainer = document.getElementById('assessment-result');
    if (resultContainer) {
        resultContainer.textContent = 'شكراً لإجابتك! بناءً على إجاباتك، ننصحك بالتواصل مع مختص.';
    }
}

// Story Loading
async function loadStories() {
    try {
        const storiesContainer = document.querySelector('.stories-container');
        if (storiesContainer) {
            const stories = [
                { title: 'قصة نجاح 1', content: 'بعد سنوات من الغربة، استطعت بناء حياة جديدة مليئة بالأمل.', author: 'أحمد' },
                { title: 'قصة نجاح 2', content: 'تجربتي في التأقلم مع ثقافة جديدة كانت مليئة بالتحديات، ولكنها كانت تجربة تعليمية رائعة.', author: 'سارة' },
                { title: 'قصة نجاح 3', content: 'الدعم الذي حصلت عليه من واحة المغتربين ساعدني على تجاوز أصعب الأوقات.', author: 'ليلى' }
            ];

            stories.forEach(story => {
                const storyCard = document.createElement('div');
                storyCard.className = 'story-card';
                storyCard.innerHTML = `
                    <h3>${story.title}</h3>
                    <p>${story.content}</p>
                    <span>بقلم: ${story.author}</span>
                `;
                storiesContainer.appendChild(storyCard);
            });
        }
    } catch (error) {
        console.error('Error loading stories:', error);
    }
}

// Login Form Handler
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        try {
            // تخزين بيانات المستخدم
            localStorage.setItem('username', username);
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('currentUser', JSON.stringify({
                username: username,
                isLoggedIn: true
            }));
            
            // تحديث حالة تسجيل الدخول
            checkLoginStatus();
            
            // إعادة التوجيه إلى الصفحة الرئيسية
            window.location.href = 'index.html';
        } catch (error) {
            console.error('Login error:', error);
        }
    });
}

// Mock Login Function
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple mock authentication
    if (email && password) {
        // Store mock user data
        localStorage.setItem('user', JSON.stringify({
            name: 'زائر',
            email: email,
            isLoggedIn: true
        }));
        
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
    }
}

// Dashboard Initialization
function initDashboard() {
    const aiChatBox = document.querySelector('.ai-chat');
    const assessmentBox = document.querySelector('.assessment');
    
    if (aiChatBox) {
        // Initialize AI chat functionality
        initAIChat();
    }
    
    if (assessmentBox) {
        // Initialize assessment functionality
        initAssessment();
    }
}

// AI Chat Implementation
function initAIChat() {
    // AI chat implementation
    console.log('AI Chat initialized');
}

// Assessment Implementation
function initAssessment() {
    // Assessment implementation
    console.log('Assessment initialized');
}

// Stats Counter Animation
function animateStats() {
    const statItems = document.querySelectorAll('.stat-item');

    statItems.forEach(item => {
        const statNumber = item.querySelector('.stat-number');
        const target = parseInt(statNumber.dataset.count);
        let current = 0;
        const increment = Math.ceil(target / 100); // Increment value

        function updateCounter() {
            current += increment;
            if (current > target) current = target;
            statNumber.textContent = current;

            if (current < target) {
                setTimeout(updateCounter, 20); // Smooth animation
            }
        }

        updateCounter();
    });
}

// Dynamic Stats Update
function updateDynamicStats() {
    const stats = [
        { id: 'expats-helped', incrementMin: 10, incrementMax: 50, interval: 1000, type: 'increase' },
        { id: 'stories-shared', incrementMin: 10, incrementMax: 50, interval: 1000, type: 'increase' },
        { id: 'active-users', min: 0, max: 250, interval: 1000, type: 'random' }
    ];

    stats.forEach(stat => {
        const element = document.getElementById(stat.id);
        if (element) {
            let currentValue = parseInt(element.textContent) || 0;

            setInterval(() => {
                if (stat.type === 'increase') {
                    const increment = Math.floor(Math.random() * (stat.incrementMax - stat.incrementMin + 1)) + stat.incrementMin;
                    currentValue += increment;
                } else if (stat.type === 'random') {
                    currentValue = Math.floor(Math.random() * (stat.max - stat.min + 1)) + stat.min;
                }
                element.textContent = currentValue;
            }, stat.interval);
        }
    });
}

// Initialize Testimonials Carousel
function initTestimonialsCarousel() {
    // Replace with your carousel initialization code
    console.log('Initializing testimonials carousel...');
}

// إدارة حالة اللغة
let currentLanguage = 'ar';
const languageToggle = document.getElementById('languageToggle');
const currentLangSpan = document.querySelector('.current-lang');

// تحديث اسم المستخدم عند تسجيل الدخول
function updateUserProfile() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const authButtons = document.getElementById('authButtons');
    const userProfile = document.getElementById('userProfile');
    const userName = document.getElementById('userName');

    if (user) {
        authButtons.style.display = 'none';
        userProfile.style.display = 'flex';
        userName.textContent = `Hello ${user.username}`;
    } else {
        authButtons.style.display = 'flex';
        userProfile.style.display = 'none';
    }
}

// تبديل اللغة
function toggleLanguage() {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    currentLangSpan.textContent = currentLanguage === 'ar' ? 'عربي' : 'English';
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    
    // هنا يمكن إضافة ترجمة النصوص
    translatePage();
}

// ترجمة النصوص في الصفحة
function translatePage() {
    const translations = {
        ar: {
            'welcome': 'مرحباً بك في واحتك',
            'services': 'خدماتنا',
            'about': 'عن الواحة',
            'login': 'تسجيل دخول',
            'register': 'حساب جديد',
            'logout': 'تسجيل خروج',
            'assessment': 'التقييم النفسي',
            'organizations': 'منظمات الدعم',
            'stories': 'قصص ملهمة',
            'home': 'الرئيسية',
            'hero-title': 'مرحباً بك في واحتك',
            'hero-subtitle': 'نقدم الدعم النفسي والإرشاد للمغتربين في جميع أنحاء العالم',
            'about-title': 'عن الواحة',
            'about-text': 'واحة المغتربين هي منصة تهدف إلى تقديم الدعم النفسي والاجتماعي للمغتربين في جميع أنحاء العالم. نحن نؤمن بأن الصحة النفسية هي أساس النجاح والتأقلم في أي مكان جديد.',
            'feature-1': 'دعم نفسي على مدار الساعة',
            'feature-2': 'تقييم شامل للحالة النفسية',
            'feature-3': 'منظمات دعم محلية',
            'feature-4': 'قصص نجاح ملهمة',
            'footer-text': 'جميع الحقوق محفوظة',
            'assessment-desc': 'تقييم نفسي شامل لمساعدتك في فهم حالتك النفسية',
            'organizations-desc': 'اعثر على منظمات الدعم في بلدك وتواصل معهم بسهولة.',
            'stories-desc': 'قصص نجاح ملهمة من مغتربين حول العالم',
            'read-stories': 'اقرأ القصص',
            'logo': 'واحة المغتربين',
            'site-title': 'واحة المغتربين - الدعم النفسي للمغتربين',
            'current-lang': 'عربي',
            'welcome-user': 'مرحباً',

            'assessment-title': 'التقييم النفسي',
            'assessment-intro': 'هذا التقييم سيساعدك في فهم حالتك النفسية بشكل أفضل',
            'start-assessment': 'ابدأ التقييم',
            'next-question': 'السؤال التالي',
            'previous-question': 'السؤال السابق',
            'submit-assessment': 'إرسال التقييم',
            'assessment-result': 'نتيجة التقييم',
            'recommendations': 'التوصيات',
            'emergency-contact': 'اتصل بنا في حالة الطوارئ',
            'mild-symptoms': 'أعراض خفيفة',
            'moderate-symptoms': 'أعراض متوسطة',
            'severe-symptoms': 'أعراض شديدة',
            'seek-help': 'نوصي بطلب المساعدة من مختص',
            'self-care': 'نصائح للعناية الذاتية',
            'assessment-complete': 'تم إكمال التقييم',
            'assessment-score': 'النتيجة',
            'assessment-level': 'مستوى الأعراض',
            'assessment-details': 'تفاصيل التقييم',
            'assessment-recommendations': 'التوصيات',
            'assessment-treatment': 'خطة العلاج',
            'assessment-follow-up': 'المتابعة',
            'assessment-resources': 'الموارد المتاحة',
            'assessment-contact': 'تواصل معنا',
            'assessment-save': 'حفظ النتيجة',
            'assessment-print': 'طباعة التقرير',
            'assessment-share': 'مشاركة النتيجة',
            'assessment-feedback': 'ملاحظاتك',
            'assessment-thank': 'شكراً لإكمال التقييم',
            'assessment-disclaimer': 'هذا التقييم لا يغني عن استشارة المختص',
            'assessment-privacy': 'جميع البيانات محفوظة بسرية تامة',
            'assessment-crisis': 'في حالة الأزمة، اتصل بنا فوراً',
            'assessment-crisis-number': 'رقم الطوارئ',
            'assessment-crisis-hours': 'متاح على مدار الساعة',
            'assessment-crisis-languages': 'متوفر باللغتين العربية والإنجليزية',
            'assessment-crisis-confidential': 'جميع المكالمات سرية',
            'assessment-crisis-free': 'خدمة مجانية',
            'assessment-crisis-professional': 'فريق متخصص',
            'assessment-crisis-support': 'دعم نفسي فوري',
            'assessment-crisis-referral': 'إحالة للمختصين',
            'assessment-crisis-follow-up': 'متابعة مستمرة',
            'assessment-crisis-resources': 'موارد إضافية',
            'assessment-crisis-community': 'مجتمع داعم',
            'assessment-crisis-education': 'توعية نفسية',
            'assessment-crisis-prevention': 'وقاية من الأزمات',
            'assessment-crisis-recovery': 'دعم التعافي',
            'assessment-crisis-wellbeing': 'تعزيز الصحة النفسية',

            'story-title': 'قصص ملهمة',
            'share-story': 'شارك قصتك',
            'story-form-title': 'عنوان القصة',
            'story-form-content': 'محتوى القصة',
            'story-form-author': 'اسمك',
            'submit-story': 'إرسال القصة',
            'delete-story': 'حذف القصة',
            'edit-story': 'تعديل القصة',
            'no-stories': 'لا توجد قصص حالياً',
            'story-success': 'تم إضافة قصتك بنجاح',
            'story-error': 'حدث خطأ أثناء إضافة القصة',

            'org-title': 'منظمات الدعم',
            'org-search': 'ابحث عن منظمات في بلدك',
            'org-contact': 'تواصل مع المنظمة',
            'org-address': 'العنوان',
            'org-phone': 'رقم الهاتف',
            'org-email': 'البريد الإلكتروني',
            'org-website': 'الموقع الإلكتروني',
            'org-services': 'الخدمات المقدمة',
            'org-hours': 'ساعات العمل',
            'org-location': 'الموقع',
            'org-description': 'وصف المنظمة',
            'story-1-title': 'رحلة التكيف في ألمانيا',
            'story-1-content': 'قصة أحمد الذي نجح في التكيف مع الحياة في ألمانيا رغم التحديات اللغوية والثقافية...',
            'story-1-author': 'أحمد محمد',
            'story-1-date': '15 مارس 2024',
            'story-2-title': 'تحديات العمل في كندا',
            'story-2-content': 'تجربة سارة في البحث عن عمل وتأسيس حياة جديدة في كندا...',
            'story-2-author': 'سارة أحمد',
            'story-2-date': '10 مارس 2024',
            'story-3-title': 'الدراسة في أستراليا',
            'story-3-content': 'محمد يشارك تجربته في الدراسة والعيش في أستراليا...',
            'story-3-author': 'محمد علي',
            'story-3-date': '5 مارس 2024',
            'story-4-title': 'بداية جديدة في السويد',
            'story-4-content': 'قصة ليلى في بداية حياتها الجديدة في السويد...',
            'story-4-author': 'ليلى محمود',
            'story-4-date': '1 مارس 2024',
            'story-5-title': 'التكيف مع الحياة في هولندا',
            'story-5-content': 'عمر يروي تجربته في التكيف مع الحياة والعمل في هولندا...',
            'story-5-author': 'عمر خالد',
            'story-5-date': '25 فبراير 2024',
            'story-6-title': 'رحلة النجاح في فرنسا',
            'story-6-content': 'نورا تشارك قصة نجاحها في فرنسا...',
            'story-6-author': 'نورا حسن',
            'story-6-date': '20 فبراير 2024',
            'story-form-title': 'عنوان القصة',
            'story-form-content': 'محتوى القصة',
            'story-form-author': 'اسم الكاتب',
            'submit-story': 'إرسال القصة',
            'story-success': 'تم إرسال قصتك بنجاح!',
            'story-error': 'حدث خطأ أثناء إرسال القصة. يرجى المحاولة مرة أخرى.'
        },
        en: {
            'welcome': 'Welcome to Your Oasis',
            'services': 'Our Services',
            'about': 'About Us',
            'login': 'Login',
            'register': 'Register',
            'logout': 'Logout',
            'assessment': 'Mental Health Assessment',
            'organizations': 'Support Organizations',
            'stories': 'Inspiring Stories',
            'home': 'Home',
            'hero-title': 'Welcome to Your Oasis',
            'hero-subtitle': 'We provide psychological support and guidance for expatriates around the world',
            'about-title': 'About Us',
            'about-text': 'Oasis of Expatriates is a platform aimed at providing psychological and social support for expatriates around the world. We believe that mental health is the foundation of success and adaptation in any new place.',
            'feature-1': '24/7 Psychological Support',
            'feature-2': 'Comprehensive Mental Health Assessment',
            'feature-3': 'Local Support Organizations',
            'feature-4': 'Inspiring Success Stories',
            'footer-text': 'All Rights Reserved',
            'assessment-desc': 'Comprehensive psychological assessment to help you understand your mental state',
            'organizations-desc': 'Find support organizations in your country and contact them easily.',
            'stories-desc': 'Inspiring success stories from expatriates around the world',
            'read-stories': 'Read Stories',
            'logo': 'Oasis of Expatriates',
            'site-title': 'Oasis of Expatriates - Psychological Support for Expatriates',
            'current-lang': 'English',
            'welcome-user': 'Welcome',

            'assessment-title': 'Mental Health Assessment',
            'assessment-intro': 'This assessment will help you better understand your mental state',
            'start-assessment': 'Start Assessment',
            'next-question': 'Next Question',
            'previous-question': 'Previous Question',
            'submit-assessment': 'Submit Assessment',
            'assessment-result': 'Assessment Results',
            'recommendations': 'Recommendations',
            'emergency-contact': 'Emergency Contact',
            'mild-symptoms': 'Mild Symptoms',
            'moderate-symptoms': 'Moderate Symptoms',
            'severe-symptoms': 'Severe Symptoms',
            'seek-help': 'We recommend seeking professional help',
            'self-care': 'Self-Care Tips',
            'assessment-complete': 'Assessment Complete',
            'assessment-score': 'Score',
            'assessment-level': 'Symptom Level',
            'assessment-details': 'Assessment Details',
            'assessment-recommendations': 'Recommendations',
            'assessment-treatment': 'Treatment Plan',
            'assessment-follow-up': 'Follow-up',
            'assessment-resources': 'Available Resources',
            'assessment-contact': 'Contact Us',
            'assessment-save': 'Save Results',
            'assessment-print': 'Print Report',
            'assessment-share': 'Share Results',
            'assessment-feedback': 'Your Feedback',
            'assessment-thank': 'Thank you for completing the assessment',
            'assessment-disclaimer': 'This assessment is not a substitute for professional consultation',
            'assessment-privacy': 'All data is kept strictly confidential',
            'assessment-crisis': 'In case of crisis, contact us immediately',
            'assessment-crisis-number': 'Emergency Number',
            'assessment-crisis-hours': 'Available 24/7',
            'assessment-crisis-languages': 'Available in Arabic and English',
            'assessment-crisis-confidential': 'All calls are confidential',
            'assessment-crisis-free': 'Free service',
            'assessment-crisis-professional': 'Professional team',
            'assessment-crisis-support': 'Immediate psychological support',
            'assessment-crisis-referral': 'Referral to specialists',
            'assessment-crisis-follow-up': 'Continuous follow-up',
            'assessment-crisis-resources': 'Additional resources',
            'assessment-crisis-community': 'Supportive community',
            'assessment-crisis-education': 'Psychological awareness',
            'assessment-crisis-prevention': 'Crisis prevention',
            'assessment-crisis-recovery': 'Recovery support',
            'assessment-crisis-wellbeing': 'Mental health promotion',

            'story-title': 'Inspiring Stories',
            'share-story': 'Share Your Story',
            'story-form-title': 'Story Title',
            'story-form-content': 'Story Content',
            'story-form-author': 'Your Name',
            'submit-story': 'Submit Story',
            'delete-story': 'Delete Story',
            'edit-story': 'Edit Story',
            'no-stories': 'No stories available',
            'story-success': 'Your story has been submitted successfully!',
            'story-error': 'An error occurred while submitting your story. Please try again.',

            'org-title': 'Support Organizations',
            'org-search': 'Search for organizations in your country',
            'org-contact': 'Contact Organization',
            'org-address': 'Address',
            'org-phone': 'Phone Number',
            'org-email': 'Email',
            'org-website': 'Website',
            'org-services': 'Services Provided',
            'org-hours': 'Working Hours',
            'org-location': 'Location',
            'org-description': 'Organization Description',
            'story-1-title': 'Adaptation Journey in Germany',
            'story-1-content': 'The story of Ahmed who successfully adapted to life in Germany despite language and cultural challenges...',
            'story-1-author': 'Ahmed Mohamed',
            'story-1-date': 'March 15, 2024',
            'story-2-title': 'Work Challenges in Canada',
            'story-2-content': 'Sarah\'s experience in finding work and establishing a new life in Canada...',
            'story-2-author': 'Sarah Ahmed',
            'story-2-date': 'March 10, 2024',
            'story-3-title': 'Studying in Australia',
            'story-3-content': 'Mohamed shares his experience studying and living in Australia...',
            'story-3-author': 'Mohamed Ali',
            'story-3-date': 'March 5, 2024',
            'story-4-title': 'New Beginning in Sweden',
            'story-4-content': 'Layla\'s story of starting her new life in Sweden...',
            'story-4-author': 'Layla Mahmoud',
            'story-4-date': 'March 1, 2024',
            'story-5-title': 'Adapting to Life in Netherlands',
            'story-5-content': 'Omar tells his experience adapting to life and work in the Netherlands...',
            'story-5-author': 'Omar Khalid',
            'story-5-date': 'February 25, 2024',
            'story-6-title': 'Success Journey in France',
            'story-6-content': 'Nora shares her success story in France...',
            'story-6-author': 'Nora Hassan',
            'story-6-date': 'February 20, 2024',
            'story-form-title': 'Story Title',
            'story-form-content': 'Story Content',
            'story-form-author': 'Author Name',
            'submit-story': 'Submit Story',
            'story-success': 'Your story has been submitted successfully!',
            'story-error': 'An error occurred while submitting your story. Please try again.'
        }
    };

    // تحديث النصوص في الصفحة
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });

    // تحديث عنوان الصفحة
    document.title = translations[currentLanguage]['site-title'];

    // تحديث الشعار
    const logo = document.querySelector('.logo');
    if (logo) logo.textContent = translations[currentLanguage]['logo'];

    // تحديث النصوص في عناصر أخرى
    const heroTitle = document.querySelector('.hero-content h1');
    const heroSubtitle = document.querySelector('.hero-content p');
    const aboutTitle = document.querySelector('#about h2');
    const aboutText = document.querySelector('#about p');
    const features = document.querySelectorAll('#about ul li');
    const footerText = document.querySelector('.footer p');
    const currentLangSpan = document.querySelector('.current-lang');
    const userName = document.getElementById('userName');

    if (heroTitle) heroTitle.textContent = translations[currentLanguage]['hero-title'];
    if (heroSubtitle) heroSubtitle.textContent = translations[currentLanguage]['hero-subtitle'];
    if (aboutTitle) aboutTitle.textContent = translations[currentLanguage]['about-title'];
    if (aboutText) aboutText.textContent = translations[currentLanguage]['about-text'];
    if (footerText) footerText.textContent = `© 2025 ${translations[currentLanguage]['logo']}. ${translations[currentLanguage]['footer-text']}`;
    if (currentLangSpan) currentLangSpan.textContent = translations[currentLanguage]['current-lang'];
    if (userName) {
        const username = localStorage.getItem('username');
        if (username) {
            userName.textContent = `Hello ${username}`;
        }
    }

    features.forEach((feature, index) => {
        feature.textContent = translations[currentLanguage][`feature-${index + 1}`];
    });

    // تحديث اتجاه الصفحة
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;

    // حفظ اللغة المختارة
    localStorage.setItem('language', currentLanguage);
}

// إضافة مستمعي الأحداث
document.addEventListener('DOMContentLoaded', () => {
    updateUserProfile();
    languageToggle.addEventListener('click', toggleLanguage);
    checkLoginStatus();
    
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (window.location.pathname.includes('dashboard')) {
        initDashboard();
    }
    
    // Initialize core components
    loadStories();
    initMap();
    animateStats();
    updateDynamicStats();
    initTestimonialsCarousel();
    
    // Add scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    document.querySelectorAll('.feature-card, .section-title').forEach((el) => observer.observe(el));

    // زر تبديل الوضع المظلم
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleDarkMode);
    }
});
