const fs = require('fs').promises

async function readFile(){

    try {

        const data = await fs.readFile('example.json', 'utf-8')

        console.log(data)
        
    } catch (error) {

        if(error.code == "ENOENT"){
            console.log("O arquivo JSON não existe")
        }
        
    }

}