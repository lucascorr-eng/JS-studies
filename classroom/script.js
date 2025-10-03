function execute(taskName, callback){
  console.log("Executando a tarefa: ", taskName)

  callback()
}

function callback(){
  console.log("Tarefa finalziada.")
}

execute("Downlaod do arquivo", callback)