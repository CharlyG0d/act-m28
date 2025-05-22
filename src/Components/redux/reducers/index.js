import { combineReducers } from 'redux';

const initialProducts = [
    { id: 1, 
      name: 'Playera Meat Hand Black',
      price: 399,
      img: "https://antifashion.com.mx/cdn/shop/files/E56B643E-E7AF-419F-963A-DDA5FD2C75E9.jpg?v=1731090660&width=823",
    },
    { id: 2, 
      name: 'playera Happy Hour Paja', 
      price: 299,
      img: "https://antifashion.com.mx/cdn/shop/files/15happyhourpajab.jpg?v=1692225248&width=823" 
    },
    { id: 3, 
      name: 'Sudadera Catzilla Negro Cierre', 
      price: 1100,
      img: "https://antifashion.com.mx/cdn/shop/files/WhatsAppImage2024-10-31at1.23.29PM.jpg?v=1730506377&width=823",
    },
    { id: 4, 
      name: 'Mochila Skate Black', 
      price: 699,
      img: "https://antifashion.com.mx/cdn/shop/products/IMG_1931.jpg?v=1668796156&width=823",
    },
    { id: 5, 
      name: 'Mochila Anti Supply Co.', 
      price: 499,
      img: "https://antifashion.com.mx/cdn/shop/products/MG_9438.jpg?v=1669848009&width=823",
    },
    { id: 6, 
      name: 'Mochila skate kaki', 
      price: 699,
      img: "https://antifashion.com.mx/cdn/shop/files/gifsweb-03.jpg?v=1698435507&width=823",
    },
    { id: 7, 
      name: 'Playera Funny Hi Pink', 
      price: 299,
      img: "https://antifashion.com.mx/cdn/shop/files/35funnyhirosabbb.jpg?v=1692226294&width=823",
    },
    { id: 8, 
      name: 'Sudadera Jason Gris Jaspe', 
      price: 699,
      img: "https://antifashion.com.mx/cdn/shop/files/WhatsAppImage2024-10-31at1.39.18PM.jpg?v=1730506627&width=823",
    },
    { id: 9, 
      name: 'Gorra Advisory', 
      price: 450,
      img: "https://antifashion.com.mx/cdn/shop/files/image_d911c05c-c438-4ea8-9718-4891c182c5ac.jpg?v=1685408073&width=823",
    },
    { id: 10, 
      name: 'Gorra Rose', 
      price: 450,
      img: "https://antifashion.com.mx/cdn/shop/files/PhotoRoom_042_20230417_111134p.m..jpg?v=1683047299&width=823",
    },
    { id: 11, 
      name: 'Gorra Eyes Bones', 
      price: 450,
      img: "https://antifashion.com.mx/cdn/shop/files/51c33ba0-255f-4a97-8b66-9a38fdacb3c5.jpg?v=1745616095&width=823",
    },
    { id: 12, 
      name: 'Playera Son Of Weed', 
      price: 299,
      img: "https://antifashion.com.mx/cdn/shop/files/WhatsAppImage2024-07-17at4.35.30PM.jpg?v=1721347427&width=823",
    },
    { id: 13, 
      name: 'Playera Catvana Essential', 
      price: 329,
      img: "https://antifashion.com.mx/cdn/shop/files/26catvananegrob.jpg?v=1689874413&width=823",
    },
    { id: 14, 
      name: 'Playera Broken Board Oxford', 
      price: 299,
      img: "https://antifashion.com.mx/cdn/shop/files/10BROKENBOARDOXFORDA.jpg?v=1709157488&width=823",
    },
    { id: 15, 
      name: 'Playera Monitor Black', 
      price: 299,
      img: "https://antifashion.com.mx/cdn/shop/files/23monitornegrob.jpg?v=1690397572&width=823",
    },
];

// Reducer de productos
const productsReducer = (state = initialProducts, action) => {
    return state;
};

// Reducer del carrito
const cartReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload];
        case 'REMOVE_FROM_CART':
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
});

export default rootReducer;
