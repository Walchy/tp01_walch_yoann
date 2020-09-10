function validation() {
    // si la valeur du champ prenom est non vide
    if(document.getElementById("password").value == document.getElementById("password-confirmation").value) {
        // alors on envoie le formulaire
        alert("Form submited.");
        return true;
    } else {
        // sinon on affiche un message
        alert("The password is wrong. Please use the right password.");
        return false;
    }
}

//document.getElementById().innerText
//$("#password").val()