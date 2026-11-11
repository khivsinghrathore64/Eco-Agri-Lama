import React, { useState } from 'react';

export default function App() {
  const [currentView, setCurrentView] = useState('landing'); // 'landing' | 'login' | 'oracle' | 'crypt'
  const [phone, setPhone] = useState('+91 98765 43210');
  const [bedName, setBedName] = useState('');
  const [bedFamily, setBedFamily] = useState('Leafy');
  const [beds, setBeds] = useState([]);
  const [carbonType, setCarbonType] = useState('Compost buried');
  const [carbonAmount, setCarbonAmount] = useState(12);
  const [totalCarbon, setTotalCarbon] = useState(0);

  const handleAddBed = () => {
    if (!bedName) return;
    setBeds([...beds, { name: bedName, family: bedFamily }]);
    setBedName('');
  };

  const handleAddCarbon = () => {
    setTotalCarbon(prev => prev + Number(carbonAmount));
  };

  return (
    <div className="min-h-screen bg-[#080C09] text-[#E2E8F0] font-sans selection:bg-green-500 selection:text-black p-4 pb-12">
      {/* Top Header */}
      <header className="flex items-center justify-between py-3 px-2 border-b border-green-900/30 mb-6">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentView('landing')}>
          <span className="text-xl">🦙🎃</span>
          <span className="font-extrabold tracking-wider text-green-400 text-sm md:text-base">ECO AGRI LAMA</span>
        </div>
        <button 
          onClick={() => setCurrentView('login')}
          className="bg-transparent border border-green-500/50 hover:bg-green-500/10 text-green-400 text-xs font-bold px-4 py-1.5 rounded-full tracking-wider transition-all"
        >
          LOG IN
        </button>
      </header>

      {/* VIEW 1: LANDING PAGE */}
      {currentView === 'landing' && (
        <div className="max-w-md mx-auto space-y-6">
          {/* Hero Banner */}
          <div className="relative rounded-2xl overflow-hidden border border-green-900/40 bg-gradient-to-b from-green-950/20 to-black p-5 text-center shadow-2xl">
            <div className="inline-block bg-green-950/80 border border-green-500/40 text-green-400 text-[10px] font-semibold px-3 py-1 rounded-full mb-3 tracking-widest uppercase">
              🎃 Regenerative AI · Hackathon Build
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-green-400 tracking-tight leading-tight mb-4 drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]">
              THE CROP DOCTOR THAT RISES AFTER DARK
            </h1>
            <p className="text-xs text-gray-300 leading-relaxed mb-6 px-1">
              Eco Agri Lama turns a phone into a field companion for smallholder farmers: diagnose pests and blight, read live weather and soil, rotate beds so pests starve, and tally the carbon your soil swallows — dressed in a horror score.
            </p>
            <div className="flex gap-3 justify-center mb-6">
              <button 
                onClick={() => setCurrentView('oracle')}
                className="flex-1 bg-[#0f2615] hover:bg-[#163820] border border-green-500/60 text-green-400 text-xs font-bold py-3 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                ENTER THE CRYPT →
              </button>
              <button 
                onClick={() => setCurrentView('crypt')}
                className="flex-1 bg-transparent hover:bg-stone-900 border border-stone-700 text-orange-400 text-xs font-bold py-3 px-4 rounded-xl transition-all"
              >
                PLANT YOUR FARM
              </button>
            </div>
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-4 gap-2 pt-2 border-t border-green-900/30 text-center">
              <div className="bg-black/40 p-2 rounded-lg border border-green-900/20">
                <div className="text-green-400 font-bold text-sm">4</div>
                <div className="text-[9px] text-gray-400 uppercase tracking-wider">Crop Families</div>
              </div>
              <div className="bg-black/40 p-2 rounded-lg border border-green-900/20">
                <div className="text-green-400 font-bold text-sm">5</div>
                <div className="text-[9px] text-gray-400 uppercase tracking-wider">Carbon Rites</div>
              </div>
              <div className="bg-black/40 p-2 rounded-lg border border-green-900/20">
                <div className="text-green-400 font-bold text-sm">30m</div>
                <div className="text-[9px] text-gray-400 uppercase tracking-wider">Live Telemetry</div>
              </div>
              <div className="bg-black/40 p-2 rounded-lg border border-green-900/20">
                <div className="text-green-400 font-bold text-sm">SMS</div>
                <div className="text-[9px] text-gray-400 uppercase tracking-wider">Low-Signal Mode</div>
              </div>
            </div>
          </div>

          {/* Three Moves Section */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-green-400 tracking-widest uppercase px-1">THREE MOVES FROM BLIGHT TO HARVEST</h2>
            
            <div className="bg-[#121814] border border-green-900/40 p-4 rounded-xl space-y-1">
              <div className="flex items-center gap-2 text-green-400 font-bold text-sm">
                <span>📡</span> <span>01 Locate your plot</span>
              </div>
              <p className="text-xs text-gray-400">Type a village or farm name. Air, humidity, soil moisture and 7-day rain arrive from live data.</p>
            </div>

            <div className="bg-[#121814] border border-green-900/40 p-4 rounded-xl space-y-1">
              <div className="flex items-center gap-2 text-green-400 font-bold text-sm">
                <span>🦙</span> <span>02 Tell the oracle</span>
              </div>
              <p className="text-xs text-gray-400">Describe symptoms in plain words or tap a remedy tile. AgriLama reasons with your field readings attached.</p>
            </div>

            <div className="bg-[#121814] border border-green-900/40 p-4 rounded-xl space-y-1">
              <div className="flex items-center gap-2 text-green-400 font-bold text-sm">
                <span>🧟</span> <span>03 Keep the cycle</span>
              </div>
              <p className="text-xs text-gray-400">Rotate beds, bind carbon, erase the chat. Come back next season and the crypt remembers your land.</p>
            </div>
          </div>

          {/* What Lives Inside the Crypt */}
          <div className="space-y-3 pt-2">
            <h2 className="text-xs font-bold text-green-400 tracking-widest uppercase px-1">WHAT LIVES INSIDE THE CRYPT</h2>

            <div className="bg-[#121814] border border-green-900/40 p-4 rounded-xl">
              <div className="flex items-center gap-2 text-green-400 font-bold text-sm mb-1">
                <span>🦙</span> <span>AgriLama Oracle</span>
              </div>
              <p className="text-xs text-gray-400">Organic remedies for pests, soil, water and blight — reasoned by an LLM that sees your live field context.</p>
            </div>

            <div className="bg-[#121814] border border-green-900/40 p-4 rounded-xl">
              <div className="flex items-center gap-2 text-green-400 font-bold text-sm mb-1">
                <span>📡</span> <span>Field telemetry</span>
              </div>
              <p className="text-xs text-gray-400">Air, humidity, soil moisture and rainfall for your plot, cached for 30 minutes so weak networks survive.</p>
            </div>

            <div className="bg-[#121814] border border-green-900/40 p-4 rounded-xl">
              <div className="flex items-center gap-2 text-green-400 font-bold text-sm mb-1">
                <span>🧟</span> <span>Crop rotation crypt</span>
              </div>
              <p className="text-xs text-gray-400">Beds cycle leafy → fruiting → root → legume so a family never follows itself and pests starve.</p>
            </div>

            <div className="bg-[#121814] border border-green-900/40 p-4 rounded-xl">
              <div className="flex items-center gap-2 text-green-400 font-bold text-sm mb-1">
                <span>❄️</span> <span>Carbon ledger</span>
              </div>
              <p className="text-xs text-gray-400">Log compost, cover crops, no-till, biochar and agroforestry; the ledger charts kilograms of CO₂e bound.</p>
            </div>

            <div className="bg-[#121814] border border-green-900/40 p-4 rounded-xl">
              <div className="flex items-center gap-2 text-green-400 font-bold text-sm mb-1">
                <span>📱</span> <span>Low-signal SMS mode</span>
              </div>
              <p className="text-xs text-gray-400">One switch strips every remedy to plain text, sized for a countryside connection and a cracked screen.</p>
            </div>

            <div className="bg-[#121814] border border-green-900/40 p-4 rounded-xl">
              <div className="flex items-center gap-2 text-green-400 font-bold text-sm mb-1">
                <span>🎃</span> <span>Dark Harvest craft</span>
              </div>
              <p className="text-xs text-gray-400">Synthesised horror score, 3D depth on every tile, tilt-reactive login — atmosphere with zero downloads.</p>
            </div>
          </div>

          {/* Bottom Ghost Banner */}
          <div className="bg-gradient-to-b from-green-950/30 to-black border border-green-500/40 p-5 rounded-2xl text-center space-y-3 mt-6">
            <h3 className="text-green-400 font-black text-xl tracking-wide drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
              YOUR LAND HAS A GHOST. GIVE IT ORDERS.
            </h3>
            <p className="text-xs text-gray-300">Free to enter, built for one hand, and it keeps working when the signal dies.</p>
            <button 
              onClick={() => setCurrentView('oracle')}
              className="w-full bg-[#8b1e1e] hover:bg-[#a52525] text-white font-bold py-3 rounded-xl shadow-[0_0_15px_rgba(139,30,30,0.5)] transition-all uppercase text-xs tracking-wider border border-red-500/40"
            >
              BEGIN THE RITUAL →
            </button>
          </div>

          <div className="text-[10px] text-center text-gray-500 tracking-widest pt-4">
            BUILT ON BASE44 · REACT · LLM AGRONOMY · ZERO AUDIO FILES
          </div>
        </div>
      )}

      {/* VIEW 2: LOGIN SCREEN */}
      {currentView === 'login' && (
        <div className="max-w-md mx-auto space-y-6 pt-4">
          <div className="text-center space-y-1">
            <div className="text-2xl">🦙🎃</div>
            <h2 className="text-green-400 font-extrabold text-lg">ECO AGRI LAMA</h2>
            <p className="text-xs text-gray-400">Your Potion & Remedy Guide</p>
          </div>

          <div className="bg-[#181118] border border-purple-900/50 p-4 rounded-xl text-xs text-purple-200">
            Farmer, Your Harvest Awaits. Please Identify Yourself.
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-[10px] font-bold text-orange-500 tracking-widest uppercase block mb-1">PHONE NUMBER</label>
              <div className="flex items-center bg-[#121814] border border-green-900/60 rounded-xl px-3 py-3">
                <span className="mr-2">🔑</span>
                <input 
                  type="text" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                  className="bg-transparent w-full text-white text-sm focus:outline-none" 
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] font-bold text-orange-500 tracking-widest uppercase block mb-1">PASSCODE (optional)</label>
              <div className="flex items-center bg-[#121814] border border-green-900/60 rounded-xl px-3 py-3">
                <span className="mr-2">🔒</span>
                <input 
                  type="text" 
                  placeholder="Leave blank to enter without one" 
                  className="bg-transparent w-full text-xs text-gray-400 focus:outline-none" 
                />
              </div>
            </div>

            <button 
              onClick={() => setCurrentView('oracle')}
              className="w-full bg-[#8b1e1e] hover:bg-[#a52525] text-white font-bold py-3.5 rounded-xl shadow-lg transition-all uppercase text-xs tracking-wider border border-red-500/40"
            >
              LOG IN →
            </button>
          </div>

          <div className="text-center space-y-3 pt-4 text-xs">
            <a href="#" className="text-gray-400 underline block">Forgot Passcode?</a>
            <a href="#" className="text-green-400 font-bold block">What is Eco Agri Lama?</a>
            <a href="#" className="text-gray-300 block">New Farmer? <span className="text-green-400 font-bold underline">Register Here 🦙</span></a>
            <button onClick={() => setCurrentView('oracle')} className="w-full bg-black border border-gray-700 py-2.5 rounded-xl text-xs text-gray-300 font-semibold">
              🌐 or continue with Google
            </button>
          </div>
        </div>
      )}

      {/* VIEW 3: ORACLE & TELEMETRY */}
      {currentView === 'oracle' && (
        <div className="max-w-md mx-auto space-y-4">
          <div className="flex items-center justify-between bg-[#121814] border border-green-900/40 p-3 rounded-2xl">
            <div className="flex items-center gap-2">
              <span>🦙🎃</span>
              <div>
                <div className="text-green-400 font-bold text-xs">ECO AGRI ...</div>
                <div className="text-[10px] text-gray-400">Your Potion & Remedy Guide</div>
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setCurrentView('crypt')} className="p-2 bg-black border border-green-900 rounded-lg text-xs">🧟</button>
              <button onClick={() => setCurrentView('landing')} className="p-2 bg-black border border-green-900 rounded-lg text-xs">🔄</button>
              <button className="px-2.5 py-1 bg-black border border-green-900 rounded-lg text-[10px] text-green-400 font-bold">SMS</button>
              <button onClick={() => setCurrentView('login')} className="p-2 bg-black border border-green-900 rounded-lg text-xs">🚪</button>
            </div>
          </div>

          {/* Location & Live Stats Card */}
          <div className="bg-[#121814] border border-green-900/40 p-4 rounded-2xl space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="text-green-400 font-bold flex items-center gap-1">📍 India</span>
              <button onClick={() => alert('Location updated')} className="text-orange-400 font-semibold text-[10px]">✏️ CHANGE</button>
            </div>
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="bg-black/50 p-2 rounded-xl border border-green-900/30">
                <div className="text-[10px] text-gray-400 uppercase">Air</div>
                <div className="text-green-400 font-bold text-xs mt-0.5">22.2°C</div>
              </div>
              <div className="bg-black/50 p-2 rounded-xl border border-green-900/30">
                <div className="text-[10px] text-gray-400 uppercase">Humidity</div>
                <div className="text-green-400 font-bold text-xs mt-0.5">45%</div>
              </div>
              <div className="bg-black/50 p-2 rounded-xl border border-green-900/30">
                <div className="text-[10px] text-gray-400 uppercase">Soil</div>
                <div className="text-green-400 font-bold text-xs mt-0.5">35%</div>
              </div>
              <div className="bg-black/50 p-2 rounded-xl border border-green-900/30">
                <div className="text-[10px] text-gray-400 uppercase">Rain 7d</div>
                <div className="text-green-400 font-bold text-xs mt-0.5">0mm</div>
              </div>
            </div>
            <div className="text-[10px] text-gray-400 text-center">clear skies · soil probe estimated from live weather</div>
          </div>

          {/* AgriLama Bot message */}
          <div className="bg-[#121814] border border-green-900/40 p-4 rounded-2xl flex gap-3">
            <span className="text-xl">🦙</span>
            <div className="space-y-1">
              <div className="text-[10px] font-bold text-green-400 tracking-wider">AGRILAMA BOT</div>
              <p className="text-xs text-gray-300">Welcome Farmer! What ails your crops in this dark season? Describe symptoms or tap a button below.</p>
            </div>
          </div>

          {/* Spell / Remedy Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button className="bg-[#121814] hover:bg-[#1b271e] border border-green-900/50 p-3 rounded-xl text-left flex items-center gap-2.5 transition-all">
              <span>🐛</span>
              <div>
                <div className="text-orange-400 font-bold text-xs">PEST REMEDIES</div>
              </div>
            </button>
            <button className="bg-[#121814] hover:bg-[#1b271e] border border-green-900/50 p-3 rounded-xl text-left flex items-center gap-2.5 transition-all">
              <span>🌱</span>
              <div>
                <div className="text-orange-400 font-bold text-xs">SOIL POTIONS</div>
              </div>
            </button>
            <button className="bg-[#121814] hover:bg-[#1b271e] border border-green-900/50 p-3 rounded-xl text-left flex items-center gap-2.5 transition-all">
              <span>💧</span>
              <div>
                <div className="text-orange-400 font-bold text-xs">IRRIGATION SPELLS</div>
              </div>
            </button>
            <button className="bg-[#121814] hover:bg-[#1b271e] border border-green-900/50 p-3 rounded-xl text-left flex items-center gap-2.5 transition-all">
              <span>🍂</span>
              <div>
                <div className="text-orange-400 font-bold text-xs">DISEASE CURES</div>
              </div>
            </button>
          </div>

          {/* Input Box */}
          <div className="bg-[#121814] border border-green-900/60 rounded-xl p-3 flex items-center justify-between">
            <input 
              type="text" 
              placeholder="Describe what ails your crops..." 
              className="bg-transparent text-xs text-gray-300 w-full focus:outline-none" 
            />
            <div className="flex gap-2 text-green-400">
              <button>✨</button>
              <button>➔</button>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 4: CROP ROTATION & CARBON LEDGER */}
      {currentView === 'crypt' && (
        <div className="max-w-md mx-auto space-y-4">
          <div className="flex justify-between items-center bg-[#121814] border border-green-900/40 p-3 rounded-2xl">
            <button onClick={() => setCurrentView('oracle')} className="text-green-400 text-xs font-bold">← BACK TO THE ORACLE</button>
            <span className="text-xs text-gray-400">🔊 SOUND ON</span>
          </div>

          <div className="text-center space-y-1 py-1">
            <h2 className="text-green-400 font-black text-xl tracking-wide">THE HARVEST CRYPT</h2>
            <p className="text-xs text-gray-400">Rotate the beds · bind the carbon · keep the dead fed</p>
          </div>

          {/* Crop Rotation Crypt Card */}
          <div className="bg-[#121814] border border-green-900/40 p-4 rounded-2xl space-y-3">
            <div className="flex items-center gap-2">
              <span>🧟</span>
              <div>
                <h3 className="text-green-400 font-bold text-sm">CROP ROTATION CRYPT</h3>
                <p className="text-[10px] text-gray-400">Rotate the dead families so pests starve. Leafy → Fruiting → Root → Legume → Leafy.</p>
              </div>
            </div>

            <div className="flex gap-2 items-center pt-1">
              <input 
                type="text" 
                placeholder="Bed name" 
                value={bedName} 
                onChange={(e) => setBedName(e.target.value)} 
                className="bg-black border border-green-900/60 rounded-xl px-3 py-2 text-xs text-white flex-1 focus:outline-none" 
              />
              <select 
                value={bedFamily} 
                onChange={(e) => setBedFamily(e.target.value)} 
                className="bg-black border border-green-900/60 rounded-xl px-3 py-2 text-xs text-green-400 focus:outline-none"
              >
                <option value="Leafy">🥬 Leafy</option>
                <option value="Fruiting">🍅 Fruiting</option>
                <option value="Root">🥕 Root</option>
                <option value="Legume">🫘 Legume</option>
              </select>
              <button 
                onClick={handleAddBed}
                className="bg-green-950 hover:bg-green-900 border border-green-500/50 text-green-400 w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm"
              >
                +
              </button>
            </div>

            {beds.length === 0 ? (
              <p className="text-xs text-gray-500 py-2">No beds yet. Name one above to begin the rotation.</p>
            ) : (
              <div className="space-y-2 pt-2">
                {beds.map((b, idx) => (
                  <div key={idx} className="bg-black/40 border border-green-900/30 p-2.5 rounded-xl flex justify-between items-center text-xs">
                    <span className="font-bold text-white">{b.name}</span>
                    <span className="text-green-400 bg-green-950/60 px-2 py-0.5 rounded-full text-[10px]">{b.family}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Carbon Ledger Card */}
          <div className="bg-[#121814] border border-green-900/40 p-4 rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span>❄️</span>
                <div>
                  <h3 className="text-green-400 font-bold text-sm">CARBON LEDGER</h3>
                  <p className="text-[10px] text-gray-400">What your soil swallowed back from the sky.</p>
                </div>
              </div>
              <div className="bg-green-950 border border-green-500/50 px-3 py-1.5 rounded-xl text-center">
                <div className="text-green-400 font-bold text-sm">{totalCarbon}</div>
                <div className="text-[8px] text-gray-400 tracking-wider">KG CO₂E</div>
              </div>
            </div>

            <p className="text-xs text-gray-400">{totalCarbon === 0 ? 'An empty ledger. Log a practice below to bind some carbon.' : 'Carbon successfully bound into soil organic matter!'}</p>

            <div className="flex gap-2 items-center pt-1">
              <select 
                value={carbonType} 
                onChange={(e) => setCarbonType(e.target.value)}
                className="bg-black border border-green-900/60 rounded-xl px-3 py-2 text-xs text-green-400 flex-1 focus:outline-none"
              >
                <option value="Compost buried">🪱 Compost buried</option>
                <option value="Cover crops">🌾 Cover crops</option>
                <option value="No-till farming">🚜 No-till farming</option>
                <option value="Biochar applied">🔥 Biochar applied</option>
              </select>
              <input 
                type="number" 
                value={carbonAmount} 
                onChange={(e) => setCarbonAmount(e.target.value)} 
                className="bg-black border border-green-900/60 rounded-xl px-3 py-2 text-xs text-white w-16 text-center focus:outline-none" 
              />
              <button 
                onClick={handleAddCarbon}
                className="bg-green-950 hover:bg-green-900 border border-green-500/50 text-green-400 w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm"
              >
                +
              </button>
            </div>
          </div>

          <div className="text-[10px] text-gray-500 text-center pt-2">
            🧟 Beds remember their last family — never plant the same one twice in a row.
          </div>
        </div>
      )}
    </div>
  );
}
