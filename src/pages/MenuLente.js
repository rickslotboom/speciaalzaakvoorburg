import React from "react";
 
export default function Menu() {
  const menuImages = [
    { src: "/images/menuvoorblad.jpg", alt: "Menu voorblad – De Speciaalzaak" },
    { src: "/images/menulunch.jpg",    alt: "Lunch menukaart – De Speciaalzaak" },
    { src: "/images/menudranken.jpg",  alt: "Dranken menukaart – De Speciaalzaak" },
    { src: "/images/menuborrel.jpg",   alt: "Borrel menukaart – De Speciaalzaak" },
  ];
 
  return (
    <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
      {menuImages.map((img) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          style={{ width: "100%", display: "block" }}
        />
      ))}
    </div>
  );
}
 