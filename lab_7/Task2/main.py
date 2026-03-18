from models import Animal, Dog, Cat

dog1 = Dog("Aktos", 5, 15, "Spitz")
cat1 = Cat("Murka", 4, 5, "Black")
animal1 = Animal("Zhanuar", 3, 34)

animals = [dog1, cat1, animal1]

for animal in animals:
    print(animal.info())
    print(animal.speak())
    
print(dog1.fetch("ball"))
print(cat1.scratch())