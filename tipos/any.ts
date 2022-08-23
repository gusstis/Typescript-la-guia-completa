(()=> {

    let avenger:any = 123;
    let exists;
    let power;

    avenger = 'Dr Strange';
    console.log((avenger as string).charAt (0))

    avenger = 151.321654987;
    console.log(<number>avenger.toFixed(2))

    console.log(exists)


}) ()

/** Trataremos de evitar el explicit any , es decir, nunca lo usemos */
