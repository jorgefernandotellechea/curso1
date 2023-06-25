/* Ordena los empleados primero por departamento de forma ascendente y luego por experiencia de forma descendente.
Filtra los empleados que pertenecen al departamento "HR" y tienen un salario mayor a 50000.‼
crea un nuevo arreglo que contenga objetos con el nombre del empleado y su nivel salarial, 
donde aquellos con un salario mayor a 60000 se les asigna el nivel "Senior"
y aquellos con un salario menor o igual a 60000 se les asigna el nivel "Junior". */

/*
const edad = 18;
const mensaje = edad >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad';
console.log(mensaje); // "Eres mayor de edad"
*/

const employees = [
  { id: 1, name: 'John', department: 'HR', salary: 45000, experience: 3 },
  { id: 2, name: 'Jane', department: 'Finance', salary: 65000, experience: 5 },
  { id: 3, name: 'Alex', department: 'IT', salary: 55000, experience: 2 },
  { id: 4, name: 'Emma', department: 'HR', salary: 50000, experience: 4 },
  { id: 5, name: 'Ryan', department: 'Finance', salary: 70000, experience: 6 },
];

const dptoAscendente = employees.sort((a,b) => {
	let emp1 = a.department;
	let emp2 = b.department;
	if ( emp1 < emp2 ) {
		return -1;
	} else if ( emp1 > emp2 ) {
		return 1;
	} else {
		return 0;
	}
});
const experiencia = dptoAscendente.sort((a,b) => {
	let emp1 = a.experience;
	let emp2 = b.experience;
	if ( emp1 < emp2 ) {
		return 1;
	} else if ( emp1 > emp2 ) {
		return -1;
	} else {
		return 0;
	}
});
const dptoHR = experiencia.filter((depto) => {
	return (depto.department == 'HR' && depto.salary >= 50000);
});

const nivelSalarial = 'Nivel salarial';
const employeesNew = [
	{Name: employees[0].name, nivelSalarial: employees[0].salary > 60000 ? 'Senior' : 'Junior'},
	{Name: employees[1].name, nivelSalarial: employees[1].salary > 60000 ? 'Senior' : 'Junior'},
	{Name: employees[2].name, nivelSalarial: employees[2].salary > 60000 ? 'Senior' : 'Junior'},
	{Name: employees[3].name, nivelSalarial: employees[3].salary > 60000 ? 'Senior' : 'Junior'},
	{Name: employees[4].name, nivelSalarial: employees[4].salary > 60000 ? 'Senior' : 'Junior'},
];
console.log(employeesNew);