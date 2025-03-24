'use strict';

// Variables
const randomNumber = Math.floor(Math.random() * 100) + 1; // Número aleatorio entre 1 y 100
let attempts = 0;

// Elementos del DOM
const userNumberInput = document.getElementById('userNumber');
const submitBtn = document.getElementById('submitBtn');
const message = document.getElementById('message');
const tries = document.getElementById('tries');

// Función para comprobar el número
function checkNumber() {
  const userNumber = parseInt(userNumberInput.value);

  // Si el valor no es válido
  if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
    message.textContent = '⚠️ El número debe estar entre 1 y 100.';
    return;
  }

  attempts++; // Incrementar intentos

  if (userNumber === randomNumber) {
    message.textContent = `🎉 ¡Has acertado! El número era ${randomNumber}.`;
    message.style.color = '#4CAF50';
    submitBtn.disabled = true; // Desactivar botón al acertar
  } else if (userNumber < randomNumber) {
    message.textContent = '⬆️ Demasiado bajo. ¡Inténtalo de nuevo!';
    message.style.color = '#FF5733';
  } else {
    message.textContent = '⬇️ Demasiado alto. ¡Inténtalo de nuevo!';
    message.style.color = '#FF5733';
  }

  // Actualizar contador de intentos
  tries.textContent = `Intentos: ${attempts}`;
}

// Evento para el botón
submitBtn.addEventListener('click', checkNumber);

// Permitir enviar con "Enter"
userNumberInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    checkNumber();
  }
});

// Mostrar en consola el número aleatorio (para pruebas)
console.log(`Número aleatorio generado: ${randomNumber}`);
