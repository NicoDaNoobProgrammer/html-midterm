// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Revenue counter animation
function animateCounter() {
    const revenueElement = document.getElementById('revenue');
    let currentValue = 0;
    const targetValue = 600000;
    const increment = targetValue / 50;
    
    const counter = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(counter);
            revenueElement.textContent = '$' + targetValue.toLocaleString() + '+';
            revenueElement.parentElement.querySelector('p').classList.add('pulse');
        } else {
            revenueElement.textContent = '$' + Math.floor(currentValue).toLocaleString() + '+';
        }
    }, 20);
}

// Trigger animation on page load
window.addEventListener('load', animateCounter);

// Connect action handler
function connectAction(platform) {
    alert(`🎉 Thanks for your interest!\n\nConnecting via ${platform}...\n\nPlease update this with your actual contact details!`);
}

// Add scroll animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-in forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Skill tags click handler
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('click', function() {
        this.style.transform = 'scale(1.1) rotate(5deg)';
        setTimeout(() => {
            this.style.transform = '';
        }, 300);
    });
});

// Fact cards interaction
document.querySelectorAll('.fact').forEach(fact => {
    fact.addEventListener('click', function() {
        this.style.backgroundColor = '#667eea';
        this.style.color = 'white';
        setTimeout(() => {
            this.style.backgroundColor = '';
            this.style.color = '';
        }, 800);
    });
});

// Console Easter Egg
console.log('%cWelcome to Nico Paolo Baltazar\'s Portfolio!', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%c🚀 Six-Figure Entrepreneur | Business Innovator | Success Driven', 'color: #764ba2; font-size: 14px;');
