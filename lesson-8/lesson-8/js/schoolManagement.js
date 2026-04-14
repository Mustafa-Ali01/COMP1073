/* =========================================
   MINI PROJECT: STUDENT MANAGEMENT SYSTEM
========================================= */

// STUDENT CONSTRUCTOR
function Student(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
}

// METHODS
Student.prototype.getInfo = function () {
    return ``;
};

Student.prototype.isPass = function () {
    return ;
};

Student.prototype.updateGrade = function (newGrade) {
    
};


// COURSE CONSTRUCTOR
function Course(title) {
    this.title = title;
    this.students = [];
}

// METHODS
Course.prototype.addStudent = function (student) {
   ;
    if (exists) return "Student already added";

    
    return "Student added";
};

Course.prototype.listStudents = function () {
    if (this.students.length === 0) return "No students";

    return ;
};

Course.prototype.getAverage = function () {
    if (this.students.length === 0) return 0;

    
    return (total / this.students.length).toFixed(2);
};


// SCHOOL CONSTRUCTOR
function School(name) {
    this.name = name;
    this.courses = [];
}

// METHODS
School.prototype.addCourse = function (course) {
    const exists = this.courses.some(c => c.title === course.title);
    if (exists) return "Course already exists";

    this.courses.push(course);
    return "Course added";
};

School.prototype.listCourses = function () {
    if (this.courses.length === 0) return "No courses";

    return 
};

School.prototype.findStudent = function (name) {
    for (let course of this.courses) {
        const student = course.students.find(s => s.name === name);
        if (student) {
            return {
               


            };
        }
    }
    return "Student not found";
};


// TEST AREA



