import React from "react";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

export default function LinkButton({ type, linkTo, variant }) {
  return (
    <Link href={linkTo} passHref>
      {type === "journey" ? (
        <a className="flex p-3 bg-white rounded-lg w-full justify-center">
          Start now
        </a>
      ) : type === "job" ? (
        <a className="flex p-3 border border-[#1B1B18] rounded-lg w-full md:w-32 justify-center">
          <FiExternalLink />
          <span className="ml-2 text-xs">More info</span>
        </a>
      ) : (
        ""
      )}
    </Link>
  );
}
