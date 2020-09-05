/* eslint-disable prettier/prettier */
export default {
    // ---------------------------
    // NAVIGATION
    MENU: {
        START: 'Commencer',
        BUILDER: 'Création de personnage',
        MAP: 'Carte',
        MORE: 'Plus',
        DATABASE: 'Base de Donnée',
        CONTACT: 'Contact',
        OPTIONS_EXTRA_TITLE: '> Extras',
        OPTIONS_CHANGELOG: 'Changelog'
    },

    // ---------------------------
    // PAGE: START
    START: {
        HEADLINE_TITLE: 'Outils web Communautaire',
        HEADLINE_DESCRIPTION: 'Tout ce dont vous avez besoin pour survivre à une apocalypse zombie.'
    },

    // ---------------------------
    // PAGE: CHARACTER-BUILDER
    BUILDER: {
        CARD: {
            PERK_POINTS: 'Perk Points',

            OCCUPATION_TITLE: 'Occupation',
            OCCUPATION_BENEFIT: 'Benefit',

            PERK_SELECTION_TITLE: "Sélection d'atout",
            PERK_SELECTION_COST: 'Cost',
            PERK_SELECTION_TRAIT: 'Trait',
            PERK_SELECTION_HOBBY: 'Hobby',
            PERK_SELECTION_SKILL: 'Skill',
            PERK_SELECTION_STAT: 'Stat',

            CHARACTER_DATA_TITLE: 'Données du personnage',
            CHARACTER_DATA_ATTRIBUTES_TITLE: 'Atout',
            CHARACTER_DATA_ATTRIBUTES_AGILITY: 'Agilitée',
            CHARACTER_DATA_ATTRIBUTES_CHARISMA: 'Charisme',
            CHARACTER_DATA_ATTRIBUTES_ENDURANCE: 'Endurance',
            CHARACTER_DATA_ATTRIBUTES_INTELLIGENCE: 'Intelligence',
            CHARACTER_DATA_ATTRIBUTES_STRENGTH: 'Force',
            CHARACTER_DATA_SKILLS_TITLE: 'Compétences',
            CHARACTER_DATA_SKILLS_COOKING: 'Cuisine',
            CHARACTER_DATA_SKILLS_FARMING: 'Agriculture',
            CHARACTER_DATA_SKILLS_MECHANIC: 'Mécanique',
            CHARACTER_DATA_SKILLS_CRAFTING: 'Artisanat',
            CHARACTER_DATA_SKILLS_LOCKPICKING: 'Crochetage',
            CHARACTER_DATA_SKILLS_MEDICAL: 'Médical',

            PERK_POINTS_DESCRIPTION: 'Vous devez avoir 0 points ou plus pour terminer la création du personnage..',
            PERK_POINTS_RESET_BUTTON: 'Reset',
            PERK_POINTS_SAVE_BUTTON: 'Sauvegarder le personnage',
            PERK_POINTS_SAVE_TEXT: 'L\'url du personnage est près.',
            PERK_POINTS_COPY_CLIPBOARD: 'Copier dans le presse papier',

            EXTENDED_STATS_BUTTON_OPEN: 'Ouvrir les statistiques étendues.',
            EXTENDED_STATS_BUTTON_CLOSE: 'Fermé les statistiques étendues.',
            EXTENDED_STATS_BUTTON_WIP: '(En cours de consctruction)'
        },
        OCCUPATION: {
            UNEMPLOYED_TITLE: 'Sans emploi',
            UNEMPLOYED_DESCRIPTION: 'Vous étiez un étudiant rapide et talentueux. Vous avez décidé de ne pas chercher un emploi.',
            UNEMPLOYED_BENEFIT: 'Vous apparaissez avec vos vêtements et une arme de mêlée.',

            CONSTRUCTION_WORKER_TITLE: 'Ouvrier du bâtiment',
            CONSTRUCTION_WORKER_DESCRIPTION: 'Vous aviez l\'habitude de tout le temps travailler sur de nouveaux projets dans le bâtiment. C\'est le choix idéal si vous aimez construire des structures.',
            CONSTRUCTION_WORKER_BENEFIT: 'Vous apparaissez avec votre tenue de travail et une arme de mêlée.',

            REPAIR_MAN_TITLE: 'Bricoleur',
            REPAIR_MAN_DESCRIPTION: 'Vous étiez autrefois un bricoleur avec une grande variété de compétences.',
            REPAIR_MAN_BENEFIT: 'Vous apparaissez avec une tenue décontractée et une arme de mêlée.',

            FARMER_TITLE: 'Fermier',
            FARMER_DESCRIPTION: 'Gagner honnêtement sa vie n\'est jamais quelque chose dont il faut avoir honte. Tout le monde a encore besoin de manger.',
            FARMER_BENEFIT: 'Vous apparaissez avec des vêtements basiques et un petit sac à dos avec du matériel de survie.',

            CHEF_TITLE: 'Chef Cuisinier',
            CHEF_DESCRIPTION: 'Vous avez toujours aimé passer du temps dans la cuisine, depuis votre enfance. Vous devez maintenant utilisez vos compétences culinaires pour survivre.',
            CHEF_BENEFIT: 'Vous apparaissez avec votre tenue de travail et un couteau de cuisine.',

            DOCTOR_TITLE: 'Docteur',
            DOCTOR_DESCRIPTION: 'En théorie, le serment d\'Hippocrate s\'applique toujours même après l\'effondrement de la société. Vous avez jadis juré d\'aider ceux qui en ont besoin.',
            DOCTOR_BENEFIT: 'Vous apparaissez avec votre tenue de travail, des fournitures médicales,  et une arme de mêlée.',

            FIRE_FIGHTER_TITLE: 'Pompier',
            FIRE_FIGHTER_DESCRIPTION: 'Vous étiez autrefois pompier, combattant courageusement de nombreux incendies qui se sont déclarés durant l\'épidémie. Vous êtes l\'un des rare survivants de la ville.',
            FIRE_FIGHTER_BENEFIT: 'Vous apparaissez avec votre tenue de travail et une hache de pompier.',

            POLICE_OFFICER_TITLE: 'Officier de Police',
            POLICE_OFFICER_DESCRIPTION: 'Vous étiez un agent de police, vous appliquiez la loi. Maintenant vous êtes dans un monde sans loi.',
            POLICE_OFFICER_BENEFIT: 'Vous apparaissez avec votre tenue de travail, une lampe de poche, et un pistolet de service et quelques cartouches.',

            SECURITY_GUARD_TITLE: 'Garde de Sécurité',
            SECURITY_GUARD_DESCRIPTION: 'Vous n\'avez jamais vraiment bien dormi la nuit, alors vous êtes devenu gardien de sécurité au centre commercial. Ce ne sera peut-être pas une mauvaise chose une fois le courant coupé pour de bon.',
            SECURITY_GUARD_BENEFIT: 'Vous apparaissez avec votre tenue de sécurité et une arme de mêlée.'
        },

        PERK: {
            CPR_TRAINING_TITLE: 'Réanimation cardiopulmonaire',
            CPR_TRAINING_DESCRIPTION: 'Acquérir la capacité de sortir des personnes de l\'inconscience en pratiquant un massage cardiopulmonaire.',
            
            ASTRONOMER_TITLE: 'Astronome',
            ASTRONOMER_DESCRIPTION: 'Affiche une boussole sur l\'écran la nuit en appuyant sur la touche d\'affichage de l\'ATH : Affichage Tête Haute',
            
            OBSERVANT_TITLE: 'Observateur',
            OBSERVANT_DESCRIPTION: 'Les avantages des autres joueurs sont répertoriés lorsque vous les regardez avec l \'ATH (Affichage Tête Haute) actif',
            
            HERBALIST_TITLE: 'Herboriste',
            HERBALIST_DESCRIPTION: 'Vous permet d\'identifier facilement les baies et les champignons vénéneux.',
            
            PEANUT_ALLERGY_TITLE: 'Allergique aux arachides',
            PEANUT_ALLERGY_DESCRIPTION: 'Déclenche une réaction allergique grave lorsque vous consommez des aliments contenant des arachides. (Vous apparaissez avec un epi-pen).',
            
            PARANOID_TITLE: 'Paranoïaque',
            PARANOID_DESCRIPTION: 'Vous entendez au hasard des coups de feu qui ne sont pas réels.',
            
            UNIVERSAL_RECEIVER_TITLE: 'Receveur Universel',
            UNIVERSAL_RECEIVER_DESCRIPTION: 'Force le groupe sanguin sur AB+, ce qui vous permet de recevoir du sang de n\'importe qui sans déclencher de réaction hémolytique.',
            
            UNIVERSAL_DONOR_TITLE: 'Donneur Universel',
            UNIVERSAL_DONOR_DESCRIPTION: 'Force le groupe sanguin sur O-, ce qui vous permet de donner du sang à n\'importe qui.',
            
            JOGGER_TITLE: 'Joggeur',
            JOGGER_DESCRIPTION: 'Vous aimiez courir quand c\'était juste pour vous amuser. Gagnez +2 en agilité.',
       
            NERD_TITLE: 'Geek',
            NERD_DESCRIPTION: 'Vous aviez l\'habitude de jouer à beaucoup de jeux vidéo pendant votre temps libre. Vous perdez -2 en force.',
            
            CHESS_PLAYER_TITLE: 'Joueur d\'échec',
            CHESS_PLAYER_DESCRIPTION: 'Vous aviez l\'habitude de jouer aux échecs en compétition. Vous Gagnez +2 en intelligence.',
            
            PARTY_BOY_TITLE: 'Fêtard',
            PARTY_BOY_DESCRIPTION: 'Vous aviez l\'habitude de faire la fête. Vous perdez -2 en intelligence. ',
            
            RUNNER_TITLE: 'Coureur',
            RUNNER_DESCRIPTION: 'Vous aimiez courir des marathons. Vous gagnez +300s de temps de sprint et +1 en agilité.',
            
            STRENGTH_TRAINING_TITLE: 'Musculation',
            STRENGTH_TRAINING_DESCRIPTION: 'Votre vie s\'oriente autour du levage de poids lorsque vous n\'êtes pas au travail. Vous gagnez +2 en force.',
            
            WEEKEND_BARTENDER_TITLE: 'Barman du week-end',
            WEEKEND_BARTENDER_DESCRIPTION: 'Vous étiez barman le weekend, cela vous a donné un aperçu du comportement humain. Vous gagnez +2 en charisme.',
           
            WRESTLER_TITLE: 'Lutteur',
            WRESTLER_DESCRIPTION: 'Vous étiez lutteur quand vous étiez plus jeune, cela vous rendait assez difficile à mettre au sol. Vous gagnez +2 en endurance.',
            
            AMATEUR_COOK_TITLE: 'Cuisinier amateur',
            AMATEUR_COOK_DESCRIPTION: 'Vous aimiez cuisiner des plats raffinés à la maison, et vous n\'avez pas peur de vous retrouver derrière les fourneaux. Vous gagnez +25 en cuisine.',
            
            AWFUL_COOK_TITLE: 'Mauvais cuisinier',
            AWFUL_COOK_DESCRIPTION: 'Vous êtes nul au fourneaux. Vous recevez une pénalité de -25 en cuisine.',
            
            METALWORKER_TITLE: 'Travail du métal',
            METALWORKER_DESCRIPTION: 'Vous aviez l\'habitude de travailler avec le métal et les serrures. Vous gagnez +25 en crochetage.',
            
            GREEN_THUMB_TITLE: 'Mains vertes',
            GREEN_THUMB_DESCRIPTION: 'Vous aimez le jardinage. Gagnez un bonus de +25 en agriculture.',
            
            HOBBYIST_TITLE: 'Bricoleur amateur',
            HOBBYIST_DESCRIPTION: 'Vous aimiez les trains miniatures, jouer avec des fusées et pleins de gadgets différents. Vous gagnez +25 en artisanat.',
            
            GEARHEAD_TITLE: 'Mécanicien amateur',
            GEARHEAD_DESCRIPTION: 'Vous passiez beaucoup de temps à restaurer de vieilles voitures. Vous gagnez +25 en mécanique.',
            
            VOLUNTEER_FIRE_FIGHTER_TITLE: 'Pompier volontaire',
            VOLUNTEER_FIRE_FIGHTER_DESCRIPTION: 'Vous étiez pompier volontaire quand vous étiez plus jeune. Vous gagnez +25 en soin médical.',
            
            BIG_BONED_TITLE: 'Gros Os',
            BIG_BONED_DESCRIPTION: 'Vous gagnez plus de santé pour chaque membre et +750ml de sang Max.',
            
            OSTEOPOROSIS_TITLE: 'Ostéoporose',
            OSTEOPOROSIS_DESCRIPTION: 'Vous subissez les dégâts plus fortement.',
            
            BRAVE_TITLE: 'Courageux',
            BRAVE_DESCRIPTION: 'Moins de dégâts lorsque vous vous faites tirer dessus.',
            
            FEARFUL_TITLE: 'Craintif',
            FEARFUL_DESCRIPTION: 'Vous prenez plus de dégâts lorsque vous vous faites tirer dessus.',
            
            NO_FEAR_TITLE: 'Sans peur',
            NO_FEAR_DESCRIPTION: 'Vous avez tout vu. Vous ne craignez pas la mort. -80% sur les effets de suppression lorsque vous vous faites tirer dessus.',
            
            FRIGHTFUL_TITLE: 'Effrayé',
            FRIGHTFUL_DESCRIPTION: '+80% sur les effets de suppression lorsque vous vous faites tirer dessus.',
            
            FAST_METABOLISM_TITLE: 'Métabolisme rapide',
            FAST_METABOLISM_DESCRIPTION: 'Vous digérez les aliments 50% plus rapidement.',
            
            SLOW_METABOLISM_TITLE: 'Métabolisme lent',
            SLOW_METABOLISM_DESCRIPTION: 'Vous digérez les aliments 50% plus lentement.',
            
            IRON_STOMACH_TITLE: 'Estomac de fer',
            IRON_STOMACH_DESCRIPTION: 'Vous serez malade moins souvent en buvant et mangeant.',
            
            WEAK_STOMACH_TITLE: 'Estomac faible',
            WEAK_STOMACH_DESCRIPTION: 'Vous serez malade plus souvent en buvant et mangeant.',
            
            SILENT_SEARCH_TITLE: 'Recherche silencieuse',
            SILENT_SEARCH_DESCRIPTION: 'Faites 50% de bruit en moins lors de la recherche dans un conteneur.',
            
            NOISY_SEARCH_TITLE: 'Recherche bruyante',
            NOISY_SEARCH_DESCRIPTION: 'Faites 50% de bruit en plus lors de la recherche dans un conteneur.',
            
            THICK_SKINNED_TITLE: 'Peau épaisse',
            THICK_SKINNED_DESCRIPTION: 'Vous résistez de 15% en plus aux attaques de mêlée.',
            
            THIN_SKINNED_TITLE: 'Peau fine',
            THIN_SKINNED_DESCRIPTION: 'Vous résistez de 15% en moins aux attaques de mêlée.',
            
            NIMBLE_FINGERS_TITLE: 'Doigts agiles',
            NIMBLE_FINGERS_DESCRIPTION: 'Vous recherchez dans les conteneurs 50% plus vite.',
            
            SAUSAGE_FINGERS_TITLE: 'Doigts engourdis',
            SAUSAGE_FINGERS_DESCRIPTION: 'Vous recherchez dans les conteneurs 50% plus lentement.',
            
            HEAVY_WEIGHT_TITLE: 'Poids lourd',
            HEAVY_WEIGHT_DESCRIPTION: 'Vous pouvez boire beaucoup plus avant d\'être saoul. ',
            
            LIGHT_WEIGHT_TITLE: 'Poids léger',
            LIGHT_WEIGHT_DESCRIPTION: 'Vous êtes plus rapidement saoul en buvant de l\'alcool.',
            
            LIGTH_STEP_TITLE: 'Pas léger',
            LIGTH_STEP_DESCRIPTION: 'Vos pas sont 30% plus silencieux.',
            
            HEAVY_STEP_TITLE: 'Pas lourd',
            HEAVY_STEP_DESCRIPTION: 'Vos pas sont 30% plus bruyant.'            
        }
    }
};
