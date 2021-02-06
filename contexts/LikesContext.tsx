import React, { useContext, useState } from 'react';

type LikesContextType = {
    likedProducts: Object;
    likeProduct: (id: string, name: string) => void;
    unlikeProduct: (id: string) => void;
};

const defaultContextValues = {
    likedProducts: {},
    likeProduct: () => {},
    unlikeProduct: () => {},
};

const LikesContext = React.createContext<LikesContextType>(
    defaultContextValues
);

const LikesContextProvider: React.FC = ({ children }) => {
    const [likedProducts, setLikedProducts] = useState({});

    const likeProduct = (id: string, name: string) => {
        setLikedProducts({ ...likedProducts, [id]: name });
    };

    const unlikeProduct = (id: string) => {
        setLikedProducts({ ...likedProducts, [id]: undefined });
    };

    return (
        <LikesContext.Provider
            value={{
                likedProducts,
                likeProduct,
                unlikeProduct,
            }}
        >
            {children}
        </LikesContext.Provider>
    );
};

const useLikesContext = () => useContext(LikesContext);

export { LikesContextProvider, useLikesContext };
