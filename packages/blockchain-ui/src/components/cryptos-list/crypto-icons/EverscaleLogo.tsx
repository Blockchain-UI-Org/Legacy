import * as React from "react"
import { SVGProps } from "react"

export const EverScaleLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 26.3 26.3"
    xmlSpace="preserve"
    {...props}
  >
    <path
      d="m17.1 26.3 9.2-9.1V0H9.1L0 9.2h17.1v17.1z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#6347f5",
      }}
    />
  </svg>
)
