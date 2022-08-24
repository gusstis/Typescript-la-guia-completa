(() => {

    const addNumber = ( a: number, b: number ) => a+b;
    const greet = ( name: string ) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado!`;

    let myFunction: () => string;
    //?myFunction = 10;
    //?console.log(myFunction);
    //?console.log("Terminé")
    //?myFunction = addNumber
    //?console.log( myFunction(1,3) )

    //?myFunction = greet
    //?console.log( myFunction('Gusanito') )

    myFunction = saveTheWorld
    console.log( myFunction() ) 





})()