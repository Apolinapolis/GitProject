

def get_formatted_name(name, last_name, middle = ''):
    """Формирует имя и фамилию для вывода на экран"""

    if middle:
        full_name = f'{name} {middle} {last_name}!'
    else:
        full_name = f'{name} {last_name}!'

    return full_name.title()