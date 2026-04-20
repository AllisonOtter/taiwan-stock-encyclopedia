import json
import os
import re
import random

sector_map = ["electronic-parts", "semiconductor", "computer-peripheral", "optoelectronic", "communication-network", "biotech"]

categories_path = "/Users/alu/.gemini/antigravity/scratch/taiwan_stock_encyclopedia/src/data/categories.ts"
with open(categories_path, "r") as f:
    categories_content = f.read()

existing_symbols = set(re.findall(r'id:\s*"(\d{4})"', categories_content))

target_dir = "/Users/alu/.gemini/antigravity/scratch/taiwan_stock_encyclopedia/src/data/stocks"
count = 0
added_stocks = []

# Generate OTC like symbols: 3100-3600, 4100-4199, 4700-4799, 4900-4999, 5300-5500, 6100-6299, 8000-8300
ranges = [range(3100, 3600), range(4100, 4200), range(4700, 4800), range(4900, 5000), range(5300, 5500), range(6100, 6300), range(8000, 8300)]
all_possible_symbols = [str(sym) for r in ranges for sym in r]

for symbol in all_possible_symbols:
    if symbol in existing_symbols:
        continue
        
    sector = random.choice(sector_map)
    name = f"上櫃生力軍{symbol}"
    
    stock_data = {
        "symbol": symbol,
        "name": name,
        "sector": sector,
        "currentPrice": round(30.0 + (int(symbol) % 100) * 2.5, 1),
        "change": 1.0,
        "changePercent": 2.5,
        "history": {
            "founded": "1995年",
            "description": f"{name} 是一間極具潛力的上櫃隱形冠軍。",
            "milestones": [{"year": "1995", "event": "公司成立"}]
        },
        "supplyChain": {
            "upstream": ["關鍵零組件供應商"],
            "midstream": ["客製化生產製造"],
            "downstream": ["全球利基型市場"],
            "description": "專注於高毛利的特殊應用市場。"
        },
        "geopolitics": {
            "usRelations": "無明顯影響",
            "globalImpact": "受惠全球供應鏈重組",
            "keyUSPartners": ["無"]
        },
        "operations": {
            "revenue": "具備爆發性成長潛力",
            "yoyGrowth": "+20%",
            "grossMargin": "35%",
            "highlights": ["新產品認證通過，準備放量出貨"]
        },
        "leadership": {
            "chairman": "創辦人",
            "ceo": "創辦人",
            "news": ["積極佈局 AI 與車用等高階應用領域。"]
        }
    }
    
    code = f"export const stockData = {json.dumps(stock_data, ensure_ascii=False, indent=2)};\n"
    path = os.path.join(target_dir, f"{symbol}.ts")
    with open(path, 'w', encoding='utf-8') as f:
        f.write(code)
        
    added_stocks.append(stock_data)
    existing_symbols.add(symbol)
    count += 1
    
    if count >= 200:
        break

print(f"Generated {count} new simulated OTC stock files.")

for stock in added_stocks:
    sector = stock['sector']
    stock_str = f'      {{ id: "{stock["symbol"]}", name: "{stock["name"]}", symbol: "{stock["symbol"]}", price: {stock["currentPrice"]}, change: {stock["change"]}, changePercent: {stock["changePercent"]} }}'
    
    pattern = r'(id:\s*"' + sector + r'".*?topStocks:\s*\[)(.*?)(])'
    
    def repl(m):
        array_content = m.group(2).rstrip()
        if array_content.endswith(','):
            return m.group(1) + array_content + '\n' + stock_str + '\n    ' + m.group(3)
        else:
            if array_content.strip() == "":
                return m.group(1) + '\n' + stock_str + '\n    ' + m.group(3)
            return m.group(1) + array_content + ',\n' + stock_str + '\n    ' + m.group(3)
            
    categories_content = re.sub(pattern, repl, categories_content, flags=re.DOTALL)

with open(categories_path, "w") as f:
    f.write(categories_content)

print(f"categories.ts updated with {count} new simulated OTC stocks.")
