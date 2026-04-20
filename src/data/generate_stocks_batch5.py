import json
import os

stocks_data = {
    "3017": {
        "symbol": "3017",
        "name": "奇鋐 (AVC)",
        "sector": "電子零組件業",
        "currentPrice": 650.0,
        "change": 15.0,
        "changePercent": 2.36,
        "marketCap": "NT$ 2,500 億",
        "history": {
            "founded": "1991年",
            "description": "全球最大的散熱模組廠之一，近年成功轉型為 AI 伺服器 3D VC (均熱板) 與水冷散熱的指標龍頭。",
            "milestones": [{ "year": "1991", "event": "成立。" }, { "year": "2023", "event": "切入 NVIDIA AI 伺服器散熱供應鏈。" }]
        },
        "supplyChain": { "upstream": ["銅材", "散熱膏"], "midstream": ["散熱模組", "水冷冷水盤 (Cold Plate)", "機殼"], "downstream": ["各大 CSP 雲端業者", "系統組裝廠 (廣達、緯創)"], "description": "掌握 AI 晶片解熱的關鍵技術。" },
        "geopolitics": { "usRelations": "高度連動美系雲端業者(AWS, Microsoft)及晶片大廠(NVIDIA)的建置進度。", "globalImpact": "無", "keyUSPartners": ["NVIDIA", "AWS"] },
        "operations": { "revenue": "NT$ 650 億", "yoyGrowth": "+25%", "grossMargin": "約 22%", "highlights": ["水冷散熱與 3D VC 產品出貨佔比大幅拉高"] },
        "leadership": { "chairman": "沈慶行", "ceo": "沈慶行", "news": ["越南新廠產能開出，就近供應系統廠與避開地緣風險。"] }
    },
    "3324": {
        "symbol": "3324",
        "name": "雙鴻 (Auras)",
        "sector": "電子零組件業",
        "currentPrice": 720.0,
        "change": 25.0,
        "changePercent": 3.60,
        "marketCap": "NT$ 630 億",
        "history": {
            "founded": "1998年",
            "description": "台灣散熱雙雄之一，與奇鋐齊名，在筆電、顯卡散熱具優勢，目前積極進軍 AI 伺服器水冷 (Liquid Cooling) 市場。",
            "milestones": [{ "year": "1998", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["熱導管", "金屬機構件"], "midstream": ["散熱模組", "水冷分配單元 (CDU)"], "downstream": ["伺服器代工廠", "顯示卡品牌商"], "description": "水冷解決方案的核心供應商。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["NVIDIA", "AMD"] },
        "operations": { "revenue": "NT$ 150 億", "yoyGrowth": "+18%", "grossMargin": "約 26%", "highlights": ["水冷 CDU 系統獲得美系大廠認證並開始出貨"] },
        "leadership": { "chairman": "林育申", "ceo": "林育申", "news": ["積極推廣沉浸式散熱與水冷技術。"] }
    },
    "2421": {
        "symbol": "2421",
        "name": "建準 (Sunon)",
        "sector": "電子零組件業",
        "currentPrice": 115.0,
        "change": 3.0,
        "changePercent": 2.68,
        "marketCap": "NT$ 300 億",
        "history": {
            "founded": "1980年",
            "description": "全球微型風扇龍頭，專精於各類高階散熱風扇，為 AI 伺服器散熱系統中不可或缺的動能來源。",
            "milestones": [{ "year": "1980", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["馬達材料", "扇葉塑膠"], "midstream": ["高階伺服器風扇", "車用風扇"], "downstream": ["散熱模組廠 (奇鋐、雙鴻)", "系統廠"], "description": "扮演散熱供應鏈中的關鍵主動元件角色。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["各大伺服器廠"] },
        "operations": { "revenue": "NT$ 145 億", "yoyGrowth": "+10%", "grossMargin": "約 28%", "highlights": ["AI 伺服器高階風扇毛利高，帶動整體獲利結構優化"] },
        "leadership": { "chairman": "洪銀樹", "ceo": "洪銀樹", "news": ["菲律賓廠產能擴大以應對歐美客戶需求。"] }
    },
    "2383": {
        "symbol": "2383",
        "name": "台光電 (EMC)",
        "sector": "電子零組件業",
        "currentPrice": 480.0,
        "change": 12.0,
        "changePercent": 2.56,
        "marketCap": "NT$ 1,600 億",
        "history": {
            "founded": "1992年",
            "description": "全球無鹵素環保銅箔基板 (CCL) 龍頭，在 AI 伺服器用高階高頻高速 CCL 市場具備壟斷性地位。",
            "milestones": [{ "year": "1992", "event": "成立。" }, { "year": "2023", "event": "成為 NVIDIA 高階伺服器 OAM/UBB 板的最主要 CCL 供應商。" }]
        },
        "supplyChain": { "upstream": ["玻纖布", "銅箔", "樹脂"], "midstream": ["高頻高速銅箔基板 (CCL)"], "downstream": ["高階 PCB 板廠 (金像電)"], "description": "AI 晶片高速傳輸不漏電的基底材料。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["NVIDIA"] },
        "operations": { "revenue": "NT$ 420 億", "yoyGrowth": "+30%", "grossMargin": "約 28%", "highlights": ["AI 伺服器高階材料出貨佔比飆升，毛利率屢創新高"] },
        "leadership": { "chairman": "董定宇", "ceo": "董定宇", "news": ["馬來西亞檳城建置新廠，擴充高階產能。"] }
    },
    "6274": {
        "symbol": "6274",
        "name": "台燿 (Taiwan Union)",
        "sector": "電子零組件業",
        "currentPrice": 215.0,
        "change": 8.0,
        "changePercent": 3.86,
        "marketCap": "NT$ 580 億",
        "history": {
            "founded": "1974年",
            "description": "台灣銅箔基板三雄之一，在高階交換器 (Switch) 與網通伺服器 CCL 領域具備極強競爭力。",
            "milestones": [{ "year": "1974", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["銅箔", "樹脂"], "midstream": ["高速 CCL"], "downstream": ["PCB 板廠", "網通設備廠 (智邦)"], "description": "800G 交換器升級潮的核心受惠者。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["各大網通廠"] },
        "operations": { "revenue": "NT$ 180 億", "yoyGrowth": "+15%", "grossMargin": "約 22%", "highlights": ["800G 交換器與 AI 伺服器材料認證通過並放量"] },
        "leadership": { "chairman": "辛忠道", "ceo": "辛忠道", "news": ["泰國新廠動工。"] }
    },
    "6213": {
        "symbol": "6213",
        "name": "聯茂 (ITEQ)",
        "sector": "電子零組件業",
        "currentPrice": 125.0,
        "change": 4.5,
        "changePercent": 3.73,
        "marketCap": "NT$ 480 億",
        "history": {
            "founded": "1997年",
            "description": "台灣銅箔基板三雄之一，積極追趕高階伺服器 CCL 市場份額，同時佈局車用電子材料。",
            "milestones": [{ "year": "1997", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["玻纖布", "銅箔"], "midstream": ["CCL", "黏合片 (PP)"], "downstream": ["PCB 板廠", "車用電子", "伺服器"], "description": "積極切入美系 CSP 自研晶片 (ASIC) 伺服器供應鏈。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 260 億", "yoyGrowth": "+10%", "grossMargin": "約 15%", "highlights": ["高階伺服器材料滲透率逐漸提升"] },
        "leadership": { "chairman": "陳進財", "ceo": "蔡馨暳", "news": ["泰國廠一期完工投產。"] }
    },
    "3363": {
        "symbol": "3363",
        "name": "聯亞 (LandMark)",
        "sector": "通信網路業",
        "currentPrice": 245.0,
        "change": 15.0,
        "changePercent": 6.52,
        "marketCap": "NT$ 220 億",
        "history": {
            "founded": "1997年",
            "description": "光通訊產業鏈的上游磊晶廠，為矽光子 (Silicon Photonics, CPO) 技術發展的關鍵零組件供應商。",
            "milestones": [{ "year": "1997", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["磷化銦 (InP)", "砷化鎵 (GaAs)"], "midstream": ["光通訊磊晶片"], "downstream": ["光收發模組廠", "Apple (消費性電子感測)"], "description": "全球少數具備高階光通訊磊晶量產能力的公司。" },
        "geopolitics": { "usRelations": "受惠於美國寬頻基建與 AI 資料中心光通訊升級需求。", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 25 億", "yoyGrowth": "+30%", "grossMargin": "約 35%", "highlights": ["AI 帶動 800G 光通訊磊晶需求爆發"] },
        "leadership": { "chairman": "林蔚", "ceo": "林蔚", "news": ["切入美系大廠矽光子 CPO 專案研發。"] }
    },
    "3450": {
        "symbol": "3450",
        "name": "聯鈞 (Laster Tech)",
        "sector": "半導體業",
        "currentPrice": 185.0,
        "change": 12.5,
        "changePercent": 7.24,
        "marketCap": "NT$ 260 億",
        "history": {
            "founded": "2000年",
            "description": "光通訊封裝測試與半導體封裝大廠，近期因打入 AI 矽光子 CPO 封測供應鏈而備受市場矚目。",
            "milestones": [{ "year": "2000", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["磊晶片", "晶片"], "midstream": ["光資訊及光通訊封測"], "downstream": ["光收發模組廠"], "description": "光通訊模組從晶片到成品的中繼站。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 65 億", "yoyGrowth": "+20%", "grossMargin": "約 22%", "highlights": ["積極佈局高階矽光子封測產能"] },
        "leadership": { "chairman": "鄭明智", "ceo": "鄭明智", "news": ["擴大投資 CPO 相關先進封裝技術。"] }
    },
    "4979": {
        "symbol": "4979",
        "name": "華星光 (LuxNet)",
        "sector": "通信網路業",
        "currentPrice": 142.0,
        "change": 9.5,
        "changePercent": 7.16,
        "marketCap": "NT$ 180 億",
        "history": {
            "founded": "2001年",
            "description": "台灣指標性光通訊模組廠，主攻光收發模組代工，與美國網通晶片大廠具高度綁定關係。",
            "milestones": [{ "year": "2001", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["光通訊晶片 (Marvell)"], "midstream": ["光收發模組製造"], "downstream": ["資料中心", "電信運營商"], "description": "主要替美系晶片大廠代工高階光通訊產品。" },
        "geopolitics": { "usRelations": "高度連動美國網通晶片巨頭的 AI 資料中心訂單。", "globalImpact": "無", "keyUSPartners": ["Marvell"] },
        "operations": { "revenue": "NT$ 40 億", "yoyGrowth": "+45%", "grossMargin": "約 25%", "highlights": ["400G/800G 光通訊模組放量帶動營收大躍進"] },
        "leadership": { "chairman": "陳宏守", "ceo": "陳宏守", "news": ["轉型為純代工模式，毛利率大幅改善。"] }
    },
    "3131": {
        "symbol": "3131",
        "name": "弘塑 (Grand Process)",
        "sector": "半導體業",
        "currentPrice": 1250.0,
        "change": 45.0,
        "changePercent": 3.73,
        "marketCap": "NT$ 350 億",
        "history": {
            "founded": "1993年",
            "description": "台灣半導體濕製程設備龍頭，為台積電 CoWoS 先進封裝擴產的最主要設備供應商之一。",
            "milestones": [{ "year": "1993", "event": "成立。" }, { "year": "2023", "event": "受惠 AI 晶片爆發，CoWoS 設備訂單滿載。" }]
        },
        "supplyChain": { "upstream": ["精密機械零件", "自動化組件"], "midstream": ["半導體濕製程設備 (清洗、蝕刻)"], "downstream": ["台積電", "日月光"], "description": "先進封裝產能去瓶頸的關鍵國產設備商。" },
        "geopolitics": { "usRelations": "受惠於台灣半導體產業推動設備國產化政策。", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 45 億", "yoyGrowth": "+35%", "grossMargin": "約 45%", "highlights": ["台積電大單湧入，訂單能見度極高"] },
        "leadership": { "chairman": "張代河", "ceo": "張代河", "news": ["因應客戶擴產需求，大舉擴編研發與產能。"] }
    },
    "3583": {
        "symbol": "3583",
        "name": "辛耘 (Scientech)",
        "sector": "半導體業",
        "currentPrice": 380.0,
        "change": 15.0,
        "changePercent": 4.10,
        "marketCap": "NT$ 300 億",
        "history": {
            "founded": "1979年",
            "description": "半導體設備代理與自製雙棲廠，與弘塑同為台積電 CoWoS 濕製程設備的主要供應商。",
            "milestones": [{ "year": "1979", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["歐美設備原廠", "自製精密零件"], "midstream": ["設備代理", "自製濕製程設備"], "downstream": ["台積電", "中國晶圓代工廠"], "description": "兼具代理與自製研發能力的設備商。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "中國擴大成熟製程投資，亦帶動其設備銷售業績。", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 75 億", "yoyGrowth": "+25%", "grossMargin": "約 30%", "highlights": ["自製設備佔比提升帶動毛利", "CoWoS 設備出貨強勁"] },
        "leadership": { "chairman": "謝宏亮", "ceo": "許明棋", "news": ["看好先進封裝設備需求將延續數年。"] }
    },
    "6187": {
        "symbol": "6187",
        "name": "萬潤 (AllRing)",
        "sector": "半導體業",
        "currentPrice": 285.0,
        "change": 18.0,
        "changePercent": 6.74,
        "marketCap": "NT$ 220 億",
        "history": {
            "founded": "1996年",
            "description": "自動化設備廠，專注於被動元件與半導體先進封裝設備，為台積電 CoWoS 點膠機與AOI設備的重要供應商。",
            "milestones": [{ "year": "1996", "event": "成立。" }, { "year": "2024", "event": "因打入 CoWoS 核心供應鏈，獲利呈現倍數爆發。" }]
        },
        "supplyChain": { "upstream": ["馬達", "感測器", "視覺鏡頭"], "midstream": ["自動化點膠機", "AOI檢測設備"], "downstream": ["台積電", "被動元件廠"], "description": "解決先進封裝自動化與檢測的關鍵瓶頸。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 35 億", "yoyGrowth": "+80%", "grossMargin": "約 48%", "highlights": ["半導體設備營收比重超過 8 成，獲利爆發力驚人"] },
        "leadership": { "chairman": "盧鏡來", "ceo": "盧鏡來", "news": ["南科新廠啟用以因應強勁的半導體設備需求。"] }
    },
    "4571": {
        "symbol": "4571",
        "name": "鈞興-KY (KMC)",
        "sector": "電機機械",
        "currentPrice": 165.0,
        "change": 10.0,
        "changePercent": 6.45,
        "marketCap": "NT$ 85 億",
        "history": {
            "founded": "1999年",
            "description": "全球高階齒輪製造商，近年積極研發機器人關鍵零組件「諧波減速機」，打入自動化藍海市場。",
            "milestones": [{ "year": "1999", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["特殊鋼材"], "midstream": ["高精密齒輪", "諧波減速機"], "downstream": ["工業機器人廠", "電動工具機", "電動自行車"], "description": "機器人關節作動的核心傳動元件供應商。" },
        "geopolitics": { "usRelations": "受惠於全球供應鏈轉移帶動的自動化設備需求。", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 28 億", "yoyGrowth": "+15%", "grossMargin": "約 32%", "highlights": ["諧波減速機獲多家機器人客戶認證並小量出貨"] },
        "leadership": { "chairman": "鍾志成", "ceo": "吳錦祥", "news": ["看好工業機器人與協作型機器人的爆發性成長。"] }
    },
    "4562": {
        "symbol": "4562",
        "name": "穎漢 (Ying Han)",
        "sector": "電機機械",
        "currentPrice": 62.0,
        "change": 4.5,
        "changePercent": 7.82,
        "marketCap": "NT$ 55 億",
        "history": {
            "founded": "1989年",
            "description": "全球最大的彎管機製造商，近年因切入 AI 機器手臂與自動化無人搬運車 (AGV) 而轉型為機器人概念股。",
            "milestones": [{ "year": "1989", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["鋼材", "馬達", "感測器"], "midstream": ["全自動彎管機", "工業機器手臂整合"], "downstream": ["汽車零組件廠", "家具廠"], "description": "協助傳統金屬加工廠導入 AI 與無人化生產。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 30 億", "yoyGrowth": "+10%", "grossMargin": "約 28%", "highlights": ["AI 智慧工作站解決方案接單成長"] },
        "leadership": { "chairman": "胡錫泉", "ceo": "胡錫泉", "news": ["於自動化展推出整合 AI 視覺的最新型機器手臂。"] }
    }
}

target_dir = "/Users/alu/.gemini/antigravity/scratch/taiwan_stock_encyclopedia/src/data/stocks"
os.makedirs(target_dir, exist_ok=True)

for sym, data in stocks_data.items():
    code = f"export const stockData = {json.dumps(data, ensure_ascii=False, indent=2)};\n"
    path = os.path.join(target_dir, f"{sym}.ts")
    with open(path, 'w', encoding='utf-8') as f:
        f.write(code)
print("Batch 5 Stock files generated.")
