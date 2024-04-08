async function enviarScript() {
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)

	if(!textarea) throw new Error("No hay una conversación abierta")

  const line = 'Mensaje personalizado'; // Coloca el mensaje que enviaras
	for(let i = 0; i < 1000; i++) { // reemplaza `1000` por la cantidad de veces que se enviará el mensaje
		console.log(line)

		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));

		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);

		if(i < 1000) await new Promise(resolve => setTimeout(resolve, 250));
	}

	return null;
}
