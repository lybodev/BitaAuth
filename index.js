const fetch = require("node-fetch")
const licenca = require("./license.json")

async function main() {
            let texto = await (await fetch("https://pastebin.com/raw/CwbRkNkU")).text()
    if(licenca.license.includes(texto)) {
            // Oque acontecerá se a licença bater com a do texto
                                        console.log('License Valid') // Retorna "Licença Válida" se a licença for válida
                                        setInterval(() => {
                                        if(licenca.license.includes(texto)) {  // faz uma verificação de chaves a cada 5 segundos

                                        console.log('[VERIFICAÇÃO] Licença Válida')

                                        } else {

                                        console.log('[VERIFICAÇÃO] Licença Inválida')

                                        }

                                        }, 5000);

// Seu código



    } else {
            // Oque acontecerá se a licença não bater com a do texto
            console.log('License Invalid') // Retorna "Licença Inválida" se a licença for inválida
            // Seu código
}
}
main()
