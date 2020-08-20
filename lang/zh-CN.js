/* eslint-disable prettier/prettier */
export default {
    // Navigation
    MENU: {
        START: '开始',
        BUILDER: '角色技能模拟',
        MAP: '地图',
        MORE: '更多',
        MORE_WEAPONS: '武器',
        MORE_ITEMS: '物品',
        MORE_VEHICLES: '车辆',
        MORE_FACTIONS: '派系',
        MORE_CREATURES: '生物',
        CONTACT: '联系我',
        OPTIONS_LANG_TITLE: '> 更改语言',
        OPTIONS_EXTRA_TITLE: '> 其他'
    },

    // PAGE: START
    START: {
        HEADLINE_TITLE: '社区网页工具',
        HEADLINE_DESCRIPTION: '这里就有你在末日中生存所需要的一切！'
    },

    // PAGE: CHARACTER-BUILDER
    BUILDER: {
        CARD: {
            OCCUPATION_TITLE: '职业',
            PERK_SELECTION_TITLE: '技能选择',

            CHARACTER_DATA_TITLE: '人物数据',
            CHARACTER_DATA_ATTRIBUTES_TITLE: '属性',
            CHARACTER_DATA_ATTRIBUTES_AGILITY: '敏捷',
            CHARACTER_DATA_ATTRIBUTES_CHARISMA: '魅力',
            CHARACTER_DATA_ATTRIBUTES_ENDURANCE: '耐力',
            CHARACTER_DATA_ATTRIBUTES_INTELLIGENCE: '智力',
            CHARACTER_DATA_ATTRIBUTES_STRENGTH: '力量',
            CHARACTER_DATA_SKILLS_TITLE: '技能',
            CHARACTER_DATA_SKILLS_COOKING: '烹饪',
            CHARACTER_DATA_SKILLS_FARMING: '园艺',
            CHARACTER_DATA_SKILLS_MECHANIC: '机械',
            CHARACTER_DATA_SKILLS_CRAFTING: '制作',
            CHARACTER_DATA_SKILLS_LOCKPICKING: '撬锁',
            CHARACTER_DATA_SKILLS_MEDICAL: '医疗',

            PERK_POINTS_DESCRIPTION: '您需要有0或者更多的点数才能完成人物创建。',
            PERK_POINTS_RESET_BUTTON: '重置',
            PERK_POINTS_SAVE_BUTTON: '保存',
            PERK_POINTS_SAVE_TEXT: '您的角色构建网址已准备好。',
            PERK_POINTS_COPY_CLIPBOARD: '复制到剪贴板',

            EXTENDED_STATS_BUTTON_OPEN: '打开扩展统计',
            EXTENDED_STATS_BUTTON_CLOSE: '关闭扩展统计',
            EXTENDED_STATS_BUTTON_WIP: '(正在加紧施工中)'
        },
        OCCUPATION: {
            UNEMPLOYED_TITLE: '无业游民',
            UNEMPLOYED_DESCRIPTION: '你天赋异禀，学习迅速，决定不找工作了。',
            UNEMPLOYED_BENEFIT: '重生时带有近战武器以及一套服装。',

            CONSTRUCTION_WORKER_TITLE: '建筑工人',
            CONSTRUCTION_WORKER_DESCRIPTION: '你过去一直在工地干活从事住房项目。如果你喜欢建造，这就是不二之选。',
            CONSTRUCTION_WORKER_BENEFIT: '重生时穿着工作服以及带有近战武器。',

            REPAIR_MAN_TITLE: '修理工',
            REPAIR_MAN_DESCRIPTION: '你曾经是一名修理工，有广泛修理技能的那种。',
            REPAIR_MAN_BENEFIT: '重生时穿着休闲服装以及随机的近战武器',

            FARMER_TITLE: '农民',
            FARMER_DESCRIPTION: '过着诚实的生活没什么羞耻的，毕竟人总要恰饭的嘛。',
            FARMER_BENEFIT: '重生时穿着一些简单的衣服和一个装着求生装备的小背包。',

            CHEF_TITLE: '厨师',
            CHEF_DESCRIPTION: '自小的时候，你就喜欢在厨房里面过日子。现在你需要用你的烹饪技巧， 来度过这段“难忘时光”。',
            CHEF_BENEFIT: '重生时穿着工作服，带着一把菜刀',

            DOCTOR_TITLE: '医生',
            DOCTOR_DESCRIPTION: '理论上来说，即使社会崩溃，希波克拉底誓言仍然适用。而且你曾经发誓要帮助那些有需要的人。',
            DOCTOR_BENEFIT: '重生时穿着工作服，带着一些医疗用品，以及近战武器。',

            FIRE_FIGHTER_TITLE: '消防员',
            FIRE_FIGHTER_DESCRIPTION: '你曾经是一名消防员，勇敢地与疫情爆发期间发生的许多火灾作斗争。 你是该市仅存的少数幸存者之一。',
            FIRE_FIGHTER_BENEFIT: '重生时穿着工作服以及带着一把消防斧。',

            POLICE_OFFICER_TITLE: '警察',
            POLICE_OFFICER_DESCRIPTION: '你是一名警察，曾经是，而现在是一个无法无天的世界。',
            POLICE_OFFICER_BENEFIT: '重生时穿着警服，随身配备手电以及一把剩下不到半个弹匣子弹的警用手枪。',

            SECURITY_GUARD_TITLE: '保安',
            SECURITY_GUARD_DESCRIPTION: '你是一个夜猫子，所以你成为了商场的保安员。一旦永远没电了，对你来说可能不是一件坏事。',
            SECURITY_GUARD_BENEFIT: '重生时穿着保安工作服，以及近战武器'
        },

        PERK: {
            CPR_TRAINING_TITLE: '心肺复苏',
            CPR_TRAINING_DESCRIPTION: '通过执行心肺复苏，使人摆脱昏迷状态。',
            
            ASTRONOMER_TITLE: '天文学家',
            ASTRONOMER_DESCRIPTION: '在晚上时按下HUD提示键，会在屏幕上绘制出指南针。',
            
            OBSERVANT_TITLE: '细心观察者',
            OBSERVANT_DESCRIPTION: '当在HUD提示处于活动状态时观察玩家，会列出该玩家所拥有的技能。',
            
            HERBALIST_TITLE: '草药学者',
            HERBALIST_DESCRIPTION: '让你轻易地辨别出有毒的浆果以及蘑菇。',
            
            PEANUT_ALLERGY_TITLE: '花生过敏',
            PEANUT_ALLERGY_DESCRIPTION: '当食用带有花生的食物时会触发严重的过敏反应。（选择此特征重生时将会带有一针肾上腺素）',
            
            PARANOID_TITLE: '妄想狂',
            PARANOID_DESCRIPTION: '会随机听到并不是真实存在的枪声。',
            
            UNIVERSAL_RECEIVER_TITLE: '万能受血者',
            UNIVERSAL_RECEIVER_DESCRIPTION: '人物血型强制为AB+，使得你接受任何人的血液而无溶血反应。',
            
            UNIVERSAL_DONOR_TITLE: '万能输血者',
            UNIVERSAL_DONOR_DESCRIPTION: '人物血型强制为O-，使得你可以输血给任何人。',
            
            JOGGER_TITLE: '慢跑爱好者',
            JOGGER_DESCRIPTION: '你过去经常只是为了好玩而跑步。敏捷+2',
       
            NERD_TITLE: '呆子',
            NERD_DESCRIPTION: '你过去经常在闲暇时间打电动。力量-2',
            
            CHESS_PLAYER_TITLE: '棋手',
            CHESS_PLAYER_DESCRIPTION: '你过去经常参加象棋比赛。智力+2',
            
            PARTY_BOY_TITLE: '派对boy',
            PARTY_BOY_DESCRIPTION: '你过去经常开派对，很多派对。智力-2',
            
            RUNNER_TITLE: '跑者',
            RUNNER_DESCRIPTION: '你曾经喜欢跑马拉松。冲刺时间+300秒，敏捷+1',
            
            STRENGTH_TRAINING_TITLE: '健身狂魔',
            STRENGTH_TRAINING_DESCRIPTION: '你不在上班的时候，就在去搞卧推/深蹲/...的路上。力量+2',
            
            WEEKEND_BARTENDER_TITLE: '周末酒保',
            WEEKEND_BARTENDER_DESCRIPTION: '你在过去的每个周末都会摇身一变成为酒保，这让你更为了解人类的行为。魅力+2',
            
            WRESTLER_TITLE: '摔跤手',
            WRESTLER_DESCRIPTION: '你年轻的时候曾是一名摔跤手，这让你看起来很难被干趴下。力量+2',
            
            AMATEUR_COOK_TITLE: '业余厨师',
            AMATEUR_COOK_DESCRIPTION: '你喜欢在家做一些精美的菜肴。烹饪技术+25',
            
            AWFUL_COOK_TITLE: '糟糕厨师',
            AWFUL_COOK_DESCRIPTION: '...你还是别做饭了。烹饪技术-25',
            
            METALWORKER_TITLE: '金工大师',
            METALWORKER_DESCRIPTION: '你经常对金属进行加工以及操作开锁。撬锁技术+25',
            
            GREEN_THUMB_TITLE: '园艺天赋',
            GREEN_THUMB_DESCRIPTION: '你享受园艺。农业技术+25.',
            
            HOBBYIST_TITLE: '业余爱好者',
            HOBBYIST_DESCRIPTION: '你喜欢模型火车，火箭和各种不同的小玩意。制作技能+25',
            
            GEARHEAD_TITLE: '老爷车爱好者',
            GEARHEAD_DESCRIPTION: '你曾花了很多时间修复老爷车。机械技能+25',
            
            VOLUNTEER_FIRE_FIGHTER_TITLE: '志愿消防员',
            VOLUNTEER_FIRE_FIGHTER_DESCRIPTION: '你年轻点的时候曾是一名志愿消防员。医疗技能+25',
            
            BIG_BONED_TITLE: '大块头',
            BIG_BONED_DESCRIPTION: '块头老大了。更多的肢体生命值，血量+750ml',
            
            OSTEOPOROSIS_TITLE: '骨质疏松',
            OSTEOPOROSIS_DESCRIPTION: '肢体受到的伤害会增加。',
            
            BRAVE_TITLE: '勇敢的',
            BRAVE_DESCRIPTION: '遭到攻击时会受到较小的压制效果。',
            
            FEARFUL_TITLE: '胆小的',
            FEARFUL_DESCRIPTION: '遭到攻击时会受到稍多的压制效果。',
            
            NO_FEAR_TITLE: '老子不怕',
            NO_FEAR_DESCRIPTION: '怕是不可能怕的，这辈子都不可能怕的。遭到攻击时的压制效果-80%。',
            
            FRIGHTFUL_TITLE: '怕死了都',
            FRIGHTFUL_DESCRIPTION: '我柜子动了我不玩了。遭到攻击时的压制效果+80%。',
            
            FAST_METABOLISM_TITLE: '快速代谢',
            FAST_METABOLISM_DESCRIPTION: '加快食物新陈代谢50%。',
            
            SLOW_METABOLISM_TITLE: '龟速代谢',
            SLOW_METABOLISM_DESCRIPTION: '减缓食物新陈代谢50%。',
            
            IRON_STOMACH_TITLE: '铁打的胃',
            IRON_STOMACH_DESCRIPTION: '喝东西和进食时生病的频率降低。',
            
            WEAK_STOMACH_TITLE: '纸做的胃',
            WEAK_STOMACH_DESCRIPTION: '喝东西和进食时生病的频率提高。',
            
            SILENT_SEARCH_TITLE: '安静舔包',
            SILENT_SEARCH_DESCRIPTION: '搜索容器时声音降低50%。',
            
            NOISY_SEARCH_TITLE: '大声舔包',
            NOISY_SEARCH_DESCRIPTION: '搜索容器时声音提高50%。',
            
            THICK_SKINNED_TITLE: '厚皮选手',
            THICK_SKINNED_DESCRIPTION: '被近战武器攻击时，受到的伤害-15%。.',
            
            THIN_SKINNED_TITLE: '薄皮选手',
            THIN_SKINNED_DESCRIPTION: '被近战武器攻击时，受到的伤害+15%。',
            
            NIMBLE_FINGERS_TITLE: '灵活的手指',
            NIMBLE_FINGERS_DESCRIPTION: '搜索容器时速度加快50%',
            
            SAUSAGE_FINGERS_TITLE: '笨拙的手指',
            SAUSAGE_FINGERS_DESCRIPTION: '搜索容器时速度减缓50%',
            
            HEAVY_WEIGHT_TITLE: '千杯不醉',
            HEAVY_WEIGHT_DESCRIPTION: '你更难喝醉。',
            
            LIGHT_WEIGHT_TITLE: '一杯就倒',
            LIGHT_WEIGHT_DESCRIPTION: '喝醉后的影响将会被放大。酒量是真不行。',
            
            LIGTH_STEP_TITLE: '步履轻盈',
            LIGTH_STEP_DESCRIPTION: '你的脚步声更小，脚步音量-30%。',
            
            HEAVY_STEP_TITLE: '步履沉重',
            HEAVY_STEP_DESCRIPTION: '你的脚步声更小，脚步音量+30%。'            
        }
    }
};
