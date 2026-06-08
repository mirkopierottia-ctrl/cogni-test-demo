import React from 'react';

// Mocked Security Logs
const candidates = [
  { id: 1, name: "Alexander Pierce", idHash: "0x8F92", date: "10 mins ago", score: "3/3", time: "01:12", breachViolation: false },
  { id: 2, name: "Sophia Chen", idHash: "0x1A4B", date: "1 hour ago", score: "2/3", time: "11:05", breachViolation: false },
  { id: 3, name: "UNKNOWN_GUEST", idHash: "0xDEAD", date: "2 hours ago", score: "0/3", time: "00:45", breachViolation: true },
  { id: 4, name: "James Holden", idHash: "0x99CF", date: "Yesterday", score: "3/3", time: "05:10", breachViolation: false },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#050505] p-8 font-mono text-[#00ff66]">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-10 border-b border-[#00ff66]/30 pb-6">
          <div>
            <h1 className="text-3xl font-bold uppercase tracking-widest text-white">Security Threat Logs</h1>
            <p className="text-sm text-[#00ff66]/50 mt-2">GCP Cloud SQL &gt; Evaluation Metrics Dashboard</p>
          </div>
          <button className="bg-transparent hover:bg-[#00ff66] text-[#00ff66] hover:text-black border border-[#00ff66] px-4 py-2 text-sm font-bold transition-colors uppercase tracking-widest">
            [ Generate Auth Token ]
          </button>
        </div>

        <div className="bg-black border border-gray-800">
          <table className="min-w-full divide-y divide-gray-800">
            <thead className="bg-[#0a0a0a]">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-widest">Subject ID</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-widest">Timestamp</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-widest">Clearance Level</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-widest">Duration</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-widest">Integrity Status</th>
                <th scope="col" className="relative px-6 py-4"><span className="sr-only">Actions</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {candidates.map((candidate) => (
                <tr key={candidate.id} className="hover:bg-[#111] transition-colors group">
                  <td className="px-6 py-5 whitespace-nowrap">
                    <div className="flex items-center">
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-[#00ff66] transition-colors uppercase">{candidate.name}</div>
                        <div className="text-xs text-gray-600 mt-1">ID: {candidate.idHash}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-500">
                    {candidate.date}
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap">
                    <div className="text-lg font-bold text-white">{candidate.score}</div>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-500">
                    T-{candidate.time}
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap">
                    {candidate.breachViolation ? (
                      <span className="px-2 py-1 inline-flex text-xs font-bold bg-red-950/50 text-red-500 border border-red-900/50 uppercase tracking-widest">
                        [!] BREACH DETECTED
                      </span>
                    ) : (
                      <span className="px-2 py-1 inline-flex text-xs font-bold bg-[#00ff66]/10 text-[#00ff66] border border-[#00ff66]/20 uppercase tracking-widest">
                        SECURE
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap text-right text-xs font-bold">
                    <a href="#" className="text-gray-600 hover:text-[#00ff66] uppercase tracking-widest transition-colors">Inspect Log</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
