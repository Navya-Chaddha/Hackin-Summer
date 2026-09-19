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
    const heroBanner = document.getElementById('hero-conquer-banner');
    if (heroBanner && config.eventDetails.heroBanner) {
        heroBanner.textContent = config.eventDetails.heroBanner;
    }
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

    // 3. Populate Highlights (Winter-style feature cards)
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
    }

    // 5. Populate Timeline
    const timelineContainer = document.getElementById('timeline-container');
    config.timeline.forEach((item, index) => {
        const isLast = index === config.timeline.length - 1;
        timelineContainer.innerHTML += `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="paper-card timeline-content">
                    <div class="timeline-date">${item.date} ${item.time ? '| ' + item.time : ''}</div>
                    <h3>${item.title}</h3>
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
                <p style="font-size: 1.2rem; font-weight: bold; margin-top: 1rem; color: var(--color-warm-coral);">${prize.reward}</p>
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
    config.faq.forEach(f => {
        faqContainer.innerHTML += `
            <div class="faq-item">
                <div class="faq-question">
                    ${f.question} <span style="font-size: 1.5rem; line-height: 1;">+</span>
                </div>
                <div class="paper-card faq-answer" style="border-top-left-radius: 0; border-top-right-radius: 0; border-top: none;">
                    <p>${f.answer}</p>
                </div>
            </div>
        `;
    });

    // FAQ Accordion Logic
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.faq-question span').textContent = '+';
            });

            // Toggle current
            if (!isActive) {
                faqItem.classList.add('active');
                button.querySelector('span').textContent = '−';
            }
        });
    });

    // 11. Populate Socials
    const socialsContainer = document.getElementById('social-links');
    const s = config.socials;
    if(s.email) socialsContainer.innerHTML += `<a href="${s.email}">Email</a>`;
    if(s.discord !== '#') socialsContainer.innerHTML += `<a href="${s.discord}">Discord</a>`;
    if(s.whatsapp !== '#') socialsContainer.innerHTML += `<a href="${s.whatsapp}">WhatsApp</a>`;
    if(s.instagram !== '#') socialsContainer.innerHTML += `<a href="${s.instagram}">Instagram</a>`;
    if(s.linkedin !== '#') socialsContainer.innerHTML += `<a href="${s.linkedin}">LinkedIn</a>`;

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
    
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

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
