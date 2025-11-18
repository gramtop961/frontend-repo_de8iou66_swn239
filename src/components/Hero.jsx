import { useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const emailRegex = /^(?:[a-zA-Z0-9_'^&\/+-])+(?:\.(?:[a-zA-Z0-9_'^&\/+-])+)*@(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})$/;

export default function Hero() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }
    setStatus('loading');
    setMessage('');
    // Simulate async waitlist submission
    await new Promise((r) => setTimeout(r, 900));
    setStatus('success');
    setMessage("You're on the waitlist. We'll email you the next cohort dates.");
  };

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for brand tint (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white/90"></div>

      {/* Faint aqua glow */}
      <div className="pointer-events-none absolute -inset-40 opacity-70 [filter:blur(80px)]" style={{ background: 'radial-gradient(600px 400px at 50% 10%, rgba(0,255,255,0.35), transparent 60%)' }} />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-block rounded-full border border-[#00FFFF]/40 bg-white/40 px-4 py-1 text-xs font-semibold tracking-wider text-[#1A1A1A] backdrop-blur-md">
            CREAiT presents • 7-Session Cohort Program
          </span>
          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#1A1A1A]">
            The AI Freedom Accelerator
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-[#666666]">
            Implement AI + GoHighLevel to reclaim 20+ hours per week and add $30–50K in new revenue in the next 90 days. Built for agency owners and service businesses who want time back—without sacrificing growth.
          </p>

          {/* CTA form */}
          <motion.form
            onSubmit={onSubmit}
            className="mx-auto mt-8 flex w-full max-w-xl flex-col items-center gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <div className="relative w-full">
              <input
                type="email"
                inputMode="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email to apply"
                className="w-full rounded-xl border border-[#00FFFF]/40 bg-white/60 px-4 py-4 pr-12 text-[#1A1A1A] placeholder-[#666666]/70 shadow-[0_8px_30px_rgba(0,102,255,0.07)] backdrop-blur-xl focus:outline-none focus:ring-4 focus:ring-[#00FFFF]/40"
              />
              {status === 'success' ? (
                <span className="pointer-events-none absolute inset-y-0 right-4 my-auto h-2 w-2 animate-ping rounded-full bg-emerald-500" />
              ) : null}
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              disabled={status === 'loading'}
              className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00FFFF] px-6 py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-white shadow-[0_10px_40px_rgba(0,102,255,0.35)] transition disabled:opacity-70"
            >
              <span className="mr-2">{status === 'loading' ? 'Submitting…' : 'Join the Waitlist'}</span>
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </motion.button>
          </motion.form>
          {message && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`mt-3 text-sm ${status === 'error' ? 'text-[#FF3366]' : 'text-emerald-600'}`}
            >
              {message}
            </motion.p>
          )}

          {/* Social proof stats */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              ['20+ hrs', 'reclaimed weekly'],
              ['$30–50K', 'added in 90 days'],
              ['7 sessions', 'live coaching'],
              ['GHL + AI', 'battle-tested']
            ].map(([k, v], i) => (
              <motion.div
                key={k}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="rounded-2xl border border-[#00FFFF]/30 bg-white/50 p-4 text-center shadow-sm backdrop-blur-xl hover:shadow-[0_12px_50px_rgba(0,255,255,0.15)] hover:-translate-y-0.5 transition"
              >
                <div className="text-xl font-extrabold text-[#1A1A1A]">{k}</div>
                <div className="text-xs uppercase tracking-wider text-[#666666]">{v}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
