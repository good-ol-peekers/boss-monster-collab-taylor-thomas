const heroes = [
    {
        name: 'Thomas',
        type: 'StormTrooper',
        damage: 10,
        health: 110,
        level: 1,
        gold: 1,
        isActive: true,
        img: 'https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"'
    },
    {
        name: 'Taylor',
        type: 'Banana',
        damage: 12,
        health: 115,
        level: 1,
        gold: 1,
        isActive: true,
        img:"https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1839&q=80"
    },
    // {
    //     name: 'OddBall',
    //     type: 'bathtub',
    //     damage: 1,
    //     health: 100,
    //     level: 1,
    //     gold: 1,
    //     isActive: false,
    //     img:"https://images.unsplash.com/photo-1626792133251-db513424bc2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    // },
    // {
    //     name: 'Bjorg',
    //     type: 'cyborg',
    //     damage: 125,
    //     health: 500,
    //     level: 1,
    //     gold: 1,
    //     isActive: false,
    //     img:"https://plus.unsplash.com/premium_photo-1671229062407-979e731e7bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    // }
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
        if (hero.isActive) {
            combinedDamage += hero.damage 
            if (hero.health == 0) {
             combinedDamage = 0
            }
        }
    });
    // console.log(combinedDamage)
    
    boss.health = boss.health - combinedDamage
if(boss.health <= 0){
    boss.health = boss.maxHealth
    boss.maxHealth = boss.maxHealth + 100
    boss.damage = boss.damage + 5
    boss.level = boss.level + 1
    heroes.forEach(hero => {
        hero.gold = hero.gold + 50
        hero.level = hero.level + 1
    });
   }
   updateHeros()
   updateBoss()
    console.log(boss.health)
}

function bossAttacksHeroes(){
    // console.log(heroes[0].health, heroes[1].health)
    // console.log(boss.damage)
    heroes.forEach(hero => {
        hero.health = hero.health - boss.damage
        if(hero.health <= 0){
            hero.health = 0
// window.alert('You Are Dead and You lose')
        }
    });
//    heroes[0].health = heroes[0].health - boss.damage
//    heroes[1].health = heroes[1].health - boss.damage
console.log(heroes[0].health)
   console.log(heroes[1].health)
updateHeros()

   
}

function updateHeros(){
    heroes.forEach(hero => {
        let heroElem = document.getElementById(hero.name)
        heroElem.innerHTML = `
        <h1>Name: ${hero.name}</h1>
                    <h2>HP: ${hero.health}</h2>
                    <h2>GOLD: ${hero.gold}</h2>
                    <h2>LVL: ${hero.level}</h2>
                    <img src="${hero.img}" alt="">
        `
    })
}

function updateBoss(){
    let bossElem = document.getElementById('boss')
    bossElem.innerHTML = `
                        <h1>Mumtaz The Magnificent</h1>
                        <h2>Health: ${boss.health}/${boss.maxHealth}</h2>
                        <h3>Damage:${boss.damage}</h3>
    
    `
}


function buyPotion(){
    heroes.forEach(hero => {
    hero.gold = hero.gold - 20
    hero.health = hero.health + 50
    });
 updateHeros()
    console.log("this works")
}

function buyOddBall(){
    console.log('you bought oddball');
heroes.forEach(hero =>{
    hero.gold = hero.gold - 50
})
heroes.push({
name: 'OddBall',
        type: 'bathtub',
        damage: 1,
        health: 100,
        level: 1,
        gold: 1,
        isActive: true,
        img:"https://images.unsplash.com/photo-1626792133251-db513424bc2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
})
     

updateHeros()
}


function buyBjorg(){
    heroes.forEach(hero =>{
    hero.gold = hero.gold - 500
})
    console.log('you bought bjorg');
    heroes.push({
         name: 'Bjorg',
        type: 'cyborg',
        damage: 125,
        health: 500,
        level: 1,
        gold: 1,
        isActive: true,
        img:"https://plus.unsplash.com/premium_photo-1671229062407-979e731e7bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    })
    updateHeros()
}


updateBoss()
setInterval(bossAttacksHeroes, 10000)
console.log(boss);
updateHeros()