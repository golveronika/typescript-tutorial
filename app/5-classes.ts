class Typescript {
    version: string,

    constructor(version: string) {
        this.version
    }

    info(name:string) {
        return `[${name}]: Typescrips version is ${this.version}`
    }
}

class Car {
    readonly model: string
    readonly numberOfWheels: number = 4

    constructor(theModel: string) {
        this.model = theModel
    }
}

// Идентично: 

class Car2 {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) {}
}

// Модификаторы - бывает 3 вида protected, public, private

class Animal {
    protected voice: string = ''
    public color: string = 'black'

    private go() {
        console.log('Go')
    }

    constructor() {
        this.go()
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()

cat.setVoice('Meow')
console.log(cat.color)

// Абстрактные классы - они ни во что не компилируются 
// они нужны чтобы от них наследоваться

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('Component on render')
    }
    info(): string {
        return 'This is info'
    }
}