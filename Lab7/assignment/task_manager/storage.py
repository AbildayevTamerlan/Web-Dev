import json
import os
from models import Task

def load_tasks(filename: str) -> list:
    if not os.path.exists(filename):
        return []

    try:
        with open(filename, 'r', encoding='utf-8') as f:
            data = json.load(f)

            return [Task.from_dict(item) for item in data]
    except (json.JSONDecodeError, FileNotFoundError):
        return []

def save_tasks(filename: str, tasks: list) -> None:
    data = [task.to_dict() for task in tasks]
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=4, ensure_ascii=False)