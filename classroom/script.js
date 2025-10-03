// function message(username) {
//   console.log("Olá", username)
// }

// message("Lucas");
// message("Teste");

// function sum(a, b) {
//   console.log(a + b)
// }

// sum(10, 20)


// Definindo um valor (argumento) padrão

function joinText(text1, text2 = "teste 2", text3 = "teste 3") {
  console.log(text1, text2, text3)
}

joinText("Teste", "teste dois")