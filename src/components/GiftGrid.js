import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifts';
// import { getGifts } from '../helpers/getGifts';
import {GiftGridItem} from './GiftGridItem';

export const GiftGrid = ({category}) => {
 

  const {data:images,loading}= useFetchGifts(category)

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
