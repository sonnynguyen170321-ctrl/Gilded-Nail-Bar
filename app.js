/**
 * Gilded Nail Bar - Client Controller
 * Coordinates the splash screen, category exploration, tabs, booking wizard, reviews, and footer accordions.
 */

// --- Data Stores (Refined for Luxe Uptown Dallas Brand) ---
const SERVICES_DATA = [
    {
        id: 'srv-gilded-mani',
        name: 'Signature Gilded Manicure',
        category: 'manicures',
        price: 120,
        duration: '60 mins',
        description: 'Dry cuticle precision care, structured base reinforcement, and hand-placed 24k liquid gold foil leaf accents.'
    },
    {
        id: 'srv-russian-mani',
        name: 'Structured Gel Manicure',
        category: 'manicures',
        price: 85,
        duration: '60 mins',
        description: 'Dry e-file manicure focusing on clean cuticle polishing, structured gel building, and high-shine top coat alignment.'
    },
    {
        id: 'srv-classic-mani',
        name: 'Essential Clean Manicure',
        category: 'manicures',
        price: 60,
        duration: '45 mins',
        description: 'Filing, meticulous cuticle detail, natural treatment oil massage, and a premium long-wear non-toxic polish.'
    },
    {
        id: 'srv-stone-pedi',
        name: 'Stone Soak Pedicure',
        category: 'pedicures',
        price: 95,
        duration: '75 mins',
        description: 'Warm concrete stone foot soak, organic sugar scrub exfoliation, hot basalt stone massage, and natural cream wrap.'
    },
    {
        id: 'srv-milk-pedi',
        name: 'Milk & Honey Pedicure',
        category: 'pedicures',
        price: 85,
        duration: '60 mins',
        description: 'Warm organic milk soak, soothing honey clay mask, hot towel wrap, cuticle care, and choice of natural polish.'
    },
    {
        id: 'srv-gel-x',
        name: 'Aprés Gel-X Extensions',
        category: 'extensions',
        price: 115,
        duration: '90 mins',
        description: 'Premium soft-gel extension system sculpted for natural hand geometry, perfect length, and durable structured wear.'
    },
    {
        id: 'srv-gel-overlay',
        name: 'Hard Gel Structured Overlay',
        category: 'extensions',
        price: 95,
        duration: '75 mins',
        description: 'Protective builder gel overlay to strengthen natural nails. Excellent for reinforcing growth and preventing breaks.'
    },
    {
        id: 'srv-hand-art',
        name: 'Minimalist Hand-Painted Art',
        category: 'nailart',
        price: 135,
        duration: '90 mins',
        description: 'One-on-one custom design. Intricate fine line work, abstract brushstrokes, geometric frames, or minimal negative space art.'
    },
    {
        id: 'srv-chrome-set',
        name: 'Metallic Chrome Finish',
        category: 'nailart',
        price: 110,
        duration: '75 mins',
        description: 'Structured builder gel overlay finished with premium reflective chrome pigments. Choice of gold, silver, or copper.'
    }
];

const STYLISTS_DATA = [
    {
        id: 'sty-jax',
        name: 'Jax Vance',
        role: 'Design Director / Master Stylist',
        specialty: 'Gel-X & Custom Art',
        avatarText: 'JV',
        experience: '9 yrs experience',
        bio: 'Jax brings a fine-arts background to every set of nails, with expertise in Aprés Gel-X extensions and bespoke hand-painted designs. Trained in Tokyo and New York, their work has been featured in editorial spreads and runway presentations.'
    },
    {
        id: 'sty-amara',
        name: 'Amara King',
        role: 'Master Nail Stylist',
        specialty: 'Minimalist Line Art & Cuticle Care',
        avatarText: 'AK',
        experience: '7 yrs experience',
        bio: 'Amara specializes in the Russian dry manicure method and minimalist gold-foil linework. Her precision cuticle work and clean geometric designs have earned a dedicated following among Uptown Dallas clientele.'
    },
    {
        id: 'sty-sterling',
        name: 'Marcus Sterling',
        role: 'Natural Care Specialist',
        specialty: 'Russian Cuticle & Therapy',
        avatarText: 'MS',
        experience: '6 yrs experience',
        bio: 'Marcus is dedicated to nail health and restoration, combining therapeutic soak treatments with structural reinforcement techniques. His clientele includes those recovering from nail damage seeking strength and length restoration.'
    }
];

const GALLERY_DATA = [
    { id: 'gal-1', name: '24k Gold Leaf Accents', category: 'gold-foil', image: 'nailart_aesthetic.png' },
    { id: 'gal-2', name: 'Chrome Over Gold Base', category: 'chrome', image: 'nailart_aesthetic.png' },
    { id: 'gal-3', name: 'Abstract Line Art', category: 'abstract', image: 'nailart_aesthetic.png' },
    { id: 'gal-4', name: 'Aprés Gel-X Medium', category: 'gel-x', image: 'extensions_aesthetic.png' },
    { id: 'gal-5', name: 'Modern French Edge', category: 'french', image: 'manicure_aesthetic.png' },
    { id: 'gal-6', name: 'Gold Foil Ombre Set', category: 'gold-foil', image: 'nailart_aesthetic.png' },
    { id: 'gal-7', name: 'Structured Gel Overlay', category: 'gel-x', image: 'extensions_aesthetic.png' },
    { id: 'gal-8', name: 'Iridescent Chrome Fade', category: 'chrome', image: 'pedicure_aesthetic.png' },
    { id: 'gal-9', name: 'Geometric Negative Space', category: 'abstract', image: 'nailart_aesthetic.png' },
    { id: 'gal-10', name: 'Soft Square Gel-X', category: 'gel-x', image: 'extensions_aesthetic.png' },
    { id: 'gal-11', name: 'Liquid Gold French Tip', category: 'french', image: 'manicure_aesthetic.png' },
    { id: 'gal-12', name: 'Hand-Painted Abstract', category: 'abstract', image: 'nailart_aesthetic.png' }
];

const PRODUCTS_DATA = [
    {
        id: 'prod-cuticle-oil',
        name: 'Gold Serum Cuticle Oil',
        price: 28,
        description: 'Jojoba & argan oil blend with 24k gold flakes. Daily cuticle nourishment.'
    },
    {
        id: 'prod-nail-serum',
        name: 'Strengthening Nail Serum',
        price: 35,
        description: 'Biotin-enriched formula to reinforce natural nail structure and prevent breakage.'
    },
    {
        id: 'prod-polish-set',
        name: 'Gilded Neutral Polish Set',
        price: 48,
        description: 'Set of 3 signature non-toxic polishes: Ivory Stone, Warm Sand, and Gilded Taupe.'
    },
    {
        id: 'prod-hand-cream',
        name: 'Organic Hand Ritual Cream',
        price: 32,
        description: 'Shea butter and botanical extract blend. Lightweight post-treatment hydration.'
    },
    {
        id: 'prod-gel-topcoat',
        name: 'Anti-Chip Gel Top Coat',
        price: 22,
        description: 'Salon-grade UV gel top coat for extending manicure wear at home.'
    },
    {
        id: 'prod-bath-soak',
        name: 'Botanical Foot Soak Blend',
        price: 38,
        description: 'Organic mineral salts, dried botanicals, and eucalyptus for home spa rituals.'
    }
];

const INITIAL_REVIEWS = [
    {
        name: 'Sophia Loren',
        rating: 5,
        text: 'The Gilded Manicure was a work of art. The salon interior is incredibly serene, and the concrete-and-wood aesthetic feels so premium.',
        date: '2026-06-08'
    },
    {
        name: 'Olivia Martinez',
        rating: 5,
        text: 'Amara did the most delicate minimalist gold linework on my short nails. It matches the Le Labo vibe perfectly.',
        date: '2026-06-11'
    },
    {
        name: 'Julian Vance',
        rating: 5,
        text: 'Cleanest dry manicure I\'ve ever had. Marcus has extreme precision. Absolute luxury.',
        date: '2026-06-05'
    }
];

// --- Supabase & Local Database Mock Integrations ---
const mockSupabase = {
    _read: (key, defaultVal) => {
        const val = localStorage.getItem(key);
        if (!val) {
            localStorage.setItem(key, JSON.stringify(defaultVal));
            return defaultVal;
        }
        return JSON.parse(val);
    },
    _write: (key, data) => {
        localStorage.setItem(key, JSON.stringify(data));
    },
    from: function(table) {
        const self = this;
        let key = '';
        let defaultData = [];
        
        if (table === 'services') {
            key = 'gilded_services';
            defaultData = SERVICES_DATA;
        } else if (table === 'reviews') {
            key = 'gilded_reviews';
            defaultData = INITIAL_REVIEWS;
        } else if (table === 'appointments') {
            key = 'gilded_appointments';
            defaultData = [];
        } else {
            key = `gilded_${table}`;
            defaultData = [];
        }

        return {
            select: async () => {
                await new Promise(resolve => setTimeout(resolve, 100));
                const data = self._read(key, defaultData);
                return { data, error: null };
            },
            insert: async (rows) => {
                await new Promise(resolve => setTimeout(resolve, 100));
                const data = self._read(key, defaultData);
                const updated = [...rows, ...data];
                self._write(key, updated);
                return { data: rows, error: null };
            },
            delete: function() {
                return {
                    eq: async (column, value) => {
                        await new Promise(resolve => setTimeout(resolve, 100));
                        const data = self._read(key, defaultData);
                        const filtered = data.filter(item => item[column] !== value);
                        self._write(key, filtered);
                        return { error: null };
                    }
                };
            }
        };
    }
};

// --- Application State ---
let bookingState = {
    step: 1,
    service: null,
    stylist: null,
    date: null,
    time: null,
    addOns: [],
    client: {
        name: '',
        email: '',
        phone: '',
        notes: ''
    }
};

let activeCalendarDate = new Date(); // Current date for calendar render

// --- Initialize App ---
document.addEventListener('DOMContentLoaded', () => {
    initCustomIcons();
    initSplashEntrance();
    initNavigation();
    initServicesMenu();
    initBookingWizard();
    initReviewsSystem();
    initBookingsManager();
    initPrivateEventsModal();
    initGiftCards();
    initLoyalty();
    initRebookNudge();
    initTryOn();
    initMobileBookCta();
    initFooterAccordions();
    initGallery();
    initFaqAccordion();
    initScrollReveal();
});

// ==========================================================================
// Toast Notification System
// ==========================================================================

function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('removing');
        setTimeout(() => toast.remove(), 400);
    }, 3500);
}

// ==========================================================================
// Accessibility: Focus Trap & Global Escape Handler
// ==========================================================================

function trapFocus(container) {
    const focusable = container.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first.focus();

    function handleTab(e) {
        if (e.key !== 'Tab') return;
        if (e.shiftKey) {
            if (document.activeElement === first) {
                e.preventDefault();
                last.focus();
            }
        } else {
            if (document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    }

    container.addEventListener('keydown', handleTab);
    const observer = new MutationObserver(() => {
        if (container.getAttribute('aria-hidden') === 'true') {
            container.removeEventListener('keydown', handleTab);
            observer.disconnect();
        }
    });
    observer.observe(container, { attributes: true, attributeFilter: ['aria-hidden'] });
}

function trapFocusOnActive(container) {
    setTimeout(() => trapFocus(container), 50);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.active, .mega-menu-overlay.active').forEach(el => {
            el.classList.remove('active');
            el.setAttribute('aria-hidden', 'true');
        });
    }
});

// ==========================================================================
// 0. Custom Icon Injection — replaces FontAwesome classes with inline SVGs
// ==========================================================================
function initCustomIcons() {
    const faMap = {
        'fa-solid fa-chevron-down': 'icon-chevron-down',
        'fa-solid fa-chevron-left': 'icon-chevron-left',
        'fa-solid fa-chevron-right': 'icon-chevron-right',
        'fa-solid fa-check': 'icon-check',
        'fa-solid fa-plus': 'icon-plus',
        'fa-solid fa-calendar-plus': 'icon-calendar',
        'fa-solid fa-calendar-check': 'icon-calendar',
        'fa-regular fa-star': 'icon-star',
        'fa-solid fa-star': 'icon-star-filled',
        'fa-solid fa-location-dot': 'icon-pin',
        'fa-solid fa-phone': 'icon-phone',
        'fa-solid fa-envelope': 'icon-mail',
        'fa-solid fa-bell': 'icon-sparkle',
        'fa-brands fa-instagram': 'icon-instagram',
        'fa-brands fa-pinterest': 'icon-pinterest',
        'fa-brands fa-tiktok': 'icon-tiktok',
        'fa-solid fa-sparkles': 'icon-sparkle',
        'fa-regular fa-clock': 'icon-clock',
        'fa-solid fa-clock': 'icon-clock',
        'fa-solid fa-arrow-up-right-from-square': 'icon-arrow-up-right',
        'fa-solid fa-car': 'icon-car',
        'fa-solid fa-train': 'icon-train',
        'fa-solid fa-xmark': 'icon-close',
        'fa-solid fa-close': 'icon-close',
        'fa-solid fa-bars': 'icon-menu',
        'fa-solid fa-gift': 'icon-gift',
        'fa-solid fa-leaf': 'icon-leaf',
        'fa-solid fa-hand': 'icon-hand',
        'fa-solid fa-bag-shopping': 'icon-bag',
        'fa-regular fa-star-half-stroke': 'icon-star'
    };

    document.querySelectorAll('i[class*="fa-"]').forEach(el => {
        const cls = Array.from(el.classList);
        const iconId = (() => {
            for (const [key, id] of Object.entries(faMap)) {
                if (key.split(' ').every(c => cls.includes(c))) return id;
            }
            return null;
        })();
        if (iconId) {
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('class', 'icon' + (iconId === 'icon-star-filled' ? ' icon-star-filled' : ''));
            svg.setAttribute('aria-hidden', 'true');
            const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
            use.setAttribute('href', '#' + iconId);
            svg.appendChild(use);
            el.replaceWith(svg);
        }
    });
}

// ==========================================================================
// 1. Splash Screen & Location Selection
// ==========================================================================
function initSplashEntrance() {
    const splash = document.getElementById('splash-screen');
    const enterBtn = document.getElementById('enter-site-btn');
    const locationLine = document.getElementById('splash-location-line');
    const logo = document.querySelector('.splash-logo');
    const logoContainer = document.querySelector('.splash-logo-container');

    if (sessionStorage.getItem('gilded_entered') === 'true') {
        splash.style.display = 'none';
        return;
    }

    if (logoContainer) {
        setTimeout(() => {
            logoContainer.classList.add('circle-reveal');
        }, 50);
    }

    if (logo) {
        setTimeout(() => {
            logo.classList.add('splash-logo--reveal');
        }, 200);

        const diamond = logo.querySelector('.logo-mark-diamond');
        if (diamond) {
            diamond.addEventListener('click', (e) => {
                diamond.classList.remove('sparkle');
                void diamond.offsetWidth;
                diamond.classList.add('sparkle');
            });
        }
    }

    /* Typewriter — reveal location line character by character */
    const entranceLine = document.getElementById('splash-entrance-line');
    if (entranceLine) {
        setTimeout(() => {
            entranceLine.classList.add('draw');
        }, 1550);
    }

    if (locationLine) {
        const text = locationLine.getAttribute('data-text') || '';
        locationLine.textContent = '';
        let idx = 0;
        const typeInterval = 60;
        const typePauseStart = 1800;

        setTimeout(() => {
            locationLine.classList.add('typing');
            locationLine.classList.add('visible');

            const timer = setInterval(() => {
                if (idx < text.length) {
                    locationLine.textContent = text.slice(0, idx + 1);
                    idx++;
                } else {
                    clearInterval(timer);
                    locationLine.classList.remove('typing');
                }
            }, typeInterval);
        }, typePauseStart);
    }

    enterBtn.addEventListener('click', () => {
        splash.classList.add('fade-out');
        sessionStorage.setItem('gilded_entered', 'true');

        setTimeout(() => {
            const firstHero = document.getElementById('category-manicures');
            if (firstHero) {
                firstHero.scrollIntoView({ behavior: 'smooth' });
            }
        }, 300);
    });

    /* Magnetic diamond — header logo diamond subtly follows cursor via CSS custom properties */
    const logoLink = document.getElementById('logo');
    const headerDiamond = document.querySelector('.logo-mark-header .logo-mark-diamond');
    if (logoLink && headerDiamond) {
        const maxMove = 5;

        logoLink.addEventListener('mousemove', (e) => {
            const rect = logoLink.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = (e.clientX - cx) / (rect.width / 2) * maxMove;
            const dy = (e.clientY - cy) / (rect.height / 2) * maxMove;

            headerDiamond.style.setProperty('--mx', dx + 'px');
            headerDiamond.style.setProperty('--my', dy + 'px');
        });

        logoLink.addEventListener('mouseleave', () => {
            headerDiamond.style.removeProperty('--mx');
            headerDiamond.style.removeProperty('--my');
        });
    }
}

// ==========================================================================
// 2. Navigation — Mega Menu & Mobile Toggle
// ==========================================================================
function initNavigation() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const megaMenu = document.getElementById('mega-menu');
    const megaMenuBtn = document.getElementById('mega-menu-btn');
    const megaMenuClose = document.getElementById('mega-menu-close');
    const header = document.getElementById('main-header');

    function openMegaMenu() {
        megaMenu.classList.add('active');
        megaMenu.setAttribute('aria-hidden', 'false');
        mobileToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    function closeMegaMenu() {
        megaMenu.classList.remove('active');
        megaMenu.setAttribute('aria-hidden', 'true');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    // Mobile toggle
    mobileToggle.addEventListener('click', () => {
        const isOpen = megaMenu.classList.contains('active');
        isOpen ? closeMegaMenu() : openMegaMenu();
    });

    // Desktop "Menu" button
    if (megaMenuBtn) {
        megaMenuBtn.addEventListener('click', openMegaMenu);
    }

    // Close button
    if (megaMenuClose) {
        megaMenuClose.addEventListener('click', closeMegaMenu);
    }

    // Close on link click
    document.querySelectorAll('.mega-menu-link').forEach(link => {
        link.addEventListener('click', closeMegaMenu);
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && megaMenu.classList.contains('active')) {
            closeMegaMenu();
        }
    });

    // Scroll listener for header shrinking
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.5rem 0';
            header.style.backgroundColor = 'rgba(248, 239, 225, 0.98)';
        } else {
            header.style.padding = '1.25rem 0';
            header.style.backgroundColor = 'rgba(248, 239, 225, 0.95)';
        }
    });

    // Handle Quick Book Banner links (Explore Menu links on banners)
    document.querySelectorAll('.cat-btn-explore').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const category = btn.getAttribute('data-category');
            
            // Highlight catalog tab and filter
            const tab = document.querySelector(`.tab-btn[data-category="${category}"]`);
            if (tab) {
                tab.click();
            }
            
            // Scroll to catalog section
            const servicesSec = document.getElementById('services');
            if (servicesSec) {
                servicesSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ==========================================================================
// 3. Services Menu (Apothecary Catalog)
// ==========================================================================
function initServicesMenu() {
    const tabs = document.querySelectorAll('.tab-btn');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderServices(tab.getAttribute('data-category'));
        });
    });

    renderServices('all');
}

function renderServices(category) {
    const grid = document.getElementById('services-grid');
    grid.innerHTML = '';

    // Show skeletons to simulate upscale loading
    for (let i = 0; i < 3; i++) {
        const skeleton = document.createElement('div');
        skeleton.className = 'skeleton-card';
        skeleton.innerHTML = '<div class="skeleton-shimmer"></div>';
        grid.appendChild(skeleton);
    }

    setTimeout(async () => {
        grid.innerHTML = '';
        const { data: servicesData } = await mockSupabase.from('services').select();
        const services = servicesData || SERVICES_DATA;
        const filtered = services.filter(item => category === 'all' || item.category === category);
        
        if (filtered.length === 0) {
            grid.innerHTML = '<p class="w-100 text-center" style="font-family: var(--font-mono); font-size: 0.85rem;">No services listed.</p>';
            return;
        }

        filtered.forEach(service => {
            const card = document.createElement('div');
            card.className = 'service-card';
            card.innerHTML = `
                <div>
                    <div class="service-header">
                        <h3>${service.name}</h3>
                        <span class="service-price">$${service.price}</span>
                    </div>
                    <p class="service-desc">${service.description}</p>
                </div>
                <div class="service-footer">
                    <span class="service-duration"><svg class="icon" aria-hidden="true"><use href="#icon-clock"/></svg> ${service.duration}</span>
                    <a href="#booking" class="service-card-btn" data-id="${service.id}">
                        SELECT FOR RESERVATION
                    </a>
                </div>
            `;
            
            // Add click listener to quick book
            card.querySelector('.service-card-btn').addEventListener('click', () => {
                selectBookingService(service.id);
                navigateToBookingStep(2);
            });

            grid.appendChild(card);
        });
    }, 350);
}

// ==========================================================================
// 4. Booking Wizard Logic (Typewriter Aesthetic)
// ==========================================================================
function initBookingWizard() {
    const prevBtn = document.getElementById('booking-prev-btn');
    const nextBtn = document.getElementById('booking-next-btn');
    const receiptCloseBtn = document.getElementById('receipt-close-btn');
    
    // Calendar month nav
    document.getElementById('prev-month-btn').addEventListener('click', () => adjustCalendarMonth(-1));
    document.getElementById('next-month-btn').addEventListener('click', () => adjustCalendarMonth(1));

    // Wizard triggers
    prevBtn.addEventListener('click', () => navigateToBookingStep(bookingState.step - 1));
    nextBtn.addEventListener('click', handleNextStepValidation);
    receiptCloseBtn.addEventListener('click', resetBookingWizard);

    // Populate steps
    populateBookingServices();
    populateBookingStylists();
    renderBookingCalendar();
}

function navigateToBookingStep(targetStep) {
    if (targetStep < 1 || targetStep > 4) return;

    document.getElementById(`booking-panel-${bookingState.step}`).classList.remove('active');
    bookingState.step = targetStep;
    document.getElementById(`booking-panel-${bookingState.step}`).classList.add('active');

    document.querySelectorAll('.booking-steps-bar .step').forEach((stepEl, idx) => {
        const stepNum = idx + 1;
        stepEl.classList.remove('active', 'completed');
        if (stepNum === bookingState.step) {
            stepEl.classList.add('active');
        } else if (stepNum < bookingState.step) {
            stepEl.classList.add('completed');
        }
    });

    const prevBtn = document.getElementById('booking-prev-btn');
    const nextBtn = document.getElementById('booking-next-btn');

    prevBtn.disabled = bookingState.step === 1;

    if (bookingState.step === 4) {
        nextBtn.innerHTML = 'Confirm Appointment';
    } else {
        nextBtn.innerHTML = 'Next Step';
    }

    document.getElementById('booking').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

async function handleNextStepValidation() {
    if (bookingState.step === 1) {
        if (!bookingState.service) {
            showToast('Please select a service before proceeding.');
            return;
        }
        navigateToBookingStep(2);
    } else if (bookingState.step === 2) {
        if (!bookingState.stylist) {
            showToast('Please select a stylist before proceeding.');
            return;
        }
        navigateToBookingStep(3);
    } else if (bookingState.step === 3) {
        if (!bookingState.date || !bookingState.time) {
            showToast('Please select a date and time slot.');
            return;
        }
        navigateToBookingStep(4);
    } else if (bookingState.step === 4) {
        const form = document.getElementById('booking-details-form');
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const depositConsent = document.getElementById('deposit-consent');
        if (depositConsent && !depositConsent.checked) {
            showToast('Please agree to the $10 deposit to secure your appointment.');
            return;
        }

        bookingState.client.name = document.getElementById('client-name').value;
        bookingState.client.email = document.getElementById('client-email').value;
        bookingState.client.phone = document.getElementById('client-phone').value;
        bookingState.client.notes = document.getElementById('client-notes').value;

        await triggerBookingConfirmation();
    }
}

// Step 1 Population
async function populateBookingServices() {
    const listEl = document.getElementById('booking-services-list');
    listEl.innerHTML = '';

    const { data: servicesData } = await mockSupabase.from('services').select();
    const services = servicesData || SERVICES_DATA;

    services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'select-card';
        card.dataset.id = service.id;
        card.innerHTML = `
            <h4>${service.name}</h4>
            <p class="card-subtext">${service.duration}</p>
            <span class="card-price">$${service.price}</span>
        `;
        
        card.addEventListener('click', () => {
            selectBookingService(service.id);
        });

        listEl.appendChild(card);
    });
}

async function selectBookingService(id) {
    const { data: servicesData } = await mockSupabase.from('services').select();
    const services = servicesData || SERVICES_DATA;
    bookingState.service = services.find(s => s.id === id);
    
    document.querySelectorAll('#booking-services-list .select-card').forEach(card => {
        card.classList.toggle('selected', card.dataset.id === id);
    });
}

// Step 2 Population (Shop Add-ons)
function populateShopAddOns() {
    const listEl = document.getElementById('booking-addons-list');
    if (!listEl) return;
    listEl.innerHTML = '';

    PRODUCTS_DATA.forEach(product => {
        const card = document.createElement('div');
        card.className = 'addon-card';
        card.dataset.id = product.id;
        card.innerHTML = `
            <div class="addon-card-check"><svg class="icon" aria-hidden="true"><use href="#icon-plus"/></svg></div>
            <div class="addon-card-body">
                <h4>${product.name}</h4>
                <p class="card-subtext">${product.description}</p>
            </div>
            <span class="addon-card-price">$${product.price}</span>
        `;

        card.addEventListener('click', () => toggleShopAddon(product.id, card));
        listEl.appendChild(card);
    });
}

function toggleShopAddon(id, cardEl) {
    const product = PRODUCTS_DATA.find(p => p.id === id);
    const existingIdx = bookingState.addOns.findIndex(a => a.id === id);

    if (existingIdx > -1) {
        bookingState.addOns.splice(existingIdx, 1);
        cardEl.classList.remove('selected');
        const plusIcon = cardEl.querySelector('.addon-card-check use');
        if (plusIcon) plusIcon.setAttribute('href', '#icon-plus');
    } else {
        bookingState.addOns.push(product);
        cardEl.classList.add('selected');
        const checkIcon = cardEl.querySelector('.addon-card-check use');
        if (checkIcon) checkIcon.setAttribute('href', '#icon-check');
    }
}

// Step 3 Population (Stylists)
function populateBookingStylists() {
    const listEl = document.getElementById('booking-stylists-list');
    listEl.innerHTML = '';

    // "First Available" card
    const anyCard = document.createElement('div');
    anyCard.className = 'select-card';
    anyCard.dataset.id = 'any';
    anyCard.innerHTML = `
        <div class="stylist-avatar"><svg class="icon" aria-hidden="true"><use href="#icon-sparkle"/></svg></div>
        <h4>First Available</h4>
        <p class="card-subtext">Match with any of our master artists</p>
    `;
    anyCard.addEventListener('click', () => {
        selectBookingStylist('any');
    });
    listEl.appendChild(anyCard);

    STYLISTS_DATA.forEach(stylist => {
        const card = document.createElement('div');
        card.className = 'select-card';
        card.dataset.id = stylist.id;
        card.innerHTML = `
            <div class="stylist-avatar">${stylist.avatarText}</div>
            <h4>${stylist.name}</h4>
            <p class="card-subtext">${stylist.role}</p>
            <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--color-muted);">${stylist.specialty}</span>
            <span style="display: block; font-family: var(--font-mono); font-size: 0.65rem; color: var(--color-muted); margin-top: 0.25rem;">${stylist.experience}</span>
        `;
        
        card.addEventListener('click', () => {
            selectBookingStylist(stylist.id);
        });

        listEl.appendChild(card);
    });
}

function selectBookingStylist(id) {
    if (id === 'any') {
        bookingState.stylist = { id: 'any', name: 'First Available Artist', role: 'Premium Selection' };
    } else {
        bookingState.stylist = STYLISTS_DATA.find(s => s.id === id);
    }

    document.querySelectorAll('#booking-stylists-list .select-card').forEach(card => {
        card.classList.toggle('selected', card.dataset.id === id);
    });
}

// Step 3 Calendar and Time Slots Logic
function adjustCalendarMonth(offset) {
    activeCalendarDate.setMonth(activeCalendarDate.getMonth() + offset);
    renderBookingCalendar();
}

function renderBookingCalendar() {
    const calendarMonthYear = document.getElementById('calendar-month-year');
    const daysGrid = document.getElementById('calendar-days-grid');
    daysGrid.innerHTML = '';

    const year = activeCalendarDate.getFullYear();
    const month = activeCalendarDate.getMonth();

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    calendarMonthYear.innerHTML = `${monthNames[month]} ${year}`;

    const firstDayIndex = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    const today = new Date();
    today.setHours(0,0,0,0);

    for (let i = 0; i < firstDayIndex; i++) {
        const emptyCell = document.createElement('span');
        emptyCell.className = 'calendar-day-cell empty';
        daysGrid.appendChild(emptyCell);
    }

    for (let dayNum = 1; dayNum <= totalDays; dayNum++) {
        const cellDate = new Date(year, month, dayNum);
        const cell = document.createElement('span');
        cell.className = 'calendar-day-cell';
        cell.innerText = dayNum;

        const dayOfWeek = cellDate.getDay();
        const isClosed = dayOfWeek === 0 || dayOfWeek === 1; // closed Sun & Mon

        if (cellDate < today || isClosed) {
            cell.classList.add('disabled');
        } else {
            cell.addEventListener('click', () => {
                document.querySelectorAll('#calendar-days-grid .calendar-day-cell').forEach(c => c.classList.remove('active-day'));
                cell.classList.add('active-day');
                
                bookingState.date = cellDate;
                renderTimeSlots();
            });

            if (bookingState.date && bookingState.date.toDateString() === cellDate.toDateString()) {
                cell.classList.add('active-day');
            }
        }

        daysGrid.appendChild(cell);
    }
}

function renderTimeSlots() {
    const timeSlotsList = document.getElementById('time-slots-list');
    timeSlotsList.innerHTML = '';

    const slots = ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"];
    const bookedSlots = JSON.parse(localStorage.getItem('gilded_booked_slots') || '[]');
    const today = bookingState.date ? bookingState.date.toDateString() : '';
    const now = new Date();
    const isToday = bookingState.date && bookingState.date.toDateString() === now.toDateString();

    const slotToMinutes = (s) => {
        const [_, h, m, ap] = s.match(/^(\d+):(\d+) (AM|PM)$/);
        const hr = (ap === 'PM' && h !== '12' ? +h + 12 : ap === 'AM' && h === '12' ? 0 : +h);
        return hr * 60 + +m;
    };

    const nowMinutes = now.getHours() * 60 + now.getMinutes();
    
    slots.forEach(slot => {
        const slotBtn = document.createElement('button');
        slotBtn.type = 'button';
        slotBtn.className = 'time-slot-btn';
        slotBtn.innerText = slot;

        if (isToday && slotToMinutes(slot) <= nowMinutes) {
            slotBtn.classList.add('booked');
            slotBtn.disabled = true;
            timeSlotsList.appendChild(slotBtn);
            return;
        }

        const slotKey = today + '|' + slot;
        const isBooked = bookedSlots.includes(slotKey);

        if (isBooked) {
            slotBtn.classList.add('booked');
            slotBtn.disabled = true;

            const waitlistToggle = document.createElement('button');
            waitlistToggle.type = 'button';
            waitlistToggle.className = 'time-slot-waitlist';
            waitlistToggle.innerText = 'Join waitlist';

            const waitlistForm = document.createElement('div');
            waitlistForm.className = 'waitlist-inline';
            waitlistForm.innerHTML = `
                <input type="email" placeholder="Your email" aria-label="Email for waitlist">
                <button type="button">Notify Me</button>
            `;

            waitlistToggle.addEventListener('click', () => {
                waitlistForm.classList.toggle('open');
                if (waitlistForm.classList.contains('open')) {
                    waitlistForm.querySelector('input').focus();
                }
            });

            waitlistForm.querySelector('button').addEventListener('click', () => {
                const email = waitlistForm.querySelector('input').value.trim();
                if (!email || !email.includes('@')) {
                    showToast('Please enter a valid email address.');
                    return;
                }
                const waitlist = JSON.parse(localStorage.getItem('gilded_waitlist') || '[]');
                waitlist.push({ slot: slotKey, email });
                localStorage.setItem('gilded_waitlist', JSON.stringify(waitlist));
                waitlistForm.querySelector('input').value = '';
                waitlistForm.classList.remove('open');
                waitlistToggle.innerText = 'Added!';
                waitlistToggle.disabled = true;
                showToast('You\'ll be notified if this slot opens.');
            });

            const wrapper = document.createElement('div');
            wrapper.className = 'time-slot-wrapper';
            wrapper.appendChild(slotBtn);
            wrapper.appendChild(waitlistToggle);
            wrapper.appendChild(waitlistForm);
            timeSlotsList.appendChild(wrapper);
            return;
        }

        if (bookingState.time === slot) {
            slotBtn.classList.add('selected');
        }

        slotBtn.addEventListener('click', () => {
            document.querySelectorAll('#time-slots-list .time-slot-btn').forEach(b => b.classList.remove('selected'));
            slotBtn.classList.add('selected');
            bookingState.time = slot;
        });

        timeSlotsList.appendChild(slotBtn);
    });

    // Simulate some booked slots for demo purposes
    if (!localStorage.getItem('gilded_booked_slots')) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowKey = tomorrow.toDateString();
        localStorage.setItem('gilded_booked_slots', JSON.stringify([
            tomorrowKey + '|10:00 AM',
            tomorrowKey + '|1:45 PM',
        ]));
    }
}

// Step 5 Submit and Modal display
async function triggerBookingConfirmation() {
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = bookingState.date.toLocaleDateString('en-US', dateOptions);

    document.getElementById('receipt-service').innerText = bookingState.service.name;
    document.getElementById('receipt-stylist').innerText = `${bookingState.stylist.name} (${bookingState.stylist.role || 'Artist'})`;
    document.getElementById('receipt-datetime').innerText = `${formattedDate} at ${bookingState.time}`;
    document.getElementById('receipt-client').innerText = bookingState.client.name;

    const addOnsContainer = document.getElementById('receipt-addons-container');
    addOnsContainer.innerHTML = '';
    bookingState.addOns.forEach(addon => {
        const row = document.createElement('div');
        row.className = 'receipt-row';
        row.innerHTML = `<span>ADD-ON:</span><strong>${addon.name} — $${addon.price}.00</strong>`;
        addOnsContainer.appendChild(row);
    });

    const addOnsTotal = bookingState.addOns.reduce((sum, item) => sum + item.price, 0);
    const totalPrice = bookingState.service.price + addOnsTotal;
    document.getElementById('receipt-price').innerText = `$${totalPrice}.00`;

    const appointmentId = 'appt-' + Math.random().toString(36).substr(2, 9);

    const payload = {
        id: appointmentId,
        service_id: bookingState.service.id,
        service_name: bookingState.service.name,
        stylist_id: bookingState.stylist.id,
        stylist_name: bookingState.stylist.name,
        date: bookingState.date.toISOString(),
        time: bookingState.time,
        addons: bookingState.addOns.map(a => a.name),
        client_name: bookingState.client.name,
        client_email: bookingState.client.email,
        client_phone: bookingState.client.phone,
        notes: bookingState.client.notes
    };

    await mockSupabase.from('appointments').insert([payload]);

    // Set follow-up reminder (14 days out for gel refresh cycle)
    const reminderDate = new Date(bookingState.date);
    reminderDate.setDate(reminderDate.getDate() + 14);
    const reminders = JSON.parse(localStorage.getItem('gilded_reminders') || '[]');
    reminders.push({
        serviceName: bookingState.service.name,
        stylistName: bookingState.stylist.name,
        reminderDate: reminderDate.toISOString(),
        created: new Date().toISOString()
    });
    localStorage.setItem('gilded_reminders', JSON.stringify(reminders));

    // Mark this slot as booked in localStorage
    const bookedSlots = JSON.parse(localStorage.getItem('gilded_booked_slots') || '[]');
    const slotKey = bookingState.date.toDateString() + '|' + bookingState.time;
    if (!bookedSlots.includes(slotKey)) {
        bookedSlots.push(slotKey);
        localStorage.setItem('gilded_booked_slots', JSON.stringify(bookedSlots));
    }

    // ICS Calendar download handler
    const icsBtn = document.getElementById('receipt-ics-btn');
    if (icsBtn) {
        icsBtn.onclick = () => {
            const toPad = (n) => String(n).padStart(2, '0');
            const toICSDate = (d) => d.toISOString().split('T')[0].replace(/-/g, '');
            const toICSTime = (t) => {
                const m = t.match(/^(\d+):(\d+) (AM|PM)$/);
                if (!m) return '000000';
                let h = +m[1];
                if (m[3] === 'PM' && h !== 12) h += 12;
                if (m[3] === 'AM' && h === 12) h = 0;
                return toPad(h) + m[2] + '00';
            };
            const parseHour = (t) => {
                const m = t.match(/^(\d+):(\d+) (AM|PM)$/);
                let h = +m[1];
                if (m[3] === 'PM' && h !== 12) h += 12;
                if (m[3] === 'AM' && h === 12) h = 0;
                return h;
            };
            const toTimeStr = (h) => {
                const ap = h >= 12 ? 'PM' : 'AM';
                const hour12 = h > 12 ? h - 12 : (h === 0 ? 12 : h);
                return hour12 + ':00 ' + ap;
            };

            const startRaw = bookingState.time;
            const startHour = parseHour(startRaw);
            const endHour = startHour + 1;
            const endRaw = toTimeStr(endHour);

            const icsContent = [
                'BEGIN:VCALENDAR',
                'VERSION:2.0',
                'PRODID:-//Gilded Nail Bar//Booking//EN',
                'BEGIN:VEVENT',
                'DTSTART:' + toICSDate(bookingState.date) + 'T' + toICSTime(startRaw),
                'DTEND:' + toICSDate(bookingState.date) + 'T' + toICSTime(endRaw),
                'SUMMARY:Gilded Nail Bar - ' + bookingState.service.name,
                'DESCRIPTION:Appointment with ' + bookingState.stylist.name + '\\nLocation: 3636 McKinney Ave, Suite 150, Dallas, TX 75204',
                'LOCATION:3636 McKinney Ave, Suite 150, Dallas, TX 75204',
                'END:VEVENT',
                'END:VCALENDAR'
            ].join('\r\n');

            const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'gilded-nail-bar-appointment.ics';
            link.click();
            URL.revokeObjectURL(link.href);
        };
    }

    const modal = document.getElementById('receipt-modal');
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    trapFocusOnActive(modal);

    // Pulse the success badge
    const badge = document.getElementById('receipt-success-badge');
    if (badge) {
        badge.classList.remove('pulse');
        void badge.offsetWidth;
        badge.classList.add('pulse');
    }
}

function resetBookingWizard() {
    const modal = document.getElementById('receipt-modal');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');

    bookingState = {
        step: 1,
        service: null,
        stylist: null,
        date: null,
        time: null,
        addOns: [],
        client: { name: '', email: '', phone: '', notes: '' }
    };

    document.querySelectorAll('.select-card').forEach(c => c.classList.remove('selected'));
    document.querySelectorAll('.addon-card').forEach(c => {
        c.classList.remove('selected');
        const use = c.querySelector('.addon-card-check use');
        if (use) use.setAttribute('href', '#icon-plus');
    });
    document.querySelectorAll('.calendar-day-cell').forEach(c => c.classList.remove('active-day'));
    document.getElementById('time-slots-list').innerHTML = '';
    document.getElementById('booking-details-form').reset();

    navigateToBookingStep(1);
}

// ==========================================================================
// 5. Bookings Manager Logic (Reservations Viewer Modal)
// ==========================================================================
function initBookingsManager() {
    const viewBtn = document.getElementById('view-bookings-btn');
    const modal = document.getElementById('bookings-modal');
    const closeBtn = document.getElementById('bookings-modal-close-btn');

    viewBtn.addEventListener('click', (e) => {
        e.preventDefault();
        renderBookingsList();
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        trapFocusOnActive(modal);
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
    });
}

async function renderBookingsList() {
    const container = document.getElementById('bookings-list-container');
    container.innerHTML = '';

    const { data: appointments } = await mockSupabase.from('appointments').select();
    
    if (!appointments || appointments.length === 0) {
        container.innerHTML = '<p style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--color-muted);">No current reservations found.</p>';
        return;
    }

    appointments.forEach(appt => {
        const dateObj = new Date(appt.date);
        const dateStr = dateObj.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
        
        const card = document.createElement('div');
        card.className = 'booking-item-card';
        card.innerHTML = `
            <div class="booking-item-header">
                <h4>${appt.service_name}</h4>
                <button type="button" class="booking-item-cancel-btn" data-id="${appt.id}">CANCEL</button>
            </div>
            <div class="booking-item-details">
                <span>Stylist: ${appt.stylist_name}</span>
                <span>Date: ${dateStr} at ${appt.time}</span>
                <span>Client: ${appt.client_name}</span>
            </div>
        `;

        card.querySelector('.booking-item-cancel-btn').addEventListener('click', async () => {
            card.style.opacity = '0.3';
            card.style.pointerEvents = 'none';
            await mockSupabase.from('appointments').delete().eq('id', appt.id);
            showToast('Reservation cancelled.');
            renderBookingsList();
        });

        container.appendChild(card);
    });
}

// ==========================================================================
// 6. Reviews System Logic
// ==========================================================================
function initReviewsSystem() {
    const reviewForm = document.getElementById('new-review-form');
    const starInput = document.getElementById('star-rating-input');
    let selectedRating = 0;

    starInput.addEventListener('click', (e) => {
        const starBtn = e.target.closest('.star-btn');
        if (!starBtn) return;

        selectedRating = parseInt(starBtn.dataset.rating);
        
        document.querySelectorAll('#star-rating-input .star-btn').forEach((btn, idx) => {
            const starUse = btn.querySelector('use');
            if (idx < selectedRating) {
                btn.classList.add('active');
                if (starUse) starUse.setAttribute('href', '#icon-star-filled');
            } else {
                btn.classList.remove('active');
                if (starUse) starUse.setAttribute('href', '#icon-star');
            }
        });
    });

    reviewForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (selectedRating === 0) {
            showToast('Please select a star rating.');
            return;
        }

        const nameInput = document.getElementById('review-name');
        const textInput = document.getElementById('review-text');

        const newReview = {
            name: nameInput.value,
            rating: selectedRating,
            text: textInput.value,
            date: new Date().toISOString().split('T')[0]
        };

        await mockSupabase.from('reviews').insert([newReview]);
        await renderReviews();
        
        reviewForm.reset();
        selectedRating = 0;
        document.querySelectorAll('#star-rating-input .star-btn').forEach(btn => {
            btn.classList.remove('active');
            const starUse = btn.querySelector('use');
            if (starUse) starUse.setAttribute('href', '#icon-star');
        });

        showToast('Thank you for sharing your experience.');
    });

    renderReviews();
}

async function renderReviews() {
    const feed = document.getElementById('reviews-feed');
    const avgScoreEl = document.getElementById('avg-score');
    const avgStarsEl = document.getElementById('avg-stars-display');
    const totalCountEl = document.getElementById('total-reviews-count');

    feed.innerHTML = '';
    const { data: reviewsList } = await mockSupabase.from('reviews').select();

    if (!reviewsList || reviewsList.length === 0) {
        feed.innerHTML = '<p class="w-100 text-center" style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--color-muted);">No reviews written yet.</p>';
        return;
    }

    const sum = reviewsList.reduce((acc, curr) => acc + curr.rating, 0);
    const avg = (sum / reviewsList.length).toFixed(1);
    
    avgScoreEl.innerText = avg;
    totalCountEl.innerText = `based on ${reviewsList.length} guest entries`;

    avgStarsEl.innerHTML = '';
    const roundedAvg = Math.round(parseFloat(avg));
    for (let i = 1; i <= 5; i++) {
        if (i <= roundedAvg) {
            avgStarsEl.innerHTML += '<svg class="icon icon-star-filled" aria-hidden="true"><use href="#icon-star-filled"/></svg>';
        } else {
            avgStarsEl.innerHTML += '<svg class="icon" aria-hidden="true" style="opacity: 0.3;"><use href="#icon-star"/></svg>';
        }
    }

    reviewsList.forEach(review => {
        const reviewEl = document.createElement('div');
        reviewEl.className = 'review-card';
        
        let starsHtml = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= review.rating) {
                starsHtml += '<svg class="icon icon-star-filled" aria-hidden="true"><use href="#icon-star-filled"/></svg>';
            } else {
                starsHtml += '<svg class="icon" aria-hidden="true" style="opacity: 0.3;"><use href="#icon-star"/></svg>';
            }
        }

        reviewEl.innerHTML = `
            <div class="review-card-header">
                <span class="review-author">${review.name}</span>
                <span class="review-date">${review.date}</span>
            </div>
            <div class="stars" style="margin-bottom: 0.75rem;">${starsHtml}</div>
            <p class="review-text">"${review.text}"</p>
        `;

        feed.appendChild(reviewEl);
    });
}

// ==========================================================================
// 7. Private Events Modal
// ==========================================================================
function initPrivateEventsModal() {
    const modal = document.getElementById('private-events-modal');
    if (!modal) return;

    const openBtns = document.querySelectorAll('.open-private-events-btn');
    const closeBtn = document.getElementById('private-events-close-btn');
    const form = document.getElementById('private-events-form');
    const successEl = document.getElementById('private-events-success');

    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
            trapFocusOnActive(modal);
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const data = {
            name: document.getElementById('pe-name')?.value || '',
            email: document.getElementById('pe-email')?.value || '',
            phone: document.getElementById('pe-phone')?.value || '',
            guests: document.getElementById('pe-guests')?.value || '',
            type: document.getElementById('pe-type')?.value || '',
            date: document.getElementById('pe-date')?.value || '',
            notes: document.getElementById('pe-notes')?.value || '',
            submitted: new Date().toISOString()
        };

        const existing = JSON.parse(localStorage.getItem('gilded_private_events') || '[]');
        existing.push(data);
        localStorage.setItem('gilded_private_events', JSON.stringify(existing));

        form.style.display = 'none';
        successEl.classList.add('shown');

        setTimeout(() => {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            form.style.display = 'flex';
            successEl.classList.remove('shown');
            form.reset();
        }, 3000);
    });
}

// ==========================================================================
// 8. Gift Cards
// ==========================================================================
function initGiftCards() {
    const amountBtns = document.querySelectorAll('.gift-amount-btn');
    const amountDisplay = document.getElementById('gift-card-amount');
    const purchaseBtn = document.getElementById('gift-purchase-btn');

    if (!amountBtns.length) return;

    let selectedAmount = parseInt(document.querySelector('.gift-amount-btn.active')?.dataset.amount) || 100;

    amountBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            amountBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedAmount = parseInt(btn.dataset.amount);
            if (amountDisplay) amountDisplay.textContent = '$' + selectedAmount;
        });
    });

    if (purchaseBtn) {
        purchaseBtn.addEventListener('click', () => {
            const email = document.getElementById('gift-recipient')?.value;
            if (!email) {
                showToast('Please enter a recipient email address.');
                return;
            }
            const msg = document.getElementById('gift-message')?.value || '';

            document.getElementById('gift-confirm-amount').textContent = '$' + selectedAmount;
            document.getElementById('gift-confirm-recipient').textContent = 'Sent to ' + email;

            const modal = document.getElementById('gift-confirm-modal');
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
            trapFocusOnActive(modal);

            document.getElementById('gift-recipient').value = '';
            if (document.getElementById('gift-message')) document.getElementById('gift-message').value = '';
        });
    }

    // Gift confirm modal close
    const giftConfirmClose = document.getElementById('gift-confirm-close-btn');
    const giftConfirmModal = document.getElementById('gift-confirm-modal');
    if (giftConfirmClose && giftConfirmModal) {
        giftConfirmClose.addEventListener('click', () => {
            giftConfirmModal.classList.remove('active');
            giftConfirmModal.setAttribute('aria-hidden', 'true');
        });
    }
}

// ==========================================================================
// 9. Loyalty Rewards Program
// ==========================================================================
function initLoyalty() {
    const stampsContainer = document.getElementById('loyalty-stamps');
    const countEl = document.getElementById('loyalty-count');
    const rewardEl = document.getElementById('loyalty-reward');
    const checkinBtn = document.getElementById('loyalty-checkin-btn');
    const resetBtn = document.getElementById('loyalty-reset-btn');
    if (!stampsContainer) return;

    const STORAGE_KEY = 'gilded_loyalty_visits';
    const MAX_VISITS = 5;

    function getVisits() {
        return parseInt(localStorage.getItem(STORAGE_KEY) || '0');
    }

    function setVisits(n) {
        localStorage.setItem(STORAGE_KEY, n.toString());
    }

    function renderLoyalty() {
        const visits = getVisits();
        stampsContainer.innerHTML = '';
        for (let i = 0; i < MAX_VISITS; i++) {
            const stamp = document.createElement('div');
            stamp.className = 'loyalty-stamp' + (i < visits ? ' filled' : '');
            stamp.innerHTML = '<svg class="icon" aria-hidden="true"><use href="#icon-check"/></svg>';
            stampsContainer.appendChild(stamp);
        }
        if (countEl) countEl.textContent = visits;
        if (rewardEl) rewardEl.style.display = visits >= MAX_VISITS ? 'flex' : 'none';
        if (checkinBtn) checkinBtn.disabled = visits >= MAX_VISITS;
    }

    if (checkinBtn) {
        checkinBtn.addEventListener('click', () => {
            let visits = getVisits();
            if (visits >= MAX_VISITS) {
                showToast('You already have a reward waiting! Show this page at your next appointment to redeem.');
                return;
            }
            visits++;
            setVisits(visits);
            renderLoyalty();
            // Animate the newly filled stamp
            const filledStamps = stampsContainer.querySelectorAll('.loyalty-stamp.filled');
            const lastFilled = filledStamps[filledStamps.length - 1];
            if (lastFilled) {
                lastFilled.classList.add('pop');
            }
            if (visits >= MAX_VISITS) {
                showToast('Congratulations! You\'ve earned a complimentary Gel Manicure. Show this at your next appointment.');
            }
        });
    }

    if (resetBtn) {
        let resetConfirming = false;
        resetBtn.addEventListener('click', () => {
            if (!resetConfirming) {
                resetConfirming = true;
                resetBtn.textContent = 'CONFIRM RESET?';
                resetBtn.style.borderColor = 'var(--border-color-strong)';
                setTimeout(() => {
                    resetConfirming = false;
                    resetBtn.textContent = 'RESET';
                    resetBtn.style.borderColor = '';
                }, 4000);
            } else {
                setVisits(0);
                renderLoyalty();
                resetConfirming = false;
                resetBtn.textContent = 'RESET';
                resetBtn.style.borderColor = '';
                showToast('Loyalty card has been reset.');
            }
        });
    }

    renderLoyalty();
}

// ==========================================================================
// 10. Mobile Sticky Book CTA
// ==========================================================================
function initMobileBookCta() {
    const cta = document.getElementById('mobile-book-cta');
    if (!cta) return;

    const bookingSection = document.getElementById('booking');

    window.addEventListener('scroll', () => {
        if (!bookingSection) return;
        const rect = bookingSection.getBoundingClientRect();
        const inBooking = rect.top < window.innerHeight && rect.bottom > 80;
        if (inBooking) {
            cta.classList.add('hidden');
        } else {
            cta.classList.remove('hidden');
        }
    }, { passive: true });
}

// ==========================================================================
// Virtual Try-On — palette swatch preview
// ==========================================================================
function initTryOn() {
    const swatches = document.querySelectorAll('.tryon-palette-swatch');
    const label = document.getElementById('tryon-swatch-label');
    if (!swatches.length) return;

    swatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            swatches.forEach(s => s.classList.remove('active'));
            swatch.classList.add('active');

            const preview = document.getElementById('tryon-preview');
            const previewSwatch = document.getElementById('tryon-preview-swatch');
            const bgColor = swatch.style.backgroundColor;
            if (preview && previewSwatch) {
                previewSwatch.style.backgroundColor = bgColor;
                preview.style.display = 'flex';
            }

            if (label) label.textContent = swatch.dataset.color || 'Selected';
        });
    });
}

// ==========================================================================
// Rebook Nudge — post-appointment follow-up reminder
// ==========================================================================
function initRebookNudge() {
    const nudge = document.getElementById('rebook-nudge');
    const closeBtn = document.getElementById('rebook-nudge-close');
    const textEl = document.getElementById('rebook-nudge-text');
    if (!nudge || !textEl) return;

    const reminders = JSON.parse(localStorage.getItem('gilded_reminders') || '[]');
    const now = new Date();
    const due = reminders.find(r => {
        const reminderDate = new Date(r.reminderDate);
        return reminderDate <= now;
    });

    if (due) {
        textEl.textContent = 'Your ' + due.serviceName + ' with ' + due.stylistName + ' is due for a refresh.';
        nudge.style.display = 'block';
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            nudge.style.display = 'none';
            // Clear this reminder
            const updated = reminders.filter(r => r.reminderDate !== due.reminderDate);
            localStorage.setItem('gilded_reminders', JSON.stringify(updated));
        });
    }
}

// ==========================================================================
// 9. Footer Accordions for Mobile View
// ==========================================================================
function initFooterAccordions() {
    const accordionBtns = document.querySelectorAll('.footer-accordion-btn');

    accordionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Only execute in mobile layouts
            if (window.innerWidth > 768) return;
            
            const isExpanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', !isExpanded);
        });
    });

    // Reset accessibility state on resize to prevent desktop drawer trapping
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            accordionBtns.forEach(btn => btn.setAttribute('aria-expanded', 'false'));
        }
    });
}

// ==========================================================================
// 11. Gallery / Nail Art Vault
// ==========================================================================
function initGallery() {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;
    renderGallery('all');

    document.querySelectorAll('.gallery-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.gallery-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderGallery(tab.dataset.filter);
        });
    });
}

function renderGallery(filter) {
    const grid = document.getElementById('gallery-grid');
    grid.innerHTML = '';

    GALLERY_DATA.forEach(item => {
        if (filter !== 'all' && item.category !== filter) return;

        const el = document.createElement('div');
        el.className = 'gallery-item';
        el.innerHTML = `
            <div class="gallery-item-image" style="background-image: url('${item.image}'); background-size: cover; background-position: center;"></div>
            <div class="gallery-item-overlay">
                <span class="gallery-item-label">${item.category.replace('-', ' ')}</span>
                <div class="gallery-item-name">${item.name}</div>
            </div>
            <div class="gallery-coming-overlay">
                <span>COMING SOON</span>
            </div>
        `;
        grid.appendChild(el);
    });
}

// ==========================================================================
// 11. FAQ Accordion
// ==========================================================================
function initFaqAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(btn => {
        btn.addEventListener('click', () => {
            const isExpanded = btn.getAttribute('aria-expanded') === 'true';
            // Close all other questions
            faqQuestions.forEach(other => {
                other.setAttribute('aria-expanded', 'false');
            });
            // Toggle clicked question
            btn.setAttribute('aria-expanded', !isExpanded);
        });
    });
}

// ==========================================================================
// 11. Scroll Reveal Animations (Intersection Observer)
// ==========================================================================
function initScrollReveal() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);

    // Assign scroll-reveal base class and observe targets
    const targetSelectors = [
        '.category-hero',
        '.services-section',
        '.botanical-section',
        '.booking-section',
        '.reviews-section',
        '.private-events-banner',
        '.main-footer'
    ];

    targetSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            el.classList.add('scroll-reveal');
            revealObserver.observe(el);
        });
    });

    // Also observe new sections
    const extraTargets = document.querySelectorAll('.gallery-section, .faq-section, .location-section, .gift-cards-section, .loyalty-section, .tryon-section');
    extraTargets.forEach(el => {
        el.classList.add('scroll-reveal');
        revealObserver.observe(el);
    });
}
