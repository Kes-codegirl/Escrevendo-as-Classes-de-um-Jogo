class Heroine {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    Ataque() { let ataque = "";
        if (this.type == ("mago"))
            ataque = "usou magia";
        else if (this.type == ("guerreiro"))
            ataque = "usou espada";
        else if (this.type == ("monge"))
            ataque = "usou artes marciais";
        else if (this.type == ("ninja"))
            ataque = "usou shuriken";

        console.log( `O ${this.type} atacou usando ${ataque}`);
        }
    }        
    const myheroine = 
    new Heroine("Skadi", 900, "monge");
    myheroine.Ataque();

        const myheroine2 = 
        new Heroine("Ray", 800, "mago");
        myheroine2.Ataque();

    