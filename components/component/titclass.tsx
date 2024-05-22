// import React from "react";
// import { Label } from "@/components/ui/label";
// import {
//   SelectValue,
//   SelectTrigger,
//   SelectItem,
//   SelectContent,
//   Select,
// } from "@/components/ui/select";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// function Titclass() {
//   return (
//     <div>
//       <div className="flex min-h-screen items-center justify-center bg-gray-950 p-4">
//         <div className="w-full max-w-md rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-lg">
//           <h1 className="mb-6 text-2xl font-bold text-gray-50">
//             Titanic Survival Predictor
//           </h1>
//           <form className="space-y-4" method="POST">
//             <div>
//               <Label className="text-gray-300" htmlFor="passenger-class">
//                 Passenger Class
//               </Label>
//               <Select className="w-full" id="passenger-class">
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select class" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="male">Male</SelectItem>
//                   <SelectItem value="female">Female</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//             <div>
//               <Label className="text-gray-300" htmlFor="age">
//                 Age
//               </Label>
//               <Input
//                 className="w-full"
//                 id="age"
//                 placeholder="Enter your age"
//                 type="number"
//               />
//             </div>
//             <div>
//               <Label className="text-gray-300" htmlFor="siblings-spouses">
//                 Number of Siblings/Spouses Aboard
//               </Label>
//               <Input
//                 className="w-full"
//                 id="siblings-spouses"
//                 placeholder="Enter the number"
//                 type="number"
//               />
//             </div>
//             <div>
//               <Label className="text-gray-300" htmlFor="parents-children">
//                 Number of Parents/Children Aboard
//               </Label>
//               <Input
//                 className="w-full"
//                 id="parents-children"
//                 placeholder="Enter the number"
//                 type="number"
//               />
//             </div>
//             <div>
//               <Label className="text-gray-300" htmlFor="fare">
//                 Fare
//               </Label>
//               <Input
//                 className="w-full"
//                 id="fare"
//                 placeholder="Enter the fare amount"
//                 type="number"
//               />
//             </div>
//             <div>
//               <Label className="text-gray-300" htmlFor="embarked-port">
//                 Embarked Port
//               </Label>
//               <Select className="w-full" id="embarked-port">
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select port" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="C">Cherbourg</SelectItem>
//                   <SelectItem value="Q">Queenstown</SelectItem>
//                   <SelectItem value="S">Southampton</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//             <Button className="w-full" type="submit">
//               Get Prediction
//             </Button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Titclass;
