import { motion } from 'framer-motion';

const bullets = [
  {
    title: 'Battle-Tested Systems',
    desc: 'Built inside agencies and service businesses using GoHighLevel and modern AI tools.'
  },
  {
    title: 'Time Back Guarantee',
    desc: 'If you don’t reclaim time with our frameworks, we’ll keep working with you until you do.'
  },
  {
    title: 'Minimal Input, Maximum Output',
    desc: 'Templates, prompts, and automations so you spend minutes — not weeks — building.'
  },
];

export default function WhyUs() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block rounded-full border border-[#00FFFF]/40 bg-white/60 px-3 py-1 text-xs font-semibold tracking-wider text-[#1A1A1A] backdrop-blur-md">Why this works</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#1A1A1A]">Apple-clean, Notion-clear. Results-focused.</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-[#666666]">
              We cut the fluff. You’ll implement only the pieces that move the needle in 90 days: offer, pipeline, fulfillment — powered by AI and GoHighLevel.
            </p>
            <ul className="mt-6 space-y-3">
              {bullets.map((b, i) => (
                <motion.li
                  key={b.title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gradient-to-r from-[#0066FF] to-[#00FFFF] shadow-[0_6px_18px_rgba(0,102,255,0.25)]" />
                  <div>
                    <div className="font-semibold text-[#1A1A1A]">{b.title}</div>
                    <div className="text-sm text-[#666666]">{b.desc}</div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-[#00FFFF]/30 bg-white/60 p-8 shadow-[0_20px_70px_rgba(0,102,255,0.08)] backdrop-blur-xl"
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                ['2–4 hrs/wk', 'delivery time'],
                ['3x', 'reply rate'],
                ['80%+', 'automated'],
                ['90 days', 'to results'],
              ].map(([k, v]) => (
                <div key={k} className="rounded-2xl border border-[#00FFFF]/30 bg-white/70 p-6 text-center">
                  <div className="text-2xl font-extrabold text-[#1A1A1A]">{k}</div>
                  <div className="text-xs uppercase tracking-wider text-[#666666]">{v}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
