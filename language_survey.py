from survey import AnonymousSurvey

question = 'What language did you first learn to coding?'
my_survey = AnonymousSurvey(question)

my_survey.show_question()
print('Enter "q" to eny time exit')

while True:
    response = input('Language: ')
    if response == "q":
        break
    my_survey.store_response(response)

print("Thank you for answers!")
my_survey.show_results()