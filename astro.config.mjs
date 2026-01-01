// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// plugins
import starlightSidebarTopics from "starlight-sidebar-topics";
import starlightScrollToTop from 'starlight-scroll-to-top';

export default defineConfig({
  site: 'https://nazethan.github.io',
  base: '/labs',
  outDir: './docs',
  integrations: [
    starlight({
      title: 'Labs',
      disable404Route: true,
      description: 'A collection of notes and experiments on various topics.',
      social: [
        {
        icon: 'github',
        label: 'GitHub',
        href: 'https://github.com/nazethan/labs',
        },
        {
          icon: "discord",
          label: 'Discord',
          href: 'https://discord.gg/',
        }
      ],
      // plugins
      plugins: [
        starlightSidebarTopics([
          {
            label: 'OS',
            icon: 'linux',
            link: 'os/',
            items: [
              { label: 'Records', autogenerate: { directory: 'os/e/' } },
            ],
          },
          {
            label: 'DBMS',
            icon: 'seti:db',
            link: 'dbms/',
            items: [
              { label: 'Records', autogenerate: { directory: 'dbms/e/' } },
            ],
          },
          {
            label: 'CN',
            icon: 'seti:puppet',
            link: 'cn/',
            items: [
              { label: 'Records', autogenerate: { directory: 'cn/e/' } },
            ],
          }
        ]),
        
        starlightScrollToTop({
            position: 'right',
            tooltipText: 'Back to top',
            showTooltip: true,
            smoothScroll: true,
            threshold: 20,
            svgPath: 'M18 15l-6-6-6 6',
            svgStrokeWidth: 2,
            borderRadius: '15',
            showProgressRing: true,
            progressRingColor: '#00FFFF',
            showOnHomepage: false
      })
      ]
    })
  ],
});
