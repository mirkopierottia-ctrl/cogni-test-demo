"use client";

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

// Security Questions
const questions = [
  {
    id: 1,
    prompt: "Which attack involves injecting malicious client-side scripts into web pages viewed by other users?",
    options: ["Cross-Site Scripting (XSS)", "SQL Injection", "Cross-Site Request Forgery (CSRF)", "Man-in-the-Middle (MitM)"],
    correct: "Cross-Site Scripting (XSS)"
  },
  {
    id: 2,
    prompt: "In Next.js App Router, what is the most secure way to handle sensitive database mutations?",
    options: ["Client-side API Fetch", "React Server Components", "Server Actions", "Local Storage Encryption"],
    correct: "Server Actions"
  },
  {
    id: 3,
    prompt: "What is the primary security benefit of setting a cookie as 'HttpOnly'?",
    options: ["It encrypts the cookie data automatically", "It prevents client-side JavaScript from accessing the cookie", "It forces the cookie to only be sent over HTTPS", "It prevents Cross-Site Request Forgery (CSRF)"],
    correct: "It prevents client-side JavaScript from accessing the cookie"
  }
];

function SecurityTestContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [hasStarted, setHasStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(12 * 60); // 12 minutes
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [intrusionDetected, setIntrusionDetected] = useState(false);

  // Token Validation
  useEffect(() => {
    if (!token) {
      alert("UNAUTHORIZED: Invalid access token.");
      router.push('/');
    }
  }, [token, router]);

  // Timer & Auto-Submit
  useEffect(() => {
    if (!hasStarted || isSubmitted) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          submitTest("SYSTEM HALTED: Time Expired");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [hasStarted, isSubmitted]);

  // Anti-Cheat: Intrusion Detected (Window Blur)
  useEffect(() => {
    if (!hasStarted || isSubmitted) return;

    const handleBlur = () => {
      setIntrusionDetected(true);
      submitTest("SECURITY BREACH: Focus Lost (Suspected external lookup)");
    };

    window.addEventListener('blur', handleBlur);
    return () => window.removeEventListener('blur', handleBlur);
  }, [hasStarted, isSubmitted]);

  const submitTest = (reason: string = "Completed Normal Protocol") => {
    setIsSubmitted(true);
    console.log("Protocol Logged:", { answers, reason, timeRemaining: timeLeft });
  };

  const calculateScore = () => {
    let correctCount = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correct) correctCount++;
    });
    return correctCount;
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      submitTest("Evaluation Completed");
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (!token) return null;

  if (isSubmitted) {
    const score = calculateScore();
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 font-mono text-[#00ff66]">
        <div className="bg-black p-10 rounded border border-[#00ff66]/30 shadow-[0_0_40px_rgba(0,255,102,0.1)] max-w-2xl w-full text-center relative overflow-hidden">
          
          {intrusionDetected ? (
            <div className="bg-red-950/40 border border-red-500 p-8 rounded mb-6">
              <div className="text-red-500 text-6xl mb-4 animate-bounce">⚠️</div>
              <h2 className="text-red-500 text-2xl font-bold uppercase tracking-widest mb-2">INTRUSION DETECTED</h2>
              <p className="text-red-400/80 text-sm">System compromised. Focus lost during active evaluation phase. Session immediately terminated and logged.</p>
            </div>
          ) : (
            <div className="bg-[#00ff66]/10 border border-[#00ff66]/30 p-8 rounded mb-6">
              <div className="text-[#00ff66] text-6xl mb-4">✓</div>
              <h2 className="text-[#00ff66] text-2xl font-bold uppercase tracking-widest mb-2">PROTOCOL SECURED</h2>
              <p className="text-[#00ff66]/70 text-sm mb-6">Evaluation completed successfully. Local decryption key generated.</p>
              
              <div className="border-t border-[#00ff66]/30 pt-6 mt-2">
                <h3 className="text-white text-xl mb-4 uppercase tracking-widest">Clearance Score: <span className="text-[#00ff66] font-bold">{score} / {questions.length}</span></h3>
                
                <div className="text-left text-xs text-gray-400 space-y-4 bg-black/50 p-4 rounded border border-gray-800 h-64 overflow-y-auto">
                  {questions.map((q, idx) => {
                    const isCorrect = answers[q.id] === q.correct;
                    return (
                      <div key={q.id} className={`border-l-2 pl-3 py-1 ${isCorrect ? 'border-[#00ff66]' : 'border-red-500'}`}>
                        <p className="text-white mb-1 font-sans">{idx + 1}. {q.prompt}</p>
                        <p>{'>'} Input: <span className={isCorrect ? "text-[#00ff66]" : "text-red-500"}>{answers[q.id] || "NULL"}</span></p>
                        {!isCorrect && <p>{'>'} Expected: <span className="text-[#00ff66]">{q.correct}</span></p>}
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          )}
          
          <button onClick={() => router.push('/')} className="w-full bg-transparent border border-[#00ff66] text-[#00ff66] font-bold py-3 hover:bg-[#00ff66] hover:text-black transition-colors uppercase tracking-widest text-sm">
            Return to Terminal
          </button>
        </div>
      </div>
    );
  }

  if (!hasStarted) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 text-[#00ff66] font-mono">
        <div className="bg-black p-10 rounded border border-[#00ff66]/30 shadow-[0_0_40px_rgba(0,255,102,0.1)] max-w-lg w-full">
          <div className="text-sm text-[#00ff66]/50 mb-2">{'>'} initializing.protocol...</div>
          <h1 className="text-2xl font-bold mb-6 tracking-tight uppercase">Security Clearance Verification</h1>
          <div className="space-y-4 text-[#00ff66]/80 text-sm leading-relaxed mb-8">
            <p>{'>'} TIME LIMIT: <span className="font-bold text-white">12:00</span> minutes.</p>
            <p>{'>'} NAVIGATION: Strictly sequential. No backtracing allowed.</p>
            <p className="text-red-400 font-semibold">{'>'} WARNING: Environmental sensors active. Leaving this window or tab will trigger immediate protocol termination (Breach Detected).</p>
          </div>
          <button 
            onClick={() => setHasStarted(true)}
            className="w-full bg-[#00ff66] text-black font-bold py-4 px-4 hover:bg-[#00cc52] transition-colors uppercase tracking-widest shadow-[0_0_15px_rgba(0,255,102,0.4)]"
          >
            [ Initiate Sequence ]
          </button>
        </div>
      </div>
    );
  }

  const q = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center pt-8 px-4 font-mono">
      
      {/* Header Cronómetro */}
      <div className="w-full max-w-3xl flex justify-between items-center bg-black p-4 border-b border-[#00ff66]/30 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-[#00ff66] rounded-full animate-ping"></div>
          <span className="font-bold text-[#00ff66] tracking-widest text-xs uppercase">Live Connection</span>
        </div>
        <div className={`text-2xl font-bold tracking-tight ${timeLeft < 60 ? 'text-red-500 animate-pulse' : 'text-[#00ff66]'}`}>
          T-{formatTime(timeLeft)}
        </div>
      </div>

      {/* Tarjeta de Pregunta */}
      <div className="w-full max-w-3xl bg-black p-8 md:p-10 border border-[#00ff66]/20 relative">
        <div className="text-xs font-bold text-[#00ff66]/50 mb-6 uppercase tracking-widest">
          {'>'} Query_0{currentQuestion + 1} // Total_0{questions.length}
        </div>
        <h2 className="text-xl md:text-2xl font-medium text-white mb-10 leading-relaxed font-sans">{q.prompt}</h2>

        {/* 
          BUG FIX: Removed inputs/labels to prevent clicking issues. 
          Now using a simple DIV with an onClick handler. 
        */}
        <div className="space-y-4">
          {q.options.map((opt, i) => {
            const isSelected = answers[q.id] === opt;
            return (
              <div 
                key={i} 
                onClick={() => setAnswers(prev => ({...prev, [q.id]: opt}))}
                className={`w-full text-left p-5 border cursor-pointer transition-all duration-150 ${
                  isSelected 
                    ? 'border-[#00ff66] bg-[#00ff66]/10 text-[#00ff66]' 
                    : 'border-gray-800 hover:border-gray-600 bg-[#0a0a0a] text-gray-400'
                }`}
              >
                <div className="flex items-center font-sans">
                  <div className={`w-5 h-5 border flex items-center justify-center mr-4 ${isSelected ? 'border-[#00ff66]' : 'border-gray-600'}`}>
                    {isSelected && <div className="w-3 h-3 bg-[#00ff66]"></div>}
                  </div>
                  <span className="text-lg">{opt}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-between items-center">
          <div className="text-xs text-[#00ff66]/30 uppercase tracking-widest">Awaiting Input...</div>
          <button 
            onClick={handleNext}
            disabled={!answers[q.id]}
            className="bg-transparent border border-[#00ff66] text-[#00ff66] hover:bg-[#00ff66] hover:text-black font-bold py-3 px-10 disabled:opacity-20 disabled:cursor-not-allowed transition-colors uppercase tracking-widest text-sm"
          >
            {currentQuestion === questions.length - 1 ? 'Execute Submit' : 'Next Node ->'}
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default function TestPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#050505] flex items-center justify-center text-[#00ff66] font-mono">{'>'} establishing connection...</div>}>
      <SecurityTestContent />
    </Suspense>
  );
}
