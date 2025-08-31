// Funcionalidade do chat
document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.querySelector('.chat-messages');
    const chatInput = document.querySelector('.chat-input input');
    const chatButton = document.querySelector('.chat-input button');
    
    // Simular mensagens do chat
    const chatData = [
        "User#557: o povo quer tudo de graça",
        "User#637: alguem pra emprestar pra eu usar também?",
        "User#637: precisa ter acesso ao insta da pessoa?",
        "User#539: eu ja uso a dias, só volto aqui pra ver as fofocas",
        "User#705: pq alguem que comprou vai te emprestar de graça?",
        "User#825: fui na curiosidade e agora descobri que minha melhor amiga tava dando em cima do meu namorado",
        "User#133: galera, eles aceitam pix? queria testar também",
        "User#815: Eu também amo as fofocas kkkkkkkkk",
        "User#637: pessoal tbm funciona pra recuperar perfil de insta hackeado?",
        "User#815: precisa ter o celular da pessoa pra acessar?",
        "User#332: oq de pior vcs ja acharam? eu descobri que uma amiga fica com uma amiga dela",
        "User#964: siiim kkkkkkk",
        "User#705: Seriooo? desculpa mas eu ri kkkkkkkkk",
        "User#705: alguem me ajuda com uma dúvida?",
        "User#964: alguem de Fortaleza por aqui?",
        "User#637: alguem me ajuda com uma dúvida?",
        "User#705: descobri que minha ex tá saindo com meu melhor amigo, n sei oq fazer",
        "User#825: galera, eles aceitam pix? queria testar também",
        "User#602: Seriooo? desculpa mas eu ri kkkkkkkkk",
        "User#637: alguem de Fortaleza por aqui?",
        "User#683: precisa ter acesso ao insta da pessoa?",
        "User#964: Eu sou de São Paulo",
        "User#575: quero comprar mas tenho medo de ser fake",
        "User#683: funciona sim pode testar",
        "User#360: funciona sim pode testar",
        "User#683: siiim kkkkkkk",
        "User#705: o povo quer tudo de graça",
        "User#360: o povo quer tudo de graça",
        "User#705: Eu sou de São Paulo",
        "User#360: precisa não, só o @",
        "User#587: é cada coisa que dá vontade de ficar o dia todo vendo",
        "User#705: alguem de Fortaleza por aqui?",
        "User#133: esse site é seguro? alguem já comprou?",
        "User#133: fui na curiosidade e agora descobri que minha melhor amiga tava dando em cima do meu namorado",
        "User#419: funcionaaaa",
        "User#705: alguém de Salvador por aqui?",
        "User#575: chegou meu acesso, demorou uns minutos mas foi",
        "User#683: funcionaaaa",
        "User#587: alguem de Fortaleza por aqui?",
        "User#419: precisa não, só o @",
        "User#133: alguem me ajuda com uma dúvida?",
        "User#587: esse site é seguro? alguem já comprou?",
        "User#589: eu ja uso a dias, só volto aqui pra ver as fofocas",
        "User#360: funcionaaaa",
        "User#575: alguém de Salvador por aqui?",
        "User#705: esse site é seguro? alguem já comprou?",
        "User#332: fui na curiosidade e agora descobri que minha melhor amiga tava dando em cima do meu namorado",
        "User#637: o povo quer tudo de graça",
        "User#133: funciona sim pode testar",
        "User#557: alguém de Salvador por aqui?",
        "User#575: aceita sim pix e cartão",
        "User#602: oq de pior vcs ja acharam? eu descobri que uma amiga fica com uma amiga dela",
        "User#964: o povo quer tudo de graça",
        "User#549: o povo quer tudo de graça",
        "User#964: pq alguem que comprou vai te emprestar de graça?",
        "User#589: siiim kkkkkkk",
        "User#575: uso mais a noite, parece que é quando tem mais gente",
        "User#589: eu comprei e compraria de novo, pq funciona bem até demais",
        "User#637: é fácil de usar? precisa baixar algo?",
        "User#549: Seriooo? desculpa mas eu ri kkkkkkkkk"
    ];
    
    let currentIndex = 0;
    
    // Função para adicionar uma nova mensagem
    function addMessage(message) {
        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Simular mensagens automáticas
    function simulateChat() {
        if (currentIndex < chatData.length) {
            addMessage(chatData[currentIndex]);
            currentIndex++;
            setTimeout(simulateChat, Math.random() * 3000 + 1000); // Entre 1-4 segundos
        } else {
            currentIndex = 0; // Reiniciar o ciclo
            setTimeout(simulateChat, 5000); // Pausa de 5 segundos antes de reiniciar
        }
    }
    
    // Iniciar simulação do chat
    setTimeout(simulateChat, 2000);
    
    // Funcionalidade do botão de envio
    chatButton.addEventListener('click', function() {
        const message = chatInput.value.trim();
        if (message) {
            const userNumber = Math.floor(Math.random() * 999) + 1;
            addMessage(`User#${userNumber}: ${message}`);
            chatInput.value = '';
            
            // Simular resposta automática
            setTimeout(() => {
                const responses = [
                    "aceita sim pix e cartão",
                    "funciona sim pode testar",
                    "precisa não, só o @",
                    "é seguro sim, já usei",
                    "funcionaaaa"
                ];
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                const responseUserNumber = Math.floor(Math.random() * 999) + 1;
                addMessage(`User#${responseUserNumber}: ${randomResponse}`);
            }, Math.random() * 2000 + 500);
        }
    });
    
    // Permitir envio com Enter
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            chatButton.click();
        }
    });
    
    // Atualizar contador de usuários online
    function updateOnlineUsers() {
        const onlineElement = document.querySelector('.chat-section p:last-of-type');
        if (onlineElement && onlineElement.textContent.includes('Usuários Online')) {
            const count = Math.floor(Math.random() * 100) + 400; // Entre 400-500
            onlineElement.textContent = `${count} Usuários Online`;
        }
    }
    
    // Atualizar contador a cada 30 segundos
    setInterval(updateOnlineUsers, 30000);
    
    // Funcionalidade dos botões "Realizar Consulta Grátis"
    const consultaButtons = document.querySelectorAll('button');
    consultaButtons.forEach(button => {
        if (button.textContent.includes('Realizar Consulta Grátis')) {
            button.addEventListener('click', function() {
                alert('Redirecionando para a página de consulta grátis...');
                // Aqui você pode adicionar a lógica para redirecionar para outra página
            });
        }
    });
    
    // Efeitos de hover nos botões
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

