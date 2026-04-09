/**
 * Load tasks from localStorage
 * @returns {Array<Object> | null}
 */
export function loadTasksFromStorage() {
  const stored = localStorage.getItem("tasks");

  if (!stored) return null;

  try {
    return JSON.parse(stored);
  } catch (err) {
    console.error("Error parsing tasks:", err);
    return null;
  }
}

/**
 * Save tasks to localStorage
 * @param {Array<Object>} tasks
 */
export function saveTasksToStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}