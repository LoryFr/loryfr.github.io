// Funzione per cambiare l'URL senza refreshare la pagina
function cambiaPagina(url, title) {
  history.pushState(null, title, url);
}

// Funzione per caricare il contenuto della pagina tramite AJAX
function caricaContenuto(url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById('content').innerHTML = data;
    })
    .catch(error => {
      console.error('Errore nel caricamento del contenuto:', error);
    });
}

// Aggiungi un listener per gli eventi di click sui link
document.addEventListener('click', function (event) {
  // Verifica se il click è su un link
  if (event.target.tagName === 'A') {
    // Impedisci il comportamento predefinito del link
    event.preventDefault();
    
    // Ottieni l'URL dal link
    var url = event.target.href;
    
    // Cambia l'URL senza refreshare la pagina
    cambiaPagina(url, 'Nuova Pagina');

    // Carica il contenuto della nuova pagina tramite AJAX
    caricaContenuto(url);
  }
});

// Aggiungi un listener per gli eventi di popstate per gestire il ritorno/avanzamento della navigazione
window.addEventListener('popstate', function (event) {
  // Qui puoi gestire il cambio di URL senza refreshare la pagina, ad esempio caricando il contenuto appropriato tramite AJAX
  var url = document.location.href;
  caricaContenuto(url);
});
