var message = 'Hello';
var isFetching = true;
var isLoading = false;
var int = 42;
var float = 2.1;
var numberArray = [1, 1, 2, 3, 5, 8, 13];
var numberArray2 = [1, 1, 2, 3, 5, 8, 13];
// Tuple - массив из разных типов данных
var contact = ['Vladilen', 1234567];
// Any
var variable = 42;
variable = 'New string';
// Функция ничего нам не вернет - void
function sayMyName(name) {
    console.log(name);
}
sayMyName('Veronika');
// Never 
function throwError(message) {
    throw new Error(message);
}
var login = 'admin';
var id1 = 1234;
var id2 = '1234';
