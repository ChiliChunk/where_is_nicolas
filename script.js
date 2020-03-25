
const strings = {
    'foular': {
        'title': 'Mon implication dans le mouvement scout',
        'content': 'je suis scout depuis longtemps sa mère'
    },
    'diplome': {
        'title': 'Mes diplomes:',
        'content': '<ul><li>2015 : BAC S-SI</li><li>2017 : DUT informatique</li></ul>'
    },
    'cahier': {
        'title': 'Ecoles fréquentées',
        'content': `<ul><li>2013-2015 : Lycée International Victor Hugo, Colomiers</li><li>2015-2017 : IUT Blagnac</li><li>2017-2018 : Ecole d'ingénieur UPSSITECH , Toulouse</li><li>2018-2020 : Universitée Jean Jaurès , Toulouse</li>`
    },
    'identite' : {
        'title' : 'Informations sur moi :',
        'content' : `<ul><li>Nom : Nicolas BRIET</li><li>Naissance : 25 aout 1997, Aix-en-provence</li><li>email : nicolas.briet@outlook.com</li><li>numéro de telephone : 06.95.20.05.48</li></ul>`
    },
    'skills' : {
        'title' : 'Mes Compétences : ',
        'content' : '<ul><li>Langages de programmations : JS,JAVA,C#,Python,C,C++</li><li>Os: Windows et GNU/Linux (<3)</ul>'
    }

}

function setModalText(key) {
    document.getElementById('mainModalLabel').innerHTML = strings[key].title;
    document.getElementById('modal-content').innerHTML = strings[key].content;
}