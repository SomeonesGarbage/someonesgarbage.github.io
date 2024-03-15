document.addEventListener("DOMContentLoaded", function() {
    function calculateAge(birthdate) {
                const birthdateObj = new Date(birthdate);
                const today = new Date();
    
                const yearsDiff = today.getFullYear() - birthdateObj.getFullYear();
    
                const birthMonth = birthdateObj.getMonth();
                const todayMonth = today.getMonth();
                const birthDay = birthdateObj.getDate();
                const todayDate = today.getDate();
    
                if (todayMonth < birthMonth || (todayMonth === birthMonth && todayDate < birthDay)) {
                    return yearsDiff - 1;
                } else {
                    return yearsDiff;
                }
            }
    
            const birthdate = '2004-05-19';
            const age = calculateAge(birthdate);
            document.getElementById('age math included').innerHTML = document.getElementById('age math included').innerHTML.replace('[My Age]', age);
    });
    