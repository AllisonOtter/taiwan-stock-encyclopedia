import json
import os

stocks_data = {
    "1102": {
        "symbol": "1102",
        "name": "亞泥 (Asia Cement)",
        "sector": "水泥工業",
        "currentPrice": 42.0,
        "change": 0.5,
        "changePercent": 1.2,
        "marketCap": "NT$ 1,400 億",
        "history": {
            "founded": "1957年",
            "description": "遠東集團核心企業，為台灣第二大水泥廠，近年積極朝向低碳水泥與綠能環保轉型。",
            "milestones": [
                { "year": "1957", "event": "亞洲水泥公司成立。" },
                { "year": "2020", "event": "全面推動低碳水泥研發與量產。" },
                { "year": "2025", "event": "低碳產品佔比突破 40%。" }
            ]
        },
        "supplyChain": {
            "upstream": ["石灰石", "煤炭", "電力"],
            "midstream": ["水泥熟料", "預拌混凝土"],
            "downstream": ["營造廠", "公共工程", "房地產開發商"],
            "description": "提供基礎建設最核心的原物料，具備高度內需與防禦型特徵。"
        },
        "geopolitics": {
            "usRelations": "主要受國內基礎建設及兩岸環保政策影響，直接受美國地緣政治影響較小。",
            "globalImpact": "透過發展碳捕捉技術，在全球減碳趨勢中保持領先地位。",
            "keyUSPartners": ["無"]
        },
        "operations": {
            "revenue": "NT$ 850 億 (2025預估)",
            "yoyGrowth": "+3%",
            "grossMargin": "約 18%",
            "highlights": ["低碳水泥市佔率第一", "轉投資事業貢獻穩定獲利"]
        },
        "leadership": {
            "chairman": "徐旭東",
            "ceo": "李坤炎",
            "news": ["宣布擴大風電與太陽能領域的綠能投資。"]
        }
    },
    "1229": {
        "symbol": "1229",
        "name": "聯華 (Lien Hwa)",
        "sector": "食品工業",
        "currentPrice": 65.0,
        "change": 0.2,
        "changePercent": 0.3,
        "marketCap": "NT$ 980 億",
        "history": {
            "founded": "1955年",
            "description": "原為麵粉廠，現已轉型為橫跨食品、工業氣體與系統整合的大型投資控股公司。",
            "milestones": [
                { "year": "1955", "event": "公司成立，主營麵粉。" },
                { "year": "2019", "event": "轉型為投資控股公司 (聯華投控)。" }
            ]
        },
        "supplyChain": {
            "upstream": ["小麥", "原物料"],
            "midstream": ["麵粉", "工業氣體製造 (聯華林德)"],
            "downstream": ["食品加工廠", "半導體代工廠"],
            "description": "除了麵粉外，其旗下聯華林德是台灣半導體產業最重要的工業氣體供應商。"
        },
        "geopolitics": {
            "usRelations": "間接受惠於半導體供應鏈「去中化」所帶動的台灣廠區擴建。",
            "globalImpact": "穩定的民生消費與高科技氣體雙主軸。",
            "keyUSPartners": ["林德集團 (合資夥伴)"]
        },
        "operations": {
            "revenue": "NT$ 750 億",
            "yoyGrowth": "+5%",
            "grossMargin": "約 22%",
            "highlights": ["工業氣體業務受惠台積電擴廠", "麵粉市佔率穩居全台第一"]
        },
        "leadership": {
            "chairman": "苗豐強",
            "ceo": "苗豐強",
            "news": ["斥資擴建中南部電子級特氣廠。"]
        }
    },
    "1326": {
        "symbol": "1326",
        "name": "台化 (FCFC)",
        "sector": "塑膠工業",
        "currentPrice": 52.0,
        "change": -0.5,
        "changePercent": -0.9,
        "marketCap": "NT$ 3,000 億",
        "history": {
            "founded": "1965年",
            "description": "台塑集團四寶之一，主營芳香烴、苯乙烯及各類塑膠化學原料。",
            "milestones": [{ "year": "1965", "event": "台化成立。" }]
        },
        "supplyChain": {
            "upstream": ["原油", "輕油"],
            "midstream": ["PTA", "SM", "苯"],
            "downstream": ["紡織廠", "塑膠製品廠", "包裝材料廠"],
            "description": "石化中游霸主，具備一條龍整合優勢。"
        },
        "geopolitics": {
            "usRelations": "受國際油價及中美貿易戰關稅壁壘影響甚鉅。",
            "globalImpact": "全球重要芳香烴生產商之一。",
            "keyUSPartners": ["無"]
        },
        "operations": {
            "revenue": "NT$ 3,200 億",
            "yoyGrowth": "-2%",
            "grossMargin": "約 8%",
            "highlights": ["積極朝向高附加價值塑膠轉型"]
        },
        "leadership": {
            "chairman": "洪福源",
            "ceo": "洪福源",
            "news": ["加速發展生質塑膠與回收材料。"]
        }
    },
    "1402": {
        "symbol": "1402",
        "name": "遠東新 (FENC)",
        "sector": "紡織纖維",
        "currentPrice": 32.5,
        "change": 0.4,
        "changePercent": 1.2,
        "marketCap": "NT$ 1,700 億",
        "history": {
            "founded": "1942年",
            "description": "台灣紡織業龍頭，並轉型為全球最大的回收聚酯 (rPET) 生產商之一，兼具龐大土地資產。",
            "milestones": [{ "year": "1942", "event": "遠東新世紀前身成立。" }]
        },
        "supplyChain": {
            "upstream": ["PTA", "EG"],
            "midstream": ["聚酯纖維", "綠色回收酯粒"],
            "downstream": ["國際運動品牌", "飲料包裝廠"],
            "description": "全球前三大 PET 及回收 PET 供應商。"
        },
        "geopolitics": {
            "usRelations": "在美國設有回收酯粒廠，直接供應當地飲料大廠。",
            "globalImpact": "全球 ESG 與減塑倡議的直接受惠者。",
            "keyUSPartners": ["Nike", "Coca-Cola"]
        },
        "operations": {
            "revenue": "NT$ 2,500 億",
            "yoyGrowth": "+4%",
            "grossMargin": "約 18%",
            "highlights": ["綠色產品營收佔比突破 35%"]
        },
        "leadership": {
            "chairman": "徐旭東",
            "ceo": "徐旭東",
            "news": ["美國新廠產能開出，搶攻當地環保包裝市場。"]
        }
    },
    "2014": {
        "symbol": "2014",
        "name": "中鴻 (Chung Hung)",
        "sector": "鋼鐵工業",
        "currentPrice": 22.0,
        "change": -0.2,
        "changePercent": -0.9,
        "marketCap": "NT$ 310 億",
        "history": {
            "founded": "1983年",
            "description": "中鋼集團子公司，主營熱軋、冷軋鋼捲及鋼管，報價具備高度靈活性。",
            "milestones": [{ "year": "1983", "event": "燁隆企業成立，後納入中鋼集團更名中鴻。" }]
        },
        "supplyChain": {
            "upstream": ["鋼胚 (由中鋼提供)"],
            "midstream": ["熱軋鋼捲", "冷軋鋼捲", "鋼管"],
            "downstream": ["建材廠", "汽車零組件", "五金加工"],
            "description": "作為中鋼體系的單軋廠，其盤價對國內鋼鐵中下游具備指標意義。"
        },
        "geopolitics": {
            "usRelations": "受美國鋼鐵防衛性關稅及中國傾銷影響大。",
            "globalImpact": "受全球房地產與基礎建設景氣高度連動。",
            "keyUSPartners": ["無"]
        },
        "operations": {
            "revenue": "NT$ 400 億",
            "yoyGrowth": "-5%",
            "grossMargin": "約 6%",
            "highlights": ["積極拓展高附加價值鋼管出口"]
        },
        "leadership": {
            "chairman": "劉敏雄",
            "ceo": "劉敏雄",
            "news": ["因應歐盟 CBAM，啟動碳盤查與低碳產線認證。"]
        }
    },
    "2201": {
        "symbol": "2201",
        "name": "裕隆 (Yulon)",
        "sector": "汽車工業",
        "currentPrice": 78.0,
        "change": 1.5,
        "changePercent": 1.9,
        "marketCap": "NT$ 820 億",
        "history": {
            "founded": "1953年",
            "description": "台灣汽車產業先驅，近期成功轉型發展新能源車代工，並擁有龐大新店裕隆城地產資產。",
            "milestones": [{ "year": "1953", "event": "公司成立。" }, { "year": "2023", "event": "納智捷 n7 電動車正式量產。" }]
        },
        "supplyChain": {
            "upstream": ["汽車零組件", "電池芯"],
            "midstream": ["整車組裝與製造"],
            "downstream": ["品牌經銷商", "消費者"],
            "description": "與鴻海合資成立鴻華先進，跨足電動車開放平台設計與代工。"
        },
        "geopolitics": {
            "usRelations": "電動車領域受惠於非紅供應鏈的發展契機。",
            "globalImpact": "透過 MIH 聯盟尋求國際接軌。",
            "keyUSPartners": ["無直接美國大客戶"]
        },
        "operations": {
            "revenue": "NT$ 880 億",
            "yoyGrowth": "+12%",
            "grossMargin": "約 15%",
            "highlights": ["納智捷 n7 交車量優於預期", "裕隆城租金收益豐厚"]
        },
        "leadership": {
            "chairman": "嚴陳莉蓮",
            "ceo": "姚振祥",
            "news": ["宣示未來三年推出多款全新電動車型。"]
        }
    },
    "2886": {
        "symbol": "2886",
        "name": "兆豐金 (Mega Holdings)",
        "sector": "金融保險",
        "currentPrice": 41.5,
        "change": 0.3,
        "changePercent": 0.7,
        "marketCap": "NT$ 5,900 億",
        "history": {
            "founded": "2002年",
            "description": "台灣最具代表性的公股金控，以外匯業務及企業金融見長，獲利長期居公股之冠。",
            "milestones": [{ "year": "2002", "event": "兆豐金控掛牌上市。" }]
        },
        "supplyChain": {
            "upstream": ["央行政策", "大眾存款"],
            "midstream": ["外匯業務", "企金聯貸", "財富管理"],
            "downstream": ["大型企業", "進出口商", "一般投資人"],
            "description": "扮演台灣進出口貿易與大型聯貸案的重要資金推手。"
        },
        "geopolitics": {
            "usRelations": "因美國升息循環獲得龐大的淨利差收益，其紐約分行亦扮演台美資金重要橋樑。",
            "globalImpact": "台灣唯一一家赴美業務規模龐大的公股銀行。",
            "keyUSPartners": ["美國聯準會 (監理關聯)"]
        },
        "operations": {
            "revenue": "NT$ 720 億 (淨收益)",
            "yoyGrowth": "+8%",
            "grossMargin": "N/A",
            "highlights": ["外幣放款利差擴大", "手續費收入創新高"]
        },
        "leadership": {
            "chairman": "雷仲達",
            "ceo": "蕭玉美",
            "news": ["獲利續創歷史新高，配息政策深受存股族期待。"]
        }
    },
    "2884": {
        "symbol": "2884",
        "name": "玉山金 (E.SUN Financial)",
        "sector": "金融保險",
        "currentPrice": 28.5,
        "change": 0.1,
        "changePercent": 0.3,
        "marketCap": "NT$ 4,500 億",
        "history": {
            "founded": "2002年",
            "description": "以優質服務與長期投入 ESG 著稱的民營金控，以財富管理及信用卡業務為核心引擎。",
            "milestones": [{ "year": "2002", "event": "玉山金控成立。" }]
        },
        "supplyChain": {
            "upstream": ["大眾存款", "央行"],
            "midstream": ["消費金融", "財富管理", "數位銀行"],
            "downstream": ["高資產客戶", "一般消費者", "中小企業"],
            "description": "台灣數位轉型最成功的傳統銀行之一。"
        },
        "geopolitics": {
            "usRelations": "隨外資對台股ESG標準提升，玉山金經常獲得最高評級而獲外資青睞。",
            "globalImpact": "無重大地緣衝擊。",
            "keyUSPartners": ["國際ESG評級機構"]
        },
        "operations": {
            "revenue": "NT$ 650 億 (淨收益)",
            "yoyGrowth": "+11%",
            "grossMargin": "N/A",
            "highlights": ["財富管理手續費雙位數成長", "海外分行獲利佔比突破20%"]
        },
        "leadership": {
            "chairman": "黃男州",
            "ceo": "陳茂欽",
            "news": ["連續多年入選道瓊永續指數(DJSI)。"]
        }
    },
    "5904": {
        "symbol": "5904",
        "name": "寶雅 (POYA)",
        "sector": "貿易百貨",
        "currentPrice": 520.0,
        "change": 15.0,
        "changePercent": 2.9,
        "marketCap": "NT$ 530 億",
        "history": {
            "founded": "1985年",
            "description": "台灣最大生活百貨零售連鎖店，專注於美妝、生活用品，在實體零售中具備統治級別的市佔率。",
            "milestones": [{ "year": "1985", "event": "第一家寶雅成立。" }]
        },
        "supplyChain": {
            "upstream": ["美妝品牌", "日用品製造商"],
            "midstream": ["寶雅強大的物流與實體店網路"],
            "downstream": ["女性消費者", "一般家庭"],
            "description": "以強大的通路議價能力與規模經濟，在電商衝擊下依然保持高成長。"
        },
        "geopolitics": {
            "usRelations": "無直接關聯，為純內需型防禦產業。",
            "globalImpact": "無",
            "keyUSPartners": ["無"]
        },
        "operations": {
            "revenue": "NT$ 230 億",
            "yoyGrowth": "+14%",
            "grossMargin": "約 43%",
            "highlights": ["實體店數突破 400 家", "同店銷售額 (SSSG) 維持正成長"]
        },
        "leadership": {
            "chairman": "陳建造",
            "ceo": "陳建造",
            "news": ["推出全新居家五金品牌「寶家」，擴大客群。"]
        }
    },
    "9921": {
        "symbol": "9921",
        "name": "巨大 (Giant)",
        "sector": "運動休閒",
        "currentPrice": 225.0,
        "change": 2.0,
        "changePercent": 0.9,
        "marketCap": "NT$ 880 億",
        "history": {
            "founded": "1972年",
            "description": "全球最大的自行車製造商，旗下 Giant 品牌行銷全球，近年在電動自行車 (E-Bike) 領域大放異彩。",
            "milestones": [{ "year": "1972", "event": "巨大機械成立。" }, { "year": "1981", "event": "創立自有品牌 Giant。" }]
        },
        "supplyChain": {
            "upstream": ["碳纖維材料", "鋁合金", "變速器 (Shimano)"],
            "midstream": ["巨大自身：自行車與 E-Bike 研發組裝"],
            "downstream": ["全球經銷商", "消費者"],
            "description": "掌握全球高端自行車研發與製造咽喉。"
        },
        "geopolitics": {
            "usRelations": "歐洲與美國為其主要高階市場，受當地關稅與環保政策影響大。",
            "globalImpact": "後疫情時代戶外運動與低碳出行趨勢的最大受益者。",
            "keyUSPartners": ["Trek (代工客戶)"]
        },
        "operations": {
            "revenue": "NT$ 850 億",
            "yoyGrowth": "+6%",
            "grossMargin": "約 23%",
            "highlights": ["E-Bike 營收佔比突破 35%，拉升整體毛利", "歐洲市場庫存去化完成"]
        },
        "leadership": {
            "chairman": "杜綉珍",
            "ceo": "劉湧昌",
            "news": ["擴大越南廠區產能，分散地緣政治風險。"]
        }
    }
}

target_dir = "/Users/alu/.gemini/antigravity/scratch/taiwan_stock_encyclopedia/src/data/stocks"
os.makedirs(target_dir, exist_ok=True)

for sym, data in stocks_data.items():
    code = f"export const stockData = {json.dumps(data, ensure_ascii=False, indent=2)};\n"
    path = os.path.join(target_dir, f"{sym}.ts")
    with open(path, 'w', encoding='utf-8') as f:
        f.write(code)
print("Stock files generated.")
