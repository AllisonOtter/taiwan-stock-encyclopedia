import json
import re

stocks_data = [
    {"id": "1104", "name": "環泥", "symbol": "1104", "price": 28.5, "change": 0.2, "changePercent": 0.71, "sector": "cement"},
    {"id": "1201", "name": "味全", "symbol": "1201", "price": 18.5, "change": 0.1, "changePercent": 0.54, "sector": "food"},
    {"id": "1210", "name": "大成", "symbol": "1210", "price": 52.0, "change": 0.5, "changePercent": 0.97, "sector": "food"},
    {"id": "1215", "name": "卜蜂", "symbol": "1215", "price": 95.0, "change": 1.5, "changePercent": 1.60, "sector": "food"},
    {"id": "1304", "name": "臺聚", "symbol": "1304", "price": 18.5, "change": 0.2, "changePercent": 1.09, "sector": "plastic"},
    {"id": "1305", "name": "華夏", "symbol": "1305", "price": 22.0, "change": 0.1, "changePercent": 0.46, "sector": "plastic"},
    {"id": "1308", "name": "亞聚", "symbol": "1308", "price": 24.5, "change": 0.3, "changePercent": 1.24, "sector": "plastic"},
    {"id": "1309", "name": "台達化", "symbol": "1309", "price": 16.5, "change": 0.2, "changePercent": 1.23, "sector": "plastic"},
    {"id": "1409", "name": "新纖", "symbol": "1409", "price": 15.2, "change": 0.1, "changePercent": 0.66, "sector": "textile"},
    {"id": "1477", "name": "聚陽", "symbol": "1477", "price": 385.0, "change": 12.0, "changePercent": 3.22, "sector": "textile"},
    {"id": "1522", "name": "堤維西", "symbol": "1522", "price": 52.0, "change": 1.5, "changePercent": 2.97, "sector": "automobile"},
    {"id": "1524", "name": "耿鼎", "symbol": "1524", "price": 35.0, "change": 0.5, "changePercent": 1.45, "sector": "automobile"},
    {"id": "1533", "name": "車王電", "symbol": "1533", "price": 48.0, "change": 1.0, "changePercent": 2.13, "sector": "automobile"},
    {"id": "1604", "name": "聲寶", "symbol": "1604", "price": 28.5, "change": 0.2, "changePercent": 0.71, "sector": "electric-machinery"},
    {"id": "1608", "name": "華榮", "symbol": "1608", "price": 42.0, "change": 1.5, "changePercent": 3.70, "sector": "cable"},
    {"id": "1702", "name": "南僑", "symbol": "1702", "price": 52.0, "change": 0.5, "changePercent": 0.97, "sector": "food"},
    {"id": "1712", "name": "興農", "symbol": "1712", "price": 45.0, "change": 0.4, "changePercent": 0.90, "sector": "chemical"},
    {"id": "1722", "name": "台肥", "symbol": "1722", "price": 62.0, "change": 0.5, "changePercent": 0.81, "sector": "chemical"},
    {"id": "1789", "name": "神隆", "symbol": "1789", "price": 28.5, "change": 0.2, "changePercent": 0.71, "sector": "biotech"},
    {"id": "2009", "name": "第一銅", "symbol": "2009", "price": 42.0, "change": 1.5, "changePercent": 3.70, "sector": "steel"},
    {"id": "2031", "name": "新光鋼", "symbol": "2031", "price": 62.0, "change": 1.2, "changePercent": 1.97, "sector": "steel"},
    {"id": "2101", "name": "南港", "symbol": "2101", "price": 48.0, "change": 1.0, "changePercent": 2.13, "sector": "rubber"},
    {"id": "2103", "name": "台橡", "symbol": "2103", "price": 28.5, "change": 0.2, "changePercent": 0.71, "sector": "rubber"},
    {"id": "2204", "name": "中華", "symbol": "2204", "price": 115.0, "change": 4.5, "changePercent": 4.07, "sector": "automobile"},
    {"id": "2206", "name": "三陽工業", "symbol": "2206", "price": 72.0, "change": 1.5, "changePercent": 2.13, "sector": "automobile"},
    {"id": "2312", "name": "金寶", "symbol": "2312", "price": 24.5, "change": 0.5, "changePercent": 2.08, "sector": "computer-peripheral"},
    {"id": "2314", "name": "台揚", "symbol": "2314", "price": 42.0, "change": 1.2, "changePercent": 2.94, "sector": "communication-network"},
    {"id": "2344", "name": "華邦電", "symbol": "2344", "price": 28.5, "change": 0.5, "changePercent": 1.79, "sector": "semiconductor"},
    {"id": "2367", "name": "燿華", "symbol": "2367", "price": 38.5, "change": 1.5, "changePercent": 4.05, "sector": "electronic-parts"},
    {"id": "2375", "name": "凱美", "symbol": "2375", "price": 72.0, "change": 2.0, "changePercent": 2.86, "sector": "electronic-parts"},
    {"id": "2393", "name": "億光", "symbol": "2393", "price": 65.0, "change": 1.2, "changePercent": 1.88, "sector": "optoelectronic"},
    {"id": "2405", "name": "輔信", "symbol": "2405", "price": 22.5, "change": 0.5, "changePercent": 2.27, "sector": "computer-peripheral"},
    {"id": "2406", "name": "國碩", "symbol": "2406", "price": 18.5, "change": 0.5, "changePercent": 2.78, "sector": "optoelectronic"},
    {"id": "2455", "name": "全新", "symbol": "2455", "price": 145.0, "change": 5.0, "changePercent": 3.57, "sector": "semiconductor"},
    {"id": "2464", "name": "盟立", "symbol": "2464", "price": 85.0, "change": 2.5, "changePercent": 3.03, "sector": "other-electronic"},
    {"id": "2481", "name": "強茂", "symbol": "2481", "price": 62.0, "change": 1.2, "changePercent": 1.97, "sector": "semiconductor"},
    {"id": "2489", "name": "瑞軒", "symbol": "2489", "price": 22.5, "change": 0.5, "changePercent": 2.27, "sector": "optoelectronic"},
    {"id": "2501", "name": "國建", "symbol": "2501", "price": 28.5, "change": 1.2, "changePercent": 4.40, "sector": "building-construction"},
    {"id": "2520", "name": "冠德", "symbol": "2520", "price": 52.0, "change": 1.5, "changePercent": 2.97, "sector": "building-construction"},
    {"id": "2605", "name": "新興", "symbol": "2605", "price": 28.5, "change": 0.5, "changePercent": 1.79, "sector": "shipping"},
    {"id": "2607", "name": "榮運", "symbol": "2607", "price": 32.0, "change": 0.2, "changePercent": 0.63, "sector": "shipping"},
    {"id": "2614", "name": "東森", "symbol": "2614", "price": 22.5, "change": 0.5, "changePercent": 2.27, "sector": "retail"},
    {"id": "2723", "name": "美食-KY", "symbol": "2723", "price": 105.0, "change": 2.5, "changePercent": 2.44, "sector": "tourism"},
    {"id": "2887", "name": "台新金", "symbol": "2887", "price": 18.5, "change": 0.2, "changePercent": 1.09, "sector": "finance"},
    {"id": "2888", "name": "新光金", "symbol": "2888", "price": 12.5, "change": 0.5, "changePercent": 4.17, "sector": "finance"},
    {"id": "2889", "name": "國票金", "symbol": "2889", "price": 15.2, "change": 0.1, "changePercent": 0.66, "sector": "finance"},
    {"id": "2892", "name": "第一金", "symbol": "2892", "price": 28.5, "change": 0.3, "changePercent": 1.06, "sector": "finance"}
]

with open("/Users/alu/.gemini/antigravity/scratch/taiwan_stock_encyclopedia/src/data/categories.ts", "r") as f:
    content = f.read()

for stock in stocks_data:
    sector = stock['sector']
    stock_str = f'      {{ id: "{stock["id"]}", name: "{stock["name"]}", symbol: "{stock["symbol"]}", price: {stock["price"]}, change: {stock["change"]}, changePercent: {stock["changePercent"]} }}'
    
    pattern = r'(id:\s*"' + sector + r'".*?topStocks:\s*\[)(.*?)(])'
    
    def repl(m):
        array_content = m.group(2).rstrip()
        if array_content.endswith(','):
            return m.group(1) + array_content + '\n' + stock_str + '\n    ' + m.group(3)
        else:
            return m.group(1) + array_content + ',\n' + stock_str + '\n    ' + m.group(3)
            
    content = re.sub(pattern, repl, content, flags=re.DOTALL)

with open("/Users/alu/.gemini/antigravity/scratch/taiwan_stock_encyclopedia/src/data/categories.ts", "w") as f:
    f.write(content)

print("categories.ts updated with batch 10.")
