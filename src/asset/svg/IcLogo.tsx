import type { SVGProps } from "react";
const SvgIcLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={64} height={25} fill="none" {...props}>
    <title>SvgIcLogo</title>
    <path fill="#F5F5F5" d="M0 0h64v25H0z" />
    <rect width={3220} height={1829} x={-2584} y={-731} fill="#fff" rx={100} />
    <rect width={680} height={1500} x={-144} y={-502} fill="#F6F6F6" rx={100} />
    <rect width={480} height={548} x={-44} y={-239} fill="#fff" rx={16} />
    <mask id="ic_logo_svg__a" fill="#fff">
      <path d="M-20-19h375v64H-20z" />
    </mask>
    <path fill="#fff" d="M-20-19h375v64H-20z" />
    <path fill="#F0F0F0" d="M355 44H-20v2h375z" mask="url(#ic_logo_svg__a)" />
    <g fill="#3DC4F5">
      <path d="M44.286 8.896q1.318 0 2.725-.242 1.407-.264 2.197-.747.573-.352.968-1.32.395-.989.395-1.823h3.736q0 1.56-.68 3.252l5.063.805a1.866 1.866 0 1 1-.586 3.687l-4.742-.755V8.588q-.856 1.67-2.175 2.483-1.32.814-3.253 1.187-1.935.374-3.648.374h-.77V8.896zM62 18.478c0 .971-.788 1.758-1.758 1.758H42V16.72h18.242c.97 0 1.758.787 1.758 1.758M42 20.236H22v-3.517h8.242V13.95h3.516v2.77H42zm-1.736-5.714h-3.737v-2.044q-2.835.396-7.098.725-4.242.33-6.418.33v-3.297q2.726 0 6.813-.154 4.11-.175 6.703-.483V8.258H23.451V5.18h16.813zM22 20.236H2v-3.517h8.242V13.95h3.516v2.77H22zm-1.736-5.714h-3.737v-2.044q-2.835.396-7.098.725-4.242.33-6.418.33v-3.297q2.726 0 6.813-.154 4.11-.175 6.703-.483V8.258H3.451V5.18h16.813z" />
    </g>
  </svg>
);
export default SvgIcLogo;
