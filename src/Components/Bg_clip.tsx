import * as React from "react"
const Bg_clip = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1440}
    height={765}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <path
        fill="#BEEBC2"
        fillOpacity={0.15}
        d="M-89-59h1571v726.455L956.5 704.5l-175.586 25.935a1999.99 1999.99 0 0 1-816.69-48.518L-89 667.455V-59Z"
        shapeRendering="crispEdges"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={1591}
        height={830.903}
        x={-99}
        y={-66}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={3} />
        <feGaussianBlur stdDeviation={5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.866667 0 0 0 0 0.968627 0 0 0 0 0.890196 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_59_1366" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_59_1366"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
export default Bg_clip
