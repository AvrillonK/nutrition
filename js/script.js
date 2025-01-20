  // Page action

    document.getElementById('checkbox-toggle').addEventListener('change', function() {
    var dropdown = document.getElementById('checkbox-dropdown');
    dropdown.style.display = this.checked ? 'block' : 'none';
  });


  // FOnction d'execution



    function execution() {



    // Obtenir les valeurs du formulaire

    const volume_formulaire = parseFloat(document.getElementById('Volume').value);
    const glucose_formulaire = parseFloat(document.getElementById('Glucose').value);
    const acideAmine_formulaire = parseFloat(document.getElementById('Acide_amine').value);
    const lipides_formulaire = parseFloat(document.getElementById('Lipides').value);
    const potassium_formulaire = parseFloat(document.getElementById('Potassium').value);
    const sodium_formulaire = parseFloat(document.getElementById('Sodium').value);
    const calcium_formulaire = parseFloat(document.getElementById('Calcium').value);
    const magnesium_formulaire = parseFloat(document.getElementById('Magnesium').value);
    const phosphore_formulaire = parseFloat(document.getElementById('Phosphore').value);

    // Vérifier si la valeur n'est pas un nombre, attribuer 0
    const volume_entre = isNaN(volume_formulaire) ? 0 : volume_formulaire;
    const glucose_entre = isNaN(glucose_formulaire) ? 0 : glucose_formulaire;
    const acideAmine_entre = isNaN(acideAmine_formulaire) ? 0 : acideAmine_formulaire;
    const lipides_entre = isNaN(lipides_formulaire) ? 0 : lipides_formulaire;
    const potassium_entre = isNaN(potassium_formulaire) ? 0 : potassium_formulaire;
    const sodium_entre = isNaN(sodium_formulaire) ? 0 : sodium_formulaire;
    const calcium_entre = isNaN(calcium_formulaire) ? 0 : calcium_formulaire;
    const magnesium_entre = isNaN(magnesium_formulaire) ? 0 : magnesium_formulaire;
    const phosphore_entre = isNaN(phosphore_formulaire) ? 0 : phosphore_formulaire;


    //const calorie = lipides*9 + acideAmine*4 + glucose*4;

    // Obtenir les unités sélectionnées
    const unitVolume = document.getElementById('unit_Volume').value;
    const unitGlucose = document.getElementById('unit_Glucose').value;
    const unitAcideAmine = document.getElementById('unit_Acide_amine').value;
    const unitLipides = document.getElementById('unit_Lipides').value;
    const unitSodium = document.getElementById('unit_Sodium').value;
    const unitPotassium = document.getElementById('unit_Potassium').value;
    const unitCalcium = document.getElementById('unit_Calcium').value;
    const unitMagnesium = document.getElementById('unit_Magnesium').value;
    const unitPhosphore = document.getElementById('unit_Phosphore').value;
    /*
    const volume_entre = 1500;
    const glucose_entre = 150;
    const acideAmine_entre = 24;
    const lipides_entre = 0;
    const sodium_entre = 66;
    const potassium_entre = 27;
    const calcium_entre = 233;
    const magnesium_entre = 135;
    const phosphore_entre = 300;


    */
    let calorie;

    if (lipides_entre === 0) {
      calorie = glucose_entre * 4;
    } else {
      calorie = lipides_entre * 9 + glucose_entre * 4;
    }




    /*

    // Obtenir les unités sélectionnées
    const unitVolume = document.getElementById('unit_Volume').value;
    const unitGlucose = document.getElementById('unit_Glucose').value;
    const unitAcideAmine = document.getElementById('unit_Acide_amine').value;
    const unitLipides = document.getElementById('unit_Lipides').value;
    const unitSodium = document.getElementById('unit_Sodium').value;
    const unitPotassium = document.getElementById('unit_Potassium').value;
    const unitCalcium = document.getElementById('unit_Calcium').value;
    const unitMagnesium = document.getElementById('unit_Magnesium').value;
    const unitPhosphore = document.getElementById('unit_Phosphore').value;*/





    // Définir les facteurs de conversion en fonction de l'unité
    const conversionFactors_calcium = {
      'mmol': 48.078,
      'mg': 1,
    };
    const conversionFactors_magnesium = {
      'mmol': 24.305,
      'mg': 1,
    };
    const conversionFactors_phospore = {
        'mmol': 30.9737,
        'mg': 1,  // Ajoutez d'autres unités au besoin
    };
    const conversionFactors_potassium = {
        'mmol': 39.0983,
        'mg': 1,  // Ajoutez d'autres unités au besoin
    };
    const conversionFactors_sodium = {
        'mmol': 22.989769,
        'mg': 1,  // Ajoutez d'autres unités au besoin
    };
    const conversionFactors_calorie = {
        'Joules': 0.2390057, // source
        'kJ': 239.0057,
        'kcal': 1000,
        'cal': 1,  // Ajoutez d'autres unités au besoin

    };
    // Fonction de conversion
    function convertirQuantite(quantite, uniteDepart, uniteArrivee, facteursConversion) {
    if (uniteDepart !== 'mg') {
        console.log('La conversion n\'est possible que si l\'unité de départ est en mg.');
        return quantite; // ou une autre valeur indiquant une erreur ou une conversion impossible
    }

    const quantiteEnMg = quantite * facteursConversion[uniteDepart];
    const quantiteConvertie = quantiteEnMg / facteursConversion[uniteArrivee];
    return quantiteConvertie;
}



    const quantiteSodiumEnMmol = convertirQuantite(sodium_entre, unitSodium, 'mmol', conversionFactors_sodium);
    const quantitePotassiumEnMmol = convertirQuantite(potassium_entre, unitPotassium, 'mmol', conversionFactors_potassium);
    const quantiteCalciumEnMmol = convertirQuantite(calcium_entre, unitCalcium, 'mmol', conversionFactors_calcium);
    const quantiteMagnesiumEnMmol = convertirQuantite(magnesium_entre, unitMagnesium, 'mmol', conversionFactors_magnesium);
    const quantitePhosphoreEnMmol = convertirQuantite(phosphore_entre, unitPhosphore, 'mmol', conversionFactors_phospore);

    console.log('La conversion ');
    console.log(quantiteSodiumEnMmol);
    console.log(sodium_entre);
    console.log(quantitePotassiumEnMmol);
    console.log(potassium_entre);
    console.log(quantiteMagnesiumEnMmol);
    console.log(magnesium_entre);
    console.log(quantiteCalciumEnMmol);
    console.log(calcium_entre);





    // Appliquer les facteurs de conversion aux valeurs du modèle de référence
    const _100_ml_volume = volume_entre / volume_entre * 100;
    const _100_ml_Glucose = glucose_entre / volume_entre * 100;
    const _100_ml_AcideAmine = acideAmine_entre  / volume_entre * 100;
    const _100_ml_Lipides = lipides_entre / volume_entre * 100;
    const _100_ml_Calorie = calorie / volume_entre * 100;
    const _100_ml_Sodium = quantiteSodiumEnMmol / volume_entre * 100;
    const _100_ml_Potassium = quantitePotassiumEnMmol  / volume_entre * 100;
    const _100_ml_Calcium = quantiteCalciumEnMmol / volume_entre * 100;
    const _100_ml_Magnesium = quantiteMagnesiumEnMmol  / volume_entre * 100;
    const _100_ml_Phosphore = quantitePhosphoreEnMmol  / volume_entre * 100;


    console.log(_100_ml_volume);
    console.log(_100_ml_Glucose);
    console.log(_100_ml_AcideAmine);
    console.log(_100_ml_Sodium);
    console.log(_100_ml_Potassium);






    // Créez un objet simple
    class Poche {
      constructor(nom, volume, glucose, acideAmine, lipide, calorie ,sodium, potassium, calcium, magnesium, phosphore, chlorure) {
              this.nom = nom;
              this.volume = volume;
              this.glucose = glucose;
              this.acideAmine = acideAmine;
              this.lipide = lipide;
              this.calorie = calorie;
              this.sodium = sodium;
              this.potassium = potassium;
              this.calcium = calcium;
              this.magnesium = magnesium;
              this.phosphore = phosphore;

            }

            afficherProprietes() {
              console.log("Nom :", this.nom);
              console.log("Volume :", this.volume);
              console.log("Glucose :", this.glucose);
              console.log("Acide Aminé :", this.acideAmine);
              console.log("Lipides :", this.lipide);
              console.log("Calories :", this.calorie);
              console.log("Sodium :", this.sodium);
              console.log("Potassium :", this.potassium);
              console.log("Calcium :", this.calcium);
              console.log("Magnesium :", this.magnesium);
              console.log("Phosphore :", this.phosphore);

            }
          }


    // Créez une instance de la classe
    // Nom
    // volume = 100
    // Glucose en g
    // AA en g
    // Lipide en g
    // Calorie en kcal  g +l  ?
    // sodium en mmol
    // potassium en mmol
    // calcium en mmol
    // magnesium en mmol
    // phosphore en mmol



    let Pediaven_1_100_ml = new Poche("Pediaven 1 ", 100 , 10, 1.5, 0, 40, 0.45, 0, 37.6/48.078, 5/24.305, 0/30.9737);

    let Pediaven_2_100_ml = new Poche("Pediaven 2 ", 100, 10, 1.7, 0, 40, 2, 1.7, 30.4/48.078, 3.9/24.305, 28.2/30.9737);

    let Pediaven_G15_100_ml = new Poche("Pediaven G15% ", 100, 15, 1.5, 0, 60, 3, 2.5, 24/48.078, 9.7/24.305, 24.8/30.9737);

    let Pediaven_G20_100_ml = new Poche("Pediaven G20% ", 100, 20, 2, 0, 80, 3, 2.5, 24/48.078, 9.7/24.305, 24.8/30.9737);

    let Pediaven_G25_100_ml = new Poche("Pediaven G25% ", 100, 25, 2.5, 0, 100, 4, 4, 32/48.078, 14.5/24.305, 31/30.9737);

    let Periolimel_N4E_100_ml = new Poche("Periolimel N4E ", 100, 7.5, 2.53, 3, 60, 2.1, 1.6, 8/48.078, 5.3/24.305, 26.4/30.9737);

    let Numetath_G16_100_ml = new Poche("Numetath G16% ", 100, 15.5, 2.6, 3.1, 93, 2.4, 2.3, 24.8/48.078, 7.5/24.305, 27/30.9737);

    let Numetath_G19_100_ml = new Poche("Numetath G19% ", 100, 19.2, 2.3, 2.8, 105, 4.6, 3.2, 15.2/48.078, 8.1/24.305, 28.8/30.9737);

    let Olimel_N12E_100_ml = new Poche("Olimel N12E ", 100, 7.3, 7.56, 3.5, 64, 3.5, 3, 0.35, 0.4, 1.49);

    let Olimel_N9E_100_ml = new Poche("Olimel N9E ", 100, 11, 5.69, 4, 84, 3.5, 3, 0.35, 0.4, 1.5);

    let Olimel_N7E_100_ml = new Poche("Olimel N7E ", 100, 14, 4.42, 4, 96, 3.5, 3, 0.35, 0.4, 1.5);

    let NaCl_20_pourcent = new Poche("NaCl 20%", 10, 0, 0, 0, 0, 34, 0, 0, 0, 0);

    let KCl_10_pourcent = new Poche("KCl 10%", 10, 0, 0, 0, 0, 0, 13, 0, 0, 0);

    let Gluconate_calcium_10_pourcent = new Poche("Gluconate de Ca 10%", 10, 0, 0, 0, 0, 0, 0, 2.25, 0, 0);

    let Sulfate_magnesium_10_pourcent = new Poche("Sulfate de Mg 10%", 10, 0, 0, 0, 0, 0, 0, 0, 4.8, 0);

    let Phocytan = new Poche("Phocytan 0.66 mmol/mL", 10, 0, 0, 0, 0, 13.2, 0, 0, 0, 6.6);




    // Utilisez la méthode pour afficher les propriétés de la poche
    Pediaven_1_100_ml.afficherProprietes();
    Pediaven_2_100_ml.afficherProprietes();
    Pediaven_G15_100_ml.afficherProprietes();
    Pediaven_G20_100_ml.afficherProprietes();
    Pediaven_G25_100_ml.afficherProprietes();
    Periolimel_N4E_100_ml.afficherProprietes();
    Numetath_G16_100_ml.afficherProprietes();
    Numetath_G19_100_ml.afficherProprietes();
    Olimel_N12E_100_ml.afficherProprietes();
    Olimel_N9E_100_ml.afficherProprietes();
    Olimel_N7E_100_ml.afficherProprietes();
    NaCl_20_pourcent.afficherProprietes();
    KCl_10_pourcent.afficherProprietes();
    Gluconate_calcium_10_pourcent.afficherProprietes();
    Sulfate_magnesium_10_pourcent.afficherProprietes();
    Phocytan.afficherProprietes();




    // Fonction pour initialiser les paramètres des classes

    function initialiserParametres_difference(poche_type) {
      // Calculer les différences
      const differenceVolume = -1*(_100_ml_volume - poche_type.volume);
      const differenceGlucose = -1*(_100_ml_Glucose - poche_type.glucose);
      const differenceAcideAmine = -1*(_100_ml_AcideAmine - poche_type.acideAmine);
      const differenceLipide = -1*(_100_ml_Lipides - poche_type.lipide);
      const differenceCalorie = -1*(_100_ml_Calorie - poche_type.calorie);
      const differenceSodium = -1*(_100_ml_Sodium - poche_type.sodium);
      const differencePotassium = -1*(_100_ml_Potassium - poche_type.potassium);
      const differenceCalcium = -1*(_100_ml_Calcium - poche_type.calcium);
      const differenceMagnesium = -1*(_100_ml_Magnesium - poche_type.magnesium);
      const differencePhosphore = -1*(_100_ml_Phosphore - poche_type.phosphore);

        return { differenceVolume,
        differenceGlucose,
        differenceAcideAmine,
        differenceLipide,
        differenceCalorie,
        differenceSodium,
        differencePotassium,
        differenceCalcium,
        differenceMagnesium,
        differencePhosphore } ;
    }

    // Fonction pour initialiser les paramètres des classes
    function initialiserParametres_difference_pourcentage(poche_type) {
      // Calculer les différences

        const pourcentage_differenceVolume = -1*100 * (_100_ml_volume - poche_type.volume) / poche_type.volume;
        const pourcentage_differenceGlucose = -1*100 * (_100_ml_Glucose - poche_type.glucose) / poche_type.glucose;
        const pourcentage_differenceAcideAmine = -1*100 * (_100_ml_AcideAmine - poche_type.acideAmine) / poche_type.acideAmine;
        const pourcentage_differenceLipide = -1*100 * (_100_ml_Lipides - poche_type.lipide) / poche_type.lipide;
        const pourcentage_differenceCalorie = -1*100 * (_100_ml_Calorie - poche_type.calorie) / poche_type.calorie;
        const pourcentage_differenceSodium = -1*100 * (_100_ml_Sodium - poche_type.sodium) / poche_type.sodium;
        const pourcentage_differencePotassium = -1*100 * (_100_ml_Potassium - poche_type.potassium) / poche_type.potassium;
        const pourcentage_differenceCalcium = -1*100 * (_100_ml_Calcium - poche_type.calcium) / poche_type.calcium;
        const pourcentage_differenceMagnesium = -1*100 * (_100_ml_Magnesium - poche_type.magnesium) / poche_type.magnesium;
        const pourcentage_differencePhosphore = -1*100 * (_100_ml_Phosphore - poche_type.phosphore) / poche_type.phosphore;

        return {pourcentage_differenceVolume, pourcentage_differenceGlucose, pourcentage_differenceAcideAmine,
        pourcentage_differenceLipide, pourcentage_differenceCalorie,
        pourcentage_differenceSodium, pourcentage_differencePotassium, pourcentage_differenceCalcium,
        pourcentage_differenceMagnesium, pourcentage_differencePhosphore};
    }



    // Classe pour les différences
    class Differences{
      constructor(volume, glucose, acideAmine, lipide, calorie ,sodium, potassium, calcium, magnesium, phosphore, chlorure) {

              this.volume = volume;
              this.glucose = glucose;
              this.acideAmine = acideAmine;
              this.lipide = lipide;
              this.calorie = calorie;
              this.sodium = sodium;
              this.potassium = potassium;
              this.calcium = calcium;
              this.magnesium = magnesium;
              this.phosphore = phosphore;

            }

            afficherProprietes() {

              console.log("Volume :", this.volume);
              console.log("Glucose :", this.glucose);
              console.log("Acide Aminé :", this.acideAmine);
              console.log("Lipides :", this.lipide);
              console.log("Calories :", this.calorie);
              console.log("Sodium :", this.sodium);
              console.log("Potassium :", this.potassium);
              console.log("Calcium :", this.calcium);
              console.log("Magnesium :", this.magnesium);
              console.log("Phosphore :", this.phosphore);

            }


        // Méthode statique pour initialiser la classe à partir des résultats de la fonction initialiserParametres
          static initialiserDepuisParametres(poche_type) {
            const parametres = initialiserParametres_difference(poche_type);
            return new Differences(
              parametres.differenceVolume,
              parametres.differenceGlucose,
              parametres.differenceAcideAmine,
              parametres.differenceLipide,
              parametres.differenceCalorie,
              parametres.differenceSodium,
              parametres.differencePotassium,
              parametres.differenceCalcium,
              parametres.differenceMagnesium,
              parametres.differencePhosphore
            );
          }
    }

    // Classe pour les pourcentages
    class Pourcentages extends Differences{
        constructor(volume, glucose, acideAmine, lipide, calorie, sodium, potassium, calcium, magnesium, phosphore) {
          super(volume, glucose, acideAmine, lipide, calorie, sodium, potassium, calcium, magnesium, phosphore)
        }
        // Méthode statique pour initialiser la classe à partir des résultats de la fonction initialiserParametres
          static initialiserDepuisParametres(poche_type) {
            const parametres = initialiserParametres_difference_pourcentage(poche_type);
            return new Pourcentages(
              parametres.pourcentage_differenceVolume,
              parametres.pourcentage_differenceGlucose,
              parametres.pourcentage_differenceAcideAmine,
              parametres.pourcentage_differenceLipide,
              parametres.pourcentage_differenceCalorie,
              parametres.pourcentage_differenceSodium,
              parametres.pourcentage_differencePotassium,
              parametres.pourcentage_differenceCalcium,
              parametres.pourcentage_differenceMagnesium,
              parametres.pourcentage_differencePhosphore
            );
    }
  }

  function score(differences) {

    let somme =  Math.abs(differences.glucose*10**(10)) +
    Math.abs(differences.acideAmine*10**(3)) +
    Math.abs(differences.lipide*10**(4)) +
    Math.abs(differences.calorie*10**(4)) +
    (differences.sodium*10**(5)) +
    Math.abs(differences.potassium*10**(2)) +
    Math.abs(differences.calcium*10**(1)) +
    Math.abs(differences.magnesium*10**(1)) +
    Math.abs(differences.phosphore*10**(1));


  return ( somme );
}

    // Créer une liste d'objets avec les instances de Differences et les scores correspondants
    let scoresList = [ ];

    // Récupérer les éléments cochés
      const checkbox_Numetath_G19 = document.getElementById('checkbox_Numetath_G19').checked;
      const checkbox_Pediaven_1 = document.getElementById('checkbox_Pediaven_1').checked;
      const checkbox_Pediaven_2 = document.getElementById('checkbox_Pediaven_2').checked;
      const checkbox_Pediaven_G15 = document.getElementById('checkbox_Pediaven_G15').checked;
      const checkbox_Pediaven_G20 = document.getElementById('checkbox_Pediaven_G20').checked;
      const checkbox_Pediaven_G25 = document.getElementById('checkbox_Pediaven_G25').checked;
      const checkbox_Periolimel_N4E = document.getElementById('checkbox_Periolimel_N4E').checked;
      const checkbox_Numetath_G16 = document.getElementById('checkbox_Numetath_G16').checked;
      const checkbox_Olimel_N12E = document.getElementById('checkbox_Olimel_N12E').checked;
      const checkbox_Olimel_N9E = document.getElementById('checkbox_Olimel_N9E').checked;
      const checkbox_Olimel_N7E = document.getElementById('checkbox_Olimel_N7E').checked;







    if (checkbox_Numetath_G19) {
    // Exemple d'utilisation de la méthode statique
    let differences_Numetath_G19_100_ml = Differences.initialiserDepuisParametres(Numetath_G19_100_ml);
    let pourcentages_Numetath_G19_100_ml = Pourcentages.initialiserDepuisParametres(Numetath_G19_100_ml);
    let score_Numetath_G19_100_ml = score(differences_Numetath_G19_100_ml);
    let Numetath_G19_100_ml_score_pour_liste = { score_name: Numetath_G19_100_ml.nom, score: score_Numetath_G19_100_ml };
    // Ajoutez les nouveaux éléments à la liste
    scoresList.push(Numetath_G19_100_ml_score_pour_liste);
    // Utilisez la méthode pour afficher les propriétés de la poche
    console.log("differences_Numetath_G19_100_ml");
    differences_Numetath_G19_100_ml.afficherProprietes();
    }

    if (checkbox_Pediaven_1) {
    // Exemple d'utilisation de la méthode statique
    let differences_Pediaven_1_100_ml = Differences.initialiserDepuisParametres(Pediaven_1_100_ml);
    let pourcentages_Pediaven_1_100_ml = Pourcentages.initialiserDepuisParametres(Pediaven_1_100_ml);
    let score_Pediaven_1_100_ml = score(differences_Pediaven_1_100_ml);
    let Pediaven_1_100_ml_score_pour_liste = { score_name: Pediaven_1_100_ml.nom, score: score_Pediaven_1_100_ml };
    // Ajoutez les nouveaux éléments à la liste
    scoresList.push(Pediaven_1_100_ml_score_pour_liste);
    console.log("differences_Pediaven_1_100_ml");
    differences_Pediaven_1_100_ml.afficherProprietes();
  }


    if (checkbox_Pediaven_2) {
    // Exemple d'utilisation de la méthode statique
    let differences_Pediaven_2_100_ml = Differences.initialiserDepuisParametres(Pediaven_2_100_ml);
    let pourcentages_Pediaven_2_100_ml = Pourcentages.initialiserDepuisParametres(Pediaven_2_100_ml);
    let score_Pediaven_2_100_ml = score(differences_Pediaven_2_100_ml);
    let Pediaven_2_100_ml_score_pour_liste = { score_name: Pediaven_2_100_ml.nom, score: score_Pediaven_2_100_ml };
    // Ajoutez les nouveaux éléments à la liste
    scoresList.push(Pediaven_2_100_ml_score_pour_liste);
    console.log("differences_Pediaven_2_100_ml");
    differences_Pediaven_2_100_ml.afficherProprietes();
  }

    if (checkbox_Pediaven_G15) {
    // Exemple d'utilisation de la méthode statique
    let differences_Pediaven_G15_100_ml = Differences.initialiserDepuisParametres(Pediaven_G15_100_ml);
    let pourcentages_Pediaven_G15_100_ml = Pourcentages.initialiserDepuisParametres(Pediaven_G15_100_ml);
    let score_Pediaven_G15_100_ml = score(differences_Pediaven_G15_100_ml);
    let Pediaven_G15_100_ml_score_pour_liste = { score_name: Pediaven_G15_100_ml.nom, score: score_Pediaven_G15_100_ml };
    // Ajoutez les nouveaux éléments à la liste
    scoresList.push(Pediaven_G15_100_ml_score_pour_liste);
    console.log("differences_Pediaven_G15_100_ml");
    differences_Pediaven_G15_100_ml.afficherProprietes();
  }


    if (checkbox_Pediaven_G20) {
    // Exemple d'utilisation de la méthode statique
    let differences_Pediaven_G20_100_ml = Differences.initialiserDepuisParametres(Pediaven_G20_100_ml);
    let pourcentages_Pediaven_G20_100_ml = Pourcentages.initialiserDepuisParametres(Pediaven_G20_100_ml);
    let score_Pediaven_G20_100_ml = score(differences_Pediaven_G20_100_ml);
    let Pediaven_G20_100_ml_score_pour_liste = { score_name: Pediaven_G20_100_ml.nom, score: score_Pediaven_G20_100_ml };
    // Ajoutez les nouveaux éléments à la liste
    scoresList.push(Pediaven_G20_100_ml_score_pour_liste);
    console.log("differences_Pediaven_G20_100_ml");
    differences_Pediaven_G20_100_ml.afficherProprietes();
  }


    if (checkbox_Pediaven_G25) {
    // Exemple d'utilisation de la méthode statique
    let differences_Pediaven_G25_100_ml = Differences.initialiserDepuisParametres(Pediaven_G25_100_ml);
    let pourcentages_Pediaven_G25_100_ml = Pourcentages.initialiserDepuisParametres(Pediaven_G25_100_ml);
    let score_Pediaven_G25_100_ml = score(differences_Pediaven_G25_100_ml);
    let Pediaven_G25_100_ml_score_pour_liste = { score_name: Pediaven_G25_100_ml.nom, score: score_Pediaven_G25_100_ml };
    // Ajoutez les nouveaux éléments à la liste
    scoresList.push(Pediaven_G25_100_ml_score_pour_liste);
    console.log("differences_Pediaven_G25_100_ml");
    differences_Pediaven_G25_100_ml.afficherProprietes();
  }

    if (checkbox_Periolimel_N4E) {
    // Exemple d'utilisation de la méthode statique
    let differences_Periolimel_N4E_100_ml = Differences.initialiserDepuisParametres(Periolimel_N4E_100_ml);
    let pourcentages_Periolimel_N4E_100_ml = Pourcentages.initialiserDepuisParametres(Periolimel_N4E_100_ml);
    let score_Periolimel_N4E_100_ml = score(differences_Periolimel_N4E_100_ml);
    let Periolimel_N4E_100_ml_score_pour_liste = { score_name: Periolimel_N4E_100_ml.nom, score: score_Periolimel_N4E_100_ml };
    // Ajoutez les nouveaux éléments à la liste
    scoresList.push(Periolimel_N4E_100_ml_score_pour_liste);
    console.log("differences_Periolimel_N4E_100_ml");
    differences_Periolimel_N4E_100_ml.afficherProprietes();
  }


    if (checkbox_Numetath_G16) {
    // Exemple d'utilisation de la méthode statique
    let differences_Numetath_G16_100_ml = Differences.initialiserDepuisParametres(Numetath_G16_100_ml);
    let pourcentages_Numetath_G16_100_ml = Pourcentages.initialiserDepuisParametres(Numetath_G16_100_ml);
    let score_Numetath_G16_100_ml = score(differences_Numetath_G16_100_ml);
    let Numetath_G16_100_ml_score_pour_liste = { score_name: Numetath_G16_100_ml.nom, score: score_Numetath_G16_100_ml };
    // Ajoutez les nouveaux éléments à la liste
    scoresList.push(Numetath_G16_100_ml_score_pour_liste);
    console.log("differences_Numetath_G16_100_ml");
    differences_Numetath_G16_100_ml.afficherProprietes();
  }
    if (checkbox_Olimel_N9E) {
    // Exemple d'utilisation de la méthode statique
    let differences_Olimel_N9E_100_ml = Differences.initialiserDepuisParametres(Olimel_N9E_100_ml);
    let pourcentages_Olimel_N9E_100_ml = Pourcentages.initialiserDepuisParametres(Olimel_N9E_100_ml);
    let score_Olimel_N9E_100_ml = score(differences_Olimel_N9E_100_ml);
    let Olimel_N9E_100_ml_score_pour_liste = { score_name: Olimel_N9E_100_ml.nom, score: score_Olimel_N9E_100_ml };
    // Ajoutez les nouveaux éléments à la liste
    scoresList.push(Olimel_N9E_100_ml_score_pour_liste);
    console.log("differences_Olimel_N9E_100_ml");
    differences_Olimel_N9E_100_ml.afficherProprietes();
  }
    if (checkbox_Olimel_N12E) {
    // Exemple d'utilisation de la méthode statique
    let differences_Olimel_N12E_100_ml = Differences.initialiserDepuisParametres(Olimel_N12E_100_ml);
    let pourcentages_Olimel_N12E_100_ml = Pourcentages.initialiserDepuisParametres(Olimel_N12E_100_ml);
    let score_Olimel_N12E_100_ml = score(differences_Olimel_N12E_100_ml);
    let Olimel_N12E_100_ml_score_pour_liste = { score_name: Olimel_N12E_100_ml.nom, score: score_Olimel_N12E_100_ml };
    // Ajoutez les nouveaux éléments à la liste
    scoresList.push(Olimel_N12E_100_ml_score_pour_liste);
    console.log("differences_Olimel_N12E_100_ml");
    differences_Olimel_N12E_100_ml.afficherProprietes();
  }
  if (checkbox_Olimel_N7E) {
  // Exemple d'utilisation de la méthode statique
  let differences_Olimel_N7E_100_ml = Differences.initialiserDepuisParametres(Olimel_N7E_100_ml);
  let pourcentages_Olimel_N7E_100_ml = Pourcentages.initialiserDepuisParametres(Olimel_N7E_100_ml);
  let score_Olimel_N7E_100_ml = score(differences_Olimel_N7E_100_ml);
  let Olimel_N7E_100_ml_score_pour_liste = { score_name: Olimel_N7E_100_ml.nom, score: score_Olimel_N7E_100_ml };
  // Ajoutez les nouveaux éléments à la liste
  scoresList.push(Olimel_N7E_100_ml_score_pour_liste);
  console.log("differences_Olimel_N7E_100_ml");
  differences_Olimel_N7E_100_ml.afficherProprietes();
  }



  console.log("liste des score",scoresList);


  // Trier la liste en fonction des scores (ordre croissant)
  scoresList.sort((a, b) => a.score - b.score);

  // Afficher la première réponse de la liste triée
  if (scoresList.length > 0) {
    console.log("Première réponse triée (ordre croissant):");
    console.log("Nom:", scoresList[0].score_name);
    console.log("Score:", scoresList[0].score);}

    // Choisissez la classe Poche correspondante en fonction du nom
    function choix_poche() {
      let poche_choisie;
      let poche_choisie_difference;
      let poche_choisie_difference_pourcentage;

      switch (scoresList[0].score_name) {
        case Numetath_G19_100_ml.nom:
          poche_choisie = Numetath_G19_100_ml;
          poche_choisie_difference = Differences.initialiserDepuisParametres(Numetath_G19_100_ml);
          poche_choisie_difference_pourcentage = Pourcentages.initialiserDepuisParametres(Numetath_G19_100_ml);
          break;
        case Numetath_G16_100_ml.nom:
          poche_choisie = Numetath_G16_100_ml;
          poche_choisie_difference = Differences.initialiserDepuisParametres(Numetath_G16_100_ml);
          poche_choisie_difference_pourcentage = Pourcentages.initialiserDepuisParametres(Numetath_G16_100_ml);
          break;
        case Periolimel_N4E_100_ml.nom:
          poche_choisie = Periolimel_N4E_100_ml;
          poche_choisie_difference = Differences.initialiserDepuisParametres(Periolimel_N4E_100_ml);
          poche_choisie_difference_pourcentage = Pourcentages.initialiserDepuisParametres(Periolimel_N4E_100_ml);
          break;
        case Pediaven_G20_100_ml.nom:
          poche_choisie = Pediaven_G20_100_ml;
          poche_choisie_difference = Differences.initialiserDepuisParametres(Pediaven_G20_100_ml);
          poche_choisie_difference_pourcentage = Pourcentages.initialiserDepuisParametres(Pediaven_G20_100_ml);
          break;
        case Pediaven_G15_100_ml.nom:
          poche_choisie = Pediaven_G15_100_ml;
          poche_choisie_difference = Differences.initialiserDepuisParametres(Pediaven_G15_100_ml);
          poche_choisie_difference_pourcentage = Pourcentages.initialiserDepuisParametres(Pediaven_G15_100_ml);
          break;
        case Pediaven_G25_100_ml.nom:
          poche_choisie = Pediaven_G25_100_ml;
          poche_choisie_difference = Differences.initialiserDepuisParametres(Pediaven_G25_100_ml);
          poche_choisie_difference_pourcentage = Pourcentages.initialiserDepuisParametres(Pediaven_G25_100_ml);
          break;
        case Pediaven_2_100_ml.nom:
          poche_choisie = Pediaven_2_100_ml;
          poche_choisie_difference = Differences.initialiserDepuisParametres(Pediaven_2_100_ml);
          poche_choisie_difference_pourcentage = Pourcentages.initialiserDepuisParametres(Pediaven_2_100_ml);
          break;
        case Pediaven_1_100_ml.nom:
          poche_choisie = Pediaven_1_100_ml;
          poche_choisie_difference = Differences.initialiserDepuisParametres(Pediaven_1_100_ml);
          poche_choisie_difference_pourcentage = Pourcentages.initialiserDepuisParametres(Pediaven_1_100_ml);
          break;
        case Olimel_N9E_100_ml.nom:
          poche_choisie = Olimel_N9E_100_ml;
          poche_choisie_difference = Differences.initialiserDepuisParametres(Olimel_N9E_100_ml);
          poche_choisie_difference_pourcentage = Pourcentages.initialiserDepuisParametres(Olimel_N9E_100_ml);
          break;
        case Olimel_N12E_100_ml.nom:
          poche_choisie = Olimel_N12E_100_ml;
          poche_choisie_difference = Differences.initialiserDepuisParametres(Olimel_N12E_100_ml);
          poche_choisie_difference_pourcentage = Pourcentages.initialiserDepuisParametres(Olimel_N12E_100_ml);
          break;
        case Olimel_N7E_100_ml.nom:
          poche_choisie = Olimel_N7E_100_ml;
          poche_choisie_difference = Differences.initialiserDepuisParametres(Olimel_N7E_100_ml);
          poche_choisie_difference_pourcentage = Pourcentages.initialiserDepuisParametres(Olimel_N7E_100_ml);
          break;
        // Ajoutez des cas pour les autres poches
        default:
          console.log("Nom de poche non reconnu.");
          break;
      }

      return { poche_choisie, poche_choisie_difference, poche_choisie_difference_pourcentage };
    }

// Calcul post choix de poche

    let { poche_choisie, poche_choisie_difference, poche_choisie_difference_pourcentage } = choix_poche();
    console.log("Poche choisie:", poche_choisie);


    console.log("Différences de la poche choisie:", poche_choisie_difference);
    console.log("Pourcentages de la poche choisie:", poche_choisie_difference_pourcentage);


    let la_poche_choisie_total = new Poche(
      poche_choisie.nom,
      poche_choisie.volume*volume_entre/100
      ,
      poche_choisie.glucose*volume_entre/100
      ,
      poche_choisie.acideAmine*volume_entre/100
      ,
      poche_choisie.lipide*volume_entre/100
      ,
      poche_choisie.calorie*volume_entre/100
      ,
      poche_choisie.sodium*volume_entre/100
      ,
      poche_choisie.potassium*volume_entre/100
      ,
      poche_choisie.calcium*volume_entre/100
      ,
      poche_choisie.magnesium*volume_entre/100
      ,
      poche_choisie.phosphore*volume_entre/100
    );

    let la_poche_choisie_difference_total = new Poche(
      poche_choisie.nom,
      poche_choisie_difference.volume*volume_entre/100
      ,
      poche_choisie_difference.glucose*volume_entre/100
      ,
      poche_choisie_difference.acideAmine*volume_entre/100
      ,
      poche_choisie_difference.lipide*volume_entre/100
      ,
      poche_choisie_difference.calorie*volume_entre/100
      ,
      poche_choisie_difference.sodium*volume_entre/100
      ,
      poche_choisie_difference.potassium*volume_entre/100
      ,
      poche_choisie_difference.calcium*volume_entre/100
      ,
      poche_choisie_difference.magnesium*volume_entre/100
      ,
      poche_choisie_difference.phosphore*volume_entre/100
    );



    console.log("la_poche_choisie_difference_total", la_poche_choisie_difference_total);


    function les_ajouts(la_diff, complement, element ) {
      volume_ajout = -1*complement.volume * la_diff / complement[element];
      quantite_ajout = volume_ajout * complement[element] / complement.volume;

      if (la_poche_choisie_difference_total[element] <= 0) {
        quantite_ajout = quantite_ajout.toFixed(2);
        volume_ajout = volume_ajout.toFixed(2);

      }
      else {
        quantite_ajout = 0
        volume_ajout = 0

      }


      return {quantite_ajout, volume_ajout}
    }






    function les_ajouts_phosphore(la_diff, complement=Phocytan) {
      volume_ajout = -1*complement.volume * la_diff / complement.phosphore;
      quantite_ajout_phosphore = volume_ajout * complement.phosphore / complement.volume;
      quantite_ajout_sodium = volume_ajout * complement.sodium / complement.volume;
      console.log("volume_ajout", volume_ajout);
      console.log("quantite_ajout_phosphore", quantite_ajout_phosphore);
      console.log("quantite_ajout_sodium", quantite_ajout_sodium);
      console.log("la_poche_choisie_difference_total.sodium", la_poche_choisie_difference_total.sodium);


      if (la_poche_choisie_difference_total.phosphore <= 0 & la_poche_choisie_difference_total.sodium <= 0) {
        if ( quantite_ajout_sodium <= -1*la_poche_choisie_difference_total.sodium) {
          quantite_ajout = quantite_ajout_phosphore
          volume_ajout = volume_ajout
          quantite_ajout_phosphore = quantite_ajout.toFixed(2);
          quantite_ajout_sodium = quantite_ajout_sodium.toFixed(2);
          volume_ajout = volume_ajout.toFixed(2);
          console.log("Choix  1");
        }

        else {
          volume_ajout = (-1*la_poche_choisie_difference_total.sodium * complement.volume / complement.sodium).toFixed(2);
          quantite_ajout_phosphore = (volume_ajout * complement.phosphore / complement.volume).toFixed(2);;
          quantite_ajout_sodium = (volume_ajout * complement.sodium / complement.volume).toFixed(2);;
          console.log("Choix  2");

        }

      }
      else {
        quantite_ajout_phosphore = 0
        quantite_ajout_sodium= 0
        volume_ajout = 0
        console.log("Choix  3");

      }


      return {quantite_ajout_sodium, quantite_ajout_phosphore, volume_ajout}
    }





    function les_ajouts_sodium(la_diff,  sodium_phocytan, complement=NaCl_20_pourcent) {
      volume_ajout = complement.volume * (-1*la_diff-sodium_phocytan) / complement.sodium;
      quantite_ajout = volume_ajout * complement.sodium / complement.volume;
      if (la_poche_choisie_difference_total.sodium <= 0) {
        quantite_ajout = quantite_ajout
        volume_ajout = volume_ajout
        quantite_ajout = quantite_ajout.toFixed(2);
        volume_ajout = volume_ajout.toFixed(2);
        reponse = "Correction avec "+ volume_ajout +" mL de " +complement.nom+" apportant "+ quantite_ajout +" mmol dont "+sodium_phocytan+" mmol par le Phocytan"

      }
      else {
        quantite_ajout = 0
        volume_ajout = 0
        reponse = "Correction impossible"

      }


      return reponse
    }

    function phrase(volume, apport, element ) {
      if (apport !== 0) {
        reponse =  "Correction avec "+ volume +" mL de " +element.nom+" apportant "+ apport +" mmol"
      }
      else {
      reponse =  "Correction impossible"
      }


      return reponse
    }













    let phosphore_ajout = les_ajouts_phosphore(la_poche_choisie_difference_total.phosphore);
    let sodium_ajout = les_ajouts_sodium(la_poche_choisie_difference_total.sodium, phosphore_ajout.quantite_ajout_sodium  );

    let phosphore_ajout_phrase = phrase(phosphore_ajout.volume_ajout, phosphore_ajout.quantite_ajout_phosphore, Phocytan )



    let potassium_ajout = les_ajouts(la_poche_choisie_difference_total.potassium, KCl_10_pourcent,"potassium");
    let potassium_ajout_phrase = phrase(potassium_ajout.volume_ajout, potassium_ajout.quantite_ajout, KCl_10_pourcent )


    let calcium_ajout = les_ajouts(la_poche_choisie_difference_total.calcium, Gluconate_calcium_10_pourcent, "calcium");
    let calcium_ajout_phrase = phrase(calcium_ajout.volume_ajout, calcium_ajout.quantite_ajout, Gluconate_calcium_10_pourcent )

    let magnesium_ajout = les_ajouts(la_poche_choisie_difference_total.magnesium, Sulfate_magnesium_10_pourcent, "magnesium");
    let magnesium_ajout_phrase = phrase(magnesium_ajout.volume_ajout, magnesium_ajout.quantite_ajout, Sulfate_magnesium_10_pourcent )


/*

    let volume_total_Na = la_poche_choisie_total.volume + sodium_ajout.volume
    let volume_total_Na_K = la_poche_choisie_total.volume + sodium_ajout.volume + potassium_ajout.volume
    let volume_total_Na_K_Ca = la_poche_choisie_total.volume + sodium_ajout.volume + potassium_ajout.volume + calcium_ajout.volume
    let volume_total_Na_K_Ca_Mg = la_poche_choisie_total.volume + sodium_ajout.volume + potassium_ajout.volume + calcium_ajout.volume + magnesium_ajout.volume


    <h4>soit volume total : Avec Ajout Na seul ${vol_tt_na} ml</h4>
    <h4>soit volume total : Avec Ajout Na seul ${vol_tt_na_k} ml</h4>
    <h4>soit volume total : Avec Ajout Na seul ${vol_tt_na_k_ca} ml</h4>
    <h4>soit volume total : Avec Ajout Na seul ${vol_tt_na_k_ca_mg} ml</h4>

*/


















    // Fonction pour afficher les résultats dans un élément HTML
    function afficherResultats(poche_industriel, differences_poche_industriel, pourcentages_poche_industriel, correction_Na, correction_K, correction_Ca, correction_Mg,correction_Ph) {
      const resultatsDiv = document.getElementById('resultats');
      /*resultatsDiv.innerHTML = `
        <h3>Résultats pour ${poche_industriel.nom}</h3>

        <h3>Details : </h3>

        <p>Volume : ${poche_industriel.volume} ml | Différence : ${differences_poche_industriel.volume.toFixed(2)} ml, ( ${pourcentages_poche_industriel.volume.toFixed(2)} %)</p>
        <p>Glucose: ${poche_industriel.glucose} g | Différence : ${differences_poche_industriel.glucose.toFixed(2)} g, ( ${pourcentages_poche_industriel.glucose.toFixed(2)} %)</p>
        <p>Acide amine: ${poche_industriel.acideAmine} g | Différence : ${differences_poche_industriel.acideAmine.toFixed(2)} g, ( ${pourcentages_poche_industriel.acideAmine.toFixed(2)} %)</p>
        <p>Lipide: ${poche_industriel.lipide} g | Différence : ${differences_poche_industriel.lipide.toFixed(2)} g, ( ${pourcentages_poche_industriel.lipide.toFixed(2)} %)</p>
        <p>Calorie: ${poche_industriel.calorie} cal | Différence : ${differences_poche_industriel.calorie.toFixed(2)} cal, ( ${pourcentages_poche_industriel.calorie.toFixed(2)} %)</p>
        <p>Sodium: ${poche_industriel.sodium} mmol | Différence : ${differences_poche_industriel.sodium.toFixed(2)} mmol, ( ${pourcentages_poche_industriel.sodium.toFixed(2)} %) |  ${correction_Na}  </p>
        <p>Potassium: ${poche_industriel.potassium} mmol | Différence : ${differences_poche_industriel.potassium.toFixed(2)} mmol, ( ${pourcentages_poche_industriel.potassium.toFixed(2)} %) |  ${correction_K}  </p>
        <p>Calcium: ${poche_industriel.calcium} mmol | Différence : ${differences_poche_industriel.calcium.toFixed(2)} mmol, ( ${pourcentages_poche_industriel.calcium.toFixed(2)} %) |  ${correction_Ca} </p>
        <p>Magnesium: ${poche_industriel.magnesium} mmol | Différence : ${differences_poche_industriel.magnesium.toFixed(2)} mmol, ( ${pourcentages_poche_industriel.magnesium.toFixed(2)} %) |  ${correction_Mg} </p>
        <p>Phosphore: ${poche_industriel.phosphore} mmol | Différence : ${differences_poche_industriel.phosphore.toFixed(2)} mmol, ( ${pourcentages_poche_industriel.phosphore.toFixed(2)} %)</p>
      `;*/
      resultatsDiv.innerHTML = `

      <h3>${poche_industriel.nom}</h3>

      <h3>Details : </h3>

      <table>
        <tr>
          <th>Apport Poche</th>
          <th>Différence</th>
          <th>Correction en Y</th>
        </tr>
        <tr>
          <td>Volume: ${poche_industriel.volume.toFixed(2)} ml</td>
          <td class="${differences_poche_industriel.volume >= 0 ? 'positive' : 'negative'}">${differences_poche_industriel.volume.toFixed(2)} ml (${pourcentages_poche_industriel.volume.toFixed(2)} %)</td>
          <td></td>
        </tr>
        <tr>
          <td>Soit : </td>
        </tr>
        <tr>
        <tr>
          <td>Glucose: ${poche_industriel.glucose.toFixed(2)} g</td>
          <td class="${differences_poche_industriel.glucose >= 0 ? 'positive' : 'negative'}">${differences_poche_industriel.glucose.toFixed(2)} g (${pourcentages_poche_industriel.glucose.toFixed(2)} %)</td>
          <td></td>
        </tr>
        <tr>
          <td>Acide amine: ${poche_industriel.acideAmine.toFixed(2)} g</td>
          <td class="${differences_poche_industriel.acideAmine >= 0 ? 'positive' : 'negative'}">${differences_poche_industriel.acideAmine.toFixed(2)} g (${pourcentages_poche_industriel.acideAmine.toFixed(2)} %)</td>
          <td></td>
        </tr>
        <tr>
          <td>Lipides: ${poche_industriel.lipide.toFixed(2)} g</td>
          <td class="${differences_poche_industriel.lipide >= 0 ? 'positive' : 'negative'}">${differences_poche_industriel.lipide.toFixed(2)} g (${pourcentages_poche_industriel.lipide.toFixed(2)} %)</td>
          <td></td>
        </tr>
        <tr>
          <td>Calories glucido-lipidiques:${poche_industriel.calorie.toFixed(2)} Kcal</td>
          <td class="${differences_poche_industriel.calorie >= 0 ? 'positive' : 'negative'}">${differences_poche_industriel.calorie.toFixed(2)} Kcal (${pourcentages_poche_industriel.calorie.toFixed(2)} %)</td>
          <td></td>
        </tr>
        <tr>
          <td>Sodium: ${poche_industriel.sodium.toFixed(2)} mmol</td>
          <td class="${differences_poche_industriel.sodium >= 0 ? 'positive' : 'negative'}">${differences_poche_industriel.sodium.toFixed(2)} mmol (${pourcentages_poche_industriel.sodium.toFixed(2)} %)</td>
          <td>${correction_Na}</td>
        </tr>
        <tr>
          <td>Potassium: ${poche_industriel.potassium.toFixed(2)} mmol</td>
          <td class="${differences_poche_industriel.potassium >= 0 ? 'positive' : 'negative'}">${differences_poche_industriel.potassium.toFixed(2)} mmol (${pourcentages_poche_industriel.potassium.toFixed(2)} %)</td>
          <td>${correction_K}</td>
        </tr>
        <tr>
          <td>Calcium: ${poche_industriel.calcium.toFixed(2)} mmol</td>
          <td class="${differences_poche_industriel.calcium >= 0 ? 'positive' : 'negative'}">${differences_poche_industriel.calcium.toFixed(2)} mmol (${pourcentages_poche_industriel.calcium.toFixed(2)} %)</td>
          <td>${correction_Ca}</td>
        </tr>
        <tr>
          <td>Magnesium: ${poche_industriel.magnesium.toFixed(2)} mmol</td>
          <td class="${differences_poche_industriel.magnesium >= 0 ? 'positive' : 'negative'}">${differences_poche_industriel.magnesium.toFixed(2)} mmol (${pourcentages_poche_industriel.magnesium.toFixed(2)} %)</td>
          <td>${correction_Mg}</td>
        </tr>
        <tr>
          <td>Phosphore: ${poche_industriel.phosphore.toFixed(2)} mmol</td>
          <td class="${differences_poche_industriel.phosphore >= 0 ? 'positive' : 'negative'}">${differences_poche_industriel.phosphore.toFixed(2)} mmol (${pourcentages_poche_industriel.phosphore.toFixed(2)} %)</td>
          <td>${correction_Ph}</td>
        </tr>
        <!-- Ajoutez d'autres lignes pour les autres paramètres -->
      </table>
    `;

    }

    // Exemple d'appel de la fonction avec les données
    afficherResultats(
      la_poche_choisie_total,
      la_poche_choisie_difference_total,
      poche_choisie_difference_pourcentage,
      sodium_ajout,
      potassium_ajout_phrase,
      calcium_ajout_phrase,
      magnesium_ajout_phrase,
      phosphore_ajout_phrase /*, volume_total_Na, volume_total_Na_K, volume_total_Na_K_Ca, volume_total_Na_K_Ca_Mg*/
    );
  }
  document.getElementById('generate-pdf').addEventListener('click', function () {
            // Options de configuration (facultatif)
            var options = {
                margin: 10,
                filename: 'rapport.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };

            // Éléments à inclure dans le PDF
            var element = document.resultat;

            // Appeler la fonction html2pdf
            html2pdf(element, options);
        });