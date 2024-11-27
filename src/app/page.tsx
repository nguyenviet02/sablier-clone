"use client";

import TableStreams from "@/components/TableStreams";
import { useRouter } from "next/navigation";

function App() {
  const router = useRouter();
  const goToCreateStream = () => {
    router?.push(`/create?shape=${"linear"}`);
  };
  return (
    <section className="size-full">
      <h1 className="py-8 font-catamaran text-[32px] font-semibold leading-10 text-white">
        All Streams
      </h1>
      <button
        onClick={goToCreateStream}
        className="button-primary bg-core-orange py-3 text-[14px] font-bold text-white hover:bg-core-orange"
      >
        Create
      </button>
      <TableStreams />
    </section>
  );
}

export default App;
