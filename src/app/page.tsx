"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

const assetMap = /* provided JSON array */;

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay 
          navItems={[
            { name: "Home", id: "home" },
            { name: "Shop", id: "shop" },
            { name: "About Us", id: "about" },
            { name: "Contact", id: "contact" },
          ]}
          brandName="Nanzi Apparel"
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Nanzi Apparel"
            description="Explore the finest collection of modern men's fashion."
            imageSrc={assetMap.find(a => a.id === 'hero')?.url ?? "/public/images/placeholder.webp"}
            buttons={[
              { text: "Shop Now", href: "shop" },
              { text: "Learn More", href: "about" },
            ]}
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="Elegant Designs for Every Occasion"
            buttons={[{ text: "Our Story", href: "about" }]}
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>

      <div id="product" data-section="product" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardOne
            title="Featured Products"
            products={[
              { id: "1", name: "Eclipse Motion Jacket", price: "$150", imageSrc: assetMap.find(a => a.id === 'product1')?.url ?? "/public/images/placeholder.webp" },
              { id: "2", name: "Casual Comfort Shirt", price: "$70", imageSrc: assetMap.find(a => a.id === 'product2')?.url ?? "/public/images/placeholder.webp" },
              { id: "3", name: "Formal Elegance Suit", price: "$300", imageSrc: assetMap.find(a => a.id === 'product3')?.url ?? "/public/images/placeholder.webp" }
            ]}
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Newsletter"
            title="Stay Updated"
            description="Subscribe for the latest offers and exclusive content."
            imageSrc={assetMap.find(a => a.id === 'hero')?.url ?? "/public/images/placeholder.webp"}
            buttonText="Subscribe"
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[{ items: [
              { label: "Privacy Policy", href: "privacy" },
              { label: "Terms and Conditions", href: "terms" }
            ]} }]} 
            logoText="Nanzi Apparel"
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
