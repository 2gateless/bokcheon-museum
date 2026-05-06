document.addEventListener('DOMContentLoaded', () => {
    // Category Box Click Effects
    const boxes = document.querySelectorAll('.category-box');
    
    boxes.forEach(box => {
        box.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent jump for now
            const categoryName = this.getAttribute('data-category');
            
            // Temporary click effect
            this.style.transform = 'scale(0.98)';
            this.style.backgroundColor = 'var(--primary-light)';
            
            setTimeout(() => {
                this.style.transform = '';
                this.style.backgroundColor = '';
                alert(`'${categoryName}' 관련 상세 콘텐츠는 준비 중입니다.`);
            }, 150);
        });
    });
});
