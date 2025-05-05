document.addEventListener('DOMContentLoaded', function() {
    // جلب النتيجة وخطة العلاج من localStorage
    const resultSummary = localStorage.getItem('assessmentResultSummary') || 'لا توجد نتيجة متاحة.';
    const treatmentPlan = localStorage.getItem('assessmentTreatmentPlan') || '';
    document.getElementById('resultSummary').innerHTML = resultSummary;
    document.getElementById('treatmentPlan').innerHTML = treatmentPlan;
}); 