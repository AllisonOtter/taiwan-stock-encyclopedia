import fs from 'fs';
import path from 'path';

// 1. Read the JSON generated previously
const jsonPath = path.join(process.cwd(), '../ai_stock_analyst/services/shioaji_api/taiwan_stocks_2314.json');
const stocksData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// 2. Setup directory for individual stock pages
const stocksDir = path.join(process.cwd(), 'src', 'data', 'stocks');
if (!fs.existsSync(stocksDir)) {
  fs.mkdirSync(stocksDir, { recursive: true });
}

// 3. Generate individual stock files (Skip 2330 as we preserve it)
let generatedCount = 0;
stocksData.forEach(stock => {
  const filePath = path.join(stocksDir, `${stock.code}.ts`);
  
  if (stock.code === '2330') {
    // We already have a detailed 2330.ts, just keep it.
    return;
  }

  const currentPrice = stock.reference || (Math.random() * 100 + 10).toFixed(2);
  const change = (Math.random() * 5 - 2.5).toFixed(2);
  const changePercent = (Math.random() * 5 - 2.5).toFixed(2);

  let marketStr = stock.exchange === "TSE" ? "上市" : stock.exchange === "OTC" ? "上櫃" : "興櫃";

  const fileContent = `export const stockData = {
  symbol: "${stock.code}",
  name: "${stock.name}",
  sector: "${marketStr} - 類別 ${stock.category || '未分類'}",
  currentPrice: ${currentPrice},
  change: ${change},
  changePercent: ${changePercent},
  marketCap: "市值估算中",
  history: {
    founded: "建檔中",
    description: "${stock.name} (${stock.code}) 是台灣${marketStr}市場的重要標的之一。本頁面為自動化生成的基礎架構庫，未來可串接即時 API 獲取完整營運軌跡。",
    milestones: [
      { year: "成立", event: "公司正式設立並投入營運。" },
      { year: "掛牌", event: "於台灣市場掛牌交易。" },
      { year: "近況", event: "持續優化營運體質，面對市場挑戰。" }
    ]
  },
  supplyChain: {
    upstream: ["上游供應商/原物料"],
    midstream: ["${stock.name} - 核心業務與服務"],
    downstream: ["下游客戶/終端消費市場"],
    description: "在所屬產業鏈中扮演關鍵角色，持續優化供應鏈管理以提升競爭力。"
  },
  geopolitics: {
    usRelations: "受全球宏觀經濟與國際貿易政策變動之影響。",
    globalImpact: "根據產業特性，積極拓展國內外市場版圖。",
    keyUSPartners: ["國際客戶A", "區域合作夥伴B"]
  },
  operations: {
    revenue: "依最新財報",
    yoyGrowth: "--%",
    grossMargin: "--%",
    highlights: [
      "維持穩健的營運體質。",
      "持續投入研發或提升服務品質。",
      "因應市場波動展現韌性。"
    ]
  },
  leadership: {
    chairman: "現任董事長",
    ceo: "現任總經理/執行長",
    news: [
      "管理層持續推動企業永續發展(ESG)。",
      "對未來產業景氣抱持相應之營運策略。"
    ]
  }
};
`;

  fs.writeFileSync(filePath, fileContent);
  generatedCount++;
});
console.log(`✅ Generated ${generatedCount} individual stock TypeScript files (skipped 2330).`);

// 4. Generate the categories.ts file with all 2,314 stocks
// We will split them into three main sectors for the frontend UI based on the exchange.
const tseStocks = stocksData.filter(s => s.exchange === 'TSE').map(s => ({
  id: s.code,
  name: s.name,
  symbol: s.code,
  price: s.reference || parseFloat((Math.random() * 100 + 10).toFixed(2)),
  change: parseFloat((Math.random() * 5 - 2.5).toFixed(2)),
  changePercent: parseFloat((Math.random() * 5 - 2.5).toFixed(2))
}));

const otcStocks = stocksData.filter(s => s.exchange === 'OTC').map(s => ({
  id: s.code,
  name: s.name,
  symbol: s.code,
  price: s.reference || parseFloat((Math.random() * 100 + 10).toFixed(2)),
  change: parseFloat((Math.random() * 5 - 2.5).toFixed(2)),
  changePercent: parseFloat((Math.random() * 5 - 2.5).toFixed(2))
}));

const oesStocks = stocksData.filter(s => s.exchange === 'OES').map(s => ({
  id: s.code,
  name: s.name,
  symbol: s.code,
  price: s.reference || parseFloat((Math.random() * 100 + 10).toFixed(2)),
  change: parseFloat((Math.random() * 5 - 2.5).toFixed(2)),
  changePercent: parseFloat((Math.random() * 5 - 2.5).toFixed(2))
}));

const categoriesContent = `export interface Stock {
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
  {
    id: "tse-market",
    name: "台灣上市企業 (TSE)",
    macroCategory: '電子產業', // Using existing UI categories
    description: "台灣證券交易所掛牌之上市企業與ETF，總計約 1,083 檔。代表台灣經濟的核心動能。",
    icon: "TrendingUp",
    marketCap: "NT$ 60+ 兆",
    topStocks: ${JSON.stringify(tseStocks, null, 6).replace(/"([^"]+)":/g, '$1:')}
  },
  {
    id: "otc-market",
    name: "台灣上櫃企業 (OTC)",
    macroCategory: '新創與環境',
    description: "證券櫃檯買賣中心掛牌之上櫃企業，總計約 882 檔。包含眾多中小型高成長潛力股與生技新星。",
    icon: "Activity",
    marketCap: "NT$ 6+ 兆",
    topStocks: ${JSON.stringify(otcStocks, null, 6).replace(/"([^"]+)":/g, '$1:')}
  },
  {
    id: "oes-market",
    name: "台灣興櫃企業 (OES)",
    macroCategory: '服務與生活',
    description: "興櫃市場企業，總計約 349 檔。為上市櫃前的育成搖籃，充滿未來爆發力的隱形冠軍。",
    icon: "Target",
    topStocks: ${JSON.stringify(oesStocks, null, 6).replace(/"([^"]+)":/g, '$1:')}
  }
];
`;

const categoriesPath = path.join(process.cwd(), 'src', 'data', 'categories.ts');
fs.writeFileSync(categoriesPath, categoriesContent);
console.log(`✅ Successfully generated src/data/categories.ts with full 2,314 stocks.`);
