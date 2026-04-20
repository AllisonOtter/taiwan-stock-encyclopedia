import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Server, Leaf, Landmark, Ship, TrendingUp, TrendingDown, ArrowRight, Search, Activity } from 'lucide-react';
import { sectors, type Sector } from '../data/categories';
import '../index.css'; // Make sure styles are imported

const IconMap: Record<string, React.ElementType> = {
  Cpu,
  Server,
  Leaf,
  Landmark,
  Ship
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: 'spring' as const, stiffness: 100 }
  }
};

const Home: React.FC = () => {
  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ textAlign: 'center', marginBottom: '5rem' }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(59, 130, 246, 0.1)', padding: '0.5rem 1rem', borderRadius: '99px', border: '1px solid rgba(59, 130, 246, 0.2)', marginBottom: '1.5rem', color: '#60a5fa', fontSize: '0.875rem', fontWeight: 500 }}>
          <Activity size={16} />
          <span>Real-time Market Data Integration</span>
        </div>
        <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          台灣股市<span className="text-gradient-accent">全景百科</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}>
          探索上市上櫃公司的深度解析，涵蓋企業歷史、國際供應鏈地位、地緣政治影響及即時營運狀況。為專業投資者打造的數據驅動決策平台。
        </p>
        
        <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <div className="glass-panel" style={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: '500px', padding: '0.5rem 1rem', borderRadius: '99px' }}>
            <Search size={20} color="var(--text-secondary)" style={{ marginRight: '0.75rem' }} />
            <input 
              type="text" 
              placeholder="搜尋股票代號或公司名稱 (例如: 2330, 台積電)..." 
              style={{ background: 'transparent', border: 'none', color: 'white', width: '100%', outline: 'none', fontSize: '1rem', padding: '0.5rem 0' }}
            />
          </div>
        </div>
      </motion.div>

      {/* Sectors Grid */}
      <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: '6px', height: '32px', background: 'var(--accent-color)', borderRadius: '4px' }}></div>
          產業分類總覽
        </h2>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '1.5rem' }}
      >
        {sectors.map((sector: Sector) => {
          const IconComponent = IconMap[sector.icon] || TrendingUp;
          return (
            <motion.div key={sector.id} variants={itemVariants} className="glass-panel" style={{ padding: '2rem', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
              
              {/* Background gradient hint */}
              <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: 'var(--accent-glow)', filter: 'blur(80px)', opacity: 0.3, zIndex: 0 }}></div>
              
              <div style={{ position: 'relative', zIndex: 1, flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60a5fa' }}>
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: 0 }}>{sector.name}</h3>
                      <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>總市值: {sector.marketCap}</span>
                    </div>
                  </div>
                </div>
                
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: 1.6 }}>
                  {sector.description}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666', fontWeight: 600 }}>代表性指標股</div>
                  {sector.topStocks.map(stock => (
                    <div key={stock.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem', background: 'rgba(0,0,0,0.2)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.03)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ fontWeight: 600, width: '48px' }}>{stock.symbol}</span>
                        <span style={{ color: '#ccc' }}>{stock.name}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span style={{ fontWeight: 500 }}>{stock.price.toFixed(1)}</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: stock.change >= 0 ? 'var(--danger-color)' : 'var(--success-color)', fontSize: '0.9rem', width: '60px', justifyContent: 'flex-end' }}>
                          {stock.change >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                          <span>{Math.abs(stock.changePercent)}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '2rem', position: 'relative', zIndex: 1 }}>
                <button style={{ width: '100%', padding: '0.875rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', cursor: 'pointer', transition: 'all 0.2s ease' }} 
                  onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)' }}
                  onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
                >
                  探索產業深度解析
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Home;
