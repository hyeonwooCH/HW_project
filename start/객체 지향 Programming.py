class Dog:
    def __init__(self, name):
        self.name = name
        
    def bark(self):
        return f"{self.name} says woof!"
    
my_dog = Dog("Buddy")
print(my_dog.bark())