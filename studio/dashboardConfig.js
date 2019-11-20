export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dd4c780503453c6f3cd0ac5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-p9qo27sy',
                  apiId: '57baab5a-577d-442b-b178-26a9d700657e'
                },
                {
                  buildHookId: '5dd4c780a19c1a7e00e001d5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-rhw7nqyj',
                  apiId: '00bab993-f9cf-4b3f-ad19-3153ca4a90a4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yahsan2/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-rhw7nqyj.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
