    let currentSlide = 0;
        let autoSlideInterval;
        const slides = document.querySelectorAll('.feature-box');
        const dotsContainer = document.querySelector('.carousel-dots');

        // Create navigation dots
        slides.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.className = `dot${i === 0 ? ' active' : ''}`;
            dot.addEventListener('click', () => {
                goToSlide(i);
                resetAutoSlide();
            });
            dotsContainer.appendChild(dot);
        });

        function goToSlide(slideIndex) {
            currentSlide = slideIndex;
            document.querySelector('.feature-list').style.transform = 
                `translateX(-${slideIndex * 100}%)`;
            
            // Update dots
            document.querySelectorAll('.dot').forEach((dot, i) => 
                dot.classList.toggle('active', i === slideIndex));
        }

        function resetAutoSlide() {
            clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(() => {
                currentSlide = (currentSlide + 1) % slides.length;
                goToSlide(currentSlide);
            }, 5000);
        }

        // Start auto-slide
        resetAutoSlide();












