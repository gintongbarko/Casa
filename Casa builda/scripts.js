   const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("modalImage");
        const captionText = document.getElementById("caption");
        const images = document.querySelectorAll(".project-photo");
        const span = document.getElementsByClassName("close")[0];
        
        images.forEach(img => {
            img.onclick = function() {
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            }
        });

        span.onclick = function() { 
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        const menuToggle = document.getElementById('menu-toggle');
        const navList = document.getElementById('nav-list');
        const mainNav = document.getElementById('main-nav');

        menuToggle.onclick = function() {
            mainNav.classList.toggle('open');
            menuToggle.classList.toggle('open');
        };

        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('#nav-list a');

        function highlightActiveLink() {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 150;
                if (window.scrollY >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(a => {
                a.classList.remove('active');
                if (a.getAttribute('href').slice(1) === current) {
                    a.classList.add('active');
                }
            });

            if (window.scrollY < 150) {
                navLinks.forEach(a => a.classList.remove('active'));
            }
        }

        window.addEventListener('scroll', highlightActiveLink);
        
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('open');
                menuToggle.classList.remove('open');
            });
        });

        highlightActiveLink();