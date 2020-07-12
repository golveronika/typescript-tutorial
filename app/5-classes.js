var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Typescript = /** @class */ (function () {
    function Typescript(version) {
        this.version;
    }
    Typescript.prototype.info = function (name) {
        return "[" + name + "]: Typescrips version is " + this.version;
    };
    return Typescript;
}());
var Car = /** @class */ (function () {
    function Car(theModel) {
        this.numberOfWheels = 4;
        this.model = theModel;
    }
    return Car;
}());
// Идентично: 
var Car2 = /** @class */ (function () {
    function Car2(model) {
        this.model = model;
        this.numberOfWheels = 4;
    }
    return Car2;
}());
// Модификаторы - бывает 3 вида protected, public, private
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = '';
        this.color = 'black';
        this.go();
    }
    Animal.prototype.go = function () {
        console.log('Go');
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice;
    };
    return Cat;
}(Animal));
var cat = new Cat();
cat.setVoice('Meow');
console.log(cat.color);
// Абстрактные классы - они ни во что не компилируются 
// они нужны чтобы от них наследоваться
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppComponent.prototype.render = function () {
        console.log('Component on render');
    };
    AppComponent.prototype.info = function () {
        return 'This is info';
    };
    return AppComponent;
}(Component));
