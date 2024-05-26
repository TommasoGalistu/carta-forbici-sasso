//giocatore 1
let bottoneGiocatoreCasuale1 = document.querySelector('#giocatoreCasuale1')
let contSceltaGiocatore1 = document.querySelector('.contSceltaGiocatore1')
let giocatore1Nome = document.querySelector('#giocatore1')
let inputGiocatore1 = document.querySelector('#inserimentoNomeG1')
let bottoneNomeGiocatore1 = document.querySelector('#buttonG1')
let arrowComeBack = document.querySelector('.fa-arrow-left')
let contNome = document.querySelector('.contnomeGiocatore1')
let errorMessage = document.querySelector('.errore')

let nomeG1 = document.querySelector('.nomeGiocatoreUno')

//funzioni G1
//funzione per tornare indietro con la freccia
arrowComeBack.addEventListener('click', () => {
    contNome.classList.add('rendiInvisibile')
    contSceltaGiocatore1.classList.remove('rendiInvisibile')
    errorMessage.classList.add('rendiInvisibile')
    nomeG1.textContent = 'Punteggio G1'
})
//inserimento nome casuale
bottoneGiocatoreCasuale1.addEventListener('click', () => {
    contSceltaGiocatore1.classList.add('rendiInvisibile')
    contNome.classList.remove('rendiInvisibile')
    let nome = 'Giocatore Casuale'
    giocatore1Nome.textContent = nome
    nomeG1.textContent = nome
})

//inserimento nome da input
bottoneNomeGiocatore1.addEventListener('click', () => {
    let nome = inputGiocatore1.value
    giocatore1Nome.textContent = nome
    if(nome.length > 3){
        contSceltaGiocatore1.classList.add('rendiInvisibile')
        contNome.classList.remove('rendiInvisibile')
        errorMessage.classList.add('rendiInvisibile')
        nomeG1.textContent = nome
    }else{
        giocatore1Nome.textContent = ''
        let error = 'il nome deve essere almeno di 4 caratteri'
        contSceltaGiocatore1.classList.add('rendiInvisibile')
        contNome.classList.remove('rendiInvisibile')
        errorMessage.classList.remove('rendiInvisibile')
        errorMessage.textContent = error
    }
})


//inizio immagini giocatore 1
let contImmaginiDaSelezionare1 = document.querySelector('#contCarteG1')
let cardCarta = document.querySelector('.paper')
let cardForbici = document.querySelector('.scissors')
let cardSasso = document.querySelector('.rock')
let cartaGiocatore = document.querySelector('.cartaGiocatore')
let cartaSelezionataVerde;
let cartaDaColorare;
let risultato = document.querySelector('#scrittaRisultato')
let immagineGiocatoreCasuale = document.querySelector('.cartaVisibileImg')
let carta = 'http://127.0.0.1:5500/img/icon-paper.svg'
let forbici = 'http://127.0.0.1:5500/img/icon-scissors.svg'
let sasso = 'http://127.0.0.1:5500/img/icon-rock.svg'
let arrCarte = [carta, forbici, sasso]


contImmaginiDaSelezionare1.addEventListener('click', (e) => {
    
    let card;
    let cartaSelezionata = e.target.src
    cardCarta.style.backgroundColor = 'black'
    cardForbici.style.backgroundColor = 'black'
    cardSasso.style.backgroundColor = 'black'
    if(cartaSelezionata == carta){
        cartaSelezionataVerde = cardCarta
        card = cardCarta.style.backgroundColor = 'green'
        cartaDaColorare = card
        cartaGiocatore.src = carta
    }else if(cartaSelezionata == forbici){
        cartaSelezionataVerde = cardForbici
        card = cardForbici.style.backgroundColor = 'green'
        cartaDaColorare = card
        cartaGiocatore.src = forbici
    }else{
        cartaSelezionataVerde = cardSasso
        card = cardSasso.style.backgroundColor = 'green'
        cartaDaColorare = card
        cartaGiocatore.src = sasso
    }
})

// gioco effettivo con punteggi aggiornati
let bottoneGioco = document.querySelector('.bottoneGioco')
let numCasuale;
let punteggio1 = document.querySelector('#punteggioGiocatore1')
let punteggio2 = document.querySelector('#punteggioGiocatore2')


// punteggi provvisori da passare alla variabile
let punt1 = 0
let punt2 = 0



bottoneGioco.addEventListener('click', () => {
    // numero casuale per giocatore casuale
    numCasuale = Math.floor(Math.random() * 3)
    let cartaGiocatoreCasuale = arrCarte[numCasuale]
    // cambio immagine
    immagineGiocatoreCasuale.src = cartaGiocatoreCasuale
    // variabile per confronto
    let cartaG1 = cartaGiocatore.src
    
    if(cartaG1 == cartaGiocatoreCasuale){
        risultato.classList.remove('rendiInvisibile')
        risultato.textContent = 'Hai pareggiato'
    }else if(cartaG1 == carta && cartaGiocatoreCasuale == sasso || cartaG1 == sasso && cartaGiocatoreCasuale == forbici || cartaG1 == forbici && cartaGiocatoreCasuale == carta){
        risultato.classList.remove('rendiInvisibile')
        risultato.textContent = 'Hai vinto!!'
        punt1++
        punteggio1.textContent = punt1
    }else{
        risultato.classList.remove('rendiInvisibile')
        risultato.textContent = 'Hai perso!! :('
        punt2++
        punteggio2.textContent = punt2
    }
    console.log(punteggio1)
})