/**
 * Loads tasks from localStorage or fetches from API if empty.
 * @returns {Promise<Array<Object>>}
 */
export async function loadTasksFromStorage() {
  const stored = localStorage.getItem("tasks");

  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (err) {
      console.error("Error parsing tasks:", err);
    }
  }

  // If there's nothing in storage then fetch from API
  try {
    const response = await fetch("https://jsl-kanban-api.vercel.app/");
    const data = await response.json();

    localStorage.setItem("tasks", JSON.stringify(data));
    return data;

  } catch (error) {
    console.error("Error fetching tasks:", error);
    return []; 
  }
}

/**
 * Saves tasks to localStorage
 * @param {Array<Object>} tasks
 */
export function saveTasksToStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}