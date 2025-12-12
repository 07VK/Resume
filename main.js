/* Custom styles for the page */
body {
    font-family: 'Inter', sans-serif;
    background-color: #fffbeb; /* Warm Ivory background */
    color: #334155; /* slate-700 */
    cursor: none; /* Hide default cursor */
}

/* Custom accent color palette */
:root {
    --accent-cyan: #0e7490;
    --accent-green-active: #15803d; /* Spin Green */
    --name-color: #28666e;
    --heading-color: #57473A; /* Earthy Brown */
    --nav-bg: #f8fafc;
    --section-bg-about: #fff7ed; /* Vibrant Peach */
    --section-bg-skills: #fef2f2; /* Soft Red */
    --section-bg-experience: #f5f3ff; /* New Violet */
    --section-bg-work: #f0fdf4; /* Soft Green */
    --section-bg-resume: #f0f9ff; /* New Blue */
    --section-bg-contact: #fafff0; /* New Olive Green */
}

.accent-text { color: var(--accent-cyan); }
h1, h2, h3, .nav-link-dark { color: #1e293b; }

/* Hide scrollbar for the main view */
html, body { overflow: hidden; }
.content-section { height: 100vh; overflow-y: auto; scroll-behavior: smooth; }

/* Custom Cursor */
.cursor-dot {
    width: 8px;
    height: 8px;
    background-color: var(--accent-cyan);
    border-radius: 50%;
    position: fixed;
    z-index: 9999;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}

/* Animated Gradient Background for Home */
#home {
    background: linear-gradient(-45deg, #f0f9ff, #fffbeb, #faf5ff, #f0f9ff);
    background-size: 400% 400%;
    animation: gradientBG 15s ease infinite;
}

@keyframes gradientBG {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

/* Floating animation for circular buttons */
@keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
}

/* 3D flip and pop animation for icons on hover */
@keyframes flipAndPop {
    0% { transform: rotateY(0deg) scale(1); }
    80% { transform: rotateY(360deg) scale(1); }
    90% { transform: rotateY(360deg) scale(1.2); }
    100% { transform: rotateY(360deg) scale(1); }
}

.circular-btn {
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    border: 1px solid #e2e8f0;
    animation: float 6s ease-in-out infinite;
    perspective: 1000px;
}
.circular-btn:hover {
    border-color: var(--accent-cyan);
    transform: translateY(-5px) !important;
    animation-play-state: paused;
    box-shadow: 0 10px 25px -3px rgba(14, 116, 114, 0.1);
}
.circular-btn:hover .icon {
    animation: flipAndPop 0.8s cubic-bezier(0.25, 1, 0.5, 1);
}

/* Reveal animation */
.reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}

.card {
    background-color: #ffffff;
    border: 1px solid #e5e7eb;
    transition: all 0.3s ease;
}
.card:hover {
    transform: translateY(-5px);
    border-color: var(--accent-cyan);
    box-shadow: 0 10px 20px -5px rgba(22, 53, 61, 0.1);
}

/* Typography & Header */
.home-heading {
    font-family: 'Playfair Display', serif;
    text-transform: uppercase;
}
.header-name-container {
    position: relative;
    padding-bottom: 4px;
}
.header-name-container::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: var(--name-color);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.header-name-container:hover::after {
    transform: scaleX(1);
}

@keyframes wheelRotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
.header-logo {
     transition: transform 0.7s cubic-bezier(0.25, 1, 0.5, 1);
}
.header-name-container:hover .header-logo {
    animation: wheelRotate 0.8s ease-in-out;
}
.header-name {
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    color: var(--name-color);
}

/* Underline animation for nav links */
.nav-link {
    position: relative;
    padding-bottom: 8px;
}
.nav-link::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 0%;
    height: 2px;
    background-color: var(--accent-green-active);
    transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.nav-link:hover::after,
.nav-link.active::after {
    width: 100%;
    left: 0;
}
.nav-link.active {
    color: var(--accent-green-active) !important;
}

.section-heading {
    text-transform: uppercase;
    color: var(--heading-color);
    letter-spacing: 0.1em;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
}

/* Experience Card Hover Effect */
.experience-card .description {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out, margin-top 0.5s ease-in-out;
}
.experience-card:hover .description {
    max-height: 500px; /* Adjust as needed */
    opacity: 1;
    margin-top: 1rem;
}
