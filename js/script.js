// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for navigation links
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

// Modal Functions
const modal = document.getElementById('sessionModal');
const modalBody = document.getElementById('modalBody');

function openModal(content) {
    modal.style.display = 'block';
    modalBody.innerHTML = content;
}

function closeModal() {
    modal.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Quick Sound Session
function playQuickSession() {
    const ragas = [
        {
            name: 'Raga Yaman',
            duration: '5 minutes',
            description: 'A morning Raaga that brings clarity, optimism, and mental peace.',
            benefits: 'Enhances focus and uplifts mood'
        },
        {
            name: 'Raga Bhairav',
            duration: '5 minutes',
            description: 'A deeply meditative Raaga performed at dawn for spiritual awakening.',
            benefits: 'Deepens meditation and promotes inner stability'
        },
        {
            name: 'Vedic Mantras - Om',
            duration: '5 minutes',
            description: 'The primordial sound that resonates with the universe itself.',
            benefits: 'Calms the nervous system and promotes deep relaxation'
        }
    ];

    const raaga = ragas[Math.floor(Math.random() * ragas.length)];
    
    const content = `
        <h2>${raaga.name}</h2>
        <p><strong>Duration:</strong> ${raaga.duration}</p>
        <p><strong>Description:</strong> ${raaga.description}</p>
        <p><strong>Benefits:</strong> ${raaga.benefits}</p>
        <button onclick="startPlayback('${raaga.name}')" class="cta-button" style="margin-top: 20px; width: 100%;">
            ▶ Start Playing
        </button>
        <p style="margin-top: 15px; font-style: italic; color: #666;">*This is a prototype. In the full version, actual audio streaming would play here.</p>
    `;
    
    openModal(content);
}

function startPlayback(ragaName) {
    const playingContent = `
        <h2>Now Playing: ${ragaName}</h2>
        <div style="text-align: center; padding: 30px;">
            <div style="font-size: 3rem; margin: 20px 0;">🎵</div>
            <div style="width: 100%; height: 8px; background: #ddd; border-radius: 4px; margin: 20px 0;">
                <div style="width: 35%; height: 100%; background: linear-gradient(90deg, #C41E3A, #8B4513); border-radius: 4px; animation: progress 30s linear;"></div>
            </div>
            <p id="timeDisplay">1:45 / 5:00</p>
            <p style="color: #666; margin-top: 15px;">Let the sacred sounds guide your breath...</p>
            <button onclick="closeModal()" class="tool-button" style="margin-top: 20px; width: 100%;">Stop</button>
        </div>
        <style>
            @keyframes progress {
                from { width: 0%; }
                to { width: 100%; }
            }
        </style>
    `;
    
    modalBody.innerHTML = playingContent;
}

// Breathing Exercise
function startBreathingExercise() {
    const breakingContent = `
        <h2>Synchronized Breathing Mandala</h2>
        <p style="text-align: center; margin-bottom: 20px;">Follow the mandala's breathing pattern. Inhale as it expands, exhale as it contracts.</p>
        <div style="position: relative; width: 280px; height: 280px; margin: 0 auto; display: flex; align-items: center; justify-content: center;">
            <div id="breathingMandala" style="width: 200px; height: 200px; border-radius: 50%; background: conic-gradient(from 0deg, #C41E3A, #D4A574, #8B4513, #6B8E5A, #D4A574, #C41E3A); box-shadow: 0 0 30px rgba(212, 175, 55, 0.6);"></div>
        </div>
        <p style="text-align: center; margin-top: 20px; color: #666;">
            <span id="breathPhase">Take a deep breath in...</span>
        </p>
        <div style="text-align: center; margin-top: 20px;">
            <button onclick="closeModal()" class="tool-button">Exit Exercise</button>
        </div>
        <style>
            @keyframes breathe {
                0%, 100% { transform: scale(0.8); }
                50% { transform: scale(1.2); }
            }
            #breathingMandala {
                animation: breathe 6s infinite;
            }
        </style>
    `;
    
    openModal(breakingContent);
    
    // Breathing guidance
    let phase = 0;
    const phases = [
        'Inhale for 4 counts...',
        'Hold for 4 counts...',
        'Exhale for 4 counts...',
        'Hold for 4 counts...'
    ];
    
    setInterval(() => {
        const phaseElement = document.getElementById('breathPhase');
        if (phaseElement) {
            phaseElement.textContent = phases[phase];
            phase = (phase + 1) % phases.length;
        }
    }, 4000);
}

// Story Generation
const stories = [
    {
        title: 'The Monkey and the Crocodile',
        source: 'Panchatantra Tales',
        content: `Once, a clever monkey lived in a mango tree on a river bank. A crocodile befriended him, and the monkey would share mangoes daily. But when the crocodile's wife desired the monkey's heart, he grew suspicious.

The wise monkey said, "My heart is in the tree, not in my chest! Let me retrieve it." When the crocodile realized the deception, the monkey was already safe.

<strong>Wisdom:</strong> Intelligence and quick thinking can overcome physical strength. Trust your wit when facing challenges.`
    },
    {
        title: 'The Golden Goose',
        source: 'Panchatantra Tales',
        content: `A couple found a goose that laid one golden egg each day. Their fortune grew daily, yet greed consumed them.

"Why wait?" they said. "Let us cut open the goose and take all the gold at once!" They did, only to find the goose was ordinary inside. The eggs ceased, their fortune ended.

<strong>Wisdom:</strong> Greed destroys abundance. Patience and gratitude transform life into endless blessings.`
    },
    {
        title: 'The Four Friends',
        source: 'Panchatantra Tales',
        content: `Once, four friends—a deer, a bird, a tortoise, and a mouse—lived together in the forest. When the deer was caught in a hunter's trap, all four worked together to free him.

Each friend contributed according to their strength: the bird brought news, the mouse gnawed the rope, and the tortoise distracted the hunter.

<strong>Wisdom:</strong> True friendship means unity despite differences. Together, we overcome even the greatest obstacles.`
    },
    {
        title: 'The Two Pots',
        source: 'Jataka Tales',
        content: `A potter made two pots—one of gold and one of clay. Both were filled with water to cross the river. The golden pot floated magnificently, but the clay pot sank.

"It is my nature," said the clay pot humbly, "to return to earth. Do not grieve, for my purpose is fulfilled."

<strong>Wisdom:</strong> Acceptance of our nature brings peace. Our limitations are not failures; they are truths to embrace.`
    },
    {
        title: 'The Grateful Crane',
        source: 'Jataka Tales',
        content: `A mouse was saved by a crane. Over time, they became dear friends. When danger approached the crane, the mouse gnawed away the hunter's net.

The crane realized that kindness, no matter how small the recipient, returns multiplied by gratitude.

<strong>Wisdom:</strong> Kindness to the humble creates powerful allies. Never judge worth by size or status.`
    }
];

function getRandomStory() {
    const story = stories[Math.floor(Math.random() * stories.length)];
    
    const content = `
        <h2>${story.title}</h2>
        <p style="color: var(--accent-color); font-weight: 600; margin-bottom: 15px;">From: ${story.source}</p>
        <div style="line-height: 1.8; color: var(--text-dark); margin: 20px 0;">
            ${story.content}
        </div>
        <button onclick="saveStoryToJournal('${story.title}')" class="cta-button" style="width: 100%; margin-top: 20px;">
            💾 Save to My Collection
        </button>
        <button onclick="getRandomStory()" class="tool-button" style="width: 100%; margin-top: 10px;">
            Get Another Story
        </button>
    `;
    
    openModal(content);
}

function saveStoryToJournal(title) {
    let savedStories = JSON.parse(localStorage.getItem('savedStories') || '[]');
    if (!savedStories.includes(title)) {
        savedStories.push(title);
        localStorage.setItem('savedStories', JSON.stringify(savedStories));
        alert(`"${title}" saved to your collection!`);
    } else {
        alert(`"${title}" is already in your collection.`);
    }
}

// Contact Form Handler
function handleContactSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const name = event.target[0].value;
    
    alert(`Thank you, ${name}! We've received your message and will respond within 24 hours.`);
    event.target.reset();
}

// Animation Trigger on Scroll
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-card, .problem-card, .step, .tool-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', observeElements);

// Advanced Analytics (optional)
function trackUserInteraction(action) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] User action: ${action}`);
}

// Add listeners to interactive elements
document.querySelectorAll('.cta-button, .tool-button, .feature-link').forEach(el => {
    el.addEventListener('click', function() {
        trackUserInteraction(`Clicked: ${this.textContent.trim()}`);
    });
});

// Scroll to top on page load
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});
