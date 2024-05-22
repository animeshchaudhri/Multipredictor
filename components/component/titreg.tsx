import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function Titreg() {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-md space-y-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Passenger Prediction
              </h2>
              <p className="text-gray-400">
                Enter your details to get a prediction.
              </p>
            </div>
            <form action="{{ url_for(" className="space-y-4" method="POST">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label className="text-gray-400" htmlFor="passenger-class">
                    Passenger Class:
                  </Label>
                  <Input
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                    id="passenger-class"
                    name="passenger_class"
                    placeholder="Enter passenger class"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-400" htmlFor="age">
                    Age:
                  </Label>
                  <Input
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                    id="age"
                    name="age"
                    placeholder="Enter age"
                    type="text"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label className="text-gray-400" htmlFor="siblings-spouses">
                    Number of Siblings/Spouses Aboard:
                  </Label>
                  <Input
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                    id="siblings-spouses"
                    name="siblings_spouses"
                    placeholder="Enter number of siblings/spouses"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-400" htmlFor="parents-children">
                    Number of Parents/Children Aboard:
                  </Label>
                  <Input
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                    id="parents-children"
                    name="parents_children"
                    placeholder="Enter number of parents/children"
                    type="text"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-gray-400" htmlFor="embarked-port">
                  Embarked Port (C/Q/S):
                </Label>
                <Input
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                  id="embarked-port"
                  name="embarked_port"
                  placeholder="Enter embarked port"
                  type="text"
                />
              </div>
              <Button
                className="w-full bg-gray-800 hover:bg-gray-700 text-white"
                type="submit"
              >
                Get Prediction
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Titreg;
