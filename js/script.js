$(document).ready(function() {
    // Aspetta che il documento sia completamente caricato prima di eseguire il codice
    $("#registrationForm").submit(function(event) {
        // Gestisci l'evento di invio del form
        event.preventDefault();
        // Impedisce il comportamento di invio predefinito del form
        
        var email = $("#email").val();
        var password = $("#password").val();
        var confirmPassword = $("#confirmPassword").val();
        var message = $("#message");
        
        // Recupera i valori dei campi email, password e conferma password
        
        // Verifica se la password e la conferma della password corrispondono
        if (password !== confirmPassword) {
            // Se le password non corrispondono, mostra un avviso
            showMessage("La password e la conferma password non corrispondono.", "alert-red");
            return; // Interrompi l'esecuzione del codice
        }
        
        // Verifica se l'email è valida (contiene un simbolo @)
        if (email.indexOf("@") === -1) {
            // Se l'email non è valida, mostra un avviso
            showMessage("Inserisci un indirizzo email valido.", "alert-red");
            return; // Interrompi l'esecuzione del codice
        }
        
        // Esempio di un'ulteriore validazione, la password deve essere lunga almeno 6 caratteri
        if (password.length < 6) {
            // Se la password non è abbastanza lunga, mostra un avviso
            showMessage("La password deve contenere almeno 6 caratteri.", "alert-red");
            return; // Interrompi l'esecuzione del codice
        }
        
        // Se tutto va bene, mostra un messaggio di successo
        showMessage("Registrazione completata con successo!", "alert-green");
    });
    
    function showMessage(text, className) {
        // Funzione per mostrare gli avvisi
        var alertDiv = $("<div>")
        .addClass("alert " + className)
        .text(text);
        // Crea un nuovo elemento <div> con le classi specificate e il testo del messaggio
        
        $("#message").append(alertDiv);
        // Aggiungi l'avviso al div con id "message"
        
        alertDiv.fadeIn().delay(3000).fadeOut();
        // Effetti di transizione per mostrare e nascondere l'avviso dopo 3 secondi
    }
});
