/**
 * RAUNAK NEO-BRUTALIST PORTFOLIO - INTERACTIVE LOGIC
 */

document.addEventListener('DOMContentLoaded', () => {
    // 0. Theme Toggle System (Dark / Light Mode)
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');

    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    }

    const toggleTheme = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('portfolio-theme', newTheme);
        
        if (window.lucide) {
            window.lucide.createIcons();
        }
    };

    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
    if (themeToggleMobile) {
        themeToggleMobile.addEventListener('click', (e) => {
            const mobileDrawer = document.getElementById('mobile-drawer');
            if (mobileDrawer) mobileDrawer.classList.remove('open');
            toggleTheme(e);
        });
    }

    // 1. Mobile Menu Drawer Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const drawerClose = document.getElementById('drawer-close');
    const drawerLinks = document.querySelectorAll('.drawer-link');

    if (mobileToggle && mobileDrawer) {
        mobileToggle.addEventListener('click', () => {
            mobileDrawer.classList.add('open');
        });
    }

    if (drawerClose && mobileDrawer) {
        drawerClose.addEventListener('click', () => {
            mobileDrawer.classList.remove('open');
        });
    }

    drawerLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileDrawer.classList.remove('open');
        });
    });

    // 2. Tech Stack Filter System
    const filterBtns = document.querySelectorAll('.filter-btn');
    const techCards = document.querySelectorAll('.tech-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            techCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 3. Navigation Active Scroll Observer
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 120;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                current = sectionId;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // 4. Project Modal Details Data
    const projectDetails = {
        'sign-language': {
            title: 'CYBERPUNK MERCH & POSTER SUITE',
            badge: 'GRAPHIC DESIGN // MERCHANDISE BRANDING',
            tags: ['Photoshop', 'Illustrator', 'Merchandise', 'Krita', 'Figma'],
            img: 'assets/sign_language_translator.jpg',
            description: `A complete graphic design and apparel branding project featuring custom vector artwork, high-resolution poster prints, streetwear merchandise apparel designs, and visual branding assets.`,
            features: [
                'Custom vector illustrations crafted in Illustrator & Krita.',
                'High-resolution print-ready poster compositions in Photoshop.',
                'Streetwear merchandise apparel mockups & tech packs for production.',
                'Complete brand color systems and graphic design style guides.'
            ],
            github: 'https://github.com',
            demo: 'https://github.com'
        },
        'resume-checker': {
            title: 'NEO-BRUTALIST WEB & MOTION UI',
            badge: 'UI/UX DESIGN // VIDEO EDITING & MOTION',
            tags: ['Figma', 'Adobe XD', 'After Effects', 'Premiere Pro', 'HTML5/CSS3'],
            img: 'assets/resume_checker_dashboard.jpg',
            description: `End-to-end website design and video promo edit for a modern tech brand. Includes interactive Figma UI components, responsive website layout design, and motion graphics video edits.`,
            features: [
                'Responsive neo-brutalist website UI prototype created in Figma & Adobe XD.',
                'Cinematic trailer and promo video edit cut in Premiere Pro.',
                'Dynamic motion graphics and typography animations created in After Effects.',
                'Interactive design tokens, layout grids, and reusable UI library.'
            ],
            github: 'https://github.com',
            demo: 'https://github.com'
        },
        'paridhi-2026': {
            title: 'PARIDHI 2026 TECHFEST WEBSITE & UI',
            badge: 'WEBSITE DESIGN // TECHFEST UI/UX BRANDING',
            tags: ['Figma', 'Photoshop', 'Illustrator', 'HTML5/CSS3', 'JavaScript'],
            img: 'assets/paridhi_2026_website.jpg',
            description: `Complete visual identity and website design for Paridhi 2026 — the annual technical festival of Meghnad Saha Institute of Technology. Features an energetic retro pop/cartoon aesthetic, event domain selectors, live countdown timer, and interactive registration workflows.`,
            features: [
                'Vibrant cartoon retro pop art direction & customized domain cards (Coding, Robotics, Gaming, Civil, Electrical).',
                'Interactive live event countdown timer interface and domain selector drawers.',
                'Designed complete UI layout systems in Figma, Photoshop & Illustrator.',
                'Full responsive web user interface crafted for desktop and mobile techfest attendees.'
            ],
            github: 'https://github.com/raunak-gix',
            demo: 'https://github.com/raunak-gix'
        }
    };

    const modalOverlay = document.getElementById('project-modal');
    const modalClose = document.getElementById('modal-close');
    const modalBody = document.getElementById('modal-body');
    const modalTriggers = document.querySelectorAll('.modal-trigger');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const key = trigger.getAttribute('data-project');
            const data = projectDetails[key];

            if (data && modalOverlay && modalBody) {
                modalBody.innerHTML = `
                    <div style="font-family: var(--font-mono); color: var(--neon-green); font-size: 0.8rem; margin-bottom: 8px;">${data.badge}</div>
                    <h2 style="font-family: var(--font-mono); font-size: 2rem; margin-bottom: 16px;">${data.title}</h2>
                    <img src="${data.img}" alt="${data.title}" style="width:100%; border-radius:6px; border:1px solid var(--border-color); margin-bottom: 24px;">
                    
                    <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom: 20px;">
                        ${data.tags.map(t => `<span class="tag-pill accent">${t}</span>`).join('')}
                    </div>

                    <p style="color: var(--text-secondary); line-height:1.7; margin-bottom: 24px;">${data.description}</p>
                    
                    <h4 style="font-family: var(--font-mono); font-size: 1.1rem; margin-bottom: 12px; color: var(--text-primary);">KEY HIGHLIGHTS:</h4>
                    <ul style="color: var(--text-secondary); padding-left: 20px; line-height: 1.8; margin-bottom: 30px;">
                        ${data.features.map(f => `<li style="margin-bottom:8px;">${f}</li>`).join('')}
                    </ul>

                    <div style="display:flex; gap:16px;">
                        <a href="${data.github}" target="_blank" rel="noopener" class="btn-primary">
                            <span>VIEW SOURCE CODE</span>
                            <i data-lucide="github"></i>
                        </a>
                        <button onclick="document.getElementById('project-modal').classList.remove('open')" class="btn-outline">
                            <span>CLOSE</span>
                        </button>
                    </div>
                `;

                if (window.lucide) {
                    window.lucide.createIcons();
                }

                modalOverlay.classList.add('open');
            }
        });
    });

    // Modal Close Logic for all modals
    const closeAllModals = () => {
        document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
    };

    // Close modals when clicking overlay background or close buttons
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay || e.target.classList.contains('modal-close') || e.target.closest('.modal-close')) {
                overlay.classList.remove('open');
            }
        });
    });

    // Close modals on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });

    // 4b. Resume / CV Modal System
    const resumeBtn = document.getElementById('resume-btn');
    const resumeModal = document.getElementById('resume-modal');

    if (resumeBtn && resumeModal) {
        resumeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            resumeModal.classList.add('open');
        });
    }

    // 5. Real Email Contact Form Submission (FormSubmit API + Mailto Fallback)
    const contactForm = document.getElementById('contact-form');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const subjectInput = document.getElementById('subject');
            const messageInput = document.getElementById('message');
            const submitBtn = contactForm.querySelector('.form-submit-btn');

            const name = nameInput ? nameInput.value : '';
            const email = emailInput ? emailInput.value : '';
            const subject = subjectInput && subjectInput.value ? subjectInput.value : 'New Portfolio Contact Message';
            const message = messageInput ? messageInput.value : '';

            // Update button state
            if (submitBtn) {
                submitBtn.disabled = true;
                const btnText = submitBtn.querySelector('span');
                if (btnText) btnText.textContent = 'SENDING...';
            }

            try {
                const response = await fetch('https://formsubmit.co/ajax/dasraunak04@gmail.com', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        _subject: `[Portfolio Contact] ${subject}`,
                        message: message
                    })
                });

                if (response.ok) {
                    if (toast && toastMessage) {
                        toastMessage.textContent = `Thank you, ${name || 'friend'}! Your message has been sent directly to Raunak's email inbox.`;
                        toast.classList.add('show');
                        setTimeout(() => toast.classList.remove('show'), 5000);
                    }
                    contactForm.reset();
                } else {
                    // Fallback to mailto link
                    window.location.href = `mailto:dasraunak04@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\nMessage:\n" + message)}`;
                }
            } catch (err) {
                // Fallback to mailto link
                window.location.href = `mailto:dasraunak04@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\nMessage:\n" + message)}`;
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    const btnText = submitBtn.querySelector('span');
                    if (btnText) btnText.textContent = 'SEND MESSAGE';
                }
            }
        });
    }
});
