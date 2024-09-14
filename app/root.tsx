import {
  json,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import Header from "~/components/Header"
import Footer from "~/components/Footer"
import { getThemeFromCookies } from "./theme.server";
import { useMemo } from "react";
import ToggleThemeButton from "./components/ToggleThemeButton";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const theme = await getThemeFromCookies(request);
  const currentYear = new Date().getFullYear();
  return json({ theme, currentYear })
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { theme, currentYear } = useLoaderData<typeof loader>();

  const htmlProps = useMemo(() => {
    return {
      lang: 'en',
      className: theme === 'dark' ? 'dark' : '',
    }
  }, [theme])

  return (
    <html {...htmlProps}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header toggleButton={<ToggleThemeButton currentTheme={theme} />}/>
        {children}
        <Footer currentYear={currentYear} />
        <ScrollRestoration />
        <Scripts />
        <Analytics />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
