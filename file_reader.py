# import json
#
#
# animal_list = ['cats.txt', 'dogs.txt', 'boom.txt', 'cats.txt'] # Список файлов для сбора списка имен животных
# nums_arr = [x for x in range(1,8)] # Список чисел для записи в JSON
#
# def animal_printer(files):
#     """ Создаю файл json и переменную для хранения списка имен"""
#     jsonFile = 'animal_names.json'
#     animal_names = ''
#
#     for el in files:
#         """Итерация по файлам, дополняя список имен"""
#         try:
#             with open(el) as f:
#                 name = f'{f.read()}\n'
#                 animal_names += name
#         except FileNotFoundError:
#             """Исключения не прерывают процесс записи"""
#             pass
#     """Записываю данные в формате JSON"""
#     with open(jsonFile, 'w') as ob:
#         json.dump(animal_names,ob )
#
#     with open(jsonFile) as f:
#         test = json.load(f)
#         print(test)
#
#
# animal_printer(animal_list)

