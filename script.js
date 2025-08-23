// Problem statements for typewriter animation
const problems = [
    "Ecommerce Stuck at $2, 8 or 12 Million",
    "AI has tanked my SEO",
    "Can't scale advertising",
    "B2B launching DTC for the first time",
    "Founder Burnout",
    "My team needs training",
    "Making my ecommerce profitable",
    "Building stores that scale without hinderance",
    "I don't know my market",
    "How do I implement AI to improve my ecommerce"
];

// Corresponding client reviews for each problem
const reviews = [
    {
        stars: 5,
        text: "Helped us break through the $8M plateau with strategic channel diversification. Revenue jumped 65% in 8 months.",
        name: "Sarah Chen",
        title: "CEO, ModernHome",
        avatar: "SC",
        color: "#3b82f6"
    },
    {
        stars: 4,
        text: "Recovered our organic traffic after AI updates destroyed our rankings. Back to 150% of previous levels.",
        name: "Marcus Rodriguez",
        title: "Marketing Director, TechGear",
        avatar: "MR",
        color: "#10b981"
    },
    {
        stars: 5,
        text: "Transformed our ad strategy from bleeding money to 4.2x ROAS. Finally profitable at scale.",
        name: "Jennifer Walsh",
        title: "Founder, EcoLiving",
        avatar: "JW",
        color: "#f59e0b"
    },
    {
        stars: 5,
        text: "Seamless DTC launch strategy. Went from B2B-only to $2M DTC revenue in our first year.",
        name: "David Kim",
        title: "VP Strategy, InnovateTech",
        avatar: "DK",
        color: "#8b5cf6"
    },
    {
        stars: 4,
        text: "Built systems that let me step back from daily operations. Finally have my life back while revenue grows.",
        name: "Lisa Thompson",
        title: "Founder, StyleCraft",
        avatar: "LT",
        color: "#ef4444"
    },
    {
        stars: 5,
        text: "Team training program was game-changing. Our conversion rates improved 40% across all channels.",
        name: "Michael Chang",
        title: "COO, SportsPro",
        avatar: "MC",
        color: "#06b6d4"
    },
    {
        stars: 5,
        text: "Turned our struggling store profitable in 90 days. Clear roadmap and flawless execution.",
        name: "Amanda Foster",
        title: "CEO, BeautyBox",
        avatar: "AF",
        color: "#84cc16"
    },
    {
        stars: 4,
        text: "Infrastructure overhaul eliminated our scaling bottlenecks. Now handling 10x the volume seamlessly.",
        name: "Robert Martinez",
        title: "CTO, GrowthCorp",
        avatar: "RM",
        color: "#f97316"
    },
    {
        stars: 5,
        text: "Market research insights were spot-on. Pivoted our positioning and saw immediate traction.",
        name: "Emily Watson",
        title: "Marketing Lead, FreshStart",
        avatar: "EW",
        color: "#ec4899"
    },
    {
        stars: 4,
        text: "AI implementation boosted our personalization engine. Customer lifetime value up 85%.",
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

// Initialize typewriter animation when page loads
document.addEventListener('DOMContentLoaded', function() {
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
