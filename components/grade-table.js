class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }
  updateGrades(grades) {
    var tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    for (var i = 0; i < grades.length; i++) {
      var tr = document.createElement('tr');
      var tdNameStudent = document.createElement('td');
      var tdNameCourse = document.createElement('td');
      var tdGrade = document.createElement('td');

      tdNameStudent.textContent = grades[i].name;
      tdNameCourse.textContent = grades[i].course;
      tdGrade.textContent = grades[i].grade;
      tr.append(tdNameStudent, tdNameCourse, tdGrade);
      tbody.append(tr);
    }
    console.log(grades);
  }
}
