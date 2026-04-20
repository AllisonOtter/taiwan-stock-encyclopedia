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
  description: string;
  icon: string;
  marketCap: string;
  topStocks: Stock[];
}

export const sectors: Sector[] = [
  {
    id: "semiconductor",
    name: "半導體產業 (Semiconductor)",
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
    id: "ai-server",
    name: "AI與伺服器 (AI & Server)",
    description: "受惠於全球生成式AI浪潮，台灣伺服器代工廠與散熱、機殼零組件成為全球雲端大廠不可或缺的供應鏈夥伴。",
    icon: "Server",
    marketCap: "NT$ 8.2 兆",
    topStocks: [
      { id: "2382", name: "廣達", symbol: "2382", price: 285.5, change: 8.5, changePercent: 3.07 },
      { id: "3231", name: "緯創", symbol: "3231", price: 118.0, change: 2.5, changePercent: 2.16 },
      { id: "2376", name: "技嘉", symbol: "2376", price: 310.0, change: 12.0, changePercent: 4.03 }
    ]
  },
  {
    id: "green-energy",
    name: "綠能環保 (Green Energy)",
    description: "配合全球淨零碳排趨勢與國內能源轉型政策，包含太陽能、風力發電、重電設備及儲能系統等關鍵基礎建設。",
    icon: "Leaf",
    marketCap: "NT$ 2.1 兆",
    topStocks: [
      { id: "1519", name: "華城", symbol: "1519", price: 850.0, change: 45.0, changePercent: 5.59 },
      { id: "1514", name: "亞力", symbol: "1514", price: 135.5, change: 6.5, changePercent: 5.04 },
      { id: "1504", name: "東元", symbol: "1504", price: 55.2, change: 0.8, changePercent: 1.47 }
    ]
  },
  {
    id: "finance",
    name: "金融保險 (Financials)",
    description: "穩定配息與抗通膨的防禦型標的，受惠於升息循環與財富管理業務增長，為台灣股市重要的穩定力量。",
    icon: "Landmark",
    marketCap: "NT$ 6.5 兆",
    topStocks: [
      { id: "2881", name: "富邦金", symbol: "2881", price: 75.8, change: 0.5, changePercent: 0.66 },
      { id: "2882", name: "國泰金", symbol: "2882", price: 54.3, change: 0.2, changePercent: 0.37 },
      { id: "2891", name: "中信金", symbol: "2891", price: 38.6, change: 0.4, changePercent: 1.05 }
    ]
  },
  {
    id: "shipping",
    name: "航運業 (Shipping)",
    description: "與全球總體經濟、地緣政治（如紅海危機）高度連動，包含貨櫃航運、散裝航運與航空客貨運。",
    icon: "Ship",
    marketCap: "NT$ 1.8 兆",
    topStocks: [
      { id: "2603", name: "長榮", symbol: "2603", price: 215.0, change: -2.0, changePercent: -0.92 },
      { id: "2609", name: "陽明", symbol: "2609", price: 74.5, change: -0.8, changePercent: -1.06 },
      { id: "2618", name: "長榮航", symbol: "2618", price: 36.8, change: 0.3, changePercent: 0.82 }
    ]
  }
];
