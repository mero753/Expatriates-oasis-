// js/assessment-diff.js

// تعريف الأعراض لكل اضطراب (نفس ترتيب ids في التقييم)
const disorderSymptomsText = {
    depression: [
        'حزن مستمر أو شعور باليأس',
        'فقدان الاهتمام بالأنشطة التي كنت تستمتع بها',
        'إرهاق أو صعوبة في التركيز',
        'أفكار عن الموت أو الانتحار'
    ],
    anxiety: [
        'قلق مفرط يصعب التحكم فيه',
        'توتر أو تهيج أو توتر عضلي',
        'نوبات هلع (خوف مفاجئ، تسارع ضربات القلب، تعرق، رعشة)',
        'صعوبة في النوم بسبب القلق'
    ],
    ptsd: [
        'كوابيس متكررة أو ذكريات مؤلمة',
        'تجنب الأماكن أو الأشخاص الذين يذكرونك بأحداث مؤلمة',
        'الشعور بالتوتر المستمر وسهولة الخوف',
        'خدر عاطفي أو انفصال عن الآخرين'
    ],
    grief: [
        'شوق شديد لأحد الأحباء المفقودين',
        'صعوبة في تقبل الفقد',
        'الشعور بأن الحياة بلا معنى'
    ],
    // أضف بقية الاضطرابات هنا إذا أردت
};

// جلب المرضين من localStorage (مثلاً: depression, anxiety)
const diffDisorders = JSON.parse(localStorage.getItem('diffDisorders') || '[]');

const diffQuestion = document.getElementById('diffQuestion');
const diffOptions = document.getElementById('diffOptions');

if (diffDisorders.length === 2) {
    // رسالة توضيحية
    diffQuestion.innerHTML = `يرجى اختيار أكثر <b>3 أعراض</b> تشعر بها من القائمة التالية، حتى نحدد التشخيص الأقرب لحالتك.`;
    // جمع الأعراض مع تمييز كل عرض لأي اضطراب
    let allSymptoms = [];
    diffDisorders.forEach(dis => {
        (disorderSymptomsText[dis] || []).forEach(sym => {
            allSymptoms.push({ text: sym, disorder: dis });
        });
    });
    // إزالة التكرار
    allSymptoms = allSymptoms.filter((v,i,a) => a.findIndex(t=>(t.text === v.text))===i);
    // عرض الأعراض كمربعات اختيار
    allSymptoms.forEach((sym, idx) => {
        const label = document.createElement('label');
        label.style.display = 'block';
        label.style.margin = '0.7rem 0';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = sym.disorder;
        checkbox.className = 'diff-symptom-checkbox';
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(' ' + sym.text));
        diffOptions.appendChild(label);
    });
    // زر التأكيد
    const btn = document.createElement('button');
    btn.textContent = 'تأكيد الاختيار';
    btn.className = 'diff-btn';
    btn.onclick = function() {
        const checked = Array.from(document.querySelectorAll('.diff-symptom-checkbox:checked'));
        if (checked.length !== 3) {
            alert('يرجى اختيار 3 أعراض فقط!');
            return;
        }
        // حساب الأغلبية
        const counts = {};
        checked.forEach(cb => {
            counts[cb.value] = (counts[cb.value] || 0) + 1;
        });
        // التشخيص النهائي هو المرض الذي له أكبر عدد من الأعراض المختارة
        let finalDisorder = diffDisorders[0];
        if (counts[diffDisorders[1]] > counts[diffDisorders[0]]) finalDisorder = diffDisorders[1];
        // حفظ التشخيص النهائي
        localStorage.setItem('finalDiffDisorder', finalDisorder);
        window.location.href = 'assessment-result.html';
    };
    diffOptions.appendChild(btn);
} 