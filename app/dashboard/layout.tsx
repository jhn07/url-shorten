import { buttonVariants } from "@/components/ui/button";
import { HomeIcon, InfoIcon, LucideLayoutDashboard } from "lucide-react";
import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex">
      <div className="group w-[200px] h-full p-4 transition-transform ease-in-out duration-500 -translate-x-[8rem] hover:-translate-x-0">
        <div className="w-full h-full rounded-lg shadow-[0px_0px_20px_10px_#facc1520,_0px_5px_30px_#a465db] dark:bg-gray-100">

          <div className="w-full h-full flex flex-col items-center justify-center gap-5 transition-transform duration-500 ease-in-out translate-x-[3.5rem] transform group-hover:-translate-x-0">

            <div className="h-11 w-11 flex items-center justify-center border-2 border-black rounded-lg hover:shadow-[0px_0px_20px_10px_rgba(0,0,0,0.1),_0px_5px_30px_rgba(0,0,0,0.2)]">
              <Link href="/" className={buttonVariants({ size: "icon", className: "h-full w-full" })}>
                <HomeIcon />
              </Link>
            </div>

            <div className="h-11 w-11 flex items-center justify-center border-2 border-black rounded-lg transition-all duration-300 hover:shadow-[0px_0px_20px_10px_rgba(0,0,0,0.1),_0px_5px_30px_rgba(0,0,0,0.2)]">
              <Link href="/dashboard/info" className={buttonVariants({ size: "icon", className: "h-full w-full" })}>
                <InfoIcon />
              </Link>
            </div>

            <div className="h-11 w-11 flex items-center justify-center border-2 border-black rounded-lg transition-all duration-300 hover:shadow-[0px_0px_20px_10px_rgba(0,0,0,0.1),_0px_5px_30px_rgba(0,0,0,0.2)]">
              <Link href="/dashboard" className={buttonVariants({ size: "icon", className: "h-full w-full" })}>
                <LucideLayoutDashboard />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full h-full flex flex-col">
        {children}
      </div>
    </div>
  )
}



