import React from "react";

import { useNavigate } from 'react-router';

import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss"


class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections:[
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
        };
    }

        render(){
            return(
                <div className="directory-menu">
                    {
                        this.state.sections.map(({ imageUrls, id}) => (
                            <MenuItem key={id} imageUrl={imageUrls} />
                        ))
                    }
                </div>
            )
        }
    }

export default Directory