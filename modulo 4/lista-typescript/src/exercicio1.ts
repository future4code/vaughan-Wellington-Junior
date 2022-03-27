const username = process.argv[2]
const birthday = process.argv[3]

function printSentence():void{
    const splitteDays = birthday.split("/")
    let month
    switch (splitteDays[1]) {
        case '01':
            month = 'Janeiro'
            break;
        case '02':
            month = 'Fervereiro'
            break;
        case '03':
            month = 'Março'
            break;
        case '04':
            month = 'Abril'
            break;
        case '05':
            month = 'Maio'
            break;
        case '06':
            month = 'Junho'
            break;
        case '07':
            month = 'Julho'
            break;
        case '08':
            month = 'Agosto'
            break;
        case '09':
            month = 'Setembro'
            break;
        case '10':
            month = 'Outubro'
            break;
        case '11':
            month = 'Novembro'
            break;
        case '12':
            month = 'Dezembro'
            break;
        default:
            break;
    }   
    console.log(`Olá me chamo ${username} e eu nasci no dia ${splitteDays[0]} de ${month} de ${splitteDays[2]}`)
}

printSentence()