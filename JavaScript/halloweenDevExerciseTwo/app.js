function battleHorde(zombies, humans) {
    // Code here
    return 'x'
}

function battleExample(zombies, humans){
    let zombie = 0;
    let human = 0;



    for (let i = 0; i < zombies.length; i++) {
        const currentPotitionZombie = Number(zombies[i]);//valor en cada posición de zombies
        const currentPotitionHuman = Number(humans[i]);//valor en cada posición de humans
        console.log(`la el valor del zombie es: ${currentPotitionZombie} y el del humano es ${currentPotitionHuman}`);
        zombie += currentPotitionZombie;
        human += currentPotitionHuman;


        /*
        if(human>zombie[i]){
            human += humans[i]-zombies[i]
            console.log(result.toString()+"h");
        }else{
            result = zombie[i]-human[i]
            console.log(result.toString+"z");
        }*/
    }
    console.log(zombie)
    console.log(human);
    
    
}
const a = "242";
const b = "334";

battleExample(a,b);

//https://www.tldraw.com/s/v2_c_1UD9-eFRe5F5ZRhzQQOQ1?d=v0.0.1920.890.page