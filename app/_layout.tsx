// import React from 'react';
// import StepIndicator from '@/app/components/StepIndicator';
// import { useFormStore } from '@/store/useFormStore';
// import { Image } from 'react-native';
// import BackIcon from "../images/BackIcon.svg"; // Import your SVG file
// import Logo25 from "../images/Logo25.svg"; // Import your SVG file

// interface LayoutProps {
//   children: React.ReactNode;
//   isModalOpen?: boolean;
//   hideHeader?: boolean;
// }

// const Layout: React.FC<LayoutProps> = ({ children, isModalOpen = false, hideHeader = false }) => {
//   const { step, prevStep } = useFormStore();

//   return (
//     <div className="w-[393px] h-[852px] mx-auto px-4 sm:px-8 relative">
//       {!hideHeader && !isModalOpen && (
//         <>
//           {step > 1 && (
//             <button onClick={prevStep} className="absolute top-[50px] left-4 p-2" aria-label="Go back">
//               {/* <img src="/images/BackIcon.svg" alt="BackIcon" /> */}
//               {/* <Image source={require('./../images/BackIcon.svg')} /> */}
// <BackIcon/>
//             </button>
//           )}
//           <div className="p-4 flex justify-center items-center mt-[59px] mb-2">
//             {/* <img src="/images/Logo25.svg" alt="Logo" className="w-[56px] h-[56px]" /> */}
//             {/* <Image source={require('./../images/Logo25.svg')} style={{ width: 56, height: 56 }}/> */}
//             <Logo25/>
            
//           </div>
//           <StepIndicator />
//         </>
//       )}
//       {children}
//     </div>
//   );
// };

// export default Layout;
