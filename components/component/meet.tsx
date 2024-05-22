import React from "react";

function Meet() {
  return (
    <div>
      <main className="w-full bg-black dark:bg-black">
        <section className="bg-gray-950 py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
                Meet the Team
              </h1>
              <p className="mt-4 text-lg text-gray-400">
                The brilliant minds behind our machine learning application.
              </p>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="group rounded-lg bg-gray-950 p-6 shadow-sm transition-all hover:bg-gray-900">
              <div className="flex items-center justify-center">
                <img
                  alt="John Doe"
                  className="h-30 w-30 rounded-full object-cover"
                  height={120}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "120/120",
                    objectFit: "cover",
                  }}
                  width={120}
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-white">John Doe</h3>
                <p className="mt-1 text-gray-400">Lead Data Scientist</p>
                <p className="mt-2 text-sm text-gray-400">
                  John is our lead data scientist with over 10 years of
                  experience in machine learning and artificial intelligence. He
                  oversees the development of our cutting-edge algorithms.
                </p>
              </div>
            </div>
            <div className="group rounded-lg bg-gray-950 p-6 shadow-sm transition-all hover:bg-gray-900">
              <div className="flex items-center justify-center">
                <img
                  alt="Jane Smith"
                  className="h-30 w-30 rounded-full object-cover"
                  height={120}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "120/120",
                    objectFit: "cover",
                  }}
                  width={120}
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-white">Jane Smith</h3>
                <p className="mt-1 text-gray-400">Machine Learning Engineer</p>
                <p className="mt-2 text-sm text-gray-400">
                  Jane is our talented machine learning engineer, responsible
                  for implementing and optimizing our models to deliver accurate
                  and reliable predictions.
                </p>
              </div>
            </div>
            <div className="group rounded-lg bg-gray-950 p-6 shadow-sm transition-all hover:bg-gray-900">
              <div className="flex items-center justify-center">
                <img
                  alt="Michael Johnson"
                  className="h-30 w-30 rounded-full object-cover"
                  height={120}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "120/120",
                    objectFit: "cover",
                  }}
                  width={120}
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-white">
                  Michael Johnson
                </h3>
                <p className="mt-1 text-gray-400">Data Analyst</p>
                <p className="mt-2 text-sm text-gray-400">
                  Michael is our data analyst, responsible for collecting,
                  cleaning, and preparing the data that powers our machine
                  learning models.
                </p>
              </div>
            </div>
            <div className="group rounded-lg bg-gray-950 p-6 shadow-sm transition-all hover:bg-gray-900">
              <div className="flex items-center justify-center">
                <img
                  alt="Emily Davis"
                  className="h-30 w-30 rounded-full object-cover"
                  height={120}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "120/120",
                    objectFit: "cover",
                  }}
                  width={120}
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-white">
                  Emily Davis
                </h3>
                <p className="mt-1 text-gray-400">Product Manager</p>
                <p className="mt-2 text-sm text-gray-400">
                  Emily is our product manager, responsible for defining the
                  product roadmap and ensuring our machine learning application
                  meets the needs of our customers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Meet;
