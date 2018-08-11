const CONVERSION = 1024;

var coeffConversion = {
    Ko: 1,
    Mo: 2,
    Go: 3,
    To: 4
};

function conversion(valeur, uniteSource, uniteCible)
{

    if (isNaN(valeur)) return "";

    var coeff = coeffConversion[uniteCible] - coeffConversion[uniteSource];
    console.log(coeff);

    if (coeff < 0)
    {
        return valeur * Math.pow(CONVERSION, Math.abs(coeff));
    }
    else if (coeff > 0)
    {
        return valeur / Math.pow(CONVERSION, coeff);
    }
    else
    {
        return valeur
    }
}

function onConversion(e)
{
    txtResultat.value = conversion(txtValeur.value, optUnite.value, optConversion.value);
}


document.addEventListener("DOMContentLoaded", function() {

    console.log("Page chargée.");

    var txtValeur = document.getElementById("txtValeur");
    console.log(txtValeur);

    var txtResultat = document.getElementById("txtResultat");
    console.log(txtResultat);

    var optUnite = document.getElementById("optUnite");
    console.log(optUnite.value);

    var optConversion = document.getElementById("optConversion");
    console.log(optConversion.value);

    txtValeur.addEventListener("input", onConversion);

    optUnite.addEventListener("change", onConversion);

    optConversion.addEventListener("change", onConversion);
});