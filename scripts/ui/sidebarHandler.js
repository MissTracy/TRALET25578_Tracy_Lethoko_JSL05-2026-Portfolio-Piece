

// Toggle dark/light theme
 
export function themeToggle() {
    const toggle = document.getElementById("toggle-theme-btn");
    const logo = document.getElementById("logo");
  
    if (!toggle || !logo) return; // safety check
  
    toggle.addEventListener("change", () => {
        const isDark = document.body.classList.toggle("dark-mode");
        
        if (isDark) {
            logo.src = "./assets/logo-dark.svg";
      } else {
        logo.src = "./assets/logo-light.svg";
      }
    });
  }
  
//   Toggle sidebar 
   
  export function sidebarToggle() {
    const sidebar = document.getElementById("side-bar-div");
    const toggleBtn = document.getElementById("toggle-sidebar-btn");
  
    if (!sidebar || !toggleBtn) return; // safety check
  
    toggleBtn.addEventListener("click", () => {
      const isHidden = sidebar.classList.toggle("hide-sidebar");
  
      if (isHidden) {
        toggleBtn.classList.add("collapsed");
        toggleBtn.innerHTML = "👀";
      } else {
        toggleBtn.classList.remove("collapsed");
        toggleBtn.textContent = "Hide Sidebar";
      }
    });
  }