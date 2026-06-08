import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-8 text-[#00ff66] font-mono selection:bg-[#00ff66] selection:text-black">
      
      {/* Background matrix effects */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#00ff66 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-3xl w-full text-center relative z-10">
        
        <div className="inline-block mb-6 px-3 py-1 border border-[#00ff66]/30 bg-[#00ff66]/5 text-xs font-bold tracking-[0.3em] uppercase">
          SYSTEM.STATUS // ONLINE
        </div>

        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight uppercase">
          Security Clearance <br />
          <span className="text-white">Protocol v2.0</span>
        </h1>
        
        <p className="text-sm md:text-base text-[#00ff66]/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          WARNING: This is a restricted environment. You are about to initiate the cognitive security verification. Environmental sensors are active. Any attempt to leave the active window will trigger an immediate <span className="text-red-500 font-bold uppercase">Breach Alert</span>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          
          <Link href="/test?token=auth-key-valid" className="block group">
            <div className="relative bg-black border border-gray-800 p-8 hover:border-[#00ff66] transition-all duration-300 text-left h-full">
              
              <div className="text-[#00ff66] text-3xl mb-6">
                [ _ ]
              </div>
              <h2 className="text-xl font-bold text-white mb-3 uppercase tracking-widest group-hover:text-[#00ff66] transition-colors">Candidate Interface</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Execute the 12-minute locked evaluation. Features sequential logic, token validation, and the window blur intrusion listener.
              </p>
            </div>
          </Link>

          <Link href="/admin" className="block group">
            <div className="relative bg-black border border-gray-800 p-8 hover:border-white transition-all duration-300 text-left h-full">
              
              <div className="text-white text-3xl mb-6">
                {'{ / }'}
              </div>
              <h2 className="text-xl font-bold text-white mb-3 uppercase tracking-widest">Threat Logs (Admin)</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Access the mocked GCP Cloud SQL analytics table showing clearance scores, timestamps, and active intrusion flags.
              </p>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}
