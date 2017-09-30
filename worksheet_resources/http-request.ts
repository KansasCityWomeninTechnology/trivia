getQuestions(): Observable<Question[]> {
  return this.http.get<Question[]>('//cocktail-trivia-api.herokuapp.com/api/sample');
}
