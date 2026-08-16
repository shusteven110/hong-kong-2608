import { Day } from './types';

export const itineraryData: Day[] = [
  {
    date: '8/28 (五)',
    title: '台灣出發 ➔ 飛抵香港 ➔ 入住灣仔 ➔ 宵夜散策',
    activities: [
      { 
        time: '13:00 - 13:50', 
        title: '自駕開車出發前往桃園機場周邊。', 
        type: 'transport' 
      },
      { 
        time: '14:00 - 14:15', 
        title: '抵達大漁停車場', 
        description: '辦理入場登記（免留鑰匙），搭乘專車接駁至桃園機場第一航廈。', 
        type: 'transport',
        locations: [
          { name: '大漁停車場 (桃園市大園區平安路116號旁)', url: 'https://www.google.com/maps/search/?api=1&query=%E6%A1%83%E5%9C%92%E5%B8%82%E5%A4%A7%E5%9C%92%E5%8D%80%E5%B9%B3%E5%AE%89%E8%B7%AF116%E8%99%9F+%E5%A4%A7%E6%BC%8 need+%E5%81%9C%E8%BB%8A%E5%A0%B4'.replace('%20need', '') }
        ]
      },
      { 
        time: '14:20 - 15:30', 
        title: '抵達桃機第一航廈', 
        description: '於香港快運航空櫃檯辦理登機報到與行李托運。', 
        type: 'transport',
        locations: [
          { name: '桃園國際機場第一航廈', url: 'https://www.google.com/maps/search/?api=1&query=%E6%A1%83%E5%9C%92%E5%9C%8B%E9%9A%9B%E6%A9%9F%E5%A0%B4%E7%AC%AC%E4%B8%80%E8%88%AA%E5%BB%88' }
        ]
      },
      { 
        time: '15:30 - 17:00', 
        title: '安檢與出境證照查驗', 
        description: '通過安檢與出境證照查驗，前往登機門候機。', 
        type: 'transport' 
      },
      { 
        time: '17:10 - 17:40', 
        title: '登機 (UO115)', 
        description: '搭乘香港快運 UO115 起飛。', 
        type: 'transport' 
      },
      { 
        time: '17:40 - 19:35', 
        title: '飛行中', 
        description: '預計 19:35 降落香港國際機場。', 
        type: 'transport' 
      },
      { 
        time: '19:35 - 20:30', 
        title: '入境香港', 
        description: '辦理入境通關、提領行李。', 
        type: 'transport',
        locations: [
          { name: '香港國際機場 HKG', url: 'https://www.google.com/maps/search/?api=1&query=Hong+Kong+International+Airport' }
        ]
      },
      { 
        time: '20:35 - 21:10', 
        title: '通勤至灣仔', 
        description: '搭乘機場快綫直達終點「香港站」（24 分鐘）。經站內地下通道步行至「中環站」，轉乘港島綫（往柴灣方向）搭 2 站至「灣仔站」。', 
        type: 'transport',
        locations: [
          { name: '港鐵 香港站 (機場快綫)', url: 'https://www.google.com/maps/search/?api=1&query=MTR+Hong+Kong+Station' },
          { name: '港鐵 灣仔站', url: 'https://www.google.com/maps/search/?api=1&query=MTR+Wan+Chai+Station' }
        ]
      },
      { 
        time: '21:10 - 21:30', 
        title: '辦理入住：合和酒店 (Hopewell Hotel)', 
        description: '灣仔站 A3 出口出站，沿柯布連道步行約 6～8 分鐘抵達合和酒店辦理入住放行李。', 
        type: 'accommodation',
        locations: [
          { name: '合和酒店 Hopewell Hotel (灣仔皇后大道東183號)', url: 'https://www.google.com/maps/search/?api=1&query=Hopewell+Hotel+Wan+Chai' }
        ]
      },
      { 
        time: '21:30 - 23:00', 
        title: '港式宵夜', 
        description: '飯店周邊享用港式宵夜（華星冰室、在地燒味或茶餐廳），回飯店休息。', 
        type: 'food',
        locations: [
          { name: '華星冰室 灣仔店 (克街6號廣生行大廈)', url: 'https://www.google.com/maps/search/?api=1&query=Capital+Caf%C3%A9+Wan+Chai' }
        ]
      },
    ],
  },
  {
    date: '8/29 (六)',
    title: 'MOKO 吉伊卡哇 ➔ 旺角潮流動漫 ➔ 中環 Sanrioworld+ 旗艦店 ➔ 維港夜景',
    activities: [
      { 
        time: '08:30 - 09:15', 
        title: '港式早餐', 
        description: '飯店周邊享用港式早餐（金鳳茶餐廳或翠華）。', 
        type: 'food',
        locations: [
          { name: '金鳳茶餐廳 (灣仔春園街41號)', url: 'https://www.google.com/maps/search/?api=1&query=Kam+Fung+Restaurant+Wan+Chai' },
          { name: '翠華餐廳 灣仔店', url: 'https://www.google.com/maps/search/?api=1&query=Tsui+Wah+Restaurant+Wan+Chai' }
        ]
      },
      { 
        time: '09:15 - 09:45', 
        title: '通勤至旺角東', 
        description: '從港鐵「灣仔站」搭港島綫至「金鐘站」，轉乘東鐵綫（往羅湖/落馬洲方向）搭 2 站直達「旺角東站」。出站：D 出口直通商場。', 
        type: 'transport',
        locations: [
          { name: '港鐵 旺角東站 (D出口直通MOKO)', url: 'https://www.google.com/maps/search/?api=1&query=MTR+Mong+Kok+East+Station' }
        ]
      },
      { 
        time: '09:45 - 10:00', 
        title: '抵達會場', 
        description: '抵達 MOKO 新世紀廣場會場準備入場。', 
        type: 'activity',
        locations: [
          { name: 'MOKO 新世紀廣場 (旺角太子道西193號)', url: 'https://www.google.com/maps/search/?api=1&query=MOKO+Grand+Century+Place+Mong+Kok' }
        ]
      },
      { 
        time: '10:00 - 12:30', 
        title: '【吉伊卡哇 Chiikawa 活動】', 
        description: '拍照打卡、逛展、選購限定周邊商品。', 
        type: 'shopping',
        locations: [
          { name: 'MOKO 新世紀廣場 活動展區', url: 'https://www.google.com/maps/search/?api=1&query=MOKO+Grand+Century+Place+Mong+Kok' }
        ]
      },
      { 
        time: '12:30 - 13:45', 
        title: '午餐', 
        description: '於 MOKO 新世紀廣場內餐廳享用午餐。', 
        type: 'food',
        locations: [
          { name: 'MOKO 美食商場', url: 'https://www.google.com/maps/search/?api=1&query=MOKO+Grand+Century+Place+Mong+Kok' }
        ]
      },
      { 
        time: '13:45 - 15:30', 
        title: '旺角動漫潮流散策', 
        description: '步行至 Sino Centre (模型扭蛋、動漫周邊)，順路逛 Sneakers Street 與 Langham Place。', 
        type: 'activity',
        locations: [
          { name: '信和中心 Sino Centre', url: 'https://www.google.com/maps/search/?api=1&query=Sino+Centre+Mong+Kok' },
          { name: '波鞋街 (花園街)', url: 'https://www.google.com/maps/search/?api=1&query=Sneakers+Street+Fa+Yuen+Street+Mong+Kok' },
          { name: '朗豪坊 Langham Place', url: 'https://www.google.com/maps/search/?api=1&query=Langham+Place+Mong+Kok' }
        ]
      },
      { 
        time: '15:30 - 16:00', 
        title: '通勤至中環', 
        description: '從港鐵「旺角站」搭乘荃灣綫（往中環方向），免轉車搭 5 站直達「中環站」。中環站 D2 出口出站，沿德己立街步行約 3～5 分鐘至威靈頓街 30 號。', 
        type: 'transport',
        locations: [
          { name: '港鐵 旺角站', url: 'https://www.google.com/maps/search/?api=1&query=MTR+Mong+Kok+Station' },
          { name: '港鐵 中環站 (D2出口)', url: 'https://www.google.com/maps/search/?api=1&query=MTR+Central+Station' }
        ]
      },
      { 
        time: '16:00 - 18:30', 
        title: '【Sanrioworld+ Hong Kong 旗艦店】', 
        description: '全新大型主題旗艦店，打卡巨型粉紅蝴蝶結外觀、多角色主題場景（Hello Kitty 試衣間、My Melody & Kuromi 乾洗店、大耳狗咖啡室等），選購香港限定商品。', 
        type: 'shopping',
        locations: [
          { name: 'Sanrioworld+ Hong Kong (中環威靈頓街30號)', url: 'https://www.google.com/maps/search/?api=1&query=30+Wellington+Street+Central+Hong+Kong' }
        ]
      },
      { 
        time: '18:30 - 19:45', 
        title: '晚餐', 
        description: '中環威靈頓街周邊享用晚餐（鏞記酒家或特色港式餐館）。', 
        type: 'food',
        locations: [
          { name: '鏞記酒家 (中環威靈頓街32-40號)', url: 'https://www.google.com/maps/search/?api=1&query=Yung+Kee+Restaurant+Central' }
        ]
      },
      { 
        time: '19:45 - 20:30', 
        title: '天星小輪 ＆ 星光大道夜景', 
        description: '從中環 7 號碼頭搭乘天星小輪至尖沙咀（船程約 8 分鐘）。漫步星光大道欣賞 20:00 的「幻彩詠香江」燈光秀。', 
        type: 'activity',
        locations: [
          { name: '中環 7 號天星碼頭', url: 'https://www.google.com/maps/search/?api=1&query=Central+Pier+No.7+Star+Ferry' },
          { name: '尖沙咀 星光大道', url: 'https://www.google.com/maps/search/?api=1&query=Avenue+of+Stars+Hong+Kong' }
        ]
      },
      { 
        time: '20:30 - 21:00', 
        title: '搭渡輪返回灣仔', 
        description: '從尖沙咀天星碼頭搭渡輪直達灣仔碼頭。', 
        type: 'transport',
        locations: [
          { name: '尖沙咀天星碼頭', url: 'https://www.google.com/maps/search/?api=1&query=Star+Ferry+Pier+Tsim+Sha+Tsui' },
          { name: '灣仔渡輪碼頭', url: 'https://www.google.com/maps/search/?api=1&query=Wan+Chai+Ferry+Pier' }
        ]
      },
      { 
        time: '21:00 之後', 
        title: '返回飯店', 
        description: '從灣仔碼頭沿天橋散步回合和酒店休息。', 
        type: 'accommodation',
        locations: [
          { name: '合和酒店 Hopewell Hotel', url: 'https://www.google.com/maps/search/?api=1&query=Hopewell+Hotel+Wan+Chai' }
        ]
      },
    ],
  },
  {
    date: '8/30 (日)',
    title: '中環復古散策 ➔ 太平山頂纜車 ➔ 港島叮叮車',
    activities: [
      { 
        time: '09:00 - 09:45', 
        title: '中環早餐', 
        description: '從灣仔站搭港島綫至「中環站」，享用中環早餐（蘭芳園絲襪奶茶、豬扒包）。', 
        type: 'food',
        locations: [
          { name: '蘭芳園 總店 (中環結志街2號)', url: 'https://www.google.com/maps/search/?api=1&query=Lan+Fong+Yuen+Central' }
        ]
      },
      { 
        time: '09:45 - 12:30', 
        title: '中環文青散策', 
        description: '搭乘中環半山自動扶手電梯，遊覽荷李活道與街頭壁畫。參觀古蹟文創園區：大館（前中區警署建築群）。', 
        type: 'activity',
        locations: [
          { name: '中環半山自動扶梯', url: 'https://www.google.com/maps/search/?api=1&query=Central+Mid+Levels+escalator' },
          { name: '大館 Tai Kwun (中環荷李活道10號)', url: 'https://www.google.com/maps/search/?api=1&query=Tai+Kwun+Central+Hong+Kong' },
          { name: '荷李活道街頭壁畫', url: 'https://www.google.com/maps/search/?api=1&query=Hollywood+Road+Central+Hong+Kong' }
        ]
      },
      { 
        time: '12:30 - 14:00', 
        title: '特色午餐', 
        description: '中環享用特色午餐（九記牛腩或沾仔記雲吞麵）。', 
        type: 'food',
        locations: [
          { name: '九記牛腩 (中環歌賦街21號)', url: 'https://www.google.com/maps/search/?api=1&query=Kau+Kee+Restaurant+Central' },
          { name: '沾仔記 雲吞麵 (中環威靈頓街98號)', url: 'https://www.google.com/maps/search/?api=1&query=Tsim+Chai+Kee+Noodle+Central' }
        ]
      },
      { 
        time: '14:00 - 14:30', 
        title: '前往花園道山頂纜車總站', 
        description: '由中環市區步行或搭的士前往花園道山頂纜車總站（Lower Terminus）。', 
        type: 'transport',
        locations: [
          { name: '花園道山頂纜車總站', url: 'https://www.google.com/maps/search/?api=1&query=Peak+Tram+Lower+Terminus+Garden+Road' }
        ]
      },
      { 
        time: '14:30 - 15:00', 
        title: '搭乘第六代全新山頂纜車 (The Peak Tram)', 
        description: '體驗全景玻璃天窗設計的新型纜車登上太平山頂。沿途斜坡坡度高達 25.7 度，推薦上山時坐「右側座位」，可欣賞維多利亞港與中環高樓垂直拔起的壯麗視野。', 
        type: 'transport',
        locations: [
          { name: '山頂纜車 (The Peak Tram)', url: 'https://www.google.com/maps/search/?api=1&query=Peak+Tram+Lower+Terminus+Garden+Road' }
        ]
      },
      { 
        time: '15:00 - 16:00', 
        title: '【凌霄閣摩天台 428 ＆ 芬梨道觀景】', 
        description: '登上海拔 428 公尺、全港最高的 360 度觀景台，盡情俯瞰維多利亞港、九龍半島與港島摩天大樓群全景。順道參觀位於山頂的歷史舊纜車車廂與紀念品打卡區。', 
        type: 'activity',
        locations: [
          { name: '凌霄閣 摩天台428 (Sky Terrace 428)', url: 'https://www.google.com/maps/search/?api=1&query=Sky+Terrace+428+The+Peak' },
          { name: '芬梨道 獅子亭觀景台', url: 'https://www.google.com/maps/search/?api=1&query=Lions+View+Point+Pavilion+Peak+Road' }
        ]
      },
      { 
        time: '16:00 - 16:45', 
        title: '【盧吉道秘境觀景步道】', 
        description: '從凌霄閣旁出發，沿著平緩舒適的林蔭「山頂環迴步行徑」漫步至盧吉道觀景點（約 15 分鐘）。這裡是攝影師拍攝維港天際線與日落餘暉的經典明信片取景位！', 
        type: 'activity',
        locations: [
          { name: '盧吉道 觀景點 (Lugard Road Lookout)', url: 'https://www.google.com/maps/search/?api=1&query=Lugard+Road+Lookout+The+Peak' }
        ]
      },
      { 
        time: '16:45 - 17:45', 
        title: '【太平山頂特色下午茶與美食】', 
        description: '在山頂享用特色餐點或景觀下午茶，推薦清單：\n1. The Peak Lookout（太平山餐廳：二級歷史建築百年紅磚石屋，環境典雅，提供精緻中西料理與英式下午茶）\n2. Bubba Gump Shrimp Co.（阿甘蝦餐廳：凌霄閣內美式電影主題海鮮餐廳，坐擁無敵窗邊海景）\n3. 麥奀雲吞麵世家 山頂店（經典港式名店，鮮蝦雲吞爽口彈牙）\n4. Pacific Coffee 或 山頂廣場特色甜點輕食。', 
        type: 'food',
        locations: [
          { name: 'The Peak Lookout 太平山餐廳 (百年古蹟石屋)', url: 'https://www.google.com/maps/search/?api=1&query=The+Peak+Lookout+Hong+Kong' },
          { name: '阿甘蝦餐廳 Bubba Gump (凌霄閣海景餐廳)', url: 'https://www.google.com/maps/search/?api=1&query=Bubba+Gump+Shrimp+Co.+The+Peak+Hong+Kong' },
          { name: '麥奀雲吞麵世家 (山頂凌霄閣店)', url: 'https://www.google.com/maps/search/?api=1&query=Mak%27s+Noodle+The+Peak+Hong+Kong' },
          { name: '山頂廣場 Peak Galleria', url: 'https://www.google.com/maps/search/?api=1&query=Peak+Galleria+Hong+Kong' }
        ]
      },
      { 
        time: '17:45 - 18:15', 
        title: '搭乘纜車下山', 
        description: '搭乘山頂纜車下山回花園道總站，步行至金鐘道電車站。', 
        type: 'transport',
        locations: [
          { name: '花園道山頂纜車總站', url: 'https://www.google.com/maps/search/?api=1&query=Peak+Tram+Lower+Terminus+Garden+Road' }
        ]
      },
      { 
        time: '18:15 - 18:45', 
        title: '搭乘叮叮車', 
        description: '搭乘香港電車（後門上車、前門下車刷八達通，單程 HK$3），於灣仔站下車。', 
        type: 'activity',
        locations: [
          { name: '金鐘道電車站 (Queensway Tram Stop)', url: 'https://www.google.com/maps/search/?api=1&query=Queensway+Tram+Stop+Hong+Kong' }
        ]
      },
      { 
        time: '18:45 - 20:30', 
        title: '晚餐', 
        description: '灣仔或銅鑼灣享用晚餐（喜記避風塘炒蟹或甘牌燒鵝）。', 
        type: 'food',
        locations: [
          { name: '喜記避風塘炒蟹 (灣仔謝斐道379-389號)', url: 'https://www.google.com/maps/search/?api=1&query=Hee+Kee+Fried+Crab+Experts+Wan+Chai' },
          { name: '甘牌燒鵝 (灣仔軒尼詩道226號)', url: 'https://www.google.com/maps/search/?api=1&query=Kam%27s+Roast+Goose+Wan+Chai' }
        ]
      },
      { 
        time: '20:30 之後', 
        title: '返回飯店', 
        description: '返回飯店休息、整理行李。', 
        type: 'accommodation',
        locations: [
          { name: '合和酒店 Hopewell Hotel', url: 'https://www.google.com/maps/search/?api=1&query=Hopewell+Hotel+Wan+Chai' }
        ]
      },
    ],
  },
  {
    date: '8/31 (一)',
    title: '灣仔人氣伴手禮 ➔ 機場返台 ➔ 桃機取車',
    activities: [
      { 
        time: '08:30 - 09:15', 
        title: '退房手續', 
        description: '飯店退房手續並寄放行李。', 
        type: 'accommodation',
        locations: [
          { name: '合和酒店 Hopewell Hotel', url: 'https://www.google.com/maps/search/?api=1&query=Hopewell+Hotel+Wan+Chai' }
        ]
      },
      { 
        time: '09:15 - 10:15', 
        title: 'Bakehouse 伴手禮', 
        description: '步行至 Bakehouse (灣仔，大王東街 14 號) 排隊購買現烤酸種蛋撻與烘焙伴手禮。', 
        type: 'shopping',
        locations: [
          { name: 'Bakehouse 灣仔總店 (大王東街14號)', url: 'https://www.google.com/maps/search/?api=1&query=Bakehouse+Wan+Chai' }
        ]
      },
      { 
        time: '10:15 - 11:30', 
        title: '灣仔周邊探索', 
        description: '藍屋建築群或春園街茶餐廳早午餐。', 
        type: 'activity',
        locations: [
          { name: '灣仔藍屋建築群 (石水渠街72-74A號)', url: 'https://www.google.com/maps/search/?api=1&query=Blue+House+Wan+Chai' },
          { name: '灣仔 春園街美食街', url: 'https://www.google.com/maps/search/?api=1&query=Spring+Garden+Lane+Wan+Chai' }
        ]
      },
      { 
        time: '11:30 - 11:45', 
        title: '領取行李', 
        description: '回飯店領取行李。', 
        type: 'accommodation',
        locations: [
          { name: '合和酒店 Hopewell Hotel', url: 'https://www.google.com/maps/search/?api=1&query=Hopewell+Hotel+Wan+Chai' }
        ]
      },
      { 
        time: '11:45 - 12:30', 
        title: '前往機場', 
        description: '搭的士（約 HK$40～50）直達港鐵「香港站」，轉乘機場快綫直達機場。', 
        type: 'transport',
        locations: [
          { name: '港鐵 香港站 (機場快綫市區預辦登機/轉乘)', url: 'https://www.google.com/maps/search/?api=1&query=MTR+Hong+Kong+Station' }
        ]
      },
      { 
        time: '12:30 - 14:00', 
        title: '抵達香港國際機場', 
        description: '前往香港航空櫃檯辦理登機報到與行李托運。', 
        type: 'transport',
        locations: [
          { name: '香港國際機場 第一航廈', url: 'https://www.google.com/maps/search/?api=1&query=Hong+Kong+International+Airport' }
        ]
      },
      { 
        time: '14:00 - 15:40', 
        title: '機場購物與點心', 
        description: '通過安檢與證照查驗，於機場免稅店購物、吃點心。', 
        type: 'shopping',
        locations: [
          { name: '香港國際機場 離境禁區購物區', url: 'https://www.google.com/maps/search/?api=1&query=Hong+Kong+International+Airport+Terminal+1' }
        ]
      },
      { 
        time: '15:50 - 16:20', 
        title: '準備登機 (HX260)', 
        description: '前往登機門，搭乘香港航空 HX260（16:20 起飛）。', 
        type: 'transport' 
      },
      { 
        time: '16:20 - 18:20', 
        title: '飛行中', 
        description: '預計 18:20 降落桃園機場。', 
        type: 'transport' 
      },
      { 
        time: '18:20 - 19:00', 
        title: '入境台灣', 
        description: '入境台灣並提領托運行李。', 
        type: 'transport',
        locations: [
          { name: '桃園國際機場 第一航廈入境大廳', url: 'https://www.google.com/maps/search/?api=1&query=%E6%A1%83%E5%9C%92%E5%9C%8B%E9%9A%9B%E6%A9%9F%E5%A0%B4%E7%AC%AC%E4%B8%80%E8%88%AA%E5%BB%88' }
        ]
      },
      { 
        time: '19:00 - 19:15', 
        title: '聯絡停車場', 
        description: '領完行李致電大漁停車場（0966-408-886），前往一航廈 2、3 號出口搭乘接駁車。', 
        type: 'transport',
        locations: [
          { name: '大漁停車場 (電話: 0966-408-886)', url: 'https://www.google.com/maps/search/?api=1&query=%E6%A1%83%E5%9C%92%E5%B8%82%E5%A4%A7%E5%9C%92%E5%8D%80%E5%B9%B3%E5%AE%89%E8%B7%AF116%E8%99%9F' }
        ]
      },
      { 
        time: '19:20 - 19:30', 
        title: '取車返家', 
        description: '抵達大漁停車場取車，自駕返家。', 
        type: 'transport',
        locations: [
          { name: '大漁停車場 (桃園市大園區平安路116號旁)', url: 'https://www.google.com/maps/search/?api=1&query=%E6%A1%83%E5%9C%92%E5%B8%82%E5%A4%A7%E5%9C%92%E5%8D%80%E5%B9%B3%E5%AE%89%E8%B7%AF116%E8%99%9F' }
        ]
      },
    ],
  },
];
