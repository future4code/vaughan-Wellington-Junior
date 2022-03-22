const tasks = [
    'Lavar a Louça'
]

const newtask = process.argv[2]

function addNewTask(){
    tasks.push(newtask)
    return console.log('Tarefa adicionada com Sucesso!')
}

console.log(addNewTask(), tasks)