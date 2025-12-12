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
                                <p>I'm a Founding AI Engineer at ClearChartAI, where I'm building HIPAA-compliant medical RAG platforms that process clinical patient records. Previously, I completed my Master's at Penn State, diving deep into AI/ML, NLP, and Generative AI. My passion lies in the hands-on process of building — taking complex ideas and turning them into production systems from the ground up.</p>
                                <p>Currently, I architect intelligent document pipelines for healthcare, working with GCP's Vertex AI, Document AI, and Gemini to build systems that understand medical records, extract clinical entities, and deliver fast, accurate retrieval. I've spent my career building everything from multi-agent workflows to computer vision models, and I love owning projects end-to-end from first line of code to deployment.</p>
                                <p>My real hobby is diving headfirst into the latest in AI — news, blogs, papers, open-source work. I'm the person who gets genuinely excited about a new framework release or a groundbreaking research paper. That constant curiosity is what drives me in AI.</p>
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
                            <p class="text-slate-600 text-lg leading-relaxed">My enthusiasm for technology extends beyond academics — I'm constantly exploring the Gen AI domain in AI/ML. I was the Innovation Club Head Coordinator, ranked in the top 1% of my class, created AR applications in a Unity workshop, volunteered for medical service camps, and served as Student Council Head.</p>
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
                                ${['Python', 'Java', 'C', 'JavaScript', 'SQL', 'PostgreSQL', 'Firebase', 'Firestore', 'ChromaDB', 'Git'].map(skill => `<span class="bg-slate-200 text-slate-700 font-medium px-2.5 py-1 rounded-md">${skill}</span>`).join('')}
                            </div>
                        </div>
                        <div class="card p-6 md:p-8 rounded-lg reveal" style="transition-delay: 0.1s;">
                            <h3 class="text-xl font-semibold nav-link-dark mb-4">Machine Learning & Deep Learning</h3>
                            <div class="flex flex-wrap gap-2">
                                ${['PyTorch', 'TensorFlow/Keras', 'Pandas', 'Scikit-learn', 'NLTK', 'MLFlow', 'DVC', 'Classification', 'Clustering', 'Regression', 'NLP', 'Computer Vision', 'CNN', 'RNN', 'YOLO', 'Information Retrieval'].map(skill => `<span class="bg-blue-100 text-blue-800 font-medium px-2.5 py-1 rounded-md">${skill}</span>`).join('')}
                            </div>
                        </div>
                        <div class="card p-6 md:p-8 rounded-lg reveal" style="transition-delay: 0.2s;">
                            <h3 class="text-xl font-semibold nav-link-dark mb-4">Generative AI & RAG</h3>
                            <div class="flex flex-wrap gap-2">
                                ${['Transformer models', 'BERT', 'GPT', 'Gemini', 'Llama', 'RAG Pipelines', 'PEFT (LoRA/QLoRA)', 'Fine-Tuning LLMs', 'LangChain', 'CrewAI', 'Hugging Face', 'FAISS', 'Vertex AI Vector Search', 'Cohere Rerank', 'FastAPI'].map(skill => `<span class="bg-purple-100 text-purple-800 font-medium px-2.5 py-1 rounded-md">${skill}</span>`).join('')}
                            </div>
                        </div>
                        <div class="card p-6 md:p-8 rounded-lg reveal" style="transition-delay: 0.3s;">
                            <h3 class="text-xl font-semibold nav-link-dark mb-4">MLOps & Cloud</h3>
                            <div class="flex flex-wrap gap-2">
                                ${['Docker', 'MLFlow', 'CI/CD', 'GCP', 'Vertex AI', 'Document AI', 'Cloud Run', 'AWS', 'EC2', 'S3', 'HIPAA Compliance', 'Ollama', 'Ngrok', 'ArcGIS'].map(skill => `<span class="bg-green-100 text-green-800 font-medium px-2.5 py-1 rounded-md">${skill}</span>`).join('')}
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
                        <div class="experience-card card rounded-lg p-6 reveal" style="border-left: 4px solid var(--accent-cyan);">
                            <p class="text-sm text-cyan-700 font-medium">Aug 2025 - Present</p>
                            <h3 class="text-xl font-bold mt-1 nav-link-dark">Founding AI Engineer</h3>
                            <p class="text-md text-slate-700">ClearChartAI <span class="text-slate-500">• Remote</span></p>
                            <p class="text-slate-500 text-sm mt-2 font-light italic">Hover to view description</p>
                            <div class="description text-slate-600">
                                <ul class="list-disc pl-5 space-y-2">
                                    <li>Architected <strong>HIPAA-compliant</strong> medical RAG platform on GCP using Document AI + Gemini 2.0 hybrid approach for processing clinical patient records including lab reports, discharge summaries, and consultation notes.</li>
                                    <li>Built intelligent document chunking pipeline with medical entity recognition, dosage pattern extraction, and clinical abbreviation handling, optimizing retrieval for patient record queries.</li>
                                    <li>Configured full GCP backend infrastructure: Vertex AI Vector Search, Document AI processors, Cloud Run deployments, with proper dev/staging/prod environment separation and BAA compliance.</li>
                                    <li>Implemented hybrid retrieval using FAISS + Vertex AI embeddings with Cohere Rerank 3, achieving <strong>0.85+ cosine similarity</strong> on medical queries with <strong>&lt;3s response latency</strong>.</li>
                                </ul>
                            </div>
                        </div>
                        <div class="experience-card card rounded-lg p-6 reveal" style="transition-delay: 0.2s;">
                            <p class="text-sm text-violet-800 font-medium">Aug 2023 - May 2025</p>
                            <h3 class="text-xl font-bold mt-1 nav-link-dark">Graduate Research Assistant</h3>
                            <p class="text-md text-slate-700">Penn State University <span class="text-slate-500">• Middletown, PA</span></p>
                            <p class="text-slate-500 text-sm mt-2 font-light italic">Hover to view description</p>
                            <div class="description text-slate-600">
                                <ul class="list-disc pl-5 space-y-2">
                                    <li>Conducted applied AI research in medical imaging; designed and implemented a novel <strong>YOLO-SCSA attention module</strong> pipeline for skin lesion detection, achieving <strong>4% mAP improvement</strong> over baseline.</li>
                                    <li>Benchmarked <strong>LLM fine-tuning vs RAG</strong> approaches using small language models (SLMs) for domain-specific question answering, documenting trade-offs in accuracy, latency, and computational cost.</li>
                                    <li>Mentored <strong>10+ undergraduate ML/AI capstone projects</strong>; provided technical guidance on model architecture, hyperparameter tuning, and experiment tracking using MLFlow.</li>
                                </ul>
                            </div>
                        </div>
                        <div class="experience-card card rounded-lg p-6 reveal" style="transition-delay: 0.4s;">
                            <p class="text-sm text-violet-800 font-medium">Oct 2021 - Dec 2021</p>
                            <h3 class="text-xl font-bold mt-1 nav-link-dark">Cloud Architect Intern</h3>
                            <p class="text-md text-slate-700">Amazon Web Services <span class="text-slate-500">• Vijayawada, India</span></p>
                            <p class="text-slate-500 text-sm mt-2 font-light italic">Hover to view description</p>
                            <div class="description text-slate-600">
                                <ul class="list-disc pl-5 space-y-2">
                                    <li>Provisioned and managed AWS services (EC2, S3, RDS, VPC) establishing robust cloud infrastructure with auto-scaling policies and load balancers for optimized resource distribution.</li>
                                    <li>Secured cloud environments through IAM access controls, encryption mechanisms, and CloudWatch monitoring solutions.</li>
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
                                <div class="card p-6 rounded-lg reveal"><h3 class="text-xl font-bold mb-1 nav-link-dark">AI Agentic Resume Tailor</h3><p class="text-sm font-medium" style="color: var(--accent-cyan);">CrewAI, FastAPI, React, LangChain, Gemini API, Scrapy</p><p class="mt-2 text-slate-600">Developed CrewAI multi-agent system to automate resume tailoring, boosting ATS scores by 15-20%. Engineered web scraping agent parsing 5+ job boards with 95% accuracy, eliminating 75% manual entry.</p><a href="https://github.com/07VK/AI-Resume-Tailor" target="_blank" class="font-medium nav-link-dark hover:accent-text mt-4 inline-block">View Code <i class="fas fa-arrow-right ml-1"></i></a></div>
                                <div class="card p-6 rounded-lg reveal" style="transition-delay: 0.1s;"><h3 class="text-xl font-bold mb-1 nav-link-dark">RAG Based QA Bot</h3><p class="text-sm font-medium" style="color: var(--accent-cyan);">PyTorch, DistilBERT, FAISS, FastAPI, LangChain, Ollama</p><p class="mt-2 text-slate-600">Engineered RAG chatbot for Q&A on Amazon Reviews dataset (213K products) with FT-DistilBERT sentiment analysis achieving 89% accuracy. Achieved 95% off-topic rejection, 0.85 cosine similarity, responses in 2-3 seconds.</p><a href="https://github.com/07VK/Musi-Chat" target="_blank" class="font-medium nav-link-dark hover:accent-text mt-4 inline-block">View Code <i class="fas fa-arrow-right ml-1"></i></a></div>
                                <div class="card p-6 rounded-lg reveal" style="transition-delay: 0.2s;"><h3 class="text-xl font-bold mb-1 nav-link-dark">Skin Cancer Detection System</h3><p class="text-sm font-medium" style="color: var(--accent-cyan);">Python, OpenCV, TensorFlow, PyTorch, YOLOv8</p><p class="mt-2 text-slate-600">Developed YOLOv8-based detection system with novel SCSA Attention Module, achieving 4% mAP@50 improvement on HAM10000 dataset. Enhanced precision/recall by +8% with preprocessing pipeline.</p><a href="https://github.com/07VK/YOLO-SCSA" target="_blank" class="font-medium nav-link-dark hover:accent-text mt-4 inline-block">View Code <i class="fas fa-arrow-right ml-1"></i></a></div>
                                <div class="card p-6 rounded-lg reveal" style="transition-delay: 0.3s;"><h3 class="text-xl font-bold mb-1 nav-link-dark">Decentralized File Storage System</h3><p class="text-sm font-medium" style="color: var(--accent-cyan);">React, IPFS, Solidity, MetaMask</p><p class="mt-2 text-slate-600">Created a blockchain web app for secure image sharing using Solidity contracts, React frontend, and IPFS storage.</p><a href="https://github.com/07VK/Decentral-Drive" target="_blank" class="font-medium nav-link-dark hover:accent-text mt-4 inline-block">View Code <i class="fas fa-arrow-right ml-1"></i></a></div>
                                <div class="card p-6 rounded-lg reveal" style="transition-delay: 0.4s;"><h3 class="text-xl font-bold mb-1 nav-link-dark">Landslide Estimation & Analysis</h3><p class="text-sm font-medium" style="color: var(--accent-cyan);">Python, TensorFlow, HDF5, ArcGIS, U-Net</p><p class="mt-2 text-slate-600">Modeled landslide susceptibility using U-Net with DEM, NDMI, slope, elevation, and rainfall data, achieving 98% accuracy (+3% over baseline). Generated susceptibility map for SR-530 with 93% accuracy.</p><a href="https://github.com/07VK/Landslide-Geo-Atmo-Prediction" target="_blank" class="font-medium nav-link-dark hover:accent-text mt-4 inline-block">View Code <i class="fas fa-arrow-right ml-1"></i></a></div>
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
                        <img src="https://github.com/07VK/Resume/blob/main/Vishnu_Koraganji.jpg" 
                                onerror="this.onerror=null;this.src='https://github.com/07VK/Resume/blob/main/Vishnu_Koraganji.jpg'"
                                alt="Preview of Vishnu Koraganji's Resume"
                                class="w-full rounded-md">
                    </div>
                    <a href="https://github.com/07VK/Resume/blob/main/Vishnu_Koraganji.pdf" target="_blank" class="mt-8 inline-block bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transform hover:-translate-y-1">
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
