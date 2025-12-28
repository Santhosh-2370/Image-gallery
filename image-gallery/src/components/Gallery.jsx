import ImageCard from "./ImageCard";

const Gallery = () => {
  const images = [
    {
      image: "https://picsum.photos/300/200?1",
      title: "Boxing",
      description: "Just give a punch!!! and the door opens",
    },
    {
      image: "https://picsum.photos/300/200?2",
      title: "MMA",
      description: "More than just boxing",
    },
    {
      image: "https://picsum.photos/300/200?3",
      title: "Kung Fu",
      description: "Relaxing ocean waves",
    },
  ];

  return (
    <div className="gallery">
      {images.map((item, index) => (
        <ImageCard
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Gallery;
