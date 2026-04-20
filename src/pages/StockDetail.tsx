import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Clock, Network, Globe, TrendingUp, TrendingDown, Users, Activity } from 'lucide-react';
import { tsmcData } from '../data/stocks/2330';

// In a real app, this would fetch from an API based on the symbol.
// We are using hardcoded data to ensure NO API keys or endpoints are exposed.
const getStockData = (symbol: string) => {
  if (symbol === '2330') return tsmcData;
  return null;
};

const tabs = [
  { id: 'history', label: '歷史沿革', icon: Clock },
  { id: 'supplyChain', label: '相關產業鏈', icon: Network },
  { id: 'geopolitics', label: '國際政經局勢', icon: Globe },
  { id: 'operations', label: '營運狀況', icon: TrendingUp },
  { id: 'leadership', label: '高層與董事會', icon: Users },
];

const StockDetail: React.FC = () => {
  const { symbol } = useParams<{ symbol: string }>();
  const data = getStockData(symbol || '2330');
  const [activeTab, setActiveTab] = useState('history');

  if (!data) {
    return (
      <div className="container" style={{ paddingTop: '5rem', textAlign: 'center' }}>
        <h2>找不到該股票資料</h2>
        <Link to="/" style={{ color: 'var(--accent-color)', textDecoration: 'none' }}>返回首頁</Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
      
      {/* Header */}
      <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', marginBottom: '2rem', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
        <ArrowLeft size={18} />
        返回總覽
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel" 
        style={{ padding: '2.5rem', marginBottom: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>{data.name}</span>
            <span style={{ background: 'rgba(255,255,255,0.1)', padding: '0.25rem 0.75rem', borderRadius: '8px', fontSize: '1.25rem', fontWeight: 600 }}>{data.symbol}</span>
          </div>
          <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', display: 'flex', gap: '1.5rem' }}>
            <span>{data.sector}</span>
            <span>市值: {data.marketCap}</span>
          </div>
        </div>

        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1 }}>{data.currentPrice.toFixed(1)}</div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.5rem', color: data.change >= 0 ? 'var(--danger-color)' : 'var(--success-color)', fontSize: '1.25rem', marginTop: '0.5rem', fontWeight: 500 }}>
            {data.change >= 0 ? <TrendingUp size={24} /> : <TrendingDown size={24} />}
            <span>{data.change > 0 ? '+' : ''}{data.change} ({data.changePercent}%)</span>
          </div>
        </div>
      </motion.div>

      {/* Main Content Area */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', minHeight: '60vh' }}>
        
        {/* Mobile/Desktop Tabs Navigation (simplified as horizontal for now) */}
        <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '1rem', borderBottom: '1px solid var(--glass-border)', marginBottom: '1rem' }}>
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.25rem',
                  background: isActive ? 'var(--accent-glow)' : 'transparent',
                  border: 'none', borderRadius: '8px', color: isActive ? '#fff' : 'var(--text-secondary)',
                  fontWeight: isActive ? 600 : 500, cursor: 'pointer', transition: 'all 0.2s',
                  whiteSpace: 'nowrap'
                }}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div style={{ minHeight: '400px' }}>
          <AnimatePresence mode="wait">
            
            {activeTab === 'history' && (
              <motion.div key="history" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="glass-panel" style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#60a5fa', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Clock size={24} /> 歷史沿革 ({data.history.founded})
                </h3>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2.5rem', color: 'var(--text-primary)' }}>
                  {data.history.description}
                </p>
                
                <h4 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>重要里程碑</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {data.history.milestones.map((m, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '1.5rem' }}>
                      <div style={{ fontWeight: 700, color: '#60a5fa', fontSize: '1.1rem', minWidth: '80px' }}>{m.year}</div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>{m.event}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'supplyChain' && (
              <motion.div key="supplyChain" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="glass-panel" style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#34d399', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Network size={24} /> 產業鏈定位
                </h3>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                  {data.supplyChain.description}
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                  <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h4 style={{ color: '#9ca3af', marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px' }}>上游 (Upstream)</h4>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {data.supplyChain.upstream.map((item, i) => (
                        <li key={i} style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '6px' }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(59,130,246,0.1)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(59,130,246,0.2)' }}>
                    <h4 style={{ color: '#60a5fa', marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px' }}>中游 (Midstream)</h4>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {data.supplyChain.midstream.map((item, i) => (
                        <li key={i} style={{ padding: '0.75rem', background: 'rgba(59,130,246,0.2)', borderRadius: '6px', fontWeight: 600 }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h4 style={{ color: '#9ca3af', marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px' }}>下游 (Downstream)</h4>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {data.supplyChain.downstream.map((item, i) => (
                        <li key={i} style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '6px' }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'geopolitics' && (
              <motion.div key="geopolitics" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="glass-panel" style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#a78bfa', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Globe size={24} /> 國際政經局勢與美股連動
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: '#c4b5fd', marginBottom: '0.75rem' }}>台美雙邊關係與政策影響</h4>
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>{data.geopolitics.usRelations}</p>
                  </div>
                  
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: '#c4b5fd', marginBottom: '0.75rem' }}>全球影響力 (Silicon Shield)</h4>
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>{data.geopolitics.globalImpact}</p>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: '#c4b5fd', marginBottom: '1rem' }}>美股主要合作夥伴與客戶</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                      {data.geopolitics.keyUSPartners.map((partner, i) => (
                        <span key={i} style={{ padding: '0.5rem 1.25rem', background: 'rgba(167, 139, 250, 0.1)', border: '1px solid rgba(167, 139, 250, 0.3)', borderRadius: '99px', fontWeight: 500, color: '#e2e8f0' }}>
                          {partner}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'operations' && (
              <motion.div key="operations" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="glass-panel" style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#fbbf24', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <TrendingUp size={24} /> 自身營運狀況
                </h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
                  <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
                    <div style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>年度總營收</div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#fcd34d' }}>{data.operations.revenue}</div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
                    <div style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>營收年增率 (YoY)</div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 700, color: data.operations.yoyGrowth.startsWith('-') ? 'var(--success-color)' : 'var(--danger-color)' }}>{data.operations.yoyGrowth}</div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
                    <div style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>毛利率</div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#fcd34d' }}>{data.operations.grossMargin}</div>
                  </div>
                </div>

                <h4 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>近期營運亮點</h4>
                <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {data.operations.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </motion.div>
            )}

            {activeTab === 'leadership' && (
              <motion.div key="leadership" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="glass-panel" style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#f472b6', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Users size={24} /> 董事長與管理層消息
                </h3>
                
                <div style={{ display: 'flex', gap: '2rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
                  <div style={{ flex: 1, minWidth: '250px', background: 'rgba(244, 114, 182, 0.05)', border: '1px solid rgba(244, 114, 182, 0.2)', padding: '1.5rem', borderRadius: '12px' }}>
                    <div style={{ fontSize: '0.9rem', color: '#f9a8d4', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>現任/候任 董事長</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 600 }}>{data.leadership.chairman}</div>
                  </div>
                  <div style={{ flex: 1, minWidth: '250px', background: 'rgba(244, 114, 182, 0.05)', border: '1px solid rgba(244, 114, 182, 0.2)', padding: '1.5rem', borderRadius: '12px' }}>
                    <div style={{ fontSize: '0.9rem', color: '#f9a8d4', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>總裁 (CEO)</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 600 }}>{data.leadership.ceo}</div>
                  </div>
                </div>

                <h4 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>最新動態與戰略方向</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {data.leadership.news.map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: 'rgba(0,0,0,0.2)', padding: '1.25rem', borderRadius: '8px' }}>
                      <Activity size={20} color="#f472b6" style={{ marginTop: '0.25rem', flexShrink: 0 }} />
                      <div style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>{item}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default StockDetail;
