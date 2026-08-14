import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <main className="min-h-[70vh] bg-slate-50 px-4 py-16">
      <section className="mx-auto flex max-w-5xl flex-col items-center gap-10 text-center md:flex-row md:text-left">
        <div className="flex h-48 w-48 shrink-0 items-center justify-center rounded-full bg-amber-100 text-7xl font-black text-amber-700 shadow-sm md:h-64 md:w-64 md:text-8xl">
          404
        </div>

        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amber-700">
            Page not found
          </p>
          <h1 className="text-3xl font-bold text-slate-950 md:text-5xl">
            The page you are looking for does not exist.
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
            The link may be broken, the page may have moved, or the address may
            have been typed incorrectly.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
            <Link
              href="/"
              className="rounded-md bg-amber-700 px-6 py-3 font-semibold text-white transition hover:bg-amber-800"
            >
              Go to Home
            </Link>
            <Link
              href="/product"
              className="rounded-md border border-slate-300 px-6 py-3 font-semibold text-slate-800 transition hover:border-amber-700 hover:text-amber-700"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
