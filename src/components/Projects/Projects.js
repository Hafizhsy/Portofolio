import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/english.png";
import emotion from "../../Assets/Projects/Mobil.png";
import editor from "../../Assets/Projects/bioskop.png";
import chatify from "../../Assets/Projects/HalamanHome.png";
import suicide from "../../Assets/Projects/sampah.png";
import bitsOfCode from "../../Assets/Projects/Rpl.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Prensi Online"
              description="Mendesain wireframe dan prototype menggunakan Figma untuk sistem presensi online. Menerapkan user-centered design agar antarmuka mudah digunakan guru dan siswa. Berkolaborasi dengan tim developer untuk memastikan desain responsif dan sesuai kebutuhan pengguna."
              demoLink="https://www.presensisd19kph.site/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Proyek ERP_RPL"
              description="Merancang dan mengembangkan modul manajemen data akademik menggunakan Laravel sebagai backend dan Blade/Bootstrap untuk antarmuka yang dinamis, sehingga sistem lebih efisien dan responsif. Menerapkan autentikasi dan otorisasi berbasis JWT untuk memastikan keamanan akses pengguna sesuai perannya. Berkolaborasi lintas tim dalam merancang struktur database serta membangun RESTful API dengan PostgreSQL guna mendukung integrasi data yang skalabel. Mengelola kode secara kolaboratif menggunakan Git & GitHub (branching, pull request, dan code review) untuk membagi tugas masing-masing anggota tim dan menjaga kualitas kode. Melakukan pengujian dan debugging pada seluruh modul untuk menjamin stabilitas serta kinerja sistem sebelum tahap deployment."
              ghLink=" "
              demoLink=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Tiket Bioskop"
              description="Mengembangkan aplikasi web pemesanan tiket bioskop secara end-to-end menggunakan HTML, Tailwind CSS, dan JavaScript untuk frontend serta PHP/MySQL untuk backend. Mengimplementasikan CRUD (Create, Read, Update, Delete) untuk manajemen data film, jadwal tayang, kursi, dan transaksi pemesanan. Membangun sistem autentikasi (login & register) dengan manajemen sesi dan validasi input yang aman.Mengoptimalkan performa website serta melakukan testing & debugging agar aplikasi berjalan stabil di berbagai browser."
              ghLink="https://github.com/Hafizhsy/TiketBioskop"         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="English Course"
              description="Mengembangkan platform kursus bahasa Inggris berbasis web yang interaktif, dirancang agar pengguna dapat belajar dengan lebih mudah. Mengimplementasikan antarmuka yang sederhana dan responsif untuk pengalaman belajar yang nyaman."
              ghLink="https://github.com/Hafizhsy/Englishcourse"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Bank Sampah"
              description="Mengembangkan aplikasi Android end-to-end menggunakan Android Studio dengan bahasa Kotlin dan Java. Mendesain UI/UX responsif menggunakan XML Layout, menerapkan Material Design, serta mengintegrasikan aplikasi 1 / 2 dengan Firebase dan REST API untuk sinkronisasi data secara real-time. Mengimplementasikan fitur: pendaftaran dan manajemen, Fitur lokasi pembuangan sampah, memanfaatkan layanan Google Maps API / GPS untuk menampilkan titik drop-off terdekat., pencatatan transaksi penimbangan sampah, perhitungan saldo, dan riwayat penarikan tabungan. Menggunakan SQLite untuk penyimpanan lokal dan mengatur arsitektur MVC/MVVM agar aplikasi lebih modular dan mudah dikembangkan. Melakukan testing dan debugging untuk memastikan aplikasi berjalan stabil di berbagai versi Android. "
              //ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://www.figma.com/design/jEx3rzQvo164ZvwOsHzdH2/Pemob?node-id=0-1&p=f&t=ypfSz4saLYIb6auc-0" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Penyewaan Mobil"
              description="Membangun aplikasi penyewaan mobil dengan fitur pencarian, filter kategori mobil, dan pemesanan secara online. Mengutamakan desain UI/UX yang intuitif agar pengguna dapat menemukan dan memesan kendaraan dengan cepat."
              ghLink=" "
              demoLink="https://www.figma.com/design/hKliMjDejr7LNiH4T4dxPE/UI-penyewaan-Mobil?node-id=0-1&p=f&t=VB1zYIarIbXc9Cn6-0" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
