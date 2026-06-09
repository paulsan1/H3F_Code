/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 32 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 600 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} transition-transform duration-300`}
      referrerPolicy="no-referrer"
    >
      {/* Human 1: Bottom Left (Cyan / Teal) */}
      <g id="figure-cyan">
        {/* Head */}
        <circle cx="140" cy="315" r="28" fill="#00A8C5" />
        {/* Body */}
        <path
          d="M100 285 C140 230, 260 235, 287 285 C230 290, 190 350, 180 370 C165 310, 120 290, 100 285 Z"
          fill="#00A8C5"
        />
      </g>

      {/* Human 2: Mid Left (Green) */}
      <g id="figure-green">
        {/* Head */}
        <circle cx="160" cy="185" r="28" fill="#43A047" />
        {/* Body */}
        <path
          d="M140 120 C185 130, 245 200, 285 280 C230 270, 190 220, 185 240 C170 190, 150 140, 140 120 Z"
          fill="#43A047"
        />
      </g>

      {/* Human 3: Top Center (Lime Green) */}
      <g id="figure-lime">
        {/* Head */}
        <circle cx="280" cy="110" r="28" fill="#9CCC65" />
        {/* Body */}
        <path
          d="M295 60 C290 120, 230 160, 240 260 C260 250, 310 180, 340 110 C325 90, 310 75, 295 60 Z"
          fill="#9CCC65"
        />
      </g>

      {/* Human 4: Mid Right (Yellow / Gold) */}
      <g id="figure-yellow">
        {/* Head */}
        <circle cx="430" cy="135" r="28" fill="#FFD54F" />
        {/* Body */}
        <path
          d="M495 120 C465 160, 410 230, 340 263 C378 220, 375 160, 380 150 C410 150, 465 130, 495 120 Z"
          fill="#FFD54F"
        />
      </g>

      {/* Human 5: Bottom Right (Orange) */}
      <g id="figure-orange">
        {/* Head */}
        <circle cx="510" cy="240" r="28" fill="#FB8C00" />
        {/* Body */}
        <path
          d="M555 260 C535 290, 460 300, 350 270 C410 250, 440 200, 455 180 C480 205, 520 230, 555 260 Z"
          fill="#FB8C00"
        />
      </g>

      {/* Bottom Red Waves / Ribbons */}
      <g id="waves-red">
        {/* Ribbon 1 */}
        <path
          d="M120 410 C210 330, 360 280, 520 295 C410 320, 280 370, 135 450 C130 435, 125 422, 120 410 Z"
          fill="#E53935"
        />
        {/* Ribbon 2 */}
        <path
          d="M150 450 C210 400, 360 350, 538 335 C410 370, 260 410, 150 495 Z"
          fill="#E53935"
        />
      </g>
    </svg>
  );
}
