export interface Stock {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
}

export interface Sector {
  id: string;
  name: string;
  macroCategory: '電子產業' | '傳統產業' | '金融保險' | '生技醫療' | '服務與生活' | '新創與環境';
  description: string;
  icon: string;
  marketCap?: string;
  topStocks: Stock[];
}

export const sectors: Sector[] = [
  // ================= 1. 電子產業 (Electronics) =================
  {
    id: "semiconductor",
    name: "半導體業",
    macroCategory: '電子產業',
    description: "台灣最具國際競爭力的核心產業，涵蓋IC設計、晶圓代工、封裝測試等完整產業鏈。與全球AI、高效能運算及地緣政治息息相關。",
    icon: "Cpu",
    marketCap: "NT$ 25.4 兆",
    topStocks: [
      { id: "2330", name: "台積電", symbol: "2330", price: 825.0, change: 15.0, changePercent: 1.85 },
      { id: "2454", name: "聯發科", symbol: "2454", price: 1120.0, change: 25.0, changePercent: 2.28 },
      { id: "3711", name: "日月光投控", symbol: "3711", price: 154.5, change: -1.5, changePercent: -0.96 }
    ]
  },
  {
    id: "computer-peripheral",
    name: "電腦及週邊設備業",
    macroCategory: '電子產業',
    description: "受惠於全球生成式AI浪潮，台灣伺服器代工廠與散熱、機殼零組件成為全球雲端大廠不可或缺的供應鏈夥伴。",
    icon: "Monitor",
    topStocks: [
      { id: "2382", name: "廣達", symbol: "2382", price: 285.5, change: 8.5, changePercent: 3.07 },
      { id: "3231", name: "緯創", symbol: "3231", price: 118.0, change: 2.5, changePercent: 2.16 },
      { id: "2376", name: "技嘉", symbol: "2376", price: 310.0, change: 12.0, changePercent: 4.03 }
    ]
  },
  {
    id: "optoelectronic",
    name: "光電業",
    macroCategory: '電子產業',
    description: "涵蓋面板、LED、光學鏡頭等領域，應用於智慧型手機、車載顯示與先進光學感測。",
    icon: "Sun",
    topStocks: [
      { id: "3008", name: "大立光", symbol: "3008", price: 2800.0, change: 50.0, changePercent: 1.81 },
      { id: "2409", name: "友達", symbol: "2409", price: 18.5, change: 0.1, changePercent: 0.54 }
    ]
  },
  {
    id: "communications-internet",
    name: "通信網路業",
    macroCategory: '電子產業',
    description: "包含電信運營商、網通設備廠與低軌衛星通訊，是5G、6G及萬物互聯的基礎建設。",
    icon: "Wifi",
    topStocks: [
      { id: "2412", name: "中華電", symbol: "2412", price: 125.0, change: 0.5, changePercent: 0.40 },
      { id: "2345", name: "智邦", symbol: "2345", price: 530.0, change: -10.0, changePercent: -1.85 }
    ]
  },
  {
    id: "electronic-parts",
    name: "電子零組件業",
    macroCategory: '電子產業',
    description: "包含被動元件、印刷電路板(PCB)、連接器等，為各類電子產品不可或缺的關鍵零件。",
    icon: "Cpu", // Fallback for CircuitBoard if needed
    topStocks: [
      { id: "2308", name: "台達電", symbol: "2308", price: 345.0, change: 5.0, changePercent: 1.47 },
      { id: "2327", name: "國巨", symbol: "2327", price: 590.0, change: 15.0, changePercent: 2.60 }
    ]
  },
  {
    id: "electronic-commerce",
    name: "電子通路業",
    macroCategory: '電子產業',
    description: "代理與經銷國內外知名半導體與電子零組件，扮演原廠與下游系統廠間的橋樑。",
    icon: "ShoppingCart",
    topStocks: [
      { id: "3702", name: "大聯大", symbol: "3702", price: 92.5, change: 1.2, changePercent: 1.31 },
      { id: "3036", name: "文曄", symbol: "3036", price: 145.0, change: -2.0, changePercent: -1.36 }
    ]
  },
  {
    id: "information-service",
    name: "資訊服務業",
    macroCategory: '電子產業',
    description: "提供系統整合、軟體開發、資安與雲端服務，協助企業數位轉型。",
    icon: "Cloud",
    topStocks: [
      { id: "3130", name: "一零四", symbol: "3130", price: 215.0, change: 0.0, changePercent: 0.00 }
    ]
  },
  {
    id: "other-electronic",
    name: "其他電子業",
    macroCategory: '電子產業',
    description: "涵蓋難以單一歸類的電子設備組裝、檢測與特殊應用電子產品。",
    icon: "Battery",
    topStocks: [
      { id: "2354", name: "鴻準", symbol: "2354", price: 68.0, change: 0.5, changePercent: 0.74 }
    ]
  },

  // ================= 2. 傳統產業 (Traditional Manufacturing) =================
  {
    id: "cement",
    name: "水泥工業",
    macroCategory: '傳統產業',
    description: "基礎建設核心材料，近期積極朝向綠能、廢棄物處理及循環經濟轉型。",
    icon: "Box", 
    topStocks: [
      { id: "1101", name: "台泥", symbol: "1101", price: 32.5, change: 0.2, changePercent: 0.61 }
    ]
  },
  {
    id: "food",
    name: "食品工業",
    macroCategory: '傳統產業',
    description: "民生必需產業，涵蓋大宗物資加工、飲料、肉品及餐飲連鎖集團。",
    icon: "Coffee",
    topStocks: [
      { id: "1216", name: "統一", symbol: "1216", price: 78.5, change: 0.5, changePercent: 0.64 }
    ]
  },
  {
    id: "plastic",
    name: "塑膠工業",
    macroCategory: '傳統產業',
    description: "涵蓋石化原料、塑膠加工品及特殊化學材料，與國際原油價格高度連動。",
    icon: "Layers",
    topStocks: [
      { id: "1301", name: "台塑", symbol: "1301", price: 65.0, change: -0.5, changePercent: -0.76 },
      { id: "1303", name: "南亞", symbol: "1303", price: 55.2, change: -0.3, changePercent: -0.54 }
    ]
  },
  {
    id: "textile",
    name: "紡織纖維",
    macroCategory: '傳統產業',
    description: "台灣為全球機能性布料與環保紗線的重鎮，為國際知名運動品牌的核心供應商。",
    icon: "Scissors",
    topStocks: [
      { id: "1476", name: "儒鴻", symbol: "1476", price: 540.0, change: 5.0, changePercent: 0.93 }
    ]
  },
  {
    id: "electric-machinery",
    name: "電機機械",
    macroCategory: '傳統產業',
    description: "包含工具機、馬達、重電設備，近期受惠於台電強韌電網計畫與美國基建需求。",
    icon: "Settings",
    topStocks: [
      { id: "1519", name: "華城", symbol: "1519", price: 850.0, change: 45.0, changePercent: 5.59 },
      { id: "1590", name: "亞德客-KY", symbol: "1590", price: 1050.0, change: 20.0, changePercent: 1.94 }
    ]
  },
  {
    id: "electrical-cable",
    name: "電器電纜",
    macroCategory: '傳統產業',
    description: "提供電力傳輸線纜、漆包線等，受惠於基礎建設更新與綠能發展。",
    icon: "Zap",
    topStocks: [
      { id: "1605", name: "華新", symbol: "1605", price: 38.0, change: 0.4, changePercent: 1.06 }
    ]
  },
  {
    id: "chemical",
    name: "化學工業",
    macroCategory: '傳統產業',
    description: "涵蓋農藥、特用化學品、肥料及半導體先進製程所需之電子級化學品。",
    icon: "FlaskConical",
    topStocks: [
      { id: "1722", name: "台肥", symbol: "1722", price: 62.0, change: 0.5, changePercent: 0.81 }
    ]
  },
  {
    id: "glass-ceramic",
    name: "玻璃陶瓷",
    macroCategory: '傳統產業',
    description: "應用於建築、車用及電子顯示器的基礎玻璃與特殊陶瓷材料。",
    icon: "Wine",
    topStocks: [
      { id: "1802", name: "台玻", symbol: "1802", price: 18.2, change: -0.1, changePercent: -0.54 }
    ]
  },
  {
    id: "paper-pulp",
    name: "造紙工業",
    macroCategory: '傳統產業',
    description: "涵蓋工業用紙（紙箱）、文化用紙與家庭用紙，與零售電商的包裝需求高度相關。",
    icon: "FileText",
    topStocks: [
      { id: "1907", name: "永豐餘", symbol: "1907", price: 31.5, change: 0.2, changePercent: 0.63 }
    ]
  },
  {
    id: "iron-steel",
    name: "鋼鐵工業",
    macroCategory: '傳統產業',
    description: "工業之母，包含碳鋼、不鏽鋼及特殊合金，受全球總經及基礎建設需求影響。",
    icon: "Shield",
    topStocks: [
      { id: "2002", name: "中鋼", symbol: "2002", price: 24.5, change: -0.1, changePercent: -0.40 }
    ]
  },
  {
    id: "rubber",
    name: "橡膠工業",
    macroCategory: '傳統產業',
    description: "主要產品為汽機車輪胎及工業用橡膠，市場需求與全球汽車產業連動。",
    icon: "Circle",
    topStocks: [
      { id: "2105", name: "正新", symbol: "2105", price: 48.0, change: 0.5, changePercent: 1.05 }
    ]
  },
  {
    id: "automobile",
    name: "汽車工業",
    macroCategory: '傳統產業',
    description: "包含整車製造、汽車零組件AM/OEM市場，近年積極轉向電動車(EV)領域。",
    icon: "Car",
    topStocks: [
      { id: "2207", name: "和泰車", symbol: "2207", price: 680.0, change: 5.0, changePercent: 0.74 },
      { id: "2231", name: "為升", symbol: "2231", price: 125.0, change: -1.0, changePercent: -0.79 }
    ]
  },
  {
    id: "building-construction",
    name: "建材營造",
    macroCategory: '傳統產業',
    description: "涵蓋房地產開發、公共工程承攬及營造廠，與國內利率、打房政策息息相關。",
    icon: "HardHat",
    topStocks: [
      { id: "2542", name: "興富發", symbol: "2542", price: 45.0, change: -0.5, changePercent: -1.10 }
    ]
  },

  // ================= 3. 金融保險 (Financial) =================
  {
    id: "finance",
    name: "金融保險業",
    macroCategory: '金融保險',
    description: "穩定配息與抗通膨的防禦型標的，受惠於升息循環與財富管理業務增長，為台灣股市重要的穩定力量。",
    icon: "Landmark",
    marketCap: "NT$ 6.5 兆",
    topStocks: [
      { id: "2881", name: "富邦金", symbol: "2881", price: 75.8, change: 0.5, changePercent: 0.66 },
      { id: "2882", name: "國泰金", symbol: "2882", price: 54.3, change: 0.2, changePercent: 0.37 },
      { id: "2891", name: "中信金", symbol: "2891", price: 38.6, change: 0.4, changePercent: 1.05 }
    ]
  },

  // ================= 4. 生技醫療 (Biotech & Medical) =================
  {
    id: "biotech-medical",
    name: "生技醫療業",
    macroCategory: '生技醫療',
    description: "涵蓋新藥研發、學名藥、醫療器材與連鎖藥局，為政府重點扶持的高附加價值產業。",
    icon: "Activity",
    topStocks: [
      { id: "6446", name: "藥華藥", symbol: "6446", price: 480.0, change: 10.0, changePercent: 2.12 },
      { id: "1795", name: "美時", symbol: "1795", price: 295.0, change: -2.0, changePercent: -0.67 }
    ]
  },

  // ================= 5. 服務與生活 (Service & Lifestyle) =================
  {
    id: "shipping",
    name: "航運業",
    macroCategory: '服務與生活',
    description: "與全球總體經濟、地緣政治（如紅海危機）高度連動，包含貨櫃航運、散裝航運與航空客貨運。",
    icon: "Ship",
    topStocks: [
      { id: "2603", name: "長榮", symbol: "2603", price: 215.0, change: -2.0, changePercent: -0.92 },
      { id: "2618", name: "長榮航", symbol: "2618", price: 36.8, change: 0.3, changePercent: 0.82 }
    ]
  },
  {
    id: "tourism",
    name: "觀光餐旅",
    macroCategory: '服務與生活',
    description: "包含連鎖餐飲集團、飯店住宿與旅行社，受國內外旅遊熱度與內需消費直接影響。",
    icon: "Map",
    topStocks: [
      { id: "2727", name: "王品", symbol: "2727", price: 245.0, change: 2.0, changePercent: 0.82 }
    ]
  },
  {
    id: "trading-department",
    name: "貿易百貨",
    macroCategory: '服務與生活',
    description: "涵蓋大型連鎖超商、百貨公司及貿易進出口業務，為內需市場的景氣風向球。",
    icon: "Store",
    topStocks: [
      { id: "2912", name: "統一超", symbol: "2912", price: 275.0, change: 1.0, changePercent: 0.36 }
    ]
  },
  {
    id: "sports-leisure",
    name: "運動休閒",
    macroCategory: '服務與生活',
    description: "提供健身器材、高爾夫球具及自行車製造，反映全球民眾對健康意識的重視程度。",
    icon: "Bike",
    topStocks: [
      { id: "9914", name: "美利達", symbol: "9914", price: 210.0, change: -1.5, changePercent: -0.70 }
    ]
  },
  {
    id: "household",
    name: "居家生活",
    macroCategory: '服務與生活',
    description: "包含家具製造、衛浴設備與居家裝修材料，與歐美房地產景氣及新屋開工率相關。",
    icon: "Home",
    topStocks: [
      { id: "9924", name: "福興", symbol: "9924", price: 52.0, change: 0.2, changePercent: 0.38 }
    ]
  },

  // ================= 6. 新創與環境 (Innovation & Environment) =================
  {
    id: "green-energy",
    name: "綠能環保",
    macroCategory: '新創與環境',
    description: "配合全球淨零碳排趨勢與國內能源轉型政策，包含太陽能、風力發電、廢棄物處理及水資源再利用。",
    icon: "Leaf",
    topStocks: [
      { id: "6806", name: "森崴能源", symbol: "6806", price: 145.0, change: 3.5, changePercent: 2.47 },
      { id: "8341", name: "日友", symbol: "8341", price: 110.0, change: -0.5, changePercent: -0.45 }
    ]
  },
  {
    id: "digital-cloud",
    name: "數位雲端",
    macroCategory: '新創與環境',
    description: "聚焦於SaaS軟體即服務、電商平台、雲端架構與大數據分析的新型態數位經濟企業。",
    icon: "CloudLightning",
    topStocks: [
      { id: "6756", name: "威宏-KY", symbol: "6756", price: 135.0, change: 2.0, changePercent: 1.50 } // Example, actually maybe 91APP is better
    ]
  },
  {
    id: "oil-gas-electricity",
    name: "油電燃氣業",
    macroCategory: '新創與環境',
    description: "民生必需的天然氣、油品供給，具備極高的公用事業特許性質與防禦型收息特徵。",
    icon: "Flame",
    topStocks: [
      { id: "8926", name: "台汽電", symbol: "8926", price: 45.0, change: 0.4, changePercent: 0.89 }
    ]
  },
  {
    id: "conglomerates",
    name: "綜合企業",
    macroCategory: '傳統產業',
    description: "跨足多項產業領域的大型控股公司或集團。",
    icon: "Briefcase",
    topStocks: [
      { id: "2903", name: "遠百", symbol: "2903", price: 25.5, change: -0.1, changePercent: -0.39 } // Sometimes grouped differently, using 9904 Pou Chen as example instead? Let's use 9904
    ]
  },
  {
    id: "other",
    name: "其他業",
    macroCategory: '服務與生活',
    description: "無法歸類於上述 32 個標準分類的上市櫃企業，涵蓋製鞋、租賃、保全等多元領域。",
    icon: "LayoutGrid",
    topStocks: [
      { id: "9904", name: "寶成", symbol: "9904", price: 36.5, change: 0.5, changePercent: 1.38 },
      { id: "9917", name: "中保科", symbol: "9917", price: 115.0, change: 0.0, changePercent: 0.00 }
    ]
  }
];

export const macroCategories = [
  '電子產業', '傳統產業', '金融保險', '生技醫療', '服務與生活', '新創與環境'
];
