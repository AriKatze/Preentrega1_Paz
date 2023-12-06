function calculadorAhorros() {
  // El usuario ingresa el monto que desea ahorrar a corto plazo
  let financialGoal = parseFloat(
    prompt("Ingresa tu meta financiera a corto plazo")
  );
  console.log("La meta de ahorro es: ", financialGoal)

  // Revisa si el valor ingresado es un num y es mayor a 0
  if (isNaN(financialGoal) || financialGoal <= 0) {
    alert("Ingresa un número positivo y mayor a 0");
    return;
  }

  // Pide al usuario ingresar el salario mensual
  let monthlySalary = parseFloat(prompt("Ingresa tu salario mensual"));
  console.log("El salario mensual es : ", monthlySalary);

  // Revisa si el valor ingresado es un num y es mayor a 0
  if (isNaN(monthlySalary) || monthlySalary <= 0) {
    alert("Ingresa un número positivo y mayor a 0");
    return;
  }

  // Calcula el ahorro basado en ciertos porcentajes (5%, 10%, 15%, 20%)
  //Nota dev, adicionar un parametro para remplazar el % de ahorro y hacer el codigo mas flexible?
  let yearlySavings5Percent = monthlySalary * 0.05 * 12;
  console.log(
    "Ahorrando 5% de tu salario en un año tendrás: ",
    yearlySavings5Percent
  );
  let yearlySavings10Percent = monthlySalary * 0.1 * 12;
  console.log(
    "Ahorrando 10% de tu salario en un año tendrás: ",
    yearlySavings10Percent
  );
  let yearlySavings15Percent = monthlySalary * 0.15 * 12;
  console.log(
    "Ahorrando 15% de tu salario en un año tendrás: ",
    yearlySavings15Percent
  );
  let yearlySavings20Percent = monthlySalary * 0.2 * 12;

  // Calcula cuántos meses tardarás en alcanzar los ahorros, dependiendo del percentage ahorrado al mes
  let monthsToReachGoal5Percent = (financialGoal / yearlySavings5Percent) * 12;
  console.log(
    "Para alcanzar tu meta, ahorrando 5% de tu salario al mes necesitas ahorrar por ",
    monthsToReachGoal5Percent,
    "meses"
  );
  console.log("El progreso de tus ahorros mes a mes será: ");
  savingsPercentage = 0.05;
  savingsTableBreakdown(savingsPercentage);
  let monthsToReachGoal10Percent =
    (financialGoal / yearlySavings10Percent) * 12;
  console.log(
    "Para alcanzar tu meta, ahorrando 10% de tu salario al mes necesitas ahorrar por ",
    monthsToReachGoal10Percent,
    "meses"
  );
  console.log("El progreso de tus ahorros mes a mes será: ");
  savingsPercentage = 0.1;
  savingsTableBreakdown(savingsPercentage);
  let monthsToReachGoal15Percent =
    (financialGoal / yearlySavings15Percent) * 12;
  console.log(
    "Para alcanzar tu meta, ahorrando 15% de tu salario al mes necesitas ahorrar por ",
    monthsToReachGoal15Percent,
    "meses"
  );
  console.log("El progreso de tus ahorros mes a mes será: ");
  savingsPercentage = 0.15;
  savingsTableBreakdown(savingsPercentage);

  //Esta función imprime los ahorros mes a mes hasta alcanzar el objetivo

  function savingsTableBreakdown(savingsPercentage) {
    let savings = 0;
    let month = 0;
    while (savings < financialGoal) {
      savings += monthlySalary * savingsPercentage;
      month++;
      console.log(`month ${month} savings = ${savings}`);
    }
  }
}
calculadorAhorros();
