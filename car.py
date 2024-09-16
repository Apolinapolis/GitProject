class Car():
    """My first car model"""
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.odometer = 0

    def get_discriptive_name(self):
        """Возвращает форматированное описание экземпляра"""
        print (f'{self.year} {self.make} {self.model}'.title())

    def read_odometer(self):
        print(f'This car has {self.odometer} miles on it')

    def update_odometer(self, mileage):
        """Устанавливает заданное значение пробега.
        Отклоняет значения, при попытке скрутить счетчик"""
        if mileage > self.odometer:
            self.odometer = mileage
        else:
            print("You can't roll back an odometer, beach!")

    def increment_odometer(self, mileage):
        """Увеличивает пробег приращением"""
        self.odometer += mileage