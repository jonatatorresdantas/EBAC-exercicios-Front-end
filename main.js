const formulario = document.getElementById('formularioValidacao');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const mensagem = document.getElementById('mensagem');

function mostrarMensagem(texto, tipo) {
    mensagem.textContent = texto;
    mensagem.className = `message ${tipo}`;
    mensagem.classList.remove('show');
    setTimeout(() => {
        mensagem.classList.add('show');
    }, 100);
}

function animarCampoErro(campo) {
    campo.classList.add('input-animation');
    setTimeout(() => {
        campo.classList.remove('input-animation');
    }, 500);
}

function validarFormulario(valorA, valorB) {
    if (valorA === '' || valorB === '') {
        return {
            valido: false,
            mensagem: 'Por favor, preencha ambos os campos!'
        };
    }

    const numeroA = parseFloat(valorA);
    const numeroB = parseFloat(valorB);

    if (isNaN(numeroA) || isNaN(numeroB)) {
        return {
            valido: false,
            mensagem: 'Por favor, digite apenas números válidos!'
        };
    }

    if (numeroB > numeroA) {
        return {
            valido: true,
            mensagem: `✅ Formulário válido! Campo B (${numeroB}) é maior que Campo A (${numeroA}).`
        };
    } else {
        return {
            valido: false,
            mensagem: `❌ Formulário inválido! Campo B (${numeroB}) deve ser maior que Campo A (${numeroA}).`
        };
    }
}

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const valorA = campoA.value.trim();
    const valorB = campoB.value.trim();

    const resultado = validarFormulario(valorA, valorB);

    if (resultado.valido) {
        mostrarMensagem(resultado.mensagem, 'success');
    } else {
        mostrarMensagem(resultado.mensagem, 'error');
        
        if (valorA === '' || isNaN(parseFloat(valorA))) {
            animarCampoErro(campoA);
        }
        if (valorB === '' || isNaN(parseFloat(valorB))) {
            animarCampoErro(campoB);
        }
        if (valorA !== '' && valorB !== '' && !isNaN(parseFloat(valorA)) && !isNaN(parseFloat(valorB))) {
            animarCampoErro(campoB);
        }
    }
});

campoB.addEventListener('input', function() {
    const valorA = campoA.value.trim();
    const valorB = campoB.value.trim();
    
    if (valorA !== '' && valorB !== '') {
        const resultado = validarFormulario(valorA, valorB);
        
        if (resultado.valido) {
            campoA.style.borderColor = '#4facfe';
            campoB.style.borderColor = '#4facfe';
        } else {
            campoA.style.borderColor = '#ff6b6b';
            campoB.style.borderColor = '#ff6b6b';
        }
    } else {
        campoA.style.borderColor = '#e1e5e9';
        campoB.style.borderColor = '#e1e5e9';
    }
});

campoA.addEventListener('input', function() {
    const valorA = campoA.value.trim();
    const valorB = campoB.value.trim();
    
    if (valorA !== '' && valorB !== '') {
        const resultado = validarFormulario(valorA, valorB);
        
        if (resultado.valido) {
            campoA.style.borderColor = '#4facfe';
            campoB.style.borderColor = '#4facfe';
        } else {
            campoA.style.borderColor = '#ff6b6b';
            campoB.style.borderColor = '#ff6b6b';
        }
    } else {
        campoA.style.borderColor = '#e1e5e9';
        campoB.style.borderColor = '#e1e5e9';
    }
});