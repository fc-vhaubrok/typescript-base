interface Todo {
    id: number;
    description: string;
    completed: boolean;
    assignee?: string;
};

export { Todo };