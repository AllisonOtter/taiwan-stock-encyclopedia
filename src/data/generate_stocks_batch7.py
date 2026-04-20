import json
import os

stocks_data = {
    "3693": {
        "symbol": "3693",
        "name": "營邦 (AIC)",
        "sector": "電腦及週邊設備業",
        "currentPrice": 420.0,
        "change": 15.0,
        "changePercent": 3.70,
        "marketCap": "NT$ 180 億",
        "history": {
            "founded": "1996年",
            "description": "台灣頂尖的伺服器機箱與系統準系統製造商，因精準切入 AI 儲存伺服器與高階雲端機櫃，成為近年最強悍的 AI 飆股之一。",
            "milestones": [{ "year": "1996", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["金屬沖壓件"], "midstream": ["伺服器機殼與準系統組裝"], "downstream": ["北美中大型資料中心", "雲端服務供應商"], "description": "具備高度客製化的白牌伺服器系統整合能力。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["北美二線 CSP 業者"] },
        "operations": { "revenue": "NT$ 95 億", "yoyGrowth": "+45%", "grossMargin": "約 28%", "highlights": ["高階儲存伺服器專案出貨暢旺，推升毛利"] },
        "leadership": { "chairman": "梁建萬", "ceo": "梁建萬", "news": ["擴建桃園新廠因應北美伺服器強勁需求。"] }
    },
    "6117": {
        "symbol": "6117",
        "name": "迎廣 (InWin)",
        "sector": "電腦及週邊設備業",
        "currentPrice": 125.0,
        "change": 8.5,
        "changePercent": 7.30,
        "marketCap": "NT$ 110 億",
        "history": {
            "founded": "1985年",
            "description": "原本以電競 PC 機殼聞名，近年成功轉型跨入伺服器機殼與系統組裝領域，轉型效益爆發。",
            "milestones": [{ "year": "1985", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["鋼材", "鋁材"], "midstream": ["電競機殼", "伺服器機殼"], "downstream": ["PC 玩家", "伺服器系統廠"], "description": "伺服器產品營收佔比拉升至過半，成功擺脫 PC 景氣循環。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 25 億", "yoyGrowth": "+30%", "grossMargin": "約 25%", "highlights": ["伺服器機殼與水冷配件出貨帶動獲利轉機"] },
        "leadership": { "chairman": "賴文政", "ceo": "賴文政", "news": ["積極研發水冷與液冷伺服器機構件。"] }
    },
    "2360": {
        "symbol": "2360",
        "name": "致茂 (Chroma)",
        "sector": "其他電子業",
        "currentPrice": 385.0,
        "change": 12.0,
        "changePercent": 3.22,
        "marketCap": "NT$ 1,600 億",
        "history": {
            "founded": "1984年",
            "description": "全球量測儀器與自動化測試設備 (ATE) 領導大廠，客戶涵蓋半導體、電動車與綠能產業。",
            "milestones": [{ "year": "1984", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["各式電子零組件"], "midstream": ["精密量測儀器", "半導體測試設備"], "downstream": ["台積電", "NVIDIA", "特斯拉"], "description": "AI 晶片與電動車電池品質控管的關鍵設備商。" },
        "geopolitics": { "usRelations": "與 NVIDIA 在 AI 晶片系統級測試 (SLT) 設備上有深入合作。", "globalImpact": "無", "keyUSPartners": ["NVIDIA", "Tesla"] },
        "operations": { "revenue": "NT$ 210 億", "yoyGrowth": "+18%", "grossMargin": "約 48%", "highlights": ["AI 晶片 SLT 測試設備獨家供應，毛利表現優異"] },
        "leadership": { "chairman": "黃欽明", "ceo": "黃欽明", "news": ["擴大 SLT 測試設備產能以滿足客戶急單。"] }
    },
    "3374": {
        "symbol": "3374",
        "name": "精材 (Xintec)",
        "sector": "半導體業",
        "currentPrice": 215.0,
        "change": 5.0,
        "changePercent": 2.38,
        "marketCap": "NT$ 580 億",
        "history": {
            "founded": "1998年",
            "description": "台積電集團旗下的晶圓級封裝廠，專注於 CMOS 影像感測器與微機電 (MEMS) 的封裝。",
            "milestones": [{ "year": "1998", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["台積電 (晶圓代工)"], "midstream": ["晶圓級晶片尺寸封裝 (WLCSP)"], "downstream": ["Apple 等智慧手機品牌"], "description": "高度依賴台積電與蘋果供應鏈。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "受全球消費性電子與手機景氣影響大。", "keyUSPartners": ["Apple (間接)"] },
        "operations": { "revenue": "NT$ 65 億", "yoyGrowth": "+10%", "grossMargin": "約 32%", "highlights": ["車用影像感測器封裝需求穩定成長"] },
        "leadership": { "chairman": "陳家湘", "ceo": "陳家湘", "news": ["宣佈興建新廠房，佈局下一代先進測試產能。"] }
    },
    "3227": {
        "symbol": "3227",
        "name": "原相 (PixArt)",
        "sector": "半導體業",
        "currentPrice": 185.0,
        "change": 3.0,
        "changePercent": 1.65,
        "marketCap": "NT$ 260 億",
        "history": {
            "founded": "1998年",
            "description": "全球 CMOS 影像感測器與光學滑鼠晶片設計大廠，為任天堂 Switch 感測晶片的核心供應商。",
            "milestones": [{ "year": "1998", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["台積電/聯電代工"], "midstream": ["CMOS 感測 IC 設計"], "downstream": ["滑鼠廠", "任天堂", "安防設備廠"], "description": "在電競滑鼠與遊戲機感測領域具備獨霸地位。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["任天堂"] },
        "operations": { "revenue": "NT$ 68 億", "yoyGrowth": "+12%", "grossMargin": "約 58%", "highlights": ["滑鼠庫存去化完畢，遊戲機新機備貨潮啟動"] },
        "leadership": { "chairman": "黃森煌", "ceo": "黃森煌", "news": ["積極拓展安防與健康量測感測晶片市場。"] }
    },
    "4966": {
        "symbol": "4966",
        "name": "譜瑞-KY (Parade)",
        "sector": "半導體業",
        "currentPrice": 850.0,
        "change": 25.0,
        "changePercent": 3.03,
        "marketCap": "NT$ 680 億",
        "history": {
            "founded": "2005年",
            "description": "高速傳輸介面晶片設計大廠，專注於 eDP/DP 等顯示介面，為 Apple Mac 與 iPad 的重要供應商。",
            "milestones": [{ "year": "2005", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["晶圓代工"], "midstream": ["高速傳輸介面 IC 設計"], "downstream": ["Apple", "各大 PC 品牌", "面板廠"], "description": "在高速傳輸 Retimer 與 Redriver 晶片領域技術領先。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "受惠於 AI PC 帶動的 PCIe Gen5 等高速傳輸規格升級。", "keyUSPartners": ["Apple"] },
        "operations": { "revenue": "NT$ 150 億", "yoyGrowth": "+18%", "grossMargin": "約 45%", "highlights": ["AI PC 規格升級帶動高階 Retimer 晶片出貨量大增"] },
        "leadership": { "chairman": "趙捷", "ceo": "趙捷", "news": ["推出全新 USB4 與 PCIe Gen5 解決方案。"] }
    },
    "2634": {
        "symbol": "2634",
        "name": "漢翔 (AIDC)",
        "sector": "其他業",
        "currentPrice": 52.0,
        "change": 0.8,
        "changePercent": 1.56,
        "marketCap": "NT$ 480 億",
        "history": {
            "founded": "1969年",
            "description": "台灣航太工業龍頭，負責國機國造 (勇鷹號高教機) 計畫，同時也是波音與空巴的重要零組件供應商。",
            "milestones": [{ "year": "1969", "event": "航空工業發展中心成立。" }]
        },
        "supplyChain": { "upstream": ["複合材料", "特殊合金"], "midstream": ["飛機機體結構", "發動機零組件製造"], "downstream": ["中華民國國軍", "Boeing", "Airbus"], "description": "兼具國防自主與國際商用航太雙重題材。" },
        "geopolitics": { "usRelations": "與美國奇異 (GE) 發動機及洛克希德馬丁 (Lockheed Martin) F-16 維修有深度合作。", "globalImpact": "受全球商用客機缺機與軍工防衛需求雙重帶動。", "keyUSPartners": ["Boeing", "GE", "Lockheed Martin"] },
        "operations": { "revenue": "NT$ 380 億", "yoyGrowth": "+22%", "grossMargin": "約 12%", "highlights": ["勇鷹號進入交機高峰期，商用航太訂單回溫"] },
        "leadership": { "chairman": "胡開宏", "ceo": "馬萬鈞", "news": ["積極爭取 F-16 亞太維修中心商機。"] }
    },
    "8046": {
        "symbol": "8046",
        "name": "南電 (Nan Ya PCB)",
        "sector": "電子零組件業",
        "currentPrice": 165.0,
        "change": 4.5,
        "changePercent": 2.80,
        "marketCap": "NT$ 1,050 億",
        "history": {
            "founded": "1997年",
            "description": "台塑集團旗下南亞塑膠的轉投資公司，為全球頂尖的 ABF 與 BT 載板製造商。",
            "milestones": [{ "year": "1997", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["ABF 樹脂材料"], "midstream": ["ABF載板", "BT載板"], "downstream": ["CPU/網通晶片封裝廠"], "description": "與欣興、景碩並列台灣載板三雄。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "受全球個人電腦與網通晶片庫存調整影響大。", "keyUSPartners": ["Intel", "各大 IC 設計廠"] },
        "operations": { "revenue": "NT$ 420 億", "yoyGrowth": "-15%", "grossMargin": "約 15%", "highlights": ["載板市場庫存逐步去化，網通需求開始回溫"] },
        "leadership": { "chairman": "吳嘉昭", "ceo": "呂連瑞", "news": ["積極佈局高階 AI ASIC 晶片所需之大面積載板。"] }
    },
    "8069": {
        "symbol": "8069",
        "name": "元太 (E Ink)",
        "sector": "光電業",
        "currentPrice": 285.0,
        "change": 15.0,
        "changePercent": 5.56,
        "marketCap": "NT$ 3,200 億",
        "history": {
            "founded": "1992年",
            "description": "永豐餘集團旗下公司，目前是全球電子紙 (e-paper) 薄膜材料市場的絕對霸主，市佔率超過 90%。",
            "milestones": [{ "year": "1992", "event": "成立。" }, { "year": "2009", "event": "併購美國 E Ink 公司，取得電子紙核心技術。" }]
        },
        "supply আনুChain": { "upstream": ["化學微膠囊", "驅動IC"], "midstream": ["電子紙薄膜", "電子紙顯示器模組"], "downstream": ["Amazon (Kindle)", "Walmart (電子貨架標籤 ESL)"], "description": "壟斷全球電子紙上游材料市場。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "受惠於全球零售業自動化與 ESG 綠能省電趨勢。", "keyUSPartners": ["Amazon", "Walmart"] },
        "operations": { "revenue": "NT$ 280 億", "yoyGrowth": "+25%", "grossMargin": "高達 55%", "highlights": ["彩色電子紙 (Kaleido, Spectra) 廣泛應用於零售標籤，帶動獲利創新高"] },
        "leadership": { "chairman": "李政昊", "ceo": "甘豐源", "news": ["新竹新廠產能開出，持續擴大彩色電子紙產能。"] }
    },
    "5269": {
        "symbol": "5269",
        "name": "祥碩 (ASMedia)",
        "sector": "半導體業",
        "currentPrice": 2150.0,
        "change": 85.0,
        "changePercent": 4.12,
        "marketCap": "NT$ 1,500 億",
        "history": {
            "founded": "2004年",
            "description": "華碩集團旗下的小金雞，專注於高速傳輸控制 IC (USB, PCIe) 的設計，為 AMD 主機板晶片組的重要代工夥伴。",
            "milestones": [{ "year": "2004", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["晶圓代工廠 (台積電)"], "midstream": ["高速傳輸控制 IC 設計"], "downstream": ["AMD", "全球主機板與 PC 品牌廠"], "description": "技術領先全球的 PCIe Gen5 與 USB4 晶片設計公司。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["AMD"] },
        "operations": { "revenue": "NT$ 75 億", "yoyGrowth": "+35%", "grossMargin": "約 52%", "highlights": ["AMD 新世代平台推出帶動晶片組拉貨，USB4 放量"] },
        "leadership": { "chairman": "沈振來", "ceo": "林哲偉", "news": ["USB4 主控晶片正式獲得 Intel 與 AMD 平台認證。"] }
    },
    "3529": {
        "symbol": "3529",
        "name": "力旺 (eMemory)",
        "sector": "半導體業",
        "currentPrice": 2550.0,
        "change": 100.0,
        "changePercent": 4.08,
        "marketCap": "NT$ 1,900 億",
        "history": {
            "founded": "2000年",
            "description": "全球最大的邏輯製程非揮發性記憶體 (eNVM) 矽智財 (IP) 供應商，純授權模式享有極高的毛利率。",
            "milestones": [{ "year": "2000", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["無 (純智力研發)"], "midstream": ["矽智財 (IP) 授權與權利金"], "downstream": ["台積電等全球所有晶圓代工廠", "全球 IC 設計公司"], "description": "提供半導體設計最底層的安全與記憶體 IP，幾乎所有晶片都需要用到。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["ARM"] },
        "operations": { "revenue": "NT$ 35 億", "yoyGrowth": "+20%", "grossMargin": "高達 100%", "highlights": ["先進製程 IP 權利金大幅成長，資安 PUF IP 需求爆發"] },
        "leadership": { "chairman": "徐清祥", "ceo": "何明洲", "news": ["與 ARM 擴大在先進製程與資安架構上的合作。"] }
    },
    "6531": {
        "symbol": "6531",
        "name": "愛普* (AP Memory)",
        "sector": "半導體業",
        "currentPrice": 385.0,
        "change": 15.0,
        "changePercent": 4.05,
        "marketCap": "NT$ 620 億",
        "history": {
            "founded": "2011年",
            "description": "專注於客製化記憶體 (IoT RAM) 與 3D 封裝記憶體矽智財 (VHM) 的設計公司，為邊緣運算 AI 的重要推手。",
            "milestones": [{ "year": "2011", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["晶圓代工廠"], "midstream": ["IoT 記憶體銷售", "VHM 矽智財授權"], "downstream": ["物聯網裝置廠", "先進封裝客戶 (台積電)"], "description": "透過將邏輯晶片與記憶體 3D 堆疊，解決 AI 運算的「記憶體牆」瓶頸。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 48 億", "yoyGrowth": "+25%", "grossMargin": "約 45%", "highlights": ["IoT RAM 出貨穩定，高毛利的 VHM IP 權利金開始貢獻"] },
        "leadership": { "chairman": "陳文良", "ceo": "陳文良", "news": ["VHM 技術成功導入虛擬實境與高階網通晶片設計。"] }
    },
    "3443": {
        "symbol": "3443",
        "name": "創意 (Global Unichip)",
        "sector": "半導體業",
        "currentPrice": 1450.0,
        "change": 45.0,
        "changePercent": 3.20,
        "marketCap": "NT$ 1,950 億",
        "history": {
            "founded": "1998年",
            "description": "台積電轉投資的特殊應用 IC (ASIC) 設計服務廠，協助全球客戶將晶片設計圖轉化為台積電的先進製程晶片。",
            "milestones": [{ "year": "1998", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["矽智財廠 (ARM, Synopsys)"], "midstream": ["NRE (委託設計)", "Turnkey (量產服務)"], "downstream": ["國際雲端大廠 (微軟、Google)", "AI 新創"], "description": "台積電先進製程與先進封裝 (CoWoS) 的最佳出海口。" },
        "geopolitics": { "usRelations": "受美國晶片禁令影響，部分中國高階 AI 晶片專案受限。", "globalImpact": "無", "keyUSPartners": ["Microsoft"] },
        "operations": { "revenue": "NT$ 280 億", "yoyGrowth": "+15%", "grossMargin": "約 32%", "highlights": ["國際 CSP 大廠自研晶片 (ASIC) 專案陸續進入量產"] },
        "leadership": { "chairman": "曾繁城", "ceo": "戴尚義", "news": ["推出 HBM3 記憶體控制器與 CoWoS 先進封裝解決方案。"] }
    },
    "6415": {
        "symbol": "6415",
        "name": "矽力*-KY (Silergy)",
        "sector": "半導體業",
        "currentPrice": 420.0,
        "change": 18.0,
        "changePercent": 4.48,
        "marketCap": "NT$ 1,600 億",
        "history": {
            "founded": "2008年",
            "description": "前身為台股股王，是亞洲最大的類比 IC 與電源管理 IC (PMIC) 設計公司，產品廣泛應用於各式電子設備與汽車。",
            "milestones": [{ "year": "2008", "event": "成立。" }, { "year": "2021", "event": "股價突破 5000 元成為台股股王 (後進行股票分拆)。" }]
        },
        "supplyChain": { "upstream": ["晶圓代工廠 (台積電、世界先進)"], "midstream": ["電源管理 IC 設計"], "downstream": ["消費性電子", "伺服器", "車廠"], "description": "技術實力可與德州儀器 (TI) 等國際大廠競爭的類比 IC 龍頭。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "受惠中國車廠與伺服器去美化轉單效應。", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 180 億", "yoyGrowth": "+12%", "grossMargin": "約 48%", "highlights": ["庫存調整結束，車用與高階伺服器電源 IC 出貨強勁"] },
        "leadership": { "chairman": "陳偉", "ceo": "陳偉", "news": ["推出 AI 伺服器專用的大電流電源模組。"] }
    },
    "2351": {
        "symbol": "2351",
        "name": "順德 (SDI)",
        "sector": "電子零組件業",
        "currentPrice": 125.0,
        "change": 3.0,
        "changePercent": 2.46,
        "marketCap": "NT$ 220 億",
        "history": {
            "founded": "1953年",
            "description": "從傳統文具 (美工刀) 起家，成功轉型為全球前三大導線架製造商，在車用高功率導線架領域市佔率極高。",
            "milestones": [{ "year": "1953", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["銅材"], "midstream": ["半導體導線架", "文具五金"], "downstream": ["國際 IDM 廠 (Infineon, STM)", "封測廠"], "description": "電動車功率元件 (如 SiC 模組) 不可或缺的精密金屬載體。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "受全球電動車滲透率與汽車銷量影響。", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 110 億", "yoyGrowth": "+8%", "grossMargin": "約 18%", "highlights": ["車用與工業用高階導線架產品比重持續提升"] },
        "leadership": { "chairman": "陳朝明", "ceo": "陳維德", "news": ["南投新廠啟用，專注於生產車用高功率導線架。"] }
    }
}

target_dir = "/Users/alu/.gemini/antigravity/scratch/taiwan_stock_encyclopedia/src/data/stocks"
os.makedirs(target_dir, exist_ok=True)

for sym, data in stocks_data.items():
    code = f"export const stockData = {json.dumps(data, ensure_ascii=False, indent=2)};\n"
    path = os.path.join(target_dir, f"{sym}.ts")
    with open(path, 'w', encoding='utf-8') as f:
        f.write(code)
print("Batch 7 Stock files generated.")
