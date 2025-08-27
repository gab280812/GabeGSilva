// Problem statements for typewriter animation - updated with action-oriented language
const problems = [
    "Today's funnel leaky?",
    "Stop revenue slipping through checkout cracks",
    "Conflicting channels?", 
    "Bridge B2B & D2C without burning partners",
    "Getting clicks but no sales—what's going wrong?",
    "Why don't visitors trust my store yet?",
    "How do I get people to keep buying from me?",
    "Inventory chaos throttling growth?",
    "Why is my ad budget evaporating without results?",
    "Traffic but flat revenue—sound familiar?"
];

// Corresponding client reviews for each problem
const reviews = [
    {
        stars: 5,
        text: "Fixed our SEO strategy and product pages. Now ranking #1 for our main keywords and organic traffic is up 340%.",
        name: "Sarah Chen",
        title: "CEO, ModernHome",
        avatar: "SC",
        color: "#3b82f6"
    },
    {
        stars: 5,
        text: "Smart out-of-stock page strategy kept our SEO juice flowing. Traffic stayed steady even during supply issues.",
        name: "Marcus Rodriguez",
        title: "Marketing Director, TechGear",
        avatar: "MR",
        color: "#10b981"
    },
    {
        stars: 4,
        text: "Site speed optimization was a game-changer. Load times dropped 60% and Google rankings shot up immediately.",
        name: "Jennifer Walsh",
        title: "Founder, EcoLiving",
        avatar: "JW",
        color: "#f59e0b"
    },
    {
        stars: 5,
        text: "Cleaned up our duplicate content mess. Penalties lifted and organic visibility returned within 6 weeks.",
        name: "David Kim",
        title: "VP Strategy, InnovateTech",
        avatar: "DK",
        color: "#8b5cf6"
    },
    {
        stars: 5,
        text: "Conversion optimization turned our traffic into actual sales. Same visitors, 3x more revenue.",
        name: "Lisa Thompson",
        title: "Founder, StyleCraft",
        avatar: "LT",
        color: "#ef4444"
    },
    {
        stars: 4,
        text: "Trust signals and social proof overhaul transformed our store. Conversion rate jumped from 1.2% to 4.8%.",
        name: "Michael Chang",
        title: "COO, SportsPro",
        avatar: "MC",
        color: "#06b6d4"
    },
    {
        stars: 5,
        text: "Email automation and loyalty program built our repeat customer base. 60% of revenue now comes from returning customers.",
        name: "Amanda Foster",
        title: "CEO, BeautyBox",
        avatar: "AF",
        color: "#84cc16"
    },
    {
        stars: 5,
        text: "Inventory management system eliminated stockouts and overstock. Cash flow improved 40% in first quarter.",
        name: "Robert Martinez",
        title: "CTO, GrowthCorp",
        avatar: "RM",
        color: "#f97316"
    },
    {
        stars: 4,
        text: "Ad account restructure and targeting fix brought ROAS from 0.8x to 4.2x. Finally profitable advertising.",
        name: "Emily Watson",
        title: "Marketing Lead, FreshStart",
        avatar: "EW",
        color: "#ec4899"
    },
    {
        stars: 5,
        text: "Conversion rate optimization across the funnel. Traffic stayed the same but revenue doubled in 90 days.",
        name: "James Liu",
        title: "Data Director, SmartCommerce",
        avatar: "JL",
        color: "#6366f1"
    }
];

// Animation state
let currentProblemIndex = 0;
let isTyping = false;
let isErasing = false;
let currentText = '';
let charIndex = 0;

// DOM elements
const searchText = document.getElementById('searchText');
const cursor = document.getElementById('cursor');
const checkmark = document.getElementById('checkmark');
const reviewsContainer = document.getElementById('reviewsContainer');
const reviewCard = document.getElementById('reviewCard');
const reviewStars = document.getElementById('reviewStars');
const reviewText = document.getElementById('reviewText');
const reviewerName = document.getElementById('reviewerName');
const reviewerTitle = document.getElementById('reviewerTitle');
const reviewerAvatar = document.getElementById('reviewerAvatar');

// Typewriter animation functions
function typeText() {
    if (charIndex < problems[currentProblemIndex].length) {
        currentText += problems[currentProblemIndex][charIndex];
        updateTextAndCursor();
        charIndex++;
        setTimeout(typeText, 33); // 33ms per character (3x faster)
    } else {
        // Typing complete
        isTyping = false;
        showCheckmark();
        showReview(currentProblemIndex);
        setTimeout(() => {
            hideCheckmark();
            setTimeout(eraseText, 3000); // 3 second pause
        }, 1000);
    }
}

function eraseText() {
    if (currentText.length > 0) {
        currentText = currentText.slice(0, -1);
        updateTextAndCursor();
        setTimeout(eraseText, 17); // 17ms erasing (3x faster)
    } else {
        // Erasing complete
        isErasing = false;
        charIndex = 0;
        hideReview();
        currentProblemIndex = (currentProblemIndex + 1) % problems.length;
        setTimeout(() => {
            isTyping = true;
            typeText();
        }, 500);
    }
}

function updateTextAndCursor() {
    // Clear the search text element
    searchText.innerHTML = '';
    
    // Add the current text
    const textNode = document.createTextNode(currentText);
    searchText.appendChild(textNode);
    
    // Position cursor right after the text
    cursor.style.position = 'static';
    cursor.style.display = 'inline';
}

function showCheckmark() {
    checkmark.classList.add('show');
}

function hideCheckmark() {
    checkmark.classList.remove('show');
}

function showReview(index) {
    const review = reviews[index];
    
    // Update stars
    reviewStars.innerHTML = generateStars(review.stars);
    
    // Update review text
    reviewText.textContent = review.text;
    
    // Update reviewer info
    reviewerName.textContent = review.name;
    reviewerTitle.textContent = review.title;
    reviewerAvatar.textContent = review.avatar;
    reviewerAvatar.style.backgroundColor = review.color;
    
    // Show review with animation
    setTimeout(() => {
        reviewsContainer.classList.add('show');
        reviewCard.classList.add('show');
    }, 500);
}

function hideReview() {
    reviewsContainer.classList.remove('show');
    reviewCard.classList.remove('show');
}

function generateStars(rating) {
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starsHtml += '★';
        } else {
            starsHtml += '☆';
        }
    }
    return starsHtml;
}

// Modal functions
function openBookingModal() {
    const modal = document.getElementById('bookingModal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

function handleBookingSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    const submitButton = event.target.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Scheduling...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        submitButton.textContent = 'Call Scheduled!';
        setTimeout(() => {
            closeBookingModal();
            // Reset form
            event.target.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    }, 2000);
}

// Close modal when clicking outside
document.getElementById('bookingModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeBookingModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeBookingModal();
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Add scroll animation classes
    const animateElements = document.querySelectorAll('.process-step, .service-panel, .pain-side, .promise-side');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});

// Dynamic Hero Functionality
function initializeDynamicHero() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const heroVariants = document.querySelectorAll('.hero-variant');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetAudience = this.dataset.audience;
            
            // Update button states
            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update hero variants
            heroVariants.forEach(variant => {
                variant.classList.remove('active');
                if (variant.dataset.audience === targetAudience) {
                    setTimeout(() => {
                        variant.classList.add('active');
                    }, 150);
                }
            });
        });
    });
}

// Initialize typewriter animation when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize dynamic hero
    initializeDynamicHero();
    
    // Start typewriter animation after a brief delay
    setTimeout(() => {
        isTyping = true;
        typeText();
    }, 1000);
});

// Performance optimization: Preload critical resources
function preloadResources() {
    // Preload any critical images or fonts
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
}

// Call preload function
preloadResources();

// Add loading state management
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add error handling for failed resources
window.addEventListener('error', function(e) {
    console.warn('Resource failed to load:', e.target.src || e.target.href);
});

// Optimize animations for reduced motion preference
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Disable or reduce animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--animation-duration', '0.1s');
}
