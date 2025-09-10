/**
 * Utility for handling scroll animations
 */

// Initialize scroll reveal animations
export const initScrollReveal = () => {
  // Function to check if an element is in viewport
  const isInViewport = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    const offset = 100; // Start animation 100px before element enters viewport
    return (
      rect.top <= window.innerHeight - offset &&
      rect.bottom >= 0
    );
  };

  // Function to handle scroll and reveal elements
  const handleScrollReveal = () => {
    const elements = document.querySelectorAll('.scroll-reveal');
    
    elements.forEach((element) => {
      if (isInViewport(element as HTMLElement)) {
        element.classList.add('revealed');
      }
    });
  };

  // Add scroll event listener
  window.addEventListener('scroll', handleScrollReveal);
  
  // Trigger once on initial load
  setTimeout(handleScrollReveal, 100);
  
  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', handleScrollReveal);
  };
};

// Apply staggered animations to children
export const applyStaggeredAnimations = (
  parentSelector: string, 
  childSelector: string,
  animationClass: string = 'animate-fadeIn',
  baseDelay: number = 100,
  staggerDelay: number = 100
) => {
  const parent = document.querySelector(parentSelector);
  if (!parent) return;
  
  const children = parent.querySelectorAll(childSelector);
  
  children.forEach((child, index) => {
    child.classList.add(animationClass);
    (child as HTMLElement).style.animationDelay = `${baseDelay + (index * staggerDelay)}ms`;
    (child as HTMLElement).style.opacity = '0';
    (child as HTMLElement).style.animationFillMode = 'forwards';
  });
};
