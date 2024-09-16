import unittest

from name_function import get_formatted_name


class NamesTestCase(unittest.TestCase):
    """ Тесты для 'name_function.ry' """

    def test_first_last_name(self):
        """ Имена вида 'Имя Фамилия' ? """
        formatted_name = get_formatted_name('дима', 'юдин')
        self.assertEqual(formatted_name,  'Дима Юдин!')

    def test_first_middle_last_names(self):
        """ Имена в формате 'Wolfgang Amadeus Mozart' """
        formatted_name = get_formatted_name('Wolfgang','Mozart', 'Amadeus')
        self.assertEqual(formatted_name, 'Wolfgang Amadeus Mozart!')

if __name__ == '__main__':
    unittest.main()