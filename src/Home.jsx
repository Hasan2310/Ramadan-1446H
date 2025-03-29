import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom"; 
import videoSource from './assets/V.mp4';
import satu from "./assets/image.gif";
import dua from "./assets/maaf.gif";
import tiga from "./assets/hehe.gif";
import empat from "./assets/sedih.gif";
import "./App.css";

const App = () => {
  const navigate = useNavigate(); 

  useEffect(() => {
    setTimeout(() => {
      Swal.fire({
        html: '<p class="text-2xl tracking-widest" style="font-family: \'MyCustomFont\', sans-serif;">Assalamualaikum <br/> Masukin nama kamu di bawah yaaa<p>',
        input: "text",
        imageUrl: satu,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "Custom image",
        inputPlaceholder: "Disini!",
        confirmButtonText: "Lanjut",
        confirmButtonColor: "#272932",
        background: "#0000008b",
        allowOutsideClick: false,
        allowEscapeKey: false,
        color: "#fff",
        preConfirm: (inputValue) => {
          if (!inputValue) {
            Swal.showValidationMessage("Nama belum diisi!");
            return false;
          }
          return inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
        },
        customClass: {
          input: 'custom-input',
          confirmButton: 'custom-confirm-btn'
        }
      }).then((result) => {
        if (result.value) {
          Swal.fire({
            html: `<p><strong>${result.value}</strong>, Maafin aku yaa selama ini aku mungkin banyak salah, mungkin dari sifat aku, perbuatan atau ucapan aku</p>`,
            imageUrl: dua,
            imageWidth: 200,
            imageHeight: 200,
            background: "#0000008b",
            showConfirmButton: false,
            timerProgressBar: true,
            color: "#fff",
            timer: 6000,
            confirmButtonColor: "#272932",
            customClass: {
              timerProgressBar: "swal2-progress-custom",
            },
            allowOutsideClick: false,
            allowEscapeKey: false,
          }).then(() => {
            if (result.value) {
              Swal.fire({
                html: `<p>Jadi... <strong>${result.value}</strong>, maafin aku gk</p>`,
                imageUrl: dua,
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: "Custom image",
                background: "#0000008b",
                color: "#fff",
                confirmButtonText: "Iya, Aku maafin",
                showCancelButton: true,
                confirmButtonColor: "#272932",
                cancelButtonText: "Gak mau",
                cancelButtonColor: "red",
                allowOutsideClick: false,
                allowEscapeKey: false,
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    text: "Makasih banyak yaa.. sekarang minta THR-nya dong HEHE",
                    imageUrl: tiga,
                    imageWidth: 300,
                    imageHeight: 300,
                    confirmButtonText: "Kasih THR",
                    confirmButtonColor: "#272932",
                    background: "#0000008b",
                    color: "#fff",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                  }).then(() => {
                    navigate('/Ramadan-1446H/THR');
                  });
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                  Swal.fire({
                    text: "Gak boleh gitu harus memaafkan tau",
                    imageUrl: empat,
                    imageWidth: 300,
                    imageHeight: 260,
                    imageAlt: "Custom image",
                    confirmButtonText: "iya deh, Aku maafin",
                    confirmButtonColor: "#272932",
                    background: "#0000008b",
                    color: "#fff",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                  }).then(() => {
                    Swal.fire({
                      text: `Makasih banyak yaa.. sekarang minta THR-nya dong HEHE`,
                      imageUrl: tiga,
                      imageWidth: 300,
                      imageHeight: 300,
                      confirmButtonText: "Kasih THR",
                      confirmButtonColor: "#272932",
                      background: "#0000008b",
                      color: "#fff",
                      allowOutsideClick: false,
                      allowEscapeKey: false,
                    }).then(() => {
                      navigate('/Ramadan-1446H/THR');
                    });
                  });
                }
              });
            }
          });
        }
      });
    }, 1000);
  }, [navigate]); 

  return (
    <div className="ramadhan-page">
      <video
        autoPlay
        muted
        id="bodyblur"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default App;
