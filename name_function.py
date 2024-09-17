

def get_formatted_name(name, last_name, middle = ''):
    """Формирует имя и фамилию для вывода на экран"""

    if middle:
        full_name = f'{name} {middle} {last_name}!'
    else:
        full_name = f'{name} {last_name}!'

    return full_name.title()

def get_cityes(country, city, population = ''):
    without_population = f'{country} {city}'.title()
    with_population = f'{country} {city} - population {population}'.title()
    return with_population if population else  without_population