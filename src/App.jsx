import React, { useState } from 'react';
import { getOfflineRemedy } from './lib/aiRemedies';
import { CROP_ROTATION_CYCLES } from './lib/cropRotation';

export default function App() {
  const [activeTab, setActiveTab] = useState('telemetry');
  const [selectedTopic, setSelectedTopic] = useState('pests');
  const [remedyResult, setRemedyResult] = useState(null);

  const handleConsultOracle = () => {
    const result = getOfflineRemedy(selectedTopic);
    setRemedyResult(result);
  };

  return (
    <div className="min-h-screen bg-[#0a0512] text-slate-100 p-4 pb-20">
      {/* Header */}
      <header className="flex justify-between items-center mb-6 border-b border-purple-900/50 pb-4">
        <div>
          <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-orange-500 text-glow-green">
            Eco Agri Lama
          </h1>
          <p className="text-xs text-purple-300">🎃 Dark Harvest Agricultural Companion</p>
        </div>
        <div className="bg-purple-950/60 border border-green-500/30 px-3 py-1 rounded-full text-xs text-green-400 font-mono glow-orange">
          SYSTEM ONLINE
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="grid grid-cols-4 gap-2 mb-6">
        {['telemetry', 'chat', 'rotation', 'carbon'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 text-xs font-bold rounded-lg uppercase tracking-wider transition-all ${
              activeTab === tab
                ? 'bg-green-500 text-black shadow-lg shadow-green-500/20'
                : 'bg-purple-900/30 text-purple-300 border border-purple-800/40 hover:bg-purple-800/40'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Main Content Area */}
      <main className="bg-purple-950/20 border border-purple-900/40 rounded-xl p-4 shadow-xl">
        {activeTab === 'telemetry' && (
          <div>
            <h2 className="text-lg font-bold text-orange-400 mb-2">👻 Field Telemetry</h2>
            <p className="text-sm text-slate-300 mb-4">Live soil and weather metrics under the pale moon.</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-black/40 border border-green-500/20 p-3 rounded-lg">
                <span className="text-xs text-green-400">SOIL MOISTURE</span>
                <p className="text-xl font-mono font-bold">42% (Optimal)</p>
              </div>
              <div className="bg-black/40 border border-orange-500/20 p-3 rounded-lg">
                <span className="text-xs text-orange-400">AMBIENT TEMP</span>
                <p className="text-xl font-mono font-bold">18.4°C</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'chat' && (
          <div>
            <h2 className="text-lg font-bold text-green-400 mb-2">🔮 Oracle AI Remedy Chat</h2>
            <p className="text-sm text-slate-300 mb-4">Consult the agricultural spirit for organic pest & disease advice.</p>
            
            <div className="mb-4">
              <label className="block text-xs text-purple-300 mb-2">SELECT DISTRESS TOPIC:</label>
              <select 
                value={selectedTopic} 
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="w-full bg-black/60 border border-purple-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-green-400"
              >
                <option value="pests">Phantom Aphids / Pests</option>
                <option value="soil">Cursed Acidic Soil</option>
                <option value="irrigation">Blood Moon Irrigation</option>
                <option value="disease">Cryptic Blight Disease</option>
              </select>
            </div>

            <button 
              onClick={handleConsultOracle}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-black font-bold py-2 rounded-lg text-sm mb-4 shadow-lg shadow-green-500/20"
            >
              Consult the Oracle 🎃
            </button>

            {remedyResult && (
              <div className="bg-black/60 border border-green-500/40 p-4 rounded-lg">
                <h3 className="text-sm font-bold text-orange-400 mb-1">{remedyResult.title}</h3>
                <p className="text-xs text-slate-300 mb-2"><strong>Symptom:</strong> {remedyResult.symptom}</p>
                <p className="text-xs text-green-300"><strong>Spooky Remedy:</strong> {remedyResult.remedy}</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'rotation' && (
          <div>
            <h2 className="text-lg font-bold text-orange-400 mb-2">🔄 Crop Rotation Board</h2>
            <p className="text-sm text-slate-300 mb-4">Manage cyclic bed patterns across the seasons.</p>
            <div className="space-y-3">
              {CROP_ROTATION_CYCLES.map((cycle) => (
                <div key={cycle.stage} className="bg-black/50 border border-purple-900/60 p-3 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-mono text-green-400 font-bold">STAGE {cycle.stage}: {cycle.family}</span>
                    <span className="text-[10px] bg-orange-500/20 text-orange-300 px-2 py-0.5 rounded">Cycle Active</span>
                  </div>
                  <p className="text-xs text-slate-200 mb-1"><strong>Examples:</strong> {cycle.examples}</p>
                  <p className="text-xs text-purple-300 mb-1"><strong>Nutrients:</strong> {cycle.nutrients}</p>
                  <p className="text-xs text-emerald-400/80 italic">🦇 {cycle.spookyNote}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'carbon' && (
          <div>
            <h2 className="text-lg font-bold text-green-400 mb-2">🌱 Soil Carbon Ledger</h2>
            <p className="text-sm text-slate-300">Track regenerative practices and aggregated $kg\ CO_2e$ offset.</p>
          </div>
        )}
      </main>
    </div>
  );
}
