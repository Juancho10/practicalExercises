function battleHorde(zombies, humans) {
    // Code here
    return 'x'
}

function battleExample(zombies, humans){
    /*zombiesNum = parseInt(zombies); 
    humansNum = parseInt(humans);
    console.log("value zombie is: "+zombiesNum);
    console.log("value human is: "+humansNum);*/
    const zombie = {};
    const human = {};



    for (let i = 0; i < zombies.length; i++) {
        const currentPotitionZombie = parseInt(zombies[i]);
        const currentPotitionHuman = parseInt(humans[i]);
        let result;
        console.log("this is value of zombies: "+currentPotitionZombie);
        zombie[i] = currentPotitionZombie;// valor de zombie por posición

        human[i] = currentPotitionHuman;// valor de human por posicion

        if(human[i]>zombie[i]){
            result = human[i]-zombie[i]
            console.log(result.toString()+"h");
        }else{
            result = zombie[i]-human[i]
            console.log(result.toString+"z");
        }


    }
    //console.log(zombie['0']);
    
    /*for (let i = 0; i < humans.length; i++) {
        const currentPotitionHuman = parseInt(humans[i]);
        console.log("this is value of human: "+currentPotitionHuman);
        human[i] = currentPotitionHuman;
    }*/
    //console.log(human['0']);

    /*const resultTest = human['0']-zombie['0']
    console.log(resultTest);*/
    
}
const a = "123";
const b = "789";

battleExample(a,b);

//https://www.tldraw.com/s/v2_c_1UD9-eFRe5F5ZRhzQQOQ1?d=v0.0.1920.890.page