
// Calcul le temps séparant 2 dates (format ISO 8601: AAAA-MM-JJTHH:MM:SS.mmmZ) et le retourne en heures

export default function getHourDelta(date1, date2){

    // Timestamps en millisecondes
    const timestamp1 = date1.getTime();
    const timestamp2 = date2.getTime();

    // Différence de temps en millisecondes
    const diffEnMS = Math.abs(timestamp2 - timestamp1);

    // Convertissez la différence en heures
    const diffEnHeures = diffEnMS / (1000 * 60 * 60);

    return diffEnHeures;
    
}