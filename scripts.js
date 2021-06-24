
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
