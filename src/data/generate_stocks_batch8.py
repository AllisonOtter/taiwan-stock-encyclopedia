import json
import os

stocks_data = {
    "8050": {
        "symbol": "8050",
        "name": "廣積 (IBASE)",
        "sector": "電腦及週邊設備業",
        "currentPrice": 95.0,
        "change": 1.5,
        "changePercent": 1.60,
        "marketCap": "NT$ 180 億",
        "history": {
            "founded": "2000年",
            "description": "專業工業電腦 (IPC) 大廠，專注於網通設備、數位看板與博弈機台的主機板研發。",
            "milestones": [{ "year": "2000", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["Intel, AMD"], "midstream": ["工業電腦系統"], "downstream": ["網安設備大廠", "博弈大廠"], "description": "強項在於客製化網通與博弈專案。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "受惠美國基礎建設與網通更新專案。", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 65 億", "yoyGrowth": "+10%", "grossMargin": "約 28%", "highlights": ["網通高階專案出貨穩定"] },
        "leadership": { "chairman": "林秋城", "ceo": "林秋城", "news": ["積極佈局邊緣 AI 視覺運算設備。"] }
    },
    "8114": {
        "symbol": "8114",
        "name": "振樺電 (Posiflex)",
        "sector": "電腦及週邊設備業",
        "currentPrice": 215.0,
        "change": 10.0,
        "changePercent": 4.88,
        "marketCap": "NT$ 250 億",
        "history": {
            "founded": "1984年",
            "description": "全球前三大 POS (端點銷售系統) 品牌，並透過併購瑞傳跨足工業電腦與 KIOSK (自助服務機) 領域。",
            "milestones": [{ "year": "1984", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["電子零組件", "面板"], "midstream": ["POS 系統", "自助點餐機"], "downstream": ["全球零售業", "餐飲業", "金融業"], "description": "受惠於全球缺工帶來的自助服務機 (KIOSK) 建置潮。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 120 億", "yoyGrowth": "+15%", "grossMargin": "約 35%", "highlights": ["高毛利之 KIOSK 與網通 IPC 出貨動能強勁"] },
        "leadership": { "chairman": "陳茂強", "ceo": "陳茂強", "news": ["擴大在北美市場的市佔率與服務據點。"] }
    },
    "6139": {
        "symbol": "6139",
        "name": "亞翔 (L&K)",
        "sector": "建材營造",
        "currentPrice": 245.0,
        "change": 15.0,
        "changePercent": 6.52,
        "marketCap": "NT$ 550 億",
        "history": {
            "founded": "1978年",
            "description": "台灣頂尖的無塵室與機電空調工程公司，與漢唐並列半導體建廠的雙箭頭，近年拿下聯電新加坡廠巨額訂單。",
            "milestones": [{ "year": "1978", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["管材", "線材", "空調設備"], "midstream": ["無塵室設計與施工"], "downstream": ["聯電", "台積電", "面板廠"], "description": "半導體全球擴廠潮的核心受惠工程廠。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 560 億", "yoyGrowth": "+80%", "grossMargin": "約 12%", "highlights": ["新加坡廠工程認列進入高峰，營收獲利呈爆炸性成長"] },
        "leadership": { "chairman": "姚祖驤", "ceo": "姚祖驤", "news": ["在手訂單維持歷史高檔，能見度極佳。"] }
    },
    "2404": {
        "symbol": "2404",
        "name": "漢唐 (UIS)",
        "sector": "建材營造",
        "currentPrice": 380.0,
        "change": 5.0,
        "changePercent": 1.33,
        "marketCap": "NT$ 720 億",
        "history": {
            "founded": "1982年",
            "description": "台灣無塵室工程龍頭，為台積電最核心的建廠工程夥伴，一路跟隨台積電赴美、日設廠。",
            "milestones": [{ "year": "1982", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["建材", "機電設備"], "midstream": ["無塵室工程", "廠務系統統包"], "downstream": ["台積電", "美光", "力積電"], "description": "業績與台積電資本支出具備 100% 正相關。" },
        "geopolitics": { "usRelations": "台積電亞利桑那州建廠專案的統包工程商，受當地法規與缺工挑戰。", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 680 億", "yoyGrowth": "+15%", "grossMargin": "約 15%", "highlights": ["高配息特性使其成為 ETF 成分股熱門標的"] },
        "leadership": { "chairman": "李惠文", "ceo": "李惠文", "news": ["美國與日本海外工程進度穩健推進。"] }
    },
    "3293": {
        "symbol": "3293",
        "name": "鈊象 (IGS)",
        "sector": "資訊服務業",
        "currentPrice": 1150.0,
        "change": 25.0,
        "changePercent": 2.22,
        "marketCap": "NT$ 1,600 億",
        "history": {
            "founded": "1989年",
            "description": "台灣遊戲股王，以大型機台起家，後成功轉型博弈手遊 (明星三缺一、金猴爺)，海外授權金收入龐大。",
            "milestones": [{ "year": "1989", "event": "成立。" }, { "year": "2024", "event": "股價突破千元大關。" }]
        },
        "supplyChain": { "upstream": ["軟體工程師", "美術設計"], "midstream": ["遊戲開發與營運"], "downstream": ["全球手遊玩家", "海外代理商"], "description": "擁有極高的毛利率與強大的現金流。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 140 億", "yoyGrowth": "+20%", "grossMargin": "高達 96%", "highlights": ["海外授權 (尤其是東南亞與歐洲市場) 營收持續爆發"] },
        "leadership": { "chairman": "李柯柱", "ceo": "江順成", "news": ["積極拓展歐洲博弈遊戲授權市場。"] }
    },
    "3714": {
        "symbol": "3714",
        "name": "富采 (Ennostar)",
        "sector": "光電業",
        "currentPrice": 42.5,
        "change": 0.5,
        "changePercent": 1.19,
        "marketCap": "NT$ 320 億",
        "history": {
            "founded": "2021年",
            "description": "由晶電與隆達合併成立，為台灣最大、全球領先的 LED 磊晶與封裝廠，專注於 Mini LED 及 Micro LED 技術。",
            "milestones": [{ "year": "2021", "event": "晶電與隆達合併成立富采投資控股。" }]
        },
        "supplyChain": { "upstream": ["藍寶石基板", "化學氣體"], "midstream": ["LED 磊晶", "Mini LED 封裝"], "downstream": ["Apple", "各大面板廠", "車用照明"], "description": "曾是 Apple iPad Mini LED 背光的主要供應商。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "受中國 LED 廠低價競爭嚴重影響獲利。", "keyUSPartners": ["Apple"] },
        "operations": { "revenue": "NT$ 220 億", "yoyGrowth": "-5%", "grossMargin": "約 12%", "highlights": ["積極轉型車用與高階感測應用以擺脫紅海競爭"] },
        "leadership": { "chairman": "彭双浪", "ceo": "彭双浪", "news": ["加速開發次世代顯示技術 Micro LED 產能。"] }
    },
    "6799": {
        "symbol": "6799",
        "name": "瑞鼎 (Raydium)",
        "sector": "半導體業",
        "currentPrice": 415.0,
        "change": 15.0,
        "changePercent": 3.75,
        "marketCap": "NT$ 310 億",
        "history": {
            "founded": "2003年",
            "description": "友達集團旗下的面板驅動 IC (DDI) 設計廠，在高階 OLED 與車用驅動 IC 具備極強競爭力。",
            "milestones": [{ "year": "2003", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["晶圓代工廠"], "midstream": ["面板驅動 IC 設計"], "downstream": ["友達", "中國各大面板廠"], "description": "OLED 面板滲透率提升的核心受惠者。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 180 億", "yoyGrowth": "+15%", "grossMargin": "約 32%", "highlights": ["AMOLED 驅動晶片出貨量大增"] },
        "leadership": { "chairman": "黃裕國", "ceo": "黃裕國", "news": ["車用 TDDI 產品打入全球一線車廠供應鏈。"] }
    },
    "8299": {
        "symbol": "8299",
        "name": "群聯 (Phison)",
        "sector": "半導體業",
        "currentPrice": 620.0,
        "change": -5.0,
        "changePercent": -0.80,
        "marketCap": "NT$ 1,200 億",
        "history": {
            "founded": "2000年",
            "description": "全球最大的 NAND Flash 控制 IC 及儲存解決方案供應商，掌握記憶體模組的靈魂大腦。",
            "milestones": [{ "year": "2000", "event": "發明全球第一支單晶片隨身碟。" }]
        },
        "supplyChain": { "upstream": ["NAND 原廠 (Kioxia, Micron)"], "midstream": ["Flash 控制 IC", "SSD 模組組裝"], "downstream": ["PC 廠", "企業伺服器廠"], "description": "同時擁有 IC 設計與模組製造能力的混合型企業。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["各大 NAND 原廠"] },
        "operations": { "revenue": "NT$ 650 億", "yoyGrowth": "+20%", "grossMargin": "約 30%", "highlights": ["PCIe Gen5 控制晶片領先全球出貨"] },
        "leadership": { "chairman": "潘健成", "ceo": "馬中迅", "news": ["推出全球首款支援 7GB/s 傳輸的 AI 伺服器專用儲存方案。"] }
    },
    "5483": {
        "symbol": "5483",
        "name": "中美晶 (SAS)",
        "sector": "半導體業",
        "currentPrice": 215.0,
        "change": 8.0,
        "changePercent": 3.86,
        "marketCap": "NT$ 1,250 億",
        "history": {
            "founded": "1981年",
            "description": "台灣太陽能與半導體矽晶圓材料大廠，母以子貴，持有環球晶 (6488) 過半股權。",
            "milestones": [{ "year": "1981", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["多晶矽"], "midstream": ["太陽能電池", "半導體矽晶圓"], "downstream": ["太陽能模組廠", "晶圓代工廠"], "description": "實質上已轉型為半導體控股集團。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 820 億", "yoyGrowth": "-5%", "grossMargin": "約 32%", "highlights": ["主要獲利來源為認列子公司環球晶之收益"] },
        "leadership": { "chairman": "徐秀蘭", "ceo": "徐秀蘭", "news": ["積極投資化合物半導體 (第三代半導體) 領域。"] }
    },
    "3105": {
        "symbol": "3105",
        "name": "穩懋 (WIN Semi)",
        "sector": "半導體業",
        "currentPrice": 155.0,
        "change": 5.0,
        "changePercent": 3.33,
        "marketCap": "NT$ 650 億",
        "history": {
            "founded": "1999年",
            "description": "全球最大的砷化鎵 (GaAs) 晶圓代工廠，主導全球智慧型手機的功率放大器 (PA) 與 3D 感測元件代工。",
            "milestones": [{ "year": "1999", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["砷化鎵基板"], "midstream": ["三五族半導體晶圓代工"], "downstream": ["IC 設計公司 (Broadcom, Skyworks)"], "description": "手機通訊訊號與 Wi-Fi 晶片的最強代工廠。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "受全球智慧型手機庫存週期影響極大。", "keyUSPartners": ["Broadcom"] },
        "operations": { "revenue": "NT$ 150 億", "yoyGrowth": "+10%", "grossMargin": "約 25%", "highlights": ["手機庫存去化結束，產能利用率回升"] },
        "leadership": { "chairman": "陳進財", "ceo": "陳國樺", "news": ["佈局低軌衛星與光通訊雷射晶片代工。"] }
    },
    "2458": {
        "symbol": "2458",
        "name": "義隆 (ELAN)",
        "sector": "半導體業",
        "currentPrice": 165.0,
        "change": 3.0,
        "changePercent": 1.85,
        "marketCap": "NT$ 480 億",
        "history": {
            "founded": "1994年",
            "description": "全球筆電觸控板模組與觸控晶片的絕對王者，市佔率極高。",
            "milestones": [{ "year": "1994", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["晶圓代工廠"], "midstream": ["觸控 IC 設計與模組"], "downstream": ["全球前十大筆電品牌廠"], "description": "具備強大的專利佈局，幾乎壟斷非蘋陣營筆電的觸控板。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "受惠 AI PC 換機潮。", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 120 億", "yoyGrowth": "+12%", "grossMargin": "約 48%", "highlights": ["高單價的觸控板與指向儒 (Point Stick) 市佔率穩固"] },
        "leadership": { "chairman": "葉儀皓", "ceo": "葉儀皓", "news": ["推出支援 AI 應用的智慧人機介面解決方案。"] }
    },
    "6414": {
        "symbol": "6414",
        "name": "樺漢 (Ennoconn)",
        "sector": "電腦及週邊設備業",
        "currentPrice": 315.0,
        "change": 5.0,
        "changePercent": 1.61,
        "marketCap": "NT$ 410 億",
        "history": {
            "founded": "1999年",
            "description": "鴻海集團旗下的工業電腦大廠，透過大量跨國併購 (如 Kontron)，迅速躍升為全球 IPC 龍頭企業之一。",
            "milestones": [{ "year": "1999", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["Intel 等各式晶片"], "midstream": ["工業電腦與系統整合", "博弈機台"], "downstream": ["智慧城市", "智慧工廠", "金融機構"], "description": "軟硬體系統整合實力極強的控股型企業。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 1,200 億", "yoyGrowth": "+15%", "grossMargin": "約 18%", "highlights": ["在手訂單逾千億，軟硬整合方案營收佔比提升"] },
        "leadership": { "chairman": "朱復銓", "ceo": "朱復銓", "news": ["積極深耕 AI 機器人與智慧製造市場。"] }
    },
    "2392": {
        "symbol": "2392",
        "name": "正崴 (Foxlink)",
        "sector": "電子零組件業",
        "currentPrice": 72.0,
        "change": 4.5,
        "changePercent": 6.67,
        "marketCap": "NT$ 350 億",
        "history": {
            "founded": "1986年",
            "description": "泛鴻海集團成員，專注於連接器、電池模組與電源管理，近年因投入 AI 算力中心建置而成為飆股。",
            "milestones": [{ "year": "1986", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["銅材", "塑膠原料"], "midstream": ["連接器", "線纜總成", "算力機房建置"], "downstream": ["Apple", "微軟 Xbox", "台灣 AI 算力買家"], "description": "從傳統連接器廠跨足高毛利的 AI 算力服務營運商。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["Apple", "Microsoft"] },
        "operations": { "revenue": "NT$ 950 億", "yoyGrowth": "+8%", "grossMargin": "約 12%", "highlights": ["宣布斥資打造全台最大的 AI 算力中心 (採用 NVIDIA 超級電腦)"] },
        "leadership": { "chairman": "郭台強", "ceo": "郭台強", "news": ["積極轉型 AI 算力服務提供商 (CSP)。"] }
    },
    "3044": {
        "symbol": "3044",
        "name": "健鼎 (Tripod)",
        "sector": "電子零組件業",
        "currentPrice": 215.0,
        "change": 2.5,
        "changePercent": 1.18,
        "marketCap": "NT$ 1,100 億",
        "history": {
            "founded": "1998年",
            "description": "全球前六大 PCB (印刷電路板) 製造商，以優異的成本控管能力與穩健獲利聞名，車用 PCB 佔比高。",
            "milestones": [{ "year": "1998", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["銅箔基板 (CCL)", "銅箔"], "midstream": ["傳統硬板 PCB", "HDI 板"], "downstream": ["汽車電子", "記憶體模組", "伺服器"], "description": "PCB 產業中的資優生，獲利極度穩定。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 620 億", "yoyGrowth": "+5%", "grossMargin": "約 22%", "highlights": ["車用 HDI 板與伺服器板出貨佔比提升"] },
        "leadership": { "chairman": "王景春", "ceo": "王景春", "news": ["越南新廠按計畫建置中。"] }
    },
    "6269": {
        "symbol": "6269",
        "name": "台郡 (Flexium)",
        "sector": "電子零組件業",
        "currentPrice": 85.0,
        "change": 0.5,
        "changePercent": 0.59,
        "marketCap": "NT$ 280 億",
        "history": {
            "founded": "1997年",
            "description": "台灣前兩大軟性印刷電路板 (FPC) 製造商，與臻鼎-KY (4958) 同為蘋果 iPhone 的重要軟板供應商。",
            "milestones": [{ "year": "1997", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["PI 薄膜", "軟性銅箔基板 (FCCL)"], "midstream": ["軟性印刷電路板設計與製造"], "downstream": ["Apple (iPhone, iPad, Watch)"], "description": "業績高度依賴蘋果新機銷量。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["Apple"] },
        "operations": { "revenue": "NT$ 320 億", "yoyGrowth": "-5%", "grossMargin": "約 15%", "highlights": ["積極開發高頻 LCP 軟板以對應 AI 手機需求"] },
        "leadership": { "chairman": "鄭明智", "ceo": "鄭明智", "news": ["擴大研發光通訊與高頻高速軟板技術。"] }
    },
    "3552": {
        "symbol": "3552",
        "name": "同致 (TTE)",
        "sector": "汽車工業",
        "currentPrice": 125.0,
        "change": 3.5,
        "changePercent": 2.88,
        "marketCap": "NT$ 105 億",
        "history": {
            "founded": "1979年",
            "description": "亞洲最大的倒車雷達系統廠，近年轉型發展先進駕駛輔助系統 (ADAS) 與自動泊車系統。",
            "milestones": [{ "year": "1979", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["超音波感測器", "影像鏡頭"], "midstream": ["ADAS 系統模組", "倒車雷達"], "downstream": ["中國合資車廠", "全球各大車廠"], "description": "自駕車與車用電子趨勢的純度極高概念股。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 95 億", "yoyGrowth": "+10%", "grossMargin": "約 25%", "highlights": ["自動泊車 (APA) 系統出貨量持續成長"] },
        "leadership": { "chairman": "陳信忠", "ceo": "陳信忠", "news": ["打入多家新創電動車品牌的 ADAS 供應鏈。"] }
    },
    "6271": {
        "symbol": "6271",
        "name": "同欣電 (Tong Hsing)",
        "sector": "半導體業",
        "currentPrice": 155.0,
        "change": 4.5,
        "changePercent": 2.99,
        "marketCap": "NT$ 260 億",
        "history": {
            "founded": "1974年",
            "description": "國巨集團旗下成員，為全球最大的陶瓷電路板及 CMOS 影像感測器封裝測試廠。",
            "milestones": [{ "year": "1974", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["陶瓷粉體", "晶圓"], "midstream": ["陶瓷基板", "CIS 影像封裝"], "downstream": ["LED 廠", "車用影像模組廠", "低軌衛星"], "description": "掌握高頻與高功率散熱陶瓷基板核心技術。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 110 億", "yoyGrowth": "+8%", "grossMargin": "約 22%", "highlights": ["車用 CIS 封裝與低軌衛星 RF 模組需求強勁"] },
        "leadership": { "chairman": "陳泰銘", "ceo": "張嘉帥", "news": ["八德新廠產能開出，聚焦高頻射頻與車用影像封裝。"] }
    },
    "3515": {
        "symbol": "3515",
        "name": "華擎 (ASRock)",
        "sector": "電腦及週邊設備業",
        "currentPrice": 215.0,
        "change": 8.0,
        "changePercent": 3.86,
        "marketCap": "NT$ 250 億",
        "history": {
            "founded": "2002年",
            "description": "和碩集團旗下的主機板與迷你電腦品牌，近年也跨足顯示卡與伺服器代工市場。",
            "milestones": [{ "year": "2002", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["Intel, AMD, NVIDIA"], "midstream": ["主機板", "顯示卡", "工業電腦"], "downstream": ["DIY PC 玩家", "中小企業伺服器"], "description": "以高性價比在中階 DIY PC 市場具備強大競爭力。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["AMD"] },
        "operations": { "revenue": "NT$ 180 億", "yoyGrowth": "+15%", "grossMargin": "約 20%", "highlights": ["主機板庫存去化結束，伺服器業務穩定貢獻獲利"] },
        "leadership": { "chairman": "童子賢", "ceo": "許隆倫", "news": ["推出全新系列 AI PC 支援主機板。"] }
    },
    "9910": {
        "symbol": "9910",
        "name": "豐泰 (Feng Tay)",
        "sector": "其他業",
        "currentPrice": 145.0,
        "change": 2.5,
        "changePercent": 1.75,
        "marketCap": "NT$ 1,400 億",
        "history": {
            "founded": "1971年",
            "description": "台灣製鞋雙雄之一，為全球最大運動品牌 Nike 的最核心代工廠，生產全球超過六分之一的 Nike 運動鞋。",
            "milestones": [{ "year": "1971", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["橡膠", "皮革", "紡織布料"], "midstream": ["運動鞋代工製造"], "downstream": ["Nike"], "description": "與 Nike 具備長達 40 年以上的深度綁定關係。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "受全球消費力道道與奧運等大型賽事影響。", "keyUSPartners": ["Nike"] },
        "operations": { "revenue": "NT$ 850 億", "yoyGrowth": "+5%", "grossMargin": "約 22%", "highlights": ["奧運拉貨潮帶動產能利用率回升"] },
        "leadership": { "chairman": "王建弘", "ceo": "王建弘", "news": ["持續擴充印度與印尼廠區產能。"] }
    },
    "8454": {
        "symbol": "8454",
        "name": "富邦媒 (momo)",
        "sector": "數位雲端",
        "currentPrice": 420.0,
        "change": -5.0,
        "changePercent": -1.18,
        "marketCap": "NT$ 1,000 億",
        "history": {
            "founded": "2004年",
            "description": "台灣電商產業的絕對霸主 (momo 購物網)，隸屬於富邦集團，擁有極強的物流基礎建設與品牌護城河。",
            "milestones": [{ "year": "2004", "event": "成立。" }, { "year": "2021", "event": "疫情期間業績爆發，股價曾突破兩千元。" }]
        },
        "supplyChain": { "upstream": ["全球各大消費品牌與供應商"], "midstream": ["電商平台", "自動化倉儲與物流"], "downstream": ["台灣千萬消費者"], "description": "B2C 電商市佔率第一，規模經濟優勢難以撼動。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "面臨韓國酷澎 (Coupang) 與蝦皮的激烈競爭。", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 1,150 億", "yoyGrowth": "+6%", "grossMargin": "約 10%", "highlights": ["積極發展零售媒體網路 (RMN) 廣告業務，拓展非商品營收"] },
        "leadership": { "chairman": "蔡明忠", "ceo": "谷元宏", "news": ["南區大型物流中心正式啟用，提升中南部配送效率。"] }
    }
}

target_dir = "/Users/alu/.gemini/antigravity/scratch/taiwan_stock_encyclopedia/src/data/stocks"
os.makedirs(target_dir, exist_ok=True)

for sym, data in stocks_data.items():
    code = f"export const stockData = {json.dumps(data, ensure_ascii=False, indent=2)};\n"
    path = os.path.join(target_dir, f"{sym}.ts")
    with open(path, 'w', encoding='utf-8') as f:
        f.write(code)
print("Batch 8 Stock files generated.")
