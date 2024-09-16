from car import Car

class Battery():
    """Модель аккумулятора автомобиля"""
    def __init__(self, battery_size = 75):
        """ Инициализация емкости аккумулятора"""
        self.battery_size = battery_size

    def get_battery_info(self):
        """Выводит информацию о мощности аккумулятора автомобиля"""
        print(f'This car has accumulator with power: {self.battery_size} KWT')

    def update_battery(self):
        if self.battery_size < 100:
            self.battery_size = 100
            print('Battery was updated')

class ElectricCar(Car):
    def __init__(self, make, model, year):
        super().__init__(make,model,year)
        self.battery = Battery(75)