import React, { useState } from 'react';
import { 
  ShieldAlert, 
  FileText, 
  CreditCard, 
  UtensilsCrossed, 
  Plug, 
  CloudSun, 
  PhoneCall, 
  AlertTriangle, 
  CheckCircle2, 
  ExternalLink,
  Info,
  Sparkles,
  Luggage,
  Compass
} from 'lucide-react';

interface TipSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  badge?: string;
  items: {
    subtitle: string;
    content: string;
    highlight?: boolean;
    warning?: boolean;
  }[];
}

export const TravelTips: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const tipSections: TipSection[] = [
    {
      id: 'entry',
      title: '證件與入境重要法規',
      icon: <FileText className="w-5 h-5 text-rose-500" />,
      badge: '必看！非常重要',
      items: [
        {
          subtitle: '台灣居民預辦入境登記 (電子港簽 PAR)',
          content: '持台灣護照旅客出發前須至香港入境處官網免費申辦「台灣居民預辦入境登記」，完成後「務必使用 A4 白紙完整列印」並隨身攜帶。效期為 2 個月，可進出香港 2 次，每次最長停留 30 天。護照效期需在 6 個月以上。（若持有有效台胞證者可免辦電子港簽直接入境停留 30 天）。',
          highlight: true,
        },
        {
          subtitle: '嚴禁攜帶電子煙、加熱煙等替代吸煙產品 (違者重罰)',
          content: '香港法例嚴格禁止進口、推廣、製造、售賣或管有電子煙、加熱煙草產品及草本煙（包含煙油與零件）。即使僅作為過境、轉機或自用亦屬違法，最高可處罰款 HK$50,000 及監禁 6 個月！請徹底檢查隨身及托運行李切勿攜帶。',
          warning: true,
        },
        {
          subtitle: '其他違禁品管制清單',
          content: '防狼噴霧器、瓦斯氣體罐、電擊棒、伸縮警棍、彈簧刀、指節銅套等在香港皆屬「槍械或違禁武器」，嚴格禁止攜帶入境與過境，切勿誤放隨身或托運行李。',
          warning: true,
        },
        {
          subtitle: '出入境無紙化與便利用印',
          content: '香港機場出入境目前已實施電腦化通行，入境時海關不會在護照上蓋章，而是核發一張小張的「入境標籤貼紙 (Landing Slip)」，上面載明允許停留期限，請妥善夾在護照內直至回國。',
        },
      ],
    },
    {
      id: 'money',
      title: '交通、支付與現金準備',
      icon: <CreditCard className="w-5 h-5 text-blue-500" />,
      badge: '日常實用',
      items: [
        {
          subtitle: '八達通 (Octopus Card) 使用守則',
          content: '香港自由行必備！搭乘港鐵、天星小輪、叮叮車、巴士以及在 7-Eleven、OK 便利店消費均可使用。建議出發前可直接在 iPhone / 手機錢包加入虛擬旅客八達通，或於機場快綫櫃檯購買實體租用版。',
          highlight: true,
        },
        {
          subtitle: '港幣現金準備建議',
          content: '雖然商場、MOKO、Sanrioworld+ 廣泛支援信用卡與電子支付，但許多香港老字號茶餐廳、傳統麵店（如九記牛腩、蘭芳園）、街邊小吃或計程車（的士）「僅收港幣現金」。建議每人隨身準備 HK$500~1,000 現金，並盡量準備 HK$20、HK$50、HK$100 面額（少數小店不收 HK$1,000 大鈔）。',
        },
        {
          subtitle: '叮叮車（香港電車）搭乘技巧',
          content: '港島限定特色！一律「後門上車、前門下車刷八達通或付現」，不論搭乘距離多遠，單程統一固定票價為 HK$3.00，車內不設找零。',
        },
        {
          subtitle: '香港的士（計程車）注意事項',
          content: '市區為紅色計程車（紅的）。起步價為 HK$29，若行經海底隧道或放行李至後車廂（每件約 HK$6）會加收附加費，司機多數只收現金或八達通。',
        },
      ],
    },
    {
      id: 'dining',
      title: '茶餐廳文化與用餐禮儀',
      icon: <UtensilsCrossed className="w-5 h-5 text-amber-500" />,
      badge: '在地體驗',
      items: [
        {
          subtitle: '「搭檯」（併桌）文化與快節奏',
          content: '香港茶餐廳及熱門小吃店在用餐尖峰時段併桌是常態。侍應（服務員）點餐講求效率且節奏極快，建議入座前或入座後先看好菜單，一次俐落點齊。',
        },
        {
          subtitle: '熱茶洗餐具（洗杯水）習俗',
          content: '在部分傳統酒樓或茶餐廳，入座時服務員送上的一大碗熱水或塑膠大碗，是讓客人燙洗筷子、湯匙與茶杯用的（稱為「洗杯」），並非飲用熱水。',
        },
        {
          subtitle: '面紙與開水需自備',
          content: '香港大部分平價茶餐廳「不主動提供免費衛生紙或白開水」。若向店家索取紙巾通常會額外收取 HK$2～5。強烈建議隨身包包常備隨身面紙包與濕紙巾。',
          highlight: true,
        },
        {
          subtitle: '茶位費與加一服務費',
          content: '一般茶餐廳通常免收服務費，但中大型酒樓或正規中西餐廳通常會酌收 10% 服務費（俗稱「加一」）以及每人茶位費。',
        },
      ],
    },
    {
      id: 'living',
      title: '電壓插座、網路通訊與氣候',
      icon: <Plug className="w-5 h-5 text-emerald-500" />,
      badge: '設備必備',
      items: [
        {
          subtitle: '電壓與英規三腳插座 (Type G)',
          content: '香港電壓為 220V / 50Hz，插座為英規三孔方形插頭（G型）。合和酒店房間內通常有 USB 充電孔或多功能插座，但攜帶筆電、吹風機或相機時，建議自備 1~2 個「英規轉接頭」或萬國轉接插頭。',
          highlight: true,
        },
        {
          subtitle: 'eSIM 網路實名認證',
          content: '根據香港法例，在香港使用的電話卡/上網卡需完成實名登記。購買外遊 eSIM 後，抵達前或連上機場 Wi-Fi 時，請依供應商指示上傳護照照片完成簡易線上驗證開通。',
        },
        {
          subtitle: '8 月底氣候與室內強效冷氣應對',
          content: '8 月底香港氣候炎熱高溫且偶有陣雨，但各大商場、地鐵車廂、電影院及餐廳內部「冷氣非常強勁」（室溫常設定在 18~20°C）。請務必隨身攜帶薄長袖外套或防風防曬外套，避免室內外溫差過大著涼。',
        },
        {
          subtitle: '自備晴雨兩用摺疊傘',
          content: '夏季香港午後容易有對流雨或驟雨，隨身包包建議備妥一把輕量折疊傘，遮陽擋雨兩相宜。',
        },
      ],
    },
    {
      id: 'emergency',
      title: '實用電話與緊急聯絡清單',
      icon: <PhoneCall className="w-5 h-5 text-indigo-500" />,
      badge: '備用安全',
      items: [
        {
          subtitle: '香港緊急求助熱線（報案 / 火警 / 急救）',
          content: '撥打「999」（免費求助電話，類似台灣 110/119）。',
        },
        {
          subtitle: '台灣駐港機構（台北經濟文化辦事處）',
          content: '旅外國人急難救助專線：+852 6143-9012（香港境內直撥 6143-9012）。地址：香港灣仔港灣道 18 號中環廣場 49 樓。',
          highlight: true,
        },
        {
          subtitle: '台灣桃園大漁停車場聯絡專線',
          content: '專線電話：0966-408-886（回國領取行李後致電接駁專車）。',
        },
        {
          subtitle: '香港旅遊發展局旅客諮詢熱線',
          content: '+852 2508-1234（每日 09:00 - 18:00 提供多語旅遊諮詢服務）。',
        },
      ],
    },
  ];

  const categories = [
    { id: 'all', label: '全部須知' },
    { id: 'entry', label: '入境與法規' },
    { id: 'money', label: '交通與支付' },
    { id: 'dining', label: '飲食與禮儀' },
    { id: 'living', label: '電壓與氣候' },
    { id: 'emergency', label: '緊急聯絡' },
  ];

  const filteredSections = activeCategory === 'all' 
    ? tipSections 
    : tipSections.filter(s => s.id === activeCategory);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-md border border-slate-800 relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-semibold mb-3 border border-orange-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2026 最新出國必備指南</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
            香港自由行 · 行前與出入境實用須知
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            為您整理從電子港簽申請、違禁品最新法規、八達通與現金準備、茶餐廳在地文化到緊急聯絡資訊，讓您的 4 天 3 夜香港之旅順暢無憂！
          </p>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
              activeCategory === cat.id
                ? 'bg-orange-500 text-white shadow-sm ring-2 ring-orange-200'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Warning Box for E-cigarettes */}
      <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 shadow-xs">
        <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center flex-shrink-0 mt-0.5">
          <AlertTriangle className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-sm sm:text-base font-bold text-rose-900 mb-1">
            出境海關最高警戒：切勿攜帶「電子煙 / 加熱煙」與「防狼噴霧」
          </h3>
          <p className="text-xs sm:text-sm text-rose-700 leading-relaxed">
            香港法例全面禁止進口電子煙、加熱煙及相關煙油煙彈（即使放行李箱轉機或自用皆屬違法，會面臨刑事指控及高額罰款）；防狼噴霧與電擊棒在香港亦屬管制軍火武器。出發打包行李時請務必再次仔細檢查。
          </p>
        </div>
      </div>

      {/* Tips Cards */}
      <div className="space-y-6">
        {filteredSections.map((section) => (
          <div 
            key={section.id} 
            className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-xs">
                  {section.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800">{section.title}</h3>
              </div>
              {section.badge && (
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                  {section.badge}
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.items.map((item, idx) => (
                <div 
                  key={idx}
                  className={`rounded-xl p-4 border transition-all ${
                    item.warning 
                      ? 'bg-rose-50/50 border-rose-200' 
                      : item.highlight
                      ? 'bg-orange-50/40 border-orange-200'
                      : 'bg-slate-50/60 border-slate-200/80 hover:bg-slate-50'
                  }`}
                >
                  <h4 className={`text-sm font-bold mb-1.5 flex items-center gap-1.5 ${
                    item.warning 
                      ? 'text-rose-900' 
                      : item.highlight 
                      ? 'text-orange-900' 
                      : 'text-slate-800'
                  }`}>
                    {item.warning ? (
                      <AlertTriangle className="w-4 h-4 text-rose-500 flex-shrink-0" />
                    ) : item.highlight ? (
                      <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    ) : (
                      <Info className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    )}
                    <span>{item.subtitle}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Useful Official Links */}
      <div className="bg-slate-100 rounded-2xl p-5 border border-slate-200">
        <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
          <Compass className="w-4 h-4 text-orange-500" />
          <span>官方常用快速查詢連結</span>
        </h4>
        <div className="flex flex-wrap gap-2.5">
          <a
            href="https://www.immd.gov.hk/hkt/services/vwp.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white text-slate-700 border border-slate-200 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 transition-colors"
          >
            <span>香港入境處：台灣居民預辦入境登記 (電子港簽)</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://www.discoverhongkong.com/tc/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white text-slate-700 border border-slate-200 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 transition-colors"
          >
            <span>香港旅遊發展局 (Discover Hong Kong)</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://www.mtr.com.hk/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white text-slate-700 border border-slate-200 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 transition-colors"
          >
            <span>港鐵 MTR 路線與票價查詢</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://www.thepeak.com.hk/tc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white text-slate-700 border border-slate-200 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 transition-colors"
          >
            <span>太平山頂纜車官方網站</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
