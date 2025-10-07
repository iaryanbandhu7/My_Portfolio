        document.addEventListener('DOMContentLoaded', function() {
            // --- Header Shadow on Scroll ---
            const header = document.querySelector('header');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 20) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // --- Mobile Menu Toggle ---
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileMenuLinks = mobileMenu.querySelectorAll('a');

            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            // Close mobile menu when a link is clicked
            mobileMenuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                });
            });

            // --- Scroll Reveal Animation ---
            const reveal = () => {
                const reveals = document.querySelectorAll(".reveal");
                const windowHeight = window.innerHeight;
                const elementVisible = 80;

                for (let i = 0; i < reveals.length; i++) {
                    const elementTop = reveals[i].getBoundingClientRect().top;
                    if (elementTop < windowHeight - elementVisible) {
                        reveals[i].classList.add("active");
                    }
                }
            }
            window.addEventListener("scroll", reveal);
            reveal(); // Initial check
        });