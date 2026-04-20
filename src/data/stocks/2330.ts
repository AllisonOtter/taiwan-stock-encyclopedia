export interface StockDetailData {
  symbol: string;
  name: string;
  sector: string;
  currentPrice: number;
  change: number;
  changePercent: number;
  marketCap: string;
  history: {
    founded: string;
    description: string;
    milestones: { year: string; event: string }[];
  };
  supplyChain: {
    upstream: string[];
    midstream: string[];
    downstream: string[];
    description: string;
  };
  geopolitics: {
    usRelations: string;
    globalImpact: string;
    keyUSPartners: string[];
  };
  operations: {
    revenue: string;
    yoyGrowth: string;
    grossMargin: string;
    highlights: string[];
  };
  leadership: {
    chairman: string;
    ceo: string;
    news: string[];
  };
}

export const tsmcData: StockDetailData = {
  symbol: "2330",
  name: "台灣積體電路製造 (TSMC)",
  sector: "半導體產業",
  currentPrice: 825.0,
  change: 15.0,
  changePercent: 1.85,
  marketCap: "NT$ 21.4 兆",
  history: {
    founded: "1987年",
    description: "台積電是全球第一家，也是最大的專業積體電路製造服務（晶圓代工）公司。由張忠謀博士創立，開創了晶圓代工模式，讓IC設計公司能專注於設計，而將製造交給專業代工廠。",
    milestones: [
      { year: "1987", event: "公司成立，開創專業晶圓代工模式。" },
      { year: "1994", event: "在台灣證券交易所掛牌上市。" },
      { year: "1997", event: "成為首家在美國紐約證券交易所（NYSE）上市的台灣企業。" },
      { year: "2020", event: "領先全球量產5奈米製程。" },
      { year: "2022", event: "3奈米製程技術順利進入量產。" }
    ]
  },
  supplyChain: {
    upstream: ["矽晶圓 (環球晶、信越)", "半導體設備 (ASML, 應用材料, 艾司摩爾)", "光罩、化學品 (信越化學)"],
    midstream: ["晶圓代工 (台積電自身)"],
    downstream: ["IC設計 (蘋果, 輝達, 超微, 聯發科)", "封裝測試 (日月光)", "終端消費電子、AI伺服器"],
    description: "台積電位居全球半導體產業鏈中游的核心位置。其極度依賴上游的先進設備（如ASML的EUV光刻機）與高純度化學材料，並為下游頂尖的無廠半導體公司（Fabless）提供不可或缺的製造服務。"
  },
  geopolitics: {
    usRelations: "台積電與美股科技巨頭（如 NVIDIA, Apple, AMD）具有深度綁定的共生關係。美國對先進晶片的出口管制與晶片法案（CHIPS Act）直接影響台積電的全球佈局，促使其在美國亞利桑那州建立先進晶圓廠。",
    globalImpact: "被譽為台灣的「護國神山」，在全球地緣政治中扮演關鍵角色（Silicon Shield）。各國為確保半導體供應鏈安全，紛紛邀請台積電設廠（如日本熊本廠、德國德勒斯登廠）。",
    keyUSPartners: ["NVIDIA", "Apple", "AMD", "Qualcomm", "Broadcom"]
  },
  operations: {
    revenue: "NT$ 2.16兆 (2023全年)",
    yoyGrowth: "-4.5% (產業庫存調整期)",
    grossMargin: "54.4%",
    highlights: [
      "3奈米（N3）製程強勁成長，為營收帶來顯著貢獻。",
      "高效能運算 (HPC) 與 AI 相關需求暴增，抵銷了部分消費性電子疲軟的影響。",
      "資本支出維持在高檔，持續投資先進製程與海外擴廠。"
    ]
  },
  leadership: {
    chairman: "劉德音 (Mark Liu) / 魏哲家 (C.C. Wei)",
    ceo: "魏哲家 (C.C. Wei)",
    news: [
      "劉德音董事長宣布於2024年股東會後退休，由魏哲家接任董事長兼總裁。",
      "管理層強調 AI 將成為未來幾年最強勁的成長動能。",
      "積極推動全球化佈局與 ESG 綠能目標，承諾 2050 年達到淨零排放。"
    ]
  }
};
