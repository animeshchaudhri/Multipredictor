import Footer from "@/components/navbar/footer";
import Navbar from "@/components/navbar/navbar";
import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-900 p-8 shadow-md text-white h-full mt-10">
        <h2 className="mb-4 text-2xl font-bold">About ML Playground</h2>
        <p className="mb-8">
          ML Playground is a web application that allows users to explore
          machine learning models trained on the Ames Housing and Titanic
          datasets. Users can input their own data and see the model's
          predictions.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-gray-800 p-6 shadow-md">
            <h3 className="mb-2 text-xl font-bold">Ames Housing</h3>
            <p>
              The Ames Housing dataset contains information about residential
              properties in Ames, Iowa. The goal is to predict the sale price of
              a home based on various features.
            </p>
          </div>
          <div className="rounded-lg bg-gray-800 p-6 shadow-md">
            <h3 className="mb-2 text-xl font-bold">Titanic</h3>
            <p>
              The Titanic dataset contains information about passengers on the
              Titanic. The goal is to predict which passengers survived the
              disaster.
            </p>
          </div>
          <div className="rounded-lg bg-gray-800 p-6 shadow-md">
            <h3 className="mb-2 text-xl font-bold">Project Goals</h3>
            <p>
              The main goal of ML Playground is to provide a user-friendly
              interface for exploring machine learning models. We hope to
              encourage more people to get involved in the field of data science
              and machine learning.
            </p>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0">
        <Footer />
      </div>
    </>
  );
}

export default page;
