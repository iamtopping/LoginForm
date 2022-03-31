import React from 'react'

function Profile() {
  return (
    <img
    className='avatar'
      src="https://i.pinimg.com/564x/ba/d2/1c/bad21c81a1ac5993a9803517da53d015.jpg"
      alt="BWM"
      width={400}
    />
  );

}
export default function Gallery() {
  return (
    <div className='blog'>
      <h1>Transformer</h1>

      <div className='my-info'>
        <a className='my-fb' href='https://www.facebook.com/profile.php?id=100009375749015'>
          Facebook <i class="fa-brands fa-facebook"></i>
          <h2>
          <button>
           Click me
          </button>
        </h2>
        </a>
        <a className='my-insta' href='https://www.instagram.com/son_dth1210/'>
          Instagram  <i class="fa-brands fa-instagram"></i>
           <h2>
            <button>
              Click me
            </button>
           </h2>
        </a>
      </div>

      <div className='container-blog'>
        <Profile />
        <img src='https://i.pinimg.com/564x/4c/a5/98/4ca5986bebea3bfffe9e8db7a4f3308b.jpg' width={400} height="auto"/>
        <img src='https://i.pinimg.com/736x/1f/62/79/1f6279953395194b076d5cdddc00fdc3.jpg'/>
    </div>
    </div>
  );

}





    
