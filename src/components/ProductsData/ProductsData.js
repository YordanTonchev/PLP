// productsData.js
const productsData = {
  Rifle: [
      { id: '1',
        name: 'F2000S',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/FN_F2000S.JPG',
        description: 'This is a short description of Product 1.',
        price: 1500,
        rating: 4,
      },
      { id: '2',
        name: 'Ak47',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/65/AK-47_type_II_noBG.png',
        description: 'This is a short description of Product 2.',
        price: 2000,
        rating: 5,
      },
      
      { id: '3',
        name: 'M4',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/68/PEO_M4_Carbine_RAS_M68_CCO.png',
        description: 'This is a short description of Product 3.',
        discountedPrice: 250,
        price: 1000,
        rating: 3,
      },
      { id: '4',
        name: 'M1Grand',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/M1_Garand_rifle_USA_noBG_new.png/1200px-M1_Garand_rifle_USA_noBG_new.png',
        description: 'This is a short description of Product4.',
        price: 5000,
        rating: 5,
      },
      { id: '5',
        name: 'M16',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/M16A2_noBG.jpg/1200px-M16A2_noBG.jpg',
        description: 'This is a short description of Product5.',
        price: 2500,
        rating: 4,
      },
      { id: '6',
        name: 'Tavor',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/IWI-Tavor-TAR-21w1.jpg',
        description: 'This is a short description of Product6.',
        price: 2000,
        discountedPrice: 500,
        rating: 3,
      },
      { id: '7',
        name: 'CZ Scorpion',
        image: 'https://www.czub.cz/image/596/53',
        description: 'This is a short description of Product7.',
        price: 3670,
        rating: 4.5,
      },
      { id: '8',
        name: 'Dragunov',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/SVD_Dragunov.jpg',
        description: 'This is a short description of Product8.',
        price: 4000,
        rating: 4,
      },
      { id: '9',
        name: 'HK417',
        image: 'https://www.heckler-koch.com/_assets/thumbnail/1314/product-stage/webp',
        description: 'This is a short description of Product9.',
        price: 2800,
        rating: 3,
      },
      { id: '10',
        name: 'HK433',
        image: 'https://hk-usa.com/wp-content/uploads/MP5-22-Rifle-L-360x180.jpg',
        description: 'This is a short description of Product10.',
        price: 2400,
        rating: 5,
      },
      { id: '11',
        name: 'Uzi',
        image: 'https://cdn.britannica.com/36/125036-050-D680D785/Uzi-submachine-gun.jpg',
        description: 'This is a short description of Product11.',
        price: 2000,
        rating: 5,
      },
      { id: '12',
        name: 'Sig516',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/77/SIG_SG_516_14.5%E2%80%B3.jpg',
        description: 'This is a short description of Product12.',
        price: 3200,
        discountedPrice: 150,
        rating: 4,
      },
      
      
      
    ],
    Spray: [
      { id: '1',
        name: 'Umarex',
        image: 'https://guns.bg/content/images/thumbs/w_1_0096748_sprej-umarex-animal-stop-pepper-spray-15oc-40ml-a-013357_850.jpeg',
        description: 'This is a short description of Product 1.',
        price: 12,
        rating: 3,
      },
      { id: '2',
        name: 'Magnum Compact',
        image: 'https://m.media-amazon.com/images/I/81BM7d8Ic9L._AC_UF1000,1000_QL80_.jpg',
        description: 'This is a short description of Product 2.',
        price: 9,
        rating: 2,
      },
      { id: '3',
        name: 'Sirona',
        image: 'https://m.media-amazon.com/images/I/61QwKCVrr+L.jpg',
        description: 'This is a short description of Product 3.',
        price: 10,
        rating: 4,
      },
      { id: '4',
        name: 'Sabre',
        image: 'https://i5.walmartimages.com/seo/SABRE-Pepper-Spray-with-Plastic-Quick-Release-Keychain-Pink-Color_adb3459b-6196-47e0-949f-9392cdae77a6.06ee0bb7a74d6691cd7332fe58e84523.jpeg',
        description: 'This is a short description of Product 4.',
        price: 13,
        rating: 5,
      },
      { id: '5',
        name: 'Mil-tec Sturm',
        image: 'data:image/jpeg;base64,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',
        description: 'This is a short description of Product 5.',
        price: 13,
        rating: 5,
      },
      { id: '6',
        name: 'Mighty Discreet',
        image: 'https://arms-bg.com/wp-content/uploads/2023/04/lyutiv-sprej-sabre-pepper-spray-mighty-discreet-with-nap-clip-keychain-black.gif',
        description: 'This is a short description of Product 6.',
        price: 11,
        rating: 2,
      },
      { id: '7',
        name: 'Sabre Red Magnum',
        image: 'https://www.bularms.com/images/stories/virtuemart/product/m-60l-oc-oop[1].jpg',
        description: 'This is a short description of Product 7.',
        price: 15,
        rating: 4,
      },
      { id: '8',
        name: 'Sabre Compact',
        image: 'https://guns.bg/content/images/thumbs/w_1_0096688_sprej-sabre-p-22-oc-075oz-doben-s-klips-a-025834_850.jpeg',
        description: 'This is a short description of Product 8.',
        price: 9,
        rating: 3,
      },
      { id: '9',
        name: 'Pepper Spray Gun',
        image: 'https://images-cdn.ubuy.co.in/646b03758479dc20731c600b-brand-self-defense-pepper-spray-gun-2-0.jpg',
        description: 'This is a short description of Product 9.',
        price: 135,
        rating: 5,
      },
      { id: '10',
        name: 'Mace',
        image: 'https://www.isd-bg.com/media/catalog/product/cache/ea00fa92a5880b14d4902b06289b2b7b/0/0/0022188807271-2t.jpg',
        description: 'This is a short description of Product 10.',
        price: 10,
        rating: 3,
      },
      { id: '11',
        name: 'Eliminator',
        image: 'https://majorsurplus.com/media/catalog/product/cache/babc780247512ea5a97270dbec57355b/0/6/06-1247000000.png',
        description: 'This is a short description of Product 11.',
        price: 5,
        rating: 2,
      },
      { id: '12',
        name: 'India',
        image: 'https://cdn01.pharmeasy.in/dam/products_otc/O16598/secure-shield-self-defense-pepper-spray-for-women-safety-protection-pack-of-2-2-1671743990.jpg',
        description: 'This is a short description of Product 12.',
        price: 7,
        rating: 0,
      },
      { id: '13',
        name: 'POM Combo Pack',
        image: 'https://pompepperspray.com/cdn/shop/products/POMPepperSprayFlipTopBlackKeyClipBlack_1200x1200.jpg?v=1625782970',
        description: 'This is a short description of Product 13.',
        price: 18,
        rating: 5,
      },
      
      
    ],
    Pistol: [
      { id: '1',
        name: 'Sig p232',
        image: 'https://cdncloudcart.com/13144/products/images/1151/pistolet-sig-sauer-p232-inox-image_5c94f4191d9c8_1920x1920.jpeg?1569352389',
        description: 'This is a short description of Product 1.',
        price: 1200,
        rating: 4,
      },
      { id: '2',
        name: 'Sig p229',
        image: 'https://cdncloudcart.com/13144/products/images/4034/pistolet-sig-sauer-p229-al-9x19-image_61af21a11c4f9_1280x1280.jpeg?1638943522',
        description: 'This is a short description of Product 2.',
        price: 1350,
        rating: 3,
      },
      
      { id: '3',
        name: 'Sig p320 Duty',
        image: 'https://www.gunnuts.net/wp-content/uploads/2014/01/320-FS-Striker-Hero-1024x906.jpg',
        description: 'This is a short description of Product 3.',
        discountedPrice: 250,
        price: 1400,
        rating: 4.5,
      },
      { id: '4',
        name: 'Glock 19 gen5',
        image: 'https://www.eaglegunrangetx.com/wp-content/uploads/2017/10/g19gen5-900x675.jpg',
        description: 'This is a short description of Product4.',
        price: 1450,
        rating: 5,
      },
      { id: '5',
        name: 'Glock 19 x',
        image: 'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/1200/675/barrieglockg19x3.jpg?ve=1&tl=1',
        description: 'This is a short description of Product5.',
        price: 1550,
        rating: 5,
      },
      { id: '6',
        name: 'Glock 47',
        image: 'https://cdn.athlonoutdoors.com/wp-content/uploads/sites/15/2019/04/glock-47-cbp19.jpg',
        description: 'This is a short description of Product6.',
        price: 1100,
        discountedPrice: 50,
        rating: 3,
      },
      { id: '7',
        name: 'Beretta M9',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/M9-pistolet.jpg',
        description: 'This is a short description of Product7.',
        price: 1600,
        rating: 4.5,
      },
      { id: '8',
        name: 'Beretta APX',
        image: 'https://0isznc85bj26dve98q0gl0q.blob.core.windows.net/hybris/images/700Wx700H/apx_zoom002.webp',
        description: 'This is a short description of Product8.',
        price: 1380,
        rating: 4,
      },
      { id: '9',
        name: 'HK vp9',
        image: 'https://www.eaglegunrangetx.com/wp-content/uploads/2016/03/vp9perspective.jpg',
        description: 'This is a short description of Product9.',
        price: 1800,
        rating: 5,
      },
      { id: '10',
        name: 'Desert Eagel',
        image: 'https://blackstoneshooting.com/wp-content/uploads/2023/04/whcirsrcvbw34eorwozm.jpg',
        description: 'This is a short description of Product10.',
        price: 2200,
        rating: 5,
      },
      { id: '11',
        name: 'Colt M1911',
        image: 'https://ithacagun.com/wp-content/uploads/2017/08/1911-Profit-with-Rosewood-Grips.jpg',
        description: 'This is a short description of Product11.',
        price: 2500,
        rating: 5,
      },
      { id: '12',
        name: 'Stechkin',
        image: 'https://www.forgottenweapons.com/wp-content/uploads/2011/11/Stechkin.jpg',
        description: 'This is a short description of Product12.',
        price: 3200,
        discountedPrice: 150,
        rating: 5,
      },
      { id: '13',
        name: 'Makrov',
        image: 'https://image.invaluable.com/housePhotos/CenturionAuctions/81/709481/H5403-L267251951.jpg',
        description: 'This is a short description of Product13.',
        price: 350,
        rating: 3,
      },
      
    ],
    
  };
  
export default productsData;
  