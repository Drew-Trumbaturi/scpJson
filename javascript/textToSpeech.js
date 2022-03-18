function TextToSpeech()
{
    // Create new object of speech API
    const speech = new SpeechSynthesisUtterance();

    // Get list of available voices
    let voices = speechSynthesis.getVoices();

    // Get text from input our paragraph to be read back to the user
    let inputText = document.getElementById('description').innerHTML;

    // Read back text
    speech.text = inputText;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    speech.voice = voices[3];
    window.speechSynthesis.speak(speech);
}

function CancelSpeech()
{
    window.speechSynthesis.cancel();
}