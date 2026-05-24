import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    "home",
    "about",
    "skills",
    "projects",
    "contact",
  ];

  useEffect(() => {

    const handleScroll = () => {

      const sections = navLinks.map((id) =>
        document.getElementById(id)
      );

      sections.forEach((section) => {

        if (section) {

          const top = section.offsetTop - 150;
          const height = section.offsetHeight;
          const scrollY = window.scrollY;

          if (
            scrollY >= top &&
            scrollY < top + height
          ) {
            setActiveSection(section.id);
          }

        }

      });

    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <nav
      className="
        fixed
        top-0
        w-full
        z-50
        bg-white/70
        backdrop-blur-md
        border-b
        border-gray-200
      "
    >

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="flex items-center justify-between h-20">

          {/* LOGO */}

          <a href="#home">

            <h1 className="text-2xl font-bold text-slate-800">

              Durga Prasad Polisetty.

            </h1>

          </a>

          {/* DESKTOP MENU */}

          <ul className="hidden md:flex gap-10">

            {navLinks.map((link) => (

              <a
                key={link}
                href={`#${link}`}
              >

                <li
                  className={`
                    capitalize
                    relative
                    font-medium
                    transition-all
                    duration-300
                    hover:text-orange-400
                    ${
                      activeSection === link
                        ? "text-orange-400"
                        : "text-slate-700"
                    }
                  `}
                >

                  {link === "timeline"
                    ? "Journey"
                    : link}

                  {/* ACTIVE LINE */}

                  {activeSection === link && (

                    <span
                      className="
                        absolute
                        left-0
                        -bottom-2
                        w-full
                        h-[2px]
                        bg-orange-400
                        rounded-full
                      "
                    />

                  )}

                </li>

              </a>

            ))}

          </ul>

          {/* MOBILE ICON */}

          <button
            className="md:hidden text-2xl text-slate-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >

            {menuOpen ? <FaTimes /> : <FaBars />}

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}

      {menuOpen && (

        <div
          className="
            md:hidden
            bg-white
            shadow-lg
            px-6
            py-6
          "
        >

          <ul className="flex flex-col gap-6">

            {navLinks.map((link) => (

              <a
                key={link}
                href={`#${link}`}
                onClick={() => setMenuOpen(false)}
              >

                <li
                  className={`
                    capitalize
                    font-medium
                    transition
                    ${
                      activeSection === link
                        ? "text-orange-400"
                        : "text-slate-700"
                    }
                  `}
                >

                  {link === "timeline"
                    ? "Journey"
                    : link}

                </li>

              </a>

            ))}

          </ul>

        </div>

      )}

    </nav>
  );
}

export default Navbar;