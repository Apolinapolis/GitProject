class AnonymousSurvey():
    """Сбор анонимных ответов на вопросы"""

    def __init__(self,question):
        """Формирует вопрос и список ответов"""
        self.question = question
        self.responses = []

    def show_question(self):
        """ Выводит вопрос """
        print(self.question)

    def store_response(self, new_response):
        """ Сохраняет один ответ"""
        self.responses.append(new_response)

    def show_results(self):
        """ Выводит все ответы """
        print('Survey results: ')
        for response in self.responses:
            print(f'-{response}')