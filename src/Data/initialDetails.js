const initialDetails = [

    {
        id: 1,
        imgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Francishak_Bahushevich_-_bf_1890_AD_grey.jpg/274px-Francishak_Bahushevich_-_bf_1890_AD_grey.jpg',
        name: 'Франциск Богушевич',
        date: '21 марта 1840 - 28 апреля 1900',
        details: 'Белорусский поэт, один из основоположников новой белорусской литературы. Основоположник критического реализма в белорусской литературе.',
        url: '/bogush',
        img1: 'https://www.nlb.by/upload/iblock/21b/af.jpg',
        img2: 'https://libcat.ru/uploads/posts/pictures/187428-bahusevic_tvory_apisannie_630.jpg',
        img3: 'https://www.nlb.by/upload/medialibrary/7bf/bahushevich.jpg',
    },
    {
        id: 2,
        imgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Samui%C5%82_P%C5%82a%C5%ADnik_%28%C5%B9mitrok_Biadula%29._%D0%A1%D0%B0%D0%BC%D1%83%D1%96%D0%BB_%D0%9F%D0%BB%D0%B0%D1%9E%D0%BD%D1%96%D0%BA_%28%D0%97%D1%8C%D0%BC%D1%96%D1%82%D1%80%D0%BE%D0%BA_%D0%91%D1%8F%D0%B4%D1%83%D0%BB%D1%8F%29_%281920-29%29.jpg/255px-Samui%C5%82_P%C5%82a%C5%ADnik_%28%C5%B9mitrok_Biadula%29._%D0%A1%D0%B0%D0%BC%D1%83%D1%96%D0%BB_%D0%9F%D0%BB%D0%B0%D1%9E%D0%BD%D1%96%D0%BA_%28%D0%97%D1%8C%D0%BC%D1%96%D1%82%D1%80%D0%BE%D0%BA_%D0%91%D1%8F%D0%B4%D1%83%D0%BB%D1%8F%29_%281920-29%29.jpg',
        name: 'Змитрок Бядуля',
        date: '23 апреля 1886 года - 3 ноября 1941 года',
        details: 'Белорусский и советский писатель и поэт, лексикограф.',
        img1: 'https://www.nlb.by/upload/medialibrary/cd9/zbkrytykatitul.jpg',
        img2: 'https://kurjer.info/wp-content/uploads/2021/06/210614_byadulya.jpg',
        img3: 'https://s14.stc.yc.kpcdn.net/share/i/12/11248093/de-1200x900.jpg',
        url: '/bidulya',
    },
    {
        id: 3,
        imgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/%D0%9C._%D0%93%D1%83%D1%81%D0%B5%D1%9E._%D0%9F%D1%8F%D1%82%D1%80%D1%83%D1%81%D1%8C_%D0%91%D1%80%D0%BE%D1%9E%D0%BA%D0%B0.jpg/274px-%D0%9C._%D0%93%D1%83%D1%81%D0%B5%D1%9E._%D0%9F%D1%8F%D1%82%D1%80%D1%83%D1%81%D1%8C_%D0%91%D1%80%D0%BE%D1%9E%D0%BA%D0%B0.jpg',
        name: 'Петрусь Бровка',
        date: '25 июня 1905 года - 24 марта 1980 года',
        details: 'Белорусский советский писатель, поэт и переводчик, драматург, публицист. Народный поэт Белорусской ССР. Герой Социалистического Труда. Академик АН БССР. Лауреат Ленинской и двух Сталинских премий.',
        img1: 'https://i.ytimg.com/vi/LozL_I6RlxA/maxresdefault.jpg',
        img2: 'https://zviazda.by/sites/default/files/field/image/28-19_kopiya.jpg',
        img3: 'https://www.sb.by/upload/medialibrary/a34/a347fe9cba099a1919f282b664639721.jpg',
        url: '/brovka',
    },
    {
        id: 4,
        imgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Bagdanovich_M_2.jpg/274px-Bagdanovich_M_2.jpg',
        name: 'Максим Богданович',
        date: '9 декабря 1891 года - 25 мая 1917 года',
        details: 'Белорусский поэт, публицист, литературовед, переводчик; классик белорусской литературы, один из создателей белорусской литературы и современного литературного белорусского языка.',
        img1: 'https://www.belta.by/images/storage/news/with_archive/2021/000027_1639072334_474040_big.jpg',
        img2: 'https://www.sb.by/upload/iblock/e7a/e7aa52227a7ba2453c5282dd5521844e.jpg',
        img3: 'https://grodnonews.by/upload/resize_cache/iblock/e00/924_560_2/e004ec4bb4f6f33eb112b2e4b26bcbb5.jpg',
        url: '/bogdanovich',
    },
    {
        id: 5,
        imgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Kanstantyn_Mickievi%C4%8D_%28Jakub_Ko%C5%82as%29._%D0%9A%D0%B0%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D1%8B%D0%BD_%D0%9C%D1%96%D1%86%D0%BA%D0%B5%D0%B2%D1%96%D1%87_%28%D0%AF%D0%BA%D1%83%D0%B1_%D0%9A%D0%BE%D0%BB%D0%B0%D1%81%29_%281925%29.jpg/640px-Kanstantyn_Mickievi%C4%8D_%28Jakub_Ko%C5%82as%29._%D0%9A%D0%B0%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D1%8B%D0%BD_%D0%9C%D1%96%D1%86%D0%BA%D0%B5%D0%B2%D1%96%D1%87_%28%D0%AF%D0%BA%D1%83%D0%B1_%D0%9A%D0%BE%D0%BB%D0%B0%D1%81%29_%281925%29.jpg',
        name: 'Якуб Колос',
        date: '3 ноября 1882 года - 13 августа 1956 года',
        details: 'Белорусский советский писатель, драматург, поэт и переводчик, общественный деятель. Один из классиков и основоположников новой белорусской литературы. Народный поэт Белорусской ССР. Академик АН Белорусской ССР. Член СП СССР. Заслуженный деятель науки Белорусской ССР.',
        img1: 'http://problr.by/images/pro_belarus/izvestnye_ludi/Yakub_Kolas_1.jpg',
        img2: 'https://zviazda.by/sites/default/files/17-15_8.jpg',
        img3: 'http://gdetut.by/uploads/posts/2018-08/1535091166_muzej_gosudarstvennyj-literaturnyj-m_minsk-akademicheskaya-5_about_19.jpg',
        url: '/kolos',
    },

];

export default initialDetails;