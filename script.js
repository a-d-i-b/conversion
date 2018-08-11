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

    var txtValeur = document.getElementById("txtValeur");

    var txtResultat = document.getElementById("txtResultat");

    var optUnite = document.getElementById("optUnite");

    var optConversion = document.getElementById("optConversion");

    txtValeur.addEventListener("input", onConversion);

    optUnite.addEventListener("change", onConversion);

    optConversion.addEventListener("change", onConversion);
});