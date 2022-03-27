const userBirth = process.argv[2]
const docEmmission = process.argv[3]
const splitteBirth = userBirth.split("/")
const splitteDoc = docEmmission.split("/")

const getDate = new Date()
const currentYear = getDate.getFullYear()

const currentUserAge = currentYear - Number(splitteBirth[2])
const currentDocAge = currentYear - Number(splitteDoc[2])

function reviewDocument(){
    if (currentUserAge <= 20){
        console.log(currentDocAge <= 5 ? "O Documento não possui mais do que 5 anos, não precisa ser renovado" : "O Documento possui mais do que 5 anos, precisa ser renovado")
    } else if (currentUserAge > 20 && currentUserAge <= 50){
        console.log(currentDocAge <= 10 ? "O Documento não possui mais do que 10 anos, não precisa ser renovado" : "O Documento possui mais do que 10 anos, precisa ser renovado")
    } else if (currentUserAge > 50){
        console.log(currentDocAge < 15 ? "O Documento não possui mais do que 15 anos, não precisa ser renovado" : "O Documento possui mais do que 15 anos, precisa ser renovado")
    } else { console.log("erro")}
}

reviewDocument()