import json
import os

stocks_data = {
    "2101": {
        "symbol": "2101",
        "name": "南港 (Nankang)",
        "sector": "橡膠工業",
        "currentPrice": 45.0,
        "change": 0.5,
        "changePercent": 1.12,
        "marketCap": "NT$ 380 億",
        "history": {
            "founded": "1959年",
            "description": "台灣歷史最悠久的輪胎廠，近年因南港舊廠區「世界明珠」百億建案開發，轉型為資產股大黑馬。",
            "milestones": [{ "year": "1959", "event": "公司成立。" }, { "year": "2024", "event": "世界明珠建案陸續入帳。" }]
        },
        "supplyChain": { "upstream": ["天然橡膠", "合成橡膠"], "midstream": ["輪胎製造"], "downstream": ["汽車維修廠", "一般消費者"], "description": "輪胎本業穩定，實質為重資產開發商。" },
        "geopolitics": { "usRelations": "受美國對輪胎反傾銷稅影響。", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 120 億", "yoyGrowth": "+250%", "grossMargin": "約 45% (含營建)", "highlights": ["世界明珠百億交屋入帳帶動獲利爆發"] },
        "leadership": { "chairman": "郭林諒", "ceo": "郭林諒", "news": ["輪胎本業推動高階 EV 專用胎。"] }
    },
    "2103": {
        "symbol": "2103",
        "name": "台橡 (TSRC)",
        "sector": "橡膠工業",
        "currentPrice": 28.5,
        "change": -0.2,
        "changePercent": -0.7,
        "marketCap": "NT$ 230 億",
        "history": {
            "founded": "1973年",
            "description": "台灣最大的合成橡膠製造商，提供下游輪胎廠與鞋廠關鍵原料。",
            "milestones": [{ "year": "1973", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["丁二烯", "苯乙烯"], "midstream": ["合成橡膠 (SBR, BR)"], "downstream": ["輪胎廠 (正新、建大)", "製鞋廠 (寶成)"], "description": "扮演石化業與橡膠製品業的橋樑。" },
        "geopolitics": { "usRelations": "受國際油價波動影響大。", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 320 億", "yoyGrowth": "+5%", "grossMargin": "約 12%", "highlights": ["特用化學與高值化橡膠佔比提升"] },
        "leadership": { "chairman": "齊力", "ceo": "蔡偉強", "news": ["積極開拓醫療級與鞋材特用橡膠市場。"] }
    },
    "2548": {
        "symbol": "2548",
        "name": "華固 (Huaku)",
        "sector": "建材營造",
        "currentPrice": 125.0,
        "change": 2.5,
        "changePercent": 2.04,
        "marketCap": "NT$ 350 億",
        "history": {
            "founded": "1989年",
            "description": "台灣高階商辦與頂級住宅的知名建商，以高配息與穩健推案著稱，被譽為營建股資優生。",
            "milestones": [{ "year": "1989", "event": "公司成立。" }]
        },
        "supplyChain": { "upstream": ["土地", "建材 (台泥、中鋼)"], "midstream": ["房地產開發推案"], "downstream": ["高資產客群", "企業總部買家"], "description": "掌握大台北地區優質土地資源。" },
        "geopolitics": { "usRelations": "無直接影響，受國內央行信用管制與利率影響大。", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 158 億", "yoyGrowth": "+15%", "grossMargin": "約 35%", "highlights": ["頂級商辦廠辦銷售熱絡", "每年維持高配息率"] },
        "leadership": { "chairman": "鍾榮昌", "ceo": "洪嘉昇", "news": ["積極跨足北士科與內湖高階廠辦開發。"] }
    },
    "2504": {
        "symbol": "2504",
        "name": "國產 (Goldsun)",
        "sector": "建材營造",
        "currentPrice": 42.5,
        "change": 1.2,
        "changePercent": 2.9,
        "marketCap": "NT$ 500 億",
        "history": {
            "founded": "1954年",
            "description": "台灣預拌混凝土龍頭，受惠於台積電全台大擴廠，是半導體建廠潮的「隱形贏家」。",
            "milestones": [{ "year": "1954", "event": "國產實業成立。" }]
        },
        "supplyChain": { "upstream": ["砂石", "水泥"], "midstream": ["預拌混凝土"], "downstream": ["營造廠", "高科技建廠工程 (台積電廠房)"], "description": "掌握台灣絕大多數高強度科技廠房的混凝土供應。" },
        "geopolitics": { "usRelations": "間接受惠於美國促使台灣半導體在地擴廠。", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 220 億", "yoyGrowth": "+12%", "grossMargin": "約 25%", "highlights": ["科技廠房高磅數混凝土毛利極佳", "南港廠區龐大土地資產開發中"] },
        "leadership": { "chairman": "徐蘭英", "ceo": "吳志仁", "news": ["擴大購買預拌混凝土車車隊以應付強勁需求。"] }
    },
    "2707": {
        "symbol": "2707",
        "name": "晶華 (FIH)",
        "sector": "觀光餐旅",
        "currentPrice": 225.0,
        "change": 3.0,
        "changePercent": 1.35,
        "marketCap": "NT$ 280 億",
        "history": {
            "founded": "1976年",
            "description": "台灣頂級飯店餐飲集團龍頭，旗下擁有台北晶華酒店、Silks Place、捷絲旅等品牌。",
            "milestones": [{ "year": "1990", "event": "台北晶華酒店正式開幕。" }]
        },
        "supplyChain": { "upstream": ["生鮮食材", "高端服務人力"], "midstream": ["飯店運營與餐飲服務"], "downstream": ["國際商務客", "國內高端消費者"], "description": "台灣飯店業的標竿企業。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "受全球旅遊景氣與國際商務客來台數量直接影響。", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 65 億", "yoyGrowth": "+18%", "grossMargin": "約 35%", "highlights": ["國際客回流帶動住房率與房價雙升", "餐飲表現強勁"] },
        "leadership": { "chairman": "潘思亮", "ceo": "吳偉正", "news": ["跨足海外，將捷絲旅品牌推向日本。"] }
    },
    "2731": {
        "symbol": "2731",
        "name": "雄獅 (Lion Travel)",
        "sector": "觀光餐旅",
        "currentPrice": 145.0,
        "change": -1.5,
        "changePercent": -1.02,
        "marketCap": "NT$ 130 億",
        "history": {
            "founded": "1977年",
            "description": "台灣最大的上市旅行社，近年積極轉型為旅遊生活產業平台。",
            "milestones": [{ "year": "1977", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["航空公司", "各國飯店", "當地地接社"], "midstream": ["旅遊行程規劃與包裝"], "downstream": ["國內旅客", "企業員工旅遊"], "description": "掌握台灣出國旅遊的最大客源通路。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "受兩岸關係(禁團令)及日圓匯率影響甚鉅。", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 250 億", "yoyGrowth": "+30%", "grossMargin": "約 12%", "highlights": ["國人出國旅遊熱潮爆發，營收大幅成長"] },
        "leadership": { "chairman": "王文傑", "ceo": "王文傑", "news": ["積極佈局高價鐵道旅遊與深度體驗行程。"] }
    },
    "9934": {
        "symbol": "9934",
        "name": "成霖 (Globe Union)",
        "sector": "居家生活",
        "currentPrice": 18.5,
        "change": 0.2,
        "changePercent": 1.09,
        "marketCap": "NT$ 75 億",
        "history": {
            "founded": "1979年",
            "description": "亞洲最大的水龍頭與衛浴陶瓷製造商之一，主攻歐美市場。",
            "milestones": [{ "year": "1979", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["銅金屬", "陶瓷原料"], "midstream": ["衛浴五金製造"], "downstream": ["Home Depot 等北美修繕通路", "建商"], "description": "高度依賴北美房屋修繕市場。" },
        "geopolitics": { "usRelations": "產品主要外銷美國，受當地關稅與房地產景氣影響。", "globalImpact": "無", "keyUSPartners": ["Home Depot", "Lowe's"] },
        "operations": { "revenue": "NT$ 180 億", "yoyGrowth": "-2%", "grossMargin": "約 25%", "highlights": ["積極去化庫存，毛利逐漸回升"] },
        "leadership": { "chairman": "歐陽明", "ceo": "歐陽明", "news": ["拓展自有品牌 Gerber 在北美的市佔率。"] }
    },
    "9908": {
        "symbol": "9908",
        "name": "大台北 (Great Taipei Gas)",
        "sector": "油電燃氣業",
        "currentPrice": 35.0,
        "change": 0.1,
        "changePercent": 0.28,
        "marketCap": "NT$ 180 億",
        "history": {
            "founded": "1964年",
            "description": "大台北地區獨佔的天然氣供應商，具備強大的特許護城河與防禦型收息特性。",
            "milestones": [{ "year": "1964", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["中油 (供應天然氣)"], "midstream": ["管線配送"], "downstream": ["大台北地區家庭與商業用戶"], "description": "標準的公用事業，不受景氣循環影響。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "受國際天然氣價格連動，但國內有價格平穩機制。", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 45 億", "yoyGrowth": "+2%", "grossMargin": "約 20%", "highlights": ["獲利與配息長年穩定，為存股族最愛"] },
        "leadership": { "chairman": "陳建州", "ceo": "陳建州", "news": ["持續推動微電腦瓦斯表普及。"] }
    },
    "2903": {
        "symbol": "2903",
        "name": "遠百 (Far Eastern)",
        "sector": "綜合企業",
        "currentPrice": 25.5,
        "change": -0.1,
        "changePercent": -0.39,
        "marketCap": "NT$ 360 億",
        "history": {
            "founded": "1967年",
            "description": "遠東集團旗下百貨事業群，涵蓋遠東百貨、大遠百與轉投資的 SOGO 百貨。",
            "milestones": [{ "year": "1967", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["各大專櫃品牌", "餐飲品牌"], "midstream": ["百貨商場運營"], "downstream": ["消費者"], "description": "台灣實體零售與地產開發的重要指標。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 380 億", "yoyGrowth": "+8%", "grossMargin": "約 48%", "highlights": ["大巨蛋 SOGO CITY 開幕帶來龐大營收動能"] },
        "leadership": { "chairman": "徐旭東", "ceo": "徐雪芳", "news": ["積極發展體驗式商場，對抗電商衝擊。"] }
    },
    "9925": {
        "symbol": "9925",
        "name": "新保 (Shin Kong Security)",
        "sector": "其他業",
        "currentPrice": 42.0,
        "change": 0.2,
        "changePercent": 0.48,
        "marketCap": "NT$ 160 億",
        "history": {
            "founded": "1980年",
            "description": "新光集團旗下保全公司，與中保科齊名，近年跨足智慧城市、長照與物聯網安防。",
            "milestones": [{ "year": "1980", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["監視器設備廠", "感測器"], "midstream": ["系統保全服務與派勤"], "downstream": ["企業戶", "銀行", "一般家庭"], "description": "具備高續約率的訂閱制商業模式。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 75 億", "yoyGrowth": "+4%", "grossMargin": "約 32%", "highlights": ["穩定配息，跨足智慧長照領域初見成效"] },
        "leadership": { "chairman": "林伯峰", "ceo": "林伯峰", "news": ["擴大投資無人機安防巡檢技術。"] }
    },
    "8464": {
        "symbol": "8464",
        "name": "億豐 (Nien Made)",
        "sector": "其他業",
        "currentPrice": 380.0,
        "change": 10.0,
        "changePercent": 2.7,
        "marketCap": "NT$ 1,100 億",
        "history": {
            "founded": "1974年",
            "description": "全球最大的客製化百葉窗製造商，是台灣傳產外銷的隱形冠軍。",
            "milestones": [{ "year": "1974", "event": "成立。" }, { "year": "2015", "event": "重新回台上市。" }]
        },
        "supplyChain": { "upstream": ["木材", "塑膠原料"], "midstream": ["百葉窗與窗飾製造"], "downstream": ["北美大型通路", "客製化設計師"], "description": "在北美的客製化窗飾市場佔有統治地位。" },
        "geopolitics": { "usRelations": "高度依賴美國房地產景氣與房屋修繕市場。", "globalImpact": "無", "keyUSPartners": ["Home Depot", "各大美國設計師通路"] },
        "operations": { "revenue": "NT$ 280 億", "yoyGrowth": "+10%", "grossMargin": "高達 55%", "highlights": ["客製化產品比重極高，締造驚人毛利率"] },
        "leadership": { "chairman": "粘耿豪", "ceo": "粘耿豪", "news": ["墨西哥新廠產能開出，就近供應北美市場。"] }
    }
}

target_dir = "/Users/alu/.gemini/antigravity/scratch/taiwan_stock_encyclopedia/src/data/stocks"
os.makedirs(target_dir, exist_ok=True)

for sym, data in stocks_data.items():
    code = f"export const stockData = {json.dumps(data, ensure_ascii=False, indent=2)};\n"
    path = os.path.join(target_dir, f"{sym}.ts")
    with open(path, 'w', encoding='utf-8') as f:
        f.write(code)
print("Batch 3 Stock files generated.")
