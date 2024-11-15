
        var password = "dualeoverzanten";

        function passcheck(){
            if(document.getElementById('pass1').value != password) {
                alert('Verkeerde wachtwoord, probeer nogmaals.')
                return false;
            }
            if(document.getElementById('pass1').value == password) {
            }
        }
