/**
 * Hackin' Summer 2026 - Main Application Logic
 * Renders content from config.js and handles interactions.
 */

const HS_ICONS = {
    people: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    bulb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/></svg>',
    trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0V4z"/><path d="M5 5H3v1a3 3 0 0 0 3 3"/><path d="M19 5h2v1a3 3 0 0 1-3 3"/></svg>',
    rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
    chip: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>'
};

function renderIcon(name) {
    return HS_ICONS[name] || HS_ICONS.bulb;
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Load Data from config.js
    const config = window.HS_CONFIG;
    if (!config) {
        console.error("Configuration not found! Make sure config.js is loaded before app.js");
        return;
    }

    // 2. Populate Hero & Stats
    // Note: hero-title uses structured spans in HTML — do NOT overwrite it here
    document.getElementById('hero-tagline').textContent = config.eventDetails.tagline;
    document.getElementById('hero-subtitle').textContent = config.eventDetails.taglineSupport;
    document.getElementById('hero-dates').textContent = config.eventDetails.dates;
    if (config.eventDetails.countdownLabel) {
        const countdownLabelEl = document.getElementById('countdown-label');
        if (countdownLabelEl) countdownLabelEl.textContent = config.eventDetails.countdownLabel;
    }
    const footerTagline = document.getElementById('footer-tagline');
    if (footerTagline) footerTagline.textContent = config.eventDetails.tagline;
    document.getElementById('hero-venue').textContent = config.eventDetails.venue;
    
    document.getElementById('stat-prize').textContent = config.eventDetails.prizePool;
    document.getElementById('prizes-total').textContent = config.eventDetails.prizePool;
    document.getElementById('stat-team').textContent = config.eventDetails.teamSize;
    document.getElementById('footer-venue').textContent = config.eventDetails.venue;

    // Participant Counter
    if (config.eventDetails.participantCount !== null) {
        const pContainer = document.getElementById('stat-participants-container');
        pContainer.style.display = 'block';
        document.getElementById('stat-participants').textContent = config.eventDetails.participantCount;
    }

    // Registration Buttons
    const regBtns = [
        document.getElementById('hero-register-btn'),
        document.getElementById('footer-register-btn'),
        document.getElementById('nav-register-btn')
    ].filter(Boolean);
    const registrationUrl = config.eventDetails.registrationUrl;
    const registrationOpen = config.eventDetails.registrationOpen;
    regBtns.forEach(btn => {
        if (registrationUrl) {
            btn.href = registrationUrl;
            btn.textContent = "Register now";
            btn.target = "_blank";
            btn.rel = "noopener noreferrer";
        } else if (registrationOpen) {
            btn.href = "#contact";
            btn.textContent = "Register now";
            btn.removeAttribute('target');
        } else {
            btn.href = "#";
            btn.textContent = "Registration opens soon";
            btn.addEventListener('click', (e) => e.preventDefault());
        }
    });

    // 3. Populate Highlights
    const highlightsContainer = document.getElementById('highlights-container');
    if (highlightsContainer && config.highlights) {
        config.highlights.forEach(item => {
            highlightsContainer.innerHTML += `
                <article class="paper-card highlight-card">
                    <div class="highlight-icon">${renderIcon(item.icon)}</div>
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </article>
            `;
        });
    }

    // 4. Populate Tracks
    const tracksSection = document.getElementById('tracks');
    const tracksNav = document.getElementById('nav-tracks-link');
    if (config.tracks.visible) {
        const tracksContainer = document.getElementById('tracks-container');
        config.tracks.items.forEach(track => {
            tracksContainer.innerHTML += `
                <div class="paper-card track-card">
                    <div class="track-icon">${renderIcon(track.icon)}</div>
                    <h3>${track.title}</h3>
                    <p>${track.description}</p>
                </div>
            `;
        });
    } else {
        tracksSection.style.display = 'none';
        if(tracksNav) tracksNav.style.display = 'none';
        document.getElementById('footer-tracks-link').style.display = 'none';
    }

    // 5. Populate Timeline
    const timelineContainer = document.getElementById('timeline-container');
    config.timeline.forEach(item => {
        timelineContainer.innerHTML += `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="paper-card timeline-content">
                    <div class="timeline-date">${item.date} ${item.time ? '| ' + item.time : ''}</div>
                    <h3>${item.title}</h3>
                    ${item.status === 'pending' ? '<span class="timeline-status">(Status: Pending)</span>' : ''}
                </div>
            </div>
        `;
    });

    // 6. Populate Prizes
    const prizesContainer = document.getElementById('prizes-container');
    config.prizes.breakdown.forEach(prize => {
        prizesContainer.innerHTML += `
            <div class="paper-card" style="text-align: center;">
                <h3>${prize.category}</h3>
                <p class="prize-reward">${prize.reward}</p>
            </div>
        `;
    });

    // 7. Populate Rules
    const rulesContainer = document.getElementById('rules-container');
    config.rules.forEach(rule => {
        rulesContainer.innerHTML += `
            <div class="paper-card">
                <h3>${rule.title}</h3>
                <p>${rule.description}</p>
            </div>
        `;
    });

    // 8. Populate FAQ
    const faqContainer = document.getElementById('faq-container');
    config.faq.forEach((f, index) => {
        faqContainer.innerHTML += `
            <div class="faq-item">
                <h3 class="faq-heading">
                    <button class="faq-question" type="button" id="faq-question-${index}" aria-expanded="false" aria-controls="faq-answer-${index}">
                        ${f.question} <span aria-hidden="true">+</span>
                    </button>
                </h3>
                <div class="paper-card faq-answer" id="faq-answer-${index}" role="region" aria-labelledby="faq-question-${index}" hidden>
                    <p>${f.answer}</p>
                </div>
            </div>
        `;
    });

    // FAQ Accordion Logic
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.closest('.faq-item');
            const isActive = faqItem.classList.contains('active');
            
            // Close all
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.faq-question span').textContent = '+';
                item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                item.querySelector('.faq-answer').hidden = true;
            });

            // Toggle current
            if (!isActive) {
                faqItem.classList.add('active');
                button.querySelector('span').textContent = '−';
                button.setAttribute('aria-expanded', 'true');
                faqItem.querySelector('.faq-answer').hidden = false;
            }
        });
    });

    // 11. Populate Socials
    const socialsContainer = document.getElementById('social-links');
    if (socialsContainer && config.socials) {
        socialsContainer.innerHTML = '';
        const s = config.socials;
        const socialItems = [
            { key: 'instagram', label: 'Instagram', href: s.instagram, icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>' },
            { key: 'linkedin', label: 'LinkedIn', href: s.linkedin, icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94z"/></svg>' },
            { key: 'discord', label: 'Discord', href: s.discord, icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.793 8.18 1.793 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.077.077 0 0 1-.006.128 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>' },
            { key: 'whatsapp', label: 'WhatsApp', href: s.whatsapp, icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>' },
            { key: 'email', label: 'Email', href: s.email, icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>' }
        ];

        socialItems.forEach(item => {
            if (item.href && item.href !== '#') {
                const isMail = item.href.startsWith('mailto:');
                const targetAttr = isMail ? '' : 'target="_blank" rel="noopener noreferrer"';
                socialsContainer.innerHTML += `
                    <a href="${item.href}" ${targetAttr} class="footer-social-link">
                        ${item.icon}
                        <span>${item.label}</span>
                    </a>
                `;
            }
        });
    }

    // 12. Countdown Logic
    const targetDate = new Date(config.eventDetails.startDateTime).getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const countdownRoot = document.getElementById('countdown');
        if (distance < 0) {
            countdownRoot.innerHTML = `<p class="countdown-ended">The event has started or ended. See you at the next edition.</p>`;
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const daysEl = countdownRoot.querySelector('.countdown-days');
        const hoursEl = countdownRoot.querySelector('.countdown-hours');
        const minutesEl = countdownRoot.querySelector('.countdown-minutes');
        const secondsEl = countdownRoot.querySelector('.countdown-seconds');
        if (daysEl && hoursEl && minutesEl && secondsEl) {
            daysEl.textContent = days;
            hoursEl.textContent = hours.toString().padStart(2, '0');
            minutesEl.textContent = minutes.toString().padStart(2, '0');
            secondsEl.textContent = seconds.toString().padStart(2, '0');
        }
    }

    if (!isNaN(targetDate)) {
        updateCountdown();
        setInterval(updateCountdown, 1000);
    } else {
        document.getElementById('countdown').style.display = 'none';
    }

    // 13. Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    const mobileMenu = window.matchMedia('(max-width: 1024px)');
    function setMenuOpen(open) {
        navLinks.classList.toggle('active', open);
        menuBtn.setAttribute('aria-expanded', String(open));
        menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }

    menuBtn.addEventListener('click', () => {
        setMenuOpen(menuBtn.getAttribute('aria-expanded') !== 'true');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            setMenuOpen(false);
        });
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') {
            setMenuOpen(false);
            menuBtn.focus();
        }
    });
    document.addEventListener('click', event => {
        if (!event.target.closest('#navbar')) setMenuOpen(false);
    });
    document.getElementById('navbar').addEventListener('focusout', event => {
        if (!event.currentTarget.contains(event.relatedTarget)) setMenuOpen(false);
    });
    mobileMenu.addEventListener('change', () => setMenuOpen(false));

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) {
            nav.style.boxShadow = '0 4px 0 var(--color-navy)';
        } else {
            nav.style.boxShadow = 'none';
        }
    });
});
