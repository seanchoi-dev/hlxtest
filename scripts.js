import blockLoader from './node_modules/@adobecom/blocks/tools/blockLoader.js';
blockLoader(config);

const config = {
    blocks: {
        'header': {
            location: '/blocks/header/',
            styles: 'styles.css',
            scripts: 'scripts.js',
        },
        '.home-hero': {
            location: '/blocks/home-hero/',
            styles: 'styles.css',
        },
        'footer': {
            location: '/blocks/footer/',
            styles: 'styles.css',
        },
        'a[href^="https://www.youtube.com"]': {
            location: '/blocks/embed/',
            styles: 'youtube.css',
            scripts: 'youtube.js',
        }
    }
};

// Adobe config
window.fedsMapping = {
    ko: 'kr'
  };
  
  window.fedsConfig = {
    locale: window.fedsMapping[window.blog.language] || window.blog.language,
    content: {
      experience: 'blogs/blog-gnav',
    },
    search: {
      context: 'blogs',
      passExperienceName: true,
    },
    disableSticky: false,
    privacy: {
      otDomainId: getOtDomainId(),
      footerLinkSelector: '[data-feds-action="open-adchoices-modal"]',
    },
  };
  
  window.adobeid = {
    client_id: 'theblog-helix',
    scope: 'AdobeID,openid',
    locale: window.blog.language,
  };

const marquee = document.querySelector('.marquee');
console.log(marquee);
