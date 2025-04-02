      // render the settings object
      //console.log('settings', [object Object]);
      document.addEventListener('DOMContentLoaded', function() {
        tailwind.config = {
          theme: {
            extend: {
              colors: {
                primary: {
                  DEFAULT: '#0a0a1a',
                  50: '#f8f8f8',
                  100: '#e8e8e8', 
                  200: '#d3d3d3',
                  300: '#a3a3a3',
                  400: '#737373',
                  500: '#525252',
                  600: '#404040',
                  700: '#262626',
                  800: '#171717',
                  900: '#0a0a0a',
                  950: '#030303',
                },
                secondary: {
                  DEFAULT: '#0f0f2d',
                  50: '#f8f8f8',
                  100: '#e8e8e8',
                  200: '#d3d3d3', 
                  300: '#a3a3a3',
                  400: '#737373',
                  500: '#525252',
                  600: '#404040',
                  700: '#262626',
                  800: '#171717',
                  900: '#0a0a0a',
                  950: '#030303',
                },
                accent: {
                  DEFAULT: '',
                  50: '#f8f8f8',
                  100: '#e8e8e8',
                  200: '#d3d3d3',
                  300: '#a3a3a3', 
                  400: '#737373',
                  500: '#525252',
                  600: '#404040',
                  700: '#262626',
                  800: '#171717',
                  900: '#0a0a0a',
                  950: '#030303',
                },
              },
              fontFamily: {
                sans: ['Orbitron, sans-serif', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
                heading: ['Poppins, sans-serif', 'Inter', 'system-ui', 'sans-serif'],
                body: ['Poppins, sans-serif', 'Inter', 'system-ui', 'sans-serif'],
              },
              spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '30': '7.5rem',
              },
              maxWidth: {
                '8xl': '88rem',
                '9xl': '96rem',
              },
              animation: {
                'fade-in': 'fadeIn 0.5s ease-in',
                'fade-out': 'fadeOut 0.5s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'slide-down': 'slideDown 0.5s ease-out',
                'slide-left': 'slideLeft 0.5s ease-out',
                'slide-right': 'slideRight 0.5s ease-out',
                'scale-in': 'scaleIn 0.5s ease-out',
                'scale-out': 'scaleOut 0.5s ease-out',
                'spin-slow': 'spin 3s linear infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'bounce-slow': 'bounce 3s infinite',
                'float': 'float 3s ease-in-out infinite',
              },
              keyframes: {
                fadeIn: {
                  '0%': { opacity: '0' },
                  '100%': { opacity: '1' },
                },
                fadeOut: {
                  '0%': { opacity: '1' },
                  '100%': { opacity: '0' },
                },
                slideUp: {
                  '0%': { transform: 'translateY(20px)', opacity: '0' },
                  '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                  '0%': { transform: 'translateY(-20px)', opacity: '0' },
                  '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideLeft: {
                  '0%': { transform: 'translateX(20px)', opacity: '0' },
                  '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                slideRight: {
                  '0%': { transform: 'translateX(-20px)', opacity: '0' },
                  '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                scaleIn: {
                  '0%': { transform: 'scale(0.9)', opacity: '0' },
                  '100%': { transform: 'scale(1)', opacity: '1' },
                },
                scaleOut: {
                  '0%': { transform: 'scale(1.1)', opacity: '0' },
                  '100%': { transform: 'scale(1)', opacity: '1' },
                },
                float: {
                  '0%, 100%': { transform: 'translateY(0)' },
                  '50%': { transform: 'translateY(-10px)' },
                },
              },
              aspectRatio: {
                'portrait': '3/4',
                'landscape': '4/3',
                'ultrawide': '21/9',
              },
            },
          },
          variants: {
            extend: {
              opacity: ['disabled'],
              cursor: ['disabled'],
              backgroundColor: ['active', 'disabled'],
              textColor: ['active', 'disabled'],
            },
          },
        }
      });




// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', function() {
      const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
      mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
      mobileMenu.setAttribute('aria-hidden', isExpanded);
    });
    
    // Close menu when clicking on links
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
      });
    });
  });




  document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": ["#00c8ff", "#9d4edd", "#3a0ca3"]
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
        },
        "opacity": {
          "value": 0.3,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 2,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#00c8ff",
          "opacity": 0.2,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": true,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 0.4
            }
          },
          "push": {
            "particles_nb": 4
          }
        }
      },
      "retina_detect": true
    });
    
    // Smooth scroll for the scroll indicator
    document.querySelector('.animate-bounce').addEventListener('click', function() {
      const detectionSection = document.getElementById('detection');
      if (detectionSection) {
        detectionSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
    
    // Button click animation
    const startButton = document.getElementById('start-detection-btn');
    startButton.addEventListener('click', function() {
      const detectionSection = document.getElementById('detection');
      if (detectionSection) {
        detectionSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });




  document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const imageUpload = document.getElementById('image-upload');
    const previewImage = document.getElementById('preview-image');
    const uploadPreview = document.getElementById('upload-preview');
    const removeImageBtn = document.getElementById('remove-image-btn');
    const startWebcamBtn = document.getElementById('start-webcam-btn');
    const webcamContainer = document.getElementById('webcam-container');
    const webcam = document.getElementById('webcam');
    const captureBtn = document.getElementById('capture-btn');
    const closeWebcamBtn = document.getElementById('close-webcam-btn');
    const sensitivitySlider = document.getElementById('sensitivity');
    const sensitivityValue = document.getElementById('sensitivity-value');
    const advancedOptionsToggle = document.getElementById('advanced-options-toggle');
    const advancedOptions = document.getElementById('advanced-options');
    const detectEmotionBtn = document.getElementById('detect-emotion-btn');
    const detectionStatus = document.getElementById('detection-status');
    
    let stream = null;
    let imageSelected = false;
    
    // Handle file upload
    imageUpload.addEventListener('change', function(e) {
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        
        // Check file size
        if (file.size > 5 * 1024 * 1024) {
          alert('File size must be less than 5MB');
          return;
        }
        
        const reader = new FileReader();
        reader.onload = function(event) {
          previewImage.src = event.target.result;
          uploadPreview.classList.remove('hidden');
          webcamContainer.classList.add('hidden');
          closeWebcam();
          imageSelected = true;
          updateDetectButton();
          detectionStatus.textContent = 'Image loaded. Click "Detect Emotions" to analyze.';
        };
        reader.readAsDataURL(file);
      }
    });
    
    // Remove image
    removeImageBtn.addEventListener('click', function() {
      uploadPreview.classList.add('hidden');
      imageUpload.value = '';
      imageSelected = false;
      updateDetectButton();
      detectionStatus.textContent = 'Select an image or webcam to begin';
    });
    
    // Start webcam
    startWebcamBtn.addEventListener('click', async function() {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        webcam.srcObject = stream;
        webcam.play();
        webcamContainer.classList.remove('hidden');
        uploadPreview.classList.add('hidden');
        imageSelected = true;
        updateDetectButton();
        detectionStatus.textContent = 'Webcam active. Click "Detect Emotions" to analyze in real-time.';
      } catch (err) {
        console.error('Error accessing webcam:', err);
        alert('Could not access webcam. Please ensure you have granted permission.');
      }
    });
    
    // Close webcam
    closeWebcamBtn.addEventListener('click', function() {
      closeWebcam();
      webcamContainer.classList.add('hidden');
      imageSelected = false;
      updateDetectButton();
      detectionStatus.textContent = 'Select an image or webcam to begin';
    });
    
    function closeWebcam() {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
        stream = null;
      }
    }
    
    // Capture image from webcam
    captureBtn.addEventListener('click', function() {
      const canvas = document.createElement('canvas');
      canvas.width = webcam.videoWidth;
      canvas.height = webcam.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(webcam, 0, 0, canvas.width, canvas.height);
      previewImage.src = canvas.toDataURL('image/png');
      uploadPreview.classList.remove('hidden');
      webcamContainer.classList.add('hidden');
      closeWebcam();
      detectionStatus.textContent = 'Image captured. Click "Detect Emotions" to analyze.';
    });
    
    // Update sensitivity value display
    sensitivitySlider.addEventListener('input', function() {
      sensitivityValue.textContent = `${this.value}%`;
    });
    
    // Toggle advanced options
    advancedOptionsToggle.addEventListener('click', function() {
      advancedOptions.classList.toggle('hidden');
      const icon = this.querySelector('svg');
      if (advancedOptions.classList.contains('hidden')) {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />';
      } else {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />';
      }
    });
    
    // Update detect button state
    function updateDetectButton() {
      detectEmotionBtn.disabled = !imageSelected;
    }
    
    // Initialize detect button state
    updateDetectButton();
    
    // Handle detect button click
    detectEmotionBtn.addEventListener('click', function() {
      if (!imageSelected) return;
      
      detectionStatus.textContent = 'Analyzing emotions...';
      detectEmotionBtn.disabled = true;
      
      // Simulate processing
      setTimeout(() => {
        window.location.href = '#results';
        detectEmotionBtn.disabled = false;
        detectionStatus.textContent = 'Analysis complete! Scroll down to view results.';
      }, 2000);
    });
    
    // Clean up on page unload
    window.addEventListener('beforeunload', closeWebcam);
  });



  document.addEventListener('DOMContentLoaded', function() {
    // View detailed analysis toggle
    const viewDetailsBtn = document.getElementById('view-details-btn');
    if (viewDetailsBtn) {
      viewDetailsBtn.addEventListener('click', function() {
        // Animation effect when clicking on detailed analysis
        const emotionCards = document.querySelectorAll('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-4 > div');
        emotionCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('animate__animated', 'animate__fadeInUp');
          }, index * 100);
        });
        
        // Smooth scroll to emotion cards
        const emotionCardsSection = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-4');
        if (emotionCardsSection) {
          emotionCardsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  });




  document.addEventListener('DOMContentLoaded', function() {
    // Add animation classes to elements when they come into view
    const animateOnScroll = function() {
      const elements = document.querySelectorAll('.grid.grid-cols-1.md\\:grid-cols-3 > div');
      
      elements.forEach((element, index) => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if(position.top < window.innerHeight && position.bottom >= 0) {
          setTimeout(() => {
            element.classList.add('animate__animated', 'animate__fadeInUp');
          }, index * 200); // Stagger the animations
        }
      });
    };
    
    // Run on scroll and on page load
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
  });




  document.addEventListener('DOMContentLoaded', function() {
    // Add animation classes to elements when they come into view
    const animateOnScroll = function() {
      const animateElements = document.querySelectorAll('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3 > div');
      
      animateElements.forEach((element, index) => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if(position.top < window.innerHeight && position.bottom >= 0) {
          setTimeout(() => {
            element.classList.add('animate__animated', 'animate__fadeInUp');
          }, index * 100); // Stagger the animations
        }
      });
    };
    
    // Run on scroll and on page load
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
  });




  document.addEventListener('DOMContentLoaded', function() {
    // Add animation class to move the data point along the process flow
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes move {
        0% { left: 12.5%; }
        25% { left: 37.5%; }
        50% { left: 62.5%; }
        75% { left: 87.5%; }
        100% { left: 87.5%; }
      }
    `;
    document.head.appendChild(style);
    
    // Add animation classes to elements when they come into view
    const animateOnScroll = function() {
      const elements = document.querySelectorAll('.grid > div');
      
      elements.forEach((element, index) => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if(position.top < window.innerHeight && position.bottom >= 0) {
          setTimeout(() => {
            element.classList.add('animate__animated', 'animate__fadeInUp');
          }, index * 100); // Stagger the animations
        }
      });
    };
    
    // Run on scroll and on page load
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
  });




  document.addEventListener('DOMContentLoaded', function() {
    // Testimonial Slider
    const slider = document.getElementById('testimonial-slider');
    const dots = document.querySelectorAll('.testimonial-dot');
    const prevBtn = document.getElementById('prev-testimonial');
    const nextBtn = document.getElementById('next-testimonial');
    
    let currentIndex = 0;
    
    function updateSlider() {
      // Get container width to determine slide width
      const testimonialContainer = document.getElementById('testimonial-container');
      const slideWidth = testimonialContainer.clientWidth;
      
      // Calculate translate value
      const translateValue = currentIndex * -slideWidth;
      
      // Apply transform
      slider.style.transform = `translateX(${translateValue}px)`;
      
      // Update dots
      dots.forEach((dot, index) => {
        if (index === currentIndex) {
          dot.classList.remove('bg-gray-600', 'w-2');
          dot.classList.add('bg-blue-500', 'w-8');
        } else {
          dot.classList.remove('bg-blue-500', 'w-8');
          dot.classList.add('bg-gray-600', 'w-2');
        }
      });
    }
    
    // Navigate to previous slide
    prevBtn.addEventListener('click', function() {
      currentIndex = Math.max(currentIndex - 1, 0);
      updateSlider();
    });
    
    // Navigate to next slide
    nextBtn.addEventListener('click', function() {
      // Determine the number of testimonials
      const testimonials = slider.querySelectorAll('> div');
      const maxIndex = Math.ceil(testimonials.length / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1)) - 1;
      
      currentIndex = Math.min(currentIndex + 1, maxIndex);
      updateSlider();
    });
    
    // Handle dot clicks
    dots.forEach((dot, index) => {
      dot.addEventListener('click', function() {
        currentIndex = index;
        updateSlider();
      });
    });
    
    // Handle window resize
    window.addEventListener('resize', updateSlider);
    
    // Initialize slider
    updateSlider();
    
    // Auto advance slider every 5 seconds
    setInterval(function() {
      const testimonials = slider.querySelectorAll('> div');
      const maxIndex = Math.ceil(testimonials.length / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1)) - 1;
      
      currentIndex = (currentIndex + 1) % (maxIndex + 1);
      updateSlider();
    }, 5000);
  });



  document.addEventListener('DOMContentLoaded', function() {
    // Form validation
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Simple validation
        let isValid = true;
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');
        
        // Name validation
        if (!name.value.trim()) {
          isValid = false;
          name.classList.add('ring-2', 'ring-red-500', 'border-red-500');
        } else {
          name.classList.remove('ring-2', 'ring-red-500', 'border-red-500');
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
          isValid = false;
          email.classList.add('ring-2', 'ring-red-500', 'border-red-500');
        } else {
          email.classList.remove('ring-2', 'ring-red-500', 'border-red-500');
        }
        
        // Subject validation
        if (!subject.value || subject.value === '') {
          isValid = false;
          subject.classList.add('ring-2', 'ring-red-500', 'border-red-500');
        } else {
          subject.classList.remove('ring-2', 'ring-red-500', 'border-red-500');
        }
        
        // Message validation
        if (!message.value.trim()) {
          isValid = false;
          message.classList.add('ring-2', 'ring-red-500', 'border-red-500');
        } else {
          message.classList.remove('ring-2', 'ring-red-500', 'border-red-500');
        }
        
        // If form is valid, show success message (in a real scenario, you'd submit the form data)
        if (isValid) {
          // Simulate form submission
          const submitButton = contactForm.querySelector('button[type="submit"]');
          const originalText = submitButton.innerHTML;
          
          // Change button text to show processing
          submitButton.innerHTML = '<svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Sending...';
          
          // Simulate API call
          setTimeout(() => {
            // Reset the form
            contactForm.reset();
            
            // Change button text to show success
            submitButton.innerHTML = '<svg class="h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg> Message Sent!';
            
            // Restore original button text after a delay
            setTimeout(() => {
              submitButton.innerHTML = originalText;
            }, 3000);
          }, 1500);
        }
      });
    }
    
    // Add animation classes to elements when they come into view
    const animateOnScroll = function() {
      const elements = document.querySelectorAll('.grid > div');
      
      elements.forEach((element, index) => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if(position.top < window.innerHeight && position.bottom >= 0) {
          setTimeout(() => {
            element.classList.add('animate__animated', 'animate__fadeInUp');
          }, index * 100); // Stagger the animations
        }
      });
    };
    
    // Run on scroll and on page load
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
  });




// line no 3298
  document.addEventListener('DOMContentLoaded', function() {
    // Back to top button functionality
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (backToTopBtn) {
      // Show button when scrolled beyond 500px
      window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500) {
          backToTopBtn.classList.remove('opacity-0', 'invisible');
          backToTopBtn.classList.add('opacity-100', 'visible');
        } else {
          backToTopBtn.classList.remove('opacity-100', 'visible');
          backToTopBtn.classList.add('opacity-0', 'invisible');
        }
      });
      
      // Scroll to top on click
      backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  });