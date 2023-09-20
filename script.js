var DB_marks = prompt('Enter Data Base Marks ');
var DB_marks_grade_points, DB_marks_grade;

var OS_marks = prompt('Enter Oprating System Marks ');
var OS_marks_grade_points, OS_marks_grade;

var WEB_marks = prompt('Enter WEB_marks Application Marks ');
var WEB_marks_app_grade_points, WEB_marks_grade;

var OR_marks = prompt('Enter Opration Research Marks ');
var OR_marks_grade_points, OR_marks_grade;

var OOP_marks = prompt('Enter OOP_marks Marks ');
var OOP_marks_grade_points, OOP_marks_grade;


if (DB_marks > 85) {
      DB_marks_grade_points = 4.0;
      DB_marks_grade = "A";
}
if (DB_marks > 80 && DB_marks < 84) {
      DB_marks_grade_points = 3.66;
      DB_marks_grade = "A-";
}
else if (DB_marks > 75 && DB_marks < 79) {
      DB_marks_grade_points = 3.33;
      DB_marks_grade = "B";
}
else if (DB_marks > 71 && DB_marks < 74) {
      DB_marks_grade_points = 3.0;
      DB_marks_grade = "B-";
}
else if (DB_marks > 68 && DB_marks < 70) {
      DB_marks_grade_points = 2.66;
      DB_marks_grade = "C";
}

else if (DB_marks > 64 && DB_marks < 67) {
      DB_marks_grade_points = 2.33;
      DB_marks_grade = "D";
}
else if (DB_marks > 61 && DB_marks < 63) {
      DB_marks_grade_points = 2.0;
      DB_marks_grade = "A";
}
else if (DB_marks > 58 && DB_marks < 60) {
      DB_marks_grade_points = 1.66;
      DB_marks_grade = "A";
}
else if (DB_marks > 54 && DB_marks < 57) {
      DB_marks_grade_points = 1.30;
      DB_marks_grade = "A";
}
else if (DB_marks > 50 && DB_marks < 53) {
      DB_marks_grade_points = 1.0;
      DB_marks_grade = "A";
}
else {
      DB_marks_grade_points = 0.0;
      DB_marks_grade = "F";
}

// fOR_marks OS_marks calculation

if (OS_marks > 85) {
      OS_marks_grade_points = 4.0;
      OS_marks_grade = "grade A";
}
if (OS_marks > 80 && OS_marks < 84) {
      OS_marks_grade_points = 3.66;
      OS_marks_grade = "grade A-";
}
else if (OS_marks > 75 && OS_marks < 79) {
      OS_marks_grade_points = 3.33;
      OS_marks_grade = "grade B";
}
else if (OS_marks > 71 && OS_marks < 74) {
      OS_marks_grade_points = 3.0;
      OS_marks_grade = "grade B-";
}
else if (OS_marks > 68 && OS_marks < 70) {
      OS_marks_grade_points = 2.66;
      OS_marks_grade = "C+";
}

else if (OS_marks > 64 && OS_marks < 67) {
      OS_marks_grade_points = 2.33;
      OS_marks_grade = "C";
}
else if (OS_marks > 61 && OS_marks < 63) {
      OS_marks_grade_points = 2.0;
      OS_marks_grade = "C-";
}
else if (OS_marks > 58 && OS_marks < 60) {
      OS_marks_grade_points = 1.66;
      OS_marks_grade = "D";
}
else if (OS_marks > 50 && OS_marks < 57) {
      OS_marks_grade_points = 1.30;
      OS_marks_grade = "D-";
}
else {
      OS_marks_grade_points = 0.0;
      OS_marks_grade = "F";
}

// WEB_marks application calculation


if (WEB_marks > 85) {
      WEB_marks_app_grade_points = 4.0;
      WEB_marks_grade = "grade A";
}
if (WEB_marks > 80 && WEB_marks < 84) {
      WEB_marks_app_grade_points = 3.66;
      WEB_marks_grade = "grade A-";
}
else if (OS_marks > 75 && OS_marks < 79) {
      WEB_marks_app_grade_points = 3.33;
      WEB_marks_grade = "grade B";
}
else if (WEB_marks > 71 && WEB_marks < 74) {
      WEB_marks_app_grade_points = 3.0;
      WEB_marks_grade = "grade B-";
}
else if (WEB_marks > 68 && WEB_marks < 70) {
      WEB_marks_app_grade_points = 2.66;
      WEB_marks_grade = "C+";
}
else if (WEB_marks > 64 && WEB_marks < 67) {
      WEB_marks_app_grade_points = 2.33;
      WEB_marks_grade = "C";
}
else if (WEB_marks > 61 && WEB_marks < 63) {
      WEB_marks_app_grade_points = 2.0;
      WEB_marks_grade = "C-";
}
else if (WEB_marks > 58 && WEB_marks < 60) {
      WEB_marks_app_grade_points = 1.66;
      WEB_marks_grade = "D";
}
else if (WEB_marks > 50 && WEB_marks < 57) {
      WEB_marks_app_grade_points = 1.30;
      WEB_marks_grade = "D-";
}
else {
      WEB_marks_app_grade_points = 0.0;
      WEB_marks_grade = "F";
}

// Optation Rearch 


if (OR_marks > 85) {
      OR_marks_grade_points = 4.0;
      OR_marks_grade = "grade A";
}
if (OR_marks > 80 && OR_marks < 84) {
      OR_marks_grade_points = 3.66;
      OR_marks_grade = "grade A-";
}
else if (OR_marks > 75 && OR_marks < 79) {
      OR_marks_grade_points = 3.33;
      OR_marks_grade = "grade B";
}
else if (OR_marks > 71 && OR_marks < 74) {
      OR_marks_grade_points = 3.0;
      OR_marks_grade = "grade B-";
}
else if (OR_marks > 68 && OR_marks < 70) {
      OR_marks_grade_points = 2.66;
      OR_marks_grade = "C+";
}

else if (OR_marks > 64 && OR_marks < 67) {
      OR_marks_grade_points = 2.33;
      OR_marks_grade = "C";
}
else if (OR_marks > 61 && OR_marks < 63) {
      OR_marks_grade_points = 2.0;
      OR_marks_grade = "C-";
}
else if (OR_marks > 58 && OR_marks < 60) {
      OR_marks_grade_points = 1.66;
      OR_marks_grade = "D";
}
else if (OR_marks > 50 && OR_marks < 57) {
      OR_marks_grade_points = 1.30;
      OR_marks_grade = "D-";
}
else {
      OR_marks_grade_points = 0.0;
      OR_marks_grade = "F";
}

//  OOP_marks calculation


if (OOP_marks > 85) {
      OOP_marks_grade_points = 4.0;
      OOP_marks_grade = "grade A";
}
if (OOP_marks > 80 && OOP_marks < 84) {
      OOP_marks_grade_points = 3.66;
      OOP_marks_grade = "grade A-";
}
else if (OOP_marks > 75 && OOP_marks < 79) {
      OOP_marks_grade_points = 3.33;
      OOP_marks_grade = "grade B";
}
else if (OOP_marks > 71 && OOP_marks < 74) {
      OOP_marks_grade_points = 3.0;
      OOP_marks_grade = "grade B-";
}
else if (OOP_marks > 68 && OOP_marks < 70) {
      OOP_marks_grade_points = 2.66;
      OOP_marks_grade = "C+";
}

else if (OOP_marks > 64 && OOP_marks < 67) {
      OOP_marks_grade_points = 2.33;
      OOP_marks_grade = "C";
}
else if (OOP_marks > 61 && OOP_marks < 63) {
      OOP_marks_grade_points = 2.0;
      OOP_marks_grade = "C-";
}
else if (OOP_marks > 58 && OOP_marks < 60) {
      OOP_marks_grade_points = 1.66;
      OOP_marks_grade = "D";
}
else if (OOP_marks > 50 && OOP_marks < 57) {
      OOP_marks_grade_points = 1.30;
      OOP_marks_grade = "D-";
}
else {
      OOP_marks_grade_points = 0.0;
      OOP_marks_grade = "F";
}

var total_Grade = (DB_marks_grade_points + OS_marks_grade_points + WEB_marks_app_grade_points + OR_marks_grade_points + OOP_marks_grade_points) / 5;

// Correct the output statements and typos
document.write("Database Grade is " + DB_marks_grade + " Database Points = " + DB_marks_grade_points + "<br>");
document.write("Operating System Grade is " + OS_marks_grade + " Operating System Points = " + OS_marks_grade_points + "<br>");
document.write("Web Application Grade is " + WEB_marks_grade + " Web Application Points = " + WEB_marks_app_grade_points + "<br>");
document.write("Operation Research Grade is " + OR_marks_grade + " Operation Research Points = " + OR_marks_grade_points + "<br>");
document.write("OOP Grade is " + OOP_marks_grade + " OOP Points = " + OOP_marks_grade_points + "<br>");
document.write("GPA IS " + total_Grade + "<br>");