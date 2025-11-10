import { Layout } from "nextra-theme-docs";
import { Banner } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import Navbar from "@/components/layout-comps/navbar";
import Footer from "@/components/layout-comps/footer";
import ContentHider from "@/components/layout-comps/content-hider";
import NavbarComponent from "@/components/layout-comps/navbar";
import SearchComponent from "@/components/layout-comps/search-component";
import "./globals.css";

export const metadata = {
  title: "SlopScore.ai",
};

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
      <body>
        <main>
          <ContentHider>
            <Layout
              banner={
                <Banner className="">Preparation will make us win 🎉</Banner>
              }
              navbar={<NavbarComponent />}
              pageMap={await getPageMap()}
              docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
              footer={<Footer />}
              // ... Your additional layout options
              editLink={null}
              search={<SearchComponent />}
              feedback={{ content: null }} 
            >
              {children}
            </Layout>
          </ContentHider>
        </main>
      </body>
    </html>
  );
}
