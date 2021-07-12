export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60ebc69faf97d6b74d7461f0",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-2-studio-mugmn1qm",
                  apiId: "014934a1-d311-4d84-ad29-84cee7c45ef2",
                },
                {
                  buildHookId: "60ebc69ea469317d0727b768",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-2-web-xjtbya74",
                  apiId: "d40ad296-f808-4723-82c6-6da805939819",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ovsw/sanity-gatsby-blog2",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-2-web-xjtbya74.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
