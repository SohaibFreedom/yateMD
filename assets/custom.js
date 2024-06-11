function setMarginLeft() {
    var pageWidth = document.querySelector('.page-width');
    var pageWidthWidth = pageWidth.offsetWidth;
    var marginLeftValue = (window.innerWidth - pageWidthWidth) / 2;
    var testimonialList = document.querySelector('.testimonial-list');
    if(testimonialList) testimonialList.style.marginLeft = marginLeftValue + 'px';
}

setMarginLeft();

window.addEventListener('resize', setMarginLeft);
window.addEventListener('keydown', function(event) {
    if (event.ctrlKey) {
        if (event.key === '+' || event.key === '-') {
            setMarginLeft();
        }
    }
});


function setupDragScroll(containerSelector, contentSelector) {
  const container = document.querySelector(containerSelector);
   if(!container) return;
  const content = document.querySelector(contentSelector);
  let isDragging = false;
  let startX;
  let scrollLeft;

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener('mouseleave', () => {
    isDragging = false;
  });

  container.addEventListener('mouseup', () => {
    isDragging = false;
  });

  container.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = x - startX;
    container.scrollLeft = scrollLeft - walk;
  });
}

// Usage:
setupDragScroll('.testimonial-list', '.slider-content');
setupDragScroll('.carousel-list', '.slider-content');
setupDragScroll('.collection-inner', '.slider-content');
// Add more carousels as needed, with their respective container and content selectors.
