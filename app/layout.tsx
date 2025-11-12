import { Layout, ThemeSwitch } from "nextra-theme-docs";
import { Banner, Head, Table } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";
import NavbarComponent from "@/components/navbar";
import FooterComponent from "@/components/footer";
import { mona } from "@/providers/fonts";

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const banner = (
  <Banner className="text-white">Preparation will make us win 🎉</Banner>
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
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body
        className={`${mona.variable} mx-auto max-w-[1920px] bg-black selection:bg-white selection:text-black`}
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
