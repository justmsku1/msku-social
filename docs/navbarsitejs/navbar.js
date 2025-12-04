let selectedUser  = '';
const chatBox = document.getElementById('chat');

function selectUser (user) {
    selectedUser  = user;
    chatBox.innerHTML = ''; // Seçilen kullanıcı için sohbeti sıfırla
    chatBox.innerHTML += `<div><strong>${user}</strong> ile sohbet ediyorsunuz.</div>`;
}

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;

    if (selectedUser  && message) {
        chatBox.innerHTML += `<div><strong>Ben:</strong> ${message}</div>`;
        messageInput.value = ''; // Mesaj gönderildikten sonra girişi temizle

        // Yanıt mesajı eklemek için bir zamanlayıcı ayarlayın
        setTimeout(() => {
            const responseMessage = getResponse(message);
            chatBox.innerHTML += `<div><strong>${selectedUser }:</strong> ${responseMessage}</div>`;
            chatBox.scrollTop = chatBox.scrollHeight; // Sohbet kutusunu en alta kaydır
        }, 1000); // 1 saniye sonra yanıt mesajı ekle
    } else {
        alert('Lütfen bir kullanıcı seçin ve mesajınızı yazın.');
    }
}

function getResponse(message) {
    // Basit bir yanıt sistemi
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes('Selamun Aleyküm')) {
        return 'Aleyküm Selam Size nasıl yardımcı olabilirim?';
    } else if (lowerCaseMessage.includes('nasılsın')) {
        return 'Ben bir yapay zeka olduğum için duygularım yok, ama teşekkür ederim!';
    } else if (lowerCaseMessage.includes('teşekkür ederim')) {
        return 'Rica ederim! Başka bir şey sormak ister misiniz?';
    } else if (lowerCaseMessage.includes('hoşça kal')) {
        return 'Görüşürüz! İyi günler!';
    } else {
        return 'Bu konuda bir bilgim yok ama başka bir şey sormak isterseniz buradayım!';
    }
}