import React from 'react'

function Logo({ width = '100px' }) {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="69" height="52" 
      viewBox="0 0 512 512">
      <path fill="#F6851F" d="M322.5,284.2c-2.6-8.6-9.4-13-18-14.3c-11.1-1.7-22.3,0.4-33.4,1.2c-14.4,1-28.8,1.6-43.1,3.8c0,0,0,0,0,0c-5.9,6.9-7.2,16.6-1.5,24.2c6.6,8.8,18.5,10.7,28.8,10.5c11.6-0.2,23.2-1.3,34.7-1.8c8-0.3,16.4-1.2,23.7-4.7C321.1,299.5,324.9,292.5,322.5,284.2z"></path><path fill="#D6E5E5" d="M385.7,257.3c-2.8-10.1-8.2-19.3-17.5-24.7c-11.7-6.8-25.1-9.8-35.8-18.4c-20.4-16.5-25.2-44.2-44.1-61.8c-16.9-15.7-38-19-60.2-20.6c-24.7-1.8-52.1-1.1-69.1,19.1c0,33.8,0,67.6,1.2,101.4c0.6,17.2,1.4,34.5,2.9,51.7c1,11.8,3.5,24,9.6,34.3c5.4,9.2,12.8,16.9,22.5,21.5c12.9,6.1,27.5,7.4,41.6,7.2c15.5-0.2,31-2,46.4-1.5c13.8,0.4,27.4,1.7,41.3,0.1c13.6-1.5,28.1-4.9,39.5-12.8c9.5-6.6,16-16.2,19.2-27.3c3.2-11.3,4.3-23,4.8-34.7C388.3,279.7,388.6,268.1,385.7,257.3z M202,203.7c-12.8-4.7-10.5-25.9,0.3-34.8c12.4-10.1,33.9-10.5,48.8-6.4c6.8,1.9,14.2,4.9,18.5,10.9c4.5,6.5,4.2,14.7,0.7,21.6c-5.5,10.8-21.9,9.2-32.2,10.2c-7.6,0.7-16.3-0.7-24,0.5c-3.9-0.6-7.7-1.1-11.6-1.2C202.3,204.3,202.1,204,202,203.7z M327,307c-6.9,6.3-15.6,9.2-24.7,10.7c-10,1.6-20.3,1.2-30.4,2c-12.6,1-26.3,2.4-38.4-2.3c-9.7-3.7-18.6-11.3-21-21.9c-2.4-10.6,0.1-20.8,7.7-28.8c1.2-1.3,2.7-1.8,4.1-1.7c0.7-0.5,1.6-0.9,2.7-1.1c18.6-2.8,37.5-2.9,56.2-4.8c18.3-1.9,44.2-0.5,49.7,21.5C335.1,289.7,334.5,300.2,327,307z"></path><path fill="#F6851F" d="M261.4,181.2c-1.7-3.8-6.3-5.8-10-7.1c-10.4-3.6-23.6-3.9-34.1-0.6c-6.2,1.9-11.6,5.5-13,12.3c-1,5.2-0.6,8.4,5.3,7.7c1.9-0.2,3.3,0.4,4.3,1.4c4.9-0.4,9.9-0.1,14.7-0.1c8.2-0.1,17.2-0.3,25.2-1.9c0.6-0.1,5.8-1.2,6-1.6c0.7-1.3,1.4-2.7,1.7-4.1C262,185.2,262.3,183.2,261.4,181.2z"></path><path fill="#F6851F" d="M478.7,208.8c-3.5-26.2-10.3-52.8-24.1-75.7C410,59.6,312.1,33.2,231.1,41.8c-50.2,5.3-99.2,25.3-136.9,59.4c-20.1,18.2-36.8,39.4-47.3,64.6c-10.5,25.3-14.7,52.6-16,79.8c-0.1,1.2-0.4,2.2-1,3c0.3,33,7.8,65.5,20.9,95.9c12.6,29.3,30.3,57.2,53.7,79.2c15.9,15,34.3,27.4,54.9,35c25.3,9.3,53.3,10.5,79.9,9.2c31.1-1.4,61.9-6.5,92.3-13c24.8-5.3,49.8-12.5,72.2-24.7c22.9-12.5,43.2-29.9,55.8-53.2c13.3-24.8,19.3-52.5,21.3-80.3C483.1,267.5,482.5,237.7,478.7,208.8z M398.3,300c-1.6,22.8-7.2,47.2-27.1,61.1c-22.8,15.9-52.2,17.4-79,15.8c-29.8-1.7-61.2,5.6-90.3-2.9c-21.7-6.4-37.8-22.3-44.9-43.8c-3.9-11.9-5-24-5.8-36.4c-1.1-16.1-1.8-32.3-2.3-48.5c-1-32.6-1-65.3-1-97.9c0-3,2-4.9,4.3-5.5c12.1-13.4,29.4-19.9,47.3-21.3c9.7-0.7,19.4-0.4,29.1,0.3c8.5,0.6,17.2,1,25.6,2.8c15.7,3.2,30.7,10,42.2,21.4c6,6,11.2,12.7,15.5,20.1c4.9,8.5,8.9,17.5,14.4,25.7c8.2,12.3,18.5,19.6,32,25.3c11.2,4.7,21.9,9.5,29.3,19.7C400.8,254.1,399.8,278.5,398.3,300z"></path><path d="M492.3,238.6c-1.4-29.7-5.7-59.7-16.7-87.4c-7.8-19.8-19.5-37.6-34.1-53C412.2,67,371.8,48,330.8,37.8c-41.5-10.3-85.6-11.3-127.5-2.8c-48.6,9.9-93.9,34.2-128.6,69.7c-18.2,18.7-32.2,40.7-41.1,65.2c-8.7,23.8-12.2,48.9-13.5,74.1c-0.7,0.9-1.1,2.1-1.1,3.5c0,46.5,14.2,92.4,37.5,132.4c22.2,38.1,55.2,72,96.9,88.1c24.6,9.5,51.4,11.5,77.6,11.1c31-0.4,61.9-5.3,92.3-11.4c50-10,101.7-26.4,134.6-68C492.9,355.3,494.8,292.6,492.3,238.6z M480.9,296.6c-2.1,27.9-8,55.6-21.3,80.3c-12.5,23.2-32.8,40.6-55.8,53.2c-22.4,12.2-47.4,19.4-72.2,24.7c-30.4,6.5-61.2,11.6-92.3,13c-26.7,1.2-54.6,0-79.9-9.2c-20.6-7.6-39-20-54.9-35c-23.4-22-41.1-49.8-53.7-79.2c-13.1-30.3-20.6-62.8-20.9-95.9c0.6-0.8,0.9-1.8,1-3c1.3-27.2,5.6-54.5,16-79.8c10.4-25.2,27.2-46.4,47.3-64.6c37.6-34.1,86.6-54,136.9-59.4c81.1-8.6,179,17.9,223.5,91.4c13.8,22.8,20.6,49.4,24.1,75.7C482.5,237.7,483.1,267.5,480.9,296.6z"></path><path d="M387.6,235.8c-7.4-10.2-18.1-15-29.3-19.7c-13.5-5.7-23.9-12.9-32-25.3c-5.5-8.2-9.5-17.2-14.4-25.7c-4.2-7.4-9.5-14.1-15.5-20.1c-11.4-11.4-26.5-18.1-42.2-21.4c-8.4-1.7-17-2.2-25.6-2.8c-9.7-0.7-19.4-1-29.1-0.3c-17.9,1.4-35.2,7.9-47.3,21.3c-2.3,0.6-4.3,2.5-4.3,5.5c0,32.6,0,65.3,1,97.9c0.5,16.2,1.2,32.3,2.3,48.5c0.8,12.4,1.9,24.5,5.8,36.4c7.1,21.5,23.2,37.4,44.9,43.8c29.1,8.5,60.5,1.2,90.3,2.9c26.8,1.5,56.2,0,79-15.8c19.9-13.9,25.5-38.3,27.1-61.1C399.8,278.5,400.8,254.1,387.6,235.8z M387.9,290.8c-0.4,11.7-1.5,23.4-4.8,34.7c-3.2,11.1-9.8,20.7-19.2,27.3c-11.4,7.9-25.9,11.3-39.5,12.8c-13.8,1.5-27.4,0.3-41.3-0.1c-15.5-0.5-31,1.3-46.4,1.5c-14.1,0.2-28.7-1.1-41.6-7.2c-9.7-4.6-17.1-12.3-22.5-21.5c-6.1-10.3-8.6-22.5-9.6-34.3c-1.4-17.2-2.3-34.4-2.9-51.7c-1.2-33.8-1.2-67.6-1.2-101.4c17-20.3,44.5-20.9,69.1-19.1c22.2,1.6,43.3,4.9,60.2,20.6c18.9,17.6,23.7,45.3,44.1,61.8c10.7,8.7,24.1,11.6,35.8,18.4c9.3,5.4,14.7,14.6,17.5,24.7C388.6,268.1,388.3,279.7,387.9,290.8z"></path><path d="M332.8 280.6c-5.5-22-31.3-23.4-49.7-21.5-18.7 1.9-37.5 2-56.2 4.8-1.1.2-1.9.6-2.7 1.1-1.4 0-2.8.5-4.1 1.7-7.5 7.9-10.1 18.2-7.7 28.8 2.4 10.6 11.3 18.1 21 21.9 12.1 4.7 25.8 3.3 38.4 2.3 10.1-.8 20.4-.4 30.4-2 9.1-1.4 17.8-4.4 24.7-10.7C334.5 300.2 335.1 289.7 332.8 280.6zM313.6 303.1c-7.3 3.5-15.7 4.4-23.7 4.7-11.6.5-23.2 1.6-34.7 1.8-10.4.2-22.2-1.7-28.8-10.5-5.7-7.6-4.4-17.4 1.5-24.2 0 0 0 0 0 0 14.3-2.2 28.7-2.8 43.1-3.8 11.1-.7 22.3-2.9 33.4-1.2 8.7 1.3 15.5 5.7 18 14.3C324.9 292.5 321.1 299.5 313.6 303.1zM269.5 173.5c-4.2-6.1-11.6-9-18.5-10.9-14.9-4.1-36.4-3.7-48.8 6.4-10.8 8.8-13.2 30.1-.3 34.8.1.3.3.6.4.9 3.9.1 7.8.6 11.6 1.2 7.8-1.2 16.4.2 24-.5 10.3-1 26.7.6 32.2-10.2C273.7 188.1 274.1 180 269.5 173.5zM261.5 187.2c-.3 1.4-1.1 2.8-1.7 4.1-.2.4-5.3 1.4-6 1.6-8 1.7-17 1.8-25.2 1.9-4.8 0-9.9-.3-14.7.1-1-1-2.4-1.7-4.3-1.4-5.9.7-6.3-2.5-5.3-7.7 1.3-6.8 6.8-10.4 13-12.3 10.5-3.3 23.7-3 34.1.6 3.7 1.3 8.3 3.3 10 7.1C262.3 183.2 262 185.2 261.5 187.2z"></path>
      </svg>
      <div className='text-black font-semibold py-1 text-justify'>
        BLOG HUB
      </div>
    </div>
  )
}

export default Logo