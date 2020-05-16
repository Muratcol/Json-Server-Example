export class UI {
    constructor () {
        this.empoloyeesList = document.getElementById("employees");
        this.updateButton = document.getElementById("update");
        this.nameInput = document.getElementById("name");
        this.departmentInput = document.getElementById("department");
        this.salaryInput = document.getElementById("salary");
        
    }
    addAllEmployeeToUI(employees) {
        let result = "";
        employees.forEach(employee => {
            
            result += 
            `
            <tr>
                                            
                <td>${employee.name}</td>
                <td>${employee.department}</td>
                <td>${employee.salary}</td>
                <td>${employee.id}</td>
                <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
                <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>

             </tr>
            `
        })
        this.empoloyeesList.innerHTML = result;
    }

    alertNotify(msg, type) {
        let alert = document.createElement("li");
        alert.setAttribute("role", "alert");
        alert.className = `alert alert-${type}`;
        alert.textContent = msg
        document.getElementById("card-row").appendChild(alert);
        setTimeout(() => {
            alert.remove();
        }, 2500);

    }


}