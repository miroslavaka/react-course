import React from 'react';
import avatar from '../../../assets/default-avatar.svg';

const Person = ({ name, nickName = 'shakeAndBake', images }) => {
  //const img = images && images[0] && images[0].small && images[0].small.url;
  //👇
  //👇
  //const img = images?.[0]?.small?.url || avatar;
  const img = images?.[0]?.small?.url ?? avatar;
  return (
    <div>
      <h2>{name}</h2>
      <h4>Nickname: {nickName}</h4>
      <img src={img} alt={name} style={{ width: '100px' }} />
    </div>
  );
};
export default Person;
