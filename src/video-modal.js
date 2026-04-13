/**
 * YouTube Video Lightbox Modal
 * Converts YouTube links into inline popup players.
 * 
 * Usage: Add data-video-id="YOUTUBE_ID" to any clickable element,
 *        or it will auto-detect YouTube links (youtu.be / youtube.com).
 */

let modal = null;
let iframe = null;
let isOpen = false;

/**
 * Extracts YouTube video ID from various URL formats
 */
function getYouTubeId(url) {
  const patterns = [
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

/**
 * Creates the modal DOM structure (once)
 */
function createModal() {
  if (modal) return;

  modal = document.createElement('div');
  modal.id = 'video-modal';
  modal.className = 'fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 opacity-0 pointer-events-none transition-opacity duration-300';
  
  modal.innerHTML = `
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-primary-950/80 backdrop-blur-md" id="video-modal-backdrop"></div>
    
    <!-- Modal Content -->
    <div class="relative z-10 w-full max-w-4xl transform scale-95 transition-transform duration-300" id="video-modal-content">
      <!-- Close Button -->
      <button id="video-modal-close" class="absolute -top-12 right-0 md:-top-4 md:-right-12 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 z-20" aria-label="Close video">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      
      <!-- Video Container -->
      <div class="rounded-2xl md:rounded-3xl overflow-hidden shadow-premium bg-black aspect-video">
        <iframe 
          id="video-modal-iframe"
          class="w-full h-full"
          src="" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
        </iframe>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  iframe = document.getElementById('video-modal-iframe');
  const backdrop = document.getElementById('video-modal-backdrop');
  const closeBtn = document.getElementById('video-modal-close');
  const content = document.getElementById('video-modal-content');

  // Close handlers
  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

  // ESC key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) closeModal();
  });
}

/**
 * Opens the modal with a specific YouTube video
 */
export function openModal(videoId) {
  if (!modal) createModal();
  
  const content = document.getElementById('video-modal-content');

  // Set iframe source with autoplay
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  
  // Show modal
  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.classList.add('opacity-100', 'pointer-events-auto');
  content.classList.remove('scale-95');
  content.classList.add('scale-100');
  
  // Prevent body scroll
  document.body.style.overflow = 'hidden';
  isOpen = true;
}

/**
 * Closes the modal and stops video playback
 */
export function closeModal() {
  if (!modal || !isOpen) return;

  const content = document.getElementById('video-modal-content');
  
  modal.classList.remove('opacity-100', 'pointer-events-auto');
  modal.classList.add('opacity-0', 'pointer-events-none');
  content.classList.remove('scale-100');
  content.classList.add('scale-95');
  
  // Stop video
  setTimeout(() => {
    iframe.src = '';
  }, 300);
  
  // Restore body scroll
  document.body.style.overflow = '';
  isOpen = false;
}

/**
 * Auto-detect YouTube links and attach modal behavior.
 * Call this after DOM is ready.
 */
export function setupVideoModals() {
  createModal();

  // Find all links with YouTube URLs or data-video-id attributes
  const videoLinks = document.querySelectorAll('a[href*="youtu.be"], a[href*="youtube.com"], [data-video-id]');
  
  videoLinks.forEach(link => {
    const videoId = link.dataset.videoId || getYouTubeId(link.href || '');
    if (!videoId) return;

    // Store video ID
    link.dataset.videoId = videoId;

    // Prevent default navigation
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(videoId);
    });
  });
}
