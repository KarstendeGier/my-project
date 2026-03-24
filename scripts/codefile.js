    //functie
    function toonPrompt(){
    const code = prompt('Vul uw promotiecode in', 'uw code');
    const tekst = 'De code die u heeft ingevoerd is: ' + code;
    document.getElementById('divResult').innerHTML = tekst;
    }

    //function version webbrowser
    function toonBrowserVersion(){
    const version = navigator.userAgent;
    const tekstVersion = 'U gebruikt: ' + version;
    document.getElementById('divResult1').innerHTML = tekstVersion;
    }
    

    //funtie om 3 strings te maken, ze n het console te zetten en op de pagina te tonen
    function toon3String(){
        const een = "dit is de eerste string";
        const twee = "dit is de tweede string";
        const drie = "dit is de derde string";
        const samen = een + " - " + twee + " - " + drie;
        const lengte = "lengte: " + samen.length;

        console.log(een);
        console.log(twee);
        console.log(drie);
        console.log(samen.charAt(0));
        console.log(samen.charAt(5));
        console.log(samen.charAt(10));
        console.log(lengte);
        

        document.getElementById('divResult1').innerHTML = een;
        document.getElementById('divResult2').innerHTML = twee;
        document.getElementById('divResult3').innerHTML = drie;
        document.getElementById('divResult4').innerHTML = samen;


    }
    