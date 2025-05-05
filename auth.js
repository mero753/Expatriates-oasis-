// Firebase configuration
const firebaseConfig = {
    // قم بوضع إعدادات Firebase الخاصة بك هنا
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// دالة لعرض رسالة النجاح
function showSuccessMessage(message) {
    const notification = document.createElement('div');
    notification.className = 'success-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <p>${message}</p>
        </div>
    `;
    document.body.appendChild(notification);

    // إخفاء الرسالة بعد 3 ثواني
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// دالة تسجيل الدخول
function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // التحقق من وجود المستخدم
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // حفظ بيانات المستخدم الحالي
        localStorage.setItem('currentUser', JSON.stringify({
            username: user.username,
            name: user.name
        }));

        // عرض رسالة النجاح
        showSuccessMessage('تم تسجيل الدخول بنجاح!');
        
        // توجيه المستخدم إلى الصفحة الرئيسية
        window.location.href = 'index.html';
    } else {
        alert('اسم المستخدم أو كلمة المرور غير صحيحة');
    }
}

// دالة إنشاء حساب جديد
function handleRegister(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;

    // التحقق من البيانات
    if (!username || !password || !name) {
        alert('من فضلك أدخل جميع البيانات المطلوبة');
        return;
    }

    // التحقق من أن اسم المستخدم غير مستخدم
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(user => user.username === username)) {
        alert('اسم المستخدم مستخدم بالفعل');
        return;
    }

    // حفظ بيانات المستخدم الجديد
    const newUser = {
        username,
        password,
        name,
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // تسجيل الدخول تلقائياً
    localStorage.setItem('currentUser', JSON.stringify({
        username: newUser.username,
        name: newUser.name
    }));

    // عرض رسالة النجاح
    showSuccessMessage('تم إنشاء الحساب بنجاح!');
    
    // توجيه المستخدم إلى الصفحة الرئيسية
    window.location.href = 'index.html';
}
