const defaultUrl = "http://localhost:5000/tarefas";

export const tarefasApi = {
    getAllTarefas: async () => {
      const req = await fetch(defaultUrl);
      const result = await req.json();
      return result;
    },
    createTarefas: async (tarefas) => {
      const req = await fetch("http://localhost:5000/tarefas", {
        method: "POST",
        body: JSON.stringify(tarefas),
        headers: new Headers({ "Content-Type": "application/json" }),
      });
      const result = await req.json();
    return result;
  },
  getTarefasById: async (id) => {
    const req = await fetch(`${defaultUrl}/${id}`);
    const result = await req.json();
    return result;
  },
  };