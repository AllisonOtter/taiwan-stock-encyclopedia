import sys
import os
import time
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import shioaji as sj
from dotenv import load_dotenv

# Load credentials from ai_stock_analyst
load_dotenv('/Users/alu/.gemini/antigravity/scratch/ai_stock_analyst/.env')

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

print("Initializing Shioaji...")
api = sj.Shioaji(simulation=True)
try:
    api.login(
        api_key=os.getenv('SHIOAJI_API_KEY'), 
        secret_key=os.getenv('SHIOAJI_SECRET_KEY')
    )
    time.sleep(3) # Wait for contracts to download
    print("Shioaji login successful.")
except Exception as e:
    print(f"Login failed: {e}")

@app.get("/api/quotes")
def get_quotes(symbols: str):
    sym_list = symbols.split(',')
    contracts = [api.Contracts.Stocks.get(s) for s in sym_list if api.Contracts.Stocks.get(s)]
    
    if not contracts:
        return {}

    try:
        snaps = api.snapshots(contracts)
        result = {}
        for snap in snaps:
            result[snap.code] = {
                "currentPrice": snap.close,
                "change": snap.change_price,
                "changePercent": snap.change_rate
            }
        return result
    except Exception as e:
        print(f"Error fetching snapshots: {e}")
        return {}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
