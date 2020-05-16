import {Request} from "./requests";
import {UI} from "./ui"

const form = document.querySelector("#employee-form");
const nameInput = document.querySelector("#name");
const departmentInput = document.querySelector("#department");
const salaryInput = document.querySelector("#salary");
const employeesList = document.querySelector("#employees");
const updateEmployeeButton = document.querySelector("#update");
const addEmployeeButton = document.querySelector("#addEmployee");
const cardBody = document.querySelector("#card-body")





const request = new Request("http://localhost:3000/employees")


// request.get()
// .then(employees => console.log(employees))
// .catch(err => console.log(err))


// request.post({name:"Serhat say", department:"Pazarlama", salary:4000})
// .then(employee => console.log(employee))
// .catch(err => console.log(err))


// request.put(5,{name:"Helin Alkoyun", department:"Pazarlama", salary:4000})
// .then(employee => console.log(employee))
// .catch(err => console.log(err))


// request.delete(1)
// .then(message => console.log(message))
// .catch(err => console.log(err))


const ui = new UI();

eventListeners();



function eventListeners() {
    document.addEventListener("DOMContentLoaded", getAllEmployees);
    addEmployeeButton.addEventListener("click", addEmployee);
    employeesList.addEventListener("click", clickEvents);
};

function getAllEmployees () {
    request.get()
    .then(employees => ui.addAllEmployeeToUI(employees))
    .catch(err => console.log(err));
};

function addEmployee(e) {
    if (nameInput.value === "" |departmentInput.value === "" | salaryInput === "") {
        ui.alertNotify("Please fill all inputs", "warning")
    }
    else {
        request.post({name:nameInput.value, department: departmentInput.value, salary: salaryInput.value})
        .catch(err => console.log(err));
        ui.alertNotify("New Employee Added", "success")
        employeesList.innerHTML = "";
        getAllEmployees();
    }
    clearWholeInputs();
    e.preventDefault();
};

function clearWholeInputs() {
    nameInput.value = "";
    departmentInput.value = "";
    salaryInput.value = "";
}


function clickEvents(e){
    if (e.target.textContent === "Sil"){
        request.delete(e.target.parentElement.parentElement.children[3].textContent)
        .catch(err => err)
        e.target.parentElement.parentElement.remove()
    }
    else if (e.target.textContent === "Güncelle"){
        if (nameInput.value === "" |departmentInput.value === "" | salaryInput === "") {
            ui.alertNotify("Please fill all inputs", "warning");
        }
        else {
            let id = e.target.parentElement.parentElement.children[3].textContent;
            request.put(id, {name:nameInput.value, department: departmentInput.value, salary: salaryInput.value})
            .catch(err => console.log(err));
            employeesList.innerHTML = ""
            getAllEmployees();
            ui.alertNotify("Update Succesfull", "success");
        }
    }
    clearWholeInputs();

};

