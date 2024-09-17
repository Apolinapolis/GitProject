import unittest

from survey import AnonymousSurvey

class TestAnonymousSurvey(unittest.TestCase):
    """ Тесты для класса AnonymousSurvey """

    def setUp(self):
        """ Создание опроса и набора ответов для всех тестовых методов."""
        question = 'What language did you first learn to coding?'
        self.my_survey = AnonymousSurvey(question)
        self.responses = ['JS', 'SQL', 'Python']

    def test_store_single_response(self):
        """Проверяет что один ответ сохранен правильно"""
        first_elem = self.responses[0]
        self.my_survey.store_response(first_elem)
        self.assertIn(first_elem, self.my_survey.responses)

    def test_store_three_responses(self):
        """ Проверяет что 3 ответа будут сохранены верно """
        for respo in self.my_survey.responses:
            self.my_survey.store_response(respo)

        for respo in self.my_survey.responses:
            self.assertIn(respo, self.my_survey.responses)


if __name__ == '__main__':
    unittest.main()