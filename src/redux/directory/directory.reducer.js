const INITIAL_STATE =  {
    sections: [
        {
          title: 'hats',
          imageUrls: 'https://i.ibb.co/7rr8THs/Outfit-Ideas-Festival-Shred-f5e12f2b-434d-4941-b66b-c613f15f9b78.png',
          id: 1,
          linkUrl: 'shop/accessories'
        },
        {
          title: 'jackets',
          imageUrls: 'https://i.ibb.co/gtSHScc/Salvia-Droid-Festival-Shred.png',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrls: 'https://i.ibb.co/MGyckZX/Space-Galaxy-Collection-Festival-Shred.png',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrls: 'https://i.ibb.co/pPXxZGf/Vajra-Festival-Shred.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
      ]
}

const directoryReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type) {
        default:
            return state;
    }
}

export default directoryReducer