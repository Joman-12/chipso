let selectedProduct = ''

function showMessage(type, message){
    let modal = document.getElementById("message-modal");
    let message_box = document.getElementById("message");
    message_box.textContent == ''
    modal.style.display = 'block'
    if(type == 'ERROR'){
        modal.style.backgroundColor = 'red'
    }else if(type == 'SUCCESS'){
        modal.style.backgroundColor = 'green'
    }
    message_box.textContent = message

    setTimeout(() => {
        closeMessage()
    }, 4000);
}

function closeMessage(){
    const modal = document.getElementById("message-modal");
    modal.style.display = "none";
}

function scrollToV(id){
    document.getElementById(id).scrollIntoView(
        {
            behavior: 'smooth',
            block: 'start'
        }
    )
}

function display(id){
    //console.log(id);
    
}

function openCommande(produit){
    const modal = document.getElementById("modalProjet");
    const modalText = document.getElementById("modalText");

    // Afficher la modal
    modal.style.display = "block";

    // Réinitialiser le texte
    modalText.textContent = "Qte de ";

    selectedProduct = produit
    modalText.textContent += produit + ' :'
          
}

function commander() {
    const qte = document.getElementById('qte').value
    let qteReelle = parseInt(qte)
    console.log(qteReelle);
    
    if (isNaN(qteReelle) || qteReelle <= 0) {
        showMessage('ERROR', 'Veuillez saisir un nombre supérieur à 0.')
        return;
    }
    showMessage('SUCCESS', 'Votre commande a été enreigstrée.')
    const message = `Bonjour. J'aimerais commander ${qteReelle} boites de ${selectedProduct}`
    // Formater le numéro en supprimant les espaces et les caractères non numériques
    const numeroFormatte = '+22870340735'
  
    // Encoder le message pour s'assurer que les caractères spéciaux sont pris en charge
    const messageEncode = encodeURIComponent(message);
  
    // Construire l'URL de WhatsApp
    const url = `https://wa.me/${numeroFormatte}?text=${messageEncode}`;
  
    // Ouvrir WhatsApp dans une nouvelle fenêtre ou onglet
    window.open(url, '_blank');
}

// Fonction pour fermer la modal
function closeModal() {
    const modal = document.getElementById("modalProjet");
    modal.style.display = "none";
}

// Fermer la modal si on clique en dehors de celle-ci
window.onclick = function(event) {
    const modal = document.getElementById("modalProjet");
    if (event.target === modal) {
        closeModal();
    }
}

