import { ActionFunctionArgs, json, LoaderFunctionArgs, type MetaFunction } from "@vercel/remix";
import ContactForm from "~/components/ContactForm";
import ContactForm2 from "~/components/ContactForm2";
import Projects from "~/components/Projects";
import Presentation from "~/components/Presentation";
import About from "~/components/About";
import { getThemeFromCookies } from "~/theme.server";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { client } from "~/utils/graphqlClient";
import emailjs from '@emailjs/browser';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

function scroll(elmnt: string) {
  document.getElementById(elmnt)?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
}

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
  // const actionData :any = useActionData<typeof action>();
  return (
    <>
      <Presentation data={dataSelfie} />
      <About theme={theme}/>
      <Projects projects={data} />
      <ContactForm />
      {/* <ContactForm2 errors={actionData}/> */}
    </>
  );
}

// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// export async function action({ request }: ActionFunctionArgs) {
//   const formData = await request.formData();
//   const email = formData.get('email')?.toString();
//   const message = formData.get('message')?.toString();

//   const errors: { email?: string; message?: string } = {};

//   // Validate email presence and format
//   if (!email || !emailRegex.test(email)) {
//     errors.email = 'Please enter a valid email address';
//   }

//   // Validate message presence
//   if (!message|| message.trim() === '') {
//     errors.message = 'Message is required';
//   }

//   // If errors exist, return them to the client-side for display
//   if (Object.keys(errors).length) {
//     return json({ errors });
//   }

//   try {
//     // Send email using emailjs
//     await emailjs.send('service_9x86jyh', 'template_p7r0u96', {
//       email,
//       message
//     }, 'user_kkiVCtLUFgzs0KA68U62O');

//     return json({ success: true });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return json({ errors: { message: 'Failed to send message, please try again.' } });
//   }
// }