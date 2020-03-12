/* eslint-disable */

const headerTmpl =
`[class^="weui-icon-"], [class*=" weui-icon-"] {
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background-color: currentColor;
  -webkit-mask: none center center / contain no-repeat;
}
`;

const fileTmpl =
`.weui-icon-[name] {
  -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,[svg]");
}
`;
/* eslint-disable */


function encodeSVG(svg) {
  return encodeURIComponent(svg)
  .replace(/%20/g, ' ')
  .replace(/%3D/g, '=')
  .replace(/%3A/g, ':')
  .replace(/%2F/g, '/')
  .replace(/%22/g, "'");
}

function svg2css(svgMaps) {
  const svgNames = Object.keys(svgMaps);
  let allStyle = headerTmpl;

  svgNames.forEach((svgName) => {
    allStyle += fileTmpl
    .replace(/\[name]/g, svgName)
    .replace(/\[svg]/g, encodeSVG(svgMaps[svgName]));
  });

  return allStyle;
}

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.svg2css = factory();
  }
}(typeof window === 'object' ? window : this, function () {
  return svg2css;
}));
