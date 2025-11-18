import { useState } from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    await new Promise((r) => setTimeout(r, 700));
    setDone(true);
  };

  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-[#00FFFF]/40 bg-white/60 p-10 shadow-[0_20px_70px_rgba(0,102,255,0.10)] backdrop-blur-xl"
          style={{ boxShadow: '0 10px 60px rgba(0, 255, 255, 0.12)' }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">
            Ready to reclaim your time and grow faster?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-[#666666]">
            Join the waitlist. You’ll get priority access, dates, and a quick 2-minute application.
          </p>

          <form onSubmit={submit} className="mx-auto mt-6 flex max-w-xl flex-col items-center gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your best email"
              className="w-full rounded-xl border border-[#00FFFF]/40 bg-white/60 px-4 py-4 text-[#1A1A1A] placeholder-[#666666]/70 shadow-[0_8px_30px_rgba(0,102,255,0.07)] backdrop-blur-xl focus:outline-none focus:ring-4 focus:ring-[#00FFFF]/40"
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00FFFF] px-6 py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-white shadow-[0_10px_40px_rgba(0,102,255,0.35)]"
            >
              Get Notified
            </motion.button>
          </form>

          {done && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 text-emerald-600">
              Thanks! Check your inbox for confirmation.
            </motion.p>
          )}
        </motion.div>

        <p className="mt-4 text-xs text-[#666666]">
          Limited seats per cohort. Urgent spots marked in <span className="font-semibold text-[#FF3366]">neon red</span>.
        </p>
      </div>
    </section>
  );
}
