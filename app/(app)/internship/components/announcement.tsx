import {
  Divisions,
  Interns,
  Positions,
  Profiles,
  Titles,
} from "@/app/types/global.types";
import { Button } from "@/components/ui/button";
import { createClientBrowserServer } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import QRCode from "react-qr-code";

async function Announcement() {
  const supabase = createClientBrowserServer();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data } = await supabase
    .from("interns")
    .select("*, positions(*, divisions(*), titles(*)), profiles(*)")
    .eq("id", user.id)
    .limit(1)
    .maybeSingle<
      Interns & {
        positions: Positions & {
          divisions: Divisions;
          titles: Titles;
        };
        profiles: Profiles;
      }
    >();

  if (!data) {
    return (
      <>
        <h1 className="font-bold text-center text-4xl">
          Soedirman Robotic Team Internship 2024 Result
        </h1>
        <p className="">
          Thank you so much for your interest in our Internship program. The
          announcement has been made, but we regret to inform you that your name
          is not on the accepted list. We noticed that you have many potential
          and we really appreciate your time and efforts. We look forward to the
          possibility of our paths crossing again. <br />
          <br />
          Have a nice day and we wish you the best in your future endeavors!
        </p>
      </>
    );
  }

  const whatsAppGroupLink = await supabase
    .from("events")
    .select("accepted_url")
    .eq("name", "internship")
    .single();

  if (!whatsAppGroupLink.data) {
    return <div>Error: Event data not found</div>;
  }

  return (
    <div className="w-full max-w-screen-sm flex flex-col items-center gap-4 mx-auto pb-8 rounded-2xl bg-white text-center text-black overflow-hidden">
      <svg
        viewBox="0 0 960 509"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
      >
        <circle
          cx="480.471"
          cy="-389.546"
          r="736.471"
          fill="url(#paint0_linear_1028_185)"
        />
        <path
          d="M535.225 341.324L480.452 368.885L425.68 341.324L358 476.685L400.213 472.498L421.843 508.78L480.452 392.259L539.062 508.78L560.692 472.498L602.905 476.685L535.225 341.324Z"
          fill="#5246CD"
        />
        <path
          d="M592.166 271.2L588.329 285.852C587.282 290.736 587.98 295.969 590.422 300.505L597.748 313.762C602.283 321.437 600.888 331.554 593.911 337.833L582.747 347.951C578.909 351.439 576.816 356.323 576.467 361.208L575.769 376.209C575.072 385.279 568.792 392.955 559.722 394.35L544.72 397.141C539.836 398.188 535.301 400.978 532.161 404.816L523.439 417.026C518.206 424.353 508.438 427.143 500.414 423.655L486.459 417.724C481.575 415.631 476.691 415.631 471.807 417.724L457.503 423.306C449.131 426.446 439.362 423.655 434.129 416.329L425.408 403.421C422.617 399.234 418.081 396.443 413.197 395.397L398.545 392.606C389.474 390.861 383.195 383.186 382.846 374.116L382.148 358.766C382.148 353.533 380.055 348.997 376.217 345.509L365.054 335.043C358.425 328.763 357.03 318.995 361.914 310.971L369.938 297.714C372.729 293.527 373.426 288.294 372.031 283.41L368.542 268.409C366.449 259.687 370.636 250.617 378.659 246.43L392.265 239.802C396.801 237.709 400.289 233.522 402.034 228.987L406.918 214.334C410.058 205.962 418.43 200.38 427.501 201.426L442.851 202.822C447.735 203.52 452.968 202.124 457.155 198.635L469.016 189.216C475.993 183.634 486.111 183.634 493.088 189.565L504.949 198.984C509.136 202.124 514.02 203.868 518.904 203.171L533.905 201.775C542.976 200.729 551.349 206.311 554.14 215.032L558.675 229.336C560.07 234.22 563.908 238.406 568.443 240.5L582.049 247.477C590.073 253.408 594.608 262.478 592.166 271.2Z"
          fill="#FFC54D"
        />
        <path
          d="M565.725 304.612C565.725 352.171 527.171 390.725 479.612 390.725C432.054 390.725 393.5 352.171 393.5 304.612C393.5 257.054 432.054 218.5 479.612 218.5C527.171 218.5 565.725 257.054 565.725 304.612Z"
          fill="#FFC54D"
          stroke="#5246CD"
          stroke-width="5"
        />
        <path
          d="M480 283.947L445.079 254.448V249.532L480 278.089L514.921 249.532V254.448L480 283.947Z"
          fill="white"
        />
        <path
          d="M480 269.616C470.497 261.409 467.403 257.613 467.558 252.879C467.311 248.183 467.336 245.841 467.558 242L480 252.251L492.442 242C492.664 245.841 492.689 248.183 492.442 252.879C492.597 257.613 489.503 261.409 480 269.616Z"
          fill="white"
        />
        <path
          d="M445.079 261.143L449.365 264.595V288.026C449.983 296.903 451.028 301.35 455.952 306.96L452.816 309.889C445.466 302.043 444.653 294.086 445.079 277.88V261.143Z"
          fill="white"
        />
        <path
          d="M443.824 284.783V279.867C436.882 277.839 432.797 277.061 426.468 276.833C426.383 277.443 425.834 279.894 426.05 283.528C427.913 302.711 433.281 311.907 443.406 321.918V317.839L444.661 316.897C433.798 303.957 431.07 296.189 430.755 281.645C434.831 281.801 437.769 282.571 443.824 284.783Z"
          fill="white"
        />
        <path
          d="M444.451 318.152V324.533L480 295.453L515.549 324.533V318.152L480 288.34L444.451 318.152Z"
          fill="white"
        />
        <path
          d="M480 330.705L461.18 312.399L457.73 315.224L480 336.877L502.27 315.224L498.82 312.399L480 330.705Z"
          fill="white"
        />
        <path
          d="M514.921 261.143L510.635 264.595V288.026C510.017 296.903 508.972 301.35 504.048 306.96L507.184 309.889C514.534 302.043 515.347 294.086 514.921 277.88V261.143Z"
          fill="white"
        />
        <path
          d="M516.176 284.783V279.867C523.118 277.839 527.203 277.061 533.532 276.833C533.617 277.443 534.166 279.894 533.95 283.528C532.087 302.711 526.719 311.907 516.594 321.918V317.839L515.339 316.897C526.202 303.957 528.93 296.189 529.245 281.645C525.169 281.801 522.231 282.571 516.176 284.783Z"
          fill="white"
        />
        <path
          d="M481.882 336.668L486.587 331.751C496.32 329.703 501.588 327.905 510.112 321.709L513.667 324.533C502.55 332.84 495.489 335.211 481.882 336.668Z"
          fill="white"
        />
        <path
          d="M478.118 336.668L473.413 331.751C463.68 329.703 458.412 327.905 449.888 321.709L446.333 324.533C457.45 332.84 464.511 335.211 478.118 336.668Z"
          fill="white"
        />
        <path
          d="M480 307.064H474.354V308.633H480H485.646V307.064H480Z"
          fill="white"
        />
        <path
          d="M480 312.399H474.354V313.864H480H485.646V312.399H480Z"
          fill="white"
        />
        <path
          d="M476.654 356.647V362.923H504.884V345.768H496.415V341.166H517.799C518.172 341.137 518.255 341.256 518.267 341.608V345.35C518.254 345.73 518.132 345.795 517.799 345.768H509.589V367.631H472.632C472.295 367.646 472.168 367.581 472.158 367.212V352.044H489.515V345.768H446.02V352.149L467.508 352.046C467.818 352.027 467.874 352.143 467.872 352.463V367.158C467.872 367.552 467.765 367.642 467.404 367.631H441.524V363.028H463.271V356.647H441.997C441.621 356.671 441.513 356.583 441.524 356.229V341.584C441.528 341.228 441.656 341.16 441.997 341.166H493.68C494.039 341.147 494.128 341.247 494.115 341.584V356.229C494.127 356.569 494.043 356.677 493.647 356.647H476.654Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1028_185"
            x1="1163.2"
            y1="6.22992"
            x2="-282.049"
            y2="-11.9492"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#B673C9" stop-opacity="0.9" />
            <stop offset="0.912066" stop-color="#422CB3" stop-opacity="0.9" />
          </linearGradient>
        </defs>
      </svg>
      <h1 className="font-bold text-3xl capitalize">
        Congratulations {data.profiles.name?.split(" ")[0]}!
      </h1>
      <p className="w-10/12 font-medium">
        You are enrolled as a part of Soedirman Robotic Team Internship 2024 as{" "}
        {data.positions.titles.name} Intern of {data.positions.divisions.name}{" "}
        Division.
      </p>
      <QRCode
        value={whatsAppGroupLink.data.accepted_url}
        className="w-full max-w-xs"
      />
      <Link href={whatsAppGroupLink.data.accepted_url}>
        <Button variant="secondary" size="lg" className="font-bold">
          Join WhatsApp Group
        </Button>
      </Link>
    </div>
  );
}

export default Announcement;
