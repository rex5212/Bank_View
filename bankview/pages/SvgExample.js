import React from 'react';
import TopBar from '../components/Bar/TopBar';
import BottomBar from '../components/Bar/BottomBar';

function SvgExample() {
  return (
    <div>
        <TopBar/>
        <BottomBar/>
    </div>
  );
}

export default SvgExample;

{/* <div>
<SvgLoader width={300} height={200}>
  <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
      <rect width="100%" height="100%" fill="#e0e0e0" />
      <circle cx="200" cy="150" r="100" fill="blue" />
  </svg>
</SvgLoader>
</div> */}