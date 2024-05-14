//giocatore 1
let bottoneGiocatoreCasuale1 = document.querySelector('#giocatoreCasuale1')
let contSceltaGiocatore1 = document.querySelector('.contSceltaGiocatore1')
let giocatore1Nome = document.querySelector('#giocatore1')
let inputGiocatore1 = document.querySelector('#inserimentoNomeG1')
let bottoneNomeGiocatore1 = document.querySelector('#buttonG1')
let arrowComeBack = document.querySelector('.fa-arrow-left')
let contNome = document.querySelector('.contnomeGiocatore1')
let errorMessage = document.querySelector('.errore')

//funzioni G1
//funzione per tornare indietro con la freccia
arrowComeBack.addEventListener('click', () => {
    contNome.classList.add('rendiInvisibile')
    contSceltaGiocatore1.classList.remove('rendiInvisibile')
})
//inserimento nome casuale
bottoneGiocatoreCasuale1.addEventListener('click', () => {
    contSceltaGiocatore1.classList.add('rendiInvisibile')
    contNome.classList.remove('rendiInvisibile')
    let nome = 'Giocatore Casuale'
    giocatore1Nome.textContent = nome
})

//inserimento nome da input
bottoneNomeGiocatore1.addEventListener('click', () => {
    let nome = inputGiocatore1.value
    giocatore1Nome.textContent = nome
    if(nome.length > 3){
        contSceltaGiocatore1.classList.add('rendiInvisibile')
        contNome.classList.remove('rendiInvisibile')
        errorMessage.classList.add('rendiInvisibile')
    }else{
        giocatore1Nome.textContent = ''
        let error = 'il nome deve essere almeno di 4 caratteri'
        contSceltaGiocatore1.classList.add('rendiInvisibile')
        contNome.classList.remove('rendiInvisibile')
        errorMessage.textContent = error
    }
})


//giocatore 2
let bottoneGiocatoreCasuale2 = document.querySelector('#giocatoreCasuale2')
let contSceltaGiocatore2 = document.querySelector('.contSceltaGiocatore2')
let giocatore2Nome = document.querySelector('#giocatore2')
let inputGiocatore2 = document.querySelector('#inserimentoNomeG2')
let bottoneNomeGiocatore2 = document.querySelector('#buttonG2')
let arrowComeBackright = document.querySelector('.fa-arrow-right')
let contNome2 = document.querySelector('.contnomeGiocatore2')
let errorMessage2 = document.querySelector('.errore2')

//funzioni giocatore 2

//funzioni inserimento nome casuale
bottoneGiocatoreCasuale2.addEventListener('click', () => {
    contSceltaGiocatore2.classList.add('rendiInvisibile')
    contNome2.classList.remove('rendiInvisibile')
    let nome = 'Giocatore Casuale'
    giocatore2Nome.textContent = nome
})
//funzione per tornare indietro con la freccia
arrowComeBackright.addEventListener('click', () => {
    contNome2.classList.add('rendiInvisibile')
    contSceltaGiocatore2.classList.remove('rendiInvisibile')
})

//inserimento nome da input
bottoneNomeGiocatore2.addEventListener('click', () => {
    let nome = inputGiocatore2.value
    giocatore2Nome.textContent = nome
    if(nome.length > 3){
        contSceltaGiocatore2.classList.add('rendiInvisibile')
        contNome2.classList.remove('rendiInvisibile')
        errorMessage2.classList.add('rendiInvisibile')
    }else{
        giocatore2Nome.textContent = ''
        let error = 'il nome deve essere almeno di 4 caratteri'
        contSceltaGiocatore2.classList.add('rendiInvisibile')
        contNome2.classList.remove('rendiInvisibile')
        errorMessage2.textContent = error
    }
})

//inizio immagini giocatore 1
let contImmaginiDaSelezionare1 = document.querySelector('#contCarteG1')
let cartaPaper = document.querySelector('.paper')


contImmaginiDaSelezionare1.addEventListener('click', (e) => {
    let cartaSelezionata = e.target.alt
    if(cartaSelezionata == 'foto paper'){
    
        if(cartaPaper.style.backgroundColor != "green"){
            cartaPaper.style.backgroundColor = "green"
        }else{
            cartaPaper.style.backgroundColor = "black"
        }
    }
})