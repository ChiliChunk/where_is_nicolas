
const strings = {
    'foular': {
        'title': 'Mon implication dans le mouvement scout',
        'content': `Très engagé dans le scoutisme, j’ai pu réaliser de nombreux projets dont:
        <ul><li>En 2016, Action solidaire en Inde durant cinq semaines pour venir en aide à des petites filles issues des bidonvilles. Nous avons financé ce projet en intégralité grâce à de petits travaux durant l’année et a des dons de collectivités.</li>
        <li>Depuis Septembre 2016, je suis animateur bénévole du scoutisme français auprès de jeunes de 8 à 14 ans.</li></ul>
        `
    },
    'diplome': {
        'title': 'Mes diplomes:',
        'content': `<ul><li>2015 : BAC S-SI</li>
        <li>2017 : DUT informatique</li>
        <li>2020 : Master 1 ICE</ul>`
    },
    'cahier': {
        'title': 'Ecoles fréquentées',
        'content': `<ul><li>2013-2015 : Lycée International Victor Hugo, Colomiers</li><li>2015-2017 : IUT Blagnac</li>
        <li>2017-2018 : Ecole d'ingénieur UPSSITECH , Toulouse</li>
        <li>2019 -2020 : Master 1 ICE à l'Université Jean Jaurès, Toulouse</li>
        </ul>`
    },
    'identite' : {
        'title' : 'Informations sur moi :',
        'content' : `<ul><li>Nom : Nicolas BRIET</li><li>Naissance : 25 aout 1997, Aix-en-provence</li><li>email : nicolas.briet@outlook.com</li><li>numéro de telephone : 06.95.20.05.48</li></ul>`
    },
    'skills' : {
        'title' : 'Mes Compétences : ',
        'content' : '<ul><li>Langages de programmations : JS (natif, JQuery, React, Vue, Node), Java, C#, Python, C, C++</li><li>Os: Windows et GNU/Linux (<3)</ul>'
    },
    'entreprises' : {
        'title' : 'Mes expérinces professionnelles',
        'content' : `<ul><li><b>2017</b> : Stage de deux mois et demi en milieu professionnel (au sein de la start-up Winnov), contribution au développement d’une application web de e-santé.</li>
                        <li><b>2017</b> : CDD de 1 mois chez Winnov, développement d’une application web offline first destinée aux mobiles.</li>
                        <li><b>2018-2019</b> : Alternance chez Winnov pour développer une application de e-santé à destination de cardiologues.
                        J'étais le seul développeur en charge de ce projet et mon développement est guidé par de régulières réunions clients.</li>
                        <li><b>2019-2020</b> : Alternance chez Synapse Developpement pour contribuer au développement de chatbots intelligents </li>
                        </ul>`
    },
    'tasse' : {
        'title' : 'Mon credo :',
        'content' : `<img src='img/joke.jpg' /> <br/>(si j'ai du café : je travaille, sinon : je vais chercher du café)`
    },
    'reddit' : {
        'title' : 'Mes réseaux sociaux :',
        'content' : `Note de mon activité et de l'interet que je porte aux réseaux sociaux sur lesquels je suis inscrit:
        <ul><li>Instagram (@Niiiiiiiico) : 2/5 </li>
        <li>Facebook (Nicolas BRIET) : 3/5</li>
        <li>Twitter (@Chili_Chunk) : 3/5 </li>
        <li>Reddit (u/ChiliChunk) : 5/5 </li></ul>
        `
    },
    'mario' : {
        'title' : 'Mes activés video ludiques:',
        'content' : `J'apprécie jouer régulièrement aux jeux videos sur ordinateur avec mes amis. Liste de mes jeux préférés :
        <ul><li>World of Warcraft</li>
        <li>Dofus</li>
        <li>Overwatch</li>
        <li>League of Legends</li>
        <li>Counter Strike</li>
        <li>Battlefield</li></ul>
        `
    },
    'volley' : {
        'title' : 'Mes activés sportives:',
        'content' : `Voici les sports que j'ai pratiqués en club au cours de ma vie :
        <ul><li>Judo : pendant 8 ans</li>
        <li>Roller : pendant 3 ans</li>
        <li>Tennis de table : pendant 1 ans</li>
        <li>Volley : pendant 4 ans</li></ul>
        `
    },
    'famille' : {
        'title' : 'Ma famille : ',
        'content' : `<ul><li>Membre de la famille : Un père, une mère et un petit frère</li>
        <li>Animeaux de companies : Un chat</li>
        </ul>
        `
    },
    'charlie' : {
        'title' : 'Quelques informations sur moi : ',
        'content' : `<ul><li>Naissance : 25 août 1997 à Aix-en-Provence (22ans)</li>
        <li>e-mail : nicolas.briet@outlook.com</li>
        <li>adresse : Toulouse, Saint Cyprien</li>
        <li>telephone : 0695200548</li>
        </ul>
        `
    }
}

window.onload = setImgPosition;


function setModalText(key) {
    document.getElementById('mainModalLabel').innerHTML = strings[key].title;
    document.getElementById('modal-content').innerHTML = strings[key].content;
}