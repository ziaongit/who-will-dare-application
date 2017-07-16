(function getDaring(){

    this.applicants = [];

    this.int = function() {
        this.addApplicants();
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

    this.int();
})();