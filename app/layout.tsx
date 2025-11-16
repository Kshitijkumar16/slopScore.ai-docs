import { Layout, ThemeSwitch } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";
import NavbarComponent from "@/components/navbar";
import FooterComponent from "@/components/footer";
import { mona, pixel } from "@/providers/fonts";

export const metadata = {
  title: "Docs | Slopscore.ai - Youtube with context, not just content.",
  description:
    "Don't consume hallucinated facts and ruin your knowledge, 'see' before you actually watch any video.",
};

const banner = (
  <Banner storageKey="slopscore-banner" dismissible className="text-white">
    Preparation will make us win 🎉
  </Banner>
);

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
        // ... Your additional head options
        color={{ hue: 27, saturation: 100, lightness: 50 }}
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body
        className={`${mona.variable} ${pixel.variable} mx-auto max-w-[1920px] bg-black selection:bg-arancia selection:text-black`}
      >
        <Layout
          banner={banner}
          darkMode={false}
          nextThemes={{ defaultTheme: "dark" }}
          navbar={<NavbarComponent />}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={<FooterComponent />}
          // ... Your additional layout options
          editLink={false}
          feedback={{ content: null }}
          copyPageButton={false}
          sidebar={{ toggleButton: false }}
          toc={{ title: "On this page", backToTop: true }}
        >
          <div className="pt-12">{children}</div>
          <ThemeSwitch />
        </Layout>
      </body>
    </html>
  );
}
