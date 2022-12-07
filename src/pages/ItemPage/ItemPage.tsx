import { useState, useEffect } from 'react';
import { Navigate, useLocation, useSearchParams } from 'react-router-dom';
import { getProductById, getProductsByQuery } from '../../api/products';

import { Phone } from '../../types/Phone';
import { PhoneExtended } from '../../types/PhoneExtended';
import { AboutBlock } from '../../components/AboutBlock';
import { Breadcrumbs } from '../../components/Breadcrumbs';
// import { ProductGallery } from '../../components/ProductGallery';
import { CustomPanel } from '../../components/CustomPanel';
import { Loader } from '../../components/Loader';

import './ItemPage.scss';

export const ItemPage = () => {
  const location = useLocation();
  const [phoneInfo, setPhoneInfo] = useState<PhoneExtended | null>(null);
  const [hasError, setHasError] = useState(false);
  const [memory, setMemory] = useState<string | undefined>(phoneInfo?.capacity);
  const [items, setItems] = useState<Phone[]>([]);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const getPhone = async () => {
    try {
      setIsLoading(true);
      const query = location.pathname.toString().slice(8);
      const product = await getProductById(query);
      const products = await getProductsByQuery(searchParams.toString());

      setPhoneInfo(product);
      setMemory(product.capacity);
      setSelectedColor(product.color);
      setItems(products.phones);

      setIsLoading(false);
    } catch (err: any) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPhone();
  }, []);

  if (hasError) {
    return (<Navigate to="/not-found" />);
  }

  return (
    <div className="item-page">
      <div className="container">
        <div className="item-page__breadcrumbs">
          <Breadcrumbs
            breads={[
              { title: 'home', path: '/' },
              { title: `${phoneInfo?.name} (iMT9G2FS/A)`, path: '/item' },
            ]}
          />
        </div>

        {isLoading
          ? (
            <div className="phones-page__loader">
              <Loader />
            </div>
          )
          : (
            <div className="item-page_main">
              <div className="item-page_visual-block">
                {/* <ProductGallery
                      imagePathes={phoneInfo?.images}
                      selectedColor={selectedColor}
                /> */}
                <CustomPanel
                  itemInfo={phoneInfo}
                  buttonName="Add to cart"
                  phones={items}
                  memoryCapacity={memory}
                  setMemoryCapacity={setMemory}
                  selectedColor={selectedColor}
                  setSelectedColor={setSelectedColor}
                />
              </div>

              <AboutBlock
                phoneExtended={phoneInfo}
                capacity={memory}
              />
            </div>
          )}
      </div>
    </div>
  );
};
