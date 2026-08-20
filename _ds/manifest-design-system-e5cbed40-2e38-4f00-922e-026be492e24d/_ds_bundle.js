/* @ds-bundle: {"format":4,"namespace":"MANIFESTDesignSystem_e5cbed","components":[{"name":"BurnHeading","sourcePath":"components/brand/BurnHeading.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Panel","sourcePath":"components/core/Panel.jsx"},{"name":"Rule","sourcePath":"components/core/Rule.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"EvidenceSlot","sourcePath":"components/data/EvidenceSlot.jsx"},{"name":"FieldRow","sourcePath":"components/data/FieldRow.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"},{"name":"SidebarNav","sourcePath":"components/navigation/SidebarNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"},{"name":"Notice","sourcePath":"components/status/Notice.jsx"},{"name":"ScoreMeter","sourcePath":"components/status/ScoreMeter.jsx"},{"name":"Stamp","sourcePath":"components/status/Stamp.jsx"},{"name":"StatusBadge","sourcePath":"components/status/StatusBadge.jsx"}],"sourceHashes":{"assets/mf-burn-edge.js":"96a0f7c56af3","components/brand/BurnHeading.jsx":"75e8095667c6","components/brand/Wordmark.jsx":"0f5e31feb580","components/core/Button.jsx":"f1b83c7a22f3","components/core/Icon.jsx":"c00579265e3e","components/core/IconButton.jsx":"7ac10ce0eaf3","components/core/Panel.jsx":"1deaac47cb38","components/core/Rule.jsx":"20ae875099db","components/core/Tag.jsx":"4b4f18491e3a","components/data/DataTable.jsx":"dd70551114c3","components/data/EvidenceSlot.jsx":"956d80267f8a","components/data/FieldRow.jsx":"e72496742d3b","components/forms/Checkbox.jsx":"d4b08c3d1c94","components/forms/Input.jsx":"15c454268dcf","components/forms/Radio.jsx":"2a86786e953a","components/forms/Select.jsx":"8b35661f1cdb","components/forms/Toggle.jsx":"7d09285f839a","components/navigation/SidebarNav.jsx":"8e12b7753545","components/navigation/Tabs.jsx":"5aef0b1416db","components/overlay/Dialog.jsx":"301799bb6ecb","components/status/Notice.jsx":"80eafd0a6626","components/status/ScoreMeter.jsx":"d95f1a926dba","components/status/Stamp.jsx":"3b383aadaf97","components/status/StatusBadge.jsx":"f70fe9343162","ui_kits/scanner/AppShell.jsx":"2c0e94225233","ui_kits/scanner/CaseFile.jsx":"429679abf954","ui_kits/scanner/LoginScreen.jsx":"60c6fc2806a8","ui_kits/scanner/NoticeDocket.jsx":"af1f7d298ba7","ui_kits/scanner/Placeholder.jsx":"fecdceea396c","ui_kits/scanner/ScanQueue.jsx":"ebe80d8c025d","ui_kits/scanner/ScannerCapture.jsx":"44295681a786","ui_kits/scanner/data.js":"28d33e8406e7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MANIFESTDesignSystem_e5cbed = window.MANIFESTDesignSystem_e5cbed || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/mf-burn-edge.js
try { (() => {
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
    host.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">' + '<filter id="mf-burn-edge" x="-6%" y="-8%" width="112%" height="116%" color-interpolation-filters="sRGB">' + '<feTurbulence type="fractalNoise" baseFrequency="0.055 0.09" numOctaves="3" seed="7" result="n"/>' + '<feDisplacementMap in="SourceGraphic" in2="n" scale="3.2" xChannelSelector="R" yChannelSelector="G"/>' + '</filter>' + '<filter id="mf-burn-edge-heavy" x="-8%" y="-10%" width="116%" height="120%" color-interpolation-filters="sRGB">' + '<feTurbulence type="fractalNoise" baseFrequency="0.04 0.075" numOctaves="4" seed="3" result="n"/>' + '<feDisplacementMap in="SourceGraphic" in2="n" scale="5.5" xChannelSelector="R" yChannelSelector="G"/>' + '</filter>' + '</svg>';
    (document.body || document.documentElement).appendChild(host);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);else inject();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/mf-burn-edge.js", error: String((e && e.message) || e) }); }

// components/brand/BurnHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const burnSizes = {
  xxl: 'var(--display-xxl)',
  xl: 'var(--display-xl)',
  lg: 'var(--display-lg)',
  md: 'var(--display-md)',
  sm: 'var(--display-sm)',
  xs: 'var(--display-xs)'
};
function ensureFilter() {
  if (typeof document === 'undefined' || document.getElementById('mf-burn-edge-defs')) return;
  const host = document.createElement('div');
  host.id = 'mf-burn-edge-defs';
  host.setAttribute('aria-hidden', 'true');
  host.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
  host.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">' + '<filter id="mf-burn-edge" x="-6%" y="-8%" width="112%" height="116%" color-interpolation-filters="sRGB">' + '<feTurbulence type="fractalNoise" baseFrequency="0.055 0.09" numOctaves="3" seed="7" result="n"/>' + '<feDisplacementMap in="SourceGraphic" in2="n" scale="3.2" xChannelSelector="R" yChannelSelector="G"/></filter>' + '<filter id="mf-burn-edge-heavy" x="-8%" y="-10%" width="116%" height="120%" color-interpolation-filters="sRGB">' + '<feTurbulence type="fractalNoise" baseFrequency="0.04 0.075" numOctaves="4" seed="3" result="n"/>' + '<feDisplacementMap in="SourceGraphic" in2="n" scale="5.5" xChannelSelector="R" yChannelSelector="G"/></filter></svg>';
  document.body.appendChild(host);
}
function BurnHeading({
  children,
  as = 'h2',
  size = 'lg',
  roughness = 'normal',
  align = 'left',
  style,
  ...rest
}) {
  React.useEffect(ensureFilter, []);
  const Tag = as;
  const filter = roughness === 'none' ? 'drop-shadow(0 1px 0 rgba(19,17,16,.45))' : roughness === 'heavy' ? 'url(#mf-burn-edge-heavy) drop-shadow(0 1px 0 rgba(19,17,16,.5))' : 'url(#mf-burn-edge) drop-shadow(0 1px 0 rgba(19,17,16,.45))';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      margin: 0,
      textAlign: align,
      fontFamily: 'var(--font-display)',
      fontSize: burnSizes[size] || burnSizes.lg,
      lineHeight: 'var(--display-leading)',
      letterSpacing: 'var(--display-tracking)',
      textTransform: 'uppercase',
      backgroundImage: 'var(--texture-burn)',
      backgroundSize: '120% auto',
      backgroundPosition: 'center 38%',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      WebkitTextFillColor: 'transparent',
      filter: filter,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { BurnHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/BurnHeading.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Wordmark({
  size = 'md',
  tone = 'ink',
  subline = 'LEGAL METROLOGY AUDIT',
  showRule = true,
  style,
  ...rest
}) {
  const m = size === 'lg' ? {
    fs: 40,
    sub: 11,
    gap: 6
  } : size === 'sm' ? {
    fs: 17,
    sub: 8,
    gap: 3
  } : {
    fs: 25,
    sub: 9,
    gap: 4
  };
  const color = tone === 'inverse' ? 'var(--steel-050)' : tone === 'red' ? 'var(--case-red)' : 'var(--ink-900)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      lineHeight: 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontSize: m.fs,
      letterSpacing: '.02em',
      textTransform: 'uppercase',
      color: color
    }
  }, "MANIFEST"), subline ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginTop: m.gap
    }
  }, showRule ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 0,
      borderTop: `2px solid ${color}`
    }
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: m.sub,
      fontWeight: 600,
      letterSpacing: '.28em',
      textTransform: 'uppercase',
      color: tone === 'inverse' ? 'var(--steel-400)' : 'var(--steel-700)'
    }
  }, subline)) : null);
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Lucide is loaded from CDN by the host page (see readme > ICONOGRAPHY).
// This wrapper renders a lucide placeholder and asks lucide to hydrate it.
function Icon({
  name,
  size = 16,
  strokeWidth = 1.75,
  color = 'currentColor',
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const draw = () => {
      if (!window.lucide || !el.isConnected) return;
      el.innerHTML = '';
      const slot = document.createElement('i');
      slot.setAttribute('data-lucide', name);
      el.appendChild(slot);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          'stroke-width': strokeWidth,
          stroke: color
        },
        nameAttr: 'data-lucide',
        root: el
      });
    };
    draw();
    if (!window.lucide) {
      const t = setInterval(() => {
        if (window.lucide) {
          draw();
          clearInterval(t);
        }
      }, 60);
      return () => clearInterval(t);
    }
  }, [name, size, strokeWidth, color]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      flex: '0 0 auto',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const buttonTone = {
  primary: {
    bg: 'var(--ink-900)',
    fg: 'var(--steel-050)',
    bd: 'var(--ink-900)',
    hover: 'var(--ink-700)'
  },
  danger: {
    bg: 'var(--case-red)',
    fg: '#F4EDE9',
    bd: 'var(--case-red-dark)',
    hover: 'var(--case-red-dark)'
  },
  verify: {
    bg: 'var(--verified-green)',
    fg: '#EDF2EE',
    bd: 'var(--verified-green-dark)',
    hover: 'var(--verified-green-dark)'
  },
  review: {
    bg: 'var(--pending-amber)',
    fg: 'var(--ink-900)',
    bd: 'var(--pending-amber-dark)',
    hover: 'var(--pending-amber-dark)'
  },
  plate: {
    bg: 'var(--steel-100)',
    fg: 'var(--ink-900)',
    bd: 'var(--ink-900)',
    hover: 'var(--steel-200)'
  },
  ghost: {
    bg: 'transparent',
    fg: 'var(--ink-900)',
    bd: 'var(--ink-900)',
    hover: 'rgba(19,17,16,.10)'
  }
};
const buttonSize = {
  sm: {
    h: 'var(--control-h-sm)',
    px: 10,
    fs: 10,
    tr: '.14em',
    ic: 13
  },
  md: {
    h: 'var(--control-h-md)',
    px: 14,
    fs: 11,
    tr: '.16em',
    ic: 15
  },
  lg: {
    h: 'var(--control-h-lg)',
    px: 20,
    fs: 13,
    tr: '.16em',
    ic: 18
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  disabled = false,
  block = false,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const t = buttonTone[variant] || buttonTone.primary;
  const s = buttonSize[size] || buttonSize.md;
  const shadow = disabled ? 'none' : down ? '1px 1px 0 rgba(19,17,16,.34)' : hover ? 'var(--shadow-lift-hover)' : 'var(--shadow-hard-sm)';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
      display: block ? 'flex' : 'inline-flex',
      width: block ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-3)',
      height: s.h,
      padding: `0 ${s.px}px`,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-mono)',
      fontSize: s.fs,
      fontWeight: 600,
      letterSpacing: s.tr,
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      background: disabled ? 'var(--steel-300)' : hover && !down ? t.hover : t.bg,
      color: disabled ? 'var(--steel-500)' : t.fg,
      border: `1px solid ${disabled ? 'var(--steel-500)' : t.bd}`,
      borderRadius: 0,
      boxShadow: shadow,
      transform: down ? 'translate(1px,1px)' : 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.ic
  }) : null, /*#__PURE__*/React.createElement("span", null, children), iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.ic
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const iconButtonSize = {
  sm: 26,
  md: 34,
  lg: 44
};
function IconButton({
  icon,
  label,
  size = 'md',
  variant = 'plate',
  disabled = false,
  active = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const box = iconButtonSize[size] || 34;
  const tone = variant === 'ink' ? {
    bg: 'var(--ink-900)',
    fg: 'var(--steel-050)',
    hover: 'var(--ink-700)'
  } : variant === 'danger' ? {
    bg: 'var(--case-red)',
    fg: '#F4EDE9',
    hover: 'var(--case-red-dark)'
  } : variant === 'ghost' ? {
    bg: 'transparent',
    fg: 'var(--ink-900)',
    hover: 'rgba(19,17,16,.10)'
  } : {
    bg: 'var(--steel-100)',
    fg: 'var(--ink-900)',
    hover: 'var(--steel-200)'
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
      width: box,
      height: box,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: disabled ? 'var(--steel-300)' : active ? 'var(--ink-900)' : hover && !down ? tone.hover : tone.bg,
      color: disabled ? 'var(--steel-500)' : active ? 'var(--steel-050)' : tone.fg,
      border: '1px solid var(--ink-900)',
      borderRadius: 0,
      padding: 0,
      boxShadow: disabled ? 'none' : down ? '1px 1px 0 rgba(19,17,16,.34)' : 'var(--shadow-hard-sm)',
      transform: down ? 'translate(1px,1px)' : 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(box * 0.46)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Panel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Panel({
  children,
  title,
  code,
  actions,
  tone = 'panel',
  flush = false,
  style,
  bodyStyle,
  ...rest
}) {
  const surface = tone === 'docket' ? 'var(--surface-docket)' : tone === 'ink' ? 'var(--ink-800)' : tone === 'raised' ? 'var(--surface-panel-raised)' : 'var(--surface-panel)';
  const fg = tone === 'ink' ? 'var(--text-inverse)' : 'var(--text-primary)';
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      background: surface,
      color: fg,
      border: '1px solid var(--ink-900)',
      borderRadius: 0,
      boxShadow: 'var(--shadow-hard-md)',
      ...style
    }
  }, rest), (title || actions) && /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-5)',
      minHeight: 30,
      padding: '0 var(--space-5)',
      background: tone === 'ink' ? 'var(--ink-900)' : 'var(--ink-900)',
      color: 'var(--steel-050)',
      borderBottom: '1px solid var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-4)',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, title), code ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '.1em',
      color: 'var(--steel-400)'
    }
  }, code) : null), actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, actions) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: flush ? 0 : 'var(--panel-pad)',
      ...bodyStyle
    }
  }, children));
}
Object.assign(__ds_scope, { Panel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Panel.jsx", error: String((e && e.message) || e) }); }

// components/core/Rule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Rule({
  variant = 'perforated',
  label,
  style,
  ...rest
}) {
  const border = variant === 'solid' ? '1px solid var(--ink-900)' : variant === 'heavy' ? '2px solid var(--ink-900)' : variant === 'hairline' ? '1px solid var(--steel-400)' : '1px dashed var(--ink-900)';
  if (!label) return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      height: 0,
      margin: 0,
      border: 0,
      borderTop: border,
      ...style
    }
  }, rest));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--steel-700)',
      whiteSpace: 'nowrap'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 0,
      borderTop: border
    }
  }));
}
Object.assign(__ds_scope, { Rule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rule.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  tone = 'neutral',
  icon,
  code,
  style,
  ...rest
}) {
  const map = {
    neutral: {
      bg: 'rgba(19,17,16,.07)',
      bd: 'var(--steel-700)',
      fg: 'var(--ink-800)'
    },
    ink: {
      bg: 'var(--ink-900)',
      bd: 'var(--ink-900)',
      fg: 'var(--steel-050)'
    },
    fail: {
      bg: 'var(--case-red-wash)',
      bd: 'var(--case-red)',
      fg: 'var(--case-red-dark)'
    },
    pass: {
      bg: 'var(--verified-green-wash)',
      bd: 'var(--verified-green)',
      fg: 'var(--verified-green-dark)'
    },
    review: {
      bg: 'var(--pending-amber-wash)',
      bd: 'var(--pending-amber-dark)',
      fg: 'var(--pending-amber-dark)'
    }
  };
  const t = map[tone] || map.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      height: 20,
      padding: '0 6px',
      background: t.bg,
      border: `1px solid ${t.bd}`,
      color: t.fg,
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      borderRadius: 0,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 11
  }) : null, code ? /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.62
    }
  }, code) : null, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DataTable({
  columns = [],
  rows = [],
  onRowClick,
  selectedId,
  zebra = true,
  style,
  ...rest
}) {
  const [hoverId, setHoverId] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      overflowX: 'auto',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--data-sm)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      textAlign: c.align || 'left',
      padding: 'var(--space-4) var(--space-5)',
      background: 'var(--ink-900)',
      color: 'var(--steel-100)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      width: c.width,
      borderRight: '1px solid var(--ink-700)'
    }
  }, c.header)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => {
    const active = selectedId !== undefined && r.id === selectedId;
    const hovered = hoverId === (r.id ?? i);
    return /*#__PURE__*/React.createElement("tr", {
      key: r.id ?? i,
      onClick: onRowClick ? () => onRowClick(r) : undefined,
      onMouseEnter: () => setHoverId(r.id ?? i),
      onMouseLeave: () => setHoverId(null),
      style: {
        background: active ? 'rgba(184,134,47,.22)' : hovered && onRowClick ? 'rgba(19,17,16,.07)' : zebra && i % 2 ? 'rgba(19,17,16,.035)' : 'transparent',
        borderBottom: '1px solid var(--steel-300)',
        cursor: onRowClick ? 'pointer' : 'default'
      }
    }, columns.map(c => /*#__PURE__*/React.createElement("td", {
      key: c.key,
      style: {
        textAlign: c.align || 'left',
        padding: 'var(--space-4) var(--space-5)',
        color: 'var(--text-data)',
        letterSpacing: 'var(--data-tracking)',
        fontVariantNumeric: 'tabular-nums',
        verticalAlign: 'middle',
        whiteSpace: c.wrap ? 'normal' : 'nowrap'
      }
    }, c.render ? c.render(r) : r[c.key])));
  }))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/EvidenceSlot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function EvidenceSlot({
  src,
  caption,
  code,
  status,
  ratio = '4 / 3',
  crosshair = true,
  placeholder = 'EVIDENCE IMAGE',
  style,
  ...rest
}) {
  const c = status === 'fail' ? 'var(--case-red)' : status === 'pass' ? 'var(--verified-green)' : status === 'review' ? 'var(--pending-amber)' : 'var(--ink-900)';
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio,
      overflow: 'hidden',
      background: 'var(--steel-300)',
      border: `1px solid ${c}`,
      boxShadow: 'var(--shadow-hard-sm)'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: caption || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'grayscale(.35) contrast(1.06)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-4)',
      background: 'repeating-linear-gradient(45deg, rgba(19,17,16,.055) 0 6px, transparent 6px 12px)',
      color: 'var(--steel-600)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "image-off",
    size: 20,
    color: "var(--steel-600)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '.16em'
    }
  }, placeholder)), crosshair ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 6,
      left: 6,
      width: 12,
      height: 12,
      borderTop: `2px solid ${c}`,
      borderLeft: `2px solid ${c}`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 6,
      right: 6,
      width: 12,
      height: 12,
      borderTop: `2px solid ${c}`,
      borderRight: `2px solid ${c}`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 6,
      left: 6,
      width: 12,
      height: 12,
      borderBottom: `2px solid ${c}`,
      borderLeft: `2px solid ${c}`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 6,
      right: 6,
      width: 12,
      height: 12,
      borderBottom: `2px solid ${c}`,
      borderRight: `2px solid ${c}`
    }
  })) : null, code ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      padding: '2px 6px',
      background: 'var(--ink-900)',
      color: 'var(--steel-100)',
      fontFamily: 'var(--font-mono)',
      fontSize: 9,
      fontWeight: 600,
      letterSpacing: '.16em'
    }
  }, code) : null), caption ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--space-3)',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--steel-700)'
    }
  }, caption) : null);
}
Object.assign(__ds_scope, { EvidenceSlot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/EvidenceSlot.jsx", error: String((e && e.message) || e) }); }

// components/data/FieldRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FieldRow({
  label,
  value,
  code,
  status,
  note,
  dotted = true,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const c = status === 'fail' ? 'var(--case-red)' : status === 'pass' ? 'var(--verified-green)' : status === 'review' ? 'var(--pending-amber-dark)' : 'var(--steel-500)';
  const glyph = status === 'fail' ? 'x' : status === 'pass' ? 'check' : status === 'review' ? 'clock' : 'minus';
  const missing = status === 'fail' && (value === undefined || value === null || value === '');
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-4)',
      minHeight: 'var(--row-h)',
      padding: 'var(--space-4) var(--space-5)',
      borderBottom: '1px solid var(--steel-300)',
      background: hover && onClick ? 'rgba(19,17,16,.055)' : 'transparent',
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      flex: '0 0 auto',
      alignSelf: 'center'
    }
  }, status ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: glyph,
    size: 14,
    strokeWidth: 2.5,
    color: c
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--steel-700)',
      whiteSpace: 'nowrap'
    }
  }, label), dotted ? /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 0,
      marginBottom: 3,
      borderBottom: '1px dotted var(--steel-400)',
      minWidth: 12
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-4)',
      textAlign: 'right'
    }
  }, code ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '.08em',
      color: 'var(--steel-500)',
      whiteSpace: 'nowrap'
    }
  }, code) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--data-md)',
      letterSpacing: 'var(--data-tracking)',
      fontVariantNumeric: 'tabular-nums',
      color: missing ? 'var(--case-red)' : 'var(--text-data)',
      fontWeight: missing ? 700 : 500,
      textDecoration: missing ? 'none' : 'none'
    }
  }, missing ? 'ABSENT' : value)), note ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: '100%',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-xs)',
      color: 'var(--steel-600)'
    }
  }, note) : null);
}
Object.assign(__ds_scope, { FieldRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/FieldRow.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  hint,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  tone = 'ink',
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const fill = tone === 'fail' ? 'var(--case-red)' : tone === 'pass' ? 'var(--verified-green)' : 'var(--ink-900)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    onChange: e => {
      if (!isControlled) setInternal(e.target.checked);
      onChange && onChange(e);
    },
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      flex: '0 0 auto',
      marginTop: 1,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: disabled ? 'var(--steel-300)' : on ? fill : 'var(--steel-050)',
      border: `1px solid ${disabled ? 'var(--steel-500)' : 'var(--ink-900)'}`,
      borderRadius: 0,
      boxShadow: on ? 'none' : 'var(--shadow-punch)'
    }
  }, on ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 12,
    strokeWidth: 2.5,
    color: "var(--steel-050)"
  }) : null), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-sm)',
      lineHeight: 1.3,
      color: disabled ? 'var(--steel-500)' : 'var(--text-primary)'
    }
  }, label), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 2,
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--steel-600)'
    }
  }, hint) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  code,
  value,
  defaultValue,
  placeholder,
  onChange,
  mono = false,
  status,
  hint,
  icon,
  disabled = false,
  readOnly = false,
  size = 'md',
  style,
  inputStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'sm' ? 'var(--control-h-sm)' : size === 'lg' ? 'var(--control-h-lg)' : 'var(--control-h-md)';
  const statusColor = status === 'fail' ? 'var(--case-red)' : status === 'pass' ? 'var(--verified-green)' : status === 'review' ? 'var(--pending-amber-dark)' : null;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-3)',
      marginBottom: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--steel-700)'
    }
  }, label), code ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: 'var(--steel-500)',
      letterSpacing: '.08em'
    }
  }, code) : null) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      height: h,
      padding: '0 10px',
      background: disabled ? 'var(--steel-200)' : 'var(--steel-050)',
      border: `1px solid ${statusColor || (focus ? 'var(--ink-900)' : 'var(--steel-600)')}`,
      boxShadow: focus ? 'inset 0 0 0 1px var(--pending-amber)' : 'var(--shadow-punch)',
      borderRadius: 0
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14,
    color: "var(--steel-600)"
  }) : null, /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    onChange: onChange,
    disabled: disabled,
    readOnly: readOnly,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 'none',
      background: 'transparent',
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
      fontSize: mono ? 'var(--data-md)' : 'var(--body-md)',
      letterSpacing: mono ? 'var(--data-tracking)' : 0,
      color: disabled ? 'var(--steel-500)' : 'var(--text-primary)',
      ...inputStyle
    }
  }, rest)), statusColor ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: status === 'pass' ? 'check' : status === 'fail' ? 'x' : 'clock',
    size: 14,
    color: statusColor
  }) : null), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 'var(--space-3)',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: statusColor || 'var(--steel-600)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  name,
  options = [],
  value,
  defaultValue,
  onChange,
  direction = 'column',
  disabled = false,
  style
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const current = isControlled ? value : internal;
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? 'var(--space-7)' : 'var(--space-4)',
      ...style
    }
  }, options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    const on = current === opt.value;
    return /*#__PURE__*/React.createElement("label", {
      key: opt.value,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-4)',
        cursor: disabled ? 'not-allowed' : 'pointer'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      checked: on,
      disabled: disabled,
      onChange: () => {
        if (!isControlled) setInternal(opt.value);
        onChange && onChange(opt.value);
      },
      style: {
        position: 'absolute',
        opacity: 0,
        width: 0,
        height: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 16,
        height: 16,
        flex: '0 0 auto',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--steel-050)',
        border: '1px solid var(--ink-900)',
        borderRadius: 0,
        boxShadow: 'var(--shadow-punch)'
      }
    }, on ? /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        background: disabled ? 'var(--steel-500)' : 'var(--ink-900)'
      }
    }) : null), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--body-sm)',
        color: disabled ? 'var(--steel-500)' : 'var(--text-primary)'
      }
    }, opt.label));
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  code,
  value,
  defaultValue,
  onChange,
  options = [],
  disabled = false,
  size = 'md',
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'sm' ? 'var(--control-h-sm)' : size === 'lg' ? 'var(--control-h-lg)' : 'var(--control-h-md)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-3)',
      marginBottom: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--steel-700)'
    }
  }, label), code ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: 'var(--steel-500)'
    }
  }, code) : null) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      height: h,
      paddingRight: 8,
      background: disabled ? 'var(--steel-200)' : 'var(--steel-050)',
      border: `1px solid ${focus ? 'var(--ink-900)' : 'var(--steel-600)'}`,
      boxShadow: focus ? 'inset 0 0 0 1px var(--pending-amber)' : 'var(--shadow-punch)',
      borderRadius: 0
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      height: '100%',
      padding: '0 10px',
      border: 0,
      outline: 'none',
      background: 'transparent',
      appearance: 'none',
      WebkitAppearance: 'none',
      borderRadius: 0,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--data-sm)',
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      color: disabled ? 'var(--steel-500)' : 'var(--text-primary)',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, rest), options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 14,
    color: "var(--ink-900)"
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Toggle({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: e => {
      if (!isControlled) setInternal(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 44,
      height: 20,
      flex: '0 0 auto',
      background: disabled ? 'var(--steel-300)' : on ? 'var(--verified-green)' : 'var(--steel-300)',
      border: '1px solid var(--ink-900)',
      borderRadius: 0,
      boxShadow: 'var(--shadow-punch)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -1,
      left: on ? 23 : -1,
      width: 22,
      height: 20,
      background: disabled ? 'var(--steel-400)' : 'var(--steel-050)',
      border: '1px solid var(--ink-900)',
      boxShadow: '1px 1px 0 rgba(19,17,16,.34)',
      transition: 'left var(--dur-fast) var(--ease-mech)'
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      color: disabled ? 'var(--steel-500)' : 'var(--text-primary)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SidebarNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SidebarNav({
  items = [],
  value,
  onChange,
  header,
  footer,
  width = 'var(--rail-w)',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      width: width,
      flex: '0 0 auto',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--ink-800)',
      backgroundImage: 'var(--texture-metal-dark)',
      backgroundSize: 'var(--texture-metal-size)',
      borderRight: '1px solid var(--ink-900)',
      color: 'var(--steel-100)',
      ...style
    }
  }, rest), header ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6) var(--space-6) var(--space-5)',
      borderBottom: '1px solid var(--ink-700)'
    }
  }, header) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 'var(--space-5) 0',
      display: 'flex',
      flexDirection: 'column'
    }
  }, items.map(it => {
    if (it.section) {
      return /*#__PURE__*/React.createElement("div", {
        key: 's-' + it.section,
        style: {
          padding: 'var(--space-6) var(--space-6) var(--space-3)',
          fontFamily: 'var(--font-mono)',
          fontSize: 9,
          fontWeight: 600,
          letterSpacing: '.24em',
          textTransform: 'uppercase',
          color: 'var(--steel-500)'
        }
      }, it.section);
    }
    const on = value === it.value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      type: "button",
      onClick: () => onChange && onChange(it.value),
      onMouseEnter: () => setHover(it.value),
      onMouseLeave: () => setHover(null),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-5)',
        width: '100%',
        height: 34,
        padding: '0 var(--space-6)',
        textAlign: 'left',
        background: on ? 'var(--case-red)' : hover === it.value ? 'rgba(239,237,233,.10)' : 'transparent',
        color: on ? '#F6EFEC' : 'var(--steel-200)',
        border: 0,
        borderLeft: '3px solid ' + (on ? 'var(--ink-900)' : 'transparent'),
        borderRadius: 0,
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '.13em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'var(--transition-control)'
      }
    }, it.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 15
    }) : null, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, it.label), it.count !== undefined ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontVariantNumeric: 'tabular-nums',
        color: on ? '#F6EFEC' : 'var(--steel-400)'
      }
    }, it.count) : null);
  })), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5) var(--space-6)',
      borderTop: '1px solid var(--ink-700)'
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { SidebarNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SidebarNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  style,
  ...rest
}) {
  const isControlled = value !== undefined;
  const first = tabs[0] && (typeof tabs[0] === 'string' ? tabs[0] : tabs[0].value);
  const [internal, setInternal] = React.useState(defaultValue ?? first);
  const current = isControlled ? value : internal;
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 0,
      borderBottom: '2px solid var(--ink-900)',
      ...style
    }
  }, rest), tabs.map(t => {
    const tab = typeof t === 'string' ? {
      value: t,
      label: t
    } : t;
    const on = current === tab.value;
    return /*#__PURE__*/React.createElement("button", {
      key: tab.value,
      role: "tab",
      "aria-selected": on,
      type: "button",
      onClick: () => {
        if (!isControlled) setInternal(tab.value);
        onChange && onChange(tab.value);
      },
      onMouseEnter: () => setHover(tab.value),
      onMouseLeave: () => setHover(null),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        height: 32,
        padding: '0 14px',
        marginBottom: -2,
        background: on ? 'var(--ink-900)' : hover === tab.value ? 'rgba(19,17,16,.10)' : 'transparent',
        color: on ? 'var(--steel-050)' : 'var(--text-primary)',
        border: '1px solid ' + (on ? 'var(--ink-900)' : 'transparent'),
        borderBottom: 'none',
        borderRadius: 0,
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'var(--transition-control)'
      }
    }, tab.label, tab.count !== undefined ? /*#__PURE__*/React.createElement("span", {
      style: {
        paddingLeft: 6,
        marginLeft: 4,
        borderLeft: '1px solid ' + (on ? 'var(--steel-400)' : 'var(--steel-500)'),
        color: on ? 'var(--steel-300)' : 'var(--steel-600)'
      }
    }, tab.count) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = false,
  title,
  code,
  children,
  footer,
  onClose,
  width = 520,
  style,
  ...rest
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === 'string' ? title : undefined,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 90,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(19,17,16,.62)'
    }
  }), /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      width: width,
      maxWidth: '100%',
      maxHeight: '86vh',
      overflow: 'auto',
      background: 'var(--surface-panel-raised)',
      border: '2px solid var(--ink-900)',
      boxShadow: 'var(--shadow-hard-lg)',
      borderRadius: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-5)',
      padding: 'var(--space-4) var(--space-4) var(--space-4) var(--space-6)',
      background: 'var(--ink-900)',
      color: 'var(--steel-050)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-4)',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.16em',
      textTransform: 'uppercase'
    }
  }, title), code ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '.1em',
      color: 'var(--steel-400)'
    }
  }, code) : null), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    size: "sm",
    variant: "ghost",
    onClick: onClose,
    style: {
      color: 'var(--steel-050)',
      borderColor: 'var(--steel-500)',
      boxShadow: 'none'
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--panel-pad-lg)'
    }
  }, children), footer ? /*#__PURE__*/React.createElement("footer", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-4)',
      padding: 'var(--space-5) var(--panel-pad-lg)',
      borderTop: '1px solid var(--steel-400)',
      background: 'var(--steel-100)'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/status/Notice.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Notice({
  children,
  title,
  tone = 'fail',
  code,
  action,
  style,
  ...rest
}) {
  const map = {
    fail: {
      c: 'var(--case-red)',
      wash: 'var(--case-red-wash)',
      icon: 'triangle-alert'
    },
    pass: {
      c: 'var(--verified-green)',
      wash: 'var(--verified-green-wash)',
      icon: 'shield-check'
    },
    review: {
      c: 'var(--pending-amber-dark)',
      wash: 'var(--pending-amber-wash)',
      icon: 'clock'
    },
    info: {
      c: 'var(--ink-900)',
      wash: 'rgba(19,17,16,.07)',
      icon: 'info'
    }
  };
  const t = map[tone] || map.fail;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      padding: 'var(--space-5)',
      background: t.wash,
      border: '1px solid var(--ink-900)',
      borderLeft: `4px solid ${t.c}`,
      borderRadius: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 17,
    strokeWidth: 2,
    color: t.c,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-4)',
      marginBottom: children ? 'var(--space-3)' : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: t.c
    }
  }, title), code ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '.08em',
      color: 'var(--steel-600)'
    }
  }, code) : null) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-sm)',
      lineHeight: 1.45,
      color: 'var(--text-secondary)'
    }
  }, children) : null), action ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto'
    }
  }, action) : null);
}
Object.assign(__ds_scope, { Notice });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/status/Notice.jsx", error: String((e && e.message) || e) }); }

// components/status/ScoreMeter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ScoreMeter({
  value = 0,
  total = 100,
  label,
  segments = 20,
  tone,
  showValue = true,
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(1, total ? value / total : 0));
  const auto = pct >= 0.9 ? 'pass' : pct >= 0.6 ? 'review' : 'fail';
  const key = tone || auto;
  const color = key === 'pass' ? 'var(--verified-green)' : key === 'review' ? 'var(--pending-amber)' : 'var(--case-red)';
  const lit = Math.round(pct * segments);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...style
    }
  }, rest), (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 'var(--space-5)',
      marginBottom: 'var(--space-3)'
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--steel-700)'
    }
  }, label) : /*#__PURE__*/React.createElement("span", null), showValue ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--data-md)',
      fontWeight: 600,
      letterSpacing: '.04em',
      color: color,
      fontVariantNumeric: 'tabular-nums'
    }
  }, value, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--steel-600)'
    }
  }, "/", total)) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2,
      height: 12,
      border: '1px solid var(--ink-900)',
      padding: 1,
      background: 'var(--steel-050)',
      boxShadow: 'var(--shadow-punch)'
    }
  }, Array.from({
    length: segments
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 1,
      background: i < lit ? color : 'var(--steel-200)'
    }
  }))));
}
Object.assign(__ds_scope, { ScoreMeter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/status/ScoreMeter.jsx", error: String((e && e.message) || e) }); }

// components/status/Stamp.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Stamp({
  children,
  tone = 'fail',
  rotate = -6,
  size = 'md',
  style,
  ...rest
}) {
  const c = tone === 'pass' ? 'var(--verified-green)' : tone === 'review' ? 'var(--pending-amber-dark)' : tone === 'ink' ? 'var(--ink-900)' : 'var(--case-red)';
  const m = size === 'lg' ? {
    fs: 26,
    pad: '8px 16px',
    bw: 3
  } : size === 'sm' ? {
    fs: 12,
    pad: '3px 8px',
    bw: 2
  } : {
    fs: 17,
    pad: '5px 12px',
    bw: 2.5
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      padding: m.pad,
      border: `${m.bw}px solid ${c}`,
      color: c,
      fontFamily: 'var(--font-display)',
      fontSize: m.fs,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      lineHeight: 1.05,
      transform: `rotate(${rotate}deg)`,
      opacity: 0.88,
      borderRadius: 0,
      mixBlendMode: 'multiply',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Stamp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/status/Stamp.jsx", error: String((e && e.message) || e) }); }

// components/status/StatusBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const statusMap = {
  fail: {
    bg: 'var(--case-red)',
    fg: '#F6EFEC',
    icon: 'triangle-alert',
    text: 'VIOLATION'
  },
  pass: {
    bg: 'var(--verified-green)',
    fg: '#EEF3EF',
    icon: 'check',
    text: 'COMPLIANT'
  },
  review: {
    bg: 'var(--pending-amber)',
    fg: 'var(--ink-900)',
    icon: 'clock',
    text: 'UNDER REVIEW'
  },
  void: {
    bg: 'var(--steel-500)',
    fg: 'var(--steel-050)',
    icon: 'minus',
    text: 'NOT APPLICABLE'
  },
  queued: {
    bg: 'var(--ink-900)',
    fg: 'var(--steel-050)',
    icon: 'scan-line',
    text: 'QUEUED'
  }
};
function StatusBadge({
  status = 'fail',
  children,
  size = 'md',
  showIcon = true,
  count,
  style,
  ...rest
}) {
  const s = statusMap[status] || statusMap.fail;
  const big = size === 'lg';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: big ? 'var(--space-4)' : 'var(--space-3)',
      height: big ? 28 : 22,
      padding: big ? '0 10px' : '0 7px',
      background: s.bg,
      color: s.fg,
      border: '1px solid var(--ink-900)',
      borderRadius: 0,
      fontFamily: 'var(--font-mono)',
      fontSize: big ? 12 : 10,
      fontWeight: 700,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), showIcon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: big ? 15 : 12,
    strokeWidth: 2.25
  }) : null, children || s.text, count !== undefined ? /*#__PURE__*/React.createElement("span", {
    style: {
      paddingLeft: 5,
      marginLeft: 3,
      borderLeft: `1px solid ${s.fg}`,
      opacity: 0.85
    }
  }, count) : null);
}
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/status/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// ui_kits/scanner/AppShell.jsx
try { (() => {
(() => {
  const {
    SidebarNav,
    Wordmark,
    Button,
    IconButton,
    Icon,
    Input,
    StatusBadge
  } = window.MANIFESTDesignSystem_e5cbed;
  function TopBar({
    title,
    code,
    right
  }) {
    return /*#__PURE__*/React.createElement("header", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-6)',
        height: 52,
        flex: '0 0 auto',
        padding: '0 var(--space-8)',
        background: 'var(--steel-100)',
        borderBottom: '2px solid var(--ink-900)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 'var(--space-5)',
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '.18em',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap'
      }
    }, title), code ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '.1em',
        color: 'var(--steel-600)',
        whiteSpace: 'nowrap'
      }
    }, code) : null), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), right);
  }
  function AppShell({
    view,
    onView,
    title,
    code,
    topRight,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        height: '100%',
        minHeight: 0
      }
    }, /*#__PURE__*/React.createElement(SidebarNav, {
      value: view,
      onChange: onView,
      header: /*#__PURE__*/React.createElement(Wordmark, {
        size: "sm",
        tone: "inverse",
        subline: "LEGAL METROLOGY"
      }),
      footer: /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-4)'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 22,
          height: 22,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--steel-200)',
          border: '1px solid var(--ink-900)',
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          fontWeight: 700
        }
      }, "RI"), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          letterSpacing: '.12em',
          color: 'var(--steel-300)'
        }
      }, "INSP. R. IYER")),
      items: [{
        section: 'Case load'
      }, {
        value: 'queue',
        label: 'Scan queue',
        icon: 'scan-line',
        count: 214
      }, {
        value: 'violations',
        label: 'Violations',
        icon: 'triangle-alert',
        count: 38
      }, {
        value: 'cleared',
        label: 'Cleared',
        icon: 'shield-check',
        count: 1102
      }, {
        section: 'Field work'
      }, {
        value: 'capture',
        label: 'Product scan',
        icon: 'camera'
      }, {
        value: 'docket',
        label: 'Notices',
        icon: 'file-text',
        count: 7
      }, {
        section: 'Reference'
      }, {
        value: 'rules',
        label: 'Rule book',
        icon: 'book-marked'
      }, {
        value: 'settings',
        label: 'Settings',
        icon: 'sliders-horizontal'
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(TopBar, {
      title: title,
      code: code,
      right: topRight
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        overflow: 'auto'
      }
    }, children)));
  }
  Object.assign(window, {
    AppShell,
    TopBar
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/scanner/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/scanner/CaseFile.jsx
try { (() => {
(() => {
  const {
    Panel,
    FieldRow,
    StatusBadge,
    Stamp,
    ScoreMeter,
    Notice,
    Tabs,
    Button,
    IconButton,
    Tag,
    EvidenceSlot,
    Rule,
    BurnHeading,
    Dialog,
    Select,
    Input,
    Radio,
    Checkbox
  } = window.MANIFESTDesignSystem_e5cbed;
  function CaseFile({
    caseId,
    onBack
  }) {
    const [tab, setTab] = React.useState('dec');
    const [raise, setRaise] = React.useState(false);
    const c = window.MF_DATA.cases.find(x => x.id === caseId) || window.MF_DATA.cases[0];
    const decs = window.MF_DATA.declarations['4471-B'];
    const present = decs.filter(d => d.status === 'pass').length;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'var(--space-8)',
        display: 'grid',
        gap: 'var(--space-7)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 'var(--space-8)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: onBack,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        background: 'none',
        border: 0,
        padding: 0,
        marginBottom: 10,
        cursor: 'pointer',
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: '.16em',
        textTransform: 'uppercase',
        color: 'var(--steel-700)'
      }
    }, "\u2190 Back to queue"), /*#__PURE__*/React.createElement(BurnHeading, {
      as: "h1",
      size: "lg",
      roughness: "heavy"
    }, "Case file ", c.id), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-5)',
        marginTop: 10
      }
    }, /*#__PURE__*/React.createElement(StatusBadge, {
      status: c.status,
      count: c.absent || undefined,
      size: "lg"
    }), /*#__PURE__*/React.createElement(Tag, {
      code: "SKU"
    }, c.sku), /*#__PURE__*/React.createElement(Tag, {
      tone: "ink"
    }, c.channel), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '.1em',
        color: 'var(--steel-700)'
      }
    }, "SCANNED ", c.scanned, " \xB7 INSP ", c.inspector))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "plate",
      icon: "printer"
    }, "Docket"), /*#__PURE__*/React.createElement(Button, {
      variant: "verify",
      icon: "check"
    }, "Clear"), /*#__PURE__*/React.createElement(Button, {
      variant: "danger",
      icon: "stamp",
      onClick: () => setRaise(true)
    }, "Raise violation"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) 300px',
        gap: 'var(--space-7)',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      value: tab,
      onChange: setTab,
      tabs: [{
        value: 'dec',
        label: 'Declarations',
        count: decs.length
      }, {
        value: 'find',
        label: 'Findings',
        count: window.MF_DATA.findings.length
      }, {
        value: 'exh',
        label: 'Evidence',
        count: 3
      }, {
        value: 'hist',
        label: 'History'
      }]
    }), tab === 'dec' && /*#__PURE__*/React.createElement(Panel, {
      title: c.title,
      code: 'R-6(1) · ' + decs.length + ' checks',
      flush: true
    }, decs.map(d => /*#__PURE__*/React.createElement(FieldRow, {
      key: d.code,
      label: d.label,
      code: d.code,
      value: d.value,
      status: d.status,
      note: d.note
    }))), tab === 'find' && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 'var(--space-5)'
      }
    }, window.MF_DATA.findings.map(fd => /*#__PURE__*/React.createElement(Notice, {
      key: fd.code,
      tone: "fail",
      title: fd.title,
      code: fd.code,
      action: /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        variant: "ghost"
      }, "Cite")
    }, fd.body)), /*#__PURE__*/React.createElement(Notice, {
      tone: "review",
      title: "Country of origin unverified",
      code: "Rule 6(1)(g)"
    }, "Declared as \"India\" in the listing text but absent from the pack imagery. Requires physical inspection.")), tab === 'exh' && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement(EvidenceSlot, {
      code: "EXH-01",
      caption: "Listing page capture",
      status: "fail",
      placeholder: "LISTING CAPTURE"
    }), /*#__PURE__*/React.createElement(EvidenceSlot, {
      code: "EXH-02",
      caption: "Front of pack",
      status: "fail",
      placeholder: "PACK FRONT"
    }), /*#__PURE__*/React.createElement(EvidenceSlot, {
      code: "EXH-03",
      caption: "Declaration panel",
      status: "review",
      placeholder: "LABEL CROP"
    })), tab === 'hist' && /*#__PURE__*/React.createElement(Panel, {
      title: "Case history",
      flush: true
    }, [['18 AUG 09:52', 'Listing ingested from AMAZON.IN batch 118'], ['18 AUG 09:52', 'Automated scan completed — 4 declarations absent'], ['18 AUG 09:54', 'Assigned to INSP R. IYER'], ['18 AUG 10:02', 'Evidence EXH-01 attached']].map((h, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        gap: 'var(--space-6)',
        padding: 'var(--space-4) var(--space-5)',
        borderBottom: '1px solid var(--steel-300)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '.08em',
        color: 'var(--steel-600)',
        width: 110,
        flex: '0 0 auto'
      }
    }, h[0]), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--body-sm)'
      }
    }, h[1]))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement(Panel, {
      title: "Compliance",
      code: c.id
    }, /*#__PURE__*/React.createElement(ScoreMeter, {
      label: "Declarations present",
      value: present,
      total: decs.length
    }), /*#__PURE__*/React.createElement(Rule, {
      style: {
        margin: '14px 0'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 8
      }
    }, [['Statute', 'LM Rules 2011'], ['Rule set', 'R-6(1) PACKAGED'], ['Channel', c.channel], ['Seller', c.brand]].map(r => /*#__PURE__*/React.createElement("div", {
      key: r[0],
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: 'var(--steel-700)'
      }
    }, r[0]), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        borderBottom: '1px dotted var(--steel-400)',
        marginBottom: 3
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        letterSpacing: '.04em'
      }
    }, r[1])))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement(Stamp, {
      tone: "fail",
      size: "md",
      rotate: -7
    }, "Non-compliant"))), /*#__PURE__*/React.createElement(Panel, {
      title: "Next in batch",
      flush: true
    }, window.MF_DATA.cases.slice(1, 4).map(n => /*#__PURE__*/React.createElement("div", {
      key: n.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-4)',
        padding: 'var(--space-4) var(--space-5)',
        borderBottom: '1px solid var(--steel-300)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        fontWeight: 700
      }
    }, n.id), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        color: 'var(--text-secondary)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, n.brand), /*#__PURE__*/React.createElement(StatusBadge, {
      status: n.status,
      showIcon: false
    })))))), /*#__PURE__*/React.createElement(Dialog, {
      open: raise,
      title: "Raise violation",
      code: "Form 27",
      width: 520,
      onClose: () => setRaise(false),
      footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        size: "sm",
        onClick: () => setRaise(false)
      }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
        variant: "danger",
        size: "sm",
        icon: "stamp",
        onClick: () => setRaise(false)
      }, "Raise & notify"))
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement(Select, {
      label: "Rules cited",
      options: ['R-6(1)(d) NET QUANTITY', 'R-6(1)(e) RETAIL SALE PRICE', 'R-6(1)(f) CONSUMER CARE']
    }), /*#__PURE__*/React.createElement(Radio, {
      name: "sev",
      direction: "row",
      options: ['Minor', 'Major', 'Repeat offence'],
      defaultValue: "Major"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Inspector note",
      placeholder: "Observed on listing page and pack front"
    }), /*#__PURE__*/React.createElement(Checkbox, {
      label: "Serve notice to seller on raise",
      hint: "Form 27 \xB7 e-mail on record",
      defaultChecked: true
    }))));
  }
  Object.assign(window, {
    CaseFile
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/scanner/CaseFile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/scanner/LoginScreen.jsx
try { (() => {
(() => {
  const {
    Button,
    Input,
    Wordmark,
    BurnHeading,
    Panel,
    Rule,
    Checkbox
  } = window.MANIFESTDesignSystem_e5cbed;
  function LoginScreen({
    onEnter
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) 420px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "mf-plate-dark",
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 'var(--space-11)'
      }
    }, /*#__PURE__*/React.createElement(Wordmark, {
      size: "md",
      tone: "inverse",
      subline: "LEGAL METROLOGY AUDIT"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BurnHeading, {
      as: "h1",
      size: "xl",
      roughness: "heavy"
    }, "Every pack", /*#__PURE__*/React.createElement("br", null), "declares or", /*#__PURE__*/React.createElement("br", null), "it answers"), /*#__PURE__*/React.createElement("p", {
      style: {
        maxWidth: 420,
        marginTop: 'var(--space-7)',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--body-md)',
        lineHeight: 1.5,
        color: 'var(--steel-300)'
      }
    }, "MANIFEST scans e-commerce listings and physical packaging against the Legal Metrology (Packaged Commodities) Rules and records what is missing.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-8)'
      }
    }, [['214', 'SCANNED TODAY'], ['38', 'VIOLATIONS RAISED'], ['6', 'DECLARATIONS CHECKED']].map(s => /*#__PURE__*/React.createElement("div", {
      key: s[1]
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 28,
        color: 'var(--steel-100)',
        lineHeight: 1
      }
    }, s[0]), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6,
        fontFamily: 'var(--font-mono)',
        fontSize: 9,
        fontWeight: 600,
        letterSpacing: '.2em',
        color: 'var(--steel-500)'
      }
    }, s[1]))))), /*#__PURE__*/React.createElement("div", {
      className: "mf-plate",
      style: {
        display: 'flex',
        alignItems: 'center',
        padding: 'var(--space-9)',
        borderLeft: '2px solid var(--ink-900)'
      }
    }, /*#__PURE__*/React.createElement(Panel, {
      title: "Inspector sign-in",
      code: "OFFICE 04",
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Inspector ID",
      code: "Field 01",
      mono: true,
      defaultValue: "20418",
      icon: "id-card"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Passcode",
      mono: true,
      type: "password",
      defaultValue: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
      icon: "key-round"
    }), /*#__PURE__*/React.createElement(Checkbox, {
      label: "This terminal is on the office network",
      hint: "Required for evidence upload",
      defaultChecked: true
    }), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      block: true,
      icon: "log-in",
      onClick: onEnter
    }, "Enter console"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        color: 'var(--steel-600)'
      }
    }, "Access is logged against your inspector ID.")))));
  }
  Object.assign(window, {
    LoginScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/scanner/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/scanner/NoticeDocket.jsx
try { (() => {
(() => {
  const {
    Panel,
    Button,
    IconButton,
    Stamp,
    Rule,
    Wordmark,
    FieldRow,
    Tag,
    StatusBadge,
    BurnHeading
  } = window.MANIFESTDesignSystem_e5cbed;
  function NoticeDocket() {
    const decs = window.MF_DATA.declarations['4471-B'];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'var(--space-8)',
        display: 'grid',
        gap: 'var(--space-7)',
        justifyItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: 820,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement(BurnHeading, {
      as: "h1",
      size: "md",
      roughness: "normal"
    }, "Notice \xB7 Form 27"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "plate",
      size: "sm",
      icon: "printer"
    }, "Print"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      icon: "send"
    }, "Serve to seller"))), /*#__PURE__*/React.createElement("article", {
      style: {
        width: '100%',
        maxWidth: 820,
        background: 'var(--surface-docket)',
        border: '1px solid var(--ink-900)',
        boxShadow: 'var(--shadow-hard-lg)',
        padding: 'var(--space-10)',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 26,
        right: 30
      }
    }, /*#__PURE__*/React.createElement(Stamp, {
      tone: "fail",
      size: "lg",
      rotate: -8
    }, "Non-compliant")), /*#__PURE__*/React.createElement("header", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 'var(--space-8)',
        paddingBottom: 'var(--space-6)',
        borderBottom: '2px solid var(--ink-900)'
      }
    }, /*#__PURE__*/React.createElement(Wordmark, {
      size: "md",
      subline: "LEGAL METROLOGY AUDIT"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--space-4) var(--space-10)',
        margin: 'var(--space-7) 0'
      }
    }, [['Case number', '4471-B'], ['Issued', '18 AUG 2026'], ['Seller', 'Sunrise Foods Pvt Ltd'], ['Channel', 'AMAZON.IN'], ['Commodity', 'Roasted Almond Butter 500 g'], ['Inspector', 'R. IYER · ID 20418']].map(r => /*#__PURE__*/React.createElement("div", {
      key: r[0],
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: 'var(--steel-700)'
      }
    }, r[0]), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        borderBottom: '1px dotted var(--steel-500)',
        marginBottom: 3
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        letterSpacing: '.03em'
      }
    }, r[1])))), /*#__PURE__*/React.createElement(Rule, {
      label: "Declarations examined"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: 'var(--space-5) 0 var(--space-7)',
        border: '1px solid var(--ink-900)'
      }
    }, decs.map(d => /*#__PURE__*/React.createElement(FieldRow, {
      key: d.code,
      label: d.label,
      code: d.code,
      value: d.value,
      status: d.status
    }))), /*#__PURE__*/React.createElement(Rule, {
      label: "Findings"
    }), /*#__PURE__*/React.createElement("ol", {
      style: {
        margin: 'var(--space-5) 0 var(--space-7)',
        paddingLeft: 22,
        display: 'grid',
        gap: 10,
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--body-md)',
        lineHeight: 1.5,
        color: 'var(--text-primary)'
      }
    }, window.MF_DATA.findings.map(f => /*#__PURE__*/React.createElement("li", {
      key: f.code
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        letterSpacing: '.06em',
        textTransform: 'uppercase'
      }
    }, f.title, " "), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'var(--case-red-dark)'
      }
    }, "[", f.code, "]"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 4
      }
    }, f.body)))), /*#__PURE__*/React.createElement(Rule, {
      variant: "heavy"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: 'var(--space-8)',
        marginTop: 'var(--space-7)'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        maxWidth: 460,
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--body-sm)',
        lineHeight: 1.5,
        color: 'var(--text-secondary)'
      }
    }, "The seller is required to correct the declarations listed above within 14 days of service and to submit revised listing evidence to the issuing office."), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 200,
        borderTop: '1px solid var(--ink-900)',
        paddingTop: 6,
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: 'var(--steel-700)'
      }
    }, "Authorised signature")))));
  }
  Object.assign(window, {
    NoticeDocket
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/scanner/NoticeDocket.jsx", error: String((e && e.message) || e) }); }

// ui_kits/scanner/Placeholder.jsx
try { (() => {
(() => {
  const {
    Panel,
    BurnHeading,
    Notice
  } = window.MANIFESTDesignSystem_e5cbed;

  // Screens the source material does not define are left deliberately blank.
  function Placeholder({
    label
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'var(--space-8)',
        display: 'grid',
        gap: 'var(--space-7)'
      }
    }, /*#__PURE__*/React.createElement(BurnHeading, {
      as: "h1",
      size: "lg",
      roughness: "heavy"
    }, label), /*#__PURE__*/React.createElement(Notice, {
      tone: "info",
      title: "Not defined in source material"
    }, "No reference for this screen was supplied with the brand. It is intentionally left blank rather than invented \u2014 add a reference and it can be built out."));
  }
  Object.assign(window, {
    Placeholder
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/scanner/Placeholder.jsx", error: String((e && e.message) || e) }); }

// ui_kits/scanner/ScanQueue.jsx
try { (() => {
(() => {
  const {
    Panel,
    DataTable,
    StatusBadge,
    Tag,
    Button,
    IconButton,
    Input,
    Select,
    ScoreMeter,
    Tabs,
    BurnHeading,
    Rule
  } = window.MANIFESTDesignSystem_e5cbed;
  function StatBlock({
    label,
    value,
    sub,
    tone
  }) {
    const c = tone === 'fail' ? 'var(--case-red)' : tone === 'pass' ? 'var(--verified-green)' : tone === 'review' ? 'var(--pending-amber-dark)' : 'var(--ink-900)';
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        background: 'var(--surface-panel)',
        border: '1px solid var(--ink-900)',
        boxShadow: 'var(--shadow-hard-sm)',
        padding: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: '.16em',
        textTransform: 'uppercase',
        color: 'var(--steel-700)'
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 34,
        lineHeight: 1,
        marginTop: 8,
        color: c,
        letterSpacing: '-.01em'
      }
    }, value), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        letterSpacing: '.08em',
        textTransform: 'uppercase',
        color: 'var(--steel-600)',
        marginTop: 6
      }
    }, sub));
  }
  function ScanQueue({
    onOpen
  }) {
    const [tab, setTab] = React.useState('all');
    const [q, setQ] = React.useState('');
    const all = window.MF_DATA.cases;
    const rows = all.filter(c => tab === 'all' ? true : tab === 'fail' ? c.status === 'fail' : tab === 'review' ? c.status === 'review' : c.status === 'pass').filter(c => q ? (c.sku + c.brand + c.title + c.id).toLowerCase().includes(q.toLowerCase()) : true);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'var(--space-8)',
        display: 'grid',
        gap: 'var(--space-7)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: 'var(--space-8)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BurnHeading, {
      as: "h1",
      size: "lg",
      roughness: "heavy"
    }, "Scan queue"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: 'var(--steel-700)',
        marginTop: 8
      }
    }, "Batch 18 AUG 2026 \xB7 214 listings ingested \xB7 38 violations raised")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "plate",
      icon: "upload"
    }, "Ingest CSV"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      icon: "scan-line"
    }, "Run scan"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement(StatBlock, {
      label: "Listings scanned",
      value: "214",
      sub: "of 214 in batch"
    }), /*#__PURE__*/React.createElement(StatBlock, {
      label: "Violations",
      value: "38",
      sub: "17.8% of batch",
      tone: "fail"
    }), /*#__PURE__*/React.createElement(StatBlock, {
      label: "Under review",
      value: "12",
      sub: "awaiting inspector",
      tone: "review"
    }), /*#__PURE__*/React.createElement(StatBlock, {
      label: "Cleared",
      value: "164",
      sub: "no findings",
      tone: "pass"
    })), /*#__PURE__*/React.createElement(Panel, {
      title: "Ledger",
      code: rows.length + ' rows',
      flush: true,
      actions: /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'flex',
          gap: 6
        }
      }, /*#__PURE__*/React.createElement(IconButton, {
        icon: "printer",
        label: "Print ledger",
        size: "sm",
        variant: "ghost",
        style: {
          color: 'var(--steel-050)',
          borderColor: 'var(--steel-500)',
          boxShadow: 'none'
        }
      }), /*#__PURE__*/React.createElement(IconButton, {
        icon: "download",
        label: "Export",
        size: "sm",
        variant: "ghost",
        style: {
          color: 'var(--steel-050)',
          borderColor: 'var(--steel-500)',
          boxShadow: 'none'
        }
      }))
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        gap: 'var(--space-6)',
        padding: 'var(--space-5) var(--space-6)',
        borderBottom: '1px solid var(--steel-400)'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      size: "sm",
      icon: "search",
      placeholder: "Case no. / SKU / brand",
      value: q,
      onChange: e => setQ(e.target.value),
      style: {
        width: 260
      }
    }), /*#__PURE__*/React.createElement(Select, {
      size: "sm",
      label: "",
      options: ['ALL CHANNELS', 'AMAZON.IN', 'FLIPKART', 'BLINKIT', 'JIOMART'],
      style: {
        width: 180
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement(Tabs, {
      value: tab,
      onChange: setTab,
      style: {
        border: 0
      },
      tabs: [{
        value: 'all',
        label: 'All',
        count: all.length
      }, {
        value: 'fail',
        label: 'Violation',
        count: all.filter(c => c.status === 'fail').length
      }, {
        value: 'review',
        label: 'Review',
        count: all.filter(c => c.status === 'review').length
      }, {
        value: 'pass',
        label: 'Cleared',
        count: all.filter(c => c.status === 'pass').length
      }]
    })), /*#__PURE__*/React.createElement(DataTable, {
      onRowClick: r => onOpen(r.id),
      rows: rows,
      columns: [{
        key: 'id',
        header: 'Case',
        width: 92,
        render: r => /*#__PURE__*/React.createElement("span", {
          style: {
            fontWeight: 700
          }
        }, r.id)
      }, {
        key: 'sku',
        header: 'SKU',
        width: 150
      }, {
        key: 'title',
        header: 'Commodity',
        wrap: false
      }, {
        key: 'channel',
        header: 'Channel',
        width: 110,
        render: r => /*#__PURE__*/React.createElement(Tag, null, r.channel)
      }, {
        key: 'absent',
        header: 'Absent',
        align: 'right',
        width: 78,
        render: r => /*#__PURE__*/React.createElement("span", {
          style: {
            color: r.absent ? 'var(--case-red)' : 'var(--steel-600)',
            fontWeight: r.absent ? 700 : 400
          }
        }, r.absent, "/", r.checks)
      }, {
        key: 'scanned',
        header: 'Scanned',
        width: 120
      }, {
        key: 'status',
        header: 'Verdict',
        width: 150,
        render: r => /*#__PURE__*/React.createElement(StatusBadge, {
          status: r.status
        })
      }]
    })));
  }
  Object.assign(window, {
    ScanQueue,
    StatBlock
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/scanner/ScanQueue.jsx", error: String((e && e.message) || e) }); }

// ui_kits/scanner/ScannerCapture.jsx
try { (() => {
(() => {
  const {
    Panel,
    Button,
    IconButton,
    StatusBadge,
    FieldRow,
    Tag,
    Rule,
    BurnHeading,
    Toggle,
    ScoreMeter
  } = window.MANIFESTDesignSystem_e5cbed;
  function ScannerCapture() {
    const [scanning, setScanning] = React.useState(false);
    const [done, setDone] = React.useState(false);
    const [line, setLine] = React.useState(0);
    const log = ['OCR ENGINE READY', 'FRAME 004 CAPTURED · 4096×3072', 'LABEL REGION LOCATED · 62% OF FRAME', 'TOKENISED 148 GLYPH GROUPS', 'MATCHING AGAINST R-6(1) FIELD SET', 'MANUFACTURER · MATCHED', 'COMMON NAME · MATCHED', 'NET QUANTITY · NO MATCH', 'RETAIL SALE PRICE · NO MATCH', 'SCAN COMPLETE · 2 OF 6 PRESENT'];
    React.useEffect(() => {
      if (!scanning) return;
      setLine(0);
      setDone(false);
      const t = setInterval(() => {
        setLine(n => {
          if (n >= log.length) {
            clearInterval(t);
            setScanning(false);
            setDone(true);
            return n;
          }
          return n + 1;
        });
      }, 240);
      return () => clearInterval(t);
    }, [scanning]);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'var(--space-8)',
        display: 'grid',
        gap: 'var(--space-7)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: 'var(--space-8)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BurnHeading, {
      as: "h1",
      size: "lg",
      roughness: "heavy"
    }, "Product scan"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: 'var(--steel-700)',
        marginTop: 8
      }
    }, "Physical pack \xB7 declaration panel capture")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-4)',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Toggle, {
      label: "Auto-flag",
      defaultChecked: true
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      icon: "camera",
      onClick: () => setScanning(true),
      disabled: scanning
    }, scanning ? 'Scanning…' : 'Capture & scan'))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1.25fr) minmax(0,1fr)',
        gap: 'var(--space-7)',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        aspectRatio: '4 / 3',
        background: 'var(--ink-800)',
        backgroundImage: 'var(--texture-metal-dark)',
        backgroundSize: 'var(--texture-metal-size)',
        border: '2px solid var(--ink-900)',
        boxShadow: 'var(--shadow-hard-md)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'repeating-linear-gradient(0deg, rgba(239,237,233,.05) 0 1px, transparent 1px 4px)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: '12% 16%',
        border: '2px solid var(--pending-amber)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: -1,
        left: -1,
        width: 20,
        height: 20,
        borderTop: '4px solid var(--pending-amber)',
        borderLeft: '4px solid var(--pending-amber)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: -1,
        right: -1,
        width: 20,
        height: 20,
        borderTop: '4px solid var(--pending-amber)',
        borderRight: '4px solid var(--pending-amber)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        bottom: -1,
        left: -1,
        width: 20,
        height: 20,
        borderBottom: '4px solid var(--pending-amber)',
        borderLeft: '4px solid var(--pending-amber)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        bottom: -1,
        right: -1,
        width: 20,
        height: 20,
        borderBottom: '4px solid var(--pending-amber)',
        borderRight: '4px solid var(--pending-amber)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: scanning ? '100%' : '0%',
        height: 2,
        background: 'var(--case-red)',
        boxShadow: '0 0 0 1px rgba(19,17,16,.5)',
        transition: scanning ? 'top 2.4s linear' : 'none'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 8,
        bottom: 8,
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: '.16em',
        color: 'var(--pending-amber)'
      }
    }, "DECLARATION PANEL")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 10,
        left: 12,
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        background: scanning ? 'var(--case-red)' : 'var(--verified-green)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: '.18em',
        color: 'var(--steel-200)'
      }
    }, scanning ? 'CAPTURING' : 'STANDBY', " \xB7 CAM 02")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 10,
        right: 12,
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        letterSpacing: '.14em',
        color: 'var(--steel-400)'
      }
    }, "4096 \xD7 3072 \xB7 f/2.8 \xB7 ISO 200")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement(Panel, {
      title: "Scan log",
      code: "OCR v4.2",
      flush: true,
      bodyStyle: {
        padding: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 168,
        overflow: 'hidden',
        padding: 'var(--space-5)',
        background: 'var(--ink-900)',
        color: 'var(--verified-green-light)',
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '.04em',
        lineHeight: 1.7
      }
    }, log.slice(0, line).map((l, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        color: l.includes('NO MATCH') ? 'var(--case-red-light)' : l.includes('MATCHED') ? 'var(--verified-green-light)' : 'var(--steel-300)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--steel-600)'
      }
    }, String(i + 1).padStart(2, '0'), " "), l)), !line ? /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--steel-600)'
      }
    }, "> AWAITING CAPTURE") : null)), /*#__PURE__*/React.createElement(Panel, {
      title: "Extracted declarations",
      flush: true
    }, /*#__PURE__*/React.createElement(FieldRow, {
      label: "Manufacturer",
      code: "R-6(1)(a)",
      value: line > 5 ? 'SUNRISE FOODS PVT LTD' : '—',
      status: line > 5 ? 'pass' : undefined
    }), /*#__PURE__*/React.createElement(FieldRow, {
      label: "Common name",
      code: "R-6(1)(b)",
      value: line > 6 ? 'ROASTED ALMOND BUTTER' : '—',
      status: line > 6 ? 'pass' : undefined
    }), /*#__PURE__*/React.createElement(FieldRow, {
      label: "Net quantity",
      code: "R-6(1)(d)",
      value: "",
      status: line > 7 ? 'fail' : undefined
    }), /*#__PURE__*/React.createElement(FieldRow, {
      label: "Retail sale price",
      code: "R-6(1)(e)",
      value: "",
      status: line > 8 ? 'fail' : undefined
    })), done ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement(StatusBadge, {
      status: "fail",
      count: 4,
      size: "lg"
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "danger",
      size: "sm",
      icon: "stamp"
    }, "Open case file")) : null)));
  }
  Object.assign(window, {
    ScannerCapture
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/scanner/ScannerCapture.jsx", error: String((e && e.message) || e) }); }

// ui_kits/scanner/data.js
try { (() => {
// Fixture data for the MANIFEST scanner console UI kit. Not production data.
window.MF_DATA = {
  cases: [{
    id: '4471-B',
    sku: 'SNF-4471-500G',
    brand: 'Sunrise Foods',
    title: 'Roasted Almond Butter 500 g',
    channel: 'AMAZON.IN',
    absent: 4,
    checks: 6,
    status: 'fail',
    scanned: '18 AUG 09:52',
    inspector: 'R. IYER'
  }, {
    id: '4470-A',
    sku: 'HRB-0192-1L',
    brand: 'Herbline',
    title: 'Cold Pressed Sesame Oil 1 L',
    channel: 'FLIPKART',
    absent: 0,
    checks: 6,
    status: 'pass',
    scanned: '18 AUG 09:41',
    inspector: 'R. IYER'
  }, {
    id: '4469-C',
    sku: 'KTC-7781-250G',
    brand: 'Kitchcraft',
    title: 'Masala Blend Tin 250 g',
    channel: 'BLINKIT',
    absent: 1,
    checks: 6,
    status: 'review',
    scanned: '18 AUG 09:30',
    inspector: 'S. NAIR'
  }, {
    id: '4468-A',
    sku: 'VLY-2210-2KG',
    brand: 'Valley Mills',
    title: 'Whole Wheat Atta 2 kg',
    channel: 'AMAZON.IN',
    absent: 3,
    checks: 6,
    status: 'fail',
    scanned: '18 AUG 09:18',
    inspector: 'S. NAIR'
  }, {
    id: '4467-D',
    sku: 'PUR-0031-500ML',
    brand: 'Purelight',
    title: 'Dish Wash Concentrate 500 ml',
    channel: 'JIOMART',
    absent: 0,
    checks: 6,
    status: 'pass',
    scanned: '18 AUG 09:04',
    inspector: 'R. IYER'
  }, {
    id: '4466-B',
    sku: 'SNF-4460-1KG',
    brand: 'Sunrise Foods',
    title: 'Jaggery Powder 1 kg',
    channel: 'AMAZON.IN',
    absent: 2,
    checks: 6,
    status: 'fail',
    scanned: '18 AUG 08:57',
    inspector: 'A. BOSE'
  }, {
    id: '4465-A',
    sku: 'TDY-8890-6PK',
    brand: 'Tidy Home',
    title: 'Floor Cleaner 6-pack',
    channel: 'FLIPKART',
    absent: 0,
    checks: 6,
    status: 'queued',
    scanned: '18 AUG 08:44',
    inspector: '—'
  }, {
    id: '4464-C',
    sku: 'GRN-1120-400G',
    brand: 'Greenrow',
    title: 'Trail Mix 400 g',
    channel: 'BLINKIT',
    absent: 1,
    checks: 6,
    status: 'review',
    scanned: '18 AUG 08:31',
    inspector: 'A. BOSE'
  }],
  declarations: {
    '4471-B': [{
      label: 'Manufacturer / packer',
      code: 'R-6(1)(a)',
      value: 'Sunrise Foods Pvt Ltd, Pune 411045',
      status: 'pass'
    }, {
      label: 'Common name of commodity',
      code: 'R-6(1)(b)',
      value: 'Roasted almond butter',
      status: 'pass'
    }, {
      label: 'Net quantity',
      code: 'R-6(1)(d)',
      value: '',
      status: 'fail',
      note: 'Listing states "1 pack". No weight in standard units.'
    }, {
      label: 'Retail sale price',
      code: 'R-6(1)(e)',
      value: '',
      status: 'fail',
      note: 'MRP inclusive of all taxes not declared on the listing page.'
    }, {
      label: 'Month and year of manufacture',
      code: 'R-6(1)(c)',
      value: '',
      status: 'fail'
    }, {
      label: 'Consumer care details',
      code: 'R-6(1)(f)',
      value: '',
      status: 'fail',
      note: 'No email, telephone or address for consumer complaints.'
    }]
  },
  findings: [{
    title: 'Net quantity absent',
    code: 'Rule 6(1)(d)',
    body: 'Listing declares "1 pack". No net weight or volume in standard units appears on the product page or in the image set.'
  }, {
    title: 'Retail sale price not declared',
    code: 'Rule 6(1)(e)',
    body: 'Selling price is shown but is not declared as MRP inclusive of all taxes.'
  }, {
    title: 'Consumer care details absent',
    code: 'Rule 6(1)(f)',
    body: 'No email address, telephone number or postal address for consumer complaints.'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/scanner/data.js", error: String((e && e.message) || e) }); }

__ds_ns.BurnHeading = __ds_scope.BurnHeading;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Panel = __ds_scope.Panel;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.EvidenceSlot = __ds_scope.EvidenceSlot;

__ds_ns.FieldRow = __ds_scope.FieldRow;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.SidebarNav = __ds_scope.SidebarNav;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Notice = __ds_scope.Notice;

__ds_ns.ScoreMeter = __ds_scope.ScoreMeter;

__ds_ns.Stamp = __ds_scope.Stamp;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

})();
