function encode() {

    // Recupera o valor do elemento 'text-input' exibido na página
    const textoOriginal = document.getElementById('text-input').value;

    // Chama a função de validação
    if (!validarTexto(textoOriginal)) {
        return;
    }

    // Substituições de letras
    const substituicoes = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    // Aplica as substituições ao texto
    let textoCodificado = '';
    
    for (let i = 0; i < textoOriginal.length; i++) {
        const letra = textoOriginal[i];
        // Verifica se a letra precisa ser substituída
        if (letra.toLowerCase() in substituicoes) {
            // Adiciona a substituição ao novo texto
            textoCodificado += substituicoes[letra.toLowerCase()];
        } else {
            // Mantém a letra original se não houver substituição
            textoCodificado += letra;
        }
    }

    // Recupera o elemento 'text-output' exibido na página
    const textOutput = document.getElementById('text-output');
    // Exibe o texto codificado no textarea
    textOutput.value = textoCodificado;

    // Exibe a div "result" e oculta a "no-result", apenas se o textarea estiver preenchido
    if (textoOriginal.trim() !== '') {
        document.getElementById('result').style.display = 'block';
        document.getElementById('no-result').style.display = 'none';
    } else {
        document.getElementById('result').style.display = 'none';
        document.getElementById('no-result').style.display = 'block';
    }
}

function decode() {

    // Recupera o valor do elemento 'text-input' exibido na página
    let textoCodificado = document.getElementById('text-input').value;

    // Chama a função de validação
    if (!validarTexto(textoCodificado)) {
        return;
    }

    // Substituições de acordo com as combinações de letras
    const substituicoes = {
        "enter": "e",
        "imes": "i",
        "ai": "a",
        "ober": "o",
        "ufat": "u"
    };

    // Expressão regular para encontrar as combinações de letras
    const padrao = new RegExp(Object.keys(substituicoes).join("|"), "g");

    // Função de substituição
    function substituir(match) {
        return substituicoes[match];
    }

    // Aplica as substituições no texto
    let textoOriginal = textoCodificado.replace(padrao, substituir);

    // Recupera o elemento 'text-output' exibido na página
    const textOutput = document.getElementById('text-output');
    // Exibe o texto codificado no textarea
    textOutput.value = textoOriginal;

    // Exibe a div "result" e oculta a "no-result", apenas se o textarea estiver preenchido
    if (textoCodificado.trim() !== '') {
        document.getElementById('result').style.display = 'block';
        document.getElementById('no-result').style.display = 'none';
    } else {
        document.getElementById('result').style.display = 'none';
        document.getElementById('no-result').style.display = 'block';
    }
}

function validarTexto(texto) {

    // Verifica se o texto contém letras maiúsculas
    if (/[^a-z\s!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/.test(texto)) {
        alert('O texto não pode conter letras maiúsculas e acentuação.');
        return false;
    }

    // Retorna que o texto é válido, já que não há letras maiúsculas ou caracteres acentuados
    return true;
}

function copyText() {

    // Recupera o valor do elemento 'text-output' exibido na página
    const textOutput = document.getElementById('text-output').value;

    // Atribui o valor copiado a funcionalidade "CTRL + C"
    navigator.clipboard.writeText(textOutput);
}