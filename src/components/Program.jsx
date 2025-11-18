import { motion } from 'framer-motion';

const items = [
  {
    title: 'Design Your AI-Enhanced Offer',
    desc: 'Clarify positioning, price, and delivery while mapping AI into fulfillment to reduce manual work.',
  },
  {
    title: 'Automations with GoHighLevel',
    desc: 'Implement proven GHL workflows for lead nurture, bookings, and onboarding so sales runs on autopilot.',
  },
  {
    title: 'AI Content + Outreach Engine',
    desc: 'Spin up a weekly pipeline of assets and personalized outreach in hours, not days.',
  },
  {
    title: 'Sales System & Offer Validation',
    desc: 'Templates and call flows that convert — with AI assistance for prep, notes, and follow-up.',
  },
  {
    title: 'Delivery Playbooks',
    desc: 'Client onboarding, SOPs, and AI copilots to keep margin high as you scale.',
  },
  {
    title: 'Time Freedom Ops',
    desc: 'Boundaries, dashboards, and automations that give you your calendar back.',
  },
];

export default function Program() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A1A1A] text-center"
        >
          What You Build in 7 Sessions
        </motion.h2>
        <p className="mt-4 text-center text-[#666666] max-w-2xl mx-auto">
          A focused sprint with live coaching, templates, and systems you can deploy the same day.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group rounded-2xl border border-[#00FFFF]/30 bg-white/60 p-6 shadow-[0_10px_40px_rgba(0,102,255,0.05)] backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,102,255,0.12)]"
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#0066FF] to-[#00FFFF] shadow-[0_6px_20px_rgba(0,102,255,0.35)]" />
              <h3 className="mt-4 text-xl font-bold text-[#1A1A1A]">{it.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#666666]">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
