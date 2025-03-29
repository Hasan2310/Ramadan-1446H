import React from 'react';
import Swal from 'sweetalert2';
import videoSource from './assets/V.mp4'; 
import akhir from './assets/akhir.gif'; 
import me from './assets/logo/Me.png'; 
import bro from './assets/logo/Bro.png'; 
import './App.css';

const THR = () => {
  const Bro = () => {
    Swal.fire({
      title: "Fatchul iman",
      imageUrl: bro,
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      showCloseButton: true,
      cancelButtonColor: "red",
      background: "#0d52bd",  
      color: "#fff", 
      allowOutsideClick: false,
      showConfirmButton: false,
      backdrop: 'rgba(0, 0, 0, 0.6)',
      html: `
        <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
          <p style="font-size: 18px; text-align: center; color: white; margin-bottom: 20px;">Direction and Design</p>
          <div style="display: flex; justify-content: center; gap: 30px;">
            <a href="https://wa.me/6285778130637" target="_blank" style="font-size: 40px; color: #fff;">
              <i class="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      `,
      focusConfirm: false,
      preConfirm: () => false,
    });
  };
  

  const Me = () => {
    Swal.fire({
      title: "Hasan Ahmad H",
      imageUrl: me,
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      showCloseButton: true,
      cancelButtonColor: "red",
      background: "#4e1067",  
      color: "#fff",  
      allowOutsideClick: false,
      showConfirmButton: false,
      backdrop: 'rgba(0, 0, 0, 0.6)',
      html: `
        <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
          <p style="font-size: 18px; text-align: center; color: white; margin-bottom: 20px;">Coding and Motion</p>
          <div style="display: flex; justify-content: center; gap: 30px;">
            <a href="https://github.com/hasan2310" target="_blank" style="font-size: 40px; color: #fff;">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/hasanahmadh/" target="_blank" style="font-size: 40px; color: #fff;">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://hasan2310.github.io/Portfolio/" target="_blank" style="font-size: 40px; color: #fff;">
              <i class="fas fa-project-diagram"></i>
            </a>
          </div>
        </div>
      `,
      focusConfirm: false,
      preConfirm: () => false,
    });
  };

  return (
    <div className="relative w-full h-screen flex justify-center">
      <video
        autoPlay
        muted
        id="bodyblur"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute flex justify-center items-center h-full text-center text-white z-30 px-10">
        <div>
          <div className="card mt-5 text-center text-light justify-center items-center flex flex-col" style={{ backgroundColor: '#00000000' }}>
            <h1 className="text-center fw-bold mb-lg-0 mb-5">Hehe.. bercanda kok</h1>
            <img src={akhir} className="card-img-top w-xs" alt="..." />
            <div className="card-body">
              <h5 className="card-text mt-5 fw-bold">
                Taqabbalallahu minna wa minkum, Selamat Hari Raya Idul Fitri 1446H, Mohon maaf lahir
                dan batin.
              </h5>
            </div>
          </div>
          <h5 className="text-light mb-3">Dibuat oleh :</h5>
          <div className="logo mb-2 flex justify-center items-center space-x-3">
            <img
              style={{ height: '43px', width: '43px', borderRadius: '90%', cursor: 'pointer' }}
              className="mx-1"
              onClick={Bro}
              src={bro}
              alt="Fatchul iman"
            />
            <img
              style={{ height: '40px', width: '40px', borderRadius: '90%', cursor: 'pointer' }}
              className="mx-1"
              onClick={Me}
              src={me}
              alt="Hasan Ahmad H"
            />
          </div>
          <p className="text-light text-xs">Klik gambar untuk <br /> melihat rincian</p>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-0"></div>
    </div>
  );
};

export default THR;
