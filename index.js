const readline = require('readline');
const Hero = require('./hero');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            resolve(answer);
        });
    });
}

async function createHero() {
    const nome = await askQuestion('Digite o nome do herói: ');
    const idade = parseInt(await askQuestion('Digite a idade do herói: '), 10);
    
    console.log('Escolha o tipo do herói:');
    console.log('1 - Mago');
    console.log('2 - Guerreiro');
    console.log('3 - Monge');
    console.log('4 - Ninja');
    
    const tipoSelecionado = await askQuestion('Digite o número correspondente ao tipo: ');
    let tipo;

    switch (tipoSelecionado) {
        case '1':
            tipo = 'mago';
            break;
        case '2':
            tipo = 'guerreiro';
            break;
        case '3':
            tipo = 'monge';
            break;
        case '4':
            tipo = 'ninja';
            break;
        default:
            console.log('Tipo inválido! Herói será definido como guerreiro por padrão.');
            tipo = 'guerreiro';
    }

    const heroi = new Hero(nome, idade, tipo);
    return heroi;
}

async function main() {
    const heroi = await createHero();
    heroi.atacar();
    rl.close();
}

main();
