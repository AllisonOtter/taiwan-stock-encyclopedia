import json
import os

stocks_data = {
    "2313": {
        "symbol": "2313",
        "name": "華通 (Compeq)",
        "sector": "電子零組件",
        "currentPrice": 82.5,
        "change": 1.2,
        "changePercent": 1.48,
        "marketCap": "NT$ 980 億",
        "history": {
            "founded": "1973年",
            "description": "台灣 HDI (高密度連接板) 第一大廠，同時也是全球低軌衛星 PCB 的最主要供應商。",
            "milestones": [
                { "year": "1973", "event": "華通電腦成立。" },
                { "year": "2020", "event": "打入 SpaceX 星鏈計畫供應鏈。" }
            ]
        },
        "supplyChain": {
            "upstream": ["銅箔基板", "玻纖布"],
            "midstream": ["HDI板", "軟硬結合板"],
            "downstream": ["美系智慧手機 (Apple)", "低軌衛星 (SpaceX)"],
            "description": "在低軌衛星板的市佔率具備壓倒性優勢。"
        },
        "geopolitics": {
            "usRelations": "深受美國推動低軌衛星通訊與太空產業發展的利多帶動。",
            "globalImpact": "台灣太空科技實力的重要輸出口。",
            "keyUSPartners": ["SpaceX", "Apple"]
        },
        "operations": {
            "revenue": "NT$ 720 億",
            "yoyGrowth": "+15%",
            "grossMargin": "約 17%",
            "highlights": ["低軌衛星營收貢獻持續擴大"]
        },
        "leadership": { "chairman": "吳健", "ceo": "江培琨", "news": ["泰國新廠動工，分散地緣生產風險。"] }
    },
    "3037": {
        "symbol": "3037",
        "name": "欣興 (Unimicron)",
        "sector": "電子零組件",
        "currentPrice": 185.0,
        "change": 3.5,
        "changePercent": 1.93,
        "marketCap": "NT$ 2,800 億",
        "history": {
            "founded": "1990年",
            "description": "全球 IC 載板龍頭之一，為聯電集團成員。主要產品為 ABF 載板與 BT 載板。",
            "milestones": [{ "year": "1990", "event": "成立並投入 PCB 領域。" }]
        },
        "supplyChain": {
            "upstream": ["ABF 材料 (味之素)", "銅箔"],
            "midstream": ["ABF 載板", "BT 載板"],
            "downstream": ["CPU/GPU 設計廠 (NVIDIA, Intel, AMD)", "晶圓代工 (台積電)"],
            "description": "是 AI 晶片先進封裝中不可或缺的關鍵材料供應商。"
        },
        "geopolitics": {
            "usRelations": "高度連動美國晶片法案及 AI 晶片出貨進度。",
            "globalImpact": "左右全球高階運算晶片的出貨順暢度。",
            "keyUSPartners": ["Intel", "NVIDIA", "AMD"]
        },
        "operations": {
            "revenue": "NT$ 1,100 億",
            "yoyGrowth": "+8%",
            "grossMargin": "約 22%",
            "highlights": ["光復新廠量產，主攻高階 AI 伺服器載板"]
        },
        "leadership": { "chairman": "曾子章", "ceo": "曾子章", "news": ["AI 產品比重持續拉升，營運漸入佳境。"] }
    },
    "2368": {
        "symbol": "2368",
        "name": "金像電 (Gold Circuit)",
        "sector": "電子零組件",
        "currentPrice": 245.0,
        "change": 5.0,
        "changePercent": 2.08,
        "marketCap": "NT$ 1,100 億",
        "history": {
            "founded": "1981年",
            "description": "全球最大的雲端伺服器 PCB 供應商，專注於高層數、高頻高速厚板製造。",
            "milestones": [{ "year": "1981", "event": "公司成立。" }, { "year": "2023", "event": "AI 伺服器板出貨量激增。" }]
        },
        "supplyChain": {
            "upstream": ["高階銅箔基板 (台光電、聯致)"],
            "midstream": ["高層數 PCB (伺服器主板、OAM、UBB)"],
            "downstream": ["伺服器代工廠 (廣達、緯穎)"],
            "description": "其產品為 AI 伺服器內部乘載 GPU 與 CPU 的超級大腦主板。"
        },
        "geopolitics": {
            "usRelations": "受惠於美國雲端巨頭 (CSP) 建立 AI 資料中心的軍備競賽。",
            "globalImpact": "無",
            "keyUSPartners": ["Microsoft", "AWS (間接)"]
        },
        "operations": {
            "revenue": "NT$ 350 億",
            "yoyGrowth": "+25%",
            "grossMargin": "約 30%",
            "highlights": ["AI 伺服器板毛利率極佳，帶動獲利創新高"]
        },
        "leadership": { "chairman": "楊建輝", "ceo": "楊建輝", "news": ["因應高階訂單需求，台灣廠區持續擴產。"] }
    },
    "3406": {
        "symbol": "3406",
        "name": "玉晶光 (GSEO)",
        "sector": "光電業",
        "currentPrice": 480.0,
        "change": 15.0,
        "changePercent": 3.2,
        "marketCap": "NT$ 550 億",
        "history": {
            "founded": "1990年",
            "description": "全球前三大手機鏡頭製造商，也是 Apple 供應鏈中大立光的主要競爭對手。",
            "milestones": [{ "year": "1990", "event": "成立於台中。" }]
        },
        "supplyChain": {
            "upstream": ["光學塑料", "鏡片模具"],
            "midstream": ["手機鏡頭", "VR/AR 透鏡"],
            "downstream": ["Apple", "Meta (VR)"],
            "description": "除手機外，也是 Meta 與 Apple 頭戴式裝置 (Vision Pro) 的鏡頭核心供應商。"
        },
        "geopolitics": {
            "usRelations": "深度綁定美國消費性電子巨頭。",
            "globalImpact": "無",
            "keyUSPartners": ["Apple", "Meta"]
        },
        "operations": {
            "revenue": "NT$ 220 億",
            "yoyGrowth": "+12%",
            "grossMargin": "約 35%",
            "highlights": ["潛望式鏡頭良率提升", "VR/MR 產品線成長動能強"]
        },
        "leadership": { "chairman": "陳天慶", "ceo": "陳天慶", "news": ["看好下半年美系客戶新機拉貨潮。"] }
    },
    "3481": {
        "symbol": "3481",
        "name": "群創 (Innolux)",
        "sector": "光電業",
        "currentPrice": 14.8,
        "change": -0.1,
        "changePercent": -0.67,
        "marketCap": "NT$ 1,400 億",
        "history": {
            "founded": "2003年",
            "description": "鴻海集團旗下全球領先的面板大廠，近年積極轉型跨足扇出型面板級封裝 (FOPLP)。",
            "milestones": [{ "year": "2003", "event": "群創光電成立。" }, { "year": "2024", "event": "將部分舊世代面板廠轉型為半導體封裝廠。" }]
        },
        "supplyChain": {
            "upstream": ["玻璃基板", "偏光板", "驅動IC"],
            "midstream": ["TFT-LCD", "FOPLP 封裝"],
            "downstream": ["電視與筆電品牌", "半導體設計廠 (新業務)"],
            "description": "以面板廠之姿跨界進入半導體先進封裝，備受市場矚目。"
        },
        "geopolitics": {
            "usRelations": "受全球消費性電子景氣及中國面板廠產能擴張影響。",
            "globalImpact": "全球第三大電視面板廠。",
            "keyUSPartners": ["Vizio", "Dell"]
        },
        "operations": {
            "revenue": "NT$ 2,100 億",
            "yoyGrowth": "+2%",
            "grossMargin": "約 5%",
            "highlights": ["非顯示器業務營收比重朝 20% 邁進"]
        },
        "leadership": { "chairman": "洪進揚", "ceo": "楊柱祥", "news": ["FOPLP 封裝技術獲國際大廠認證，預計下半年放量。"] }
    },
    "3045": {
        "symbol": "3045",
        "name": "台灣大 (Taiwan Mobile)",
        "sector": "通信網路",
        "currentPrice": 110.0,
        "change": 0.5,
        "changePercent": 0.45,
        "marketCap": "NT$ 4,300 億",
        "history": {
            "founded": "1997年",
            "description": "台灣電信三雄之一，富邦集團成員。結合旗下 momo 購物網發展「mo幣多」生態圈。",
            "milestones": [{ "year": "2023", "event": "正式合併台灣之星，用戶數大幅成長。" }]
        },
        "supplyChain": {
            "upstream": ["網通設備廠 (Nokia, Ericsson)"],
            "midstream": ["電信服務", "寬頻網路"],
            "downstream": ["一般消費者", "企業專網"],
            "description": "電信服務與電商雙引擎運作。"
        },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 1,900 億", "yoyGrowth": "+8%", "grossMargin": "N/A", "highlights": ["合併綜效顯現", "momo貢獻穩定營收"] },
        "leadership": { "chairman": "蔡明忠", "ceo": "林之晨", "news": ["積極推展 5G 企業專網與 AI 應用服務。"] }
    },
    "4904": {
        "symbol": "4904",
        "name": "遠傳 (Far EasTone)",
        "sector": "通信網路",
        "currentPrice": 88.5,
        "change": 0.2,
        "changePercent": 0.22,
        "marketCap": "NT$ 3,100 億",
        "history": {
            "founded": "1997年",
            "description": "遠東集團旗下電信公司，主打「大人物」(大數據、人工智慧、物聯網) 轉型策略。",
            "milestones": [{ "year": "2023", "event": "正式合併亞太電信。" }]
        },
        "supplyChain": {
            "upstream": ["Ericsson (主要設備商)"],
            "midstream": ["行動通訊", "企業雲端服務"],
            "downstream": ["消費者", "智慧城市政府專案"],
            "description": "新經濟營收佔比為電信三雄中最高。"
        },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["微軟 (雲端戰略夥伴)"] },
        "operations": { "revenue": "NT$ 950 億", "yoyGrowth": "+6%", "grossMargin": "N/A", "highlights": ["新經濟獲利表現亮眼"] },
        "leadership": { "chairman": "徐旭東", "ceo": "井琪", "news": ["利用 AI 進行網路節能，大幅降低碳排。"] }
    },
    "3010": {
        "symbol": "3010",
        "name": "華立 (Wah Lee)",
        "sector": "電子通路",
        "currentPrice": 142.0,
        "change": 2.0,
        "changePercent": 1.42,
        "marketCap": "NT$ 350 億",
        "history": {
            "founded": "1968年",
            "description": "台灣老牌的高階工程塑膠與半導體材料代理商，伴隨台灣科技業成長。",
            "milestones": [{ "year": "1968", "event": "公司成立。" }]
        },
        "supplyChain": {
            "upstream": ["日本住友", "JSR (半導體光阻液)"],
            "midstream": ["材料代理與通路"],
            "downstream": ["台積電", "各大面板廠與 PCB 廠"],
            "description": "是台灣半導體前段先進製程關鍵化學品與光阻液的最重要引進者。"
        },
        "geopolitics": { "usRelations": "代理多國材料，扮演穩定台灣科技廠原物料來源的角色。", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 780 億", "yoyGrowth": "+12%", "grossMargin": "約 8%", "highlights": ["半導體先進製程材料出貨創高"] },
        "leadership": { "chairman": "張尊賢", "ceo": "張尊賢", "news": ["切入 CoWoS 先進封裝材料供應。"] }
    },
    "6183": {
        "symbol": "6183",
        "name": "關貿 (Trade-Van)",
        "sector": "資訊服務",
        "currentPrice": 75.0,
        "change": 0.5,
        "changePercent": 0.67,
        "marketCap": "NT$ 110 億",
        "history": {
            "founded": "1996年",
            "description": "具備官股色彩的資訊服務業，掌管全台通關網路、電子發票與報稅系統。",
            "milestones": [{ "year": "1996", "event": "由財政部推動成立。" }]
        },
        "supplyChain": {
            "upstream": ["硬體伺服器", "資安軟體"],
            "midstream": ["系統整合與平台運營"],
            "downstream": ["財政部", "進出口報關行", "零售通路"],
            "description": "台灣數位基礎設施的重要維運者。"
        },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 25 億", "yoyGrowth": "+5%", "grossMargin": "約 38%", "highlights": ["每年獲利與配息極度穩定，為優質定存股"] },
        "leadership": { "chairman": "張武訓", "ceo": "高國峯", "news": ["協助導入新一代雲端電子發票系統。"] }
    },
    "6869": {
        "symbol": "6869",
        "name": "雲豹能源 (J&V Energy)",
        "sector": "綠能環保",
        "currentPrice": 280.0,
        "change": 8.0,
        "changePercent": 2.94,
        "marketCap": "NT$ 350 億",
        "history": {
            "founded": "2016年",
            "description": "台灣成長最快的綠能開發與營運商，涵蓋太陽光電、風電及儲能系統。",
            "milestones": [{ "year": "2016", "event": "公司成立。" }, { "year": "2024", "event": "轉上市，受惠於國內 AI 資料中心對綠電的龐大需求。" }]
        },
        "supplyChain": {
            "upstream": ["太陽能模組", "儲能電池"],
            "midstream": ["綠能案場開發與 EPC 統包"],
            "downstream": ["台電", "需要綠電憑證的大型企業 (台積電、Google)"],
            "description": "台灣綠電憑證市場的重要供給者。"
        },
        "geopolitics": { "usRelations": "受惠於全球 RE100 倡議，國際大廠要求台灣供應鏈使用綠電。", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 85 億", "yoyGrowth": "+45%", "grossMargin": "約 20%", "highlights": ["大型儲能案場陸續併網", "綠電交易收入大增"] },
        "leadership": { "chairman": "賴勁麟 (前任)", "ceo": "趙書閔", "news": ["宣布擴大投資水資源處理與循環經濟領域。"] }
    },
    "9933": {
        "symbol": "9933",
        "name": "中鼎 (CTCI)",
        "sector": "綠能環保",
        "currentPrice": 45.2,
        "change": 0.1,
        "changePercent": 0.22,
        "marketCap": "NT$ 360 億",
        "history": {
            "founded": "1979年",
            "description": "台灣最大、全球排名前段班的國際級統包工程 (EPC) 公司。近年積極轉向綠色工程與高科技建廠。",
            "milestones": [{ "year": "1979", "event": "中鼎工程成立。" }]
        },
        "supplyChain": {
            "upstream": ["建材", "工程設備"],
            "midstream": ["EPC 統包工程管理"],
            "downstream": ["台電 (發電廠)", "中油", "高科技廠"],
            "description": "承包大量國內外焚化爐、水資源處理及風電海底基礎工程。"
        },
        "geopolitics": { "usRelations": "在美國亦有承接石化與半導體建廠專案。", "globalImpact": "台灣少數具備國際輸出能力的工程服務商。", "keyUSPartners": ["各跨國石化與科技巨頭"] },
        "operations": { "revenue": "NT$ 1,050 億", "yoyGrowth": "+10%", "grossMargin": "約 6%", "highlights": ["在手訂單突破 3,500 億元，創歷史新高"] },
        "leadership": { "chairman": "楊宗興", "ceo": "楊宗興", "news": ["奪得多項中東地區超大型煉油與水資源工程標案。"] }
    },
    "6472": {
        "symbol": "6472",
        "name": "保瑞 (Bora)",
        "sector": "生技醫療",
        "currentPrice": 750.0,
        "change": 25.0,
        "changePercent": 3.44,
        "marketCap": "NT$ 780 億",
        "history": {
            "founded": "2007年",
            "description": "台灣生技業 CDMO (委託開發暨製造服務) 龍頭，透過不斷併購國際藥廠代工線快速壯大。",
            "milestones": [{ "year": "2007", "event": "保瑞藥業成立。" }, { "year": "2024", "event": "成功併購美國藥廠，取得北美製造基地。" }]
        },
        "supplyChain": {
            "upstream": ["原料藥 (API)"],
            "midstream": ["製劑開發與代工製造 (CDMO)"],
            "downstream": ["全球大型品牌藥廠"],
            "description": "堪稱「生技界的台積電」，專注於製藥代工與全球銷售通路佈局。"
        },
        "geopolitics": { "usRelations": "受惠於美國《生物安全法案》(Biosecure Act) 排除中國藥廠，迎來龐大轉單效應。", "globalImpact": "台灣最具國際競爭力的生技製藥廠。", "keyUSPartners": ["Amneal (併購對象/夥伴)"] },
        "operations": { "revenue": "NT$ 150 億", "yoyGrowth": "+35%", "grossMargin": "約 45%", "highlights": ["美國廠併購效益顯現，營收獲利呈爆發性成長"] },
        "leadership": { "chairman": "盛保熙", "ceo": "盛保熙", "news": ["看好 CDMO 轉單效應，持續評估海外併購標的。"] }
    },
    "2359": {
        "symbol": "2359",
        "name": "所羅門 (Solomon)",
        "sector": "其他電子",
        "currentPrice": 165.0,
        "change": 14.5,
        "changePercent": 9.63,
        "marketCap": "NT$ 280 億",
        "history": {
            "founded": "1973年",
            "description": "老牌電子零件代理商成功轉型為 3D 視覺與 AI 機器人解決方案大廠，為 NVIDIA 機器人平台的重要合作夥伴。",
            "milestones": [{ "year": "2024", "event": "黃仁勳於 GTC 大會點名所羅門，股價隨即狂飆。" }]
        },
        "supplyChain": {
            "upstream": ["NVIDIA Isaac 平台", "工業相機"],
            "midstream": ["AI 3D 視覺軟體與機器手臂整合"],
            "downstream": ["自動化鞋廠", "物流中心", "半導體檢測"],
            "description": "賦予傳統機器手臂「眼睛」與「大腦」，是工業自動化的靈魂。"
        },
        "geopolitics": { "usRelations": "深度結合 NVIDIA 生態圈。", "globalImpact": "台灣少數以自有 AI 軟體打入全球一線機器人供應鏈的公司。", "keyUSPartners": ["NVIDIA"] },
        "operations": { "revenue": "NT$ 40 億", "yoyGrowth": "+20%", "grossMargin": "約 35%", "highlights": ["AI 視覺系統獲國際一線物流與製造大廠導入"] },
        "leadership": { "chairman": "陳政隆", "ceo": "陳政隆", "news": ["擴展人形機器人視覺演算模組研發。"] }
    },
    "6741": {
        "symbol": "6741",
        "name": "91APP-KY",
        "sector": "數位雲端",
        "currentPrice": 105.0,
        "change": 2.5,
        "changePercent": 2.43,
        "marketCap": "NT$ 125 億",
        "history": {
            "founded": "2013年",
            "description": "台灣最大的 OMO (線上融合線下) 零售軟體即服務 (SaaS) 公司，協助實體品牌數位轉型。",
            "milestones": [{ "year": "2021", "event": "成為台灣首家以 SaaS 模式掛牌上櫃的軟體公司。" }]
        },
        "supplyChain": {
            "upstream": ["雲端基礎設施 (AWS)"],
            "midstream": ["零售電商 SaaS 系統開發"],
            "downstream": ["大型實體零售品牌 (全聯、寶雅、PUMA)"],
            "description": "提供品牌專屬的 APP、官網與門市系統一站式整合。"
        },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 15 億", "yoyGrowth": "+18%", "grossMargin": "約 75%", "highlights": ["SaaS 訂閱制帶來極高且穩定的毛利率", "商品交易總額 (GMV) 持續創高"] },
        "leadership": { "chairman": "何英圻", "ceo": "楊明芳", "news": ["導入 AI 生成功能，協助品牌自動化精準行銷。"] }
    }
}

target_dir = "/Users/alu/.gemini/antigravity/scratch/taiwan_stock_encyclopedia/src/data/stocks"
os.makedirs(target_dir, exist_ok=True)

for sym, data in stocks_data.items():
    code = f"export const stockData = {json.dumps(data, ensure_ascii=False, indent=2)};\n"
    path = os.path.join(target_dir, f"{sym}.ts")
    with open(path, 'w', encoding='utf-8') as f:
        f.write(code)
print("Batch 2 Stock files generated.")
