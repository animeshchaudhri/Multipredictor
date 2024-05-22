import Link from "next/link";

export default function Cardsection() {
  return (
    <div
      key="1"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-6 py-12 md:py-24"
    >
      <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-700 to-purple-400 opacity-50 transition-opacity duration-300 group-hover:opacity-0" />
        <div className="relative p-6 space-y-4">
          <h3 className="text-2xl font-bold text-white">Titanic Regression</h3>
          <p className="text-gray-100">
            Explore our Titanic survival prediction model using regression
            analysis.
          </p>
          <Link
            className="inline-flex items-center justify-center rounded-md bg-purple-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:bg-purple-500 dark:hover:bg-purple-600 dark:focus:ring-offset-gray-950"
            href="#"
          >
            Start
          </Link>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-700 to-indigo-400 opacity-50 transition-opacity duration-300 group-hover:opacity-0" />
        <div className="relative p-6 space-y-4">
          <h3 className="text-2xl font-bold text-white">Ames Regression</h3>
          <p className="text-gray-100">
            Utilize our regression model to predict housing prices in Ames.
          </p>
          <Link
            className="inline-flex items-center justify-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-offset-gray-950"
            href="#"
          >
            Start
          </Link>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
        <div className="absolute inset-0 bg-gradient-to-t from-teal-700 to-teal-400 opacity-50 transition-opacity duration-300 group-hover:opacity-0" />
        <div className="relative p-6 space-y-4">
          <h3 className="text-2xl font-bold text-white">Ames Classification</h3>
          <p className="text-gray-100">
            Apply our classification model to categorize Ames housing data.
          </p>
          <Link
            className="inline-flex items-center justify-center rounded-md bg-teal-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-offset-gray-950"
            href="#"
          >
            Start
          </Link>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
        <div className="absolute inset-0 bg-gradient-to-t from-teal-700 to-teal-400 opacity-50 transition-opacity duration-300 group-hover:opacity-0" />
        <div className="relative p-6 space-y-4">
          <h3 className="text-2xl font-bold text-white">
            Titanic Classification
          </h3>
          <p className="text-gray-100">
            Use our classification model to predict passenger survival on the
            Titanic.
          </p>
          <Link
            className="inline-flex items-center justify-center rounded-md bg-teal-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-offset-gray-950"
            href="#"
          >
            Start
          </Link>
        </div>
      </div>
    </div>
  );
}
