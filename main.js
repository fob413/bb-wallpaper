document.addEventListener('DOMContentLoaded', function () {
    var background = document.getElementById('mainPage');

    var backgroundImages = [
        "url('https://res.cloudinary.com/dcq9wirxq/image/upload/v1610403816/bb-wallpaper/photo-1584770557404-a5d2a798e81a_nzff4c.jpg')",
        "url('https://res.cloudinary.com/dcq9wirxq/image/upload/v1610403816/bb-wallpaper/photo-1528310560603-c57f1683b21c_vuojds.jpg')",
        "url('https://res.cloudinary.com/dcq9wirxq/image/upload/v1610403816/bb-wallpaper/photo-1564172336099-704094986046_gvqr1i.jpg')",
        "url('https://res.cloudinary.com/dcq9wirxq/image/upload/v1610403815/bb-wallpaper/photo-1603030908455-4a4588c0acdd_rxrsnn.jpg')",
        "url('https://res.cloudinary.com/dcq9wirxq/image/upload/v1610403814/bb-wallpaper/photo-1518407613690-d9fc990e795f_tml7ga.jpg')",
        "url('https://res.cloudinary.com/dcq9wirxq/image/upload/v1610403814/bb-wallpaper/photo-1516389573391-5620a0263801_zd8dul.jpg')",
        "url('https://res.cloudinary.com/dcq9wirxq/image/upload/v1610403814/bb-wallpaper/photo-1552984418-b55abf780dd4_hdyfot.jpg')",
        "url('https://res.cloudinary.com/dcq9wirxq/image/upload/v1610403814/bb-wallpaper/photo-1526485797145-514b2fe83749_wqn03z.jpg')",
        "url('https://res.cloudinary.com/dcq9wirxq/image/upload/v1610403814/bb-wallpaper/photo-1474494819794-90f9664b530d_zowpbm.jpg')",
        "url('https://res.cloudinary.com/dcq9wirxq/image/upload/v1610403814/bb-wallpaper/photo-1519861531473-9200262188bf_yrmhff.jpg')",
        "url('https://res.cloudinary.com/dcq9wirxq/image/upload/v1610404371/bb-wallpaper/jc-gellidon-XmYSlYrupL8-unsplash_c8nn8u.jpg')"
    ]

    background.style.backgroundImage = backgroundImages[Math.floor(Math.random() * 11)];
}, false);