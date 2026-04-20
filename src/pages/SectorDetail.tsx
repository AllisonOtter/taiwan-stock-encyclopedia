import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { sectors } from '../data/categories';
import { ArrowLeft, TrendingUp, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';

const SectorDetail: React.FC = () => {
  const { sectorId } = useParams<{ sectorId: string }>();
  const sector = sectors.find(s => s.id === sectorId);
  const [livePrices, setLivePrices] = useState<Record<string, { price: number, change: number, changePercent: number }>>({});

  React.useEffect(() => {
    let intervalId: any;
    if (!sector) return;
    
    const fetchLiveData = async () => {
      const allSymbols = sector.topStocks.map(st => st.symbol).join(',');
      if (!allSymbols) return;
      try {
        const res = await fetch(`http://localhost:8000/api/quotes?symbols=${allSymbols}`);
        const data = await res.json();
        const newPrices: Record<string, any> = {};
        for (const sym in data) {
          newPrices[sym] = {
            price: data[sym].currentPrice,
            change: data[sym].change,
            changePercent: data[sym].changePercent
          };
        }
        setLivePrices(prev => ({ ...prev, ...newPrices }));
      } catch (e) {
        // Silent catch
      }
    };

    fetchLiveData();
    intervalId = setInterval(fetchLiveData, 5000);

    return () => clearInterval(intervalId);
  }, [sector]);

  if (!sector) {
    return (
      <div className="container" style={{ paddingTop: '5rem', textAlign: 'center' }}>
        <h2>找不到該產業資料</h2>
        <Link to="/" style={{ color: 'var(--accent-color)', textDecoration: 'none' }}>返回首頁</Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', marginBottom: '2rem' }}>
        <ArrowLeft size={20} />
        返回首頁
      </Link>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-panel" style={{ padding: '3rem', marginBottom: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <span style={{ fontSize: '1rem', color: '#60a5fa', background: 'rgba(59, 130, 246, 0.1)', padding: '4px 12px', borderRadius: '4px' }}>{sector.macroCategory}</span>
        </div>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem' }}>{sector.name}</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
          {sector.description}
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '2rem' }}>
        {sector.topStocks.map((stock, idx) => {
          const live = livePrices[stock.symbol];
          const displayPrice = live ? live.price : stock.price;
          const displayChange = live ? live.change : stock.change;
          const displayChangePercent = live ? live.changePercent : stock.changePercent;
          
          return (
            <motion.div key={stock.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.1 }} className="glass-panel" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>{stock.name}</h3>
                  <span style={{ color: 'var(--text-secondary)' }}>{stock.symbol}</span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 700 }}>{displayPrice.toFixed(1)}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'flex-end', color: displayChange >= 0 ? 'var(--danger-color)' : 'var(--success-color)' }}>
                    {displayChange >= 0 ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
                    <span style={{ fontWeight: 600 }}>{displayChange > 0 ? '+' : ''}{displayChange.toFixed(1)} ({displayChangePercent.toFixed(2)}%)</span>
                  </div>
                </div>
              </div>
              
              <Link to={`/stock/${stock.symbol}`} style={{ width: '100%', padding: '1rem', display: 'block', textAlign: 'center', background: 'var(--accent-color)', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: 600, transition: 'opacity 0.2s' }} onMouseOver={e => e.currentTarget.style.opacity = '0.9'} onMouseOut={e => e.currentTarget.style.opacity = '1'}>
                查看個股深度解析
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SectorDetail;
