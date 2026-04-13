/**
 * Dark/Light Mode Theme Toggle
 */

export function setupThemeToggle() {
  const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;

  let userTheme = null;
  try {
    userTheme = localStorage.getItem('theme');
  } catch (e) {
    console.warn('localStorage access denied');
  }
  
  let systemDark = false;
  try {
    systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  } catch(e) {}
  
  let isDark = userTheme === 'dark' || (!userTheme && systemDark);

  const applyTheme = (dark) => {
    isDark = dark; // keep state in sync
    if (dark) {
      document.documentElement.classList.add('dark');
      try { localStorage.setItem('theme', 'dark'); } catch(e) {}
    } else {
      document.documentElement.classList.remove('dark');
      try { localStorage.setItem('theme', 'light'); } catch(e) {}
    }
    
    // Always query fresh DOM nodes in case of clones/HMR
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      btn.innerHTML = dark ? sunIcon : moonIcon;
    });

    // Dispatch event so other components (like mobile menu) can react
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { isDark: dark } }));
  };

  // Initial application
  applyTheme(isDark);

  // Setup listeners
  document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    // Avoid double bindings by using a data attribute
    if (btn.hasAttribute('data-theme-bound')) return;
    btn.setAttribute('data-theme-bound', 'true');
    
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      applyTheme(!isDark);
    });
  });
}
