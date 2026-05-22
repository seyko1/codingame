interface Player {
    // inventaire total
    plum: number;
    lemon: number;
    apple: number;
    banana: number;

    trolls: Troll[];
}

interface Troll {
    id: number;
    x: number;
    y: number;
    movementSpeed: number; // 1
    carryCapacity: number; // 1
    harvestPower: number; // 1
    // chopPower: number;
    carryPlum: number;
    carryLemon: number;
    carryApple: number;
    carryBanana: number;
}

type TreeType = 'PLUM | LEMON | APPLE | BANANA';
interface Tree {
    type: TreeType;
    x: number;
    y: number;
    size: number; // 0 à 4
    health: number; // 0 à 4
    fruits: number;
    cooldown: number; // délai recharge
}

const [width, height] = readline().split(' ').map(Number);

const grid: string[][] = [];
for (let i = 0; i < height; i++) {
    grid.push(readline().split(''));
}
console.error('grid', grid)

while (true) {
    const players: Player[] = [];
    for (let i = 0; i < 2; i++) {
        const [plum, lemon, apple, banana] = readline().split(' ').map(Number);
        players.push({ plum, lemon, apple, banana, trolls: [] });
    }
    const trees: Tree[] = [];
    const treesCount: number = parseInt(readline());
    console.error('treesCount', treesCount);
    for (let i = 0; i < treesCount; i++) {
        const [type, x, y, size, health, fruits, cooldown] = readline().split(' ');
        trees.push({
            type: type as TreeType,
            x: Number(x),
            y: Number(y),
            size: Number(size),
            health: Number(health),
            fruits: Number(fruits),
            cooldown: Number(cooldown),
        });
    }
    console.error('trees', trees);
    
    const trollsCount: number = parseInt(readline());
    console.error('trollsCount', trollsCount);
    
    for (let i = 0; i < trollsCount; i++) {
        const [
            id, player, x, y, movementSpeed, carryCapacity, harvestPower, chopPower,
            carryPlum, carryLemon, carryApple, carryBanana
        ] = readline().split(' ').map(Number);
        
        players[player].trolls.push({
            id, x, y, movementSpeed, carryCapacity, harvestPower,
            carryPlum, carryLemon, carryApple, carryBanana
        });
    }
    console.error('players', JSON.stringify(players));

    // valid actions:
    // MOVE <id> <x> <y>
    // HARVEST <id> - when you are on the same cell as a tree
    // DROP <id> - when you are next to your shack and carry items
    console.log('MOVE 0 7 7');
}
