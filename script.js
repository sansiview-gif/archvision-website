/**
 * ARCHVISION - Professional Architecture Visualization
 * Interactive JavaScript Module
 */

// Global language state
let currentLang = 'en';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initNavigation();
    initHeroSlider();
    initWorksFilter();
    initLightbox();
    initScrollReveal();
    initStatsCounter();
    initContactForm();
    initSmoothScroll();
    initLanguageSwitch();
});

/**
 * Language Switch Module
 * Handles Chinese/English language switching
 */
function initLanguageSwitch() {
    const langToggle = document.getElementById('langToggle');

    // Translation dictionary
    const translations = {
        zh: {
            'nav-works': '作品',
            'nav-services': '服务',
            'nav-about': '关于',
            'nav-contact': '联系',
            'hero-subtitle': '建筑可视化工作室',
            'hero-line1': '将建筑',
            'hero-line2': '转化为',
            'hero-line3': '视觉艺术',
            'hero-description': '我们专注于创造令人惊叹的建筑效果图，将设计理念转化为令人难忘的视觉体验',
            'hero-btn1': '浏览作品',
            'hero-btn2': '开始合作',
            'scroll-text': '向下滚动',
            'services-label': '我们的服务',
            'services-title': '专业领域',
            'services-desc': '提供全方位的建筑可视化解决方案',
            'service-1-title': '建筑外观渲染',
            'service-1-desc': '高精度建筑外立面可视化，展现设计理念与材质细节',
            'service-2-title': '室内空间表现',
            'service-2-desc': '逼真的室内渲染，呈现空间氛围与家具陈设',
            'service-3-title': '360°全景体验',
            'service-3-desc': '沉浸式VR全景展示，让客户身临其境感受设计',
            'service-4-title': '建筑动画漫游',
            'service-4-desc': '动态视频展示，全方位呈现建筑空间关系',
            'works-label': '精选项目',
            'works-title': '作品展示',
            'filter-all': '全部',
            'filter-residential': '住宅',
            'filter-commercial': '商业',
            'filter-cultural': '文化',
            'filter-landscape': '景观',
            'work-view': '查看详情',
            'about-label': '关于我们',
            'about-title': '专业团队，卓越品质',
            'about-text-1': 'ARCHVISION 成立于2018年，是一家专注于建筑视觉表现的工作室。我们相信，优秀的建筑可视化不仅仅是技术的展现，更是艺术与设计的完美融合。',
            'about-text-2': '我们的团队由资深建筑师、3D艺术家和视觉设计师组成，致力于为客户提供从概念设计到最终呈现的全流程服务。每一个项目，我们都以极致的细节和独特的视角，将建筑的灵魂展现得淋漓尽致。',
            'skill-1': '3ds Max / V-Ray',
            'skill-2': 'SketchUp / Enscape',
            'skill-3': 'Unreal Engine 5',
            'skill-4': 'Photoshop / Lightroom',
            'stat-1': '完成项目',
            'stat-2': '合作客户',
            'stat-3': '年行业经验',
            'stat-4': '专业团队',
            'contact-label': '联系我们',
            'contact-title': '开始合作',
            'contact-desc': '无论您是需要建筑效果图、室内设计可视化还是VR体验，我们都期待与您合作，将您的愿景变为现实。',
            'contact-address': '上海市静安区南京西路1266号',
            'form-name': '您的姓名',
            'form-email': '电子邮箱',
            'form-subject': '项目主题',
            'form-message': '项目描述',
            'form-attach': '添加附件（可选）',
            'form-attach-hint': '支持 JPG, PNG, PDF, DWG, SKP, MAX 格式',
            'form-submit': '发送消息',
            'footer-desc': '专业建筑可视化工作室，致力于将建筑设计转化为令人惊叹的视觉艺术作品。',
            'footer-links-1': '快速链接',
            'footer-links-2': '服务项目',
            'footer-link-1': '作品展示',
            'footer-link-2': '服务内容',
            'footer-link-3': '关于我们',
            'footer-link-4': '联系方式',
            'footer-service-1': '建筑外观渲染',
            'footer-service-2': '室内空间表现',
            'footer-service-3': '360°全景体验',
            'footer-service-4': '建筑动画漫游',
            'footer-copyright': '版权所有'
        },
        en: {
            'nav-works': 'Works',
            'nav-services': 'Services',
            'nav-about': 'About',
            'nav-contact': 'Contact',
            'hero-subtitle': 'Architecture Visualization Studio',
            'hero-line1': 'Transforming',
            'hero-line2': 'Architecture',
            'hero-line3': 'Into Visual Art',
            'hero-description': 'We specialize in creating stunning architectural renderings, transforming design concepts into unforgettable visual experiences',
            'hero-btn1': 'View Works',
            'hero-btn2': 'Start Collaboration',
            'scroll-text': 'Scroll Down',
            'services-label': 'Our Services',
            'services-title': 'Expertise',
            'services-desc': 'Providing comprehensive architectural visualization solutions',
            'service-1-title': 'Exterior Rendering',
            'service-1-desc': 'High-precision building exterior visualization, showcasing design concepts and material details',
            'service-2-title': 'Interior Visualization',
            'service-2-desc': 'Realistic interior rendering, presenting spatial atmosphere and furniture layout',
            'service-3-title': '360° Panoramic Experience',
            'service-3-desc': 'Immersive VR panoramic display, letting clients experience the design firsthand',
            'service-4-title': 'Architectural Animation',
            'service-4-desc': 'Dynamic video presentation, showcasing architectural spatial relationships comprehensively',
            'works-label': 'Featured Projects',
            'works-title': 'Portfolio',
            'filter-all': 'All',
            'filter-residential': 'Residential',
            'filter-commercial': 'Commercial',
            'filter-cultural': 'Cultural',
            'filter-landscape': 'Landscape',
            'work-view': 'View Details',
            'about-label': 'About Us',
            'about-title': 'Professional Team, Excellence Quality',
            'about-text-1': 'ARCHVISION was established in 2018, specializing in architectural visualization. We believe that excellent architectural visualization is not just a display of technology, but a perfect fusion of art and design.',
            'about-text-2': 'Our team consists of senior architects, 3D artists, and visual designers, dedicated to providing clients with end-to-end services from concept design to final presentation. For every project, we strive for ultimate detail and unique perspectives, bringing the soul of architecture to life.',
            'skill-1': '3ds Max / V-Ray',
            'skill-2': 'SketchUp / Enscape',
            'skill-3': 'Unreal Engine 5',
            'skill-4': 'Photoshop / Lightroom',
            'stat-1': 'Projects Completed',
            'stat-2': 'Clients Served',
            'stat-3': 'Years Experience',
            'stat-4': 'Team Members',
            'contact-label': 'Contact Us',
            'contact-title': 'Start Collaboration',
            'contact-desc': 'Whether you need architectural renderings, interior design visualization, or VR experiences, we look forward to collaborating with you to bring your vision to reality.',
            'contact-address': "1266 Nanjing West Road, Jing'an District, Shanghai",
            'form-name': 'Your Name',
            'form-email': 'Email Address',
            'form-subject': 'Project Subject',
            'form-message': 'Project Description',
            'form-attach': 'Add Attachments (Optional)',
            'form-attach-hint': 'Supports JPG, PNG, PDF, DWG, SKP, MAX formats',
            'form-submit': 'Send Message',
            'footer-desc': 'Professional architectural visualization studio, dedicated to transforming architectural design into stunning visual art works.',
            'footer-links-1': 'Quick Links',
            'footer-links-2': 'Services',
            'footer-link-1': 'Portfolio',
            'footer-link-2': 'Services',
            'footer-link-3': 'About Us',
            'footer-link-4': 'Contact',
            'footer-service-1': 'Exterior Rendering',
            'footer-service-2': 'Interior Visualization',
            'footer-service-3': '360° Panoramic Experience',
            'footer-service-4': 'Architectural Animation',
            'footer-copyright': 'All Rights Reserved'
        }
    };

    // Switch language function
    function switchLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
        langToggle.textContent = lang === 'zh' ? 'EN' : '中文';

        // Update all elements with data-lang attribute
        document.querySelectorAll('[data-lang]').forEach(el => {
            const key = el.getAttribute('data-lang');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Don't update placeholders - using label animation instead
        // const nameInput = document.getElementById('name');
        // const emailInput = document.getElementById('email');
        // const subjectInput = document.getElementById('subject');
        // const messageInput = document.getElementById('message');

        // if (nameInput) nameInput.placeholder = translations[lang]['form-name'];
        // if (emailInput) emailInput.placeholder = translations[lang]['form-email'];
        // if (subjectInput) subjectInput.placeholder = translations[lang]['form-subject'];
        // if (messageInput) messageInput.placeholder = translations[lang]['form-message'];
    }

    // Language toggle click handler
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'zh' ? 'en' : 'zh';
            switchLanguage(newLang);
        });
    }

    // Initialize with English on page load
    switchLanguage('en');
}

/**
 * Navigation Module
 * Handles sticky nav, mobile menu, and scroll behavior
 */
function initNavigation() {
    const nav = document.getElementById('nav');
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    // Sticky navigation on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add/remove scrolled class
        if (currentScroll > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });

    // Mobile menu toggle
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close mobile menu on link click
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
}

/**
 * Hero Slider Module
 * Auto-rotating background images with smooth transitions
 */
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;

    function goToSlide(index) {
        // Remove active class from current
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');

        // Update current index
        currentSlide = index;

        // Add active class to new
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        goToSlide(next);
    }

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            resetInterval();
        });
    });

    // Auto-advance slides
    function startInterval() {
        slideInterval = setInterval(nextSlide, 6000);
    }

    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }

    // Start slider
    if (slides.length > 1) {
        startInterval();
    }
}

/**
 * Works Filter Module
 * Filter portfolio items by category
 */
function initWorksFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const workItems = document.querySelectorAll('.work-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            // Filter items
            workItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.classList.remove('hidden');
                    // Add fade-in animation
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
}

/**
 * Lightbox Module
 * Image preview modal for portfolio items with navigation
 */
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxCategory = document.getElementById('lightboxCategory');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const lightboxCounter = document.getElementById('lightboxCounter');
    const workItems = document.querySelectorAll('.work-item');
    
    let currentIndex = 0;
    let visibleItems = [];
    let touchStartX = 0;
    let touchEndX = 0;

    // Get visible work items
    function getVisibleItems() {
        return Array.from(workItems).filter(item => !item.classList.contains('hidden'));
    }

    // Build works data from HTML
    const worksData = Array.from(workItems).map(item => {
        const img = item.querySelector('img');
        const category = item.getAttribute('data-category');
        return {
            src: img.src,
            title: img.alt,
            category: category
        };
    });

    // Open lightbox - click on any part of work item
    workItems.forEach((item, index) => {
        // Click on image opens lightbox
        item.addEventListener('click', (e) => {
            visibleItems = getVisibleItems();
            currentIndex = visibleItems.indexOf(item);
            openLightbox(currentIndex);
        });
    });

    // Open lightbox with specific index
    function openLightbox(index) {
        if (index < 0 || index >= visibleItems.length) return;
        
        const item = visibleItems[index];
        const itemIndex = Array.from(workItems).indexOf(item);
        const data = worksData[itemIndex];
        
        lightboxImage.src = data.src;
        lightboxTitle.textContent = data.title;
        lightboxCategory.textContent = getCategoryName(data.category);
        lightboxCounter.textContent = `${index + 1} / ${visibleItems.length}`;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        updateNavButtons();
    }
    
    // Get category display name
    function getCategoryName(category) {
        const categoryMap = {
            'residential': currentLang === 'zh' ? '住宅' : 'Residential',
            'commercial': currentLang === 'zh' ? '商业' : 'Commercial',
            'cultural': currentLang === 'zh' ? '文化' : 'Cultural',
            'landscape': currentLang === 'zh' ? '景观' : 'Landscape'
        };
        return categoryMap[category] || category;
    }

    // Navigate to previous image
    function prevImage() {
        if (currentIndex > 0) {
            currentIndex--;
            openLightbox(currentIndex);
        }
    }

    // Navigate to next image
    function nextImage() {
        if (currentIndex < visibleItems.length - 1) {
            currentIndex++;
            openLightbox(currentIndex);
        }
    }

    // Update navigation buttons visibility
    function updateNavButtons() {
        if (lightboxPrev) {
            lightboxPrev.style.opacity = currentIndex === 0 ? '0.3' : '1';
            lightboxPrev.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';
        }
        if (lightboxNext) {
            lightboxNext.style.opacity = currentIndex === visibleItems.length - 1 ? '0.3' : '1';
            lightboxNext.style.pointerEvents = currentIndex === visibleItems.length - 1 ? 'none' : 'auto';
        }
    }

    // Navigation button events
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', (e) => {
            e.stopPropagation();
            prevImage();
        });
    }

    if (lightboxNext) {
        lightboxNext.addEventListener('click', (e) => {
            e.stopPropagation();
            nextImage();
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            prevImage();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        }
    });

    // Touch/Swipe navigation
    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next image
                nextImage();
            } else {
                // Swipe right - previous image
                prevImage();
            }
        }
    }

    // Close lightbox
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

/**
 * Scroll Reveal Module
 * Animate elements as they enter viewport
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll(
        '.service-card, .work-item, .stat-card'
    );

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`;
        revealObserver.observe(el);
    });

    // Add revealed class handler
    const style = document.createElement('style');
    style.textContent = `
        .revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

/**
 * Stats Counter Module
 * Animate numbers counting up
 */
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const count = parseInt(target.getAttribute('data-count'));
                animateCounter(target, count);
                counterObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => counterObserver.observe(stat));

    function animateCounter(element, target) {
        const duration = 2000;
        const start = 0;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function (ease-out-expo)
            const easeOutExpo = 1 - Math.pow(2, -10 * progress);
            const current = Math.floor(start + (target - start) * easeOutExpo);
            
            element.textContent = current + '+';

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = target + '+';
            }
        }

        requestAnimationFrame(update);
    }
}

/**
 * Contact Form Module
 * Handle form submission with validation and file upload
 */
function initContactForm() {
    const form = document.getElementById('contactForm');
    const fileInput = document.getElementById('attachment');
    const fileList = document.getElementById('fileList');
    let selectedFiles = [];

    // Handle file selection
    if (fileInput) {
        fileInput.addEventListener('change', (e) => {
            const files = Array.from(e.target.files);
            selectedFiles = [...selectedFiles, ...files];
            updateFileList();
        });
    }

    // Update file list display
    function updateFileList() {
        if (!fileList) return;
        
        fileList.innerHTML = '';
        
        selectedFiles.forEach((file, index) => {
            const fileItem = document.createElement('div');
            fileItem.className = 'file-item';
            fileItem.innerHTML = `
                <div class="file-item-name">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width: 16px; height: 16px; flex-shrink: 0;">
                        <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/>
                        <polyline points="13 2 13 9 20 9"/>
                    </svg>
                    <span>${file.name}</span>
                </div>
                <div class="file-item-size">${formatFileSize(file.size)}</div>
                <button type="button" class="file-item-remove" data-index="${index}">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 16px; height: 16px;">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                </button>
            `;
            fileList.appendChild(fileItem);
        });

        // Add remove event listeners
        document.querySelectorAll('.file-item-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.getAttribute('data-index'));
                selectedFiles.splice(index, 1);
                updateFileList();
            });
        });
    }

    // Format file size
    function formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            // Basic validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !subject || !message) {
                showNotification('请填写所有必填字段', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showNotification('请输入有效的邮箱地址', 'error');
                return;
            }

            // Simulate form submission with files
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = '发送中...';
            submitBtn.disabled = true;

            // Create FormData with files
            const submitData = new FormData();
            submitData.append('name', name);
            submitData.append('email', email);
            submitData.append('subject', subject);
            submitData.append('message', message);
            selectedFiles.forEach((file, index) => {
                submitData.append(`file_${index}`, file);
            });

            // Simulate API call
            setTimeout(() => {
                let message = '消息已发送！我们会尽快回复您。';
                if (selectedFiles.length > 0) {
                    message += `\n已上传 ${selectedFiles.length} 个文件。`;
                }
                showNotification(message, 'success');
                form.reset();
                selectedFiles = [];
                updateFileList();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
}

/**
 * Smooth Scroll Module
 * Smooth scrolling for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const navHeight = document.getElementById('nav').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Utility Functions
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span class="notification-message">${message}</span>
        <button class="notification-close">&times;</button>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#c9a962' : '#e74c3c'};
        color: ${type === 'success' ? '#0a0a0a' : '#ffffff'};
        border-radius: 4px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        z-index: 3000;
        display: flex;
        align-items: center;
        gap: 1rem;
        animation: slideIn 0.3s ease;
    `;

    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        .notification-close {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            opacity: 0.7;
            transition: opacity 0.2s;
        }
        .notification-close:hover { opacity: 1; }
    `;
    document.head.appendChild(style);

    // Add to DOM
    document.body.appendChild(notification);

    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    });

    // Auto remove
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

/**
 * Parallax Effect for Hero
 * Subtle parallax on scroll
 */
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-slide.active img');
    
    if (heroImage && scrolled < window.innerHeight) {
        heroImage.style.transform = `translateY(${scrolled * 0.5}px) scale(1.1)`;
    }
});

/**
 * Performance: Lazy load images
 * Only load images when they enter viewport
 */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}
