import Contact from "./Contact";

export default function Footer() {
  const items = ["Terms & Policies", "Support"];

  return (
    <>
      <footer>
        <Contact />
        <div className="footer">
          <span>&copy; 2022 I Publication . All rights reserved </span>
        </div>
      </footer>
    </>
  );
}
