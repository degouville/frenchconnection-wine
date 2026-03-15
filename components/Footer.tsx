import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] border-t border-[var(--gold)]/10 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/images/logos/fcw-logo.png"
              alt="French Connection Wines"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="font-display text-[var(--gold)] text-lg">
              French Connection Wines
            </span>
          </div>
          <p className="text-[var(--ink-soft)] text-sm leading-relaxed max-w-xs">
            Our philosophy is to achieve balance across all components of the
            wine — and to make no compromise in that pursuit.
          </p>
        </div>

        {/* Producer logos */}
        <div>
          <p className="text-[var(--gold)] text-xs tracking-[0.25em] uppercase mb-5">
            Our Producers
          </p>
          <div className="flex flex-col gap-4">
            <Image
              src="/images/logos/logo-anne-de-joyeuse.png"
              alt="Cave Anne de Joyeuse"
              width={120}
              height={40}
              className="object-contain object-left brightness-75 hover:brightness-100 transition-all"
            />
            <Image
              src="/images/logos/logo-gilles-cantons.png"
              alt="Gilles Cantons"
              width={120}
              height={40}
              className="object-contain object-left brightness-75 hover:brightness-100 transition-all"
            />
            <Image
              src="/images/logos/logo-chateau-pennautier.png"
              alt="Chateau de Pennautier"
              width={120}
              height={40}
              className="object-contain object-left brightness-75 hover:brightness-100 transition-all"
            />
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[var(--gold)] text-xs tracking-[0.25em] uppercase mb-5">
            Contact Us
          </p>
          <div className="space-y-3 text-sm text-[var(--ink-soft)]">
            <p>
              Đường Phan Khôi, Khối Thịnh Mỹ
              <br />
              Central Vietnam
            </p>
            <a
              href="mailto:contact@frenchconnection.wine"
              className="block hover:text-[var(--gold)] transition-colors"
            >
              contact@frenchconnection.wine
            </a>
            <a
              href="https://zalo.me/84936480805"
              className="block hover:text-[var(--gold)] transition-colors"
            >
              Zalo: +84 936 480 805
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[var(--gold)]/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[var(--ink-soft)] text-xs">
          © {new Date().getFullYear()} French Connection Wines. All Rights
          Reserved.
        </p>
        <p className="text-[var(--ink-soft)] text-xs">
          All prices in VND, subject to 10% VAT.
        </p>
      </div>
    </footer>
  );
}
