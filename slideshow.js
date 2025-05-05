function initSlideshow() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    
    function updateDots(index) {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }
    
    function nextSlide() {
        // إزالة الحالة النشطة من الشريحة الحالية
        slides[currentSlide].classList.remove('active');
        slides[currentSlide].classList.add('previous');
        
        setTimeout(() => {
            slides[currentSlide].classList.remove('previous');
        }, 500);
        
        // الانتقال للشريحة التالية
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.remove('previous');
        slides[currentSlide].classList.add('active');
        updateDots(currentSlide);
    }
    
    // تحديث التحكم عند النقر على النقاط
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            if (index !== currentSlide) {
                // إزالة الحالة النشطة من الشريحة الحالية
                slides[currentSlide].classList.remove('active');
                if (index > currentSlide) {
                    slides[currentSlide].classList.add('previous');
                } else {
                    slides[currentSlide].classList.add('next');
                }
                
                // تحديث الشريحة الحالية
                currentSlide = index;
                slides[currentSlide].classList.remove('previous', 'next');
                slides[currentSlide].classList.add('active');
                updateDots(currentSlide);
            }
        });
    });
    
    // بدء عرض الشرائح تلقائياً
    setInterval(nextSlide, 5000);
}

// تشغيل السلايدر عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', initSlideshow);
