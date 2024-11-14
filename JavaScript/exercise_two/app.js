//Halloween Dev Juego uno - Poción perfecta
//potions => []
export function createMagicPotion (potions, target){
    const seen = {};

    for (let i = 0; i < potions.length; i++) {
        //simplemente se almacena la posición que se esta calculando
        const currentPotion = potions[i];
        console.log(currentPotion);
        // se toma el complemento o la parte que le hace falta a cada posión ejemplo de 1 el complemento para se 5 es 4, se calcula la diferencia
        const complement = target - potions[i];
        console.log(complement);
        
        //calcular que el complemento se encuentre en el array de posiones
        seen[complement];
        console.log(seen);
    }
    
}

const potions = [1, 2, 3];
const target = 5;

createMagicPotion(potions, target);
