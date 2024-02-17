# hackatweet-frontend

*** 17.02.24 ***

components/Home.js

    Création de la requête GET 'http://localhost:3000/tweets' pour récupérer et afficher l'ensemble des tweets.
    La requête est mise à l'intérieur d'un useEffect se déclenchant au mounting du composant ainsi qu'à chaque changement de l'état "tweets".

    Dans ce même bloc fetch, la date de création du tweet obtenue de la réponse est transformée pour obtenir le temps depuis lequel il a été créé grâce à une fonction appelée getTimeDelta.

modules/getTimeDelta.js

    Création de la fonction getTimeDelta permettant à partir d'une date donnée de définir le temps passé entre cette date et le temps actuel.

reducers/user.js

    Ajout des champs "firstname" et "userImg" dans l'état du reducer "user" afin de pouvoir actualiser les infos utilisateur en bas à gauche de la page principale.

