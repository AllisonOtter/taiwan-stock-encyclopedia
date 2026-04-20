import json
import os

stocks_data = {
    "2885": {
        "symbol": "2885",
        "name": "元大金 (Yuanta)",
        "sector": "金融保險業",
        "currentPrice": 32.5,
        "change": 0.4,
        "changePercent": 1.25,
        "marketCap": "NT$ 4,100 億",
        "history": {
            "founded": "2007年",
            "description": "台灣最大的證券體系金控，旗下元大證券市佔率長年第一，同時也是 0050、0056 等國民 ETF 的發行商。",
            "milestones": [{ "year": "2007", "event": "元大金控成立。" }, { "year": "2024", "event": "台股成交量爆發，帶動經紀與財管手續費創歷史新高。" }]
        },
        "supplyChain": { "upstream": ["投資大眾", "央行"], "midstream": ["證券經紀", "投信基金管理", "商業銀行"], "downstream": ["散戶", "法人機構"], "description": "台股大行情的最大受惠者。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "隨台股與美股連動而間接收益。", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 1,150 億 (淨收益)", "yoyGrowth": "+22%", "grossMargin": "N/A", "highlights": ["ETF 管理費收入與證券手續費雙雙噴發"] },
        "leadership": { "chairman": "申鼎籛", "ceo": "翁健", "news": ["元大投信資產管理規模突破新高。"] }
    },
    "2892": {
        "symbol": "2892",
        "name": "第一金 (First Financial)",
        "sector": "金融保險業",
        "currentPrice": 28.2,
        "change": 0.1,
        "changePercent": 0.36,
        "marketCap": "NT$ 3,800 億",
        "history": {
            "founded": "2003年",
            "description": "台灣歷史悠久的公股金控，以第一銀行為主體，中小企業放款與外匯業務表現亮眼。",
            "milestones": [{ "year": "2003", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["大眾存款"], "midstream": ["企金聯貸", "房貸", "財富管理"], "downstream": ["中小企業", "一般民眾"], "description": "台灣中小企業融資的重要推手。" },
        "geopolitics": { "usRelations": "受惠於美國高利率環境維持的淨利差。", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 650 億 (淨收益)", "yoyGrowth": "+8%", "grossMargin": "N/A", "highlights": ["海外分行獲利佔比持續提升"] },
        "leadership": { "chairman": "邱月琴", "ceo": "陳芬蘭", "news": ["積極推動綠色金融與 ESG 放款。"] }
    },
    "2890": {
        "symbol": "2890",
        "name": "永豐金 (SinoPac)",
        "sector": "金融保險業",
        "currentPrice": 22.8,
        "change": 0.3,
        "changePercent": 1.33,
        "marketCap": "NT$ 2,800 億",
        "history": {
            "founded": "2002年",
            "description": "近年獲利成長最為強勁的民營金控之一，旗下證券與數位銀行 (大戶 DAWHO) 發展極為成功。",
            "milestones": [{ "year": "2002", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["年輕客群存款"], "midstream": ["數位金融", "複委託證券"], "downstream": ["新世代投資人", "企業客戶"], "description": "數位轉型與年輕客群經營最成功的金控之一。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 550 億 (淨收益)", "yoyGrowth": "+15%", "grossMargin": "N/A", "highlights": ["證券複委託市佔率名列前茅", "銀行獲利雙位數成長"] },
        "leadership": { "chairman": "陳思寬", "ceo": "朱士廷", "news": ["持續深化 AI 導入金融營運與風險控管。"] }
    },
    "2615": {
        "symbol": "2615",
        "name": "萬海 (Wan Hai)",
        "sector": "航運業",
        "currentPrice": 85.0,
        "change": 2.5,
        "changePercent": 3.03,
        "marketCap": "NT$ 2,300 億",
        "history": {
            "founded": "1965年",
            "description": "台灣貨櫃三雄之一，過去專注於近洋亞洲航線，疫情期間大幅擴張遠洋美西航線。",
            "milestones": [{ "year": "1965", "event": "成立。" }, { "year": "2021", "event": "大舉買船擴展遠洋航線。" }]
        },
        "supplyChain": { "upstream": ["造船廠", "燃油供應商"], "midstream": ["近洋與遠洋貨櫃運輸"], "downstream": ["進出口貿易商", "科技廠", "傳產製造商"], "description": "亞洲區間航線市佔率極高。" },
        "geopolitics": { "usRelations": "深受紅海危機、巴拿馬運河乾旱及中美貿易戰關稅提前出貨潮影響。", "globalImpact": "受全球供應鏈重組帶動的東南亞出口需求利多。", "keyUSPartners": ["各美國大型零售商"] },
        "operations": { "revenue": "NT$ 1,200 億", "yoyGrowth": "+18%", "grossMargin": "約 15%", "highlights": ["運價走高帶動本業獲利大幅改善"] },
        "leadership": { "chairman": "陳柏廷", "ceo": "謝福隆", "news": ["持續交付節能新船以符合國際環保法規。"] }
    },
    "2610": {
        "symbol": "2610",
        "name": "華航 (China Airlines)",
        "sector": "航運業",
        "currentPrice": 22.5,
        "change": 0.2,
        "changePercent": 0.90,
        "marketCap": "NT$ 1,300 億",
        "history": {
            "founded": "1959年",
            "description": "台灣載旗航空公司，擁有龐大的全貨機機隊，在全球航空貨運市場佔有一席之地。",
            "milestones": [{ "year": "1959", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["波音/空巴", "航空燃油"], "midstream": ["客運航線", "貨運物流"], "downstream": ["旅遊業", "台灣科技業電子零組件出口"], "description": "台灣半導體與 AI 伺服器出口極度仰賴其貨運能量。" },
        "geopolitics": { "usRelations": "AI 晶片與伺服器空運出口美國的主要運力提供者。", "globalImpact": "受惠全球旅遊復甦。", "keyUSPartners": ["Boeing", "NVIDIA (間接客戶)"] },
        "operations": { "revenue": "NT$ 1,600 億", "yoyGrowth": "+12%", "grossMargin": "約 14%", "highlights": ["客貨運雙引擎齊發，北美航線載客率滿載"] },
        "leadership": { "chairman": "謝世謙", "ceo": "高星潢", "news": ["引進波音 787 與 777F 新世代機隊。"] }
    },
    "6669": {
        "symbol": "6669",
        "name": "緯穎 (Wiwynn)",
        "sector": "電腦及週邊設備業",
        "currentPrice": 2450.0,
        "change": 100.0,
        "changePercent": 4.25,
        "marketCap": "NT$ 4,300 億",
        "history": {
            "founded": "2012年",
            "description": "緯創集團旗下的小金雞，專注於提供超大型資料中心 (Hyperscale Data Center) 伺服器與儲存設備，為 OCP (開放運算計畫) 核心成員。",
            "milestones": [{ "year": "2012", "event": "自緯創分割獨立。" }]
        },
        "supplyChain": { "upstream": ["CPU/GPU (NVIDIA, AMD)", "記憶體"], "midstream": ["雲端伺服器設計與組裝"], "downstream": ["CSP巨頭 (Meta, Microsoft, AWS)"], "description": "採用直接銷售模式(Direct-to-Customer)給雲端服務巨頭，跳過品牌商。" },
        "geopolitics": { "usRelations": "業績高度綁定美國雲端巨頭 (Meta與Microsoft為其最大客戶)。", "globalImpact": "無", "keyUSPartners": ["Meta", "Microsoft"] },
        "operations": { "revenue": "NT$ 2,800 億", "yoyGrowth": "+35%", "grossMargin": "約 10%", "highlights": ["AI 伺服器專案陸續放量，ASIC 伺服器佔比高"] },
        "leadership": { "chairman": "洪麗甯", "ceo": "張順來", "news": ["馬來西亞與台南廠區持續擴產因應 AI 需求。"] }
    },
    "2324": {
        "symbol": "2324",
        "name": "仁寶 (Compal)",
        "sector": "電腦及週邊設備業",
        "currentPrice": 36.5,
        "change": 0.5,
        "changePercent": 1.39,
        "marketCap": "NT$ 1,600 億",
        "history": {
            "founded": "1984年",
            "description": "全球前三大筆記型電腦代工廠，近年積極佈局伺服器、車用電子與智慧醫療領域。",
            "milestones": [{ "year": "1984", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["各式電子零組件"], "midstream": ["NB代工", "伺服器代工", "智慧穿戴組裝"], "downstream": ["Dell", "Lenovo", "Apple"], "description": "與廣達、緯創並列台灣代工大廠。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "受惠 AI PC 換機潮。", "keyUSPartners": ["Dell", "HP"] },
        "operations": { "revenue": "NT$ 9,500 億", "yoyGrowth": "-2%", "grossMargin": "約 4.5%", "highlights": ["積極提升非 PC 業務營收佔比以優化毛利"] },
        "leadership": { "chairman": "陳瑞聰", "ceo": "伯納多(Anthony Peter Bonadero)", "news": ["經營團隊世代交替，全力衝刺 AI 伺服器與車用市場。"] }
    },
    "2356": {
        "symbol": "2356",
        "name": "英業達 (Inventec)",
        "sector": "電腦及週邊設備業",
        "currentPrice": 52.0,
        "change": 1.5,
        "changePercent": 2.97,
        "marketCap": "NT$ 1,850 億",
        "history": {
            "founded": "1975年",
            "description": "老牌代工廠，伺服器主機板設計製造實力深厚，更是全球最大的企業級伺服器主機板供應商。",
            "milestones": [{ "year": "1975", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["CPU/GPU", "電子零件"], "midstream": ["伺服器主板 (L6)", "NB組裝"], "downstream": ["HPE", "Dell", "CSP巨頭"], "description": "在 AI 伺服器主板 (L6 製程) 具備極高市佔率。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["HPE", "Dell"] },
        "operations": { "revenue": "NT$ 5,500 億", "yoyGrowth": "+10%", "grossMargin": "約 5%", "highlights": ["AI 伺服器主板出貨動能強勁，車用事業進入收割期"] },
        "leadership": { "chairman": "葉力誠", "ceo": "蔡枝安", "news": ["墨西哥廠擴廠完畢，專注就近供應北美伺服器組裝。"] }
    },
    "2379": {
        "symbol": "2379",
        "name": "瑞昱 (Realtek)",
        "sector": "半導體業",
        "currentPrice": 520.0,
        "change": -5.0,
        "changePercent": -0.95,
        "marketCap": "NT$ 2,650 億",
        "history": {
            "founded": "1987年",
            "description": "台灣網通 IC 設計龍頭，以「螃蟹卡」聞名全球，產品涵蓋 Wi-Fi、藍牙、乙太網路與音效晶片。",
            "milestones": [{ "year": "1987", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["矽智財 (ARM)"], "midstream": ["IC 設計", "交由台積電代工"], "downstream": ["PC廠", "網通設備廠", "車廠"], "description": "全球 PC 音效與乙太網路晶片市佔率第一。" },
        "geopolitics": { "usRelations": "受惠於網通基建標案去中化。", "globalImpact": "全球 Wi-Fi 規格升級的最大贏家。", "keyUSPartners": ["各大PC品牌"] },
        "operations": { "revenue": "NT$ 1,050 億", "yoyGrowth": "+12%", "grossMargin": "約 45%", "highlights": ["Wi-Fi 7 晶片開始放量出貨", "車用乙太網路獲國際車廠認證"] },
        "leadership": { "chairman": "邱順建", "ceo": "顏光裕", "news": ["積極跨足高速傳輸介面與車用晶片。"] }
    },
    "3034": {
        "symbol": "3034",
        "name": "聯詠 (Novatek)",
        "sector": "半導體業",
        "currentPrice": 620.0,
        "change": 15.0,
        "changePercent": 2.47,
        "marketCap": "NT$ 3,750 億",
        "history": {
            "founded": "1997年",
            "description": "全球驅動 IC (DDI) 與系統單晶片 (SoC) 設計龍頭，為聯電集團成員。",
            "milestones": [{ "year": "1997", "event": "聯電設計部門獨立成立聯詠。" }]
        },
        "supplyChain": { "upstream": ["ARM"], "midstream": ["驅動 IC 設計"], "downstream": ["面板廠 (友達、群創、京東方)", "蘋果"], "description": "主宰全球電視與高階智慧手機的顯示晶片。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "受中國晶片國產化競爭壓力，積極轉向高階 OLED DDI 與 AI 影像處理晶片。", "keyUSPartners": ["Apple (間接供貨)"] },
        "operations": { "revenue": "NT$ 1,150 億", "yoyGrowth": "+8%", "grossMargin": "約 40%", "highlights": ["OLED 驅動 IC 滲透率持續提升", "跨足 ASIC 設計領域"] },
        "leadership": { "chairman": "何泰舜", "ceo": "王守仁", "news": ["傳出打入 ARM 與台積電的新世代晶片聯盟。"] }
    },
    "6488": {
        "symbol": "6488",
        "name": "環球晶 (GlobalWafers)",
        "sector": "半導體業",
        "currentPrice": 520.0,
        "change": 8.0,
        "changePercent": 1.56,
        "marketCap": "NT$ 2,250 億",
        "history": {
            "founded": "2011年",
            "description": "中美晶集團子公司，透過多次精準跨國併購，躍升為全球第三大半導體矽晶圓廠。",
            "milestones": [{ "year": "2011", "event": "成立。" }, { "year": "2016", "event": "併購 SunEdison 半導體部門。" }]
        },
        "supplyChain": { "upstream": ["多晶矽"], "midstream": ["8吋/12吋矽晶圓", "碳化矽(SiC)晶圓"], "downstream": ["台積電", "Samsung", "Intel 等所有晶圓代工廠"], "description": "掌握半導體最源頭的材料命脈。" },
        "geopolitics": { "usRelations": "獲美國晶片法案直接高額補助，於德州興建全新 12 吋矽晶圓廠。", "globalImpact": "全球半導體供應鏈重組的核心受惠者。", "keyUSPartners": ["Intel", "TI", "美國商務部"] },
        "operations": { "revenue": "NT$ 720 億", "yoyGrowth": "-5%", "grossMargin": "約 35%", "highlights": ["客戶長約 (LTA) 覆蓋率極高，營運具備高度抗跌性", "德州廠建設進度順利"] },
        "leadership": { "chairman": "徐秀蘭", "ceo": "徐秀蘭", "news": ["積極發展第三代半導體 (SiC) 產能。"] }
    },
    "1504": {
        "symbol": "1504",
        "name": "東元 (TECO)",
        "sector": "電機機械",
        "currentPrice": 52.0,
        "change": 0.5,
        "changePercent": 0.97,
        "marketCap": "NT$ 1,100 億",
        "history": {
            "founded": "1956年",
            "description": "全球前三大工業馬達製造商，近年積極轉型綠能機電與智慧物流。",
            "milestones": [{ "year": "1956", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["矽鋼片", "銅線"], "midstream": ["工業馬達", "機電工程統包"], "downstream": ["工廠自動化", "電動車廠", "台電變電站"], "description": "台灣重電與自動化產業的領頭羊。" },
        "geopolitics": { "usRelations": "受惠於美國基礎建設更新與台電強韌電網計畫。", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 620 億", "yoyGrowth": "+8%", "grossMargin": "約 25%", "highlights": ["高壓馬達與重電設備訂單滿載", "跨足印度電動車動力系統"] },
        "leadership": { "chairman": "利明献", "ceo": "范炘", "news": ["積極搶攻海外資料中心機電工程商機。"] }
    },
    "2049": {
        "symbol": "2049",
        "name": "上銀 (HIWIN)",
        "sector": "電機機械",
        "currentPrice": 245.0,
        "change": 5.0,
        "changePercent": 2.08,
        "marketCap": "NT$ 850 億",
        "history": {
            "founded": "1989年",
            "description": "全球第二大線性滑軌與滾珠螺桿製造商，為精密機械與半導體設備的核心零件供應商。",
            "milestones": [{ "year": "1989", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["特種鋼材"], "midstream": ["線性滑軌", "滾珠螺桿", "工業機器人"], "downstream": ["工具機廠", "半導體設備廠 (ASML, 應用材料)", "自動化設備"], "description": "工業 4.0 與機器人產業不可或缺的精密傳動零件。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "與全球製造業資本支出(尤其是中國與歐洲市場)景氣高度連動。", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 260 億", "yoyGrowth": "+15%", "grossMargin": "約 35%", "highlights": ["半導體設備訂單復甦", "積極研發晶圓機器人"] },
        "leadership": { "chairman": "卓文恒", "ceo": "蔡惠卿", "news": ["看好自動化景氣落底回溫。"] }
    },
    "1513": {
        "symbol": "1513",
        "name": "中興電 (CHEM)",
        "sector": "電機機械",
        "currentPrice": 185.0,
        "change": 4.5,
        "changePercent": 2.49,
        "marketCap": "NT$ 920 億",
        "history": {
            "founded": "1956年",
            "description": "台灣重電四雄之一，在氣體絕緣開關 (GIS) 設備市場具備極高市佔率，同時發展氫能與嘟嘟房停車場業務。",
            "milestones": [{ "year": "1956", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["銅", "鋼材", "絕緣氣體"], "midstream": ["高壓 GIS 開關設備"], "downstream": ["台電", "離岸風電變電站"], "description": "台電強韌電網計畫的最大受益者之一。" },
        "geopolitics": { "usRelations": "無", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 240 億", "yoyGrowth": "+20%", "grossMargin": "約 30%", "highlights": ["GIS 開關設備在手訂單突破 400 億元，能見度達三年以上"] },
        "leadership": { "chairman": "江馥年", "ceo": "郭慧娟", "news": ["擴建嘉義廠產能以消化台電龐大訂單。"] }
    },
    "1514": {
        "symbol": "1514",
        "name": "亞力 (Allis Electric)",
        "sector": "電機機械",
        "currentPrice": 145.0,
        "change": 3.0,
        "changePercent": 2.11,
        "marketCap": "NT$ 400 億",
        "history": {
            "founded": "1968年",
            "description": "重電設備廠，專精於變壓器、配電盤與不斷電系統 (UPS)，為台積電海內外建廠的長期合作夥伴。",
            "milestones": [{ "year": "1968", "event": "成立。" }]
        },
        "supplyChain": { "upstream": ["矽鋼片", "銅線"], "midstream": ["變壓器", "配電盤", "不斷電系統"], "downstream": ["台電", "半導體晶圓廠", "軌道工程"], "description": "同時受惠於台電電網更新與科技廠擴廠。" },
        "geopolitics": { "usRelations": "跟隨台積電赴美設廠，提供當地建廠所需的配電設備。", "globalImpact": "無", "keyUSPartners": ["無"] },
        "operations": { "revenue": "NT$ 110 億", "yoyGrowth": "+25%", "grossMargin": "約 18%", "highlights": ["科技廠配電設備與台電訂單雙動能", "在手訂單維持高檔"] },
        "leadership": { "chairman": "宋和業", "ceo": "宋和業", "news": ["拿下多筆半導體大廠海外建廠機電訂單。"] }
    }
}

target_dir = "/Users/alu/.gemini/antigravity/scratch/taiwan_stock_encyclopedia/src/data/stocks"
os.makedirs(target_dir, exist_ok=True)

for sym, data in stocks_data.items():
    code = f"export const stockData = {json.dumps(data, ensure_ascii=False, indent=2)};\n"
    path = os.path.join(target_dir, f"{sym}.ts")
    with open(path, 'w', encoding='utf-8') as f:
        f.write(code)
print("Batch 4 Stock files generated.")
