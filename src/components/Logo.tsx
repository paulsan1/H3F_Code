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
    <img
      src="/logo.svg"
      alt="H3F Logo"
      width={size}
      height={size}
      className={`${className} transition-transform duration-300 object-contain`}
      referrerPolicy="no-referrer"
    />
  );
}
