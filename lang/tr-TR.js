/* eslint-disable prettier/prettier */
export default {
    // ---------------------------
    // NAVIGATION
    MENU: {
        START: 'Başlat',
        BUILDER: 'Karakter Oluşturucu',
        MAP: 'Harita',
        MORE: 'Daha Fazla',
        MORE_DATABASE: '> Veri tabanı',
        MORE_WEAPONS: 'Silahlar',
        MORE_ITEMS: 'Eşyalar',
        MORE_VEHICLES: 'Araçlar',
        MORE_FACTIONS: 'Gruplar',
        MORE_CREATURES: 'Yaratıklar',
        MORE_EQUIPMENT: 'Ekipman',
        CONTACT: 'İletişim',
        OPTIONS_LANG_TITLE: '> Dili Değiştir',
        OPTIONS_EXTRA_TITLE: '> Ekstralar',
        OPTIONS_CHANGELOG: 'Changelog'
    },

    // ---------------------------
    // PAGE: START
    START: {
        HEADLINE_TITLE: 'Topluluk Web Aracları ',
        HEADLINE_DESCRIPTION: 'Zombi Kıyametinde hayatta kalmak için ihtiyacınız olan her şey!'
    },

    // ---------------------------
    // PAGE: CHARACTER-BUILDER
    BUILDER: {
        CARD: {
            OCCUPATION_TITLE: 'Meslek',
            PERK_SELECTION_TITLE: 'Avantaj Seçimi',

            CHARACTER_DATA_TITLE: 'Karakter Verileri',
            CHARACTER_DATA_ATTRIBUTES_TITLE: 'Nitelikler',
            CHARACTER_DATA_ATTRIBUTES_AGILITY: 'Çeviklik',
            CHARACTER_DATA_ATTRIBUTES_CHARISMA: 'Karizma',
            CHARACTER_DATA_ATTRIBUTES_ENDURANCE: 'Dayanıklılık',
            CHARACTER_DATA_ATTRIBUTES_INTELLIGENCE: 'Zeka',
            CHARACTER_DATA_ATTRIBUTES_STRENGTH: 'Kuvvet',
            CHARACTER_DATA_SKILLS_TITLE: 'Yetenekler',
            CHARACTER_DATA_SKILLS_COOKING: 'Aşçılık',
            CHARACTER_DATA_SKILLS_FARMING: 'Çifçilik',
            CHARACTER_DATA_SKILLS_MECHANIC: 'Tamircilik',
            CHARACTER_DATA_SKILLS_CRAFTING: 'Üretim',
            CHARACTER_DATA_SKILLS_LOCKPICKING: 'Kilit Kırma',
            CHARACTER_DATA_SKILLS_MEDICAL: 'Tıbbi',

            PERK_POINTS_DESCRIPTION: 'Karakter tasarımınızı bitirmek için 0 veya daha fazla puana sahip olmalısınız.',
            PERK_POINTS_RESET_BUTTON: 'Sıfırla',
            PERK_POINTS_SAVE_BUTTON: 'Tasarımı Kaydet',
            PERK_POINTS_SAVE_TEXT: 'Karakter tasarımının URL\'si hazır.',
            PERK_POINTS_COPY_CLIPBOARD: 'Panoya kopyala',

            EXTENDED_STATS_BUTTON_OPEN: 'Genişletilmiş İstatistikleri Aç',
            EXTENDED_STATS_BUTTON_CLOSE: 'Genişletilmiş İstatistikleri Kapa',
            EXTENDED_STATS_BUTTON_WIP: '(Yapım Aşamasında)'
        },
        OCCUPATION: {
            UNEMPLOYED_TITLE: 'İşsiz',
            UNEMPLOYED_DESCRIPTION: 'Yetenekli, hızlı öğrenen biriydin ve iş peşinde koşan biriydin.',
            UNEMPLOYED_BENEFIT: 'Sırtınızdaki kıyafetlerle ve yakın dövüş silahıyla doğarsınız.',

            CONSTRUCTION_WORKER_TITLE: 'İnşaat İşçisi',
            CONSTRUCTION_WORKER_DESCRIPTION: 'Sürekli yeni konut projelerinde çalışırdın. Yapı inşa etmeyi seviyorsan bu ideal seçimdir.',
            CONSTRUCTION_WORKER_BENEFIT: 'İş kıyafetin ve yakın dövüş silahıyla doğ.',

            REPAIR_MAN_TITLE: 'Tamirci',
            REPAIR_MAN_DESCRIPTION: 'Bir zamanlar çok çeşitli becerilere sahip bir tamirciydin.',
            REPAIR_MAN_BENEFIT: 'Gündelik kıyafetler ve rastgele bir yakın dövüş silahı ile doğarsın',

            FARMER_TITLE: 'Çiftçi',
            FARMER_DESCRIPTION: 'Dürüst bir yaşam sağlamak asla utanılacak bir şey değildir. Hala herkesin yemeye ihtiyacı var.',
            FARMER_BENEFIT: 'Bazı temel kıyafetler ve hayatta kalma teçhizatı olan küçük bir sırt çantasıyla doğarsın.',

            CHEF_TITLE: 'Şef',
            CHEF_DESCRIPTION: 'Çocukluğundan beri mutfakta vakit geçirmeyi hep sevmişsindir. Şimdi hayatta kalmak için pişirme becerilerini kullanman gerekiyor.',
            CHEF_BENEFIT: 'İş kıyafeti ve bir mutfak bıçağıyla doğarsın.',

            DOCTOR_TITLE: 'Doktor',
            DOCTOR_DESCRIPTION: 'Teoride, hipokrat yemini, toplum dağıldıktan sonra bile geçerlidir. İhtiyacı olanlara yardım etmek için bir görev yemin etmiştin.',
            DOCTOR_BENEFIT: 'İş kıyafetlerinizle, bazı tıbbi malzemelerinizle ve bir yakın dövüş silahıyla doğarsın.',

            FIRE_FIGHTER_TITLE: 'İtfayeci',
            FIRE_FIGHTER_DESCRIPTION: 'Bir zamanlar bir itfaiyeciydin ve salgın sırasında çıkan yangınların çoğuyla cesurca savaştın. Şehirden kurtulan birkaç kişiden birisin.',
            FIRE_FIGHTER_BENEFIT: 'İş kıyafeti ve yangın baltasıyla doğarsın.',

            POLICE_OFFICER_TITLE: 'Polis Memuru',
            POLICE_OFFICER_DESCRIPTION: 'Bir zamanlar yasayı uygulayan bir polistin. Bu artık kanunsuz bir dünyadasın',
            POLICE_OFFICER_BENEFIT: 'El feneri ve beylik tabancanı tamamlayan iş kıyafeti ile yarısından daha az mermisi olan bir şarjörle doğunarsın.',

            SECURITY_GUARD_TITLE: 'Güvenlik Görevlisi',
            SECURITY_GUARD_DESCRIPTION: 'Geceleri hiç iyi uyumamışsın, bu yüzden alışveriş merkezinde güvenlik görevlisi oldun. Güç iyiye gittiğinde kötü bir şey olmayaz.',
            SECURITY_GUARD_BENEFIT: 'Güvenlik görevlisi üniformasıyla ve yakın dövüş silahıyla doğarsın.'
        },

        PERK: {
            CPR_TRAINING_TITLE: 'İlkyardım Eğitimi',
            CPR_TRAINING_DESCRIPTION: 'İlk yardım  uygulayarak insanları bilinçsizlikten çıkarma becerisi kazanın.',
            
            ASTRONOMER_TITLE: 'Astronom',
            ASTRONOMER_DESCRIPTION: 'HUD komut istemi tuşuna basıldığında gece ekranda bir pusula çizer.',
            
            OBSERVANT_TITLE: 'İtaatkâr',
            OBSERVANT_DESCRIPTION: 'HUD komut istemi aktif olan bir oyuncuya bakıldığında avantajlar listelenir.',
            
            HERBALIST_TITLE: 'Bitki Uzmanı',
            HERBALIST_DESCRIPTION: 'Zehirli meyveleri ve mantarları kolayca tanımlamanıza izin verir.',
            
            PEANUT_ALLERGY_TITLE: 'Yer Fıstığı Alerjisi',
            PEANUT_ALLERGY_DESCRIPTION: 'Yer fıstığı içeren yiyecekler tüketildiğinde şiddetli bir alerjik reaksiyonu tetikler. (Epinephrine ile doğar).',
            
            PARANOID_TITLE: 'Paranoyak',
            PARANOID_DESCRIPTION: 'Gerçek olmayan silah seslerini rastgele duyacaksınız.',
            
            UNIVERSAL_RECEIVER_TITLE: 'Genel Alıcı',
            UNIVERSAL_RECEIVER_DESCRIPTION: 'Kan grubunu, hemolitik reaksiyonu tetiklemeden herkesten kan almanıza izin veren AB + \'ya zorlar.',
            
            UNIVERSAL_DONOR_TITLE: 'Genel Verici',
            UNIVERSAL_DONOR_DESCRIPTION: 'Kan grubunu, kan nakline ihtiyaç duyduğunda herkesin alabileceği O- değerine zorlar.',
            
            JOGGER_TITLE: 'Yürüyüşçü',
            JOGGER_DESCRIPTION: 'Sadece eğlenmek için koşmaktan zevk alırdın. +2 çeviklik kazanırsın',
       
            NERD_TITLE: 'İnek',
            NERD_DESCRIPTION: 'Boş zamanlarında çok sayıda video oyunu oynardın. -2 güç kaybedersin.',
            
            CHESS_PLAYER_TITLE: 'Satranç Oyuncusu',
            CHESS_PLAYER_DESCRIPTION: 'Rekabetçi satranç oynardın. +2 zeka kazanırsın.',
            
            PARTY_BOY_TITLE: 'Parti Manyağı',
            PARTY_BOY_DESCRIPTION: 'Çok sık parti yapardın. -2 zeka kaybedersin.',
            
            RUNNER_TITLE: 'Koşucu',
            RUNNER_DESCRIPTION: 'Maraton koşmaktan zevk aldın. + 300s hızlı koşma süresi ve +1 çeviklik kazanırsın.',
            
            STRENGTH_TRAINING_TITLE: 'Kas Geliştirici',
            STRENGTH_TRAINING_DESCRIPTION: 'Hayat amacınız işte değilken ağırlık kaldırma üzerine odaklıdır.+2 güç kazanırsın.',
            
            WEEKEND_BARTENDER_TITLE: 'Haftasonu Barmeni',
            WEEKEND_BARTENDER_DESCRIPTION: 'Hafta sonları bir barmendin, bu sana insan davranışları hakkında bir fikir verdi. +2 karizma kazanırsın.',
            
            WRESTLER_TITLE: 'Güreşçi',
            WRESTLER_DESCRIPTION: 'Gençken bir güreşçiydin, bu senin aşağı indirilmeni oldukça zorlaştırdı. +2 dayanıklılık kazanın.',
            
            AMATEUR_COOK_TITLE: 'Amatör Aşçı',
            AMATEUR_COOK_DESCRIPTION: 'Evde güzel yemekler pişirmeyi seviyorsunuz ve ocağın başına geçmekten korkmuyorsunuz. Yemek pişirme yeteneğin 25 artar.',
            
            AWFUL_COOK_TITLE: 'Rezalet Aşçı',
            AWFUL_COOK_DESCRIPTION: 'Ocakta berbatsın. Yemek pişirme yeteneğin 25 azalır.',
            
            METALWORKER_TITLE: 'Metal İşleme',
            METALWORKER_DESCRIPTION: 'Metal işleme ve çilingirle uğraştınız. Kilit açma yeteneğin 25 artar.',
            
            GREEN_THUMB_TITLE: 'Çiçek Yetiştirme ',
            GREEN_THUMB_DESCRIPTION: 'Bahçeyle uğraşmaktan hoşlanıyorsun. Çiftçilik yeteneğin 25 artar.',
            
            HOBBYIST_TITLE: 'Hobici',
            HOBBYIST_DESCRIPTION: 'Model trenlerle, roketlerle ve her türden farklı aletlerle oynamaktan keyif alıyorsun. Üretme yeteneğin 25 artar.',
            
            GEARHEAD_TITLE: 'Araç Düşkünü',
            GEARHEAD_DESCRIPTION: 'Eski arabaları restore etmek için çok zaman harcıyorsun. Tamirci yeteneğin 25 artar.',
            
            VOLUNTEER_FIRE_FIGHTER_TITLE: 'Gönüllü İtfayeci',
            VOLUNTEER_FIRE_FIGHTER_DESCRIPTION: 'Gençken gönüllü bir itfaiyeciydin. Tıbbi yeteneğin 25 artar.',
            
            BIG_BONED_TITLE: 'Çam Yarması',
            BIG_BONED_DESCRIPTION: 'Çam yarması. Daha fazla uzuv canı ve +750 ml maksimum kan.',
            
            OSTEOPOROSIS_TITLE: 'Kemik Erimesi',
            OSTEOPOROSIS_DESCRIPTION: 'Arttırılmış uzuv hasarı alırsın.',
            
            BRAVE_TITLE: 'Cesur',
            BRAVE_DESCRIPTION: 'Ateş altındayken daha az telaşlanırsın.',
            
            FEARFUL_TITLE: 'Tırsak',
            FEARFUL_DESCRIPTION: 'Ateş altındayken daha fazla telaşlanırsın.',
            
            NO_FEAR_TITLE: 'Korkusuz',
            NO_FEAR_DESCRIPTION: 'Ateş altındayken 80% daha az baskı altında olursun.',
            
            FRIGHTFUL_TITLE: 'Korkak',
            FRIGHTFUL_DESCRIPTION: 'Ateş altındayken 80% daha fazla baskı altında olursun.',
            
            FAST_METABOLISM_TITLE: 'Hızlı Metabolizma',
            FAST_METABOLISM_DESCRIPTION: 'Yiyecekleri 50% daha hızlı sindirir.',
            
            SLOW_METABOLISM_TITLE: 'Yavaş Metabolizma',
            SLOW_METABOLISM_DESCRIPTION: 'Yiyecekleri 50% daha yavaş sindirir.',
            
            IRON_STOMACH_TITLE: 'Sağlam Mide',
            IRON_STOMACH_DESCRIPTION: 'İçerken ve yerken daha az hastalık kapmak',
            
            WEAK_STOMACH_TITLE: 'Hassas Mide',
            WEAK_STOMACH_DESCRIPTION: 'İçerken ve yerken daha fazla hastalık kapmak.',
            
            SILENT_SEARCH_TITLE: 'Sessiz Arama',
            SILENT_SEARCH_DESCRIPTION: 'Bir konteyner ararken %50 daha az gürültü yapmak.',
            
            NOISY_SEARCH_TITLE: 'Gürültülü Arama',
            NOISY_SEARCH_DESCRIPTION: 'Bir konteyner ararken %50 daha fazla gürültü yapmak.',
            
            THICK_SKINNED_TITLE: 'Kalın Derili',
            THICK_SKINNED_DESCRIPTION: 'Yakın dövüş saldırılarından %15 daha az hasar almak.',
            
            THIN_SKINNED_TITLE: 'İnce Derili',
            THIN_SKINNED_DESCRIPTION: 'Yakın dövüş saldırılarından %15 daha fazla hasar almak.',
            
            NIMBLE_FINGERS_TITLE: 'Çevik Parmaklar',
            NIMBLE_FINGERS_DESCRIPTION: 'Arama hızı 50% daha hızlı.',
            
            SAUSAGE_FINGERS_TITLE: 'Tombik Parmaklar',
            SAUSAGE_FINGERS_DESCRIPTION: 'Arama hızı 50% daha yavaş.',
            
            HEAVY_WEIGHT_TITLE: 'Alkole Dirençli',
            HEAVY_WEIGHT_DESCRIPTION: 'Çok daha az sarhoş olmak.',
            
            LIGHT_WEIGHT_TITLE: 'Alkole Dirençsiz',
            LIGHT_WEIGHT_DESCRIPTION: 'Çok fazla alkol içmenin etkisi arttırılmıştır. Etkilerin başladığı düşük alkol direnci.',
            
            LIGTH_STEP_TITLE: 'Sessiz Adım',
            LIGTH_STEP_DESCRIPTION: 'Ayak sesleri %30 daha sessiz.',
            
            HEAVY_STEP_TITLE: 'Gürültülü Adım',
            HEAVY_STEP_DESCRIPTION: 'Ayak sesleri %30 daha yüksek.'            
        }
    }
};
