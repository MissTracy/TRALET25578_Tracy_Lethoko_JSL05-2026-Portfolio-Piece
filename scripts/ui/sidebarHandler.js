

// Toggle dark/light theme
 
export function themeToggle() {
    const toggle = document.getElementById("toggle-theme-btn");
  
    if (!toggle) return; // safety check
  
    toggle.addEventListener("change", () => {
      document.body.classList.toggle("dark-mode");
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