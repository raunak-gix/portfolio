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

    // 4. Project Modal Details Data (Domain Pop-up Galleries)
    const projectDetails = {
        'portfolios-card': {
            title: 'PORTFOLIOS & DESIGN SHOWCASE',
            badge: 'GRAPHIC DESIGN // BRAND IDENTITY & WEBSITES',
            description: `Official collection of custom portfolio websites designed and developed by Raunak — spanning weather workstations, data analyst showcases, photography archives, and creative media portfolios.`,
            items: [
                {
                    name: 'STRATUS // ATMOSPHERIC INTELLIGENCE WORKSTATION',
                    img: 'assets/resume_checker_dashboard.jpg',
                    tags: ['Vercel', 'Weather Web App', 'Interactive UI'],
                    desc: 'Real-time weather intelligence workstation featuring dynamic atmospheric data visualization, search interfaces, and sleek cyber styling.',
                    url: 'https://weather-rho-two-69.vercel.app/'
                },
                {
                    name: 'DEBANGSHI | CS GRADUATE & DATA ANALYST PORTFOLIO',
                    img: 'assets/paridhi_2026_website.jpg',
                    tags: ['Vercel', 'Data Analyst', 'Frontend Portfolio'],
                    desc: 'Personal portfolio website designed for Debangshi featuring data analytics project showcases, technical skills, and responsive web design.',
                    url: 'https://debangshi-portfolio-cyan.vercel.app/'
                },
                {
                    name: 'SHUVOJIT PHOTOGRAPHY | FINE ART & EDITORIAL ARCHIVES',
                    img: 'assets/photography_showcase.jpg',
                    tags: ['GitHub Pages', 'Fine Art', 'Photography Gallery'],
                    desc: 'Editorial photography archive website showcasing portraiture, fine art galleries, photo series, and minimalist grid layouts.',
                    url: 'https://raunak-gix.github.io/shuvojit-photography/'
                },
                {
                    name: 'TAPOBRATA | VIDEO EDITOR & MOTION GRAPHICS PORTFOLIO',
                    img: 'assets/sign_language_translator.jpg',
                    tags: ['GitHub Pages', 'Video Editing', 'Motion Graphics'],
                    desc: 'Portfolio site for Tapobrata highlighting video editing showreels, motion graphics projects, and frontend developer experience.',
                    url: 'https://raunak-gix.github.io/tapobrata_portfolio/'
                },
                {
                    name: 'SINJINI | SENIOR DATA ARCHITECT & BI ANALYST PORTFOLIO',
                    img: 'assets/raunak_portrait.jpg',
                    tags: ['GitHub Pages', 'Data Architect', 'BI Analytics'],
                    desc: 'Professional portfolio designed for Sinjini highlighting Business Intelligence metrics, data architecture blueprints, and analytical skills.',
                    url: 'https://raunak-gix.github.io/sinjini_portfolio/'
                }
            ]
        },
        'projects-card': {
            title: 'FEATURED WEB & TECH PROJECTS',
            badge: 'FRONTEND DEVELOPMENT // INTERACTIVE WEB APPS',
            description: `Full-stack web applications, interactive festival portals, and frontend design systems engineered with responsive layouts and component-driven codebases.`,
            items: [
                {
                    name: 'PARIDHI 2026 TECHFEST WEB PLATFORM',
                    img: 'assets/paridhi_2026_website.jpg',
                    tags: ['HTML5/CSS3', 'JavaScript', 'Figma'],
                    desc: 'Official technical festival web portal featuring domain selection drawers, live countdown timer, and registration workflows.'
                },
                {
                    name: 'AI RESUME CHECKER & ANALYTICS DASHBOARD',
                    img: 'assets/resume_checker_dashboard.jpg',
                    tags: ['React', 'Node.js', 'Dashboard UI'],
                    desc: 'Smart resume analyzer application with ATS keyword matching algorithms and interactive candidate metrics dashboard.'
                },
                {
                    name: 'SIGN LANGUAGE GESTURE RECOGNITION UI',
                    img: 'assets/sign_language_translator.jpg',
                    tags: ['Python', 'Computer Vision', 'Web UI'],
                    desc: 'Accessibility web interface for real-time sign language recognition, translating video gestures into text.'
                }
            ]
        },
        'photography-card': {
            title: 'PHOTOGRAPHY & CONCEPTUAL ART',
            badge: 'VISUAL ARTS // EVENT & ATMOSPHERIC PHOTOGRAPHY',
            description: `Official photography gallery sourced directly from Raunak's Google Drive collection — featuring event coverage, portraiture, street shots, and post-processed visual art.`,
            items: [
                {
                    name: 'ATMOSPHERIC STREET & LIGHTING SHOT 01',
                    img: 'assets/photos/IMG_20240808_170845.jpg',
                    tags: ['Night Shots', 'Lightroom', 'Composition'],
                    desc: 'Atmospheric photography highlighting natural lighting, high-contrast mood, and post-processed color grading.'
                },
                {
                    name: 'CULTURAL FESTIVAL & STAGE PORTRAIT 02',
                    img: 'assets/photos/IMG_20241007_142805.jpg',
                    tags: ['Event Coverage', 'Portraits', 'Photoshop'],
                    desc: 'Live event stage photography capturing expressive candid moments during technical and cultural festivals.'
                },
                {
                    name: 'CONCEPT ART & ATMOSPHERIC SHOT 03',
                    img: 'assets/photos/IMG_20241008_202736.jpg',
                    tags: ['Camera Shots', 'Lightroom', 'Visual Art'],
                    desc: 'High-resolution photo shot featuring detailed perspective, contrast shadow play, and refined visual composition.'
                },
                {
                    name: 'EVENT & PROMOTIONAL SHOT 04',
                    img: 'assets/photos/IMG_20241011_151030.jpg',
                    tags: ['Event Photography', 'Shots', 'Branding'],
                    desc: 'Promotional event snapshot featuring active scene framing and digital retouches.'
                },
                {
                    name: 'OUTDOOR LIGHTING & COMPOSITION 05',
                    img: 'assets/photos/IMG_20241011_173840.jpg',
                    tags: ['Outdoor', 'Natural Light', 'Camera'],
                    desc: 'Outdoor framing capturing golden hour shadows and vivid color dynamics.'
                },
                {
                    name: 'VISUAL DOCUMENTATION SHOT 06',
                    img: 'assets/photos/DOC-20241013-WA0067.jpg',
                    tags: ['Documentation', 'Visuals', 'Posters'],
                    desc: 'Documented visual creative composition created for organizational events.'
                }
            ]
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
                    <div class="modal-header-badge">${data.badge}</div>
                    <h2 class="modal-header-title">${data.title}</h2>
                    <p class="modal-header-desc">${data.description}</p>
                    
                    <div class="modal-domain-grid">
                        ${data.items.map(item => `
                            <div class="modal-domain-item">
                                <img src="${item.img}" alt="${item.name}" class="modal-domain-item-img">
                                <div class="modal-domain-item-body">
                                    <div class="modal-domain-item-title">${item.name}</div>
                                    <p class="modal-domain-item-desc">${item.desc}</p>
                                    <div class="modal-domain-item-tags">
                                        ${item.tags.map(t => `<span class="tag-pill accent">${t}</span>`).join('')}
                                    </div>
                                    ${item.url ? `
                                        <a href="${item.url}" target="_blank" rel="noopener" class="btn-primary" style="padding: 8px 14px; font-size: 0.8rem; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; margin-top: 10px; width: fit-content;">
                                            <span>VISIT LIVE WEBSITE</span>
                                            <i data-lucide="external-link" style="width:14px; height:14px;"></i>
                                        </a>
                                    ` : ''}
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <div style="display:flex; justify-content:flex-end; gap:16px;">
                        <button onclick="document.getElementById('project-modal').classList.remove('open')" class="btn-primary">
                            <span>CLOSE WINDOW</span>
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
