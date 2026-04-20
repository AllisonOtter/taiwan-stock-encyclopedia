import fs from 'fs';
import path from 'path';

// Parse the categories file using regex to extract topStocks
const categoriesPath = path.join(process.cwd(), 'src', 'data', 'categories.ts');
const content = fs.readFileSync(categoriesPath, 'utf8');

const stocks = [];
const regex = /{ id: "[^"]+", name: "([^"]+)", symbol: "([^"]+)", price: ([\d.]+), change: ([\d.-]+), changePercent: ([\d.-]+) }/g;

let match;
while ((match = regex.exec(content)) !== null) {
  stocks.push({
    name: match[1],
    symbol: match[2],
    price: parseFloat(match[3]),
    change: parseFloat(match[4]),
    changePercent: parseFloat(match[5])
  });
}

const stocksDir = path.join(process.cwd(), 'src', 'data', 'stocks');
if (!fs.existsSync(stocksDir)) {
  fs.mkdirSync(stocksDir, { recursive: true });
}

stocks.forEach(stock => {
  const filePath = path.join(stocksDir, `${stock.symbol}.ts`);
  
  // Skip 2330 as it is already beautifully crafted
  if (stock.symbol === '2330') return;

  const fileContent = `export const stockData = {
  symbol: "${stock.symbol}",
  name: "${stock.name}",
  sector: "依分類歸屬",
  currentPrice: ${stock.price},
  change: ${stock.change},
  changePercent: ${stock.changePercent},
  marketCap: "NT$ -- 兆",
  history: {
    founded: "未知",
    description: "${stock.name} 是台灣市場的重要企業之一。本欄位目前為自動生成的初版資料，後續將匯入更詳細的歷史沿革與發展軌跡。",
    milestones: [
      { year: "創立", event: "公司正式成立並投入所屬產業營運。" },
      { year: "上市", event: "在台灣證券交易所掛牌上市，邁入資本市場。" },
      { year: "近年", event: "持續擴大產能與業務規模，於市場中保持競爭力。" }
    ]
  },
  supplyChain: {
    upstream: ["上游原物料或關鍵零組件供應商"],
    midstream: ["${stock.name} 本身核心業務"],
    downstream: ["下游客戶或終端消費市場"],
    description: "在產業鏈中扮演承上啟下的關鍵角色。持續優化供應鏈管理，降低成本並提升產品附加價值。"
  },
  geopolitics: {
    usRelations: "與全球供應鏈及宏觀經濟息息相關，受中美貿易摩擦與全球貨幣政策波動的間接或直接影響。",
    globalImpact: "身為台灣重要企業，積極拓展海外版圖，以分散單一市場風險。",
    keyUSPartners: ["國際合作夥伴 A", "國際客戶 B"]
  },
  operations: {
    revenue: "依最新財報公告",
    yoyGrowth: "--%",
    grossMargin: "--%",
    highlights: [
      "維持穩健的營運體質與現金流。",
      "積極投入研發與數位轉型，提升長期競爭力。",
      "在市場波動中展現經營韌性。"
    ]
  },
  leadership: {
    chairman: "現任董事長",
    ceo: "現任總經理/執行長",
    news: [
      "管理層持續推動 ESG 永續發展目標。",
      "對未來幾年的產業景氣抱持審慎樂觀的態度。",
      "透過策略聯盟與併購，尋求新的成長引擎。"
    ]
  }
};
`;

  fs.writeFileSync(filePath, fileContent);
  console.log(`Generated data for ${stock.symbol} ${stock.name}`);
});
