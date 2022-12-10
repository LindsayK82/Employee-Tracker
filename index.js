const inquirer = require('inquirer');
// const { writeFile } = require('fs').promises;

inquirer
    .prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'choices',
            choices: ['Add department', 'Add a role', 'Add an employee', 'Update an employee role'],
        },
    ])
    .then((response) => {
      if (response.choices === 'Add department') {
        addDepartment()
      } else if (response.choices === 'Add a role') {
        addRole()
      } else if (response.choices === 'Add an employee') {
        addEmployee()
      } else if (response.choices === 'Update an employee role') {
        updateEmployee()
      }
    },

        
    );

let addDepartmentQuestions = [
    {
        type: 'input',
        message: 'Enter department name',
        name: 'department_name'
    }
]

let addRoleQuestions = [
    {
        type: 'input',
        message: 'Enter role title',
        message: 'What is the salary?',
        name: 'role_name'
    }
]

let addEmployeeQuestions = [
    {
        type: 'input',
        message: 'Employee first name?',
        message: 'Employee last name?',
        name: 'employee_name'
    }
]

let updateEmployeeQuestions = [
    {
        type: 'input',
        message: 'Please update employee info',
        name: 'update_info'
    }
]

function addDepartment(){
        inquirer.prompt(addDepartmentQuestions).then ((response) => {
            console.log(response)
        })

}

function addRole(){
    inquirer.prompt(addRoleQuestions).then ((response) => {
        console.log(response)
    })
}

function addEmployee(){
    inquirer.prompt(addEmployeeQuestions).then ((response) => {
        console.log(response)
    })

};

function updateEmployee(){
    inquirer.prompt(updateEmployeeQuestions).then ((response) => {
        console.log(response)
    })

};



// Add role questions, employee questions, inquirer.prompt