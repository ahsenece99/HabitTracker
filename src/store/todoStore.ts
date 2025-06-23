import { create } from "zustand";

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
  date: string;
};

type TodoStore = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  fetchTodos: () => void;
  clearTodos: () => void;
};

const STORAGE_KEY = "myTodos";

export const useTodoStore = create<TodoStore>((set, get) => ({
  todos: [],

  fetchTodos: async () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const today = new Date();

    if (saved !== null) {
      const parsed = JSON.parse(saved);
      set({ todos: parsed });
      return;
    }

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=1");
      if (!res.ok) throw new Error("Fetch failed");

      const fallbackTodos: Todo[] = [
        {
          id: crypto.randomUUID(),
          title: "Write a journal entry",
          completed: false,
          date: today.toISOString(),
        },
        {
          id: crypto.randomUUID(),
          title: "Review your weekly goals",
          completed: false,
          date: new Date(today.getTime() + 86400000).toISOString(),
        },
        {
          id: crypto.randomUUID(),
          title: "Clean workspace area",
          completed: false,
          date: new Date(today.getTime() + 2 * 86400000).toISOString(),
        },
      ];

      localStorage.setItem(STORAGE_KEY, JSON.stringify(fallbackTodos));
      set({ todos: fallbackTodos });

    } catch (error) {
      console.error("API check failed. Using alternative fallback.");

      const fallbackTodos: Todo[] = [
        {
          id: crypto.randomUUID(),
          title: "Stretch and hydrate",
          completed: false,
          date: today.toISOString(),
        },
        {
          id: crypto.randomUUID(),
          title: "Plan tomorrow's tasks",
          completed: false,
          date: new Date(today.getTime() + 86400000).toISOString(),
        },
        {
          id: crypto.randomUUID(),
          title: "Reflect on today's achievements",
          completed: false,
          date: new Date(today.getTime() + 2 * 86400000).toISOString(),
        },
      ];

      localStorage.setItem(STORAGE_KEY, JSON.stringify(fallbackTodos));
      set({ todos: fallbackTodos });
    }
  },

  addTodo: (todo) => {
    const updated = [...get().todos, todo];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    set({ todos: updated });
  },

  toggleTodo: (id) => {
    const updated = get().todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    set({ todos: updated });
  },

  deleteTodo: (id) => {
    const updated = get().todos.filter((todo) => todo.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    set({ todos: updated });
  },

  clearTodos: () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    set({ todos: [] });
  },
}));
