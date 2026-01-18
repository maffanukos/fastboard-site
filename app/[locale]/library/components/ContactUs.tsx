"use client";

export default function ContactUs() {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
        <h3 className="mb-4 text-xl font-semibold text-white">Contact Us Form</h3>
        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm text-white/70">Name</label>
            <input
              type="text"
              className="h-[42px] w-full rounded-lg border border-white/20 bg-white/5 px-4 text-sm text-white placeholder:text-white/50 focus:border-[#00bfff] focus:outline-none"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-white/70">Email</label>
            <input
              type="email"
              className="h-[42px] w-full rounded-lg border border-white/20 bg-white/5 px-4 text-sm text-white placeholder:text-white/50 focus:border-[#00bfff] focus:outline-none"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-white/70">Message</label>
            <textarea
              className="h-32 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-[#00bfff] focus:outline-none"
              placeholder="Your message"
            />
          </div>
          <button className="h-[52px] rounded-full bg-gradient-to-r from-[#00bfff] to-[#00d4ff] px-9 text-lg font-medium text-white hover:opacity-90">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
