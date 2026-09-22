/**
 * Hackin' Summer 2026 - Configuration File
 * 
 * Organizers: Use this file to update the website's content.
 * Any missing or unconfirmed details are clearly marked as "Details coming soon"
 * or "To be announced" in the public UI.
 */

window.HS_CONFIG = {
    // --- Core Event Details ---
    eventDetails: {
        name: "Hackin' Summer 2026",
        tagline: "Your next favourite project might start here.",
        taglineSupport: "So might your next team, your next obsession, or the idea you can’t stop talking about.",
        dates: "26–28 September 2026",
        venue: "JIIT, Sector 62, on campus",
        teamSize: "3–4 members",
        prizePool: "₹35K+",
        
        // Target date for the countdown timer (Asia/Kolkata timezone is handled in JS)
        // Format: YYYY-MM-DDTHH:mm:ss+05:30
        startDateTime: "2026-09-26T10:00:00+05:30",
        countdownLabel: "Until the hackathon kicks off",
        
        registrationOpen: true,
        // Paste your Unstop / Devpost / Google Form link here when ready
        registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdAleSM3yF7tphby2bvFhLXGlLwgOy4KZBVPhpRZI5_InzzYQ/viewform",
        
        // Counter for participants/teams (set to null if no data source exists yet)
        participantCount: null
    },

    highlights: [
        {
            title: "For everyone",
            description: "Students, developers, designers — if you love building, you belong here. No prior hackathon experience required.",
            icon: "people"
        },
        {
            title: "Build cool stuff",
            description: "Three days on campus to turn ideas into working projects with your team, mentors, and plenty of caffeine.",
            icon: "bulb"
        },
        {
            title: "Win big prizes",
            description: "Compete for the prize pool, recognition, swag, and certificates that celebrate what you ship.",
            icon: "trophy"
        },
        {
            title: "Level up skills",
            description: "Workshops, mentor hours, and late-night debugging — a compressed sprint for learning by doing.",
            icon: "rocket"
        }
    ],

    // --- Tracks (Proposed categories, easy to hide or edit) ---
    // Change 'visible' to false if you want to hide the tracks section
    tracks: {
        visible: true,
        items: [
            { id: "open", title: "Open Innovation", description: "No boundaries. Build whatever awesome idea you have.", icon: "bulb" }
        ]
    },

    // --- Milestone Timeline ---
    timeline: [
        { title: "Registration", date: "Open now", time: "", status: "open" },
        { title: "Team Formation", date: "To be announced", time: "", status: "pending" },
        { title: "Kickoff & Hacking Begins", date: "26 Sep 2026", time: "10:00 AM", status: "pending" },
        { title: "Submission Deadline", date: "28 Sep 2026", time: "10:00 AM", status: "pending" },
        { title: "Judging & Results", date: "28 Sep 2026", time: "02:00 PM", status: "pending" }
    ],

    // --- Prizes & Opportunities ---
    prizes: {
        totalPool: "₹35K+",
        breakdown: [
            { category: "First Overall", reward: "To be announced" },
            { category: "First Runner Up", reward: "To be announced" },
            { category: "Second Runner Up", reward: "To be announced" },
            { category: "First Year Category", reward: "To be announced" }
        ],
        perks: [
            "Certificates for all participants",
            "Swag and goodies",
            "Networking with industry mentors"
        ]
    },

    // --- Rules & Eligibility ---
    rules: [
        { title: "Eligibility", description: "College students from any year or branch." },
        { title: "Team Size", description: "Strictly 3–4 members per team. (Confirmed)" },
        { title: "Originality", description: "All code must be written during the hackathon." },
        { title: "Tools & APIs", description: "Use of open-source tools and public APIs is allowed." },
        { title: "Code of Conduct", description: "Be respectful. Harassment of any kind will not be tolerated." }
    ],

    // --- Mentors and Judges ---
    // Use placeholder images until actual profiles are supplied
    people: {
        visible: false,
        list: []
    },

    // --- Sponsors and Partners ---
    sponsors: {
        visible: true,
        list: [
            // { name: "Sponsor A", logo: "assets/sponsor-a.png", tier: "Gold" }
        ],
        contactEmail: "sponsorship@hackinsummer.com" // Where the "Become a sponsor" CTA links
    },

    // --- Detailed Schedule ---
    schedule: {
        visible: false,
        days: [
            {
                date: "Day 1 (26 Sep)",
                events: [
                    { time: "09:00 AM", event: "Check-in (Provisional)" },
                    { time: "10:00 AM", event: "Opening Ceremony (Provisional)" },
                    { time: "12:00 PM", event: "Hacking Starts" }
                ]
            },
            {
                date: "Day 2 (27 Sep)",
                events: [
                    { time: "All Day", event: "Hacking & Mentor Hours (Provisional)" }
                ]
            },
            {
                date: "Day 3 (28 Sep)",
                events: [
                    { time: "10:00 AM", event: "Hacking Ends & Submissions (Provisional)" },
                    { time: "11:00 AM", event: "Judging Starts (Provisional)" },
                    { time: "03:00 PM", event: "Closing Ceremony & Prizes (Provisional)" }
                ]
            }
        ]
    },

    // --- Questions & Answers ---
    faq: [
        { question: "👀 Who can participate in Hackin' Summer?", answer: "Any college student (undergraduate or postgraduate) from any course, branch, or university is welcome to join! Whether you are a seasoned coder or taking your first steps into tech, there is a place for you here." },
        { question: "🫂 Can I register solo, or do I need a team first?", answer: "You can register solo! If you don't have a team yet, don't worry — we'll host dedicated team formation and networking activities on Discord and at the venue before hacking officially starts." },
        { question: "👥 What is the allowed team size?", answer: "Teams must have between 3 and 4 members. Make sure all your teammates register on the portal so your team can be officially verified." },
        { question: "💸 Is there any registration fee?", answer: "No, Hackin' Summer is 100% FREE of charge! WiFi access, venue amenities, swag, and prizes are all provided without any cost to participants." },
        { question: "🧠 What if I am a complete beginner in programming?", answer: "No problem at all! Hackathons are the absolute best place to learn. We have on-campus mentors, technical workshops, and a dedicated 'First Year' category to support and reward first-year builders." },
        { question: "⚙️ What tech stacks or frameworks can we use?", answer: "You have complete creative freedom! Web apps, mobile apps, AI/ML models, Blockchain, Cloud infrastructure, IoT/Hardware hacks, or open-source tools — if it helps turn your idea into a working prototype, go for it!" },
        { question: "📝 Can I work on an existing or pre-built project?", answer: "No. To maintain fairness, all project code and assets must be developed during the hackathon timeline. You can brainstorm ideas and plan your architecture beforehand, but the actual build must happen during the event." },
        { question: "🎒 What items should I bring to the campus venue?", answer: "Bring your college ID card, laptop, charger, power strips (if available), any specific hardware components needed for your hack, comfortable clothing, and plenty of enthusiasm!" },
        { question: "🏆 What are the judging criteria?", answer: "Projects are evaluated on four key pillars: Innovation & Originality, Technical Complexity & Execution, Practical Impact, and the Clarity of your Final Pitch & Demo." },
        { question: "😵 What happens if our project demo is incomplete by the submission deadline?", answer: "Submit what you have built anyway! In hackathons, demonstrating your problem-solving process, architecture, and what you learned is just as valuable as a finished app. Partial builds still win prizes!" }
    ],

    // --- Community & Contact ---
    socials: {
        email: "mailto:support@hackinsummer.com",
        instagram: "https://www.instagram.com/dscjiit/",
        linkedin: "https://www.linkedin.com/company/developer-student-clubs-jiit/",
        discord: "https://discord.com/invite/TbeE2UdWpM",
        whatsapp: "https://chat.whatsapp.com/HackinSummer2026"
    },

    // --- Past Editions (Gallery) ---
    pastEditions: {
        visible: false, // Set to true when genuine photos and permissions are provided
        photos: [
            // { url: "assets/past-1.jpg", caption: "Hacking late into the night" }
        ]
    }
};
