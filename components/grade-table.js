class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades) {
    var noGradeMsg = document.querySelector('.no-grade')

    if(grades.length === 0) {
      noGradeMsg.classList.remove('d-none');
    } else {
      noGradeMsg.classList.add('d-none');
    }

    var tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    for (var i = 0; i < grades.length; i++) {
      tbody.append(this.renderGradeRow(grades[i], this.deleteGrade));
    }
    console.log(grades);
  }

  onDeleteClick (deleteGrade) {
    this.deleteGrade = deleteGrade;
  }

  renderGradeRow(data, deleteGrade) {
    var tr = document.createElement('tr');
    var tdNameStudent = document.createElement('td');
    var tdNameCourse = document.createElement('td');
    var tdGrade = document.createElement('td');
    var tdButton = document.createElement('td');
    var deleteButton = document.createElement('button');

    tdNameStudent.textContent = data.name;
    tdNameCourse.textContent = data.course;
    tdGrade.textContent = data.grade;

    deleteButton.setAttribute('type', 'button');
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = 'DELETE';
    deleteButton.addEventListener('click', function(){
      deleteGrade(data.id);
    }
    tdButton.append(deleteButton);
    tr.append(tdNameStudent, tdNameCourse, tdGrade, tdButton)

    return tr;
  }
}
