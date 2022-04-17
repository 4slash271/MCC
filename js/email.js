let btnSend = document.querySelector('.play--send');
let userName = document.querySelector('.play--writer');
let userMail = document.querySelector('.play--mail');
let userAddress = document.querySelector('.play--address');
let userMessage = document.querySelector('.play--message');




       btnSend.click(function(){

        window.onload = function() {
            document.querySelector('.mail').addEventListener('submit', function(event) {
                event.preventDefault();
                // these IDs from the previous steps
                emailjs.sendForm('MCC_Gmail', 'mail', this)
                    .then(function() {
                        console.log('SUCCESS!');
                    }, function(error) {
                        console.log('FAILED...', error);
                    });
            });
        }
        })
       