import { CuentaCorriente } from "./Cuentas/CuentaCorriente.js";
import { Cliente } from "./Cliente.js";  
import { CuentaAhorro } from "./Cuentas/CuentaAhorro.js";
import { CuentaNomina } from "./Cuentas/CuentaNomina.js";
import { Empleado } from "./Empleados/Empleado.js";
import { Gerente } from "./Empleados/Gerente.js";
import { Director } from "./Empleados/Director.js";
import { SistemaAutenticacion } from "./SistemaAutenticacion.js";

const cliente1 = new Cliente('Leonel Pistaches', '13804050', '123224');
const cliente2 = new Cliente('MariCarmen', '13844050', '423224');
const cuentaCorriente1 = new CuentaCorriente(cliente1, '1', '001');
const cuentaCorriente2 = new CuentaCorriente(cliente2, '2', '002');
const cuentaAhorro1 = new CuentaAhorro(cliente2, '3', '003', 0);
const cuentaNomina1 = new CuentaNomina (cliente1, '4', '004', 0);

const empleado = new Empleado('Juan Perez', '1234343', 10000);
const gerente = new Gerente('Pedro Rivas', '232344', 12000);
const director = new Director('Elena Norma', '232323', 15000);

cliente1.asignarClave(9898);
empleado.asignarClave(2123);
console.log(empleado.verBonificacion());
console.log(director.verBonificacion());
console.log(gerente.verBonificacion());
console.log(SistemaAutenticacion.login(empleado, 2123));
console.log(SistemaAutenticacion.login(cliente1, 9898));

