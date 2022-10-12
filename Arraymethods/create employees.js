let employees = [ { id: 101, name: "Ram", sal: 45000 },
{ id: 102, name: "Sita", sal: 55000 } ]
function createEmployee(emp) {
    //adding new Employee
    employees.push(emp)
}
createEmployee({ id: 103, name:"Priyanka", sal: 65000 });
console.log(employees)