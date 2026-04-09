/**
 * Fetch tasks from API
 * Called only when localStorage is empty
 * @returns {Promise<Array<Object>>}
 */
export async function fetchTasksFromAPI() {
    try {
      const response = await fetch("https://jsl-kanban-api.vercel.app/");
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.error("Error fetching tasks:", error);
      return [];
    }
  }