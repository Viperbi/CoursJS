let tab = [12,7,20];

function moyenne(tab){
    let noteMoyenne;
    let answer;
    for (let i = 0; i < tab.length; i++){
        noteMoyenne += tab[i];
    }
    noteMoyenne /= tab.length;
    if (noteMoyenne >= 15){
        answer = "très bien";
    }else if (noteMoyenne >= 10){
        answer = "assez bien";
    }else {
        answer = "refus";
    }
    return answer;
}