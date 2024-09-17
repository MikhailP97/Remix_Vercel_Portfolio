import { json, LoaderFunctionArgs, type MetaFunction } from "@vercel/remix";
import ContactForm from "~/components/ContactForm";
import Projects from "~/components/Projects";
import Presentation from "~/components/Presentation";
import About from "~/components/About";
import { getThemeFromCookies } from "~/theme.server";
import { useLoaderData } from "@remix-run/react";
import { client } from "~/utils/graphqlClient";

export const meta: MetaFunction = () => {
  return [
    { title: "Mykhaylo Pelykh | Portfolio" },
    { name: "description", content: "Portfolio of Mykhaylo Pelykh" },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const theme = await getThemeFromCookies(request)

  const projects = `
    query MyQuery {
      portfolioProjects(first: 10) {
        id
        imgPreview {
          url
        }
        title
        techStack(first: 10) {
          name
          sourceImg
        }
        sourceCode
        preview
        description
      }
    }
  `;
  const data = await client.request(projects)
  const selfie = `
    query MyQuery {
      asset(where: {id: "cm10x9em63lf207w2xh9wh1ot"}) {
        url
      }
    }
  `;
  const dataSelfie = await client.request(selfie)

  return json({ 
    theme,
    data,
    dataSelfie
  })
}

export default function Index() {
  const { theme, data, dataSelfie } = useLoaderData<typeof loader>();
  return (
    <>
      <Presentation data={dataSelfie} />
      <About theme={theme}/>
      <Projects projects={data} />
      <ContactForm />
    </>
  );
}