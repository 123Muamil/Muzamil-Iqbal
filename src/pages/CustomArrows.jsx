import React from 'react';

const CustomArrows = ({ onClick, isNext }) => {
    return (
        <button
            className={`custom-arrow ${isNext ? 'next' : 'prev'}`}
            onClick={onClick}
        >
            {isNext ? '>' : '<'}
        </button>
    );
}

export default CustomArrows;
// import React from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

// const App = () => {
//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 3000 },
//       items: 4
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 4
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 4
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1
//     }
//   };

//   const ButtonGroup = ({ next, previous, ...rest }) => {
//     return (
//       <div className="carousel-button-group mt-auto gap-4 mt-5 d-flex justify-content-center align-items-center w-full" style={{paddingTop:'20px'}}>
//         <button className='block p-3 bg-slate-300 text-white font-semibold rounded-lg shadow-md' onClick={previous}><i class="fas fa-arrow-right"></i>
// </button>
//         <button className='block p-3 bg-slate-300 text-white font-semibold rounded-lg shadow-md' onClick={next}><i class="fas fa-arrow-right"></i>
// </button>
//       </div>
//     );
//   };

//   return (
//     <div className='w-[85%] mx-auto'>
//       <Carousel

//     </div>
//   );
// }

// export default App;
