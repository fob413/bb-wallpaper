document.addEventListener('DOMContentLoaded', function () {
    var background = document.getElementById('mainPage');

    var backgroundImages = [
        "url('https://images.unsplash.com/photo-1474494819794-90f9664b530d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80')",
        "url('https://images.unsplash.com/photo-1518407613690-d9fc990e795f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
        "url('https://images.unsplash.com/photo-1584770557404-a5d2a798e81a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1331&q=80')",
        "url('https://images.unsplash.com/photo-1552984418-b55abf780dd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
        "url('https://images.unsplash.com/photo-1603030908455-4a4588c0acdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
        "url('https://images.unsplash.com/photo-1526485797145-514b2fe83749?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
        "url('https://images.unsplash.com/photo-1528310560603-c57f1683b21c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
        "url('https://images.unsplash.com/photo-1564172336099-704094986046?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1491&q=80')",
        "url('https://images.unsplash.com/photo-1516389573391-5620a0263801?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
        "url('https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80')"
    ]

    background.style.backgroundImage = backgroundImages[Math.floor(Math.random() * 10)];
}, false);