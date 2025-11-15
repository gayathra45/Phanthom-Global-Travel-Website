
    // Small helper: show selected country code beside phone when changed
    const countryCode = document.getElementById('countryCode');
    const phoneInput = document.getElementById('phone');
    countryCode.addEventListener('change', ()=>{
      phoneInput.placeholder = countryCode.value + ' 123 456 789';
    });

    // Set default values based on the image
    document.addEventListener('DOMContentLoaded', function() {
      document.getElementById('fullName').value = '';
      document.getElementById('email').value = '';
      document.getElementById('phone').value = '';
      document.getElementById('occupation').value = '';
    });

    // Get the modal
    const modal = document.getElementById("successModal");
    const closeBtn = document.getElementsByClassName("close")[0];
    const modalBtn = document.getElementsByClassName("modal-btn")[0];

    // When the user clicks the button, open the modal 
    function openModal() {
      modal.style.display = "flex";
    }

    // When the user clicks on (x), close the modal
    closeBtn.onclick = function() {
      modal.style.display = "none";
    }

    // When the user clicks the modal button, close the modal
    modalBtn.onclick = function() {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    // Form handler with custom modal
    document.getElementById('applyForm').addEventListener('submit', function(e){
      e.preventDefault();
      // gather values
      const form = new FormData(this);
      const obj = Object.fromEntries(form.entries());
      
      // Show custom modal instead of default alert
      openModal();
      
      console.log('form data', obj);
      
      // Don't reset the form automatically
      // this.reset();
    });


document.addEventListener('DOMContentLoaded', function() {
  let lastScroll = 0;
  const header = document.querySelector('header');
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 50) {
      header.classList.remove('hide-nav');
      lastScroll = currentScroll;
      return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
      header.classList.add('hide-nav');
    } else if (currentScroll < lastScroll) {
      header.classList.remove('hide-nav');
    }
    
    lastScroll = currentScroll;
  });
});


// Footer Accordion Toggle for Mobile
document.addEventListener('DOMContentLoaded', function() {
  
  function initFooterAccordion() {
    if (window.innerWidth <= 768) {
      const footerLists = document.querySelectorAll('.footer-nav ul');
      
      footerLists.forEach(ul => {
        const firstItem = ul.querySelector('li:first-child');
        
        if (firstItem) {
          firstItem.replaceWith(firstItem.cloneNode(true));
          const newFirstItem = ul.querySelector('li:first-child');
          
          newFirstItem.addEventListener('click', function(e) {
            e.preventDefault();
            ul.classList.toggle('active');
          });
        }
      });
    }
  }
  
  initFooterAccordion();
  
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      initFooterAccordion();
    }, 250);
  });
});