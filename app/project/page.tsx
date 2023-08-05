import { useRouter } from "next/router";
import projects from "../../public/ProjectsData";
import Link from "next/link";

const ProjectDetails = () => {
  // const router = useRouter();
  // const { ProjectName } = router.query;

  // console.log(ProjectName);

  // // Replace this with your actual project data retrieval logic
  // // For example, you could fetch project details from an API or use local data
  // const projectDetails = projects.find(
  //   (project) => project.name === ProjectName
  // );

  return (
    <body>
      <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 ">
        <div className="bg-zinc-50 min-h-screen">
          <header className="relative isolate overflow-hidden bg-gradient-to-tl from-black via-zinc-900 to-black">
            <div className="fixed inset-x-0 top-0 z-50 backdrop-blur lg:backdrop-blur-none duration-200 border-b lg:bg-transparent bg-zinc-900/0 border-transparent">
              <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
                <div className="flex justify-between gap-8">
                  <span
                    title="View counter for this page"
                    className="duration-200 hover:font-medium flex items-center gap-1  text-zinc-400 hover:text-zinc-100 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>{" "}
                    6.3K
                  </span>
                  <Link target="_blank" href="https://twitter.com/chronark_">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="w-6 h-6 duration-200 hover:font-medium  text-zinc-400 hover:text-zinc-100 "
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </Link>
                  <Link target="_blank" href="https://github.com/chronark">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="w-6 h-6 duration-200 hover:font-medium  text-zinc-400 hover:text-zinc-100 "
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </Link>
                </div>
                <a
                  className="duration-200 hover:font-medium  text-zinc-400 hover:text-zinc-100 "
                  href="/projects"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="w-6 h-6 "
                  >
                    <line x1="19" x2="5" y1="12" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </a>
              </div>
            </div>
            <div className="container mx-auto relative isolate overflow-hidden  py-24 sm:py-32">
              <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
                <div className="mx-auto max-w-2xl lg:mx-0">
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
                    planetfall.io
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-zinc-300">
                    I'm building a SAAS providing global latency monitoring for
                    your APIs and websites from edge locations around the world.
                    Have you ever wondered how fast your API is in any part of
                    the world? Planetfall allows you to find out and monitor it
                    continuously.
                  </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                  <div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                    <Link target="_blank" href="https://planetfall.io">
                      Website <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
            <div className="mdx">
              <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                <a
                  className="font-medium text-zinc-900 underline underline-offset-4"
                  href="https://planetfall.io"
                ></a>
              </p>
              <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                Planetfall is a SaaS platform that provides global latency
                monitoring and synthetic monitoring for APIs. With over 60
                regions to monitor from, customers can gain insights into the
                true performance of their API by checking latency from around
                the world. Planetfall offers custom timeouts, threshold
                notifications, and real-time alerts for potential performance
                issues. Additionally, customers can create custom status pages
                to share with their customers, which can display availability
                and latency for every region. Planetfall offers a free tier that
                includes 100k checks per month and scales as customers grow.
                Overall, Planetfall helps customers stay in control of their
                API's performance, improve communication with their customers,
                and build trust.
              </p>
            </div>
          </article>
        </div>
      </div>
    </body>
  );
};

export default ProjectDetails;
