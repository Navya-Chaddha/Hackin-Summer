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
        tagline: "Build. Break. Become.",
        heroBanner: "Conquer the code",
        dates: "26–28 September 2026",
        venue: "JIIT, Sector 62, on campus",
        teamSize: "2–4 members",
        prizePool: "₹35K+",
        
        // Target date for the countdown timer (Asia/Kolkata timezone is handled in JS)
        // Format: YYYY-MM-DDTHH:mm:ss+05:30
        startDateTime: "2026-09-26T10:00:00+05:30",
        countdownLabel: "Until the hackathon kicks off",
        
        registrationOpen: true,
        // Paste your Unstop / Devpost / Google Form link here when ready
        registrationUrl: null, 
        
        // Counter for participants/teams (set to null if no data source exists yet)
        participantCount: null
    },

    // --- About Section ---
    about: {
        description: "Welcome to Hackin' Summer 2026, the brightest hackathon of the season! Join us on campus at JIIT for three days of intense building, breaking, and becoming.",
        theme: "Our theme this year is Open Innovation. Bring your wildest ideas and turn them into reality.",
        whoCanJoin: "Open to all enthusiastic college students. Whether you are a seasoned hacker or a complete beginner, this is the place to learn and build.",
        beginnerFriendly: true // Will show a welcoming note for beginners if true
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
            { category: "Runner Up", reward: "To be announced" },
            { category: "Best Beginner Hack", reward: "To be announced" }
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
        { title: "Team Size", description: "Strictly 2–4 members per team. (Confirmed)" },
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
        { question: "👀 WHO CAN PULL UP?", answer: "If you're a student with an idea, half an idea, or absolutely no idea yet — you're welcome. Come build something." },
        { question: "🫂 CAN I COME WITHOUT A TEAM?", answer: "Yep. Lone wolves are allowed. You'll also get a chance to find people and team up before the hacking begins." },
        { question: "👥 HOW BIG CAN MY TEAM BE?", answer: "Teams can have 2–4 people. Choose wisely — you're going to be spending a lot of time together." },
        { question: "💸 WAIT… DO I HAVE TO PAY?", answer: "Nope. ₹0. Save that money for your post-hackathon coffee addiction." },
        { question: "🧠 WHAT IF I'M NOT THAT GOOD AT CODING?", answer: "Perfectly fine. A hackathon isn't an exam. Come with what you know, learn what you don't, and Google the rest like everyone else." },
        { question: "⚙️ CAN WE USE ANY TECH STACK?", answer: "Pretty much. React, Python, Flutter, AI, hardware, something mildly questionable at 3 AM — if it helps you build, go for it." },
        { question: "📝 CAN I BRING AN OLD PROJECT?", answer: "The idea can have history. The submission shouldn't. Your actual hackathon build needs to happen during the event." },
        { question: "🎒 WHAT DO I ACTUALLY NEED TO BRING?", answer: "Laptop. Charger. ID. Whatever hardware your build needs. And maybe a hoodie — hackathon rooms somehow always choose violence with the AC." },
        { question: "🏆 WHAT ARE WE ACTUALLY JUDGED ON?", answer: "Your idea, how well you built it, the problem it solves, and how you present it. A shiny UI is nice. A project that actually works is nicer." },
        { question: "😵 WHAT IF OUR PROJECT DOESN'T WORK BY THE END?", answer: "Welcome to hackathons. 😭 Show what you built, explain what you tried, and pitch the idea anyway. A broken demo doesn't erase hours of good thinking." }
    ],

    // --- Community & Contact ---
    socials: {
        email: "mailto:hello@hackinsummer.com",
        discord: "https://discord.com/invite/TbeE2UdWpM", // Placeholder
        github: "https://github.com/dsc-jiit", // Placeholder
        instagram: "https://www.instagram.com/dscjiit/", // Placeholder
        linkedin: "https://www.linkedin.com/company/unavailable/" // Placeholder
    },

    // --- Past Editions (Gallery) ---
    pastEditions: {
        visible: false, // Set to true when genuine photos and permissions are provided
        photos: [
            // { url: "assets/past-1.jpg", caption: "Hacking late into the night" }
        ]
    }
};
