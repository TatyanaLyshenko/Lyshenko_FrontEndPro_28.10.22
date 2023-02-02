document.addEventListener('DOMContentLoaded', () => {

    function structureUserInfo(name) {
        let result = {};
        result.name = name;
        return function(role, gender) {
            result.role = role;
            result.gender = gender;  //спробувала розширити для більшого розуміння
            return result;
        }
    }

    console.log(structureUserInfo('John')('admin', 'man'));
})