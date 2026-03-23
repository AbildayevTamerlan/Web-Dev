from models import TaskManager
from storage import save_tasks, load_tasks

DATA_FILE = "data.json"

def show_menu():
    print("\n=== Task Manager ===")
    print("1. Show tasks")
    print("2. Add task")
    print("3. Complete task")
    print("4. Delete task")
    print("5. Exit")

def show_tasks(manager):
    print("\nYour tasks:")
    tasks = manager.list_tasks()
    if not tasks:
        print("List is empty.")
    else:
        for task in tasks:
            print(task)

def add_task(manager):
    title = input("Enter task title: ")
    new_task = manager.add_task(title)
    save_tasks(DATA_FILE, manager.tasks)
    print(f"Task added: {new_task}")

def complete_task(manager):
    try:
        task_id = int(input("Enter task ID to complete: "))
        if manager.complete_task(task_id):
            save_tasks(DATA_FILE, manager.tasks)
            print("Task completed!")
        else:
            print(f"Error: Task with ID {task_id} not found.")
    except ValueError:
        print("Error: Please enter a valid numeric ID.")

def delete_task(manager):
    try:
        task_id = int(input("Enter task ID to delete: "))
        if manager.delete_task(task_id):
            save_tasks(DATA_FILE, manager.tasks)
            print("Task deleted!")
        else:
            print(f"Error: Task with ID {task_id} not found.")
    except ValueError:
        print("Error: Please enter a valid numeric ID.")

def main():
    loaded_tasks = load_tasks(DATA_FILE)
    manager = TaskManager(loaded_tasks)

    while True:
        show_menu()
        choice = input("Choose an option:  ")

        if choice == "1":
            show_tasks(manager)
        elif choice == "2":
            add_task(manager)
        elif choice == "3":
            complete_task(manager)
        elif choice == "4":
            delete_task(manager)
        elif choice == "5":
            print("Goodbye!")
            break
        else:
            print("Invalid choice. Please try again (1-5).")

if __name__ == "__main__":
    main()