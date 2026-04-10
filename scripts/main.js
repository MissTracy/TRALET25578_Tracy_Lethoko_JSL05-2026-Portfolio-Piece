import { getTasks } from "./tasks/taskManager.js";
import { clearExistingTasks, renderTasks } from "./ui/render.js";
import {
  setupModalCloseHandler,
  setupNewTaskModalHandler,
} from "./ui/modalHandlers.js";
import { saveTaskChanges, deleteTask } from "./tasks/taskManager.js";
import { sidebarToggle, themeToggle, mobileSidebarToggle, closeSidebarButton } from "./ui/sidebarHandler.js";


async function initTaskBoard() {
  const tasks = await getTasks();
  clearExistingTasks();
  renderTasks(tasks);
  setupModalCloseHandler();
  setupNewTaskModalHandler();
  saveTaskChanges();
  deleteTask();
  sidebarToggle();
  themeToggle(); 
  mobileSidebarToggle(); 
  closeSidebarButton();
}

document.addEventListener("DOMContentLoaded", initTaskBoard);
