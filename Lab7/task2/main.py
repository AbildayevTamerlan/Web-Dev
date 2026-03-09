from models import Dog, Cat

def main():
    dog1 = Dog("Buddy", 3, "Golden Retriever")
    dog2 = Dog("Rocky", 5, "Bulldog")
    cat1 = Cat("Whiskers", 2, "Orange")
    cat2 = Cat("Luna", 4, "Black")

    animals = [dog1, dog2, cat1, cat2]

    for animal in animals:
        print(animal)
        print(animal.get_info())
        print(f"Sound: {animal.speak()}")

        if isinstance(animal, Dog):
            print(animal.fetch())
        elif isinstance(animal, Cat):
            print(animal.climb())
        print("-" * 20)


if __name__ == "__main__":
    main()