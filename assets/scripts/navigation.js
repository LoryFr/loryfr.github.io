// Funzione per aggiungere gli eventi al toggle della navbar
function aggiungiEventiToggleNavbar() {
    const NavigationToggle = document.querySelector('.nav-toggle');
    const NavigationMenu = document.querySelector('.nav-menu');
    const Content = document.querySelector('.content');
  
    NavigationToggle.addEventListener('click', () => {
      NavigationToggle.classList.toggle('active');
      NavigationMenu.classList.toggle('active');
      Content.classList.toggle('active');
    });
  }
  
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
  
        // Dopo aver caricato il nuovo contenuto, reimposta gli eventi del toggle della navbar
        aggiungiEventiToggleNavbar();
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

      // Verifica se il link è un link mailto:
      if (url.toLowerCase().startsWith('mailto:')) {
        // Gestisci il link mailto in modo diverso (ad esempio, aprendo un nuovo client di posta elettronica)
        window.location.href = url;
      } else {
  
        // Cambia l'URL senza refreshare la pagina
        cambiaPagina(url, 'Nuova Pagina');
    
        // Carica il contenuto della nuova pagina tramite AJAX
        caricaContenuto(url);
      }
    }
  });
  
  // Aggiungi un listener per gli eventi di popstate per gestire il ritorno/avanzamento della navigazione
  window.addEventListener('popstate', function (event) {
    // Qui puoi gestire il cambio di URL senza refreshare la pagina, ad esempio caricando il contenuto appropriato tramite AJAX
    var url = document.location.href;
    caricaContenuto(url);
  });
  
  // Dopo aver caricato il nuovo contenuto, reimposta gli eventi del toggle della navbar
  aggiungiEventiToggleNavbar();
  