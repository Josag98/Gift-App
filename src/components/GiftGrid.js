import React, { useEffect,useState } from 'react'
import {GiftGridItem} from './GiftGridItem';

export const GiftGrid = ({category}) => {
  const [images, setImages] = useState([]);

  const getGifts = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
      category
    )}&limit=10&api_key=vIOdHEqSLHLMFqxkkq6PMogte5XD2c21`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifts = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    setImages(gifts);
  };

  useEffect(() => {
    getGifts();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((img) => {
          return <GiftGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
}
