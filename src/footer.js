/**
 * Reusable Footer Component — Professional & Modern
 * Edit this single file to update the footer across ALL pages.
 */

export function renderFooter() {
  const footer = document.createElement('footer');
  footer.id = 'site-footer';

  footer.innerHTML = `
    <!-- ── Main Footer Body ── -->
    <div class="footer-body">
      <div class="footer-grid">

        <!-- Col 1: Brand -->
        <div class="footer-brand-col">
          <a href="index.html" class="footer-logo" aria-label="Nancy Njuguna Home">
            <span class="footer-logo-name">Nancy Njuguna</span><span class="footer-logo-dot">.</span>
          </a>
          <p class="footer-tagline">
            Consultant specializing in Training, Soft Skills Curriculum Development, and Youth Development Programs across Africa.
          </p>
          <div class="footer-socials">
            <!-- WhatsApp -->
            <a href="https://wa.me/254715988911" target="_blank" rel="noopener noreferrer" class="footer-social-icon" aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.414 0 .018 5.394 0 12.03c0 2.123.542 4.197 1.57 6.05L0 24l6.117-1.605a11.82 11.82 0 0 0 5.86 1.52h.005c6.634 0 12.032-5.39 12.035-12.028a11.789 11.789 0 0 0-3.417-8.467"/></svg>
            </a>
            <!-- LinkedIn -->
            <a href="#" class="footer-social-icon" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <!-- Email -->
            <a href="mailto:nancynjugunaconsultancy@gmail.com" class="footer-social-icon" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
            <!-- YouTube -->
            <a href="videos.html" class="footer-social-icon" aria-label="Videos">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>

        <!-- Col 2: Quick Links -->
        <div class="footer-links-col">
          <h3 class="footer-col-heading">
            <span class="footer-col-heading-bar"></span>
            Quick Links
          </h3>
          <ul class="footer-links-list">
            <li><a href="index.html" class="footer-link">Home</a></li>
            <li><a href="about.html" class="footer-link">About Nancy</a></li>
            <li><a href="services.html" class="footer-link">Services</a></li>
            <li><a href="videos.html" class="footer-link">Media &amp; Videos</a></li>
            <li><a href="contact.html" class="footer-link">Contact</a></li>
            <li><a href="contact.html" class="footer-link font-bold text-primary-300 transition-colors">Book a Free Consultation</a></li>
          </ul>
        </div>

        <!-- Col 3: Services -->
        <div class="footer-links-col">
          <h3 class="footer-col-heading">
            <span class="footer-col-heading-bar"></span>
            Services
          </h3>
          <ul class="footer-links-list">
            <li><a href="services.html" class="footer-link">Executive Coaching</a></li>
            <li><a href="services.html" class="footer-link">Career Consulting</a></li>
            <li><a href="services.html" class="footer-link">Leadership Development</a></li>
            <li><a href="services.html" class="footer-link">CV &amp; Interview Prep</a></li>
            <li><a href="services.html" class="footer-link">Corporate Training</a></li>
          </ul>
        </div>

        <!-- Col 4: Contact -->
        <div class="footer-links-col">
          <h3 class="footer-col-heading">
            <span class="footer-col-heading-bar"></span>
            Get In Touch
          </h3>
          <ul class="footer-contact-list">
            <li>
              <span class="footer-contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.87a16 16 0 0 0 6.29 6.29l1.25-1.25a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </span>
              <a href="https://wa.me/254715988911" class="footer-contact-text">+254 715 988 911</a>
            </li>
            <li>
              <span class="footer-contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </span>
              <a href="mailto:nancynjugunaconsultancy@gmail.com" class="footer-contact-text">nancynjugunaconsultancy@gmail.com</a>
            </li>
            <li>
              <span class="footer-contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </span>
              <span class="footer-contact-text">Nairobi, Kenya</span>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <!-- ── Bottom Bar ── -->
    <div class="footer-bottom">
      <p class="footer-copy">&copy; ${new Date().getFullYear()} Nancy Njuguna Consultancy. All rights reserved.</p>
      <p class="footer-credits">Designed with <span class="footer-heart">♥</span> for professional excellence.</p>
    </div>
  `;

  return footer;
}

/**
 * Injects the footer into the page.
 * Place <div id="footer-root"></div> where you want the footer to appear.
 */
export function injectFooter() {
  const root = document.getElementById('footer-root');
  if (root) {
    root.replaceWith(renderFooter());
  }
}
