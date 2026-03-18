class Animal:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight
        
    def speak(self):
        return "some sound"
    
    def info(self):
        return f"{self.name}, {self.age} years old, {self.weight} kg"
    
class Dog(Animal):
    def __init__(self, name, age, weight, breed):
        super().__init__(name, age, weight) 
        self.breed = breed
        
    def speak(self):
        return "woof"
    
    def fetch(self, item):
        return f"{self.name} fetched the {item}"
    
    
class Cat(Animal):
    def __init__(self, name, age, weight, color):
        super().__init__(name, age, weight)
        self.color = color
        
    def speak(self):
        return "meow"
    
    def scratch(self):
        return f"{self.name} scratched the furniture"
    
        