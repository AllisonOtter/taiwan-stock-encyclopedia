import json
import re

stocks_data = [
    {"id": "2903", "name": "遠百", "symbol": "2903", "price": 25.5, "change": 0.5, "changePercent": 2.0, "sector": "retail"},
    {"id": "2908", "name": "特力", "symbol": "2908", "price": 22.0, "change": 0.2, "changePercent": 0.91, "sector": "retail"},
    {"id": "2929", "name": "淘帝-KY", "symbol": "2929", "price": 12.5, "change": -0.2, "changePercent": -1.57, "sector": "retail"},
    {"id": "2939", "name": "潤泰材", "symbol": "2939", "price": 28.5, "change": 0.5, "changePercent": 1.78, "sector": "other"},
    {"id": "3013", "name": "晟銘電", "symbol": "3013", "price": 165.0, "change": 15.0, "changePercent": 10.0, "sector": "computer-peripheral"},
    {"id": "3014", "name": "聯陽", "symbol": "3014", "price": 165.0, "change": 4.5, "changePercent": 2.80, "sector": "semiconductor"},
    {"id": "3016", "name": "嘉晶", "symbol": "3016", "price": 52.0, "change": 1.2, "changePercent": 2.36, "sector": "semiconductor"},
    {"id": "3019", "name": "亞光", "symbol": "3019", "price": 72.0, "change": 2.5, "changePercent": 3.59, "sector": "optoelectronic"},
    {"id": "3033", "name": "威健", "symbol": "3033", "price": 32.0, "change": 0.5, "changePercent": 1.58, "sector": "electronic-commerce"},
    {"id": "3035", "name": "智原", "symbol": "3035", "price": 380.0, "change": -10.0, "changePercent": -2.56, "sector": "semiconductor"},
    {"id": "3041", "name": "揚智", "symbol": "3041", "price": 22.5, "change": 0.2, "changePercent": 0.89, "sector": "semiconductor"},
    {"id": "3051", "name": "力特", "symbol": "3051", "price": 28.5, "change": 0.5, "changePercent": 1.78, "sector": "optoelectronic"},
    {"id": "3049", "name": "和鑫", "symbol": "3049", "price": 12.5, "change": 0.1, "changePercent": 0.81, "sector": "optoelectronic"},
    {"id": "3056", "name": "富宇", "symbol": "3056", "price": 42.0, "change": 1.5, "changePercent": 3.70, "sector": "building-construction"},
    {"id": "3059", "name": "華晶科", "symbol": "3059", "price": 38.5, "change": 0.5, "changePercent": 1.31, "sector": "optoelectronic"},
    {"id": "3149", "name": "正達", "symbol": "3149", "price": 22.5, "change": 0.5, "changePercent": 2.27, "sector": "optoelectronic"},
    {"id": "3209", "name": "全科", "symbol": "3209", "price": 42.0, "change": 1.2, "changePercent": 2.94, "sector": "electronic-commerce"},
    {"id": "3229", "name": "晟德", "symbol": "3229", "price": 52.0, "change": 1.5, "changePercent": 2.97, "sector": "biotech"},
    {"id": "3311", "name": "閎康", "symbol": "3311", "price": 285.0, "change": 15.0, "changePercent": 5.56, "sector": "semiconductor"},
    {"id": "3328", "name": "廣明", "symbol": "3328", "price": 85.0, "change": 2.5, "changePercent": 3.03, "sector": "computer-peripheral"},
    {"id": "3376", "name": "新日興", "symbol": "3376", "price": 215.0, "change": 12.0, "changePercent": 5.91, "sector": "electronic-parts"},
    {"id": "3450", "name": "聯鈞", "symbol": "3450", "price": 245.0, "change": 20.0, "changePercent": 8.89, "sector": "semiconductor"},
    {"id": "3491", "name": "昇達科", "symbol": "3491", "price": 285.0, "change": 15.0, "changePercent": 5.56, "sector": "communication-network"},
    {"id": "3504", "name": "揚明光", "symbol": "3504", "price": 65.0, "change": 2.5, "changePercent": 4.00, "sector": "optoelectronic"},
    {"id": "3532", "name": "台勝科", "symbol": "3532", "price": 145.0, "change": 3.5, "changePercent": 2.47, "sector": "semiconductor"},
    {"id": "3545", "name": "敦泰", "symbol": "3545", "price": 85.0, "change": 1.5, "changePercent": 1.80, "sector": "semiconductor"},
    {"id": "3587", "name": "明泰", "symbol": "3587", "price": 38.5, "change": 0.5, "changePercent": 1.32, "sector": "communication-network"},
    {"id": "3665", "name": "貿聯-KY", "symbol": "3665", "price": 420.0, "change": 15.0, "changePercent": 3.70, "sector": "electronic-parts"},
    {"id": "3704", "name": "合勤控", "symbol": "3704", "price": 45.0, "change": 1.2, "changePercent": 2.74, "sector": "communication-network"},
    {"id": "4104", "name": "佳醫", "symbol": "4104", "price": 85.0, "change": 1.5, "changePercent": 1.80, "sector": "biotech"},
    {"id": "4105", "name": "東洋", "symbol": "4105", "price": 82.0, "change": 0.5, "changePercent": 0.61, "sector": "biotech"},
    {"id": "4142", "name": "國光生", "symbol": "4142", "price": 28.5, "change": 0.2, "changePercent": 0.71, "sector": "biotech"},
    {"id": "4162", "name": "智擎", "symbol": "4162", "price": 85.0, "change": 1.5, "changePercent": 1.80, "sector": "biotech"},
    {"id": "4739", "name": "康普", "symbol": "4739", "price": 85.0, "change": 2.0, "changePercent": 2.41, "sector": "chemical"},
    {"id": "4746", "name": "台耀", "symbol": "4746", "price": 105.0, "change": 3.0, "changePercent": 2.94, "sector": "biotech"},
    {"id": "4906", "name": "正文", "symbol": "4906", "price": 42.0, "change": 1.2, "changePercent": 2.94, "sector": "communication-network"},
    {"id": "4915", "name": "致伸", "symbol": "4915", "price": 85.0, "change": 1.5, "changePercent": 1.80, "sector": "computer-peripheral"},
    {"id": "4968", "name": "立積", "symbol": "4968", "price": 215.0, "change": 10.0, "changePercent": 4.88, "sector": "semiconductor"},
    {"id": "5215", "name": "科嘉-KY", "symbol": "5215", "price": 42.0, "change": 1.2, "changePercent": 2.94, "sector": "electronic-parts"},
    {"id": "5289", "name": "宜鼎", "symbol": "5289", "price": 315.0, "change": 15.0, "changePercent": 5.00, "sector": "semiconductor"},
    {"id": "5347", "name": "世界", "symbol": "5347", "price": 125.0, "change": 5.0, "changePercent": 4.17, "sector": "semiconductor"},
    {"id": "5425", "name": "台半", "symbol": "5425", "price": 85.0, "change": 2.5, "changePercent": 3.03, "sector": "semiconductor"},
    {"id": "5434", "name": "崇越", "symbol": "5434", "price": 285.0, "change": 12.0, "changePercent": 4.40, "sector": "electronic-commerce"},
    {"id": "5876", "name": "上海商銀", "symbol": "5876", "price": 42.0, "change": 0.5, "changePercent": 1.20, "sector": "finance"},
    {"id": "6147", "name": "頎邦", "symbol": "6147", "price": 65.0, "change": 1.2, "changePercent": 1.88, "sector": "semiconductor"},
    {"id": "6176", "name": "瑞儀", "symbol": "6176", "price": 165.0, "change": 4.5, "changePercent": 2.80, "sector": "optoelectronic"},
    {"id": "6202", "name": "盛群", "symbol": "6202", "price": 58.0, "change": 1.2, "changePercent": 2.11, "sector": "semiconductor"},
    {"id": "6214", "name": "精誠", "symbol": "6214", "price": 125.0, "change": 2.5, "changePercent": 2.04, "sector": "information-service"},
    {"id": "6239", "name": "力成", "symbol": "6239", "price": 165.0, "change": 4.5, "changePercent": 2.80, "sector": "semiconductor"},
    {"id": "6278", "name": "台表科", "symbol": "6278", "price": 115.0, "change": 3.5, "changePercent": 3.14, "sector": "optoelectronic"}
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

print("categories.ts updated with batch 11.")
