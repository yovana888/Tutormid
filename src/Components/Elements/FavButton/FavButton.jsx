import React, { useState, useEffect } from 'react'
import { FullHeart, EmptyHeart } from './Styles'
import { BsHeart } from 'react-icons/bs';
import { BsHeartFill } from 'react-icons/bs';

const FavButton = () => {
    const [liked, setLiked] = useState(false);
    function handleLiked(isLike) { setLiked(isLike) }

    function isFavorite() { handleLiked(true) }
    function notFavorite() { handleLiked(false) }

    if (!liked) {
        return <EmptyHeart color = "red" onClick={isFavorite} />;
    }
    else {
        return <FullHeart color = "red" onClick={notFavorite} />;
    }
};

export default FavButton;