
// Calcul le temps séparant 2 dates (prend en paramètres 2 objets Date) et retourne un objet contenant les heures et les minutes
export default function getTimeDelta(date1, date2){

    // Différence de temps en millisecondes
    const diffEnMS = Math.abs(date1.getTime() - date2.getTime());
    // Différence en heures décimales
    let diffEnHeures = diffEnMS / (1000 * 60 * 60);

    // Différence en heures et minutes entières
    const hours = Math.floor(diffEnHeures);
    const minutes = ((diffEnHeures - hours) * 60).toFixed(0) * 1;

    const timeDelta = { hours, minutes };
    return timeDelta;
    
}