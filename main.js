document.addEventListener('DOMContentLoaded', function() {
    const cursorDot = document.getElementById('cursor-dot');
    const header = document.getElementById('inner-header');
    const sectionContainer = document.getElementById('section-container');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    let currentSectionId = 'home';

    // Custom cursor logic
    if (window.matchMedia("(min-width: 768px)").matches) {
        window.addEventListener('mousemove', e => {
            cursorDot.style.left = `${e.clientX}px`;
            cursorDot.style.top = `${e.clientY}px`;
        });
    } else {
        cursorDot.style.display = 'none';
    }


    // Mobile menu toggle
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // A global function to be accessed by onclick attributes in index.html
    window.showSection = function(sectionId) {
        if (currentSectionId === sectionId && sectionId !== 'home') return;

        const isHome = sectionId === 'home';
        document.getElementById('home').classList.toggle('hidden', !isHome);
        header.classList.toggle('-translate-y-full', isHome);

        if (isHome) {
            sectionContainer.innerHTML = '';
        } else {
            sectionContainer.innerHTML = sections[sectionId];
            // Trigger reveal animation
            setTimeout(() => {
                const revealElements = document.querySelectorAll('#' + sectionId + ' .reveal');
                revealElements.forEach(el => el.classList.add('visible'));
            }, 50);
        }

        // Close mobile menu if it's open
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }

        // Update active nav link for desktop
        const navLinksToUpdate = document.querySelectorAll('#nav-links a');
        navLinksToUpdate.forEach(link => {
            link.classList.toggle('active', link.dataset.section === sectionId);
        });
        
        currentSectionId = sectionId;
    }

    // Section templates
    const sections = {
        about: `
            <section id="about" class="content-section pt-32" style="background-color: var(--section-bg-about);">
                <div class="container mx-auto px-6 py-16 reveal">
                    <h2 class="section-heading text-3xl md:text-4xl font-bold text-center mb-16">About Me</h2>
                    <div class="max-w-4xl mx-auto space-y-12">
                        <div class="reveal">
                            <h3 class="text-2xl font-bold nav-link-dark mb-4">Personal Summary</h3>
                            <div class="text-slate-600 text-lg leading-relaxed space-y-4">
                                <p>I'm a recent Master's grad from Penn State, where I got to dive deep into the world of AI. My real passion is in the hands-on process of building and taking a complex idea, turning it into a real, working system from the ground up. I've spent my program learning and building everything from multi-agent workflows to computer vision models, and I've found my curiosity in machine intelligence and learned that I like owning my work in projects from the first line of code to the final deployment. I'm passionate about my deep curiosity and aspiration to solve problems and create intelligent, useful applications.</p>
                                <p>My real hobby is diving headfirst into the latest in AI, guess thru News, Blogs, Papers, Open-Source work etc. I'm the person who gets genuinely excited about a new framework release or a groundbreaking research paper. For me, learning isn't just for classes and I believe this, getting involved straight down to bottom off with cutting-edge technologies like agentic AI and new LLMs and it's applications just to see how they work and what I can build with them. That constant curiosity is what made me intrigue to AI.</p>
                            </div>
                        </div>
                        <div class="reveal pt-8 border-t border-orange-200" style="transition-delay: 0.2s;">
                            <h3 class="text-2xl font-bold nav-link-dark mb-4">Education</h3>
                            <div class="space-y-4">
                                <div>
                                    <p class="text-slate-800 text-xl font-bold">Penn State University</p>
                                    <p class="text-slate-600 text-lg">Masters in Computer Science</p>
                                    <p class="text-slate-500 text-sm">Aug 2023 – May 2025 | GPA: 3.6/4.0</p>
                                </div>
                                <div>
                                    <p class="text-slate-800 text-xl font-bold">VR Siddhartha Engineering College</p>
                                    <p class="text-slate-600 text-lg">Bachelors in Computer Science Engineering</p>
                                    <p class="text-slate-500 text-sm">Aug 2019 - May 2023 | GPA: 9.4/10</p>
                                </div>
                            </div>
                        </div>
                        <div class="reveal pt-8 border-t border-orange-200" style="transition-delay: 0.4s;">
                            <h3 class="text-2xl font-bold nav-link-dark mb-4">Activities</h3>
                            <p class="text-slate-600 text-lg leading-relaxed">My enthusiasm for technology extends beyond academics, I'm constantly exploring the Gen AI domain in AI/ML. I was the Innovation Club Head Coordinator, and ranked in the top 1% of my class. And created AR applications in a Unity workshop, I also volunteered for medical service camps and served as Student Council Head.</p>
                        </div>
                    </div>
                </div>
                <footer class="text-center py-4 border-t border-orange-200"><p class="text-sm text-slate-500 font-medium">© 2025 Vishnu Koraganji.</p></footer>
            </section>`,
        skills: `
            <section id="skills" class="content-section pt-32" style="background-color: var(--section-bg-skills);">
                <div class="container mx-auto px-6 py-16 reveal">
                    <h2 class="section-heading text-3xl md:text-4xl font-bold text-center mb-16">Technical Skills</h2>
                    <div class="max-w-6xl mx-auto space-y-10">
                        <div class="card p-6 md:p-8 rounded-lg reveal">
                            <h3 class="text-xl font-semibold nav-link-dark mb-4">Languages & Databases</h3>
                            <div class="flex flex-wrap gap-2">
                                ${['Python', 'Java', 'C', 'JavaScript', 'SQL', 'React', 'R', 'PostgreSQL', 'Firebase', 'ChromaDB', 'Git'].map(skill => `<span class="bg-slate-200 text-slate-700 font-medium px-2.5 py-1 rounded-md">${skill}</span>`).join('')}
                            </div>
                        </div>
                        <div class="card p-6 md:p-8 rounded-lg reveal" style="transition-delay: 0.1s;">
                            <h3 class="text-xl font-semibold nav-link-dark mb-4">Machine Learning & Deep Learning</h3>
                            <div class="flex flex-wrap gap-2">
                                ${['PyTorch', 'TensorFlow/Keras', 'Pandas', 'Scikit-learn', 'NLTK', 'MLFlow', 'DVC', 'Classification', 'Clustering', 'Regression', 'Recommender Systems', 'Information Retrieval', 'NLP', 'Statistics', 'Computer Vision', 'Time Series Forecasting', 'CNN', 'RNN', 'YOLO', 'Machine Learning', 'Ranking and Searching'].map(skill => `<span class="bg-blue-100 text-blue-800 font-medium px-2.5 py-1 rounded-md">${skill}</span>`).join('')}
                            </div>
                        </div>
                        <div class="card p-6 md:p-8 rounded-lg reveal" style="transition-delay: 0.2s;">
                            <h3 class="text-xl font-semibold nav-link-dark mb-4">Generative AI</h3>
                            <div class="flex flex-wrap gap-2">
                                ${['Transformer models', 'BERT', 'GPT', 'Gemini', 'Llama', 'RAG', 'PEFT (LoRA & QLoRA)', 'Fine-Tuning', 'LLM', 'Langchain', 'CrewAI', 'Hugging Face', 'Sentiment Transformers', 'FAISS', 'FastAPI', 'RESTAPI'].map(skill => `<span class="bg-purple-100 text-purple-800 font-medium px-2.5 py-1 rounded-md">${skill}</span>`).join('')}
                            </div>
                        </div>
                            <div class="card p-6 md:p-8 rounded-lg reveal" style="transition-delay: 0.3s;">
                            <h3 class="text-xl font-semibold nav-link-dark mb-4">MLOps, Tools & Coursework</h3>
                            <div class="flex flex-wrap gap-2">
                                ${['MLOps', 'Docker-Containers', 'CI/CD/CT', 'AWS', 'VS Code', 'Eclipse', 'Ollama', 'Ngrok', 'ArcGIS/QGIS', 'AI/ML', 'DSA & OS', 'Algorithms Analysis', 'DBMS & Data Analytics'].map(skill => `<span class="bg-green-100 text-green-800 font-medium px-2.5 py-1 rounded-md">${skill}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="text-center py-4 border-t border-red-200"><p class="text-sm text-slate-500 font-medium">© 2025 Vishnu Koraganji.</p></footer>
            </section>`,
        experience: `
            <section id="experience" class="content-section pt-32" style="background-color: var(--section-bg-experience);">
                <div class="container mx-auto px-6 py-16 reveal">
                    <h2 class="section-heading text-3xl md:text-4xl font-bold text-center mb-16">Experience</h2>
                    <div class="max-w-4xl mx-auto space-y-8">
                        <div class="experience-card card rounded-lg p-6 reveal">
                            <p class="text-sm text-violet-800 font-medium">Sep 2023 - May 2025</p>
                            <h3 class="text-xl font-bold mt-1 nav-link-dark">Graduate Teaching Assistant</h3>
                            <p class="text-md text-slate-700">Penn State University</p>
                            <p class="text-slate-500 text-sm mt-2 font-light italic">Hover to view description</p>
                            <div class="description text-slate-600">
                                <ul class="list-disc pl-5 space-y-2">
                                    <li>Graded for Capstone Projects, Data Structures & Algorithms, Computer Graphics, Software Engineering, and Calculus.</li>
                                    <li>Reviewed 10+ undergraduate capstone projects weekly, advised on software project management, and collaborated with faculty on grading standards.</li>
                                    <li>Guided teams on Agile and SDLC best practices in Software Engineering, evaluated Unity tasks (3D models, textures,
                                        rendering) in Computer Graphics, and refined grading rubrics/syllabi using UML and use-case diagrams</li>
                                </ul>
                            </div>
                        </div>
                        <div class="experience-card card rounded-lg p-6 reveal" style="transition-delay: 0.2s;">
                            <p class="text-sm text-violet-800 font-medium">Mar 2022 - May 2022</p>
                            <h3 class="text-xl font-bold mt-1 nav-link-dark">RPA Developer Intern</h3>
                            <p class="text-md text-slate-700">Blue Prism University</p>
                            <p class="text-slate-500 text-sm mt-2 font-light italic">Hover to view description</p>
                            <div class="description text-slate-600">
                                <ul class="list-disc pl-5 space-y-2">
                                    <li>Developed a Customer Enrollment Process for a health insurance use case by extracting Excel data and integrating it with a customer website.</li>
                                    <li>Configured workflows using Object and Process Studio and implemented robust error handling with automated email notifications.</li>
                                    <li>Parallelized document routing, reducing manual workloads and improving turnaround times.</li>
                                </ul>
                            </div>
                        </div>
                        <div class="experience-card card rounded-lg p-6 reveal" style="transition-delay: 0.4s;">
                            <p class="text-sm text-violet-800 font-medium">Oct 2021 - Dec 2021</p>
                            <h3 class="text-xl font-bold mt-1 nav-link-dark">Cloud Architect Intern</h3>
                            <p class="text-md text-slate-700">Amazon Web Services</p>
                            <p class="text-slate-500 text-sm mt-2 font-light italic">Hover to view description</p>
                            <div class="description text-slate-600">
                                <ul class="list-disc pl-5 space-y-2">
                                    <li>Developed skills in provisioning AWS services (EC2, S3, RDS) and deployed cloud architectures using CloudFormation (IaC).</li>
                                    <li>Configured auto-scaling policies and load balancers to optimize resource usage.</li>
                                    <li>Secured cloud environments using IAM access controls and CloudWatch monitoring.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="text-center py-4 border-t border-violet-200"><p class="text-sm text-slate-500 font-medium">© 2025 Vishnu Koraganji.</p></footer>
            </section>`,
        work: `
            <section id="work" class="content-section pt-32" style="background-color: var(--section-bg-work);">
                <div class="container mx-auto px-6 py-16 reveal">
                    <h2 class="section-heading text-3xl md:text-4xl font-bold text-center mb-16">Work & Research</h2>
                    <div class="max-w-4xl mx-auto space-y-16">
                        <div>
                            <h3 class="text-2xl font-bold nav-link-dark mb-8 text-center uppercase tracking-wider">PROJECTS</h3>
                            <div class="grid grid-cols-1 gap-8">
                                <div class="card p-6 rounded-lg reveal"><h3 class="text-xl font-bold mb-1 nav-link-dark">AI Resume Tailor</h3><p class="text-sm font-medium" style="color: var(--accent-violet-light);">CrewAI, FastAPI, React, LangChain, Gemini API, Scrapy</p><p class="mt-2 text-slate-600">Built a smart AI system to customize resumes, boosting ATS scores by 25-40%. Scraped job data and created a smooth pipeline with FastAPI.</p><a href="https://github.com/07VK/AI-Resume-Tailor" target="_blank" class="font-medium nav-link-dark hover:accent-text mt-4 inline-block">View Code <i class="fas fa-arrow-right ml-1"></i></a></div>
                                <div class="card p-6 rounded-lg reveal" style="transition-delay: 0.1s;"><h3 class="text-xl font-bold mb-1 nav-link-dark">Real-time RAG QA Bot</h3><p class="text-sm font-medium" style="color: var(--accent-violet-light);">PyTorch, DistilBERT, FAISS, FastAPI, LangChain, HTML/CSS/JS, Ollama, Ngrok, Docker</p><p class="mt-2 text-slate-600">Integrated an e-commerce chatbot using a 200k+ product dataset. Fine-tuned DistilBERT for sentiment and FAISS for fast retrieval 85% relevance!</p><a href="https://github.com/07VK/Musi-Chat" target="_blank" class="font-medium nav-link-dark hover:accent-text mt-4 inline-block">View Code <i class="fas fa-arrow-right ml-1"></i></a></div>
                                <div class="card p-6 rounded-lg reveal" style="transition-delay: 0.2s;"><h3 class="text-xl font-bold mb-1 nav-link-dark">Skin Cancer Detection</h3><p class="text-sm font-medium" style="color: var(--accent-violet-light);">Python, OpenCV, TensorFlow, PyTorch, YOLOv8, NumPy</p><p class="mt-2 text-slate-600">Designed a detection system with YOLOv8 and my custom SCSA module, improving precision by 8%+ on the HAM10000 dataset.</p><a href="https://github.com/07VK/YOLO-SCSA" target="_blank" class="font-medium nav-link-dark hover:accent-text mt-4 inline-block">View Code <i class="fas fa-arrow-right ml-1"></i></a></div>
                                <div class="card p-6 rounded-lg reveal" style="transition-delay: 0.3s;"><h3 class="text-xl font-bold mb-1 nav-link-dark">Decentralized File Storage System</h3><p class="text-sm font-medium" style="color: var(--accent-violet-light);">React, IPFS, Solidity, MetaMask</p><p class="mt-2 text-slate-600">Created a blockchain web app for secure image sharing using Solidity contracts, React frontend, and IPFS storage.</p><a href="https://github.com/07VK/Decentral-Drive" target="_blank" class="font-medium nav-link-dark hover:accent-text mt-4 inline-block">View Code <i class="fas fa-arrow-right ml-1"></i></a></div>
                                <div class="card p-6 rounded-lg reveal" style="transition-delay: 0.4s;"><h3 class="text-xl font-bold mb-1 nav-link-dark">Remote-Sensing-Landslide</h3><p class="text-sm font-medium" style="color: var(--accent-violet-light);">Python, U-net, NumPy, Pandas, HDF5, TensorFlow/Keras, ArcGIS</p><p class="mt-2 text-slate-600">Developed a 95% accurate U-Net model for landslide detection using Sentinel data and DInSAR for land deformation tracking.</p><a href="https://github.com/07VK/Remote-Sensing-Landslide" target="_blank" class="font-medium nav-link-dark hover:accent-text mt-4 inline-block">View Code <i class="fas fa-arrow-right ml-1"></i></a></div>
                                <div class="card p-6 rounded-lg reveal" style="transition-delay: 0.5s;"><h3 class="text-xl font-bold mb-1 nav-link-dark">Landslide Prediction using Geo-Atmo-features</h3><p class="text-sm font-medium" style="color: var(--accent-violet-light);">U-net, Python, DInSAR, OpenCV, QGIS, SNAP</p><p class="mt-2 text-slate-600">Predicted landslides with 98% accuracy using a U-Net model and created a 93% accurate susceptibility map for SR-530 using Geological and Atmospherical features.</p><a href="https://github.com/07VK/Landslide-Geo-Atmo-Prediction" target="_blank" class="font-medium nav-link-dark hover:accent-text mt-4 inline-block">View Code <i class="fas fa-arrow-right ml-1"></i></a></div>
                            </div>
                        </div>
                            <div class="pt-8">
                            <h3 class="text-2xl font-bold nav-link-dark mb-8 text-center uppercase tracking-wider">PUBLICATIONS</h3>
                            <div class="grid grid-cols-1 gap-8">
                                <div class="card p-6 rounded-lg reveal"><p class="text-sm text-slate-500 mb-2">Springer | 2024</p><h3 class="text-lg font-bold mb-3 nav-link-dark">Landslide Occurrence Analysis</h3><p class="text-sm text-slate-600">Proposed a novel U-Net model with weather and geo data, hitting 98% accuracy in predicting landslide-prone areas.</p><a href="https://link.springer.com/article/10.1007/s11334-024-00578-x" target="_blank" class="font-medium nav-link-dark hover:accent-text mt-4 inline-block">Read Paper <i class="fas fa-arrow-right ml-1"></i></a></div>
                                <div class="card p-6 rounded-lg reveal" style="transition-delay: 0.1s;"><p class="text-sm text-slate-500 mb-2">IEEE | 2023</p><h3 class="text-lg font-bold mb-3 nav-link-dark">Smart Traffic System</h3><p class="text-sm text-slate-600">Built an IoT-based system for real-time traffic and water monitoring, reducing congestion with predictive analytics.</p><a href="https://ieeexplore.ieee.org/abstract/document/10119413" target="_blank" class="font-medium nav-link-dark hover:accent-text mt-4 inline-block">Read Paper <i class="fas fa-arrow-right ml-1"></i></a></div>
                                <div class="card p-6 rounded-lg reveal" style="transition-delay: 0.2s;"><p class="text-sm text-slate-500 mb-2">IEEE | 2023</p><h3 class="text-lg font-bold mb-3 nav-link-dark">Landslide Vulnerability</h3><p class="text-sm text-slate-600">Led a U-Net model achieving 95% accuracy in landslide detection using Sentinel data and DInSAR techniques.</p><a href="https://ieeexplore.ieee.org/abstract/document/10061077" target="_blank" class="font-medium nav-link-dark hover:accent-text mt-4 inline-block">Read Paper <i class="fas fa-arrow-right ml-1"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="text-center py-4 border-t border-green-200"><p class="text-sm text-slate-500 font-medium">© 2025 Vishnu Koraganji.</p></footer>
            </section>`,
        resume: `
            <section id="resume" class="content-section pt-32" style="background-color: var(--section-bg-resume);">
                    <div class="container mx-auto px-6 py-16 flex flex-col items-center justify-center reveal">
                    <h2 class="section-heading text-3xl md:text-4xl font-bold mb-4 text-center">My Resume</h2>
                    <p class="text-slate-600 mb-8 max-w-lg mx-auto text-center">Get the full details of my skills, projects, work and qualifications. Download the PDF version to see everything in one place.</p>
                    <div class="w-full max-w-4xl p-2 bg-white rounded-lg shadow-2xl border border-slate-200">
                        <img src="Vishnu_Koraganji.jpg" 
                                onerror="this.onerror=null;this.src='Vishnu_Koraganji.jpg'"
                                alt="Preview of Vishnu Koraganji's Resume"
                                class="w-full rounded-md">
                    </div>
                    <a href="Vishnu_Koraganji.pdf" target="_blank" class="mt-8 inline-block bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transform hover:-translate-y-1">
                        <i class="fas fa-download mr-2"></i> Download CV
                    </a>
                </div>
                <footer class="text-center py-4 border-t border-blue-200"><p class="text-sm text-slate-500 font-medium">© 2025 Vishnu Koraganji.</p></footer>
            </section>`,
        contact: `
            <section id="contact" class="content-section pt-32" style="background-color: var(--section-bg-contact);">
                <div class="container mx-auto px-6 py-16 flex items-center justify-center reveal" style="min-height: calc(100vh - 96px);">
                    <div class="max-w-2xl w-full text-center">
                        <h2 class="section-heading text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
                        <p class="text-slate-600 mb-12">I'm actively seeking new opportunities. If you think I'd be a good fit for your team, I'd like to hear from you.</p>
                        <div class="flex justify-center space-x-8 text-4xl">
                            <a href="mailto:vishnukoraganji369@gmail.com" class="transition-transform duration-300 hover:scale-110" aria-label="Email"><i class="fas fa-envelope" style="color: #DB4437;"></i></a>
                            <a href="https://github.com/07VK" target="_blank" class="transition-transform duration-300 hover:scale-110" aria-label="GitHub"><i class="fab fa-github" style="color: #181717;"></i></a>
                            <a href="https://www.linkedin.com/in/vishnukoraganji" target="_blank" class="transition-transform duration-300 hover:scale-110" aria-label="LinkedIn"><i class="fab fa-linkedin" style="color: #0A66C2;"></i></a>
                            <a href="https://scholar.google.com/citations?hl=en&user=v4_WedMAAAAJ" target="_blank" class="transition-transform duration-300 hover:scale-110" aria-label="Google Scholar"><i class="fas fa-graduation-cap" style="color: #4285F4;"></i></a>
                        </div>
                    </div>
                </div>
                <footer class="text-center py-4 border-t border-lime-200"><p class="text-sm text-slate-500 font-medium">© 2025 Vishnu Koraganji.</p></footer>
            </section>`
    };
});