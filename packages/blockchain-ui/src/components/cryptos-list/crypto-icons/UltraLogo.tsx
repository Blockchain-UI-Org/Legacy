import * as React from "react"
import { SVGProps } from "react"

export const UltraLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 45 45"
    xmlSpace="preserve"
    {...props}
  >
    <path
      d="M0 22.5C0 14.1 0 9.9 1.8 6.8c1.2-2.1 2.9-3.8 5-5C9.9 0 14.1 0 22.5 0s12.6 0 15.8 1.8c2 1.2 3.7 2.9 4.9 5C45 9.9 45 14.1 45 22.5s0 12.6-1.8 15.8c-1.2 2.1-2.9 3.8-4.9 4.9C35.1 45 30.9 45 22.5 45S9.9 45 6.8 43.2c-2.1-1.2-3.8-2.9-5-5C0 35.1 0 30.9 0 22.5z"
      style={{
        fill: "#7a52d1",
      }}
    />
    <path
      d="M12 23v-8.5h4.2V23c0 2.2.6 3.6 1.7 4.6 1.1 1 2.5 1.6 4.6 1.6 2.2 0 3.6-.6 4.6-1.6 1-1 1.7-2.5 1.7-4.7v-8.5H33V23c0 3-.9 5.7-2.9 7.6-2 1.9-4.5 2.8-7.6 2.8-3 0-5.6-.9-7.6-2.8S12 26 12 23zm12.6-.1v-8.3h-4.2v8.3c0 .8.2 1.3.6 1.7.4.4.8.6 1.5.6s1.2-.2 1.5-.6c.4-.4.6-.9.6-1.7z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#fff",
      }}
    />
  </svg>
)
