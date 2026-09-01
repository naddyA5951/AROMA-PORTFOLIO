/* ==========================================
   AROMA PORTFOLIO - MAIN JAVASCRIPT
========================================== */


/* ==========================================
   1. LUCIDE ICONS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  if (window.lucide) {
    lucide.createIcons();
  }

});


/* ==========================================
   2. MOBILE MENU
========================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

  menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

  });

}


/* ==========================================
   3. THREE.JS 3D BACKGROUND
========================================== */

if (window.THREE) {

  const canvas = document.getElementById("bg-canvas");


  /* CREATE SCENE */

  const scene = new THREE.Scene();


  /* CREATE CAMERA */

  const camera = new THREE.PerspectiveCamera(

    60,

    window.innerWidth / window.innerHeight,

    0.1,

    2000

  );


  camera.position.z = 500;


  /* CREATE RENDERER */

  const renderer = new THREE.WebGLRenderer({

    canvas: canvas,

    alpha: true,

    antialias: true

  });


  renderer.setSize(

    window.innerWidth,

    window.innerHeight

  );


  renderer.setPixelRatio(

    Math.min(

      window.devicePixelRatio,

      2

    )

  );


  /* ==========================================
     PARTICLES
  ========================================== */

  const particleCount = 1200;


  const particleGeometry =
    new THREE.BufferGeometry();


  const particlePositions =
    new Float32Array(

      particleCount * 3

    );


  for (

    let i = 0;

    i < particleCount * 3;

    i += 3

  ) {


    particlePositions[i] =

      (Math.random() - 0.5)

      * 1600;


    particlePositions[i + 1] =

      (Math.random() - 0.5)

      * 1200;


    particlePositions[i + 2] =

      (Math.random() - 0.5)

      * 1000;

  }


  particleGeometry.setAttribute(

    "position",

    new THREE.BufferAttribute(

      particlePositions,

      3

    )

  );


  const particleMaterial =
    new THREE.PointsMaterial({

      color: 0x38bdf8,

      size: 3,

      transparent: true,

      opacity: 0.7,

      blending:
        THREE.AdditiveBlending

    });


  const particles =
    new THREE.Points(

      particleGeometry,

      particleMaterial

    );


  scene.add(

    particles

  );


  /* ==========================================
     TORUS KNOT
  ========================================== */

  const torusGeometry =
    new THREE.TorusKnotGeometry(

      120,

      30,

      150,

      20

    );


  const torusMaterial =
    new THREE.MeshBasicMaterial({

      color: 0x38bdf8,

      wireframe: true,

      transparent: true,

      opacity: 0.35

    });


  const torusKnot =
    new THREE.Mesh(

      torusGeometry,

      torusMaterial

    );


  torusKnot.position.set(

    300,

    50,

    -200

  );


  scene.add(

    torusKnot

  );


  /* ==========================================
     FLOATING ICOSAHEDRON
  ========================================== */

  const icoGeometry =
    new THREE.IcosahedronGeometry(

      90,

      1

    );


  const icoMaterial =
    new THREE.MeshBasicMaterial({

      color: 0x34d399,

      wireframe: true,

      transparent: true,

      opacity: 0.3

    });


  const icosahedron =
    new THREE.Mesh(

      icoGeometry,

      icoMaterial

    );


  icosahedron.position.set(

    -350,

    -100,

    -300

  );


  scene.add(

    icosahedron

  );


  /* ==========================================
     FLOATING OCTAHEDRON
  ========================================== */

  const octaGeometry =
    new THREE.OctahedronGeometry(

      65,

      0

    );


  const octaMaterial =
    new THREE.MeshBasicMaterial({

      color: 0x818cf8,

      wireframe: true,

      transparent: true,

      opacity: 0.3

    });


  const octahedron =
    new THREE.Mesh(

      octaGeometry,

      octaMaterial

    );


  octahedron.position.set(

    0,

    250,

    -400

  );


  scene.add(

    octahedron

  );


  /* ==========================================
     FLOATING RINGS
  ========================================== */

  const ringGeometry =
    new THREE.TorusGeometry(

      100,

      3,

      16,

      100

    );


  const ringMaterial =
    new THREE.MeshBasicMaterial({

      color: 0x34d399,

      transparent: true,

      opacity: 0.35

    });


  const ring =
    new THREE.Mesh(

      ringGeometry,

      ringMaterial

    );


  ring.position.set(

    -200,

    250,

    -250

  );


  ring.rotation.x =

    Math.PI / 2;


  scene.add(

    ring

  );


  /* ==========================================
     SECOND RING
  ========================================== */

  const ring2 =
    new THREE.Mesh(

      ringGeometry,

      ringMaterial

    );


  ring2.position.set(

    350,

    -250,

    -300

  );


  ring2.rotation.y =

    Math.PI / 3;


  scene.add(

    ring2

  );


  /* ==========================================
     MOUSE MOVEMENT
  ========================================== */

  let mouseX = 0;

  let mouseY = 0;


  window.addEventListener(

    "mousemove",

    (event) => {


      mouseX =

        (event.clientX -

          window.innerWidth / 2)

        * 0.05;


      mouseY =

        (event.clientY -

          window.innerHeight / 2)

        * 0.05;


    }

  );


  /* ==========================================
     RESIZE
  ========================================== */

  window.addEventListener(

    "resize",

    () => {


      camera.aspect =

        window.innerWidth /

        window.innerHeight;


      camera.updateProjectionMatrix();


      renderer.setSize(

        window.innerWidth,

        window.innerHeight

      );


    }

  );


  /* ==========================================
     ANIMATION
  ========================================== */

  const clock =

    new THREE.Clock();


  function animate() {


    requestAnimationFrame(

      animate

    );


    const elapsedTime =

      clock.getElapsedTime();


    /* PARTICLES */

    particles.rotation.y =

      elapsedTime * 0.02;


    particles.rotation.x =

      elapsedTime * 0.01;


    /* TORUS */

    torusKnot.rotation.x =

      elapsedTime * 0.2;


    torusKnot.rotation.y =

      elapsedTime * 0.3;


    /* ICOSAHEDRON */

    icosahedron.rotation.x =

      elapsedTime * 0.15;


    icosahedron.rotation.y =

      elapsedTime * 0.25;


    icosahedron.position.y =

      -100 +

      Math.sin(

        elapsedTime * 0.8

      ) * 30;


    /* OCTAHEDRON */

    octahedron.rotation.x =

      elapsedTime * 0.2;


    octahedron.rotation.z =

      elapsedTime * 0.15;


    /* RINGS */

    ring.rotation.z =

      elapsedTime * 0.2;


    ring2.rotation.x =

      elapsedTime * 0.15;


    /* CAMERA MOVEMENT */

    camera.position.x +=

      (

        mouseX -

        camera.position.x

      )

      * 0.03;


    camera.position.y +=

      (

        -mouseY -

        camera.position.y

      )

      * 0.03;


    camera.lookAt(

      scene.position

    );


    renderer.render(

      scene,

      camera

    );


  }


  animate();


}


/* ==========================================
   4. 3D PROJECT CARD EFFECT
========================================== */

const cards =

  document.querySelectorAll(

    ".project-card"

  );


cards.forEach(

  (card) => {


    card.addEventListener(

      "mousemove",

      (event) => {


        const rect =

          card.getBoundingClientRect();


        const x =

          event.clientX -

          rect.left;


        const y =

          event.clientY -

          rect.top;


        const centerX =

          rect.width / 2;


        const centerY =

          rect.height / 2;


        const rotateX =

          (

            y -

            centerY

          )

          / 12;


        const rotateY =

          (

            centerX -

            x

          )

          / 12;


        card.style.transform =

          `perspective(1000px)

          rotateX(${rotateX}deg)

          rotateY(${rotateY}deg)

          scale(1.03)`;


      }

    );


    card.addEventListener(

      "mouseleave",

      () => {


        card.style.transform =

          "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";


      }

    );


  }

);


/* ==========================================
   5. CONTACT FORM
   WEB3FORMS
========================================== */

const contactForm =

  document.getElementById(

    "contact-form"

  );


const formStatus =

  document.getElementById(

    "form-status"

  );


const sendButton =

  document.getElementById(

    "send-message-btn"

  );


if (contactForm) {


  contactForm.addEventListener(

    "submit",

    async (event) => {


      event.preventDefault();


      const formData =

        new FormData(

          contactForm

        );


      if (sendButton) {


        sendButton.disabled = true;


        sendButton.innerHTML =

          "Sending...";


      }


      if (formStatus) {


        formStatus.textContent =

          "Sending your message...";


      }


      try {


        const response =

          await fetch(

            "https://api.web3forms.com/submit",

            {

              method: "POST",

              body: formData

            }

          );


        const result =

          await response.json();


        if (

          result.success

        ) {


          if (formStatus) {


            formStatus.textContent =

              "✓ Message sent successfully!";


          }


          contactForm.reset();


        } else {


          if (formStatus) {


            formStatus.textContent =

              "Something went wrong. Please try again.";


          }


        }


      } catch (error) {


        if (formStatus) {


          formStatus.textContent =

            "Network error. Please try again.";


        }


      }


      if (sendButton) {


        sendButton.disabled = false;


        sendButton.innerHTML =

          '<i data-lucide="send"></i> Send Message';


        if (window.lucide) {


          lucide.createIcons();


        }


      }


    }

  );


}