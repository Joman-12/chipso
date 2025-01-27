function scrollToV(id){
    document.getElementById(id).scrollIntoView(
        {
            behavior: 'smooth',
            block: 'start'
        }
    )
}

function display(id){
    console.log(id);
    
}

function openCommande(produit){
    const modal = document.getElementById("modalProjet");
    const modalText = document.getElementById("modalText");

    // Afficher la modal
    modal.style.display = "block";

    // Réinitialiser le texte
    modalText.textContent = "Qte de ";

    
    modalText.textContent += produit + ' :'
          
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