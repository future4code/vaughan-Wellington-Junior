type movie = {
    name: string,
    launchYear: number,
    genero: GENERO,
    score? : number
}
enum GENERO {
	ACAO="Ação",
	DRAMA="Drama",
	COMEDIA="Comédia",
	ROMANCE="Romance",
	TERROR="Terror"
}

function getGenre(genre:string):any{
switch (genre) {
    case 'AÇÃO':
        return GENERO.ACAO
        break;
    case 'DRAMA':
        return GENERO.DRAMA
        break;
    case 'COMÉDIA':
        return GENERO.COMEDIA
        break;
    case 'ROMANCE':
        return GENERO.ROMANCE
        break;
    case 'TERROR':
        return GENERO.TERROR
        break;
    default:
        return 'Não definido'
        break;
}}


function movieReport(){
    const film : movie = {
        name: process.argv[2],
        launchYear: Number(process.argv[3]),
        genero: getGenre(process.argv[4].toUpperCase()),
        score: Number(process.argv[5])
    }
    
    console.log(film)        
}

movieReport()