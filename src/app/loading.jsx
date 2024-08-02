import "@/global-css/loading.css";

export default function Loading() {
  return (
    <div className=" w-full h-full  fixed z-[10000000] top-0 left-0 bg-black ">
      <div className="loader relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <span className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -ml-8">
        Loading...
      </span>
    </div>
  );
}
