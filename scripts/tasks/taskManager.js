import {
  loadTasksFromStorage,
  saveTasksToStorage,
} from "../utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "../ui/render.js";
import { resetForm } from "./formUtils.js";
import { fetchTasksFromAPI } from "../utils/api.js";


export async function addNewTask() {
  const title = document.getElementById("title-input").value.trim();
  const description = document.getElementById("desc-input").value.trim();
  const status = document.getElementById("select-status").value;
  const overlay = document.querySelector(".modal-overlay");

  if (!title) return;

  const tasks = await getTasks();
  const newTask = {
    id: tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1,
    title,
    description,
    status,
  };
  
  const updatedTasks = [...tasks, newTask];
  saveTasksToStorage(updatedTasks);

  clearExistingTasks();
  renderTasks(updatedTasks);
  resetForm();
  overlay.close();
}


/**
 * Get tasks from localStorage or API
 * Uses localStorage first
 * If empty, fetches from API and saves it
 */
export async function getTasks() {
  let tasks = loadTasksFromStorage();

  if (!tasks || tasks.length === 0) {
    tasks = await fetchTasksFromAPI();
    saveTasksToStorage(tasks);
  }

  return tasks;
}



export function saveTaskChanges() {
  const saveBtn = document.getElementById("save-task-btn");
  const modal = document.getElementById("task-modal");

  saveBtn.addEventListener("click", async () => {
    const taskId = modal.dataset.taskId; 
    if (!taskId) return;

    const title = document.getElementById("task-title").value.trim();
    const description = document.getElementById("task-desc").value.trim();
    const status = document.getElementById("task-status").value;

    if (!title) return alert("Title cannot be empty.");

    const tasks = await getTasks();
    const updatedTasks = tasks.map((task) =>
      task.id === Number(taskId)
        ? { ...task, title, description, status }
        : task
    );

    saveTasksToStorage(updatedTasks);
    clearExistingTasks();
    renderTasks(updatedTasks);
    modal.close();
  });
}


export function deleteTask() {
  const deleteBtn = document.getElementById("delete-task-btn");
  const modal = document.getElementById("task-modal");

  deleteBtn.addEventListener("click", async () => {
    const taskId = modal.dataset.taskId;
    if (!taskId) return;

    if (!confirm("Are you sure you want to delete this task?")) return;

    const tasks = await getTasks();
    const updatedTasks = tasks.filter(task => task.id !== Number(taskId));

    saveTasksToStorage(updatedTasks);
    clearExistingTasks();
    renderTasks(updatedTasks);
    modal.close();
  });
}

