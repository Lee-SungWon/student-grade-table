var table = document.querySelector('.table');
var noGradeMessage = document.querySelector('no-grade');
var gradeTable = new GradeTable(table, noGradeMessage);

var header = document.querySelector('.header');
var pageHeader = new PageHeader(header);

var form = document.querySelector('form');
var gradeForm = new GradeForm(form);


var app = new App(gradeTable, pageHeader, gradeForm).start();
