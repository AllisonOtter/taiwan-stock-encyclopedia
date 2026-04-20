import json
import os

stocks_data = {
    "8210": {
        "symbol": "8210",
        "name": "勤誠 (Chenbro)",
        "sector": "電腦及週邊設備業",
        "currentPrice": 285.0,
        "change": 12.0,
        "changePercent": 4.40,
        "marketCap": "NT$ 340 億",
        "history": {
            "founded": "1983年",
            "description": "全球伺服器機殼龍頭廠，專注於雲端伺服器機構件設計，受惠於 AI 伺服器體積與重量大增帶動的高階機殼需求。",
            "milestones": [{ "year": "1983", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["鋼板", "鋁材"], "midstream": ["高階伺服器機殼", "系統機構件"], "downstream": ["CSP (雲端服務供應商)", "伺服器代工廠"], "description": "掌握高U數 AI 伺服器機構設計與散熱風流的最佳化技術。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["AWS", "各大 CSP"] },
        "operations": { "revenue": "NT$ 110 億", "yoyGrowth": "+35%", "grossMargin": "約 25%", "highlights": ["AI 伺服器專案放量，營收獲利雙創新高"] },
        "leadership": { "chairman": "陳美琪", "ceo": "陳亞男", "news": ["嘉義新廠全面投產，大舉擴充 AI 伺服器機殼產能。"] }
    },
    "3013": {
        "symbol": "3013",
        "name": "晟銘電 (UNEEC)",
        "sector": "電腦及週邊設備業",
        "currentPrice": 145.0,
        "change": 8.5,
        "changePercent": 6.23,
        "marketCap": "NT$ 220 億",
        "history": {
            "founded": "1976年",
            "description": "老牌機殼廠，近年積極轉型並打入廣達 AI 伺服器供應鏈，並大力發展水冷機櫃 (Rack) 解決方案。",
            "milestones": [{ "year": "1976", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["金屬板材"], "midstream": ["伺服器機殼", "水冷機櫃組裝"], "downstream": ["廣達", "緯創"], "description": "從傳統沖壓件跨足高階水冷機櫃系統整合。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 65 億", "yoyGrowth": "+28%", "grossMargin": "約 18%", "highlights": ["L10 水冷機櫃組裝業務帶來強大營收動能"] },
        "leadership": { "chairman": "林木和", "ceo": "林木和", "news": ["積極佈局沉浸式散熱機櫃測試。"] }
    },
    "2385": {
        "symbol": "2385",
        "name": "群光 (Chicony)",
        "sector": "電子零組件業",
        "currentPrice": 165.0,
        "change": 2.5,
        "changePercent": 1.54,
        "marketCap": "NT$ 1,200 億",
        "history": {
            "founded": "1983年",
            "description": "全球最大的鍵盤與筆電鏡頭模組製造商，因長年獲利穩定且高配息，為多檔高股息 ETF 的核心成分股。",
            "milestones": [{ "year": "1983", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["IC", "塑膠件", "鏡片"], "midstream": ["鍵盤", "影像模組", "電源供應器"], "downstream": ["全球各大 PC 品牌", "智慧家庭設備廠"], "description": "PC 周邊之王，市佔率極具統治力。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "受惠於 AI PC 換機潮與鍵盤規格升級 (Copilot 鍵)。", "keyUSPartners": ["各大PC品牌"] },
        "operations": { "revenue": "NT$ 980 億", "yoyGrowth": "+5%", "grossMargin": "約 22%", "highlights": ["高毛利的影像模組與網通產品佔比持續提升"] },
        "leadership": { "chairman": "許崑泰", "ceo": "呂進宗", "news": ["泰國廠房持續擴建以分散生產基地。"] }
    },
    "2377": {
        "symbol": "2377",
        "name": "微星 (MSI)",
        "sector": "電腦及週邊設備業",
        "currentPrice": 185.0,
        "change": -2.0,
        "changePercent": -1.07,
        "marketCap": "NT$ 1,550 億",
        "history": {
            "founded": "1986年",
            "description": "全球頂級電競硬體品牌，以主機板、顯示卡與電競筆電聞名，深受全球遊戲玩家喜愛。",
            "milestones": [{ "year": "1986", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["GPU (NVIDIA, AMD)", "CPU"], "midstream": ["主機板", "顯示卡", "電競筆電組裝"], "downstream": ["全球電競玩家", "創作者"], "description": "強大的品牌溢價與粉絲黏著度。" },
        "geopolitics": { "usRelations": "受美國限制高階 GPU 銷往中國之禁令影響，部分高階顯卡出貨受阻。", "globalImpact": "無", "keyUSPartners": ["NVIDIA", "AMD"] },
        "operations": { "revenue": "NT$ 1,800 億", "yoyGrowth": "+8%", "grossMargin": "約 15%", "highlights": ["AI PC 與新世代 RTX 顯示卡帶動換機潮"] },
        "leadership": { "chairman": "徐祥", "ceo": "徐祥", "news": ["跨足 AI 伺服器與車用電子領域。"] }
    },
    "2371": {
        "symbol": "2371",
        "name": "大同 (Tatung)",
        "sector": "電機機械",
        "currentPrice": 52.0,
        "change": 1.2,
        "changePercent": 2.36,
        "marketCap": "NT$ 1,200 億",
        "history": {
            "founded": "1918年",
            "description": "台灣百年企業，擁有極其龐大的土地資產。近年經營權易主後，積極轉型綠能與變壓器重電設備，成功轉虧為盈。",
            "milestones": [{ "year": "1918", "event": "大同協志商號成立。" }, { "year": "2024", "event": "重電設備成功外銷美國。" }]
        },
        "supplyChain": { "upstream": ["銅線", "矽鋼片"], "midstream": ["變壓器", "馬達", "太陽能/儲能"], "downstream": ["台電", "美國基礎建設", "國內綠電買家"], "description": "從傳統家電轉型為綠能與重電大廠。" },
        "geopolitics": { "usRelations": "變壓器成功取得美國 UL 認證，切入美國拜登政府基建商機。", "globalImpact": "無", "keyUSPartners": ["美國地方電力公司"] },
        "operations": { "revenue": "NT$ 480 億", "yoyGrowth": "+15%", "grossMargin": "約 18%", "highlights": ["重電事業在手訂單逾百億", "芙蓉大樓等資產活化帶來鉅額業外收益"] },
        "leadership": { "chairman": "王光祥", "ceo": "沈柏延", "news": ["持續活化雙北精華區土地資產，規劃大型建案。"] }
    },
    "6239": {
        "symbol": "6239",
        "name": "力成 (PTI)",
        "sector": "半導體業",
        "currentPrice": 145.0,
        "change": 2.5,
        "changePercent": 1.75,
        "marketCap": "NT$ 1,100 億",
        "history": {
            "founded": "1997年",
            "description": "全球最大的記憶體封測廠，近年積極佈局邏輯晶片與先進封裝 (如 TSV、Fan-out)。",
            "milestones": [{ "year": "1997", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["記憶體晶圓 (Kioxia, Micron)"], "midstream": ["封裝與測試"], "downstream": ["SSD廠", "模組廠"], "description": "記憶體產業景氣的重要指標。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["Kioxia", "Micron"] },
        "operations": { "revenue": "NT$ 720 億", "yoyGrowth": "+5%", "grossMargin": "約 20%", "highlights": ["高頻寬記憶體 (HBM) 封裝技術開發進度優於預期"] },
        "leadership": { "chairman": "蔡篤恭", "ceo": "蔡篤恭", "news": ["處分中國西安廠，將資源集中於台灣高階封裝研發。"] }
    },
    "2449": {
        "symbol": "2449",
        "name": "京元電子 (KYEC)",
        "sector": "半導體業",
        "currentPrice": 125.0,
        "change": 4.0,
        "changePercent": 3.31,
        "marketCap": "NT$ 1,500 億",
        "history": {
            "founded": "1987年",
            "description": "全球最大的專業半導體測試廠，為 NVIDIA 晶片最終測試的最主要合作夥伴。",
            "milestones": [{ "year": "1987", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["晶圓代工廠 (台積電)", "封裝廠"], "midstream": ["晶圓測試 (CP)", "成品測試 (FT)"], "downstream": ["IC 設計公司 (NVIDIA, 聯發科)"], "description": "確保每一顆 AI 晶片良率的最終守門員。" },
        "geopolitics": { "usRelations": "深度綁定美系 AI 晶片巨頭。", "globalImpact": "無", "keyUSPartners": ["NVIDIA", "Intel"] },
        "operations": { "revenue": "NT$ 350 億", "yoyGrowth": "+18%", "grossMargin": "約 35%", "highlights": ["AI 晶片測試時間倍增，大幅拉高機台稼動率與單價"] },
        "leadership": { "chairman": "李金恭", "ceo": "李金恭", "news": ["出售中國蘇州廠，獲利大進補並將產能全面移回台灣。"] }
    },
    "5347": {
        "symbol": "5347",
        "name": "世界 (VIS)",
        "sector": "半導體業",
        "currentPrice": 115.0,
        "change": 1.5,
        "changePercent": 1.32,
        "marketCap": "NT$ 1,880 億",
        "history": {
            "founded": "1994年",
            "description": "台積電集團旗下的 8 吋與 12 吋晶圓代工廠，專注於電源管理 IC、顯示驅動 IC 等特殊製程。",
            "milestones": [{ "year": "1994", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["矽晶圓"], "midstream": ["晶圓代工"], "downstream": ["IC 設計廠"], "description": "成熟製程的優等生。" },
        "geopolitics": { "usRelations": "受惠於歐美客戶將電源管理 IC 訂單從中國廠轉出 (去中化轉單效應)。", "globalImpact": "無", "keyUSPartners": ["NXP 等車用晶片廠"] },
        "operations": { "revenue": "NT$ 380 億", "yoyGrowth": "+10%", "grossMargin": "約 30%", "highlights": ["宣佈與 NXP 於新加坡合資興建 12 吋晶圓廠"] },
        "leadership": { "chairman": "方略", "ceo": "方略", "news": ["新加坡 12 吋廠預計將帶來強大成長動能。"] }
    },
    "3042": {
        "symbol": "3042",
        "name": "晶技 (TXC)",
        "sector": "電子零組件業",
        "currentPrice": 105.0,
        "change": 1.0,
        "changePercent": 0.96,
        "marketCap": "NT$ 320 億",
        "history": {
            "founded": "1983年",
            "description": "全球最大的石英元件製造商，提供所有電子產品產生頻率與時間基準的「心臟」。",
            "milestones": [{ "year": "1983", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["人造石英晶棒", "陶瓷基座"], "midstream": ["石英晶體諧振器", "振盪器"], "downstream": ["Apple", "網通廠", "車用電子"], "description": "產品體積極小但不可或缺，技術門檻高。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["Apple"] },
        "operations": { "revenue": "NT$ 110 億", "yoyGrowth": "+8%", "grossMargin": "約 35%", "highlights": ["車用產品與 AI 伺服器高階振盪器出貨成長"] },
        "leadership": { "chairman": "林萬興", "ceo": "林萬興", "news": ["積極發展微型化與高頻化產品。"] }
    },
    "3533": {
        "symbol": "3533",
        "name": "嘉澤 (Lotes)",
        "sector": "電子零組件業",
        "currentPrice": 1450.0,
        "change": 50.0,
        "changePercent": 3.57,
        "marketCap": "NT$ 1,600 億",
        "history": {
            "founded": "1986年",
            "description": "全球前三大 CPU 腳座 (Socket) 製造商，打破歐美大廠壟斷，是 Intel 與 AMD 的核心供應商。",
            "milestones": [{ "year": "1986", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["銅合金", "工程塑膠"], "midstream": ["CPU Socket", "各式高頻連接器"], "downstream": ["主機板廠", "伺服器廠"], "description": "擁有極高的專利壁壘與技術護城河。" },
        "geopolitics": { "usRelations": "與美國兩大 CPU 巨頭產品世代交替高度連動。", "globalImpact": "無", "keyUSPartners": ["Intel", "AMD"] },
        "operations": { "revenue": "NT$ 250 億", "yoyGrowth": "+20%", "grossMargin": "高達 48%", "highlights": ["伺服器新平台滲透率提升，推升毛利率與獲利創新高"] },
        "leadership": { "chairman": "朱德祥", "ceo": "朱德祥", "news": ["越南新廠投產以應付強勁訂單。"] }
    },
    "3033": {
        "symbol": "3033",
        "name": "威健 (Weikeng)",
        "sector": "電子通路業",
        "currentPrice": 35.0,
        "change": 0.2,
        "changePercent": 0.57,
        "marketCap": "NT$ 150 億",
        "history": {
            "founded": "1977年",
            "description": "台灣老牌電子零組件通路商，代理 AMD、Infineon 等國際大廠產品，為高股息 ETF 常客。",
            "milestones": [{ "year": "1977", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["各大國際 IC 原廠"], "midstream": ["代理與技術支援"], "downstream": ["各大電子製造商"], "description": "穩定賺取代理利差與提供技術加值服務。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["AMD"] },
        "operations": { "revenue": "NT$ 650 億", "yoyGrowth": "+5%", "grossMargin": "約 6%", "highlights": ["連續多年穩定配息"] },
        "leadership": { "chairman": "胡秋江", "ceo": "胡秋江", "news": ["擴大車用電子與工控市場的代理產品線。"] }
    },
    "6202": {
        "symbol": "6202",
        "name": "盛群 (Holtek)",
        "sector": "半導體業",
        "currentPrice": 58.0,
        "change": 0.5,
        "changePercent": 0.87,
        "marketCap": "NT$ 130 億",
        "history": {
            "founded": "1998年",
            "description": "台灣微控制器 (MCU) 領導廠商，產品廣泛應用於家電、健康量測、工控與安防領域。",
            "milestones": [{ "year": "1998", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["ARM", "台積電/聯電代工"], "midstream": ["MCU 設計"], "downstream": ["各類終端電子產品製造商"], "description": "被視為消費性電子景氣復甦的風向球。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "受中國市場內需不振與當地低價 MCU 競爭影響。", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 35 億", "yoyGrowth": "-5%", "grossMargin": "約 40%", "highlights": ["積極去化庫存，32 位元 MCU 佔比提升"] },
        "leadership": { "chairman": "吳宏達", "ceo": "高國棟", "news": ["拓展無刷直流馬達 (BLDC) 控制器市場。"] }
    },
    "2352": {
        "symbol": "2352",
        "name": "佳世達 (Qisda)",
        "sector": "電腦及週邊設備業",
        "currentPrice": 38.5,
        "change": 0.5,
        "changePercent": 1.32,
        "marketCap": "NT$ 750 億",
        "history": {
            "founded": "1984年",
            "description": "前身為明基電通，透過「大艦隊」策略併購數十家企業，成功轉型為涵蓋醫療、AIoT 與網通的綜合控股集團。",
            "milestones": [{ "year": "1984", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["各式零組件"], "midstream": ["顯示器代工", "醫療耗材製造", "系統整合"], "downstream": ["醫院 (明基醫院)", "企業客戶", "品牌廠"], "description": "醫療事業體已成為集團重要的獲利支柱。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 2,050 億", "yoyGrowth": "+2%", "grossMargin": "約 16%", "highlights": ["高附加價值事業營收過半", "明基醫院規劃在香港上市"] },
        "leadership": { "chairman": "陳其宏", "ceo": "黃漢州", "news": ["持續併購醫療與 AI 軟體公司壯大艦隊。"] }
    },
    "3706": {
        "symbol": "3706",
        "name": "神達 (MiTAC)",
        "sector": "電腦及週邊設備業",
        "currentPrice": 45.0,
        "change": 1.5,
        "changePercent": 3.45,
        "marketCap": "NT$ 540 億",
        "history": {
            "founded": "1982年",
            "description": "聯華神通集團核心企業，承接 Intel 伺服器事業部後，專注於雲端資料中心與車用電子發展。",
            "milestones": [{ "year": "1982", "event": "成立。" }, { "year": "2023", "event": "接手 Intel 資料中心解決方案事業部 (DSG)。" }]
        },
        "supplyChain": { "upstream": ["Intel, AMD"], "midstream": ["伺服器主板與系統", "行車記錄器"], "downstream": ["CSP", "車廠", "企業客戶"], "description": "具備深厚的伺服器系統整合實力。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["Intel"] },
        "operations": { "revenue": "NT$ 420 億", "yoyGrowth": "+18%", "grossMargin": "約 12%", "highlights": ["接手 Intel 伺服器業務效益顯現", "AI 伺服器開始出貨"] },
        "leadership": { "chairman": "苗豐強", "ceo": "何繼武", "news": ["積極佈局邊緣運算 (Edge Computing) 伺服器。"] }
    },
    "2323": {
        "symbol": "2323",
        "name": "中環 (CMC)",
        "sector": "光電業",
        "currentPrice": 12.5,
        "change": 0.1,
        "changePercent": 0.81,
        "marketCap": "NT$ 150 億",
        "history": {
            "founded": "1978年",
            "description": "曾是全球最大的光碟片製造商，近年因光碟市場萎縮，轉型為台股著名的「業外投資大戶」，頻繁進出航運股等熱門標的。",
            "milestones": [{ "year": "1978", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["聚碳酸酯 (PC)"], "midstream": ["光碟片製造 (檔案冷儲存)"], "downstream": ["資料中心冷資料儲存", "影音發行商"], "description": "本業專注於資料中心百年冷儲存光碟，但市場更關注其股票操作。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 70 億", "yoyGrowth": "-5%", "grossMargin": "約 15%", "highlights": ["業外股票投資損益劇烈影響公司財報"] },
        "leadership": { "chairman": "翁明顯", "ceo": "翁明顯", "news": ["因頻繁買賣長榮、陽明等股票被股民戲稱為「中環巨鯨」。"] }
    }
}

target_dir = "/Users/alu/.gemini/antigravity/scratch/taiwan_stock_encyclopedia/src/data/stocks"
os.makedirs(target_dir, exist_ok=True)

for sym, data in stocks_data.items():
    code = f"export const stockData = {json.dumps(data, ensure_ascii=False, indent=2)};\n"
    path = os.path.join(target_dir, f"{sym}.ts")
    with open(path, 'w', encoding='utf-8') as f:
        f.write(code)
print("Batch 6 Stock files generated.")
