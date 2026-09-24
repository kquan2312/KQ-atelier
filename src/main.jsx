import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, ArrowDown, Menu, X, Plus, Minus, Instagram,
  Facebook, Linkedin, MapPin, Mail, Phone
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    no: "01",
    title: "House of Quiet",
    meta: "Residential · Đà Nẵng · 2024",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=88",
    className: "project-large"
  },
  {
    no: "02",
    title: "Mộc / 17",
    meta: "Interior · Hà Nội · 2024",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=88",
    className: "project-small"
  },
  {
    no: "03",
    title: "The Courtyard",
    meta: "Hospitality · Hội An · 2023",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=88",
    className: "project-small"
  },
  {
  no: "04",
  title: "Villa Ninh Bình",
  category: "Architecture / Interior",
  location: "Ninh Bình, Việt Nam",
  year: "2025",
  image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=88"
},
{
  no: "05",
  title: "The Minimal House",
  category: "Residential",
  location: "Hà Nội, Việt Nam",
  year: "2025",
  image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=88"
},
{
  no: "06",
  title: "Maison 27",
  category: "Interior Design",
  location: "Hà Nội, Việt Nam",
  year: "2024",
  image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=88"
},
{
  no: "07",
  title: "Riverside Retreat",
  category: "Architecture",
  location: "Hòa Bình, Việt Nam",
  year: "2024",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=88"
},  
];

const services = [
  ["01", "Kiến trúc", "Từ ý tưởng đến công trình: quy hoạch, kiến trúc và giám sát tác giả."],
  ["02", "Nội thất", "Không gian sống được thiết kế theo nhịp điệu, vật liệu và thói quen của riêng bạn."],
  ["03", "Cải tạo", "Tái cấu trúc những không gian cũ để chúng có một đời sống mới, hợp lý hơn."],
  ["04", "Tư vấn vật liệu", "Bảng vật liệu được tuyển chọn kỹ, ưu tiên độ bền, xúc cảm và nguồn gốc rõ ràng."]
];

const process = [
  ["01", "Lắng nghe", "Hiểu địa điểm, nhu cầu, ngân sách và điều bạn thực sự muốn giữ lại."],
  ["02", "Định hình", "Phát triển concept, mặt bằng và ngôn ngữ vật liệu thành một hệ thống thống nhất."],
  ["03", "Triển khai", "Hồ sơ kỹ thuật, lựa chọn vật liệu và phối hợp với các bên thi công."],
  ["04", "Hoàn thiện", "Theo sát công trình đến những chi tiết cuối cùng trước ngày bàn giao."]
];

const clients = ["VINGROUP", "MỘC", "NEST", "KOVA", "SƠN HÀ", "ANH COFFEE"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
 const [consultationOpen, setConsultationOpen] = useState(false);
 const [showAllProjects, setShowAllProjects] = useState(false);
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site">
      <header className="header">
        <button className="brand" onClick={() => scrollTo("top")} aria-label="Về đầu trang">
          K<span>—</span>Quan
        </button>
        <nav className="desktop-nav">
          <button onClick={() => scrollTo("studio")}>Studio</button>
          <button onClick={() => scrollTo("projects")}>Dự án</button>
          <button onClick={() => scrollTo("services")}>Dịch vụ</button>
          <button onClick={() => scrollTo("contact")}>Liên hệ</button>
        </nav>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Mở menu">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          {["studio", "projects", "services", "process", "contact"].map((id, i) => (
            <button key={id} onClick={() => scrollTo(id)}>
              0{i + 1} / {id === "studio" ? "Studio" : id === "projects" ? "Dự án" : id === "services" ? "Dịch vụ" : id === "process" ? "Quy trình" : "Liên hệ"}
            </button>
          ))}
        </div>
      )}

      <main id="top">
        <section className="hero">
          <div className="hero-image" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow light">ARCHITECTURE / INTERIOR / OBJECT</p>
            <h1>Không gian<br /><em>có chủ đích.</em></h1>
            <div className="hero-bottom">
              <p>K—Quan là studio kiến trúc & nội thất độc lập tại Hà Nội, làm việc với ánh sáng, vật liệu và tỷ lệ để tạo nên những nơi chốn có chiều sâu.</p>
              <button className="circle-link light-circle" onClick={() => scrollTo("studio")} aria-label="Khám phá">
                <ArrowDown size={19} />
              </button>
            </div>
          </div>
          <div className="hero-index">01 <span>/ 09</span></div>
        </section>

        <section className="intro section" id="studio">
          <div className="section-label"><span>01</span><span>Về studio</span></div>
          <div className="intro-grid">
            <div>
              <p className="eyebrow">EST. 2018 · HANOI</p>
              <h2>Chúng tôi không thiết kế<br /><em>nhiều hơn.</em> Chúng tôi<br />thiết kế <em>đúng hơn.</em></h2>
            </div>
            <div className="intro-copy">
              <p className="lead">Một công trình tốt không cần gây ồn ào. Nó cần khiến bạn muốn ở lại lâu hơn.</p>
              <p>K—Quan Atelier theo đuổi kiến trúc có tính bản địa nhưng không hoài cổ; đương đại nhưng không chạy theo xu hướng. Mỗi dự án bắt đầu bằng việc đọc thật kỹ bối cảnh, con người và ánh sáng.</p>
              <button className="text-link" onClick={() => scrollTo("process")}>Cách chúng tôi làm việc <ArrowUpRight size={16} /></button>
            </div>
          </div>
        </section>

        <section className="manifesto">
          <div className="manifesto-image" />
          <div className="manifesto-text">
            <span className="big-quote">“</span>
            <blockquote>Kiến trúc bắt đầu<br />khi chúng ta ngừng<br /><em>trang trí.</em></blockquote>
            <p>— K—Quan Atelier, 2024</p>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="section-label"><span>02</span><span>Dịch vụ</span></div>
          <div className="services-head">
            <h2>Từ đường nét<br />đến <em>đời sống.</em></h2>
            <p>Chúng tôi tham gia từ những câu hỏi đầu tiên đến ngày bạn nhận chìa khóa.</p>
          </div>
          <div className="services-list">
            {services.map(([no, title, desc], i) => (
              <button
                className={`service-row ${activeService === i ? "active" : ""}`}
                key={no}
                // onClick={() => setActiveService(i)}
                onClick={() => setActiveService(activeService === i ? null : i)}
              >
                <span className="service-no">{no}</span>
                <span className="service-title">{title}</span>
                <span className="service-desc">{desc}</span>
                <span className="service-icon">{activeService === i ? <Minus size={18}/> : <Plus size={18}/>}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="section-label"><span>03</span><span>Dự án tiêu biểu</span></div>
          <div className="projects-heading">
            <h2>Một vài nơi<br />chúng tôi <em>đã chạm tới.</em></h2>
                 <button
  type="button"
  className="text-link"
  onClick={() => setShowAllProjects(true)}
>
  Xem toàn bộ dự án
  <ArrowUpRight size={16} />
</button>
          </div>
          <div className="project-grid">
            {projects.slice(0, 2).map((p) => (
              <article className={`project-card ${p.className}`} key={p.no}>
                <div className="project-image-wrap">
                  <img src={p.image} alt={p.title} />
                  <span className="project-no">{p.no}</span>
                  <span className="project-arrow"><ArrowUpRight size={19}/></span>
                </div>
                <div className="project-info">
                  <h3>{p.title}</h3>
                  <p>{p.meta}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        {showAllProjects && (
  <div className="projects-overlay">
    <div className="projects-modal">

      <button
        type="button"
        className="projects-modal-close"
        onClick={() => setShowAllProjects(false)}
        aria-label="Đóng"
      >
        <X size={22} strokeWidth={1.5} />
      </button>

      <div className="projects-modal-head">
        <div>
          <p className="eyebrow">01 / SELECTED WORKS</p>

          <h2>
            Toàn bộ<br />
            <em>dự án.</em>
          </h2>
        </div>

        <span className="projects-count">
          {String(projects.length).padStart(2, "0")} PROJECTS
        </span>
      </div>

      <div className="projects-horizontal">
        {projects.map((p) => (
          <article
            className="project-modal-card"
            key={p.no}
          >
            <div className="project-modal-image">
              <img
                src={p.image}
                alt={p.title}
              />
            </div>

            <div className="project-modal-info">
              <div>
                <span>{p.no}</span>
                <h3>{p.title}</h3>
              </div>

              <div>
                <p>{p.category}</p>
                <p>
                  {p.location} · {p.year}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

    </div>
  </div>
)}

        <section className="process section" id="process">
          <div className="section-label"><span>04</span><span>Quy trình</span></div>
          <div className="process-top">
            <h2>Chậm ở đầu,<br /><em>nhanh về sau.</em></h2>
            <p>Chúng tôi dành nhiều thời gian cho những quyết định đầu tiên để giảm tối đa những thay đổi không cần thiết khi công trình bước vào thực tế.</p>
          </div>
          <div className="process-grid">
            {process.map(([no, title, desc]) => (
              <div className="process-item" key={no}>
                <span>{no}</span>
                <div><h3>{title}</h3><p>{desc}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="team section">
          <div className="section-label"><span>05</span><span>Đội ngũ</span></div>
          <div className="team-grid">
            <div className="team-copy">
              <p className="eyebrow">PEOPLE BEHIND THE WORK</p>
              <h2>Ít người.<br /><em>Nhiều trách nhiệm.</em></h2>
              <p>K—Quan được vận hành bởi một nhóm kiến trúc sư, nhà thiết kế và cộng sự thủ công. Chúng tôi giữ đội ngũ gọn để người làm concept cũng là người hiểu từng chi tiết ở công trường.</p>
            </div>
            <div className="team-photo">
              <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=88" alt="Không gian làm việc của studio" />
              <div className="team-caption"><strong>02 / 07</strong><span>Studio, Hà Nội</span></div>
            </div>
          </div>
        </section>

        <section className="clients section">
          <div className="section-label"><span>06</span><span>Khách hàng / Đối tác</span></div>
          <div className="client-grid">
            {clients.map((client) => <span key={client}>{client}</span>)}
          </div>
        </section>

        <section className="testimonial">
          <div className="testimonial-mark">“</div>
          <div>
            <p className="testimonial-quote">“K—Quan không cố làm căn nhà của chúng tôi trông đắt tiền. Họ làm nó trở nên rất đúng với cách gia đình tôi sống.”</p>
            <div className="testimonial-meta"><span>MINH AN & THUỶ</span><span>— House of Quiet, 2024</span></div>
          </div>
        </section>

        <section className="cta" id="contact">
          <div className="cta-no">07 / 09</div>
          <div className="cta-content">
            <p className="eyebrow light">START A CONVERSATION</p>
            <h2>Một không gian<br /><em>đang chờ bạn.</em></h2>
            <p>Hãy kể chúng tôi nghe về dự án tiếp theo của bạn. Một vài dòng là đủ để bắt đầu.</p>
            <button
  type="button"
  className="cta-button"
  onClick={() => setConsultationOpen(true)}
>
  <span>Đăng ký tư vấn</span>
  <ArrowUpRight size={18} />
</button>
          </div>
          <div className="cta-side">HÀ NỘI<br />21°01' N<br />105°51' E</div>
        </section>
      </main>
            {consultationOpen && (
  <div
    className="consultation-overlay"
    onMouseDown={(e) => {
      if (e.target === e.currentTarget) {
        setConsultationOpen(false);
      }
    }}
  >
    <div className="consultation-modal">

      <button
        type="button"
        className="consultation-close"
        onClick={() => setConsultationOpen(false)}
        aria-label="Đóng form"
      >
        <X size={24} strokeWidth={1.5} />
      </button>

      <div className="consultation-header">
        <p className="eyebrow">
          01 / CONTACT
        </p>

        <h2>
          Đăng ký<br />
          <em>tư vấn.</em>
        </h2>

        <p>
          Chia sẻ một vài thông tin về dự án.
          Chúng tôi sẽ liên hệ lại để trao đổi chi tiết.
        </p>
      </div>

      <form
        className="consultation-form"
        action="https://formsubmit.co/kquan6996@gmail.com"
        method="POST"
      >
        <input
          type="hidden"
          name="_subject"
          value="KQ Atelier — Yêu cầu đăng ký tư vấn"
        />

        <input
          type="hidden"
          name="_captcha"
          value="false"
        />

        <input
          type="hidden"
          name="_template"
          value="table"
        />

        <div className="form-grid">

          <div className="form-field">
            <label>Họ và tên *</label>

            <input
              name="Họ và tên"
              type="text"
              placeholder="Nguyễn Văn A"
              required
            />
          </div>

          <div className="form-field">
            <label>Số điện thoại *</label>

            <input
              name="Số điện thoại"
              type="tel"
              placeholder="090 123 4567"
              required
            />
          </div>

          <div className="form-field">
            <label>Email *</label>

            <input
              name="Email"
              type="email"
              placeholder="email@example.com"
              required
            />
          </div>

          <div className="form-field">
            <label>Loại dự án</label>

            <select
              name="Loại dự án"
              defaultValue=""
            >
              <option value="" disabled>
                Chọn loại dự án
              </option>

              <option>Nhà ở</option>
              <option>Căn hộ</option>
              <option>Nội thất</option>
              <option>Thương mại</option>
              <option>Khách sạn / Resort</option>
              <option>Khác</option>
            </select>
          </div>

          <div className="form-field">
            <label>Ngân sách dự kiến</label>

            <select
              name="Ngân sách dự kiến"
              defaultValue=""
            >
              <option value="" disabled>
                Chọn ngân sách
              </option>

              <option>Dưới 500 triệu</option>
              <option>500 triệu - 1 tỷ</option>
              <option>1 - 3 tỷ</option>
              <option>3 - 5 tỷ</option>
              <option>Trên 5 tỷ</option>
              <option>Chưa xác định</option>
            </select>
          </div>

          <div className="form-field form-field-full">
            <label>Nội dung cần tư vấn *</label>

            <textarea
              name="Nội dung"
              rows="5"
              placeholder="Mô tả ngắn về dự án, diện tích, địa điểm, nhu cầu..."
              required
            />
          </div>

        </div>

        <button
          type="submit"
          className="form-submit"
        >
          <span>Gửi yêu cầu</span>
          <ArrowUpRight
            size={17}
            strokeWidth={1.5}
          />
        </button>

      </form>
    </div>
  </div>
)}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">K<span>—</span>Quan</div>
          <div className="footer-col">
            <span className="footer-label">STUDIO</span>
            <p>106 Tân Mai, Hoàng Mai<br />Hà Nội, Việt Nam</p>
          </div>
          <div className="footer-col">
            <span className="footer-label">CONTACT</span>
            <a href="mailto:kquan6996@gmail.com">kquan6996@gmail.com</a>
            <a href="tel:+842439680888">+84 359508036</a>
          </div>
          <div className="footer-col">
            <span className="footer-label">SOCIAL</span>
            <div className="socials"><a href="https://www.instagram.com/kquan_atelier/" target="_blank" rel="noopener noreferrer"><Instagram size={17}/></a><a href="https://www.facebook.com/wuankdei" target="_blank" rel="noopener noreferrer"><Facebook size={17}/></a><a href="https://www.linkedin.com/in/qu%C3%A2n-l%C3%AA-904373350/" target="_blank" rel="noopener noreferrer"><Linkedin size={17}/></a></div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2024 KQUAN ATELIER. ALL RIGHTS RESERVED.</span>
          <span>ARCHITECTURE / INTERIOR / OBJECT</span>
          <button onClick={() => scrollTo("top")}>Back to top ↑</button>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
