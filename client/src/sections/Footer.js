import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";

export default function Footer() {
  return (
    <section className="py-10 px-4 border-t border-white/10 bg-black/10 backdrop-blur-md">
      <footer className="container flex flex-col md:flex-row md:justify-between items-center gap-6 text-sm text-white/70">
        
        {/* Left: Logo and Name */}
        <div className="flex items-center gap-3">
          <Image src={logo} alt="Logo Icon" className="h-auto w-16" />
          <h2 className="font-bold text-2xl text-cyan-400 hidden md:inline-block">
            QuantAir
          </h2>
        </div>

        {/* Right: Credits */}
        <div className="text-center md:text-right leading-relaxed max-w-md">
          <p>
            Built by{" "}
            <span className="font-semibold text-white hover:text-cyan-400 transition">
              Debshata Choudhury, Vaibhav Jain
            </span>
            . View source code on{" "}
            <Link
              href="https://github.com/Niranjan1Praveen/DropConnect-Development"
              className="italic underline hover:text-cyan-400 transition"
              target="_blank"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
      </footer>
    </section>
  );
}
