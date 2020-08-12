class App {
  constructor (gradeTAble, pageHeader){
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
  }
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades)
    var total = 0;
    for (var i = 0; i < grades.length; i++) {
      total += grades[i].grade;
    }
    var avg = total / grades.length;
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
  }
}
