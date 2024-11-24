let currentSlide = 0;

function moveSlide(index) {
    const sliderContent = document.querySelector('.slider-content');
    const totalSlides = document.querySelectorAll('.slider-item').length;

    if (index >= totalSlides) {
        currentSlide = 0; 
    } else if (index < 0) {
        currentSlide = totalSlides - 1; 
    } else {
        currentSlide = index;
    }
    sliderContent.style.transform = `translateX(-${currentSlide * 100}%)`;
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === currentSlide) {
            dot.classList.add('active');
        }
    });
}
setInterval(() => {
    moveSlide(currentSlide + 1);
}, 3000);
moveSlide(currentSlide);

function setActiveLink(event, element) {
    let links = document.querySelectorAll('.nav__link');
    links.forEach(link => link.classList.remove('active-link'));
    element.classList.add('active-link');
}

document.addEventListener("DOMContentLoaded", () => {
    const showMenu = (toggleId, navId) => {
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId);

        if (toggle && nav) {
            toggle.addEventListener('click', () => {
                nav.classList.toggle('show');
            });
        }
    };
    showMenu('nav-toggle', 'nav-menu');
});

function showNext() {
    document.getElementById('intro').style.display = 'none';

    const content = document.createElement('div');
    content.id = 'content';
    content.className = 'content';

    content.innerHTML = `
        <div class="second_page">
            <button class="bubble-button" onclick="showContent()">
                <i class='bx bx-right-arrow-alt'></i> SHOW WHOLE CONTENT
            </button>
        </div>
    `;

    document.body.appendChild(content);
}

function showContent() {
    document.getElementById('intro').style.display = 'none';

    const content = document.createElement('div');
    content.id = 'content';
    content.className = 'content';

    content.innerHTML = `
        <!-- HEADER -->
        <header class="l-header">
            <nav class="nav bd-grid">
                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item"><a href="#home" class="nav__link" onclick="setActiveLink(event, this)">Home</a></li>
                        <li class="nav__item"><a href="#about" class="nav__link" onclick="setActiveLink(event, this)">About</a></li>
                        <li class="nav__item"><a href="#project" class="nav__link" onclick="setActiveLink(event, this)">Project</a></li>
                        <li class="nav__item"><a href="#skills" class="nav__link" onclick="setActiveLink(event, this)">Skills</a></li>
                        <li class="nav__item"><a href="#contact" class="nav__link" onclick="setActiveLink(event, this)">Contact</a></li>
                    </ul>
                </div>
                <div class="nav__toggle" id="nav-toggle">
                    <i class='bx bx-menu'></i>
                </div>
            </nav>
        </header>

        <!-- MAIN CONTENT -->
                    <main class="l-main">
                        <section class="home bd-grid" id="home">
                <div class="home__data">
                    
                    </div>
                    <div class="home__content">
                        <h1 class="home__title">Hello! I'm <span class="home__title-color"><br>Jerlyn Mae</span></h1>
                        <p class="home__description">
                            Welcome to my personal space! I'm passionate about <br>
                            web design, digital art, and sharing creative ideas. Here, you'll <br>
                            find my latest projects, ideas, and ways to connect with me.<br>
                            Let's create something amazing together!
                        </p>
                        <a href="#contact" class="button"> Contact Me</a>
                    </div>
                    <div class="home_pic" id="home_pic"> 
                    <img src="images/mepo.jpg"> </div>
                    <div class="bubbles-right">
                    <div class="bubble">
                        <a href="https://facebook.com" target="_blank">
                            <i class="bx bxl-facebook"></i>
                        </a>
                    </div>
                    <div class="bubble1">
                        <a href="https://instagram.com" target="_blank">
                            <i class="bx bxl-instagram"></i>
                        </a>
                    </div>
                    <div class="bubble2">
                        <a href="https://github.com" target="_blank">
                            <i class="bx bxl-github"></i>
                        </a>
                    </div>
                    <div class="bubble3">
                        <a href="https://youtube.com" target="_blank">
                            <i class="bx bxl-youtube"></i>
                        </a>
                    </div>
                    <div class="bubble4">
                        <a href="https://telegram.com" target="_blank">
                            <i class="bx bxl-telegram"></i>
                        </a>
                    </div>
                    <div class="bubble5">
                        <a href="https://linkedin.com" target="_blank">
                            <i class="bx bxl-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
                                
            </section>
            <!-- ABOUT SECTION -->
            <section class="about section" id="about">
                <h2 class="section-title">About</h2>
                <div class="about1">
                <h1> About Me </h1>
                <p> I'am Jerlyn Mae Magante and I am starting my journey in coding. I may not be very good at it yet, 
                but I am excited to learn and grow.<br>
                 I enjoy discovering how coding can be used to create amazing things and solve everyday problems.</p>
                 </div>
                 <div class="about2">
                <h1> What I do </h1>
                <p> Right now, I am practicing the basics of coding through small 
                projects and challenges. I enjoy trying out different programming languages 
                and learning how they work. Every project I complete helps me improve my skills 
                and gives me more confidence.</p>
                </div>
                <div class="about3">
                <h1> What I dream </h1>
                <p>My dream is to become a skilled coder and create useful apps, 
                websites, or software. I want to keep learning and exploring new ideas 
                in technology. With hard work and determination, I believe I can achieve 
                my goals and make a difference through coding.</p>
                </div>
            <!---PROJECTS SECTION--->
             <section class="project section" id="project">
                <h2 class="section-title">Projects</h2>
            <div class="slider-container">
                    <div class="slider-content">
                         <img src="images/aluu.png" class="slider-item">
                         <img src="images/evo.png" class="slider-item" >
                         <img src="images/self.png" class="slider-item" >
                        </div>
                    <div class="slider-dots">
                        <span class="dot" onclick="moveSlide(0)"></span>
                        <span class="dot" onclick="moveSlide(1)"></span>
                        <span class="dot" onclick="moveSlide(2)"></span>
                    </div>
                    </div>
                     </section>
                    <div class="project-description">
                    <h3> My Projects </h3>
                    <p> I am working on small coding projects to practice and improve my skills. 
                    These projects help me learn how to solve problems and write better code.
                     Some of my projects include creating simple websites, basic apps, or solving 
                     coding challenges. I enjoy seeing my ideas turn into something real through coding.
                    Each project helps me learn new things and get better step by step.</p>
                </div>
                       <!-- SKILLS SECTION -->
            <section class="skills section" id="skills">
            <h2 class="section-title">Skills</h2>
            <div class="skills__container bd-grid">          
                <div>
                    <h2 class="skills__subtitle">programming Skills</h2>
                    <p class="skills__text">I have skills in Java programming, Python development, and Android Studio for app development.</p>
                    
                    <div class="skills__data">
                        <div class="skills__names">
                            <i class='fab fa-java skills__icon'></i>
                            <span class="skills__name">Java</span>
                        </div>
                        <div class="skills__bar skills__java"></div>
                        <div>
                            <span class="skills__percentage">30%</span>
                        </div>
                    </div>

                    <div class="skills__data">
                        <div class="skills__names">
                            <i class='fab fa-python skills__icon'></i>
                            <span class="skills__name">Python</span>
                        </div>
                        <div class="skills__bar skills__python"></div>
                        <div>
                            <span class="skills__percentage">60%</span>
                        </div>
                    </div>

                    <div class="skills__data">
                        <div class="skills__names">
                            <i class='bx bxs-devices skills__icon'></i>
                            <span class="skills__name">Android Studio</span>
                        </div>
                        <div class="skills__bar skills__android"></div>
                        <div>
                            <span class="skills__percentage">90%</span>
                        </div>
                    </div>
                </div>
                
                <div>
                    <h2 class="skills__subtitle">Technical Skills</h2>
                    <p class="skills__text">I also have foundational knowledge in web development, particularly in HTML, CSS, and JavaScript.</p>
                    
                    <div class="skills__data">
                        <div class="skills__names">
                            <i class='bx bxl-html5 skills__icon'></i>
                            <span class="skills__name">HTML</span>
                        </div>
                        <div class="skills__bar skills__html"></div>
                        <div>
                            <span class="skills__percentage">80%</span>
                        </div>
                    </div>

                    <div class="skills__data">
                        <div class="skills__names">
                            <i class='bx bxl-css3 skills__icon'></i>
                            <span class="skills__name">CSS</span>
                        </div>
                        <div class="skills__bar skills__css"></div>
                        <div>
                            <span class="skills__percentage">50%</span>
                        </div>
                    </div>

                    <div class="skills__data">
                        <div class="skills__names">
                            <i class='bx bxl-javascript skills__icon'></i>
                            <span class="skills__name">JavaScript</span>
                        </div>
                        <div class="skills__bar skills__js"></div>
                        <div>
                            <span class="skills__percentage">30%</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

            <!-- CONTACT SECTION -->
                   <div  id="contact">
            <h2 class="section-title">Contact</h2></div>
           <section class="contact section" data-reveal>
                <div class="contact-content">
                    <div class="contact-left">
                        <img src="images/iconmess.png" alt="Contact Icon" class="contact-icon">
                        <h2>If you like what you see, let’s work together.</h2>
                        <p>Have any questions? Reach out to me from this contact form and I will get back to you shortly.</p>
                    </div>
                    <div class="contact-right">
                        <form action="#">
                            <input type="text" name="name" placeholder="Name *" required>
                            <input type="email" name="email" placeholder="Email *" required>
                            <textarea name="message" placeholder="Message *" required></textarea>
                            <button type="submit" class="send-message-btn">Send message</button>
                        </form>
                    </div>
                </div>
         </section>
            </main>
        <!-- FOOTER -->
        <footer class="footer">
            <p class="footer__title">Jerlyn Mae Magante</p>
            <div class="footer__social">
                <a href="#" class="footer__icon"><i class='bx bxl-facebook'></i></a>
                <a href="#" class="footer__icon"><i class='bx bxl-instagram'></i></a>
            </div>
            <p class="footer__copy">&#169; 2024 Jerlyn Mae Magante. All rights reserved.</p>
        </footer>
    `;

    document.body.appendChild(content);

    sr.reveal('.home__title', { delay: 200 });
    sr.reveal('.home_pic', { delay: 400 });
    sr.reveal('.project-description', { delay: 400 });
    sr.reveal('.home__description', { delay: 200 });
    sr.reveal('.about__subtitle', { delay: 200 });
    sr.reveal('.skills__subtitle', { delay: 200 });
    sr.reveal('.skills__data', { delay: 200 });
    sr.reveal('.contact-content', { delay: 200 });
}

function setActiveLink(event, element) {
    let links = document.querySelectorAll('.nav__link');
    links.forEach(link => link.classList.remove('active-link'));
    element.classList.add('active-link');
}

document.addEventListener("DOMContentLoaded", () => {
    const showMenu = (toggleId, navId) => {
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId);

        if (toggle && nav) {
            toggle.addEventListener('click', () => {
                nav.classList.toggle('show');
            });
        }
    };
    showMenu('nav-toggle', 'nav-menu');
});
