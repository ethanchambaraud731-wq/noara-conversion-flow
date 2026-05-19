import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Truck,
  RotateCcw,
  ShieldCheck,
  MessageCircle,
  Feather,
  Sparkles,
  Footprints,
  Sun,
  Star,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import productSide from "@/assets/product-side.jpg";
import detailMaterial from "@/assets/detail-material.jpg";
import detailSole from "@/assets/detail-sole.jpg";
import lifestyleHome from "@/assets/lifestyle-home.jpg";
import productBlack from "@/assets/product-black.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "NOARA — Mules fermées vintage, semelle épaisse & confort" },
      {
        name: "description",
        content:
          "Mules à enfiler, bout fermé, semelle épaisse caoutchouc antidérapante. Confort vintage pour l'automne/hiver. 4,7/5 — 4 309 avis vérifiés.",
      },
      { property: "og:title", content: "NOARA — Mules fermées confort vintage" },
      {
        property: "og:description",
        content:
          "Bout rond, semelle épaisse antidérapante, à enfiler. Confortables toute la journée.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
});

function Landing() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <TrustBar />
      <Problem />
      <Solution />
      <Benefits />
      <Gallery />
      <SocialProof />
      <Reassurance />
      <Faq />
      <FinalCta />
      <Footer />
      <StickyCta />
    </main>
  );
}

/* ---------------- Nav ---------------- */
function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-tight flex h-16 items-center justify-between">
        <a href="#" className="font-display text-2xl tracking-tight">
          NOARA
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm text-muted-foreground">
          <a href="#produit" className="hover:text-foreground">Le produit</a>
          <a href="#benefices" className="hover:text-foreground">Bénéfices</a>
          <a href="#avis" className="hover:text-foreground">Avis</a>
          <a href="#faq" className="hover:text-foreground">FAQ</a>
        </nav>
        <a href="#cta" className="hidden md:inline-flex btn-primary !py-2.5 !px-5">
          Commander
        </a>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-tight grid md:grid-cols-12 gap-10 lg:gap-16 pt-10 md:pt-20 pb-16 md:pb-24">
        <div className="md:col-span-6 flex flex-col justify-center">
          <span className="eyebrow mb-6">Nouvelle collection — Automne / Hiver</span>
          <h1 className="text-[2.6rem] sm:text-5xl lg:text-[4rem] leading-[1.05] text-balance">
            La mule fermée qui se glisse{" "}
            <em className="italic font-light text-muted-foreground">
              en une seconde
            </em>{" "}
            et se porte toute la journée.
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
            Bout rond fermé, semelle épaisse en caoutchouc antidérapante,
            intérieur doux. Un confort vintage pensé pour la ville comme
            pour la maison.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a href="#cta" className="btn-primary">
              Découvrir la collection <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a href="#produit" className="btn-ghost">Voir le produit</a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <li className="flex items-center gap-2"><Truck className="h-3.5 w-3.5" /> Livraison offerte dès 80€</li>
            <li className="flex items-center gap-2"><RotateCcw className="h-3.5 w-3.5" /> Retours 30 jours</li>
            <li className="flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5" /> Paiement sécurisé</li>
          </ul>
        </div>

        <div className="md:col-span-6 relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-sand/60 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-sm">
            <img
              src={heroImg}
              alt="Femme portant des mules beige NOARA en ville"
              width={1536}
              height={1920}
              fetchPriority="high"
              className="w-full h-[480px] md:h-[640px] object-cover"
            />
          </div>
          <div className="absolute bottom-5 left-5 right-5 md:bottom-6 md:left-6 md:right-auto md:max-w-[280px] rounded-sm bg-background/90 backdrop-blur px-5 py-4 border border-border">
            <div className="flex items-center gap-1 text-foreground">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
              <span className="ml-2 text-xs text-muted-foreground">4,7 / 5 · 4 309 avis</span>
            </div>
            <p className="mt-2 text-sm leading-snug">
              « Très belles, confortables, belle couleur. Parfait. »
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Trust bar ---------------- */
function TrustBar() {
  const items = [
    "Bout fermé · à enfiler",
    "Semelle épaisse caoutchouc",
    "— Antidérapante —",
    "Intérieur doux & chaud",
    "Style vintage · daily wear",
  ];
  return (
    <div className="border-y border-border bg-sand/40 overflow-hidden">
      <div className="container-tight flex items-center gap-10 py-4 text-xs uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap overflow-x-auto">
        {items.map((t, i) => (
          <span key={i} className="shrink-0">{t}</span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Problem ---------------- */
function Problem() {
  const pains = [
    "Vos chaussures vous font mal dès l'après-midi",
    "Vous choisissez entre style et confort, jamais les deux",
    "Vos pieds sont fatigués bien avant votre journée",
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="container-tight grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <span className="eyebrow">Le constat</span>
          <h2 className="mt-4 text-3xl md:text-5xl leading-[1.1]">
            Marcher ne devrait jamais être un compromis.
          </h2>
        </div>
        <div className="md:col-span-7 md:pt-2">
          <p className="text-lg text-muted-foreground leading-relaxed">
            La majorité des chaussures sacrifient votre confort pour leur
            esthétique — ou l'inverse. À la fin de la journée, vos pieds en
            paient le prix.
          </p>
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {pains.map((p, i) => (
              <li key={i} className="flex items-start gap-4 py-5">
                <span className="font-display text-xl text-muted-foreground w-8">
                  0{i + 1}
                </span>
                <span className="text-base md:text-lg">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Solution ---------------- */
function Solution() {
  return (
    <section id="produit" className="bg-sand/50 py-24 md:py-32">
      <div className="container-tight grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-6 order-2 md:order-1">
          <img
            src={productSide}
            alt="Mule NOARA vue de profil, semelle ergonomique"
            width={1280}
            height={1280}
            loading="lazy"
            className="w-full rounded-sm object-cover"
          />
        </div>
        <div className="md:col-span-6 order-1 md:order-2">
          <span className="eyebrow">La réponse</span>
          <h2 className="mt-4 text-3xl md:text-5xl leading-[1.1]">
            Bout fermé, semelle épaisse. Le confort d'une pantoufle, l'allure d'une vraie chaussure.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Une semelle caoutchouc épaisse et antidérapante, un bout rond
            enveloppant, un intérieur doux qui tient chaud. Pensée pour
            l'automne et l'hiver, à porter dehors comme à la maison.
          </p>
          <dl className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {[
              ["Semelle épaisse caoutchouc", "Antidérapante, amortit chaque pas."],
              ["Bout rond fermé", "Protège du froid et de l'humidité."],
              ["À enfiler", "Glissez-les en une seconde, sans lacets."],
              ["Intérieur doux", "Tissu chaud, sensation pantoufle."],
            ].map(([t, d]) => (
              <div key={t}>
                <dt className="font-medium">{t}</dt>
                <dd className="text-sm text-muted-foreground mt-1">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Benefits ---------------- */
function Benefits() {
  const items = [
    { icon: Footprints, t: "Semelle antidérapante", d: "Caoutchouc épais, accroche parfaite." },
    { icon: Sparkles, t: "Esprit vintage", d: "Une silhouette intemporelle, sans effort." },
    { icon: Feather, t: "À enfiler", d: "Aucun lacet, aucune boucle. Glissez." },
    { icon: Sun, t: "Automne · Hiver", d: "À la maison, en ville, par tous les temps." },
  ];
  return (
    <section id="benefices" className="py-24 md:py-32">
      <div className="container-tight">
        <div className="max-w-2xl">
          <span className="eyebrow">Pourquoi NOARA</span>
          <h2 className="mt-4 text-3xl md:text-5xl leading-[1.1]">
            Tout le confort. Aucun compromis sur le style.
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-sm overflow-hidden">
          {items.map(({ icon: Icon, t, d }) => (
            <div key={t} className="bg-background p-8">
              <Icon className="h-6 w-6 text-foreground" strokeWidth={1.4} />
              <h3 className="mt-6 text-xl">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Gallery ---------------- */
function Gallery() {
  return (
    <section className="pb-24 md:pb-32">
      <div className="container-tight">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="eyebrow">Le détail</span>
            <h2 className="mt-3 text-3xl md:text-5xl leading-[1.05] max-w-xl">
              Une matière qui se vit.
            </h2>
          </div>
          <a href="#cta" className="btn-ghost hidden md:inline-flex">Voir la collection</a>
        </div>
        <div className="grid md:grid-cols-12 gap-3 md:gap-4">
          <img src={detailMaterial} alt="Détail cuir nappa beige" width={1280} height={1600} loading="lazy"
               className="md:col-span-5 md:row-span-2 w-full h-72 md:h-full object-cover rounded-sm" />
          <img src={lifestyleHome} alt="Mules portées à la maison" width={1280} height={1600} loading="lazy"
               className="md:col-span-7 w-full h-72 md:h-[360px] object-cover rounded-sm" />
          <img src={detailSole} alt="Semelle ergonomique vue de dessous" width={1280} height={1600} loading="lazy"
               className="md:col-span-4 w-full h-72 md:h-[300px] object-cover rounded-sm" />
          <img src={productBlack} alt="Mules NOARA coloris noir" width={1280} height={1280} loading="lazy"
               className="md:col-span-3 w-full h-72 md:h-[300px] object-cover rounded-sm" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Social proof ---------------- */
function SocialProof() {
  const reviews = [
    { n: "Frederique D.", d: "26 mars 2026", q: "Très belles, confortables, belle couleur. Parfait." },
    { n: "Camille N.", d: "23 janv. 2026", q: "Taillent bien, très agréables à porter. Excellent rapport qualité-prix." },
    { n: "Sophie M.", d: "25 avr. 2026", q: "J'ai bien aimé. La couleur et la taille sont exactement celles que je prends d'habitude." },
    { n: "Béatrice L.", d: "8 avr. 2026", q: "Belle finition et très confortables. Je recommande." },
  ];
  const fit = [
    { label: "Taille petit", value: 3 },
    { label: "Taille juste", value: 90 },
    { label: "Taille grand", value: 7 },
  ];
  return (
    <section id="avis" className="bg-sand/50 py-24 md:py-32">
      <div className="container-tight">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <span className="eyebrow">Elles en parlent</span>
            <h2 className="mt-3 text-3xl md:text-5xl leading-[1.05]">
              4,7 / 5 — sur 4 309 avis vérifiés.
            </h2>
          </div>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current text-foreground" />
            ))}
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4 max-w-3xl">
          {fit.map((f) => (
            <div key={f.label} className="bg-background border border-border rounded-sm p-5">
              <div className="flex items-baseline justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{f.label}</span>
                <span className="font-display text-2xl">{f.value}%</span>
              </div>
              <div className="mt-3 h-1 bg-sand-deep/50 rounded-full overflow-hidden">
                <div className="h-full bg-foreground" style={{ width: `${f.value}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map((r) => (
            <figure key={r.n} className="bg-background p-7 rounded-sm border border-border flex flex-col">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="text-base leading-relaxed flex-1">« {r.q} »</blockquote>
              <figcaption className="mt-5 text-xs text-muted-foreground uppercase tracking-widest">
                {r.n} · {r.d}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          Tous les avis proviennent d'achats vérifiés.
        </p>
      </div>
    </section>
  );
}

/* ---------------- Reassurance ---------------- */
function Reassurance() {
  const items = [
    { icon: Truck, t: "Livraison rapide", d: "Expédition sous 24h, livraison 2-4 jours." },
    { icon: RotateCcw, t: "Retours 30 jours", d: "Essayez chez vous, échangez sans frais." },
    { icon: ShieldCheck, t: "Paiement sécurisé", d: "Stripe · CB, Apple Pay, 3x sans frais." },
    { icon: MessageCircle, t: "Service client", d: "Une équipe joignable 7j/7." },
  ];
  return (
    <section className="py-20 md:py-24 border-y border-border">
      <div className="container-tight grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {items.map(({ icon: Icon, t, d }) => (
          <div key={t} className="flex gap-4">
            <Icon className="h-6 w-6 mt-0.5 shrink-0" strokeWidth={1.4} />
            <div>
              <h3 className="text-base font-medium">{t}</h3>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function Faq() {
  const items = [
    {
      q: "Comment choisir ma taille ?",
      a: "Nos mules taillent normalement. En cas d'hésitation entre deux tailles, prenez la plus grande. Un guide des tailles est disponible sur la page produit, et les retours sont gratuits pendant 30 jours.",
    },
    {
      q: "Sont-elles vraiment confortables dès le premier port ?",
      a: "Oui. La semelle anatomique et le cuir nappa sont conçus pour ne pas nécessiter de temps d'adaptation. La plupart de nos clientes les portent toute la journée dès la première sortie.",
    },
    {
      q: "Quels sont les délais de livraison ?",
      a: "Expédition sous 24h ouvrées. Comptez 2 à 4 jours en France métropolitaine, 4 à 7 jours en Europe. Livraison offerte dès 80 € d'achat.",
    },
    {
      q: "Comment les entretenir ?",
      a: "Un chiffon doux et un peu de cirage neutre suffisent. Évitez l'eau prolongée. Nous offrons un kit d'entretien dans chaque commande.",
    },
    {
      q: "Quelle est la politique de retour ?",
      a: "30 jours pour changer d'avis, retour gratuit en France. Remboursement sous 5 jours après réception.",
    },
  ];
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container-tight grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <span className="eyebrow">Questions</span>
          <h2 className="mt-4 text-3xl md:text-5xl leading-[1.05]">
            Tout ce que vous voulez savoir.
          </h2>
        </div>
        <div className="md:col-span-8">
          <div className="divide-y divide-border border-y border-border">
            {items.map((it, i) => (
              <FaqItem key={i} q={it.q} a={it.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <details
      className="group py-5"
      open={open}
      onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
        <span className="text-base md:text-lg">{q}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </summary>
      <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
        {a}
      </p>
    </details>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCta() {
  return (
    <section id="cta" className="relative overflow-hidden bg-ink text-background">
      <div className="container-tight py-24 md:py-32 text-center">
        <span className="text-xs uppercase tracking-[0.28em] text-background/60">
          Édition limitée — Collection été
        </span>
        <h2 className="mt-6 text-4xl md:text-6xl leading-[1.05] max-w-3xl mx-auto text-background">
          Glissez-les. Oubliez-les. Marchez.
        </h2>
        <p className="mt-6 text-background/70 max-w-xl mx-auto text-lg">
          Stock limité — chaque paire est confectionnée en petite série.
          Livraison offerte dès 80 €, retours 30 jours.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-4 text-xs font-medium uppercase tracking-[0.12em] rounded-sm hover:opacity-90 transition"
          >
            Commander maintenant <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
        <p className="mt-6 text-xs text-background/50">
          À partir de 129 € · ou 3 × 43 € sans frais
        </p>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-tight py-14 grid md:grid-cols-3 gap-10 items-start">
        <div>
          <div className="font-display text-2xl">NOARA</div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Mules premium pensées pour le confort quotidien.
          </p>
        </div>
        <div className="text-sm text-muted-foreground space-y-2">
          <a href="#" className="block hover:text-foreground">Guide des tailles</a>
          <a href="#" className="block hover:text-foreground">Livraison & retours</a>
          <a href="#" className="block hover:text-foreground">Nous contacter</a>
        </div>
        <div className="text-sm text-muted-foreground space-y-2">
          <a href="#" className="block hover:text-foreground">Mentions légales</a>
          <a href="#" className="block hover:text-foreground">CGV</a>
          <a href="#" className="block hover:text-foreground">Confidentialité</a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-tight py-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} NOARA. Tous droits réservés.</span>
          <span>Conçu en France · Fabriqué en Europe</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Sticky mobile CTA ---------------- */
function StickyCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div
      className={`md:hidden fixed inset-x-0 bottom-0 z-50 transition-transform ${show ? "translate-y-0" : "translate-y-full"}`}
    >
      <div className="m-3 rounded-sm bg-ink text-background flex items-center justify-between pl-4 pr-2 py-2 shadow-lg">
        <div className="leading-tight">
          <div className="text-[10px] uppercase tracking-[0.2em] text-background/60">
            À partir de 129 €
          </div>
          <div className="text-sm">Mule NOARA — Cuir</div>
        </div>
        <a
          href="#cta"
          className="inline-flex items-center gap-1 bg-background text-foreground px-4 py-2.5 text-xs font-medium uppercase tracking-[0.12em] rounded-sm"
        >
          Commander <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
