document.addEventListener('DOMContentLoaded', () => {
    // Category Box Click Effects
    const boxes = document.querySelectorAll('.category-box');
    
    boxes.forEach(box => {
        box.addEventListener('click', function(e) {
            // Handle submenu toggle if exists
            const submenuId = this.id ? this.id.replace('-btn', '-submenu') : '';
            const submenu = submenuId ? document.getElementById(submenuId) : null;
            if (submenu) {
                e.preventDefault();
                this.classList.toggle('active');
                submenu.classList.toggle('active');
                return;
            }

            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
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
            } else {
                // Let normal navigation happen, but add click effect
                this.style.transform = 'scale(0.98)';
                this.style.backgroundColor = 'var(--primary-light)';
            }
        });
    });

    // Submenu Item Click Effects
    const subItems = document.querySelectorAll('.submenu-item');
    subItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const itemName = this.textContent.replace('•', '').trim();
            alert(`'${itemName}' 상세 콘텐츠는 준비 중입니다.`);
        });
    });
});
