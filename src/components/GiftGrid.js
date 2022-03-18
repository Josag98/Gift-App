import React, { useEffect,useState } from 'react'
import { getGifts } from '../helpers/getGifts';
import {GiftGridItem} from './GiftGridItem';

export const GiftGrid = ({category}) => {
  const [images, setImages] = useState([]);

  

  useEffect(() => {
    getGifts(category).then(imgs => setImages(imgs))
  }, [category]);

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
