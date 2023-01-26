const heroes = [
    {
        name: 'Thomas',
        type: 'StormTrooper',
        damage: 100,
        health: 110,
        level: 1
    },
    {
        name: 'Taylor',
        type: 'Banana',
        damage: 125,
        health: 115,
        level: 1
    }
]


const boss = {
    health: 1000,
    maxHealth: 1000,
    damage: 19,
    level: 1
}

function heroesAttackBoss(){
    let combinedDamage = 0
    heroes.forEach(hero => {
       combinedDamage += hero.damage 
    });
    // console.log(combinedDamage)
    
    boss.health = boss.health - combinedDamage
    console.log(boss.health)
}

function bossAttacksHeroes(){
    console.log(heroes[0].health, heroes[1].health)
    console.log(boss.damage)
   heroes[0].health = heroes[0].health - boss.damage
   console.log(heroes[0].health)
   heroes[1].health = heroes[1].health - boss.damage
   console.log(heroes[1].health)
}
bossAttacksHeroes()
heroesAttackBoss()