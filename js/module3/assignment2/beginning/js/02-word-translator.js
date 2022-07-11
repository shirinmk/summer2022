 

// The Word Translator 

 

// Usage: Use simple conditional statements 

// Create an application that prompts the user for a language code ("es", "de", "en", and "fr"). If they enter one of the four codes, display the translated version of "Hello World" for the given language within the console window. If the user enters anything but those four language codes, the application should default to English. The result should be (for example): 

 

// Hello World translated in French is: Bonjour le monde 

let choseLang = prompt("which language you are selecting: es, de, en, and fr");

if(choseLang == 'es'){
    console.log(" Hello World translated in Spanish is: Hola Mundo")

}else if(choseLang == 'de'){
    console.log(" Hello World translated in  Deutsch is: Hallo Welt")

}else if(choseLang == 'fr'){
    console.log(" Hello World translated in French is: Bonjour le monde");
}else if(choseLang == 'en'){
    console.log(" Hello World translated in English is: Hello world")
}else{
    console.log("Hello World translated in English is: Hello world")
}