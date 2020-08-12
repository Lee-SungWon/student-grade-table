class App {
  constructor (gradeTable, pageHeader, gradeForm){
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.createGrade = this.createGrade.bind(this);
  }
  handleGetGradesError(error) {
    this.getGrades();
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades)
    var total = 0;
    for (var i = 0; i < grades.length; i++) {
      total += grades[i].grade;
    }
    var avg = Math.trunc(total / grades.length);
    this.pageHeader.updateAverage(avg);
  }
  getGrades() {
    $.ajax({
      method: 'GET',
      url: 'https://sgt.lfzprototypes.com/api/grades',
      headers: {
        "X-Access-Token": "JM598ECD"
      },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    });
  }
  start () {
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
  }
  createGrade(name, course, grade) {
    console.log(name, course, grade);
    $.ajax({
      method: 'POST',
      url: 'https://sgt.lfzprototypes.com/api/grades',
      headers: {
        'X-Access-Token': 'JM598ECD'
      },
      data: {
        'name': name,
        'course': course,
        'grade': grade,
      },
      error: this.handleCreateGradeError,
      success: this.handleCreateGradeSuccess
    })
  }
}
