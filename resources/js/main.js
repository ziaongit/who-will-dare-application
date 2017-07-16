(function getDaring(){

    this.applicants = [];

    this.int = function() {
        this.addApplicants();
        this.getRandomUser();
        this.tryAgain();
        this.startAgain();
    };

/*-----------------------------------------------------------
Add Applicant Start
------------------------------------------------------------*/
    this.addApplicants = function(){

        var addButton = document.querySelector('#add_applicant');

        addButton.addEventListener('click', function(){
            var input = document.querySelector('#applicant_value');
            generateList(input);
        }); 
    };
/*-----------------------------------------------------------
Add Applicant End
------------------------------------------------------------*/

/*-----------------------------------------------------------
Generate List Start
------------------------------------------------------------*/
    this.generateList = function(input) {
        var value = input.value;
            if(this.validatyCheck(value.toLowerCase())){
                applicants.push(value.toLowerCase());
                input.value = '';
                showList();
            }else {
                showError();
            }

    };
/*-----------------------------------------------------------
Generate List End
------------------------------------------------------------*/

/*-----------------------------------------------------------
Validate input Start
------------------------------------------------------------*/
    this.validatyCheck = function(value) {
        if(applicants.indexOf(value) <0 && value != '') {
            return true;
        }else {
            return false;
      }
    };
/*-----------------------------------------------------------
Validate input End
------------------------------------------------------------*/

/*-----------------------------------------------------------
Show List Start
------------------------------------------------------------*/
    this.showList = function() {
        var applicantList = document.querySelector('.applicant_list_wrapper');
            var template = '';
            
            for(var i = 0; i<applicants.length; i++) {
                template += '<span class="name_tag" data-id="'+ i +'">'+applicants[i]+'</span>'
            }
            applicantList.innerHTML = '';
            applicantList.insertAdjacentHTML('afterbegin', template);
            deleteApplicant();
    };
/*-----------------------------------------------------------
Show List End
------------------------------------------------------------*/

/*-----------------------------------------------------------
Show Error Start
------------------------------------------------------------*/
    this.showError = function() {
        var applicantError = document.querySelector('.applicant_error');

        applicantError.innerHTML = '<p>Something is going wrong!</p>';
        setInterval(hideError, 3000);
        function hideError(){
            applicantError.innerHTML = '';
        }

    };

/*-----------------------------------------------------------
Show Error End
------------------------------------------------------------*/

/*-----------------------------------------------------------
Delete Applicant Start
------------------------------------------------------------*/
    this.deleteApplicant = function() {
        var item = document.querySelectorAll('.name_tag');

        for(var i=0; i < item.length; i++) {
            item[i].addEventListener('click', function(e) {
                removeIt(this);
            });
        }

        function removeIt(element){
            var attribute = parseInt(element.getAttribute('data-id'));
            applicants.splice(attribute, 1);
            this.showList();
        }


    };
/*-----------------------------------------------------------
Delete Applicant End
------------------------------------------------------------*/

/*-----------------------------------------------------------
Get Random User Start
------------------------------------------------------------*/
    this.getRandomUser = function(){
        var resulButton = document.querySelector('#show_result');
        
        resulButton.addEventListener('click', function(){
            if(applicants.length > 1){
                thinking();
            }else {
                showError();
            }
        });
    };
/*-----------------------------------------------------------
Get Random User End
------------------------------------------------------------*/

/*-----------------------------------------------------------
Thinking Start
------------------------------------------------------------*/
    this.thinking = function() {
            var thinkingContainer = document.querySelector('.thinking_container');
            var applicantContainer = document.querySelector('.applicant_container');
            applicantContainer.className += ' hidden';
            thinkingContainer.className = 'thinking_container';
            
            setTimeout(function(){
                showDaring();
                }, 3000);
    };

/*-----------------------------------------------------------
Thinking End
------------------------------------------------------------*/

/*-----------------------------------------------------------
Show Daring Start
------------------------------------------------------------*/
this.showDaring = function() {
    var resulContainer = document.querySelector('.result_container');
    var thinkingContainer = document.querySelector('.thinking_container');

    thinkingContainer.className += ' hidden';
    resulContainer.className = 'result_container';
    showRandonUser();
};
/*-----------------------------------------------------------
Show Daring End
------------------------------------------------------------*/
/*-----------------------------------------------------------
Show Randon User Start
------------------------------------------------------------*/
this.showRandonUser = function() {
    var resultDiv = document.querySelector('.result');
    var resultThinking = document.querySelector('.result_thinking');
    resultThinking.className += ' hidden';
    resultDiv.className = 'result';

    var daringUser = applicants[Math.floor(Math.random() * applicants.length)];
    resultDiv.innerHTML = '';
    resultDiv.insertAdjacentHTML('afterbegin', '<h3>'+ daringUser +'</h3>');
};
/*-----------------------------------------------------------
Show Randon User End
------------------------------------------------------------*/

/*-----------------------------------------------------------
Try Again Start
------------------------------------------------------------*/
this.tryAgain = function() {
    var runAgainButton = document.querySelector('.try_again');

    runAgainButton.addEventListener('click', function(e){

        var resultThinking = document.querySelector('.result_thinking');
        var resultDiv = document.querySelector('.result');
        
        resultThinking.className = 'result_thinking';
        resultDiv.className += ' hidden';

        setTimeout(function(){
            showRandonUser();
        }, 3000);
        
    });
};
/*-----------------------------------------------------------
Rry Again End
------------------------------------------------------------*/

/*-----------------------------------------------------------
Start Again Start
------------------------------------------------------------*/
this.startAgain = function() {
    var startAgainButton = document.querySelector('.start_again');
    startAgainButton.addEventListener('click', function(e){
        start();
    });
};
/*-----------------------------------------------------------
Start Again End
------------------------------------------------------------*/

/*-----------------------------------------------------------
Start Start
------------------------------------------------------------*/
this.start = function() {
    var resulContainer = document.querySelector('.result_container');
    var applicantContainer = document.querySelector('.applicant_container');
    var applicantWrapper = document.querySelector('.applicant_list_wrapper');

    applicantContainer.className += 'applicant_container';
    resulContainer.className = 'result_container hidden';
    applicantWrapper.innerHTML = '';

    applicants = [];
};
/*-----------------------------------------------------------
Start End
------------------------------------------------------------*/


    this.int();
})();