document.addEventListener('DOMContentLoaded', () => {

    Array.prototype.customMap = function(callbackFn) {
        const result = [];              
        for (let i = 0; i < this.length; i++) {
            result.push(callbackFn(this[i], i, this));
        }
        return result;
    }
})