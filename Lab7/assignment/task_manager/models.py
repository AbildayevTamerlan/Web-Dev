class Task:
    def __init__(self, task_id: int, title: str, completed: bool = False):
        self.id = task_id
        self.title = title
        self.completed = completed

    def mark_completed(self) -> None:
        self.completed = True

    def __str__(self) -> str:
        status = "❌"
        if self.completed:
            status = "✅"

        return f"[{self.id}] {self.title} {status}"

    def to_dict(self) -> dict:
        return {
            "id": self.id,
            "title": self.title,
            "completed": self.completed
        }

    @classmethod
    def from_dict(cls, data: dict):
        return cls(
            task_id=data["id"],
            title=data["title"],
            completed=data["completed"]
        )


class TaskManager:
    def __init__(self, tasks=None):
        if tasks is not None:
            self.tasks = tasks
        else:
            self.tasks = []

    def _get_next_id(self) -> int:
        return max((task.id for task in self.tasks), default=0) + 1

    def add_task(self, title: str):
        new_id = self._get_next_id()
        new_task = Task(task_id=new_id, title=title)
        self.tasks.append(new_task)

        return new_task

    def list_tasks(self):
        return self.tasks

    def complete_task(self, task_id: int) -> bool:
        for task in self.tasks:
            if task.id == task_id:
                task.mark_completed()
                return True

        return False

    def delete_task(self, task_id: int) -> bool:
        initial_length = len(self.tasks)
        self.tasks = [task for task in self.tasks if task.id != task_id]

        return len(self.tasks) < initial_length