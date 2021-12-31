const INITIAL_STATE =  {
    sections: [
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/7rr8THs/Outfit-Ideas-Festival-Shred-f5e12f2b-434d-4941-b66b-c613f15f9b78.png',
          id: 1,
          linkUrl: 'shop/womens'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/gtSHScc/Salvia-Droid-Festival-Shred.png',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/MGyckZX/Space-Galaxy-Collection-Festival-Shred.png',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/pPXxZGf/Vajra-Festival-Shred.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
      ],

      nav:[
        {
          title: 'womens',
          id: 1,
          linkUrl: 'shop/womens'
        },
        {
          title: 'accessories',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'men',
          id: 3,
          linkUrl: 'shop/men'
        },
        {
          title: 'visionary artists',
          id: 4,
          linkUrl: 'shop/visionaryartists'
        },
        {
          title: 'free shipping',
          id: 5,
          linkUrl: 'shop/freeshipping'
        },
        {
          title: 'best sellers',
          id: 6,
          linkUrl: 'shop/bestsellers'
        },
        {
          title: 'blog',
          id: 7,
          linkUrl: 'blog'
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