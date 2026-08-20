/* MANIFEST — rough burnt-letter edges.
   Injects the SVG filter that .mf-burn (tokens/utilities.css) references.
   Include once per page: <script src="assets/mf-burn-edge.js"></script> */
(function () {
  function inject() {
    if (document.getElementById('mf-burn-edge-defs')) return;
    var host = document.createElement('div');
    host.id = 'mf-burn-edge-defs';
    host.setAttribute('aria-hidden', 'true');
    host.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
    host.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">' +
      '<filter id="mf-burn-edge" x="-6%" y="-8%" width="112%" height="116%" color-interpolation-filters="sRGB">' +
      '<feTurbulence type="fractalNoise" baseFrequency="0.055 0.09" numOctaves="3" seed="7" result="n"/>' +
      '<feDisplacementMap in="SourceGraphic" in2="n" scale="3.2" xChannelSelector="R" yChannelSelector="G"/>' +
      '</filter>' +
      '<filter id="mf-burn-edge-heavy" x="-8%" y="-10%" width="116%" height="120%" color-interpolation-filters="sRGB">' +
      '<feTurbulence type="fractalNoise" baseFrequency="0.04 0.075" numOctaves="4" seed="3" result="n"/>' +
      '<feDisplacementMap in="SourceGraphic" in2="n" scale="5.5" xChannelSelector="R" yChannelSelector="G"/>' +
      '</filter>' +
      '</svg>';
    (document.body || document.documentElement).appendChild(host);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);
  else inject();
})();
