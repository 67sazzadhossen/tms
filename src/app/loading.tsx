import Image from "next/image";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Image
        src={"https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"}
        alt="logo"
        width={200}
        height={200}
        className="animate-ping"
      />
    </div>
  );
}
