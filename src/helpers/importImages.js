 export function importImages() {
    const imgCache = {};

    function importAll(r) {
    r.keys().forEach((key) => (imgCache[key] = r(key)));
    }

    importAll(require.context("./assets", false, /\.(png|jpe?g|svg)$/));

    const images = Object.entries(imgCache).map(module => module[1].default);
    
    return images;
}