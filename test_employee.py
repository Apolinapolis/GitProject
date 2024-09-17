import unittest
from employee import Employee

class TestEmployee(unittest.TestCase):
    """ Тесты для класса Работника. """

    def setUp(self):
        self.developer_dima = Employee("Dimas", "Developer", 150_000)

    def test_make_developer(self):
        """ Проверяем корректность созданного экземпляра"""
        self.assertEqual(self.developer_dima.name, 'Dimas')
        self.assertEqual(self.developer_dima.last, 'Developer')
        self.assertEqual(self.developer_dima.salary, 150000)

    def test_give_default_raise(self):
        """ Тестируем повышение оклада без дополнительных данных. """
        base_salary = self.developer_dima.salary
        self.developer_dima.give_raise()
        self.assertEqual(self.developer_dima.salary, (base_salary + 5000) )

    def test_give_customized_raise(self):
        """ Тестируем заданное увеличение оклада. """
        base_salary = self.developer_dima.salary
        value = 7600
        self.developer_dima.give_raise(value)
        self.assertEqual(self.developer_dima.salary, (base_salary + value))

if __name__ == '__main__':
    unittest.main()