// Initialize Lucide Icons
lucide.createIcons();

// Configuration
const API_BASE_URL = 'http://127.0.0.1:8000/api';

// Fallback Data
const fallbackProjects = [
    {
        id: 1,
        title: "AI Travel Planner for Students",
        description: "An AI-powered travel planner that generates personalized student-friendly itineraries using Google Gemini.",
        tech_stack: ["MongoDB", "Google Gemini API", "AI Integration"],
        demo_url: "https://travel-planner-jrms.vercel.app/"
    },
    {
        id: 2,
        title: "Super Resolution GAN",
        description: "A deep learning model using Generative Adversarial Networks (GANs) to upscale and enhance the resolution of low-quality images.",
        tech_stack: ["Python", "Deep Learning", "GANs", "Computer Vision"]
    },
    {
        id: 3,
        title: "One stop personalised career and education advisor",
        description: "An intelligent platform designed to provide personalized career and education guidance tailored to individual user profiles.",
        tech_stack: ["Next.js", "Genkit AI", "Firebase", "Interactive Maps"],
        demo_url: "https://sih-final-imps.vercel.app/"
    }
];

const fallbackSkills = [
    { category: "Languages", items: ["Python", "JavaScript (Basic)", "TypeScript"] },
    { category: "Frameworks & Libraries", items: ["FastAPI", "React.js", "Pandas", "NumPy"] },
    { category: "Databases & Cloud", items: ["MySQL", "MongoDB", "Firebase", "Azure Cosmos DB", "Microsoft Azure"] },
    { category: "Tools & Platforms", items: ["GitHub", "VS Code", "Jupyter Notebook", "Google Colab"] },
    { category: "Concepts & Technologies", items: ["OOP", "DSA", "API Integration", "CNN"] }
];

const projectDetails = {
    "AI Travel Planner for Students": {
        overview: "Developed an AI-powered travel planning platform designed to help students create affordable and personalized trip plans with smart budget management and interactive roadmap visualization.",
        research: [
            "Identified challenges faced by students in planning budget-friendly trips.",
            "Researched AI-based recommendation systems and travel planning concepts.",
            "Designed the application workflow, user interface, and feature structure."
        ],
        tech: [
            "Frontend: React.js, Vite, CSS/Tailwind",
            "Backend: Node.js, Express.js",
            "Database: MongoDB Atlas",
            "AI Integration: Google Gemini AI",
            "Authentication: JWT, Bcrypt",
            "Email Service: Nodemailer",
            "Version Control: Git & GitHub"
        ],
        features: [
            "AI-generated day-wise travel itineraries",
            "Smart budget planning and expense tracking",
            "Interactive roadmap visualization",
            "Secure login and password recovery system",
            "Travel-focused AI chatbot",
            "“Spin the Wheel” destination suggestion feature",
            "Saved places and personalized recommendations"
        ],
        learning: [
            "Explored modern AI tools and gained an understanding of how AI models are developed, trained, and integrated into real-world applications.",
            "Strengthened full-stack development skills by working with frontend, backend, database, and API integration technologies in a real-world project environment.",
            "Implemented secure authentication systems, database operations, and responsive user interface designs to enhance application functionality and user experience.",
            "Gained end-to-end project development experience, including requirement analysis, system design, implementation, testing, and deployment."
        ],
        outcome: "Successfully developed and deployed a complete full-stack AI travel planning platform that provides students with personalized, affordable, and user-friendly travel planning solutions."
    },
    "One stop personalised career and education advisor": {
        overview: "Developed an AI-powered educational guidance platform aimed at helping students make informed academic and career decisions through personalized recommendations, interactive visualizations, and intelligent career mapping. The project was designed and developed as part of the Smart India Hackathon (SIH), where it emerged as the winning solution.",
        research: [
            "Identified challenges faced by students in choosing suitable academic streams, colleges, and career paths.",
            "Researched AI-driven recommendation systems, educational counseling methods, and interactive visualization techniques.",
            "Designed a scalable platform to support students, parents, and guest users with personalized educational guidance."
        ],
        tech: [
            "Frontend & Framework: Next.js, React.js, Tailwind CSS",
            "UI Components & Animations: Shadcn UI, Radix UI, Framer Motion",
            "AI Integration: Google Genkit AI",
            "Database & Authentication: Firebase",
            "Visualization & Mapping: React Flow, React Leaflet, Recharts",
            "Internationalization: next-intl",
            "Version Control: Git & GitHub"
        ],
        features: [
            "AI-powered aptitude quiz and stream recommendation system",
            "Interactive course-to-career mapping visualization",
            "Comprehensive college directory with filtering and map integration",
            "Personalized AI-based college recommendation engine",
            "Dynamic admission timeline and reminder tracker",
            "Multi-role access for students, parents, and guest users",
            "Multilingual support for wider accessibility"
        ],
        learning: [
            "Explored modern AI technologies and gained practical understanding of AI-driven recommendation systems and agentic workflows.",
            "Strengthened frontend development and UI/UX design skills through interactive and responsive interface implementation.",
            "Worked with real-time databases, authentication systems, and scalable application architecture using Firebase.",
            "Gained experience in full project development lifecycle including research, planning, implementation, testing, and deployment."
        ],
        outcome: "Successfully developed and presented a complete AI-driven educational guidance platform that simplifies academic decision-making and enhances accessibility for students from diverse backgrounds. The project was recognized as a winning solution at the Smart India Hackathon (SIH)."
    }
};

// Render Projects
async function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;
    try {
        let projects;
        try {
            const response = await fetch(`${API_BASE_URL}/projects`);
            if (!response.ok) throw new Error('API failed');
            projects = await response.json();
        } catch (e) {
            projects = fallbackProjects;
        }
        container.innerHTML = '';
        projects.forEach((project, idx) => {
            const primaryColor = idx % 2 === 0 ? 'energyTeal' : 'energyOrange';
            const hexColor = idx % 2 === 0 ? '#00f0ff' : '#ff6b00';
            const techBadges = project.tech_stack.map(tech => `<span class="px-2 py-1 text-xs font-agatho font-semibold rounded bg-${primaryColor}/10 text-${primaryColor} border border-${primaryColor}/30 shadow-[0_0_5px_${hexColor}33]">${tech}</span>`).join('');
            const links = [];
            if (project.github_url) links.push(`<a href="${project.github_url}" target="_blank" onclick="event.stopPropagation()" class="text-gray-500 hover:text-gray-900 transition-colors"><i data-lucide="github" class="w-5 h-5"></i></a>`);
            if (project.demo_url) links.push(`<a href="${project.demo_url}" target="_blank" onclick="event.stopPropagation()" class="text-gray-500 hover:text-${primaryColor} transition-colors"><i data-lucide="external-link" class="w-5 h-5"></i></a>`);
            const card = document.createElement('div');
            card.className = `project-card group relative p-[1.5px] rounded-xl bg-gray-200 hover:bg-${primaryColor} transition-all duration-500 hover:shadow-lg cursor-pointer`;
            card.innerHTML = `<div class="bg-white h-full rounded-xl p-6 flex flex-col relative overflow-hidden"><div class="absolute -top-10 -right-10 w-32 h-32 bg-${primaryColor}/10 rounded-full blur-3xl group-hover:bg-${primaryColor}/20 transition-all duration-500"></div><div class="flex justify-end items-start mb-4 relative z-10"><div class="flex gap-3">${links.join('')}</div></div><h3 class="text-2xl font-codec font-bold text-gray-900 mb-2 relative z-10 group-hover:text-${primaryColor} transition-colors">${project.title}</h3><p class="text-gray-500 text-sm flex-grow mb-6 relative z-10">${project.description}</p><div class="flex flex-wrap gap-2 mt-auto relative z-10">${techBadges}</div></div>`;
            card.onclick = () => openProjectModal(project);
            container.appendChild(card);
        });
        lucide.createIcons();
    } catch (error) {
        container.innerHTML = '<p class="text-energyOrange col-span-full text-center">System failure: Unable to load modules.</p>';
    }
}

// Setup GSAP Animations
function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header, { scrollTrigger: { trigger: header, start: "top 85%" }, y: 30, opacity: 0, duration: 0.8, ease: "power3.out" });
    });
}

// Navbar scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('bg-[#1D3F43]', 'shadow-sm', 'backdrop-blur-md');
        nav.classList.remove('bg-transparent');
    } else {
        nav.classList.remove('bg-[#1D3F43]', 'shadow-sm', 'backdrop-blur-md');
        nav.classList.add('bg-transparent');
    }
});

// Scene1 Style Cyberpunk Phoenix Glitch Reveal
function scene1Reveal(elementId) {
    const el = document.getElementById(elementId);
    if (!el) return;

    const originalText = el.getAttribute('data-text') || el.innerText;
    el.innerHTML = '';
    el.classList.add('glitch-reveal', 'rgb-split');
    el.style.opacity = '1';
    el.style.visibility = 'visible';

    const spans = originalText.split('').map(char => {
        const span = document.createElement('span');
        span.innerText = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        el.appendChild(span);
        return { el: span, finalChar: char };
    });

    // Animate letters with Cyberpunk Phoenix energy
    const flickerIntervals = [];

    spans.forEach((item, index) => {
        setTimeout(() => {
            el.classList.add('active');
            item.el.style.opacity = '1';
            
            // Cyberpunk energy flicker
            const fInterval = setInterval(() => {
                item.el.style.opacity = Math.random() > 0.1 ? '1' : '0.4';
            }, 50);
            flickerIntervals.push(fInterval);

            if (index === spans.length - 1) {
                // Once the LAST character is reached, stop EVERYTHING
                setTimeout(() => {
                    flickerIntervals.forEach(clearInterval);
                    // Force complete static state
                    spans.forEach(s => s.el.style.opacity = '1');
                    el.classList.remove('rgb-split', 'active');
                }, 400); // Quick cleanup
            }
        }, index * 45);
    });
}

// Global Trigger
window.addEventListener('load', () => {
    const preloader = document.getElementById('video-preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('opacity-0');
            setTimeout(() => {
                preloader.style.display = 'none';
                scene1Reveal('hero-name');
            }, 600);
        }, 1500);
    } else {
        scene1Reveal('hero-name');
    }
});

document.addEventListener('DOMContentLoaded', async () => {
    await renderProjects();
    initAnimations();
    lucide.createIcons();

    // Modal Close Events
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const projectModal = document.getElementById('project-modal');

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
    if (projectModal) {
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) closeProjectModal();
        });
    }
});

// Modal Control Functions
function openProjectModal(project) {
    const modal = document.getElementById('project-modal');
    const mainContent = document.getElementById('main-content');
    const body = document.body;
    const details = projectDetails[project.title];

    if (!details) {
        // If no extra details, handle accordingly or just open demo link
        if (project.demo_url) window.open(project.demo_url, '_blank');
        return;
    }

    // Populate modal
    document.getElementById('modal-title').innerText = project.title;

    const githubLink = document.getElementById('modal-github');
    const demoLink = document.getElementById('modal-demo');
    
    if (project.github_url) {
        githubLink.href = project.github_url;
        githubLink.style.display = 'flex';
    } else {
        githubLink.style.display = 'none';
    }
    
    if (project.demo_url) {
        demoLink.href = project.demo_url;
        demoLink.style.display = 'flex';
    } else {
        demoLink.style.display = 'none';
    }

    const bodyContent = document.getElementById('modal-body-content');
    bodyContent.innerHTML = `
        <div class="animate-fadeIn">
            <div class="mb-8">
                <h3 class="modal-section-title"><i data-lucide="info" class="w-5 h-5 text-energyTeal"></i> Project Overview</h3>
                <p class="text-gray-600">${details.overview}</p>
            </div>
            
            <div class="mb-8">
                <h3 class="modal-section-title"><i data-lucide="search" class="w-5 h-5 text-energyOrange"></i> Planning & Research</h3>
                <ul class="modal-list">
                    ${details.research.map(item => `<li><span class="modal-list-dot"></span><span>${item}</span></li>`).join('')}
                </ul>
            </div>

            <div class="mb-8">
                <h3 class="modal-section-title"><i data-lucide="cpu" class="w-5 h-5 text-energyTeal"></i> Technologies & Tools</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    ${details.tech.map(item => `<div class="p-3 bg-gray-50 rounded-xl border border-gray-100 text-sm font-medium text-gray-700">${item}</div>`).join('')}
                </div>
            </div>

            <div class="mb-8">
                <h3 class="modal-section-title"><i data-lucide="layers" class="w-5 h-5 text-energyOrange"></i> Features Developed</h3>
                <ul class="modal-list">
                    ${details.features.map(item => `<li><span class="modal-list-dot"></span><span>${item}</span></li>`).join('')}
                </ul>
            </div>

            <div class="mb-8">
                <h3 class="modal-section-title"><i data-lucide="graduation-cap" class="w-5 h-5 text-energyTeal"></i> Learning & Experience</h3>
                <ul class="modal-list">
                    ${details.learning.map(item => `<li><span class="modal-list-dot"></span><span>${item}</span></li>`).join('')}
                </ul>
            </div>

            <div class="p-6 bg-energyTeal/5 border border-energyTeal/20 rounded-2xl">
                <h3 class="text-lg font-bold text-energyTeal mb-2">Project Outcome</h3>
                <p class="text-gray-700 italic">"${details.outcome}"</p>
            </div>
        </div>
    `;

    lucide.createIcons();

    // Show modal with animation
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.add('active');
        mainContent.classList.add('main-content-blur');
        body.style.overflow = 'hidden'; 
    }, 10);
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    const mainContent = document.getElementById('main-content');
    const body = document.body;

    modal.classList.remove('active');
    mainContent.classList.remove('main-content-blur');
    body.style.overflow = ''; 

    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

// Three.js Background Animation
function initThreeJS() {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Create Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const material = new THREE.PointsMaterial({
        size: 0.005,
        color: '#0891b2',
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, material);
    scene.add(particlesMesh);

    camera.position.z = 3;

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        particlesMesh.rotation.y += 0.001;
        particlesMesh.rotation.x += 0.0005;
        renderer.render(scene, camera);
    }

    animate();

    // Handle Resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// Call Three.js init
document.addEventListener('DOMContentLoaded', () => {
    initThreeJS();
});
