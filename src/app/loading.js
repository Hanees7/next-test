import React from "react";

const Loading = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-4 py-16">
      <section className="w-full max-w-md text-center">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-amber-100">
          <div className="h-14 w-14 animate-spin rounded-full border-4 border-amber-200 border-t-amber-700" />
        </div>

        <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-amber-700">
          Loading
        </p>
        <h1 className="mt-3 text-2xl font-bold text-slate-950 md:text-3xl">
          Please wait a moment
        </h1>
        <p className="mt-3 text-base leading-7 text-slate-600">
          We are getting everything ready for you.
        </p>

        <div className="mt-8 space-y-3" aria-hidden="true">
          <div className="mx-auto h-3 w-full max-w-sm animate-pulse rounded bg-slate-200" />
          <div className="mx-auto h-3 w-4/5 animate-pulse rounded bg-slate-200" />
          <div className="mx-auto h-3 w-3/5 animate-pulse rounded bg-slate-200" />
        </div>
      </section>
    </main>
  );
};

export default Loading;
