class Employee():
    """Класс работника"""

    def __init__(self, name, last, salary = 12_000):
        self.name = name
        self.last = last
        self.salary = salary

    def give_raise(self, salary_up = 5_000):
        """Увеличивает оклад на 5_000 или указанную величину."""
        print(f"Salary is up by {salary_up} ")
        self.salary += salary_up
        return salary_up