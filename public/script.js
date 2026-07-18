const API_URL = "http://localhost:4000/api/students";
let editStudentId = null;

const studentTable = document.getElementById("studentTable");

const studentForm = document.getElementById("studentForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const courseInput = document.getElementById("course");

const submitBtn = document.getElementById("submitBtn");

studentForm.addEventListener("submit", addStudent);



async function loadStudents() {

    const response = await fetch(API_URL);

    const students = await response.json();

    studentTable.innerHTML = "";

    if (students.length === 0) {

        studentTable.innerHTML = `
            <tr>
                <td colspan="5">No Students Found</td>
            </tr>
        `;

        return;
    }

    students.forEach((student) => {

        studentTable.innerHTML += `
            <tr>

                <td>${student.name}</td>

                <td>${student.email}</td>

                <td>${student.age}</td>

                <td>${student.course}</td>

                <td>

                   <button
class="btn btn-warning btn-sm"
onclick="editStudent(
'${student._id}',
'${student.name}',
'${student.email}',
'${student.age}',
'${student.course}'
)">

Edit

</button>

                    <button
    class="btn btn-danger btn-sm"
    onclick="deleteStudent('${student._id}')">
    Delete
</button>

                </td>

            </tr>
        `;

    });

}
// ^


console.log("Name:", nameInput.value);
console.log("Email:", emailInput.value);
console.log("Age:", ageInput.value);
console.log("Course:", courseInput.value);



// ^
async function addStudent(event) {

     event.preventDefault();

    const student = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        age: document.getElementById("age").value,
        course: document.getElementById("course").value
    };

    console.log(student);

if(editStudentId){

    await fetch(`${API_URL}/${editStudentId}`,{

        method:"PUT",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify(student)

    });

}else{

    await fetch(API_URL,{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify(student)

    });

}

    studentForm.reset();

    editStudentId=null;

submitBtn.innerText="Save Student";

submitBtn.classList.remove("btn-warning");

submitBtn.classList.add("btn-success");

    loadStudents();

}

const student = {
    name: nameInput.value,
    email: emailInput.value,
    age: ageInput.value,
    course: courseInput.value
};

console.log(student);

async function deleteStudent(id) {
    const confirmDelete = confirm(
    "Are you sure you want to delete this student?"
);

if (!confirmDelete) return;
await fetch(`${API_URL}/${id}`, {

    method: "DELETE"

});

loadStudents()
}


function editStudent(
id,
name,
email,
age,
course
){

    editStudentId=id;

    nameInput.value=name;

    emailInput.value=email;

    ageInput.value=age;

    courseInput.value=course;

    submitBtn.innerText="Update Student";

    submitBtn.classList.remove("btn-success");

    submitBtn.classList.add("btn-warning");

}


loadStudents();