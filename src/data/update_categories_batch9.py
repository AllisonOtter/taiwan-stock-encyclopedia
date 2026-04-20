import json
import re

stocks_data = [
    {"id": "1314", "name": "中石化", "symbol": "1314", "price": 9.5, "change": -0.1, "changePercent": -1.04, "sector": "plastic"},
    {"id": "1444", "name": "宏遠", "symbol": "1444", "price": 12.0, "change": 0.2, "changePercent": 1.69, "sector": "textile"},
    {"id": "1503", "name": "士電", "symbol": "1503", "price": 245.0, "change": 15.0, "changePercent": 6.52, "sector": "electric-machinery"},
    {"id": "1536", "name": "和大", "symbol": "1536", "price": 52.0, "change": 0.5, "changePercent": 0.97, "sector": "automobile"},
    {"id": "1560", "name": "中砂", "symbol": "1560", "price": 285.0, "change": 12.0, "changePercent": 4.40, "sector": "semiconductor"},
    {"id": "1582", "name": "信錦", "symbol": "1582", "price": 85.0, "change": 1.5, "changePercent": 1.80, "sector": "computer-peripheral"},
    {"id": "1598", "name": "岱宇", "symbol": "1598", "price": 28.5, "change": 0.2, "changePercent": 0.71, "sector": "sports-leisure"},
    {"id": "1609", "name": "大亞", "symbol": "1609", "price": 45.0, "change": 1.2, "changePercent": 2.74, "sector": "cable"},
    {"id": "1707", "name": "葡萄王", "symbol": "1707", "price": 142.0, "change": 1.5, "changePercent": 1.07, "sector": "biotech"},
    {"id": "1717", "name": "長興", "symbol": "1717", "price": 28.5, "change": 0.2, "changePercent": 0.71, "sector": "chemical"},
    {"id": "1723", "name": "中碳", "symbol": "1723", "price": 105.0, "change": 1.5, "changePercent": 1.45, "sector": "chemical"},
    {"id": "1736", "name": "喬山", "symbol": "1736", "price": 125.0, "change": 3.0, "changePercent": 2.46, "sector": "sports-leisure"},
    {"id": "1809", "name": "中釉", "symbol": "1809", "price": 18.5, "change": 0.2, "changePercent": 1.09, "sector": "glass-ceramic"},
    {"id": "1904", "name": "正隆", "symbol": "1904", "price": 28.5, "change": 0.2, "changePercent": 0.71, "sector": "paper"},
    {"id": "2006", "name": "東鋼", "symbol": "2006", "price": 65.0, "change": 0.5, "changePercent": 0.78, "sector": "steel"},
    {"id": "2015", "name": "豐興", "symbol": "2015", "price": 72.0, "change": 0.2, "changePercent": 0.28, "sector": "steel"},
    {"id": "2027", "name": "大成鋼", "symbol": "2027", "price": 38.5, "change": 0.4, "changePercent": 1.05, "sector": "steel"},
    {"id": "2108", "name": "南帝", "symbol": "2108", "price": 42.0, "change": 0.5, "changePercent": 1.20, "sector": "rubber"},
    {"id": "2227", "name": "裕日車", "symbol": "2227", "price": 135.0, "change": -1.0, "changePercent": -0.74, "sector": "automobile"},
    {"id": "2338", "name": "光罩", "symbol": "2338", "price": 75.0, "change": 1.5, "changePercent": 2.04, "sector": "semiconductor"},
    {"id": "2355", "name": "敬鵬", "symbol": "2355", "price": 48.0, "change": 1.0, "changePercent": 2.13, "sector": "electronic-parts"},
    {"id": "2362", "name": "藍天", "symbol": "2362", "price": 52.0, "change": 1.2, "changePercent": 2.36, "sector": "computer-peripheral"},
    {"id": "2374", "name": "佳能", "symbol": "2374", "price": 45.0, "change": 2.0, "changePercent": 4.65, "sector": "optoelectronic"},
    {"id": "2428", "name": "興勤", "symbol": "2428", "price": 165.0, "change": 3.0, "changePercent": 1.85, "sector": "electronic-parts"},
    {"id": "2439", "name": "美律", "symbol": "2439", "price": 125.0, "change": 4.5, "changePercent": 3.73, "sector": "electronic-parts"},
    {"id": "2441", "name": "超豐", "symbol": "2441", "price": 62.0, "change": 0.5, "changePercent": 0.81, "sector": "semiconductor"},
    {"id": "2451", "name": "創見", "symbol": "2451", "price": 85.0, "change": 1.2, "changePercent": 1.43, "sector": "semiconductor"},
    {"id": "2474", "name": "可成", "symbol": "2474", "price": 215.0, "change": 2.5, "changePercent": 1.18, "sector": "other-electronic"},
    {"id": "2480", "name": "敦陽科", "symbol": "2480", "price": 125.0, "change": 1.5, "changePercent": 1.21, "sector": "information-service"},
    {"id": "2492", "name": "華新科", "symbol": "2492", "price": 115.0, "change": 2.5, "changePercent": 2.22, "sector": "electronic-parts"},
    {"id": "2511", "name": "太子", "symbol": "2511", "price": 12.5, "change": 0.1, "changePercent": 0.81, "sector": "building-construction"},
    {"id": "2534", "name": "宏盛", "symbol": "2534", "price": 28.5, "change": 0.5, "changePercent": 1.79, "sector": "building-construction"},
    {"id": "2606", "name": "裕民", "symbol": "2606", "price": 58.0, "change": 1.5, "changePercent": 2.65, "sector": "shipping"},
    {"id": "2637", "name": "慧洋-KY", "symbol": "2637", "price": 72.0, "change": 2.0, "changePercent": 2.86, "sector": "shipping"},
    {"id": "2704", "name": "國賓", "symbol": "2704", "price": 52.0, "change": 0.5, "changePercent": 0.97, "sector": "tourism"},
    {"id": "2809", "name": "京城銀", "symbol": "2809", "price": 58.0, "change": 1.5, "changePercent": 2.65, "sector": "finance"},
    {"id": "2812", "name": "台中銀", "symbol": "2812", "price": 18.5, "change": 0.2, "changePercent": 1.09, "sector": "finance"},
    {"id": "2834", "name": "臺企銀", "symbol": "2834", "price": 16.5, "change": 0.3, "changePercent": 1.85, "sector": "finance"},
    {"id": "2838", "name": "聯邦銀", "symbol": "2838", "price": 15.2, "change": 0.1, "changePercent": 0.66, "sector": "finance"},
    {"id": "2855", "name": "統一證", "symbol": "2855", "price": 25.5, "change": 0.5, "changePercent": 2.00, "sector": "finance"},
    {"id": "2915", "name": "潤泰全", "symbol": "2915", "price": 65.0, "change": 1.0, "changePercent": 1.56, "sector": "retail"},
    {"id": "3003", "name": "健和興", "symbol": "3003", "price": 85.0, "change": 2.5, "changePercent": 3.03, "sector": "electronic-parts"},
    {"id": "3023", "name": "信邦", "symbol": "3023", "price": 285.0, "change": 5.0, "changePercent": 1.79, "sector": "electronic-parts"},
    {"id": "3048", "name": "益登", "symbol": "3048", "price": 42.0, "change": 1.5, "changePercent": 3.70, "sector": "electronic-commerce"},
    {"id": "3189", "name": "景碩", "symbol": "3189", "price": 115.0, "change": 4.5, "changePercent": 4.07, "sector": "semiconductor"},
    {"id": "3264", "name": "欣銓", "symbol": "3264", "price": 75.0, "change": 1.2, "changePercent": 1.63, "sector": "semiconductor"},
    {"id": "3596", "name": "智易", "symbol": "3596", "price": 165.0, "change": 3.5, "changePercent": 2.17, "sector": "communication-network"},
    {"id": "4938", "name": "和碩", "symbol": "4938", "price": 105.0, "change": 2.5, "changePercent": 2.44, "sector": "computer-peripheral"},
    {"id": "4958", "name": "臻鼎-KY", "symbol": "4958", "price": 125.0, "change": 4.5, "changePercent": 3.73, "sector": "electronic-parts"},
    {"id": "8358", "name": "金居", "symbol": "8358", "price": 65.0, "change": 2.5, "changePercent": 4.00, "sector": "electronic-parts"}
]

with open("/Users/alu/.gemini/antigravity/scratch/taiwan_stock_encyclopedia/src/data/categories.ts", "r") as f:
    content = f.read()

# For each sector, find the topStocks array and append
for stock in stocks_data:
    sector = stock['sector']
    stock_str = f'      {{ id: "{stock["id"]}", name: "{stock["name"]}", symbol: "{stock["symbol"]}", price: {stock["price"]}, change: {stock["change"]}, changePercent: {stock["changePercent"]} }}'
    
    # regex to find the sector object and its topStocks array
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

print("categories.ts updated with batch 9.")
