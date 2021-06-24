
function createTag(name, attrs) {
    const el = document.createElement(name);
    if (typeof attrs === 'object') {
      for (let [key, value] of Object.entries(attrs)) {
        el.setAttribute(key, value);
      }
    }
    return el;
}

function loadScript(url, callback, type) {
    const $head = document.querySelector('head');
    const $script = createTag('script', { src: url });
    if (type) {
      $script.setAttribute('type', type);
    }
    $head.append($script);
    $script.onload = callback;
    return $script;
}

function getOtDomainId() {
    const domains = {
      'adobe.com': '7a5eb705-95ed-4cc4-a11d-0cc5760e93db',
      'hlx.page': '3a6a37fe-9e07-4aa9-8640-8f358a623271',
      'project-helix.page': '45a95a10-dff7-4048-a2f3-a235b5ec0492',
      'helix-demo.xyz': 'ff276bfd-1218-4a19-88d4-392a537b6ce3',
      'adobeaemcloud.com': '70cd62b6-0fe3-4e20-8788-ef0435b8cdb1',
    };
    const currentDomain = Object.keys(domains).find(domain => window.location.host.indexOf(domain) > -1);
  
    return `${domains[currentDomain] || domains[Object.keys(domains)[0]]}`;
  };

loadScript('https://www.adobe.com/etc.clientlibs/globalnav/clientlibs/base/feds.js').id = 'feds-script';


// Adobe config
window.fedsMapping = {
    ko: 'kr'
  };
  
  window.fedsConfig = {
    locale: 'en',
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
    locale: 'en',
  };

const marquee = document.querySelector('.marquee');
console.log(marquee, "asd");
