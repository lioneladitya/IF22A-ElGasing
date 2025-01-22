import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative max-container bg-gray-950 text-white padding-container py-36 flex xs:gap-12 lg:gap-20 xs:flex-col lg:flex-row">
      <Image
        className="absolute right-[-4%] xs:top-0 lg:top-[-20%] "
        src="/footer-object.png"
        alt="object"
        width={100}
        height={100}
      />

      <div className="flex flex-col gap-12 lg:w-1/3">
        {/* LOGO & TEXT */}
        <div className="flex flex-col gap-4">          
            <Image src="/lampung.png" alt="logo" width={40} height={40} />
            <h2 className="font-bold text-lg">Lamskuyy</h2>
          <p className="opacity-70">
          Dari Lampung untuk Indonesia, Lamskuyy Menginspirasi Perjalananmu
          </p>
        </div>

        {/* SOCIAL MEDIA */}
      </div>

      {/* LINK FOOTER */}
      <div id="footer-contact"
      className="right lg:w-2/3 flex xs:flex-col md:flex-row xs:gap-10 md:gap-0 md:justify-between">
        <FooterCard
          title="Company"
          links={[
            { label: "About", href: "/" },
            { label: "Career", href: "/" },
            { label: "Mobile", href: "/" },
          ]}
        />
        <FooterCard
          title="Contact"
          links={[
            { label: "Why Afritour?", href: "/" },
            { label: "Partner with us", href: "/" },
            { label: "Blog", href: "/" },
          ]}
        />
        <FooterCard
          title="Meet Us"
          links={[
            { label: "+6285789875590", href: "" },
            { label: "lamskuyyinfo@gmail.com", href: "" },
            { label: "Lampung, Indonesia", href: "" },
          ]}
        />
        <FooterCard
          title="FAQ's"
          links={[
            { label: "How do I book a tour?", href: "/help#how-to-book" },
            { label: "Can I cancel my booking?", href: "/help#cancel-booking" },
            {
              label: "What payment methods do you accept?",
              href: "/help#payment-methods",
            },
            { label: "View All FAQs", href: "/app/help" },
          ]}
        />
      </div>

      {/* FAQ Teaser */}
      <div id="footer-faq" className="mt-12"></div>
    </footer>
  );
};

interface FooterCardProps {
  title: string;
  links: { label: string; href: string }[]; //Setiap link punya teks dan url spesifik
}

const FooterCard = ({ title, links }: FooterCardProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-bold">{title}</h3>
      <ul className="flex flex-col gap-4 mt-4">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="opacity-70 hover:opacity-100"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
